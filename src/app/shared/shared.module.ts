import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatIconModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { BasketComponent } from './basket/basket.component';
import { CarComponent } from './car/car.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [BasketComponent, CarComponent, CategoryComponent, LoginComponent, NotFoundComponent, SignUpComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CategoryComponent, LoginComponent, SignUpComponent, BasketComponent]
})
export class SharedModule { }
