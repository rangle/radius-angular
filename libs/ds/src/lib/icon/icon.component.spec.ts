import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsIconComponent } from './icon.component';

describe('DsIconComponent', () => {
  let component: DsIconComponent;
  let fixture: ComponentFixture<DsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
