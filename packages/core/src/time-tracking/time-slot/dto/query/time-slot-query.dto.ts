import { IntersectionType } from "@nestjs/swagger";
import { IGetTimeSlotInput } from "@worksuite/contracts";
import { FiltersQueryDTO, RelationsQueryDTO, SelectorsQueryDTO } from "./../../../../shared/dto";

/**
 * Get time slot request DTO validation
 */
export class TimeSlotQueryDTO extends IntersectionType(
    FiltersQueryDTO,
    IntersectionType(RelationsQueryDTO, SelectorsQueryDTO)
) implements IGetTimeSlotInput {}