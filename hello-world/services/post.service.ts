import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

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
		return this.http.get( this.url ).pipe(
			map( response => response ),
			catchError(( error : Response ) => throwError( error ))
		) 
	}

	createPosts( post ){
		return this.http.post( this.url, JSON.stringify( post )).pipe(
			map( response => response ),
			catchError(( error: Response ) => throwError( error ))
		);
	}

	updatePosts( post ){
		return this.http.patch( this.url + '/' + post.id, JSON.stringify({
			isRead: true 
		})).pipe(
			map( response => response ),
			catchError(( error: Response ) => throwError( error ))
		);	
	}

	deletePost( post ): Observable<{}>{
		return this.http.delete( this.url + '/' + post.id ).pipe(
			map( response => response ),
			catchError(( error: Response ) => throwError( error ))
		);
	}

	
}