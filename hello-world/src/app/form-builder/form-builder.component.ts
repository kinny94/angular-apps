import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'form-builder',
	templateUrl: './form-builder.component.html',
	styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
	
	form;
	
	constructor( fb: FormBuilder ) {
		this.form = fb.group({
			name: [ '', Validators.required ],
			contact: fb.group({
				email: [],
				phone: []
			}),
			topics: fb.array([

			])
		});
	}
	
	ngOnInit() {
	}	
}
