import { ITimerToggleInput } from "@worksuite/contracts";
import { StartTimerDTO } from "./start-timer.dto";

export class StopTimerDTO extends StartTimerDTO implements ITimerToggleInput {}