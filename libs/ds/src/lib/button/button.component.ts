import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostBinding } from '@angular/core';

export type ButtonType = 'primary' | 'secondary';
export type ButtonSize = 'small' | 'medium' | 'large';
@Component({
  selector: 'button[ds-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  inputs: ['classNames:ds-button'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  private _classNames: string;

  @HostBinding('class.ds-button--primary') get isPrimary(): boolean {
    return this.type === 'primary';
  }
  @HostBinding('class.ds-button--secondary') get isSecondary(): boolean {
    return this.type === 'secondary';
  }

  @HostBinding('class.ds-button--large') get isLarge(): boolean {
    return this.size === 'large';
  }
  @HostBinding('class.ds-button--medium') get isMedium(): boolean {
    return this.size === 'medium';
  }
  @HostBinding('class.ds-button--small') get isSmall(): boolean {
    return this.size === 'small';
  }

  type: ButtonType = 'primary';
  size: ButtonSize = 'medium';

  public set classNames(value: string) {
    if (this._classNames === value) {
      return;
    }

    this._classNames = value;

    const [type = null] = this._classNames.match(/primary|secondary/) || ['primary'];
    this.type = type as ButtonType;

    const [size = null] = this._classNames.match(/small|medium|large/) || ['medium'];
    this.size = size as ButtonSize;
  }

  public get classNames(): string {
    return this._classNames;
  }

}
