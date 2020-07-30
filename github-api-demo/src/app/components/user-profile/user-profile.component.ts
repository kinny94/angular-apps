import { UsersService } from './../../services/users-service.service';
import { map } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  username ?:string;
  private subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
  ) {
    this.route.paramMap.pipe(
      map((params) => params.get('username')),
    ).subscribe((name) => this.username = name);
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.userService.getUserData(this.username).subscribe(console.log),
    );

    this.subscriptions.add(
      this.userService.getRepos(this.username).subscribe(console.log),
    );
  }

  ngOnDestroy(): void{
    this.subscriptions.unsubscribe();
  }
}
