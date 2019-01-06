import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterHomeComponent } from './sitter-home.component';

describe('SitterHomeComponent', () => {
  let component: SitterHomeComponent;
  let fixture: ComponentFixture<SitterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
