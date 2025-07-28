import type { Meta, StoryObj } from '@storybook/react';
import { LatestInvoicesPresentation } from '../app/ui/dashboard/latest-invoices-presentation';

const meta: Meta<typeof LatestInvoicesPresentation> = {
  title: 'Dashboard/LatestInvoices',
  component: LatestInvoicesPresentation,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockLatestInvoices = [
  {
    id: '1',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
    amount: '$2,840.00',
  },
  {
    id: '2',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
    amount: '$1,450.00',
  },
  {
    id: '3',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
    amount: '$3,200.00',
  },
  {
    id: '4',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
    amount: '$1,890.00',
  },
  {
    id: '5',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
    amount: '$4,320.00',
  },
];

export const Default: Story = {
  args: {
    latestInvoices: mockLatestInvoices,
  },
};

export const SingleInvoice: Story = {
  args: {
    latestInvoices: [mockLatestInvoices[0]],
  },
};

export const EmptyState: Story = {
  args: {
    latestInvoices: [],
  },
};

export const TwoInvoices: Story = {
  args: {
    latestInvoices: mockLatestInvoices.slice(0, 2),
  },
};

export const ManyInvoices: Story = {
  args: {
    latestInvoices: [
      ...mockLatestInvoices,
      {
        id: '6',
        name: 'Amy Burns',
        email: 'amy@burns.com',
        image_url: '/customers/amy-burns.png',
        amount: '$2,100.00',
      },
      {
        id: '7',
        name: 'Balazs Orban',
        email: 'balazs@orban.com',
        image_url: '/customers/balazs-orban.png',
        amount: '$5,600.00',
      },
      {
        id: '8',
        name: 'Emil Kowalski',
        email: 'emil@kowalski.com',
        image_url: '/customers/emil-kowalski.png',
        amount: '$1,750.00',
      },
    ],
  },
};

export const HighAmounts: Story = {
  args: {
    latestInvoices: [
      {
        id: '1',
        name: 'Big Corporation',
        email: 'contact@bigcorp.com',
        image_url: '/customers/evil-rabbit.png',
        amount: '$25,840.00',
      },
      {
        id: '2',
        name: 'Mega Enterprise',
        email: 'billing@mega.com',
        image_url: '/customers/delba-de-oliveira.png',
        amount: '$45,000.00',
      },
      {
        id: '3',
        name: 'Ultra Solutions',
        email: 'payments@ultra.com',
        image_url: '/customers/lee-robinson.png',
        amount: '$78,500.00',
      },
    ],
  },
};
