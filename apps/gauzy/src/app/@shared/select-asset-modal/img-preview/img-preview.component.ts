import { Component, Input } from '@angular/core';
import { IImageAsset } from '@worksuite/contracts';

@Component({
	selector: 'ngx-img-preview',
	templateUrl: './img-preview.component.html',
	styleUrls: ['./img-preview.component.scss']
})
export class ImagePreviewComponent {
	@Input()
	selectedImage: IImageAsset;
}
