import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { tableData } from '../services/tableData.service';

@Component({
  selector: 'app-full-table',
  templateUrl: './full-table.component.html',
  styleUrls: ['./full-table.component.css']
})
export class FullTableComponent implements OnInit {

  displayColumns = ['mal_id', 'title', 'airing', 'type', 'episodes', 'score', 'start_date', 'end_date', 'members', 'rated'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private tableService: tableData) {


  }
  ngOnInit() 
  {
      this.tableService.getData().subscribe(res => {
      const Info = res.results
      this.dataSource = new MatTableDataSource(Info);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }



  applyFilter(filterValue: string) 
  {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
