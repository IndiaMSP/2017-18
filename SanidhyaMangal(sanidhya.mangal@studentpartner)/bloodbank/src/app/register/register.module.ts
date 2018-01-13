import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { RegisterDonorComponent } from './register-donor/register-donor.component';
import { RegisterBanksComponent } from './register-banks/register-banks.component';
import { RouterModule } from "@angular/router";
import { registerRoutes } from './register-routes';
import { RegisterComponent } from './register.component';
import { InputFormatDirective } from './input-format.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(registerRoutes),
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    RegisterDonorComponent, 
    RegisterBanksComponent, 
    RegisterComponent, 
    InputFormatDirective,
  ],
})
export class RegisterModule { }
