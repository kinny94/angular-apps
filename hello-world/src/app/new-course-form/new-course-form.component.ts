import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'new-course-form',
	templateUrl: './new-course-form.component.html',
	styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
	
	constructor() { }
	
	ngOnInit() {
	}
	
	form = new FormGroup({
		topics: new FormArray([])
	});

	addTopic( topic: HTMLInputElement ){
		( this.topics as FormArray ).push( new FormControl( topic.value ));
		topic.value = '';
	}

	get topics(){
		return this.form.get( 'topics' ) as FormArray;
	}
	removeTopic( topic:  FormControl ){
		let index = this.topics.controls.indexOf( topic ); 
		this.topics.removeAt( index );
	}
}
