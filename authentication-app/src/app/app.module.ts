import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { NoAccessComponentComponent } from './no-access-component/no-access-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AdminComponentComponent,
    LoginComponentComponent,
    NoAccessComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
