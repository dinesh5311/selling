import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './auth.guard';



const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home', component: HomeComponent , canActivate: [authGuard]},
  {path:'signup', component: SignupComponent},
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule), canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
