import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.css']
})
export class CourseImageComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('src')
  imageUrl: string;

  constructor() { }

  ngOnInit() {}

}
