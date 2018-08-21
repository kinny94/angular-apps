import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
	declarations: [

		//including our components
		AppComponent,
		CoursesComponent,
		CourseComponent,
		SummaryPipe,
		FavoriteComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [
		// we need to register all the dependencies that component of this module are dependent upon.
		// when you register a dependency as a provider, angular will create a single instance of that class or that entire module
		// which is called a singleton pattern.
		CoursesService
	],
	bootstrap: [AppComponent ]
})
export class AppModule { }
