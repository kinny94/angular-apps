import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'post-component',
	templateUrl: './post-component.component.html',
	styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {
	
	posts: any[];

	constructor( http: Http ){ 
		http.get( 'https://jsonplaceholder.typicode.com/posts' )
		.subscribe( response =>  {
			this.posts = response.json();
		})
	}
	
	ngOnInit() {
	}
	
}
