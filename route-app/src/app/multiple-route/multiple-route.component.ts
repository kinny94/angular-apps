import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'multiple-route',
	templateUrl: './multiple-route.component.html',
	styleUrls: ['./multiple-route.component.css']
})
export class MultipleRouteComponent implements OnInit {
	
	constructor( private route: ActivatedRoute ) { }
	
	ngOnInit() {
		this.route.paramMap.subscribe( params => {
			console.log( params.get( 'id' ));
			console.log( params.get( 'username' ));
		})
	}	
	
}
