import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

import { UserService } from '../user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],
  providers: [UserService]
})
export class UserslistComponent implements OnInit {
  title = 'Users list';
  selectedUser: User;
  users: User[];

  constructor(private userService: UserService) { }

  getUsers(): void {
    this.userService.getUsers()
      .then(users => this.users = users);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
