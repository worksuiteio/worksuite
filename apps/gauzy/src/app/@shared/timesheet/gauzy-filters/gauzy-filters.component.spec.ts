import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksuiteRangePickerComponent } from './gauzy-filters.component';

describe('WorksuiteRangePickerComponent', () => {
  let component: WorksuiteRangePickerComponent;
  let fixture: ComponentFixture<WorksuiteRangePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksuiteRangePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksuiteRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
