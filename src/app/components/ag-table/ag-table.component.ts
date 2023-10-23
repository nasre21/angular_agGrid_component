import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

import { CellClickedEvent } from 'ag-grid-community';

import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-ag-table',
  templateUrl: './ag-table.component.html',
  styleUrls: ['./ag-table.component.css']
})
export class AgTableComponent  implements OnInit{

  rowData$!: Observable<any[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular

  constructor(private http: HttpClient){
  }

  ngOnInit(): void{
    this.rowData$= this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json')

  }
  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  defaultColDefs: ColDef = {
    sortable: true,
    filter: true,
  };

  onCellClick(event: CellClickedEvent){
    console.log(event)
  }

  clearSelection():void{
    this.agGrid.api.deselectAll()
  }
}
