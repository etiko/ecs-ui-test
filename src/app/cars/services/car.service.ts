import {Injectable} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carList: any;
  carMessage$ = new BehaviorSubject(this.storage.retrieve('car'));

  constructor(private storage: LocalStorageService) {
  }

  getCars() {
    return this.storage.retrieve('cars');
  }

  getCar(id) {
    let car: any;
    this.carList = this.getCars();
    const carIndex = this.carList.findIndex((obj => obj.id === id));
    car = this.carList[carIndex];
    return car;
  }

  addCar(car) {
    this.carList = this.getCars() || [];
    this.carList.push(car);
    this.storage.store('cars', this.carList);
    this.sendCarMessage(this.carList);
  }

  sendCarMessage(message) {
    this.carMessage$.next(message);
  }

  getCarMessage() {
    return this.carMessage$.asObservable();
  }
}
