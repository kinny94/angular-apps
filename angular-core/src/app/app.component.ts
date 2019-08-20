import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';
import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren('cardRef', { read: '' })
  cards: QueryList<CourseCardComponent>;

  @ViewChild('container', { read: ElementRef, static: false})
  container: ElementRef;

  @ViewChild('courseImage', {read: '', static: false})
  courseImage: ElementRef;

  courses = COURSES;

  onCourseSelected(course: Course) {
    console.log(this.cards);
  }

  ngAfterViewInit() {
    console.log(this.cards);
    console.log(this.container);
    console.log(this.courseImage);
  }
}
