import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-my-cell',
  template: `
     # {{value}}

  `,
  styles: [
  ]
})
export class MyCellComponent implements OnInit ,ICellRendererAngularComp{
  value!:any;

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
   return false;
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
