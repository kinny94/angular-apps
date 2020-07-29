import { Observable } from 'rxjs';
import { UsersService } from './../../services/users-service.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/types';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.scss']
})
export class UsersComponent implements OnInit {

  users$?: Observable<UserData[]>;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }

}
