import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableCreateComponent } from './timetable-create.component';

describe('TimetableCreateComponent', () => {
  let component: TimetableCreateComponent;
  let fixture: ComponentFixture<TimetableCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimetableCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
