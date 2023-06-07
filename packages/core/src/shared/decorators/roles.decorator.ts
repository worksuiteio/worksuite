import { CustomDecorator, SetMetadata } from '@nestjs/common';
import { ROLES_METADATA } from '@worksuite/common';
import { RolesEnum } from '@worksuite/contracts';

export const Roles = (...roles: RolesEnum[]): CustomDecorator => SetMetadata(ROLES_METADATA, roles);