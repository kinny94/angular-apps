import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	courses: Observable<any[]>;
	
	constructor( db: AngularFireDatabase ){
		let items = db.list( 'fs1prod-4323d' );
	}
}
 