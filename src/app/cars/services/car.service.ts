import {Injectable} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carList: any;

  constructor(private storage: LocalStorageService) {
  }

  getCars() {
    console.log('cars');
  }

  getCar(id) {
    console.log(id);
  }
}
