import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

@Component({
  selector: 'app-actions-renderer',
  templateUrl: './actions-renderer.component.html',
  styleUrls: ['./actions-renderer.component.scss']
})
export class ActionsRendererComponent implements ICellRendererAngularComp {

  cellValue: string;

  params: ICellRendererParams | null = null;

  constructor() {
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


}
