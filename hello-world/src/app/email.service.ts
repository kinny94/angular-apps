import { Injectable } from '@angular/core';

// we need this decorator only if this service had dependencies in its contructor.
@Injectable({
	providedIn: 'root'
})

export class EmailService {
	
	constructor( ) { }
}
