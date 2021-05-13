import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import {
  space,
  layout,
  flexbox,
  border,
  position,
  typography,
  color,
  variant,
  system,
  compose,
} from 'styled-system';
import { ThemeOptions, THEME_OPTIONS } from '../types';

const BUTTON_VARIANTS: any = {
  variants: {
    primary: {
      bg: 'bg.primary',
      color: 'text.primary',
    },
    secondary: {
      bg: 'bg.secondary',
      color: 'text.secondary',
    },
  },
};

const allStyles = compose(space, border, color, typography);

@Directive({
  selector: '[dsButton]',
})
export class DSButtonDirective implements OnInit {
  @Input() buttonType: string;

  constructor(
    private el: ElementRef,
    @Inject(THEME_OPTIONS) private options: ThemeOptions
  ) {}

  ngOnInit() {
    const variant = BUTTON_VARIANTS.variants[this.buttonType];
    const styles = allStyles(variant);
    const styleProperties = Object.keys(styles);

    styleProperties.forEach((property) => {
      let value = styles[property];
      if (value === 'bg.primary') {
        value = this.options.themes.dark['colors']['bg']['primary'];
      } else if (value === 'text.primary') {
        value = this.options.themes.dark['colors']['text']['primary'];
      } else if (value === 'bg.secondary') {
        value = this.options.themes.dark['colors']['bg']['secondary'];
      } else if (value === 'text.secondary') {
        value = this.options.themes.dark['colors']['text']['secondary'];
      }
      console.log(property, value);

      this.el.nativeElement.style[property] = value;
    });
  }
}
