import { IApprovalPolicyUpdateInput } from "@worksuite/contracts";
import { ApprovalPolicyDTO } from "./approval-policy.dto";

/**
 * Update approval policy request DTO validation
 */
export class UpdateApprovalPolicyDTO extends ApprovalPolicyDTO
    implements IApprovalPolicyUpdateInput {}