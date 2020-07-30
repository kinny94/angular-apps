export interface UserData {
    username: string;
    id: string;
    avatarUrl: string;
    url: string;
    followersUrl: string;
    starredUrl: string;
    organizationsUrl: string;
    reposUrl: string;
}

export interface UserProfileData {
    username: string;
    avatar: string;
    name: string;
    company: string;
    location: string;
    email: string;
    bio: string;
    publicRepos: string;
    publicGists: string;
    followers: string;
    following: string;
    created: string;
    lastOnline: string;
}

export interface ReposData {
    description: string;
    forks_count: string;
    full_name: string;
    language: string;
    name: string;
    updated_at: string;
    watchers: string;
    created_at: string;
    html_url: string;
}