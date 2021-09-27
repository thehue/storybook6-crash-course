import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, Props } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    children: {
      defaultValue: 'Default Text',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'Secondary',
  children: 'I am Secondary',
  /** 클릭이 발생하였을 때 작동되는 함수명을 입력해주면 된다 */
  onClick: action('secondary click'),
};
