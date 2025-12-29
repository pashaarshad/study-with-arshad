// src/data/subjects.ts
import { Subject } from '@/types';

export const subjects: Subject[] = [
    {
        id: 'ai',
        title: 'Artificial Intelligence',
        slug: 'ai',
        description: 'Learn the foundations, algorithms, and applications of Artificial Intelligence',
        icon: '🤖',
        units: [
            {
                id: 'unit-1',
                title: 'Unit 1: Introduction to AI',
                slug: 'introduction',
                topics: [
                    {
                        id: 'what-is-ai',
                        title: 'What is Artificial Intelligence?',
                        slug: 'what-is-ai',
                        description: 'Understanding the fundamentals of AI'
                    },
                    {
                        id: 'foundations-of-ai',
                        title: 'Foundations of AI',
                        slug: 'foundations-of-ai',
                        description: 'The interdisciplinary foundations that make AI possible'
                    },
                    {
                        id: 'history-of-ai',
                        title: 'History of AI',
                        slug: 'history-of-ai',
                        description: 'The evolution of AI from concept to reality'
                    },
                    {
                        id: 'ai-past-present-future',
                        title: 'AI - Past, Present and Future',
                        slug: 'ai-past-present-future',
                        description: 'Journey through AI evolution and future possibilities'
                    },
                    {
                        id: 'intelligent-agents',
                        title: 'Intelligent Agents',
                        slug: 'intelligent-agents',
                        description: 'Understanding agents and their environments'
                    },
                    {
                        id: 'agent-environments',
                        title: 'Environments & Task Specifications',
                        slug: 'agent-environments',
                        description: 'Specifying task environments and their properties'
                    },
                    {
                        id: 'types-of-agents',
                        title: 'Types of Agents',
                        slug: 'types-of-agents',
                        description: 'Simple reflex, model-based, goal-based, and utility-based agents'
                    }
                ]
            },
            {
                id: 'unit-2',
                title: 'Unit 2: Problem Solving by Searching',
                slug: 'problem-solving',
                topics: [
                    {
                        id: 'problem-solving-agents',
                        title: 'Problem-Solving Agents',
                        slug: 'problem-solving-agents',
                        description: 'Understanding problem-solving through search'
                    },
                    {
                        id: 'uninformed-search',
                        title: 'Uninformed Search Strategies',
                        slug: 'uninformed-search',
                        description: 'BFS, DFS, Uniform-cost, and more'
                    },
                    {
                        id: 'informed-search',
                        title: 'Informed Search Strategies',
                        slug: 'informed-search',
                        description: 'Heuristic functions, A*, and AO* search'
                    }
                ]
            },
            {
                id: 'unit-3',
                title: 'Unit 3: Knowledge Representation',
                slug: 'knowledge-representation',
                topics: [
                    {
                        id: 'knowledge-based-agents',
                        title: 'Knowledge-Based Agents',
                        slug: 'knowledge-based-agents',
                        description: 'Agents that use knowledge for reasoning'
                    },
                    {
                        id: 'propositional-logic',
                        title: 'Propositional Logic',
                        slug: 'propositional-logic',
                        description: 'Syntax, semantics, and theorem proving'
                    },
                    {
                        id: 'first-order-logic',
                        title: 'First-Order Logic',
                        slug: 'first-order-logic',
                        description: 'FOL syntax, semantics, and inference'
                    }
                ]
            },
            {
                id: 'unit-4',
                title: 'Unit 4: Machine Learning',
                slug: 'machine-learning',
                topics: [
                    {
                        id: 'forms-of-learning',
                        title: 'Forms of Learning',
                        slug: 'forms-of-learning',
                        description: 'Supervised, unsupervised, and reinforcement learning'
                    },
                    {
                        id: 'decision-trees',
                        title: 'Decision Trees',
                        slug: 'decision-trees',
                        description: 'Tree-based classification and regression'
                    },
                    {
                        id: 'neural-networks',
                        title: 'Artificial Neural Networks',
                        slug: 'neural-networks',
                        description: 'Understanding neural network architecture'
                    }
                ]
            },
            {
                id: 'unit-5',
                title: 'Unit 5: Applications of AI',
                slug: 'applications',
                topics: [
                    {
                        id: 'nlp',
                        title: 'Natural Language Processing',
                        slug: 'nlp',
                        description: 'Text classification and information retrieval'
                    },
                    {
                        id: 'computer-vision',
                        title: 'Computer Vision',
                        slug: 'computer-vision',
                        description: 'Image processing and visual understanding'
                    },
                    {
                        id: 'robotics',
                        title: 'Robotics',
                        slug: 'robotics',
                        description: 'AI in robotic systems'
                    }
                ]
            }
        ]
    },
    {
        id: 'subject-2',
        title: 'Subject 2',
        slug: 'subject-2',
        description: 'Coming Soon',
        icon: '📘',
        units: []
    },
    {
        id: 'subject-3',
        title: 'Subject 3',
        slug: 'subject-3',
        description: 'Coming Soon',
        icon: '📗',
        units: []
    },
    {
        id: 'subject-4',
        title: 'Subject 4',
        slug: 'subject-4',
        description: 'Coming Soon',
        icon: '📙',
        units: []
    },
    {
        id: 'subject-5',
        title: 'Subject 5',
        slug: 'subject-5',
        description: 'Coming Soon',
        icon: '📕',
        units: []
    },
    {
        id: 'subject-6',
        title: 'Subject 6',
        slug: 'subject-6',
        description: 'Coming Soon',
        icon: '📓',
        units: []
    }
];

export function getSubjectBySlug(slug: string): Subject | undefined {
    return subjects.find(subject => subject.slug === slug);
}

export function getTopicContent(subjectSlug: string, unitSlug: string, topicSlug: string) {
    const subject = getSubjectBySlug(subjectSlug);
    if (!subject) return null;

    const unit = subject.units.find(u => u.slug === unitSlug);
    if (!unit) return null;

    const topic = unit.topics.find(t => t.slug === topicSlug);
    return topic || null;
}
