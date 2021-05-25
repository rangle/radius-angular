import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[isLoading]',
  exportAs: 'isLoading'
})
export class DSIsLoadingDirective {
  @HostBinding('class')
  readonly className = 'ds-loading';
}
