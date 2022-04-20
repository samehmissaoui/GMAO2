import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '',
  children: [

    {
      path: 'sigin',
      component: SignInComponent
    },
    {
      path: 'sigup',
      component: SignUpComponent
    },
    {
      path: 'verifyemail',
      component: VerifyEmailComponent
    },
    {
      path: 'forgotpassword',
      component: ForgotPasswordComponent
    }
  ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
