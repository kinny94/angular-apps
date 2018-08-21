import { CoursesComponent } from './courses.component';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Angular App';
	courses = [ 1, 2  ]; 
	viewMode = 'somethinf';
}
