// Course data structure for all subjects
// This file defines the navigation structure for each course

export const courses = {
    ai: {
        id: 'ai',
        name: 'Artificial Intelligence',
        description: 'BCA Semester VI - Course Code: DSC16',
        topics: [
            {
                id: 'introduction',
                title: 'Introduction to AI',
                subtopics: [
                    { id: 'what-is-ai', title: 'What is Artificial Intelligence?' },
                    { id: 'foundations', title: 'Foundations of AI' },
                    { id: 'history', title: 'History of AI' },
                    { id: 'past-present-future', title: 'AI - Past, Present & Future' }
                ]
            },
            {
                id: 'intelligent-agents',
                title: 'Intelligent Agents',
                subtopics: [
                    { id: 'environments', title: 'Environments' },
                    { id: 'task-environment', title: 'Task Environment Properties' },
                    { id: 'agent-structure', title: 'Structure of Agents' },
                    { id: 'agent-types', title: 'Types of Agents' }
                ]
            },
            {
                id: 'problem-solving',
                title: 'Problem Solving by Searching',
                subtopics: [
                    { id: 'problem-solving-agents', title: 'Problem-Solving Agents' },
                    { id: 'uninformed-search', title: 'Uninformed Search Strategies' },
                    { id: 'informed-search', title: 'Informed (Heuristic) Search' },
                    { id: 'heuristic-functions', title: 'Heuristic Functions' }
                ]
            },
            {
                id: 'knowledge-representation',
                title: 'Knowledge Representation',
                subtopics: [
                    { id: 'knowledge-based-agents', title: 'Knowledge-Based Agents' },
                    { id: 'propositional-logic', title: 'Propositional Logic' },
                    { id: 'first-order-logic', title: 'First-Order Logic' },
                    { id: 'inference', title: 'Forward & Backward Chaining' }
                ]
            },
            {
                id: 'learning',
                title: 'Machine Learning',
                subtopics: [
                    { id: 'forms-of-learning', title: 'Forms of Learning' },
                    { id: 'supervised-learning', title: 'Supervised Learning' },
                    { id: 'decision-trees', title: 'Decision Trees' },
                    { id: 'neural-networks', title: 'Artificial Neural Networks' },
                    { id: 'svm', title: 'Support Vector Machines' }
                ]
            },
            {
                id: 'applications',
                title: 'Applications of AI',
                subtopics: [
                    { id: 'nlp', title: 'Natural Language Processing' },
                    { id: 'speech-recognition', title: 'Speech Recognition' },
                    { id: 'computer-vision', title: 'Computer Vision' },
                    { id: 'robotics', title: 'Robotics' }
                ]
            }
        ]
    },

    // Placeholder subjects for future content
    subject2: {
        id: 'subject2',
        name: 'Subject 2',
        description: 'Coming Soon',
        topics: [
            {
                id: 'coming-soon',
                title: 'Content Coming Soon',
                subtopics: []
            }
        ]
    },

    subject3: {
        id: 'subject3',
        name: 'Subject 3',
        description: 'Coming Soon',
        topics: [
            {
                id: 'coming-soon',
                title: 'Content Coming Soon',
                subtopics: []
            }
        ]
    },

    subject4: {
        id: 'subject4',
        name: 'Subject 4',
        description: 'Coming Soon',
        topics: [
            {
                id: 'coming-soon',
                title: 'Content Coming Soon',
                subtopics: []
            }
        ]
    },

    subject5: {
        id: 'subject5',
        name: 'Subject 5',
        description: 'Coming Soon',
        topics: [
            {
                id: 'coming-soon',
                title: 'Content Coming Soon',
                subtopics: []
            }
        ]
    },

    subject6: {
        id: 'subject6',
        name: 'Subject 6',
        description: 'Coming Soon',
        topics: [
            {
                id: 'coming-soon',
                title: 'Content Coming Soon',
                subtopics: []
            }
        ]
    }
}
