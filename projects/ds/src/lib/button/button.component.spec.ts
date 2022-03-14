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
    const variant = 'primary';
    const size = 'small';
    const selector = 'ds-button'
    let button = fixture.debugElement.nativeElement.querySelector(`${selector} ${selector}--${variant} ${selector}--${size}`);
    fixture.detectChanges();
    expect(button).toBeDefined();
  });

});
