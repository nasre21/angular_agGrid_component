import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

import { CellClickedEvent } from 'ag-grid-community';

import { ColDef,GridReadyEvent  } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { MyCellComponent } from '../my-cell/my-cell.component';


// @Component({
//   selector: 'app-ag-table',
//   templateUrl: './ag-table.component.html',
//   styleUrls: ['./ag-table.component.css']
// })
// export class AgTableComponent  implements OnInit{

//   rowData$!: Observable<any[]>;

//   @ViewChild(AgGridAngular) agGrid!: AgGridAngular

//   constructor(private http: HttpClient){
//   }

//   ngOnInit(): void{
//     this.rowData$= this.http.get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json')

//   }
//   colDefs: ColDef[] = [
//     { field: 'athlete', cellRenderer:MyCellComponent },
//     { field: 'age' },
//     { field: 'country', rowGroup: true},
//     { field: 'year' ,rowGroup: true},
//     { field: 'date' },
//     { field: 'sport' },
//     { field: 'gold' },
//     { field: 'silver' },
//     { field: 'bronze' },
//     { field: 'total' },
//   ];

//   defaultColDefs: ColDef = {
//     sortable: true,
//     filter: true,
//   };

//   onCellClick(event: CellClickedEvent){
//     console.log(event)
//   }

//   clearSelection():void{
//     this.agGrid.api.deselectAll()
//   }
// }

@Component({
  selector: 'app-ag-table',
  templateUrl: './ag-table.component.html',
  styleUrls: ['./ag-table.component.css']
})
export class AgTableComponent {
  public columnDefs: ColDef[] = [
    { field: 'athlete'},
    { field: 'age'},
    { field: 'country' },
    { field: 'year' },
    { field: 'date'},
    { field: 'sport'},
    { field: 'gold'},
    { field: 'silver'},
    { field: 'bronze'},
    { field: 'total'},
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  public rowData$!: Observable<any[]>;

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json');
  }
}
