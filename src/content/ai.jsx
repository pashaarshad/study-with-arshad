// AI Course Content - Artificial Intelligence and Applications
// BCA Semester VI - Course Code: DSC16

import { IntroductionContent } from './ai/introduction'
import { IntelligentAgentsContent } from './ai/intelligent-agents'

// Export all AI content organized by topic
export const aiContent = {
    // Overview/Welcome for AI course
    overview: IntroductionContent.overview,

    // Unit 1: Introduction to AI
    introduction: {
        main: IntroductionContent.main,
        'what-is-ai': IntroductionContent.whatIsAI,
        'foundations': IntroductionContent.foundations,
        'history': IntroductionContent.history,
        'past-present-future': IntroductionContent.pastPresentFuture
    },

    // Unit 2: Intelligent Agents
    'intelligent-agents': {
        main: IntelligentAgentsContent.main,
        'environments': IntelligentAgentsContent.environments,
        'task-environment': IntelligentAgentsContent.taskEnvironment,
        'agent-structure': IntelligentAgentsContent.agentStructure,
        'agent-types': IntelligentAgentsContent.agentTypes
    }
}
