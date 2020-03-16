import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './shared/category/category.component';
import { CarComponent } from './shared/car/car.component';
import { LoginComponent } from './shared/login/login.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
import {
BasketComponent } from './shared/basket/basket.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { GuardsGuard } from './guards/guards.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'category/all',
    pathMatch: 'full',
  },
  {
    path: 'category',
    redirectTo: 'category/All cars',
    pathMatch: 'full',
  },
  {
    path: 'category/:cat',
    component: CategoryComponent,
  },
  {
    path: 'car/:id',
    component: CarComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'basket',
    canActivate: [GuardsGuard],
    component: BasketComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
