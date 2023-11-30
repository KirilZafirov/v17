import { HttpClient } from "@angular/common/http";
import { Injectable, inject} from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { Posts } from "../models/posts.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  #httpClient = inject(HttpClient); 

  users(): Observable<User[]> {
    return this.#httpClient
      .get(`https://jsonplaceholder.typicode.com/users?_limit=10`) as Observable<User[]>;
  };

  posts = (): Observable<Posts[]> => this.#httpClient
    .get(`https://jsonplaceholder.typicode.com/posts`) as Observable<Posts[]>;
 
};