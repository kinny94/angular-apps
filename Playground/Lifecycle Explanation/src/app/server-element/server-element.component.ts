import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: ['./server-element.component.css'],
	encapsulation: ViewEncapsulation.Emulated	// removes strange html in console
})
export class ServerElementComponent implements OnInit, OnChanges {
	@Input('srvElement') // exposing this property to the world
	element: { type:string, name:string, content:string };

	constructor() { 
		console.log( "Contructor Called! ");
	}

	ngOnChanges( changes: SimpleChanges ){
		console.log( "ngOnChanges Called! ");
		console.log( changes );
	}
	
	ngOnInit() {
		console.log( "ngOnInit Called! ");
	}
	
}
