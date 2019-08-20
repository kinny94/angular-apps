import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';
import { Component, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(CourseCardComponent, { read: '', static: false })
  card: CourseCardComponent;

  courses = COURSES;

  onCourseSelected(course: Course) {
    console.log(this.card);
  }
}
