import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
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

  constructor(private tableService: tableData ) { }

  ngOnInit() {
    this.tableService.getData().subscribe(res => {
      this.tableData = res.results
      for(var i=0;i<this.tableData.length;i++)
      {
        
         this.tableData[i].episodes=this.tableData[i].episodes.toString()
        
      }
      this.dataSource = new MatTableDataSource(this.tableData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

this.dataSource.filterPredicate = function(data, filter: string): boolean {
  var type=data.type=== null? data.type="" : data.type.toLowerCase();
  var rated=data.rated===null? data.type="" : data.rated.toLowerCase();
  var episodes=data.episodes.toLowerCase();
  return type.includes(filter) || rated.includes(filter) || episodes.includes(filter);
};
    })
  }

  filterTable(filter: string) 
  {
    this.dataSource.filter = filter.trim().toLowerCase();
  }
}
