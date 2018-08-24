import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
	
	constructor( private http: Http ){

	}

	login( credentials ){
		return this.http.post( '/api/authenticate', JSON.stringify( credentials )).pipe( map( response => {
			console.log( response.json());
		}));
	}

	logout(){
		 
	}

	isLoggedIn(){
		return false;
	}
}
