import { CourseService } from './services/course.service';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';
import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList, OnInit } from '@angular/core';
import {COURSES} from '../db-data';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  @ViewChildren('cardRef', { read: '' })
  cards: QueryList<CourseCardComponent>;

  @ViewChild('container', { read: ElementRef, static: false})
  container: ElementRef;

  @ViewChild('courseImage', {read: '', static: false})
  courseImage: ElementRef;

  courses$?: Observable<Course>;

  constructor(private http: HttpClient, private courseService: CourseService) {}

  ngOnInit() {
    this.courses$ = this.courseService.loadCourses();
  }

  onCourseSelected(course: Course) {
    console.log(this.cards);
  }

  ngAfterViewInit() {
    console.log(this.cards);
    console.log(this.container);
    console.log(this.courseImage);
  }

  onToggle(isHighlighted: boolean) {
    console.log(isHighlighted);
  }
}
