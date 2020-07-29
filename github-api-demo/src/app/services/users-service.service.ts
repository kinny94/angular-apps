import { UserData } from './../types';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, fromEventPattern } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users?: Observable<UserData[]>;

  constructor(private httpService: HttpClient) {}

  getUsers(): Observable<UserData[]> {
    return this.httpService.get('https://api.github.com/users').pipe(
      map((usersdata: any[]) => {
        let users: UserData[] = [];
        usersdata.map((userdata) => {
          const user: UserData = {
            username: userdata.login,
            avatarUrl: userdata.avatar_url,
            id: userdata.id,
            followersUrl: userdata.followers_url,
            organizationsUrl: userdata.organizations_url,
            reposUrl: userdata.repos_url,
            starredUrl: userdata.starred_url,
            url: userdata.url,
          };
          users = [...users, user];
        });
        return users;
      }),
    );
  }
}
