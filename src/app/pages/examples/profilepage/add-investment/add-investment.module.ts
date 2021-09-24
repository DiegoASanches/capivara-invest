import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInvestmentComponent } from './add-investment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddInvestmentComponent],
  exports: [AddInvestmentComponent],
})
export class AddInvestmentModule { }
