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

  constructor(
    private el: ElementRef,
    @Inject(THEME_OPTIONS) private options: ThemeOptions
  ) {}

  ngOnInit() {
    console.log(this.options);
    const styles = {
      ...color({
        bg: this.bg || this.backgroundColor,
      }),
      ...space({
        m: this.m || this.margin,
        p: this.p || this.padding,
        pt: this.pt || this.paddingTop,
      }),
    };

    const styleProperties = Object.keys(styles);
    styleProperties.forEach((property) => {
      this.el.nativeElement.style[property] = styles[property];
    });
  }
}
