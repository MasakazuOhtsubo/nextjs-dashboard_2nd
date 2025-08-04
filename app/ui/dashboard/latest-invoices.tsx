import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';
import { fetchLatestInvoices } from '@/app/lib/data';
import { LatestInvoicesPresentation } from './latest-invoices-presentation';

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();
  return <LatestInvoicesPresentation latestInvoices={latestInvoices} />;
}
