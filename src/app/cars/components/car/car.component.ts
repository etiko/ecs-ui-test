import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
export class CarComponent implements OnInit, OnDestroy {

  id: string;
  editMode = false;
  carForm: FormGroup;
  functionName: string;
  relatedWords: any;

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

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initForm(): void {
    let make = '';
    let model = '';
    let colour = '';
    let year;
    let id = '';

    if (this.functionName === 'view') {
      const car = this.carService.getCar(this.id);
      this.getRelatedCarModelNames(car.model);
    }

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
      make: new FormControl(make, [Validators.minLength(3), Validators.required]),
      model: new FormControl(model, [Validators.minLength(3), Validators.required]),
      colour: new FormControl(colour, [Validators.minLength(3), Validators.required]),
      year: new FormControl(year, [Validators.minLength(4), Validators.maxLength(4), Validators.required])
    });
  }

  onSubmit(): void {
    if (this.editMode) {
      this.carService.updateCar(this.id, this.carForm.value);
    } else {
      const car = this.carForm.value;
      car.id = uuid();
      this.carService.addCar(car);
    }
    this.router.navigate(['cars']);
  }

  private getRelatedCarModelNames(model) {
    this.carService.getRelatedWords(model).pipe(takeUntil(this.destroy$))
    .subscribe(relatedWords => {
      this.relatedWords = relatedWords;
    });
  }

  get registerFormControl() {
    return this.carForm.controls;
  }

}
