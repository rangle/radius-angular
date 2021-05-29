import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsCheckboxComponent } from './checkbox.component';

describe('DsCheckboxComponent', () => {
  let component: DsCheckboxComponent;
  let fixture: ComponentFixture<DsCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
