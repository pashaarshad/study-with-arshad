// AI Course Syllabus Data Structure
// This file contains the complete syllabus for Artificial Intelligence course

export interface SubTopic {
    id: string;
    title: string;
    slug: string;
}

export interface Unit {
    id: number;
    title: string;
    chapterName: string;
    hours: number;
    slug: string;
    topics: SubTopic[];
}

export interface Subject {
    id: string;
    name: string;
    code: string;
    semester: string;
    credits: number;
    units: Unit[];
}

export const aiSyllabus: Subject = {
    id: 'ai',
    name: 'Artificial Intelligence and Applications',
    code: 'DSC16',
    semester: 'VI',
    credits: 4,
    units: [
        {
            id: 1,
            title: 'Unit 1',
            chapterName: 'Introduction to AI',
            hours: 10,
            slug: 'introduction',
            topics: [
                { id: '1.1', title: 'What is Artificial Intelligence', slug: 'what-is-ai' },
                { id: '1.2', title: 'Foundations of AI', slug: 'foundations' },
                { id: '1.3', title: 'History of AI', slug: 'history' },
                { id: '1.4', title: 'AI - Past, Present and Future', slug: 'past-present-future' },
                { id: '1.5', title: 'Intelligent Agents', slug: 'intelligent-agents' },
            ]
        },
        {
            id: 2,
            title: 'Unit 2',
            chapterName: 'Problem Solving by Searching',
            hours: 10,
            slug: 'problem-solving',
            topics: [
                { id: '2.1', title: 'Problem-Solving Agents', slug: 'problem-solving-agents' },
                { id: '2.2', title: 'Well-defined Problems and Solutions', slug: 'well-defined-problems' },
                { id: '2.3', title: 'Uninformed Search Strategies', slug: 'uninformed-search' },
                { id: '2.4', title: 'Informed (Heuristic) Search Strategies', slug: 'informed-search' },
                { id: '2.5', title: 'A* and AO* Search', slug: 'a-star-search' },
            ]
        },
        {
            id: 3,
            title: 'Unit 3',
            chapterName: 'Knowledge Representation',
            hours: 12,
            slug: 'knowledge-representation',
            topics: [
                { id: '3.1', title: 'Knowledge-Based Agents', slug: 'knowledge-based-agents' },
                { id: '3.2', title: 'The Wumpus World', slug: 'wumpus-world' },
                { id: '3.3', title: 'Propositional Logic', slug: 'propositional-logic' },
                { id: '3.4', title: 'First-Order Logic', slug: 'first-order-logic' },
                { id: '3.5', title: 'Forward and Backward Chaining', slug: 'chaining' },
            ]
        },
        {
            id: 4,
            title: 'Unit 4',
            chapterName: 'Learning & Machine Learning',
            hours: 10,
            slug: 'machine-learning',
            topics: [
                { id: '4.1', title: 'Forms of Learning', slug: 'forms-of-learning' },
                { id: '4.2', title: 'Supervised Learning', slug: 'supervised-learning' },
                { id: '4.3', title: 'Decision Trees', slug: 'decision-trees' },
                { id: '4.4', title: 'Artificial Neural Networks', slug: 'neural-networks' },
                { id: '4.5', title: 'Support Vector Machines', slug: 'svm' },
            ]
        },
        {
            id: 5,
            title: 'Unit 5',
            chapterName: 'Applications of AI',
            hours: 10,
            slug: 'applications',
            topics: [
                { id: '5.1', title: 'Natural Language Processing', slug: 'nlp' },
                { id: '5.2', title: 'Speech Recognition', slug: 'speech-recognition' },
                { id: '5.3', title: 'Image Processing & Computer Vision', slug: 'computer-vision' },
                { id: '5.4', title: 'Robotics', slug: 'robotics' },
            ]
        },
    ]
};

// Placeholder subjects for future
export const subjects = [
    { id: 'ai', name: 'Artificial Intelligence', icon: '🤖' },
    { id: 'subject2', name: 'Subject 2', icon: '📚' },
    { id: 'subject3', name: 'Subject 3', icon: '📖' },
    { id: 'subject4', name: 'Subject 4', icon: '📝' },
    { id: 'subject5', name: 'Subject 5', icon: '📗' },
    { id: 'subject6', name: 'Subject 6', icon: '📘' },
];
