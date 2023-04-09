import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
userList: User[] = [
  {id: 1, user: 'mmonzon', name: 'Marcio', gender: 'Male'},
  {id: 2, user: 'landrade', name: 'Losangela', gender: 'Female'},
  {id: 3, user: 'csouza', name: 'Carlos', gender: 'Male'},
  {id: 4, user: 'alopes', name: 'Andres', gender: 'Male'},
];

  constructor() { }

  getUser() {
    return this.userList.slice();
  }

  addUser(user: User) {
    this.userList.unshift(user);
  }
 
}
