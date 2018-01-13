import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsThumbnailComponent } from './donors-thumbnail.component';

describe('DonorsThumbnailComponent', () => {
  let component: DonorsThumbnailComponent;
  let fixture: ComponentFixture<DonorsThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorsThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
