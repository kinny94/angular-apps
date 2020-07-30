import { UserData, UserProfileData, ReposData } from './../types';
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

  getUserData(username: string): Observable<UserProfileData> {
    return this.httpService.get(`https://api.github.com/users/${username}`).pipe(
    map((userdata: any) => {
      const userProfileData: UserProfileData = {
        avatar: userdata.avatar_url,
        bio: userdata.bio !== null ? userdata.bio : 'Unavailable',
        company: userdata.company !== null ? userdata.company : 'Unavailable',
        created: userdata.created_at,
        lastOnline: userdata.updated_at,
        email: userdata.email !== null ? userdata.email : 'Unavailable',
        followers: userdata.followers,
        following: userdata.following,
        location: userdata.location !== null ? userdata.location : 'Unavailable',
        name: userdata.name,
        publicGists: userdata.public_gists,
        publicRepos: userdata.public_repos,
        username: userdata.login
      };
      return userProfileData;
    }),
    );
  }

  getRepos(username: string): Observable<ReposData[]> {
    return this.httpService.get(`https://api.github.com/users/${username}/repos`).pipe(
    map((userRepos: any[]) =>  {
      let reposData: ReposData[] = [];
      console.log(userRepos);
      userRepos.map((repo: any) => {
        const repoData: ReposData = {
          created_at: repo.created_at,
          description: repo.description,
          forks_count: repo.forks_count,
          full_name: repo.full_name,
          html_url: repo.html_url,
          language: repo.language,
          name: repo.name,
          updated_at: repo.updated_at,
          watchers: repo.watcher,
        };
        reposData = [...reposData, repoData];
      });
      return reposData;
    }),
    );
  }
}
