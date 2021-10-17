import {TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';

import {CarService} from './car.service';

describe('CarService', () => {
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LocalStorageService]
    });
    service = TestBed.inject(CarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
