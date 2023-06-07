import { IntersectionType, PartialType, PickType } from "@nestjs/swagger";
import { IGetJobPresetInput } from "@worksuite/contracts";
import { TenantOrganizationBaseDTO } from "./../../core/dto";
import { EmployeeFeatureDTO } from "./../../employee/dto";

export class JobPresetQuerDTO extends IntersectionType(
    TenantOrganizationBaseDTO,
    PartialType(
        PickType(EmployeeFeatureDTO, ['employeeId'])
    )
) implements IGetJobPresetInput { }
