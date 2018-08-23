import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-profile-component',
	templateUrl: './profile-component.component.html',
	styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {
	
	constructor( private route: ActivatedRoute) { }
	
	ngOnInit() {
		this.route.paramMap.subscribe( params => {
			console.log( params.get( 'username' ) );
		})
	}
	
}
