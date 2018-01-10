import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksComponent } from './banks.component';

describe('BanksComponent', () => {
  let component: BanksComponent;
  let fixture: ComponentFixture<BanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
