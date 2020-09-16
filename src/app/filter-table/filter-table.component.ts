import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { tableData } from '../services/tableData.service';
@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent implements OnInit {
  displayColumns = ['mal_id', 'title', 'airing', 'type', 'episodes', 'score', 'start_date', 'end_date', 'members', 'rated'];
  dataSource: MatTableDataSource<any>;
  tableData: any;
  
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private tableService: tableData) { }

  ngOnInit()
  {
    this.tableService.getData().subscribe(res => {
      this.tableData = res.results
      this.dataSource = new MatTableDataSource(this.tableData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  filterTable(filter: string) 
  {
    this.dataSource.filter = filter.trim().toLowerCase();
  }

}
