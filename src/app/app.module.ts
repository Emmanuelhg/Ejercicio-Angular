import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ConversionsComponent } from './pages/conversions/conversions.component';
import { CalculateDateComponent } from './pages/calculate-date/calculate-date.component';
import { FormComponent } from './pages/form/form.component';
import { CambioLetrasPipe } from './pipe/cambio-letras.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    SidebarComponent,
    WelcomeComponent,
    ConversionsComponent,
    CalculateDateComponent,
    FormComponent,
    CambioLetrasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
