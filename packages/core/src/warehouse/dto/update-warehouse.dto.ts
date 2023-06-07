import { IWarehouse } from "@worksuite/contracts";
import { WarehouseDTO } from "./warehouse.dto";

/**
 * Update warehouse request DTO validation
 */
export class UpdateWarehouseDTO extends WarehouseDTO implements IWarehouse {}