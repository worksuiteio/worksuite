import { IResetPasswordRequest } from "@worksuite/contracts";
import { UserEmailDTO } from "./../../user/dto";

/**
 * Reset Password Request DTO validation
 */
export class ResetPasswordRequestDTO extends UserEmailDTO implements IResetPasswordRequest {}