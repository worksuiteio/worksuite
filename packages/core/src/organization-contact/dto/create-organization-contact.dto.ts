import { IntersectionType } from "@nestjs/swagger";
import { IOrganizationContactCreateInput } from "@worksuite/contracts";
import { OrganizationContactDTO } from "./organization-contact.dto";
import { RelationalTagDTO } from "./../../tags/dto";

/**
 * Create Organization Contact DTO request validation
 */
export class CreateOrganizationContactDTO extends IntersectionType(
    OrganizationContactDTO,
    RelationalTagDTO
) implements IOrganizationContactCreateInput {}