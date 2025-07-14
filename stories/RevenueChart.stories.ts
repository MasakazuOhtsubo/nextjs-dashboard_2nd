import type { Meta, StoryObj } from '@storybook/react';
import RevenueChartPresentation from '../app/ui/dashboard/revenue-chart-presentation';

const meta: Meta<typeof RevenueChartPresentation> = {
  title: 'Dashboard/RevenueChart',
  component: RevenueChartPresentation,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockRevenueData = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export const Default: Story = {
  args: {
    revenue: mockRevenueData,
  },
};

export const LowRevenue: Story = {
  args: {
    revenue: [
      { month: 'Jan', revenue: 200 },
      { month: 'Feb', revenue: 180 },
      { month: 'Mar', revenue: 220 },
      { month: 'Apr', revenue: 250 },
      { month: 'May', revenue: 230 },
      { month: 'Jun', revenue: 320 },
    ],
  },
};

export const HighRevenue: Story = {
  args: {
    revenue: [
      { month: 'Jan', revenue: 8000 },
      { month: 'Feb', revenue: 9200 },
      { month: 'Mar', revenue: 7800 },
      { month: 'Apr', revenue: 10500 },
      { month: 'May', revenue: 11200 },
      { month: 'Jun', revenue: 12800 },
    ],
  },
};

export const SingleMonth: Story = {
  args: {
    revenue: [{ month: 'Jan', revenue: 2000 }],
  },
};

export const EmptyData: Story = {
  args: {
    revenue: [],
  },
};

export const FlatRevenue: Story = {
  args: {
    revenue: [
      { month: 'Jan', revenue: 2000 },
      { month: 'Feb', revenue: 2000 },
      { month: 'Mar', revenue: 2000 },
      { month: 'Apr', revenue: 2000 },
      { month: 'May', revenue: 2000 },
      { month: 'Jun', revenue: 2000 },
    ],
  },
};
