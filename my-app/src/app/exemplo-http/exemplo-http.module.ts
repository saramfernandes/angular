import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteJsonPlaceholderComponent } from './teste-json-placeholder/teste-json-placeholder.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TesteJsonPlaceholderComponent
  ],
  exports: [
    TesteJsonPlaceholderComponent
  ]
})
export class ExemploHttpModule { }
