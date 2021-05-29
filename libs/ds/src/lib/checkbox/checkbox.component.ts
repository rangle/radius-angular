import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const selector = 'ds-checkbox';

// Increasing integer for generating unique ids for checkbox components.
let nextUniqueId = 0;

/** Change event object emitted by DsCheckbox. */
export class DsCheckboxChange {
  /** The source Dsheckbox of the event. */
  source!: DsCheckboxComponent;
  /** The new `checked` value of the checkbox. */
  checked!: boolean;
}

@Component({
  selector: selector,
  exportAs: 'dsCheckbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DsCheckboxComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsCheckboxComponent implements ControlValueAccessor {
  @HostBinding('class')
  get classNames(): string {
    return `${selector}`;
  }

  private _uniqueId = `${selector}-${++nextUniqueId}`;

  /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
  @Input()
  @HostBinding('id')
  id: string = this._uniqueId;

  /** Returns the unique id for the visual hidden input. */
  get inputId(): string { return `${this.id || this._uniqueId}-input`; }

  /** Name value will be applied to the input element if present */
  @Input() name: string | null = null;

  /** Event emitted when the checkbox's `checked` value changes. */
  //eslint-disable-next-line @angular-eslint/no-output-native
  @Output() readonly change = new EventEmitter<DsCheckboxChange>();

  /** The value attribute of the native input element */
  @Input() value!: string;

  /** The native `<input type="checkbox">` element */
  @ViewChild('input') _inputElement!: ElementRef<HTMLInputElement>;

  /** Whether the checkbox is checked. */
  @Input()
  @HostBinding(`class.${selector}--checked`)
  get checked(): boolean | string { return this._checked; }
  set checked(value: boolean | string) {
    const checked = value != null && `${value}` !== 'false';

    if (this._checked !== checked) {
      this._checked = checked;
      this._changeDetector.markForCheck();
    }
  }
  private _checked = false;

  /** Whether the checkbox is required. */
  @Input()
  @HostBinding(`class.${selector}--required`)
  get required(): boolean | string { return this._required; }
  set required(value: boolean | string) { this._required = value != null && `${value}` !== 'false'; }
  private _required = false;

  /** Whether the checkbox is disabled. */
  @Input()
  @HostBinding(`class.${selector}--disabled`)
  get disabled(): boolean | string { return this._disabled; }
  set disabled(value: boolean | string) {
    const disabled = value != null && `${value}` !== 'false';

    if (this._disabled !== disabled) {
      this._disabled = disabled;
      this._changeDetector.markForCheck();
    }
  }
  private _disabled = false;

  constructor(
    private _changeDetector: ChangeDetectorRef
  ) { }

  /** Toggles the `checked` state of the checkbox. */
  toggle(): void {
    this.checked = !this.checked;
  }

  /**
   * Event handler for checkbox input element.
   * Toggles checked state if element is not disabled.
   * @param event
   */
  _onClick(event: Event) {
    event.stopPropagation();

    if (!this._disabled) {
      this.toggle();
    }

    this._emitChangeEvent();
  }

  private _emitChangeEvent() {
    const event = new DsCheckboxChange();
    event.source = this;
    event.checked = !!this.checked;

    this._onChange(this.checked);
    this.change.emit(event);

    if (this._inputElement) {
      this._inputElement.nativeElement.checked = !!this.checked;
    }
  }

  /**
   * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
   */
   @HostListener('blur')
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   _onTouched: () => unknown = () => {};

  /**
   * Called when the control's value changes in the UI. Needed to properly implement ControlValueAccessor.
   */
   // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onChange: (value: unknown) => void = () => {};

  /**
   * @description
   * Writes a new value to the element.
   *
   * This method is called by the forms API to write to the view when programmatic
   * changes from model to view are requested.
   *
   * Implemented as part of ControlValueAccessor.
   *
   * @param obj The new value for the element
   */
  writeValue(value: unknown) {
    this.checked = !!value;
  }

  /**
   * @description
   * Registers a callback function that is called when the control's value changes in the UI.
   *
   * This method is called by the forms API on initialization to update the form
   * model when values propagate from the view to the model.
   *
   * Implemented as part of ControlValueAccessor.
   *
   * @param fn The callback function to register
   */
  registerOnChange(fn: (value: unknown) => void) {
    this._onChange = fn;
  }

  /**
   * @description
   * Registers a callback function that is called by the forms API on initialization
   * to update the form model on blur.
   *
   * Implemented as part of ControlValueAccessor.
   *
   * @param fn The callback function to register
   */
  registerOnTouched(fn: () => unknown) {
    this._onTouched = fn;
  }

  /**
   * @description
   * Function that is called by the forms API when the control status changes to or from 'DISABLED'.
   * Depending on the status, it enables or disables the appropriate DOM element.
   *
   * Implemented as part of ControlValueAccessor.
   *
   * @param isDisabled The disabled status to set on the element
   */
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
