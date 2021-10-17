import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';

import {ActionsRendererComponent} from './actions-renderer.component';


describe('ActionsRendererComponent', () => {
  let component: ActionsRendererComponent;
  let fixture: ComponentFixture<ActionsRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionsRendererComponent],
      imports: [HttpClientModule],
      providers: [LocalStorageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
