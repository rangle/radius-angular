import { Meta } from '@storybook/angular';
import { select } from '@storybook/addon-knobs';

import { IconComponent, ICON_TYPES } from './icon.component';

export default {
  title: 'Components/Icon',
  component: IconComponent
} as Meta;

export const Custom = () => ({
  props: {
    type: select('type', ICON_TYPES, ICON_TYPES[0])
  }
})
