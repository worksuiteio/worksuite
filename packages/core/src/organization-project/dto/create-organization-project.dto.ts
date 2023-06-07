import { IntersectionType } from "@nestjs/swagger";
import { IOrganizationProjectsCreateInput } from "@worksuite/contracts";
import { TenantOrganizationBaseDTO } from "./../../core/dto";
import { OrganizationProjectDTO } from "./organization-project.dto";

/**
 * Create Organization Project DTO request validation
 */
export class CreateOrganizationProjectDTO extends IntersectionType(
    OrganizationProjectDTO,
    TenantOrganizationBaseDTO
) implements IOrganizationProjectsCreateInput {}