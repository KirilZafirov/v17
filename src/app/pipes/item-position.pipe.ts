// create a pipe that deduces the position of an item in a list based on   rowPosition: RowPosition property of user and deduceRowPosition  function

import { Pipe, PipeTransform } from '@angular/core';
import { User, deduceRowPosition } from '../models/user.model';

@Pipe({
  name: 'itemPosition',
  pure: true,
  standalone: true
})
export class ItemPositionPipe implements PipeTransform {
  transform(users: User[] | undefined): User[] | undefined {
    return users && users.map((user, index) => ({ ...user, rowPosition: deduceRowPosition(index, users) }));
  }
}