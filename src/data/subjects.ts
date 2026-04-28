// src/data/subjects.ts
import { Subject } from '@/types';

// PDF Notes data for each subject
export interface PdfNote {
    title: string;
    fileName: string;
    path: string;
    size: string;
    unit?: string;
}

export interface SubjectPdfs {
    subjectSlug: string;
    notes: PdfNote[];
}

export const subjectPdfs: SubjectPdfs[] = [
    {
        subjectSlug: 'ai',
        notes: [
            {
                title: 'Unit 1 - AI Notes',
                fileName: 'Unit_I_AI Notes.pdf',
                path: '/6-sem-Subjets/AI-notes/Unit_I_AI Notes.pdf',
                size: '689 KB',
                unit: 'Unit 1'
            },
            {
                title: 'Unit 2 - AI Notes',
                fileName: 'UNIT-2 AI notes.pdf',
                path: '/6-sem-Subjets/AI-notes/UNIT-2 AI notes.pdf',
                size: '299 KB',
                unit: 'Unit 2'
            },
            {
                title: 'Unit 3 - Knowledge Representation',
                fileName: 'UNIT -3 knowledge representation .pdf',
                path: '/6-sem-Subjets/AI-notes/UNIT -3 knowledge representation .pdf',
                size: '560 KB',
                unit: 'Unit 3'
            },
            {
                title: 'Unit 4 - Learning',
                fileName: 'UNIT 4 Learning.pdf',
                path: '/6-sem-Subjets/AI-notes/UNIT 4 Learning.pdf',
                size: '815 KB',
                unit: 'Unit 4'
            },
            {
                title: 'Unit 5 - Applications of AI',
                fileName: 'UNIT 5 application AI.pdf',
                path: '/6-sem-Subjets/AI-notes/UNIT 5 application AI.pdf',
                size: '558 KB',
                unit: 'Unit 5'
            },
            {
                title: 'Unit 5 - Mining Frequent Patterns',
                fileName: 'unit-5 Mining frequent patterns.pdf',
                path: '/6-sem-Subjets/AI-notes/unit-5 Mining frequent patterns.pdf',
                size: '299 KB',
                unit: 'Unit 5'
            },
            {
                title: 'AI Question Paper (June 2025)',
                fileName: 'bca-6-sem-computer-application-artificial-intelligence-and-app-mp-295-jun-2025.pdf',
                path: '/6-sem-Subjets/AI-notes/bca-6-sem-computer-application-artificial-intelligence-and-app-mp-295-jun-2025.pdf',
                size: '70 KB',
                unit: 'Question Paper'
            }
        ]
    },
    {
        subjectSlug: 'fds',
        notes: [
            {
                title: 'Unit 1 - Fundamentals of Data Science',
                fileName: 'FDS Unit 1.pdf',
                path: '/6-sem-Subjets/FDS/FDS Unit 1.pdf',
                size: '323 KB',
                unit: 'Unit 1'
            },
            {
                title: 'Unit 2 - Data Science',
                fileName: 'Unit 2_Data Science_260219_120921.pdf',
                path: '/6-sem-Subjets/FDS/Unit 2_Data Science_260219_120921.pdf',
                size: '1.06 MB',
                unit: 'Unit 2'
            },
            {
                title: 'Unit 3 - Data Science',
                fileName: 'Unit 3 Data Science_260309_221103.pdf',
                path: '/6-sem-Subjets/FDS/Unit 3 Data Science_260309_221103.pdf',
                size: '711 KB',
                unit: 'Unit 3'
            },
            {
                title: 'Unit 4 - Data Science',
                fileName: 'FDS Unit 4.pdf',
                path: '/6-sem-Subjets/FDS/FDS Unit 4.pdf',
                size: '1.09 MB',
                unit: 'Unit 4'
            },
            {
                title: 'Unit 5 - Data Science',
                fileName: 'FDS Unit 5.pdf',
                path: '/6-sem-Subjets/FDS/FDS Unit 5.pdf',
                size: '1.11 MB',
                unit: 'Unit 5'
            }
        ]
    },
    {
        subjectSlug: 'php',
        notes: [
            {
                title: 'Unit 1 - PHP Notes (New)',
                fileName: '1 php notes u1 new.pdf',
                path: '/6-sem-Subjets/PHP/php_notes/1 php notes u1 new.pdf',
                size: '801 KB',
                unit: 'Unit 1'
            },
            {
                title: 'Unit 1 - PHP Programming (Done)',
                fileName: '1 php u1 --Done.pdf',
                path: '/6-sem-Subjets/PHP/php_notes/1 php u1 --Done.pdf',
                size: '1007 KB',
                unit: 'Unit 1'
            },
            {
                title: 'Unit 1 - PHP Unit 1 Notes (Set 1)',
                fileName: '1 PHP unit 1 notes(notes 1).pdf',
                path: '/6-sem-Subjets/PHP/php_notes/1 PHP unit 1 notes(notes 1).pdf',
                size: '10.8 MB',
                unit: 'Unit 1'
            },
            {
                title: 'Unit 1 - PHP Unit 1 (Set 2)',
                fileName: '1 UNIT-1PHP(notes 2).pdf',
                path: '/6-sem-Subjets/PHP/php_notes/1 UNIT-1PHP(notes 2).pdf',
                size: '11.1 MB',
                unit: 'Unit 1'
            },
            {
                title: 'Unit 2 - PHP Programming (Done)',
                fileName: '2 php u2 --Done.pdf',
                path: '/6-sem-Subjets/PHP/php_notes/2 php u2 --Done.pdf',
                size: '576 KB',
                unit: 'Unit 2'
            },
            {
                title: 'Unit 2 - PHP Unit 2 Notes (Set 1)',
                fileName: '2  PHP unit 2 notes(notes 1).pdf',
                path: '/6-sem-Subjets/PHP/php_notes/2  PHP unit 2 notes(notes 1).pdf',
                size: '13 MB',
                unit: 'Unit 2'
            },
            {
                title: 'Unit 2 - PHP Unit 2 (Set 2)',
                fileName: '2 PHP UNIT -2 (notes 2).pdf',
                path: '/6-sem-Subjets/PHP/php_notes/2 PHP UNIT -2 (notes 2).pdf',
                size: '6.4 MB',
                unit: 'Unit 2'
            },
            {
                title: 'Unit 3 - PHP & MySQL (Set 1 - Done)',
                fileName: '3 PHP and MySQL UNIT 3 (notes 1) ---Done.pdf',
                path: '/6-sem-Subjets/PHP/php_notes/3 PHP and MySQL UNIT 3 (notes 1) ---Done.pdf',
                size: '10 MB',
                unit: 'Unit 3'
            },
            {
                title: 'Unit 3 - PHP & MySQL (Set 2)',
                fileName: '3 PHP & MySQL UNIT -3 (notes 2).pdf',
                path: '/6-sem-Subjets/PHP/php_notes/3 PHP & MySQL UNIT -3 (notes 2).pdf',
                size: '4.8 MB',
                unit: 'Unit 3'
            },
            {
                title: 'Unit 4 - PHP & MySQL (Set 1)',
                fileName: '4 PHP and MySQL UNIT 4(notes 1).pdf',
                path: '/6-sem-Subjets/PHP/php_notes/4 PHP and MySQL UNIT 4(notes 1).pdf',
                size: '15.7 MB',
                unit: 'Unit 4'
            },
            {
                title: 'Unit 4 - PHP & MySQL (Set 2)',
                fileName: '4 PHP and MySQL UNIT -4 (notes 2).pdf',
                path: '/6-sem-Subjets/PHP/php_notes/4 PHP and MySQL UNIT -4 (notes 2).pdf',
                size: '8.6 MB',
                unit: 'Unit 4'
            },
            {
                title: 'Unit 5 - PHP & MySQL (Set 1)',
                fileName: '5 PHP and MySQL UNIT 5 (notes 1).pdf',
                path: '/6-sem-Subjets/PHP/php_notes/5 PHP and MySQL UNIT 5 (notes 1).pdf',
                size: '7.2 MB',
                unit: 'Unit 5'
            },
            {
                title: 'Unit 5 - PHP & MySQL (Set 2)',
                fileName: '5 PHP and MySQL Unit-5 (notes 2).pdf',
                path: '/6-sem-Subjets/PHP/php_notes/5 PHP and MySQL Unit-5 (notes 2).pdf',
                size: '6.1 MB',
                unit: 'Unit 5'
            },
            {
                title: 'PHP Lab Programs',
                fileName: 'PHP Lab Programs (1).pdf',
                path: '/6-sem-Subjets/PHP/PHP Lab Programs (1).pdf',
                size: '139 KB',
                unit: 'Lab'
            },
            {
                title: 'PHP Programs (11-17)',
                fileName: 'Today_PHP_Programs(11-17) (3).pdf',
                path: '/6-sem-Subjets/PHP/Today_PHP_Programs(11-17) (3).pdf',
                size: '130 KB',
                unit: 'Lab'
            },
            {
                title: 'PHP Programs (18-21)',
                fileName: 'PHP_Programs(18-21).pdf',
                path: '/6-sem-Subjets/PHP/PHP_Programs(18-21).pdf',
                size: '64 KB',
                unit: 'Lab'
            },
            {
                title: 'PHP & MySQL Assignment',
                fileName: 'VIA_PHP_MySQL_Assignment.pdf',
                path: '/6-sem-Subjets/PHP/VIA_PHP_MySQL_Assignment.pdf',
                size: '63 KB',
                unit: 'Assignment'
            },
            {
                title: 'Unit 1 - Questions',
                fileName: 'Unit-1 Qustion.pdf',
                path: '/6-sem-Subjets/PHP/Unit-1 Qustion.pdf',
                size: '55 KB',
                unit: 'Question Paper'
            },
            {
                title: 'PHP & MySQL Question Paper (June 2025)',
                fileName: 'bca-6-sem-computer-application-php-and-mysql-mp-296-jun-2025.pdf',
                path: '/6-sem-Subjets/PHP/bca-6-sem-computer-application-php-and-mysql-mp-296-jun-2025.pdf',
                size: '72 KB',
                unit: 'Question Paper'
            },
            {
                title: 'PHP Question Paper (2025)',
                fileName: 'Qustion_paper_2025.pdf',
                path: '/6-sem-Subjets/PHP/php_notes/Qustion_paper_2025.pdf',
                size: '72 KB',
                unit: 'Question Paper'
            }
        ]
    },
    {
        subjectSlug: 'wc',
        notes: [
            {
                title: 'Unit 1 - WCMS',
                fileName: 'WCMS unit 1.pdf',
                path: '/6-sem-Subjets/WC/WCMS unit 1.pdf',
                size: '221 KB',
                unit: 'Unit 1'
            },
            {
                title: 'Unit 2 - WCMS',
                fileName: 'WCMS unit2.pdf',
                path: '/6-sem-Subjets/WC/WCMS unit2.pdf',
                size: '397 KB',
                unit: 'Unit 2'
            },
            {
                title: 'Unit 3 - WCMS',
                fileName: 'wcms Unit3.pdf',
                path: '/6-sem-Subjets/WC/wcms Unit3.pdf',
                size: '537 KB',
                unit: 'Unit 3'
            },
            {
                title: 'Unit 4 - WCMS',
                fileName: 'wcms unit4.pdf',
                path: '/6-sem-Subjets/WC/wcms unit4.pdf',
                size: '649 KB',
                unit: 'Unit 4'
            },
            {
                title: 'Unit 5 - WCMS',
                fileName: 'wcms unit5.pdf',
                path: '/6-sem-Subjets/WC/wcms unit5.pdf',
                size: '1.1 MB',
                unit: 'Unit 5'
            }
        ]
    }
];

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
        id: 'fds',
        title: 'Fundamentals of Data Science',
        slug: 'fds',
        description: 'Learn data mining, data warehousing, classification, clustering, and pattern mining for data-driven decision making',
        icon: '📊',
        units: [
            {
                id: 'fds-unit-1',
                title: 'Unit 1: Data Mining',
                slug: 'data-mining',
                topics: [
                    {
                        id: 'dm-introduction',
                        title: 'Introduction to Data Mining',
                        slug: 'introduction',
                        description: 'What is Data Mining, importance, and real-world examples'
                    },
                    {
                        id: 'dm-definitions',
                        title: 'Data Mining Definitions',
                        slug: 'data-mining-definitions',
                        description: 'Formal definitions, key terminology, and interdisciplinary nature'
                    },
                    {
                        id: 'dm-kdd',
                        title: 'KDD vs Data Mining',
                        slug: 'kdd-vs-data-mining',
                        description: 'Knowledge Discovery in Databases (KDD) process and comparison with Data Mining'
                    },
                    {
                        id: 'dm-dbms',
                        title: 'DBMS vs Data Mining',
                        slug: 'dbms-vs-data-mining',
                        description: 'How Data Mining differs from traditional Database Management Systems'
                    },
                    {
                        id: 'dm-techniques',
                        title: 'DM Techniques',
                        slug: 'dm-techniques',
                        description: 'Classification, Clustering, Association Rules, Regression, Anomaly Detection, and Prediction'
                    },
                    {
                        id: 'dm-problems',
                        title: 'Problems, Issues & Challenges',
                        slug: 'problems-issues-challenges',
                        description: 'Data quality, scalability, privacy, complexity, interpretability challenges'
                    },
                    {
                        id: 'dm-applications',
                        title: 'DM Applications',
                        slug: 'dm-applications',
                        description: 'Applications in retail, banking, healthcare, education, telecom, web, and science'
                    }
                ]
            },
            {
                id: 'fds-unit-2',
                title: 'Unit 2: Data Warehouse',
                slug: 'data-warehouse',
                topics: [
                    {
                        id: 'dw-introduction',
                        title: 'Introduction to Data Warehouse',
                        slug: 'introduction',
                        description: 'Definition, 4 characteristics, OLTP vs OLAP, and ETL process'
                    },
                    {
                        id: 'dw-multidimensional',
                        title: 'Multidimensional Data Model',
                        slug: 'multidimensional-data-model',
                        description: 'Facts, Dimensions, Star vs Snowflake Schema, OLAP Operations, ROLAP/MOLAP/HOLAP'
                    },
                    {
                        id: 'dw-cleaning',
                        title: 'Data Cleaning',
                        slug: 'data-cleaning',
                        description: 'Handling missing values, noisy data (binning), and inconsistent data'
                    },
                    {
                        id: 'dw-integration',
                        title: 'Data Integration & Transformation',
                        slug: 'data-integration-transformation',
                        description: 'Schema integration, normalization, aggregation, generalization, attribute construction'
                    },
                    {
                        id: 'dw-reduction',
                        title: 'Data Reduction & Discretization',
                        slug: 'data-reduction-discretization',
                        description: 'Dimensionality reduction (PCA), numerosity reduction, compression, and discretization'
                    }
                ]
            },
            {
                id: 'fds-unit-3',
                title: 'Unit 3: Mining Frequent Patterns',
                slug: 'frequent-patterns',
                topics: [
                    {
                        id: 'fp-basic-concepts',
                        title: 'Basic Concepts',
                        slug: 'basic-concepts',
                        description: 'Frequent patterns, market basket analysis, support, confidence, and lift'
                    },
                    {
                        id: 'fp-apriori',
                        title: 'Apriori Algorithm',
                        slug: 'apriori-algorithm',
                        description: 'Apriori property, candidate generation, step-by-step worked example'
                    },
                    {
                        id: 'fp-fpgrowth',
                        title: 'FP-Growth Algorithm',
                        slug: 'fp-growth-algorithm',
                        description: 'FP-Tree construction, divide-and-conquer mining, Apriori vs FP-Growth'
                    },
                    {
                        id: 'fp-association-rules',
                        title: 'Mining Association Rules',
                        slug: 'mining-association-rules',
                        description: 'Rule generation from frequent itemsets, types of rules, and applications'
                    }
                ]
            },
            {
                id: 'fds-unit-4',
                title: 'Unit 4: Classification',
                slug: 'classification',
                topics: [
                    {
                        id: 'cls-basics',
                        title: 'Basic Concepts & Issues',
                        slug: 'basic-concepts-issues',
                        description: 'What is classification, supervised learning, training/testing, overfitting'
                    },
                    {
                        id: 'cls-decision-tree',
                        title: 'Decision Tree Induction',
                        slug: 'decision-tree-induction',
                        description: 'Entropy, Information Gain, building decision trees step-by-step'
                    },
                    {
                        id: 'cls-bayesian',
                        title: 'Bayesian Classification',
                        slug: 'bayesian-classification',
                        description: 'Bayes Theorem, Naïve Bayes algorithm with worked example'
                    },
                    {
                        id: 'cls-rule-based',
                        title: 'Rule-Based Classification',
                        slug: 'rule-based-classification',
                        description: 'IF-THEN rules, coverage, accuracy, generating rules from trees'
                    },
                    {
                        id: 'cls-knn',
                        title: 'KNN & Lazy Learners',
                        slug: 'knn-lazy-learners',
                        description: 'K-Nearest Neighbor algorithm, distance measures, choosing K'
                    },
                    {
                        id: 'cls-evaluation',
                        title: 'Prediction, Accuracy, Precision & Recall',
                        slug: 'prediction-accuracy-precision-recall',
                        description: 'Confusion matrix, accuracy, precision, recall, F1-score with examples'
                    }
                ]
            },
            {
                id: 'fds-unit-5',
                title: 'Unit 5: Clustering',
                slug: 'clustering',
                topics: [
                    {
                        id: 'clu-analysis',
                        title: 'Cluster Analysis',
                        slug: 'cluster-analysis',
                        description: 'What is clustering, clustering vs classification, types overview'
                    },
                    {
                        id: 'clu-partitioning',
                        title: 'Partitioning Methods (K-Means)',
                        slug: 'partitioning-methods',
                        description: 'K-Means algorithm step-by-step, Elbow method, K-Medoids'
                    },
                    {
                        id: 'clu-hierarchical',
                        title: 'Hierarchical Methods',
                        slug: 'hierarchical-methods',
                        description: 'Agglomerative, Divisive, Dendrograms, Linkage methods'
                    },
                    {
                        id: 'clu-density',
                        title: 'Density-Based Methods (DBSCAN)',
                        slug: 'density-based-methods',
                        description: 'DBSCAN algorithm, core/border/noise points, ε and MinPts'
                    },
                    {
                        id: 'clu-grid',
                        title: 'Grid-Based Methods',
                        slug: 'grid-based-methods',
                        description: 'STING, CLIQUE, WaveCluster, and complete method comparison'
                    },
                    {
                        id: 'clu-evaluation',
                        title: 'Clustering Evaluation',
                        slug: 'clustering-evaluation',
                        description: 'Silhouette coefficient, SSE, Dunn index, Purity with examples'
                    }
                ]
            },
            {
                id: 'fds-ia-prep',
                title: 'IA Preparation',
                slug: 'ia-prep',
                topics: [
                    {
                        id: 'important-questions',
                        title: 'Important IA Questions (40 Marks)',
                        slug: 'important-questions',
                        description: 'Key questions and answers for Internal Assessment'
                    }
                ]
            }
        ]
    },
    {
        id: 'php',
        title: 'PHP Programming',
        slug: 'php',
        description: 'Master PHP for server-side web development, MySQL integration, and dynamic websites',
        icon: '🐘',
        units: []
    },
    {
        id: 'wc',
        title: 'Web Content',
        slug: 'wc',
        description: 'Learn web content management, CMS platforms, and digital content strategies',
        icon: '🌐',
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
