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
            <div class="container">
                <button class="btn btn-primary" [class.active]="isActive" (click)="onSave( $event )">Save</button>
            </div>
            <div  class="container">
                <button [style.backgroundColor]="isActive ? 'blue' : 'red'">Inline Style</button>
            </div>
            <div>
                <input (keyup)="onKeyUp( $event )" />
            </div>
            <div>
                <input (keyup.enter)="onKeyEnter()" />
            </div>
            <div>
                <input #email (keyup.enter)="onKeyUpEmail( email.value )" />
            </div>
            <div>
                <input [(ngModel)]="email2" (keyup.enter)="onKeyUpTwoWayBinding()" />
            </div>
            <div>
                <p>{{ hugeText | summary }}</p>
            </div>
            
        `    
        //htlml markup  to be rendered for this component 
        // Property binding only works in one way, from the component to the DOM. If the fields in the component change angular
        // will update the DOM. But changes in the DOM are not updated in components.
        // # is used to create a template variable for eg #email
})

export class CoursesComponent{

    title = 'List of courses';
    imgUrl = "http://lorempixel.com/400/200";
    colspan = 2;
    isActive = true;
    hugeText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;


    onKeyUp( $event ){
        if( $event.keyCode === 13 ){
            console.log( $event.target.value);
        }
    }

    email2 = "me@example.com";
    onKeyUpTwoWayBinding(){
        console.log( this.email2 );
    }

    onKeyUpEmail( email ){
        console.log( email );
    }

    onKeyEnter(){
        console.log( "Enter was pressed!! ");
    }

    onSave( $event ){   //$event represents the DOM event
        console.log( "Button was clicked!", $event );
    }

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