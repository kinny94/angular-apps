import { fade } from './../animations';
import { PostService } from 'services/post.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
	selector: 'post-component',
	templateUrl: './post-component.component.html',
	styleUrls: ['./post-component.component.css'],
	animations: [
		fade
	]
})
export class PostComponentComponent implements OnInit {
	
	posts: any[];

	constructor( private service: PostService ){   
	}

	ngOnInit() {
		this.service.getPosts()
		.subscribe( response =>  {
			this.posts = response.json();
		}, ( error ) => {
			alert( "An Unexpected Error Occured! " );
			console.log( error );
		});
	}
	
	createPost( input: HTMLInputElement ){
		let post = { title: input.value }
		input.value = '';

		this.service.createPosts( post )
		.subscribe( response => {
			post['id'] =  response.json().id;
			this.posts.splice( 0, 0, post );
		}, ( error: Response ) => {
			if( error.status === 400 ){
				//this.form.setErrors( errors.json());
			}else{
				alert( "An Unexpected Error Occured! " );
				console.log( error );
			} 
		})
	}

	updatePost( post ){
		this.service.updatePosts( post ).subscribe( response => {
			console.log( response.json() );
		}, ( error ) => {
			alert( "An Unexpected Error Occured! " );
			console.log( error );
		})
		//	this.http.put( this.url, JSON.stringify( post ));
	} 

	deletePost( post ){
		this.service.deletePost( post )
		.subscribe( response => {
			let index = this.posts.indexOf( post );
			this.posts.splice( index, 1 );
		}, ( error: Response ) => {
			if( error.status === 404 )
				alert( "Post doesn't exist!" );
			else
				alert( "An Unexpected Error Occured! " );
			console.log( error );
		});
	}
}
