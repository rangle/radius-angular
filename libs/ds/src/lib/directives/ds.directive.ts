import {
  Directive,
  Input,
  ElementRef,
  OnInit,
  Inject,
  Optional,
} from '@angular/core';

import { space, layout, flexbox, border, position, color } from 'styled-system';
import { THEME_OPTIONS, ThemeOptions } from '../types';
// import {ThemeProvider} from 'styled-components/native';
// import { theme, Box, Textbox } from 'ds';

@Directive({
  selector: `
    [bg], [backgroundColor],
    [margin], [m],
    [marginTop], [mt],
    [marginRight], [mr],
    [marginBottom], [mb],
    [marginLeft], [ml],
    [marginX], [mx],
    [marginY], [my],
    [padding], [p],
    [paddingTop], [pt],
    [paddingRight], [pr],
    [paddingBottom], [pb],
    [paddingLeft], [pl],
    [paddingX], [px],
    [paddingY], [py],
    [color], [c],
    [border], [b],
  `,
})
export class DSDirective implements OnInit {
  @Input() bg: string;
  @Input() backgroundColor: string;

  @Input() m: string;
  @Input() margin: string;

  @Input() p: string;
  @Input() padding: string;

  @Input() pt: string;
  @Input() paddingTop: string;

  @Input() pb: string;
  @Input() paddingBottom: string;

  @Input() pl: string;
  @Input() paddingLeft: string;

  @Input() pr: string;
  @Input() paddingRight: string;

  @Input() c: string;
  @Input() color: string;

  @Input() b: string;
  @Input() border: string;

  constructor(
    private el: ElementRef,
    @Inject(THEME_OPTIONS) private options: ThemeOptions
  ) {}

  ngOnInit() {
    const styles = {
      ...color({
        bg: this.bg || this.backgroundColor,
        color: this.c || this.color,
      }),
      ...border({
        border: this.b || this.border
      }),
      ...space({
        m: this.m || this.margin,
        p: this.p || this.padding,
        pt: this.pt || this.paddingTop,
        pb: this.pb || this.paddingBottom,
        pl: this.pl || this.paddingLeft,
        pr: this.pr || this.paddingRight,
      }),
    };
    console.log(styles);

    const styleProperties = Object.keys(styles);
    styleProperties.forEach((property) => {
      this.el.nativeElement.style[property] = styles[property];
    });
  }
}
