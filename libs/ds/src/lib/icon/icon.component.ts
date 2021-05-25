import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

const selector = 'ds-icon';

const ICON_TYPES = [
  'chckCircle',
  'checkboxBln',
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
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input() type!: IconType;

  @HostBinding('class')
  get classNames(): string {
    return `${selector} ${selector}--${this.type}`;
  }
}
