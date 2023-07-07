import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterbuttonComponent } from './filterbutton.component';

describe('FilterbuttonComponent', () => {
  let component: FilterbuttonComponent;
  let fixture: ComponentFixture<FilterbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilterbuttonComponent]
    });
    fixture = TestBed.createComponent(FilterbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
