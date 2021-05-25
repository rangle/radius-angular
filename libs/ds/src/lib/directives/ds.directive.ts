import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnChanges
} from '@angular/core';

import { THEME_OPTIONS, ThemeOptions } from '../types';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
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
    [height], [h],
    [width], [w]
  `,
})
export class DSDirective implements OnChanges {
  @Input() bg!: string;
  @Input() backgroundColor!: string;

  @Input() m!: string;
  @Input() margin!: string;

  @Input() p!: string;
  @Input() padding!: string;

  @Input() pt!: string;
  @Input() paddingTop!: string;

  @Input() pb!: string;
  @Input() paddingBottom!: string;

  @Input() pl!: string;
  @Input() paddingLeft!: string;

  @Input() pr!: string;
  @Input() paddingRight!: string;

  @Input() c!: string;
  @Input() color!: string;

  @Input() b!: string;
  @Input() border!: string;

  @Input() w!: string;
  @Input() width!: string;

  @Input() h!: string;
  @Input() height!: string;

  constructor(
    private _element: ElementRef,
    @Inject(THEME_OPTIONS) private options: ThemeOptions
  ) {}

  ngOnChanges() {
    const styles: Partial<CSSStyleDeclaration> = {
      height: this.height || this.h,
      width: this.width || this.w
      // ...color({
      //   bg: this.bg || this.backgroundColor,
      //   color: this.c || this.color,
      // }),
      // ...border({
      //   border: this.b || this.border
      // }),
      // ...space({
      //   m: this.m || this.margin,
      //   p: this.p || this.padding,
      //   pt: this.pt || this.paddingTop,
      //   pb: this.pb || this.paddingBottom,
      //   pl: this.pl || this.paddingLeft,
      //   pr: this.pr || this.paddingRight,
      // }),
    };
    console.log(styles);

    // const styleProperties = Object.keys(styles);
    // styleProperties.forEach((property) => {
    //   this._element.nativeElement.style[property] = styles[property];
    // });
    Object.assign(this._element.nativeElement.style, styles);
  }
}
