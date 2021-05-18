import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { buttons } from 'polished';
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
  Theme,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  ColorProps
} from 'styled-system';
import { ThemeOptions, THEME_OPTIONS } from '../types';

export const setStyles = function(element: HTMLElement, styles: CSSStyleDeclaration) {//StylesProps
  Object.assign(element.style, styles);
};

export const BUTTON_SCALE = 'buttons';

export type StyledButtonProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps & {
    leftIcon?: string;
    rightIcon?: string;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'transparent';
  };


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

const getStyles = variant({
  scale: BUTTON_SCALE,
  variants: {
    primary: {
      // bg: 'bg.primary',
      // color: 'text.primary',
      // fontFamily: 'body',
    },
    secondary: {
      // bg: 'bg.secondary',
      // color: 'text.secondary',
    },
  }
});

const allStyles = compose(space, border, color, typography);

type BUTTON_VARIANTS = 'primary' | 'secondary' | 'transparent';


const defaultButtonStyles = {
  position: 'relative',
  fontFamily: 'body',
  fontSize: 2,
  fontWeight: 'regular',
  lineHeight: 'copy',
  borderRadius: '20px',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 3,
  ml: 0,
  mr: 0,
  mb: 0,
  appearance: 'none',
};

export interface ButtonTheme {
  buttons: {
    primary: any,
    secondary: any,
    transparent: any
  }
}

export const defaultButtonTheme: ButtonTheme = {
  [BUTTON_SCALE]: {
    primary: {
      ...defaultButtonStyles,
      bg: 'brand.primary',
      color: 'text.inverse',
      borderColor: 'transparent',
      ' svg': {
        color: 'text.inverse',
      },
      '&:hover': {
        backgroundColor: 'highlights.primaryHighlight',
      },
      '&:active, &:focus': {
        backgroundColor: 'highlights.primaryExtraHighlight',
      },
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'ui.disabled',
        borderColor: 'ui.disabled',
      },
    },
    secondary: {
      ...defaultButtonStyles,
      color: 'text.secondary',
      backgroundColor: 'bg.secondary',
    },
    transparent: {
      ...defaultButtonStyles,
      color: 'blue',
      backgroundColor: 'transparent',
    },
  }
};

@Directive({
  selector: 'button[dsButton], a[dsButton]',
  exportAs: 'dsButton'
})
export class DSButtonDirective /*implements OnInit*/ {
  @Input()
  get variant(): string { return this._variant; }
  set variant(variant: string) {
    this._variant = variant;
    const styles = getStyles({
      variant,
      theme: {
        ...defaultButtonTheme,
        ...this._options.themes.dark
      }
    });
    console.log(styles);
    setStyles(this._element.nativeElement, styles);
  }
  private _variant!: string;

  constructor(
    private _element: ElementRef,
    @Inject(THEME_OPTIONS) private _options: ThemeOptions
  ) {}

  // ngOnInit() {
  //   const variant = BUTTON_VARIANTS.variants[this.variant];
  //   const styles = allStyles(variant);
  //   const styleProperties = Object.keys(styles);

  //   styleProperties.forEach((property) => {
  //     let value = styles[property];
  //     if (value === 'bg.primary') {
  //       value = this._options.themes.dark['colors']['bg']['primary'];
  //     } else if (value === 'text.primary') {
  //       value = this._options.themes.dark['colors']['text']['primary'];
  //     } else if (value === 'bg.secondary') {
  //       value = this._options.themes.dark['colors']['bg']['secondary'];
  //     } else if (value === 'text.secondary') {
  //       value = this._options.themes.dark['colors']['text']['secondary'];
  //     }
  //     console.log(property, value);

  //     this._element.nativeElement.style[property] = value;
  //   });
  // }
}
