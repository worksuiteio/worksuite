import { IEmployeeProposalTemplate } from "@worksuite/contracts";
import { IntersectionType } from "@nestjs/mapped-types";
import { EmployeeFeatureDTO } from "./../../employee/dto";
import { ProposalTemplateDTO } from "./proposal-template.dto";

/**
 * Create proposal template request DTO validation
 *
 */
export class CreateProposalTemplateDTO extends IntersectionType(
    ProposalTemplateDTO,
    EmployeeFeatureDTO
) implements IEmployeeProposalTemplate {}