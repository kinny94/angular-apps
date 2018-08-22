import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent{
	
	constructor() { }
	
	contactMethods = [
		{ id:1, name: 'Email' },
		{ id:2, name: 'Telephone' },
		{ id:3, name: 'Fax' },
		{ id:4, name: 'Text' }
	]
	log( x ){
		console.log( x );
	}
	 
	submit( f ){
		console.log( f );
	}
	
}
