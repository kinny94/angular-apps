import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-component',
	templateUrl: './login-component.component.html',
	styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
	
	constructor( private router: Router , private authService: AuthService ) { }
	
	invalidLogin: boolean;

	signIn( credentials ){
		this.authService.login( credentials ).subscribe( result => {
			if( result ){
				this.router.navigate(['/']);
			}else{
				this.invalidLogin = true;
			}
		});
	}
	
	ngOnInit() {
	}
	
}
