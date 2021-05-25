import { text, number, boolean } from '@storybook/addon-knobs';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    classNames: text('classNames', ''),
  }
})