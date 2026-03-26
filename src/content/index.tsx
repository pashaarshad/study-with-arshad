// src/content/index.tsx
import React from 'react';

// Content imports for AI - Introduction
import WhatIsAI from './ai/introduction/what-is-ai';
import FoundationsOfAI from './ai/introduction/foundations-of-ai';
import HistoryOfAI from './ai/introduction/history-of-ai';
import AIPastPresentFuture from './ai/introduction/ai-past-present-future';
import IntelligentAgents from './ai/introduction/intelligent-agents';
import AgentEnvironments from './ai/introduction/agent-environments';
import TypesOfAgents from './ai/introduction/types-of-agents';

// Content imports for FDS - IA Prep
import FDSImportantQuestions from './fds/ia-prep/important-questions';

// Content imports for FDS - Data Mining (Unit 1)
import IntroductionToDataMining from './fds/data-mining/introduction-to-data-mining';

// Content imports for FDS - Data Warehouse (Unit 2)
import DataWarehouseConcepts from './fds/data-warehouse/data-warehouse-concepts';

// Content imports for FDS - Mining Frequent Patterns (Unit 3)
import MiningFrequentPatterns from './fds/frequent-patterns/mining-frequent-patterns';

// Content imports for FDS - Classification (Unit 4)
import ClassificationConcepts from './fds/classification/classification-concepts';

// Content imports for FDS - Clustering (Unit 5)
import ClusteringConcepts from './fds/clustering/clustering-concepts';

// Content registry
const contentRegistry: Record<string, Record<string, Record<string, React.ComponentType>>> = {
    ai: {
        introduction: {
            'what-is-ai': WhatIsAI,
            'foundations-of-ai': FoundationsOfAI,
            'history-of-ai': HistoryOfAI,
            'ai-past-present-future': AIPastPresentFuture,
            'intelligent-agents': IntelligentAgents,
            'agent-environments': AgentEnvironments,
            'types-of-agents': TypesOfAgents,
        },
    },
    fds: {
        'ia-prep': {
            'important-questions': FDSImportantQuestions,
        },
        'data-mining': {
            'introduction-to-data-mining': IntroductionToDataMining,
        },
        'data-warehouse': {
            'data-warehouse-concepts': DataWarehouseConcepts,
        },
        'frequent-patterns': {
            'mining-frequent-patterns': MiningFrequentPatterns,
        },
        'classification': {
            'classification-concepts': ClassificationConcepts,
        },
        'clustering': {
            'clustering-concepts': ClusteringConcepts,
        },
    },
};

export function getTopicContentComponent(
    subject: string,
    unit: string,
    topic: string
): React.ComponentType | null {
    return contentRegistry[subject]?.[unit]?.[topic] || null;
}
