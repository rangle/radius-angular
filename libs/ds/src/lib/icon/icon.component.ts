import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

const selector = 'ds-icon';

// Increasing integer for generating unique ids for icon components.
let nextUniqueId = 0;

export const ICON_TYPES = [
  'checkCircle',
  'checkboxBlank',
  'checkboxChecked',
  'checkboxIndeterminate',
  'close',
  'error',
  'expandMore',
  'info',
  'loader',
  'place',
  'radioChecked',
  'radioUnchecked',
  'search',
  'visibility',
  'visibilityOff'
] as const;
export type IconType = typeof ICON_TYPES[number];

@Component({
  selector: selector,
  exportAs: 'dsIcon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsIconComponent {
  @Input() type!: IconType;

  @HostBinding('class')
  get classNames(): string {
    return `${selector} ${selector}--${this.type}`;
  }

  private _uniqueId = `${selector}-${++nextUniqueId}`;

  /** A unique id for the icon. If none is supplied, it will be auto-generated. */
  @Input()
  @HostBinding('id')
  id: string = this._uniqueId;
}
