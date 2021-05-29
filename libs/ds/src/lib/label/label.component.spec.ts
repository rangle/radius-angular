import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsLabelComponent } from './label.component';

describe('DsLabelComponent', () => {
  let component: DsLabelComponent;
  let fixture: ComponentFixture<DsLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
