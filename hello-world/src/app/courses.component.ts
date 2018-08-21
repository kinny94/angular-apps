import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
    // properties to tell angular how this component works
    selector: 'courses', // <div id="courses">
     //directives are used to manipulate the DOM
    template: `
            <h4>{{ getTitle() }}</h4>
            <h5 [textContent]="title"></h5>
            <ul>    
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>  
            </ul>
            <img src="{{ imgUrl }}" />
            <img [src]="imgUrl" />
            <table>
                <tr>
                    <td [attr.colspan]="colspan"></td>
                </tr>
            </table>
            <button class="btn btn-primary" [class.active]="isActive">
                Save
            </button>
        `    //htlml markup  to be rendered for this component 
        // Property binding only works in one way, from the component to the DOM. If the fields in the component change angular
        // will update the DOM. But changes in the DOM are not updated in components.
})

export class CoursesComponent{

    title = 'List of courses';
    imgUrl = "http://lorempixel.com/400/200";
    colspan = 2;
    isActive = true;

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