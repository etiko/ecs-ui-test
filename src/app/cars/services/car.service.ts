import {Injectable} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carList: any;
  carMessage$ = new ReplaySubject();

  constructor(private storage: LocalStorageService,
              private http: HttpClient) {
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

  updateCar(id, car) {
    this.carList = this.getCars();
    const carIndex = this.carList.findIndex((obj => obj.id === id));
    this.carList[carIndex] = car;
    this.storage.store('cars', this.carList);
    this.sendCarMessage(this.carList);
  }

  deleteCar(id) {
    this.carList = this.getCars();
    const filteredList = this.carList.filter((obj => obj.id !== id));
    this.storage.store('cars', filteredList);
    this.sendCarMessage(filteredList);
  }

  getRelatedWords(model): Observable<any> {
    return this.http.get(`https://api.datamuse.com/words?ml=${model}`);
  }

  sendCarMessage(message) {
    this.carMessage$.next(message);
  }

  getCarMessage() {
    return this.carMessage$.asObservable();
  }
}
