import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputlistComponent } from './inputlist.component';

describe('InputlistComponent', () => {
  let component: InputlistComponent;
  let fixture: ComponentFixture<InputlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
