import {Component, OnInit} from '@angular/core';
import {ColDef} from 'ag-grid-community';

import {ActionsRendererComponent} from '../actions-renderer/actions-renderer.component';

@Component({
  selector: 'app-car-grid',
  templateUrl: './car-grid.component.html',
  styleUrls: ['./car-grid.component.scss']
})
export class CarGridComponent implements OnInit {
  columnDefs: ColDef[] = [];
  defaultColDef: any;
  rowData: any;
  frameworkComponents: any;

  constructor() {
  }

  ngOnInit(): void {
    this.columnDefs = [
      {
        headerName: 'Make',
        field: 'make'
      },
      {
        headerName: 'Model',
        field: 'model'
      },
      {
        headerName: 'Colour',
        field: 'colour'
      },
      {
        headerName: 'Year',
        field: 'year'
      },
      {
        headerName: '',
        field: 'id',
        width: 260,
        cellRenderer: 'actionRenderer'
      },
    ];
    this.frameworkComponents = {
      actionRenderer: ActionsRendererComponent
    };
  }

}
