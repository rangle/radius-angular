import { ButtonComponent } from '../button/button.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextComponent } from './text.component';

describe('ButtonComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    const fixture = TestBed.createComponent(TextComponent);
    let text = fixture.debugElement.nativeElement.querySelector('label label-3xl');
    fixture.detectChanges();
    expect(text).toBeDefined();
  })
});
