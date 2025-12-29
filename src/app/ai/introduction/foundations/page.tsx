import { Metadata } from 'next';
import FoundationsContent from '@/components/content/FoundationsContent';

export const metadata: Metadata = {
    title: 'Foundations of AI - Study with Arshad',
    description: 'Explore the foundational disciplines that contribute to Artificial Intelligence including Philosophy, Mathematics, Psychology, Computer Science, and more.',
};

export default function FoundationsPage() {
    return <FoundationsContent />;
}
