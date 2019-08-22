import { Course } from './../model/course';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  courseIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  onCourseClicked() {
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    return { 'beginner': this.course.category === 'BEGINNER' };
  }

  cardStyle() {
    return {'text-decoration': 'underline'};
  }
}
