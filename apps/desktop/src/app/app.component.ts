import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { ElectronService, Store } from '@worksuite/desktop-ui-lib';
import { AppService } from './app.service';

@Component({
	selector: 'gauzy-root',
	template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, AfterViewInit {
	private _isInitialized: boolean;
	constructor(
		private _electronService: ElectronService,
		private _appService: AppService,
		private _ngZone: NgZone,
		private _store: Store
	) {
		this._isInitialized = false;
	}
	ngAfterViewInit(): void {
		this._electronService.ipcRenderer.on(
			'auth_success_tray_init',
			(event, arg) => {
				this._ngZone.run(() => {
					if (arg) {
						this._store.user = arg.user;
						this._store.userId = arg.userId;
						this._store.token = arg.token;
						this._store.organizationId = arg.organizationId;
						this._store.tenantId = arg.tenantId;
						if (!this._isInitialized) {
							this._electronService.ipcRenderer.send(
								'app_is_init'
							);
							this._isInitialized = true;
						}
					}
				});
			}
		);

		this._electronService.ipcRenderer.on('collect_data', (event, arg) => {
			this._ngZone.run(() =>
				this._appService
					.collectEvents(arg.tpURL, arg.tp, arg.start, arg.end)
					.then((res) => {
						event.sender.send('data_push_activity', {
							timerId: arg.timerId,
							windowEvent: res,
							type: 'APP',
						});
					})
			);
		});

		this._electronService.ipcRenderer.on('collect_afk', (event, arg) => {
			this._ngZone.run(() => {
				this._appService
					.collectAfk(arg.tpURL, arg.tp, arg.start, arg.end)
					.then((res) => {
						event.sender.send('data_push_activity', {
							timerId: arg.timerId,
							windowEvent: res,
							type: 'AFK',
						});
					});
			});
		});

		this._electronService.ipcRenderer.on(
			'collect_chrome_activities',
			(event, arg) => {
				this._ngZone.run(() => {
					this._appService
						.collectChromeActivityFromAW(
							arg.tpURL,
							arg.start,
							arg.end
						)
						.then((res) => {
							event.sender.send('data_push_activity', {
								timerId: arg.timerId,
								windowEvent: res,
								type: 'URL',
							});
						});
				});
			}
		);

		this._electronService.ipcRenderer.on(
			'collect_firefox_activities',
			(event, arg) => {
				this._ngZone.run(() => {
					this._appService
						.collectFirefoxActivityFromAw(
							arg.tpURL,
							arg.start,
							arg.end
						)
						.then((res) => {
							event.sender.send('data_push_activity', {
								timerId: arg.timerId,
								windowEvent: res,
								type: 'URL',
							});
						});
				});
			}
		);

		this._electronService.ipcRenderer.on('set_time_sheet', (event, arg) => {
			this._ngZone.run(() => {
				this._appService.pushToTimesheet(arg).then((res: any) => {
					arg.timesheetId = res.id;
					this._appService.setTimeLog(arg).then((result: any) => {
						event.sender.send('return_time_sheet', {
							timerId: arg.timerId,
							timeSheetId: res.id,
							timeLogId: result.id,
						});
					});
				});
			});
		});

		this._electronService.ipcRenderer.on(
			'update_time_sheet',
			(event, arg) => {
				this._ngZone.run(() => {
					this._appService.updateToTimeSheet(arg).then((res: any) => {
						this._appService.updateTimeLog(arg);
					});
				});
			}
		);

		this._electronService.ipcRenderer.on(
			'set_auth_user',
			(event, arg) => { }
		);

		this._electronService.ipcRenderer.on('set_time_slot', (event, arg) => {
			this._ngZone.run(() => {
				this._appService
					.pushToTimeSlot(arg)
					.then((res: any) => {
						if (res.id) {
							event.sender.send('remove_aw_local_data', {
								idsAw: arg.idsAw,
							});
							event.sender.send('remove_wakatime_local_data', {
								idsWakatime: arg.idsWakatime,
							});
							if (arg.idAfk) {
								event.sender.send('remove_afk_local_Data', {
									idAfk: arg.idAfk,
								});
							}
							const timeLogs = res.timeLogs;
							event.sender.send('return_time_slot', {
								timerId: arg.timerId,
								timeSlotId: res.id,
								quitApp: arg.quitApp,
								timeLogs: timeLogs,
							});
						}
					})
					.catch((e) => {
						event.sender.send('failed_save_time_slot', {
							params: e.error.params,
							message: e.message,
						});
					});
			});
		});

		this._electronService.ipcRenderer.on(
			'update_time_slot',
			(event, arg) => {
				this._ngZone.run(() => {
					this._appService.updateToTimeSlot(arg);
				});
			}
		);

		this._electronService.ipcRenderer.on('set_activity', (event, arg) => {
			this._ngZone.run(() => {
				this._appService.pushToActivity(arg).then((res: any) => {
					event.sender.send('return_activity', {
						activityIds: arg.sourceIds,
					});
				});
			});
		});

		this._electronService.ipcRenderer.on(
			'update_to_activity',
			(event, arg) => {
				this._ngZone.run(() => {
					this._appService.updateToActivity(arg);
				});
			}
		);

		this._electronService.ipcRenderer.on('set_time_log', (event, arg) => {
			this._ngZone.run(() => {
				this._appService.setTimeLog(arg).then((res: any) => {
					event.sender.send('return_time_log', {
						timerId: arg.timerId,
						timeLogId: res.id,
					});
				});
			});
		});

		this._electronService.ipcRenderer.on(
			'update_time_log_stop',
			(event, arg) => {
				this._ngZone.run(() => {
					console.log('time log stop');
					this._appService.updateTimeLog(arg);
				});
			}
		);

		this._electronService.ipcRenderer.on('time_toggle', (event, arg) => {
			this._ngZone.run(() => {
				this._appService.stopTimer(arg).then((res) => {
					event.sender.send('return_toggle_api', {
						result: res,
						timerId: arg.timerId,
					});
				});
			});
		});

		this._electronService.ipcRenderer.on(
			'update_toggle_timer',
			(event, arg) => {
				this._ngZone.run(() => {
					this._appService
						.stopTimer(arg)
						.then(() => {
							event.sender.send('timer_stopped');
						})
						.catch((e) => {
							console.log('error catcher', e);
							event.sender.send('timer_stopped');
						});
				});
			}
		);

		this._electronService.ipcRenderer.on('server_ping', (event, arg) => {
			const pingHost = setInterval(() => {
				this._ngZone.run(() => {
					this._appService
						.pingServer(arg)
						.then((res) => {
							console.log('server found');
							event.sender.send('server_is_ready');
							clearInterval(pingHost);
						})
						.catch((e) => {
							console.log('error', e.status);
							if (this._store.userId) {
								clearInterval(pingHost);
							}
						});
				}, 1000);
			});
		});

		this._electronService.ipcRenderer.on(
			'upload_screen_shot',
			(event, arg) => {
				this._ngZone.run(() => {
					this._appService.uploadScreenCapture(arg).then((res) => {
						console.log('screen upload', res);
					});
				});
			}
		);

		this._electronService.ipcRenderer.on(
			'server_ping_restart',
			(event, arg) => {
				this._ngZone.run(() => {
					const pingHost = setInterval(() => {
						this._appService
							.pingServer(arg)
							.then((res) => {
								console.log('server found');
								event.sender.send('server_already_start');
								clearInterval(pingHost);
							})
							.catch((e) => {
								console.log('error', e.status);
								if (this._store.userId) {
									clearInterval(pingHost);
								}
							});
					}, 3000);
				});
			}
		);
	}

	ngOnInit(): void {
		console.log('on init');
	}
}
