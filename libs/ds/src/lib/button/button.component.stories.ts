import { moduleMetadata, Meta } from '@storybook/angular';
import { boolean, select, text } from '@storybook/addon-knobs';

import { DsModule } from '../ds.module';
import { DsButtonComponent, BUTTON_SIZES, BUTTON_VARIANTS } from './button.component';

export default {
  title: 'Components/Button',
  component: DsButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [DsModule.withOptions()]
    })
  ]
} as Meta;

// const Template: Story<ButtonComponent> = (args) => ({
//   component: ButtonComponent,
//   // props: args,
//   template: `<button [ds-button]="variant + ' ' + size" [disabled]="disabled">{{text}}</button>`
// });

// export const Primary = Template.bind({});
// Primary.storyName = 'Primary';
// Primary.args = {
//   text: text('text', 'Primary'),
//   // classNames: text('classNames', ''),
//   variant: select('variant', BUTTON_VARIANTS, 'primary'),
//   size: select('size', BUTTON_SIZES, 'medium'),
//   disabled: boolean('disabled', false)
// } as any;

export const Button = () => ({
  moduleMetadata: {
    imports: []
  },
  template: `<button [ds-button]="variant + ' ' + size" [disabled]="disabled">{{text}}</button>`,
  props: {
    text: text('text', 'Button'),
    variant: select('variant', BUTTON_VARIANTS, 'primary'),
    size: select('size', BUTTON_SIZES, 'medium'),
    disabled: boolean('disabled', false)
  }
});

export const Anchor = () => ({
  moduleMetadata: {
    imports: []
  },
  template: `<a [ds-button]="variant + ' ' + size" [disabled]="disabled" href="https://rangle.io" target="_blank">{{text}}</a>`,
  props: {
    text: text('text', 'Anchor'),
    variant: select('variant', BUTTON_VARIANTS, 'primary'),
    size: select('size', BUTTON_SIZES, 'medium'),
    disabled: boolean('disabled', false)
  }
});
