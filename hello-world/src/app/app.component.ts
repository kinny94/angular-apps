import { CoursesComponent } from './courses.component';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Angular App';
	viewMode = 'something else';
	courses = [];
	
	onAdd(){
		this.courses.push({
			id: 4,
			name: 'course4'
		});
	}

	onRemove( course ){
		let index = this.courses.indexOf( course );
		this.courses.splice( index, 1 );
	}

	onChange( course ){
		course.name = "Updated"
	}

	loadCourses(){
		this.courses = [
			{
				id: 1, name: 'course 1'
			},
			{
				id: 2, name: 'course 2'
			},{
				id: 3, name: 'course 3'
			}
		] 
	}

	trackCourse( index, course ){
		return course ? course.id : undefined;
	}

	canSave = true;

	change(){
		this.canSave = !this.canSave;
	}

	task = {
		title: 'Review applications',
		assignee: {
			name: 'John Smith'
		}
	}
}
