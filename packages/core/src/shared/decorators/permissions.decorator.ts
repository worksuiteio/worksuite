import { SetMetadata } from '@nestjs/common';
import { PERMISSIONS_METADATA } from '@worksuite/common';
import { PermissionsEnum } from '@worksuite/contracts';

export const Permissions = (...permissions: PermissionsEnum[]) => SetMetadata(PERMISSIONS_METADATA, permissions);