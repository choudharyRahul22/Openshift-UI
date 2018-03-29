import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWorkAreaComponent } from './select-work-area.component';

describe('SelectWorkAreaComponent', () => {
  let component: SelectWorkAreaComponent;
  let fixture: ComponentFixture<SelectWorkAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectWorkAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectWorkAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
