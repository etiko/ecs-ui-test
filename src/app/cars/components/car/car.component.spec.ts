import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {LocalStorageService} from 'ngx-webstorage';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {CarComponent} from './car.component';

describe('CarComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [LocalStorageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should count number of input elements', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#carForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(5);
  });

  it('should init values', () => {
    const carFormGroup: any = component.carForm;
    const carFormValues = {
      make: '',
      model: '',
      colour: '',
      year: null,
      id: '',
    };
    expect(carFormGroup.value).toEqual(carFormValues);
  });

  it('should check make value before entering value', () => {
    const carFormMakeElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#carForm').querySelectorAll('input')[1];
    const makeValueFormGroup = component.carForm.get('make');
    expect(carFormMakeElement.value).toEqual(makeValueFormGroup.value);
    expect(makeValueFormGroup.errors).not.toBeNull();
    expect(makeValueFormGroup.errors.required).toBeTruthy();
  });

  it('should check make value after entering value', () => {
    const carFormMakeElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#carForm').querySelectorAll('input')[1];
    carFormMakeElement.value = 'Mercedes';
    carFormMakeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const makeValueFormGroup = component.carForm.get('make');
      expect(makeValueFormGroup.errors).toBeNull();
      expect(carFormMakeElement.value).toEqual(makeValueFormGroup.value);
    });
  });

});
