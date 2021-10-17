import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {v4 as uuid} from 'uuid';

import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  id: string;
  editMode = false;
  carForm: FormGroup;
  functionName: string;

  private destroy$ = new Subject();

  constructor(private route: ActivatedRoute,
              private carService: CarService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$))
    .subscribe((params: Params) => {
      this.id = params.id;
      this.functionName = params.functionName;
      this.editMode = params.id != null;
      this.initForm();
    });
  }

  private initForm(): void {
    let make = '';
    let model = '';
    let colour = '';
    let year;
    let id = '';

    if (this.editMode) {
      const car = this.carService.getCar(this.id);

      make = car.make;
      model = car.model;
      colour = car.colour;
      year = car.year;
      id = car.id;
    }

    this.carForm = new FormGroup({
      id: new FormControl(id),
      make: new FormControl(make),
      model: new FormControl(model),
      colour: new FormControl(colour),
      year: new FormControl(year)
    });
  }

  onSubmit(): void {
    const car = this.carForm.value;
    car.id = uuid();
    this.carService.addCar(car);

    this.router.navigate(['cars']);
  }

}
