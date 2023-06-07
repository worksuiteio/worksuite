import { IIssueTypeCreateInput } from '@worksuite/contracts';
import { IntersectionType, PartialType } from '@nestjs/swagger';
import { TenantOrganizationBaseDTO } from '../../../core/dto';
import { IssueType } from '../issue-type.entity';

export class CreateIssueTypeDTO extends IntersectionType(
    PartialType(TenantOrganizationBaseDTO),
    IssueType
) implements IIssueTypeCreateInput { }
