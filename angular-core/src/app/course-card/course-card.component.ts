import { CourseImageComponent } from './../course-image/course-image.component';
import { Course } from './../model/course';
import { Component, OnInit, Input, Output, EventEmitter, ContentChild, AfterContentInit, AfterViewInit, ElementRef, TemplateRef, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input()
  course: Course;

  @Input()
  courseIndex: number;

  @Input()
  noImageTemplate: TemplateRef<any>;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild('contentChild', {read: ElementRef, static: false})
  contentChild: ElementRef;

  @ContentChild(CourseImageComponent, {read: ElementRef, static: false})
  image: CourseImageComponent;

  @ContentChildren(CourseImageComponent)
  images: QueryList<CourseImageComponent>;

  constructor() { }

  ngOnInit() {}

  ngAfterContentInit() {
    console.log(this.images);
  }

  ngAfterViewInit() {
    console.log(this.image);
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
