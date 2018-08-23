import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { FollowersComponent } from './followers/followers.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponentComponent,
		ProfileComponentComponent,
		FollowersComponent,
		NavbarComponentComponent,
		PostsComponentComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{
				path: '',
				component: HomeComponentComponent
			},
			{
				path: 'profile/:username',
				component: ProfileComponentComponent	
			},
			{
				path: 'profile',
				component: FollowersComponent
			},	
			{
				path: 'posts',
				component: PostsComponentComponent
			},
			{
				path: '**',
				component: NotFoundComponent	
			}
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
