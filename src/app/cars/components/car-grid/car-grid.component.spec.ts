import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LocalStorageService} from 'ngx-webstorage';

import {CarGridComponent} from './car-grid.component';

describe('CarGridComponent', () => {
  let component: CarGridComponent;
  let fixture: ComponentFixture<CarGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarGridComponent],
      providers: [LocalStorageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
