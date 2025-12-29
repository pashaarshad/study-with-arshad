import { Metadata } from 'next';
import IntelligentAgentsContent from '@/components/content/IntelligentAgentsContent';

export const metadata: Metadata = {
    title: 'Intelligent Agents - Study with Arshad',
    description: 'Learn about Intelligent Agents in AI, including types of agents, environments, PEAS framework, and how agents make decisions.',
};

export default function IntelligentAgentsPage() {
    return <IntelligentAgentsContent />;
}
