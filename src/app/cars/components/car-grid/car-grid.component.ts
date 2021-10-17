import {Component, OnInit} from '@angular/core';
import {ColDef} from 'ag-grid-community';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {CarService} from '../../services/car.service';
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

  private destroy$ = new Subject();

  constructor(private carService: CarService) {
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
    this.defaultColDef = {
      sortable: true,
      filter: true,
      resizable: true,
    };
    this.getCarList();
  }

  private getCarList() {
    this.carService.getCarMessage()
    .pipe(takeUntil(this.destroy$))
    .subscribe(cars => {
      this.rowData = cars;
    });
  }

}
