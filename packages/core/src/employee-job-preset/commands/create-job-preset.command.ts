import { IJobPreset } from '@worksuite/contracts';
import { ICommand } from '@nestjs/cqrs';

export class CreateJobPresetCommand implements ICommand {
	static readonly type = '[JobPreset] Create';

	constructor(public readonly input?: IJobPreset) {}
}
