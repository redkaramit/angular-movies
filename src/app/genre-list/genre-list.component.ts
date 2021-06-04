import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit, AfterViewInit {
  constructor(private GenreServices: GenreService) { }
  genres: PeriodicElement[] = [];
  columnsToDisplay = ['name', 'actions'];

  dataSource: MatTableDataSource<PeriodicElement>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void {
    this.loadData();
  }
  ngAfterViewInit(): void {
  }
  loadData(): void {
    this.GenreServices.getAll().subscribe(genres => {
      this.genres = genres;
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.genres);
      this.dataSource.paginator = this.paginator;

    });
  }
  deletegenre(id: number): void {
    this.GenreServices.delete(id).subscribe(res => {
      this.loadData();
    });
  };
}
export interface PeriodicElement {
  id: number,
  name: string;
}

