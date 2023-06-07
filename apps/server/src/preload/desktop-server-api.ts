import { fork } from 'child_process';
import { LocalStore } from '@worksuite/desktop-libs';

export interface IEnvApi {
    IS_ELECTRON: string,
    DB_PATH: string,
    DB_TYPE: string,
    DB_HOST: string,
    DB_PORT: string,
    DB_NAME: string,
    DB_USER: string,
    DB_PASS: string,
    API_PORT: string,
    API_HOST: string,
    API_BASE_URL: string
}


const runServerApi = () => {
    const { apiPath, db, dbName, dbPassword, dbUsername, dbPort, port, dbPath, dbHost, apiBaseUrl, apiHost } = prepareServerApi();
    const apiEnv: IEnvApi = {
        IS_ELECTRON: 'true',
        DB_PATH: dbPath,
        DB_TYPE: db,
        DB_HOST: dbHost,
        DB_PORT: String(dbPort),
        DB_NAME: dbName,
        DB_USER: dbUsername,
        DB_PASS: dbPassword,
        API_PORT: String(port),
        API_HOST: apiHost,
        API_BASE_URL: apiBaseUrl
    }
    const uiService = fork(apiPath, {
        silent: true, detached: true, env: {
            ...process.env,
            IS_ELECTRON: apiEnv.IS_ELECTRON
    }});
    uiService.stdout.on('data', (data) => {
        console.log('SERVER API STATE LOGS -> ', data.toString());
        uiService.unref();
        process.exit(0);
    });
}

const prepareServerApi = (): {
    apiPath: string,
    db: string,
    dbPort: number | null,
    dbName: string | null,
    dbUsername: string | null,
    dbPassword: string | null,
    port: number,
    dbPath: string,
    dbHost: string | null,
    apiBaseUrl: string,
    apiHost: string
} => {
    const {
        port,
        db,
        apiPath,
        dbPath,
        postgres,
        apiBaseUrl
    } = LocalStore.getStore('configs');
    return {
        apiPath,
        db,
        dbPort: postgres?.dbPort || null,
        dbName: postgres?.dbName || null,
        dbPassword: postgres?.dbPassword || null,
        dbUsername: postgres?.dbUsername || null,
        dbHost: postgres?.dbHost || null,
        port,
        dbPath,
        apiBaseUrl,
        apiHost: '0.0.0.0'
    };
}

export default function () {
    console.log('Before Run Api Server');
    runServerApi();
}
