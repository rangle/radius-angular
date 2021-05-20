import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation
} from '@angular/core';

const selector = 'ds-button';

const BUTTON_VARIANTS = ['primary', 'secondary', 'transparent'] as const;
export type ButtonVariant = typeof BUTTON_VARIANTS[number];

const BUTTON_SIZES = ['small', 'medium', 'large'] as const;
export type ButtonSize = typeof BUTTON_SIZES[number];

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `button[${selector}]`,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  // @HostBinding('class.ds-button--primary') get isPrimary(): boolean {
  //   return this.variant === 'primary';
  // }

  // @HostBinding('class.ds-button--secondary') get isSecondary(): boolean {
  //   return this.variant === 'secondary';
  // }

  // @HostBinding('class.ds-button--large') get isLarge(): boolean {
  //   return this.size === 'large';
  // }

  // @HostBinding('class.ds-button--medium') get isMedium(): boolean {
  //   return this.size === 'medium';
  // }

  // @HostBinding('class.ds-button--small') get isSmall(): boolean {
  //   return this.size === 'small';
  // }

  public variant: ButtonVariant = 'primary';
  public size: ButtonSize = 'medium';

  //eslint-disable-next-line @angular-eslint/no-input-rename
  @Input(selector)
  @HostBinding('class')
  public set classNames(value: string) {
    if (this._classNames === value) {
      return;
    }

    this._classNames = value;

    this.variant = BUTTON_VARIANTS.find(variant => this._classNames.includes(variant)) || 'primary';

    this.size = BUTTON_SIZES.find(size => this._classNames.includes(size)) || 'medium';
  }
  public get classNames(): string {
    return `${selector}--${this.variant} ${selector}--${this.size}`;
  }
  private _classNames!: string;
}
