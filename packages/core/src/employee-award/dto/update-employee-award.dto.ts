import { IEmployeeAwardUpdateInput } from "@worksuite/contracts";
import { IsNotEmpty } from "class-validator";
import { TenantOrganizationBaseDTO } from "./../../core/dto";

/**
 * Update employee award DTO validation
 */
export class UpdateEmployeeAwardDTO extends TenantOrganizationBaseDTO
    implements IEmployeeAwardUpdateInput {

	@IsNotEmpty()
	readonly name: string;

	@IsNotEmpty()
	readonly year: string;
}