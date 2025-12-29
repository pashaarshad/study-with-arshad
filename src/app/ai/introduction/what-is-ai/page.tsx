import { Metadata } from 'next';
import WhatIsAIContent from '@/components/content/WhatIsAIContent';

export const metadata: Metadata = {
    title: 'What is Artificial Intelligence? - Study with Arshad',
    description: 'Learn what Artificial Intelligence is, its definitions, types, and real-world applications. A comprehensive guide for beginners.',
};

export default function WhatIsAIPage() {
    return <WhatIsAIContent />;
}
