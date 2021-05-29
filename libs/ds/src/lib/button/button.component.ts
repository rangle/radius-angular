import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input
} from '@angular/core';

const selector = 'ds-button';

// Increasing integer for generating unique ids for button components.
let nextUniqueId = 0;

export const BUTTON_VARIANTS = ['primary', 'secondary', 'transparent'] as const;
export type ButtonVariant = typeof BUTTON_VARIANTS[number];

export const BUTTON_SIZES = ['small', 'medium', 'large'] as const;
export type ButtonSize = typeof BUTTON_SIZES[number];

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `a[${selector}], button[${selector}]`,
  exportAs: 'msButton',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '(click)': '_haltDisabledEvents($event)'
  },
  template: `<span class="${selector}-wrapper"><ng-content></ng-content></span>`,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsButtonComponent {
  public variant: ButtonVariant = 'primary';
  public size: ButtonSize = 'medium';

  //eslint-disable-next-line @angular-eslint/no-input-rename
  @Input(selector)
  @HostBinding('class')
  get classNames(): string {
    return `${selector} ${selector}--${this.variant} ${selector}--${this.size}`;
  }
  set classNames(value: string) {
    if (this._classNames === value) {
      return;
    }

    this._classNames = value;

    this.variant = BUTTON_VARIANTS.find(variant => this._classNames.includes(variant)) || 'primary';

    this.size = BUTTON_SIZES.find(size => this._classNames.includes(size)) || 'medium';
  }
  private _classNames!: string;

  private _uniqueId = `${selector}-${++nextUniqueId}`;

  /** A unique id for the button. If none is supplied, it will be auto-generated. */
  @Input()
  @HostBinding('id')
  id: string = this._uniqueId;

  /** Whether the button is disabled. */
  @Input()
  @HostBinding(`class.${selector}--disabled`)
  get disabled(): boolean | string { return this._disabled; }
  set disabled(value: boolean | string) { this._disabled = value != null && `${value}` !== 'false'; }
  private _disabled = false;

  _haltDisabledEvents(event: Event) {
    // A disabled button shouldn't apply any actions
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}
