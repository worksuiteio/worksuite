import { NgModule } from '@angular/core';
import {
	NbButtonModule,
	NbIconModule,
	NbCardModule,
	NbListModule,
	NbDialogModule
} from '@nebular/theme';
import { Store } from '../../../@core/services/store.service';
import { ThemeModule } from '../../../@theme/theme.module';
import { WorksuiteEditableGridComponent } from './gauzy-editable-grid.component';
import { TranslateModule } from '../../translate/translate.module';
import { WorksuiteButtonActionModule } from '../../gauzy-button-action/gauzy-button-action.module';

const NbModules = [
	NbButtonModule,
	NbIconModule,
	NbCardModule,
	NbListModule,
	NbDialogModule.forChild()
];

const OtherModules = [
	WorksuiteButtonActionModule
]

@NgModule({
	imports: [ThemeModule, ...NbModules, ...OtherModules, TranslateModule],
	declarations: [WorksuiteEditableGridComponent],
	exports: [WorksuiteEditableGridComponent],
	providers: [Store]
})
export class WorksuiteEditableGridModule {}
