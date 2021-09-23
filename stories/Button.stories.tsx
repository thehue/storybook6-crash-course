import { Meta } from '@storybook/react';
import React from 'react';
import { Button } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Default = () => <Button variant="Primary">CLICK ME</Button>;
export const Secondary = () => <Button variant="Secondary">CLICK ME</Button>;
