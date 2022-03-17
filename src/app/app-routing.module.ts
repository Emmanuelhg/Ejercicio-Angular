import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { UserGuard } from './guards/user.guard';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FormComponent } from './pages/form/form.component';
import { CalculateDateComponent } from './pages/calculate-date/calculate-date.component';
import { ConversionsComponent } from './pages/conversions/conversions.component';

const routes: Routes = [
  {path: '', component: UserComponent, canActivate: [UserGuard] },
  {path: 'login', component: LoginComponent },
  {path: 'welcome', component: WelcomeComponent, canActivate: [UserGuard] },
  {path: 'form', component: FormComponent, canActivate: [UserGuard] },
  {path: 'calculate-date', component: CalculateDateComponent, canActivate: [UserGuard] },
  {path: 'conversions', component: ConversionsComponent, canActivate: [UserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
