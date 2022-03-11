import { ButtonComponent } from './button.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    let button = fixture.debugElement.nativeElement.querySelector('ds-button ds-button--primary ds-button--small');
    fixture.detectChanges();
    expect(button).toBeDefined();
  });

});
