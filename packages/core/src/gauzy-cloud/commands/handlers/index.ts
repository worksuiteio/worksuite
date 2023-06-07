import { WorksuiteCloudOrganizationMigrateHandler } from './gauzy-cloud-organization.migrate.handler';
import { WorksuiteCloudTenantMigrateHandler } from './gauzy-cloud-tenant.migrate.handler';
import { WorksuiteCloudUserMigrateHandler } from './gauzy-cloud-user.migrate.handler';

export const CommandHandlers = [
    WorksuiteCloudUserMigrateHandler,
    WorksuiteCloudTenantMigrateHandler,
    WorksuiteCloudOrganizationMigrateHandler
];
