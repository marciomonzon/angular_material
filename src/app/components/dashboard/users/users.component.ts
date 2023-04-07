import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  userList: User[] = [];

  displayedColumns: string[] = ['user', 'name', 'gender', 'actions'];
  dataSource = new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _userService: UserService,
              private _snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.loadUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadUsers() {
    this.userList = this._userService.getUser();
    this.dataSource = new MatTableDataSource(this.userList);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editUser(id: number) {
    
  }

  deleteUser(id: number) {
    // service eliminar usuario
    this.loadUsers();
    this.successDeleted();
  }

  successDeleted() {
    this._snackbar.open('User deleted successfully', 'Info', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1500
    })
  }
}
