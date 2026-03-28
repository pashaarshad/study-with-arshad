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

// Content imports for FDS - Unit 1: Data Mining
import DMIntroduction from './fds/data-mining/introduction';
import DMDefinitions from './fds/data-mining/data-mining-definitions';
import KDDvsDataMining from './fds/data-mining/kdd-vs-data-mining';
import DBMSvsDataMining from './fds/data-mining/dbms-vs-data-mining';
import DMTechniques from './fds/data-mining/dm-techniques';
import DMProblemsIssues from './fds/data-mining/problems-issues-challenges';
import DMApplications from './fds/data-mining/dm-applications';

// Content imports for FDS - Unit 2: Data Warehouse
import DWIntroduction from './fds/data-warehouse/introduction';
import MultidimensionalDataModel from './fds/data-warehouse/multidimensional-data-model';
import DataCleaning from './fds/data-warehouse/data-cleaning';
import DataIntegrationTransformation from './fds/data-warehouse/data-integration-transformation';
import DataReductionDiscretization from './fds/data-warehouse/data-reduction-discretization';

// Content imports for FDS - Unit 3: Mining Frequent Patterns
import FPBasicConcepts from './fds/frequent-patterns/basic-concepts';
import AprioriAlgorithm from './fds/frequent-patterns/apriori-algorithm';
import FPGrowthAlgorithm from './fds/frequent-patterns/fp-growth-algorithm';
import MiningAssociationRules from './fds/frequent-patterns/mining-association-rules';

// Content imports for FDS - Unit 4: Classification
import ClassificationBasics from './fds/classification/basic-concepts-issues';
import DecisionTreeInduction from './fds/classification/decision-tree-induction';
import BayesianClassification from './fds/classification/bayesian-classification';
import RuleBasedClassification from './fds/classification/rule-based-classification';
import KNNLazyLearners from './fds/classification/knn-lazy-learners';
import PredictionAccuracyPrecisionRecall from './fds/classification/prediction-accuracy-precision-recall';

// Content imports for FDS - Unit 5: Clustering
import ClusterAnalysis from './fds/clustering/cluster-analysis';
import PartitioningMethods from './fds/clustering/partitioning-methods';
import HierarchicalMethods from './fds/clustering/hierarchical-methods';
import DensityBasedMethods from './fds/clustering/density-based-methods';
import GridBasedMethods from './fds/clustering/grid-based-methods';
import ClusteringEvaluation from './fds/clustering/clustering-evaluation';

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
            'introduction': DMIntroduction,
            'data-mining-definitions': DMDefinitions,
            'kdd-vs-data-mining': KDDvsDataMining,
            'dbms-vs-data-mining': DBMSvsDataMining,
            'dm-techniques': DMTechniques,
            'problems-issues-challenges': DMProblemsIssues,
            'dm-applications': DMApplications,
        },
        'data-warehouse': {
            'introduction': DWIntroduction,
            'multidimensional-data-model': MultidimensionalDataModel,
            'data-cleaning': DataCleaning,
            'data-integration-transformation': DataIntegrationTransformation,
            'data-reduction-discretization': DataReductionDiscretization,
        },
        'frequent-patterns': {
            'basic-concepts': FPBasicConcepts,
            'apriori-algorithm': AprioriAlgorithm,
            'fp-growth-algorithm': FPGrowthAlgorithm,
            'mining-association-rules': MiningAssociationRules,
        },
        'classification': {
            'basic-concepts-issues': ClassificationBasics,
            'decision-tree-induction': DecisionTreeInduction,
            'bayesian-classification': BayesianClassification,
            'rule-based-classification': RuleBasedClassification,
            'knn-lazy-learners': KNNLazyLearners,
            'prediction-accuracy-precision-recall': PredictionAccuracyPrecisionRecall,
        },
        'clustering': {
            'cluster-analysis': ClusterAnalysis,
            'partitioning-methods': PartitioningMethods,
            'hierarchical-methods': HierarchicalMethods,
            'density-based-methods': DensityBasedMethods,
            'grid-based-methods': GridBasedMethods,
            'clustering-evaluation': ClusteringEvaluation,
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
