import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { FilterTableComponent } from './filter-table/filter-table.component';
import { FullTableComponent } from './full-table/full-table.component';

const appRoutes:Routes=[
    {path: '', pathMatch: 'full', redirectTo: 'fullTable'},
    {path:'fullTable',component:FullTableComponent},
 {path:'filterTable',component:FilterTableComponent}
  
]

@NgModule({
imports:[
    RouterModule.forRoot(appRoutes)
],

exports:[RouterModule]
})
export class AppRoutingModule{

}