import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: ['./server-element.component.css'],
	encapsulation: ViewEncapsulation.Emulated	// removes strange html in console
})
export class ServerElementComponent implements OnInit {
	@Input('srvElement') // exposing this property to the world
	element: { type:string, name:string, content:string };

	constructor() { }
	
	ngOnInit() {
	}
	
}
