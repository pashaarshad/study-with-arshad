import { Metadata } from 'next';
import PastPresentFutureContent from '@/components/content/PastPresentFutureContent';

export const metadata: Metadata = {
  title: 'AI - Past, Present and Future - Study with Arshad',
  description: 'Understand the evolution of AI from its early days to present applications and future possibilities including AGI and ethical considerations.',
};

export default function PastPresentFuturePage() {
  return <PastPresentFutureContent />;
}
