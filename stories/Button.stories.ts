import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../app/ui/button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    className: 'px-6 py-3',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    className: 'px-2 py-1 text-xs',
  },
};
