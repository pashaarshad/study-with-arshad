import { Metadata } from 'next';
import HistoryContent from '@/components/content/HistoryContent';

export const metadata: Metadata = {
    title: 'History of AI - Study with Arshad',
    description: 'Explore the complete history of Artificial Intelligence from 1943 to present, including key milestones, AI winters, and breakthroughs.',
};

export default function HistoryPage() {
    return <HistoryContent />;
}
