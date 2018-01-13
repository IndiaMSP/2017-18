import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksThumbnailComponent } from './banks-thumbnail.component';

describe('BanksThumbnailComponent', () => {
  let component: BanksThumbnailComponent;
  let fixture: ComponentFixture<BanksThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanksThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
