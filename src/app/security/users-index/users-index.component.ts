import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { userDTO } from 'src/app/Models/security.model';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css']
})
export class UsersIndexComponent implements OnInit, AfterViewInit {

  constructor(private securityService: SecurityService) { }

  users: userDTO[] = [];
  columnsToDisplay = ['email', 'actions'];

  dataSource: MatTableDataSource<userDTO>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {

    this.securityService.getAllUsers().subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource<userDTO>(this.users);
      this.dataSource.paginator = this.paginator;
    });
  }

  makeadmin(id: string): void {
    this.securityService.makeadmin(id).subscribe(res => {
      this.loadData();
    });
  };
  removeadmin(id: string): void {
    this.securityService.removeadmin(id).subscribe(res => {
      this.loadData();
    });
  };
}
