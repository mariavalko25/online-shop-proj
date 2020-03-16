import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './currency.pipe';
import { YearsPipe } from './years.pipe';



@NgModule({
  declarations: [CurrencyPipe, YearsPipe],
  exports: [CurrencyPipe, YearsPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
