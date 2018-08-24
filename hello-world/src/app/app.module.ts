import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { HttpModule } from '@angular/http'; 
import { PostService } from 'services/post.service';

@NgModule({ 
	declarations: [

		//including our components
		AppComponent,
		CoursesComponent,
		CourseComponent,
		SummaryPipe,
		FavoriteComponent,
		InputFormatDirective,
		ContactFormComponent,
		SignupFormComponent,
		NewCourseFormComponent,
		FormBuilderComponent,
		PostComponentComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		BrowserAnimationsModule
	],
	providers: [
		// we need to register all the dependencies that component of this module are dependent upon.
		// when you register a dependency as a provider, angular will create a single instance of that class or that entire module
		// which is called a singleton pattern.
		CoursesService,
		PostService
	],
	bootstrap: [AppComponent ]
})
export class AppModule { }
