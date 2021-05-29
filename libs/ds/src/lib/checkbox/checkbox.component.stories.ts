import { moduleMetadata, Meta } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs';

import { DsModule } from '../ds.module';
import { DsCheckboxComponent } from './checkbox.component';

export default {
  title: 'Components/Checkbox',
  component: DsCheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [DsModule.withOptions()]
    })
  ]
} as Meta;

export const Custom = () => ({
  template: `<ds-checkbox [disabled]="disabled">{{label}}</ds-checkbox>`,
  props: {
    label: text('label', 'label'),
    name: text('name', ''),
    value: text('value', ''),
    checked: boolean('checked', false),
    disabled: boolean('disabled', false),
    required: boolean('required', false)
  }
})
