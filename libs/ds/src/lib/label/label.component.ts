import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

const selector = 'ds-label';

// Increasing integer for generating unique ids for label components.
let nextUniqueId = 0;

@Component({
  selector: selector,
  exportAs: 'dsLabel',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsLabelComponent {
  @HostBinding('class')
  get classNames(): string {
    return `${selector}`;
  }

  private _uniqueId = `${selector}-${++nextUniqueId}`;

  /** A unique id for the label. If none is supplied, it will be auto-generated. */
  @Input()
  @HostBinding('id')
  id: string = this._uniqueId;
}
