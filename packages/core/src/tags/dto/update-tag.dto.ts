import { IntersectionType, PartialType, PickType } from '@nestjs/swagger';
import { ITagUpdateInput } from '@worksuite/contracts';
import { TenantOrganizationBaseDTO } from './../../core/dto';
import { Tag } from './../tag.entity';

export class UpdateTagDTO extends IntersectionType(
    PartialType(TenantOrganizationBaseDTO),
    PartialType(PickType(Tag, ['name', 'description', 'color', 'icon', 'organizationTeamId'])),
) implements ITagUpdateInput { }
