import { Meta } from '@storybook/angular';
import { select } from '@storybook/addon-knobs';

import { DsIconComponent, ICON_TYPES } from './icon.component';

export default {
  title: 'Components/Icon',
  component: DsIconComponent
} as Meta;

export const Custom = () => ({
  props: {
    type: select('type', ICON_TYPES, ICON_TYPES[0])
  }
})
