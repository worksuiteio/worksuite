import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksuiteButtonActionComponent } from './gauzy-button-action.component';
import { SharedModule } from '../shared.module';
import { ThemeModule } from '../../@theme';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { TranslateModule } from '../translate/translate.module';



@NgModule({
  declarations: [
    WorksuiteButtonActionComponent
  ],
  exports:[WorksuiteButtonActionComponent],
  imports: [
    CommonModule,
    SharedModule,
    ThemeModule,
    NbIconModule,
    NbButtonModule,
    TranslateModule
  ]
})
export class WorksuiteButtonActionModule { }
