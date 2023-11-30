import { Component, computed, inject, signal } from '@angular/core';
import { UsersService } from './services/users.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';
import { ItemPositionPipe } from './pipes/item-position.pipe';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemPositionPipe , NgClass],
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent {
  #usersService = inject(UsersService);

  users = toSignal(this.#usersService.users());
  posts = toSignal(this.#usersService.posts());
  
  selectedUser = signal({} as User);
  userPosts = computed( () => {
    const user = this.selectedUser();
    // For demo purposes demonstrate how to use computed to return an empty array
    if(user.id === 4) {
      return []
    }
    if(user.id) {
      return this.posts()?.filter( post => post.userId === user.id);
    } else {
      return this.posts()
    }
  })

  trackByFn = (index: number, user: any) => `${index}-${user.id}-${user.name}}`;

  selectPostsFromUser(user: User) { 
    if(user.id === this.selectedUser().id) {
      this.selectedUser.set({} as User);
    } else {
      this.selectedUser.set(user);
    }
  } 
}
