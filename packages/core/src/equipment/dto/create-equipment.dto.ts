import { IEquipment } from "@worksuite/contracts";
import { IntersectionType } from "@nestjs/mapped-types";
import { RelationalCurrencyDTO } from "./../../currency/dto";
import { RelationalTagDTO } from "./../../tags/dto";
import { EquipmentDTO } from "./equipment.dto";

export class CreateEquipmentDTO extends IntersectionType(
    EquipmentDTO,
    RelationalTagDTO,
    RelationalCurrencyDTO
) implements IEquipment {}