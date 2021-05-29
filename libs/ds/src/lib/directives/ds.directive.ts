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
    [backgroundColor], [bc],
    [border], [b],
    [borderBottom], [bb],
    [borderLeft], [bl],
    [borderRight], [br],
    [borderTop], [bt],
    [borderX], [bx],
    [borderY], [by],
    [color], [c],
    [fontSize], [fs],
    [height], [h],
    [margin], [m],
    [marginBottom], [mb],
    [marginLeft], [ml],
    [marginRight], [mr],
    [marginTop], [mt],
    [marginX], [mx],
    [marginY], [my],
    [padding], [p],
    [paddingBottom], [pb],
    [paddingLeft], [pl],
    [paddingRight], [pr],
    [paddingTop], [pt],
    [paddingX], [px],
    [paddingY], [py],
    [width], [w]
  `,
})
export class DsDirective implements OnChanges {
  @Input() backgroundColor!: string;
  @Input() bc!: string;

  @Input() border!: string;
  @Input() b!: string;

  @Input() borderBottom!: string;
  @Input() bb!: string;

  @Input() borderLeft!: string;
  @Input() bl!: string;

  @Input() borderRight!: string;
  @Input() br!: string;

  @Input() borderTop!: string;
  @Input() bt!: string;

  @Input() borderX!: string;
  @Input() bx!: string;

  @Input() borderY!: string;
  @Input() by!: string;

  @Input() color!: string;
  @Input() c!: string;

  @Input() fontSize!: string;
  @Input() fs!: string;

  @Input() height!: string;
  @Input() h!: string;

  @Input() margin!: string;
  @Input() m!: string;

  @Input() marginBottom!: string;
  @Input() mb!: string;

  @Input() marginLeft!: string;
  @Input() ml!: string;

  @Input() marginRight!: string;
  @Input() mr!: string;

  @Input() marginTop!: string;
  @Input() mt!: string;

  @Input() marginX!: string;
  @Input() mx!: string;

  @Input() marginY!: string;
  @Input() my!: string;

  @Input() padding!: string;
  @Input() p!: string;

  @Input() paddingBottom!: string;
  @Input() pb!: string;

  @Input() paddingLeft!: string;
  @Input() pl!: string;

  @Input() paddingRight!: string;
  @Input() pr!: string;

  @Input() paddingTop!: string;
  @Input() pt!: string;

  @Input() paddingX!: string;
  @Input() px!: string;

  @Input() paddingY!: string;
  @Input() py!: string;

  @Input() width!: string;
  @Input() w!: string;

  constructor(
    private _element: ElementRef,
    @Inject(THEME_OPTIONS) private options: ThemeOptions
  ) {}

  ngOnChanges() {
    const styles: Partial<CSSStyleDeclaration> = {
      backgroundColor: this.backgroundColor || this.bc,
      border: this.border || this.b,
      borderBottom: this.borderY || this.by || this.borderBottom || this.bb,
      borderLeft: this.borderX || this.bx || this.borderLeft || this.bl,
      borderRight: this.borderX || this.bx || this.borderRight || this.br,
      borderTop: this.borderY || this.by || this.borderTop || this.bt,
      color: this.color || this.c,
      fontSize: this.fontSize || this.fs,
      height: this.height || this.h,
      margin: this.margin || this.m,
      marginBottom: this.marginY || this.my || this.marginBottom || this.mb,
      marginLeft: this.marginX || this.mx || this.marginLeft || this.ml,
      marginRight: this.marginX || this.mx || this.marginRight || this.mr,
      marginTop: this.marginY || this.my || this.marginTop || this.mt,
      padding: this.padding || this.p,
      paddingBottom: this.paddingY || this.py || this.paddingBottom || this.pb,
      paddingLeft: this.paddingX || this.px || this.paddingLeft || this.pl,
      paddingRight: this.paddingX || this.px || this.paddingRight || this.pr,
      paddingTop: this.paddingY || this.py || this.paddingTop || this.pt,
      width: this.width || this.w
    };

    Object.assign(this._element.nativeElement.style, styles);
  }
}
