import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from '../guards/auth.guard';
import { ServiceComponent } from '../components/service/service.component';
const routes: Routes = [
  
  {
    path: 'servicedetails',
    canActivate: [AuthGuard],
    component: ServiceComponent
  },
  {
    path: 'services',
    canActivate: [AuthGuard],
    component: ServiceComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
