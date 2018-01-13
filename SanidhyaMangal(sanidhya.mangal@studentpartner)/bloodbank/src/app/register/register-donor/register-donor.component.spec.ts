import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDonorComponent } from './register-donor.component';

describe('RegisterDonorComponent', () => {
  let component: RegisterDonorComponent;
  let fixture: ComponentFixture<RegisterDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
