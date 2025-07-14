import { fetchRevenue } from '@/app/lib/data';
import RevenueChartPresentation from './revenue-chart-presentation';

export default async function RevenueChartContainer() {
  const revenue = await fetchRevenue();

  return <RevenueChartPresentation revenue={revenue} />;
}
