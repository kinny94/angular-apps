import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
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
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot([
			{
				path: '',
				component: HomeComponentComponent
			},
			{
				path: 'admin',
				component: AdminComponentComponent
			},
			{
				path: 'login',
				component: LoginComponentComponent
			},
			{
				path: 'no-access',
				component: NoAccessComponentComponent
			}
		])
	],
	providers: [
		OrderService,
		AuthService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
