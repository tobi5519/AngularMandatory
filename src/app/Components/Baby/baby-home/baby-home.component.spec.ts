import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyHomeComponent } from './baby-home.component';

describe('BabyHomeComponent', () => {
  let component: BabyHomeComponent;
  let fixture: ComponentFixture<BabyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
