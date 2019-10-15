import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDeliveryComponent } from './info-delivery.component';

describe('InfoDeliveryComponent', () => {
  let component: InfoDeliveryComponent;
  let fixture: ComponentFixture<InfoDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
