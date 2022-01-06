import { Story, Meta } from '@storybook/angular/types-6-0';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { ButtonComponent } from './button.component';

const icon = `<svg width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
</svg>`;

export default {
  title: 'Components/Button Component',
  viewMode: 'docs',
  parameters: {
    badges: [BADGE.BETA],
  },
  argTypes: {
    selector: {
      table: {
        disable: true
      }
    },
    _classNames: {
      table: {
        disable: true
      }
    },
    label: {
      type: 'string',
      description: 'Button Label',
      defaultValue: 'Button'
    },
  },
  component: ButtonComponent,
} as Meta;

const Template: Story = (args) => {
  return {
    props: args,
    template: `
      <button ds-button variant="${args.variant}" size="${args.size}">
        ${args.label}
      </button>`,
  }
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Medium Button',
  size: 'medium',
  variant: 'primary'
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Small Button',
  size: 'small',
  variant: 'secondary'
}

export const Chevron = Template.bind({});
Chevron.args = {
  label: 'Chevron Large Button',
  size: 'large',
  variant: 'chevron'
}

export const Icon = Template.bind({});
Icon.args = {
  label: `${icon}`,
  size: 'medium',
  variant: 'icon'
}

export const IconWithText = Template.bind({});
IconWithText.args = {
  label: `${icon}&nbsp;&nbsp;Heart`,
  size: 'medium',
  variant: 'icon'
}
