import { useParams } from 'react-router-dom'
import './ContentArea.css'

// Import all content modules
import { aiContent } from '../../content/ai'
import { courses } from '../../data/courses'

// Content mapping
const contentMap = {
    ai: aiContent
}

function ContentArea({ subjectId: propSubjectId }) {
    const { subjectId: paramSubjectId, topicId, subtopicId } = useParams()
    const subjectId = paramSubjectId || propSubjectId || 'ai'

    // Get the content based on URL parameters
    const getContent = () => {
        const subjectContent = contentMap[subjectId]

        if (!subjectContent) {
            return <WelcomeContent />
        }

        if (subtopicId && topicId) {
            const content = subjectContent[topicId]?.[subtopicId]
            if (content) return content
        }

        if (topicId) {
            const content = subjectContent[topicId]?.main
            if (content) return content
        }

        // Default to welcome/overview
        return subjectContent.overview || <WelcomeContent />
    }

    const content = getContent()
    const course = courses[subjectId]

    return (
        <div className="content-area">
            <article className="content-article">
                {content}
            </article>

            {/* Navigation Footer */}
            <footer className="content-footer">
                <div className="footer-info">
                    <p>Last updated: December 2024</p>
                </div>
                <div className="footer-actions">
                    <button className="feedback-btn" title="Report an issue">
                        <FeedbackIcon />
                        <span>Report Issue</span>
                    </button>
                </div>
            </footer>
        </div>
    )
}

// Welcome Content Component
function WelcomeContent() {
    return (
        <div className="welcome-content">
            <div className="welcome-header">
                <h1>Welcome to Study with Arshad</h1>
                <p className="welcome-subtitle">
                    Your comprehensive learning platform for mastering computer science concepts
                </p>
            </div>

            <div className="welcome-features">
                <div className="feature-card">
                    <div className="feature-icon">📚</div>
                    <h3>Comprehensive Content</h3>
                    <p>In-depth explanations with real-world examples and practical applications</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">💡</div>
                    <h3>Clear Understanding</h3>
                    <p>Concepts broken down into digestible pieces for better comprehension</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">🎯</div>
                    <h3>Exam-Oriented</h3>
                    <p>Content aligned with your syllabus for effective exam preparation</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">🌙</div>
                    <h3>Comfortable Reading</h3>
                    <p>Dark and light themes for studying at any time of day</p>
                </div>
            </div>

            <div className="welcome-cta">
                <p>Select a topic from the sidebar to begin your learning journey</p>
            </div>
        </div>
    )
}

// Icons
const FeedbackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
)

export default ContentArea
