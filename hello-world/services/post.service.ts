import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class PostService {

	private url = 'https://jsonplaceholder.typicode.com/posts';
	
	constructor( private http: Http) { }

	handleError( err ){
		console.log( err );	
	}

	getPosts(){
		return this.http.get( this.url );
	}

	createPosts( post ){
		return this.http.post( this.url, JSON.stringify( post ));
	}

	updatePosts( post ){
		return this.http.patch( this.url + '/' + post.id, JSON.stringify({
			isRead: true 
		}));	
	}

	deletePost( post ): Observable<{}>{
		return this.http.delete( this.url + '/' + post.id );
	}

	
}