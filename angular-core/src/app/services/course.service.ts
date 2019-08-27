import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient
  ) { }

  loadCourses() {
    const params = new HttpParams().set('page', '1').set('pageSize', '10');
    return this.http.get('/api/courses', {params}).pipe(
      map(data => data['payload'])
    );
  }

  saveCourse(course: Course) {
    return this.http.put(`/api/courses/${course.id}`, course);
  }
}
