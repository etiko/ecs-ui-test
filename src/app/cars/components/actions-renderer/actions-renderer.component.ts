import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-actions-renderer',
  templateUrl: './actions-renderer.component.html',
  styleUrls: ['./actions-renderer.component.scss']
})
export class ActionsRendererComponent implements ICellRendererAngularComp {

  cellValue: string;

  params: ICellRendererParams | null = null;

  constructor(private carService: CarService) {
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  get id(): string {
    return this.params?.value;
  }

  delete(id: string): void {
    this.carService.deleteCar(id);
  }
}
