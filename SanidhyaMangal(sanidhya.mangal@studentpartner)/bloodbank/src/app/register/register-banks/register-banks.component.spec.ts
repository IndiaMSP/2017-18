import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBanksComponent } from './register-banks.component';

describe('RegisterBanksComponent', () => {
  let component: RegisterBanksComponent;
  let fixture: ComponentFixture<RegisterBanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
