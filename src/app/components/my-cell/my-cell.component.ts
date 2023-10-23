import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

interface myCellParms {
  buttonText?: string;
}


@Component({
  selector: 'app-my-cell',
  template: `
     <button (click)="onClick($event)">{{buttonText}} </button> {{value}}

  `,
  styles: [
  ]
})


export class MyCellComponent implements OnInit ,ICellRendererAngularComp{
  value!:any;
  buttonText:string = 'Default';

  agInit(params: ICellRendererParams & myCellParms): void {
    this.value = params.value;
    this.buttonText = params.buttonText ?? 'Default';
  }
  refresh(params: ICellRendererParams & myCellParms): boolean {
   return false;
  }

onClick(event: any): void {
  alert(`cell clicked ${this.value}`);
  }

  ngOnInit(): void {

  }

}
