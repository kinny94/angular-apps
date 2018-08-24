import { switchMap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
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
		combineLatest([
			this.route.paramMap,
			this.route.queryParamMap
		]).pipe(
			switchMap( combine => {
				let id = combine[0].get( 'id' );
				let page = combine[1].get( 'page' );
				return id;
			})	
		)
		.subscribe( combine => {
			console.log( combine );
		});
	}	
	
}
