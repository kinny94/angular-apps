import { Observable, combineLatest } from 'rxjs';
import { UsersService } from './../../services/users-service.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/types';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.scss']
})
export class UsersComponent implements OnInit {

  users$?: Observable<UserData[]>;
  dataSource$ ?: Observable<UserData[]>;
  filterControl = new FormControl();

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    const filterChange$ = this.filterControl.valueChanges.pipe(
      startWith(''),
    );
    this.users$ = this.usersService.getUsers();

    this.dataSource$ = combineLatest([filterChange$, this.users$]).pipe(
      map(([filter, users]) => {
        return users.filter((user) => user.username.includes(filter));
      }),
    );
  }

}
