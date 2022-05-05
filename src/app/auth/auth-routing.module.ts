import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '' ,
  children: [

    {
      path: '',
      component: SignInComponent
    },
    {
      path: 'forgotpassword',
      component: ForgotPasswordComponent
    }
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
