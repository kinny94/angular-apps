import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
    // properties to tell angular how this component works
    selector: 'courses', // <div id="courses">
     //directives are used to manipulate the DOM
    template: `
            <h4>{{ getTitle() }}</h4>
            <ul>    
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>  
            </ul>
        `    //htlml markup  to be rendered for this component 
})

export class CoursesComponent{
    title = 'List of courses';

    getTitle(){
        return "List of Courses"
    }

    courses;

    constructor( service: CoursesService ){
       // let service = new CoursesService();

       // you use new ClassName in your class we have tightly couple that instance of the class to the implementation
       // and cannot change at runtime, so its better to provide it as a dependency.
        
       // Dependency injection means, injecting or providing the dependencies into its constructor.
        this.courses = service.getCourses();
    }

    //Logic for calling an HHTP service 
}