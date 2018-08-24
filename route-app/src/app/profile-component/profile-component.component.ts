import { Observable, combineLatest } from 'rxjs';
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

		combineLatest([
			this.route.paramMap,
			this.route.queryParamMap
		]).subscribe( combine => {
			let id = combine[0].get( 'id' );
			let page = combine[1].get( 'page' );

			console.log( id + " : " + page)
		})
		this.route.paramMap.subscribe( params => {
			console.log( params.get( 'username'));
			console.log("Hello");
		})

		this.route.paramMap.subscribe( params => {
			
		});
		//let id = this.route.snapshot.paramMap.get( 'id' );
		this.route.queryParamMap.subscribe( params => {
			
		});
		//let page = this.route.snapshot.queryParamMap.get( 'page' );
		


	}
}
