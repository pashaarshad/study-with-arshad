import { useState, useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import './Sidebar.css'

// Icons
const ChevronIcon = ({ isOpen }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`chevron-icon ${isOpen ? 'open' : ''}`}
    >
        <polyline points="9 18 15 12 9 6" />
    </svg>
)

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
)

function Sidebar({ isOpen, closeSidebar, topics, subjectId }) {
    const location = useLocation()
    const { topicId, subtopicId } = useParams()

    // Track which topics are expanded
    const [expandedTopics, setExpandedTopics] = useState({})

    // Auto-expand the current topic when URL changes
    useEffect(() => {
        if (topicId) {
            setExpandedTopics(prev => ({ ...prev, [topicId]: true }))
        }
    }, [topicId])

    const toggleTopic = (id) => {
        setExpandedTopics(prev => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    const isTopicActive = (topic) => {
        return topicId === topic.id
    }

    const isSubtopicActive = (topic, subtopic) => {
        return topicId === topic.id && subtopicId === subtopic.id
    }

    return (
        <>
            {/* Overlay for mobile */}
            <div
                className={`sidebar-overlay ${isOpen ? 'visible' : ''}`}
                onClick={closeSidebar}
                aria-hidden="true"
            />

            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                {/* Mobile close button */}
                <button
                    className="sidebar-close"
                    onClick={closeSidebar}
                    aria-label="Close sidebar"
                >
                    <CloseIcon />
                </button>

                <div className="sidebar-header">
                    <h2 className="sidebar-title">Topics</h2>
                </div>

                <nav className="sidebar-nav" aria-label="Topic navigation">
                    <ul className="topic-list">
                        {topics.map((topic, index) => (
                            <li key={topic.id} className="topic-item">
                                <div className="topic-header">
                                    <Link
                                        to={`/${subjectId}/${topic.id}`}
                                        className={`topic-link ${isTopicActive(topic) && !subtopicId ? 'active' : ''}`}
                                        onClick={() => {
                                            if (topic.subtopics?.length > 0) {
                                                toggleTopic(topic.id)
                                            }
                                            closeSidebar()
                                        }}
                                    >
                                        <span className="topic-number">{index + 1}</span>
                                        <span className="topic-name">{topic.title}</span>
                                    </Link>

                                    {topic.subtopics?.length > 0 && (
                                        <button
                                            className="topic-toggle"
                                            onClick={() => toggleTopic(topic.id)}
                                            aria-expanded={expandedTopics[topic.id]}
                                            aria-label={`Toggle ${topic.title} subtopics`}
                                        >
                                            <ChevronIcon isOpen={expandedTopics[topic.id]} />
                                        </button>
                                    )}
                                </div>

                                {topic.subtopics?.length > 0 && (
                                    <ul className={`subtopic-list ${expandedTopics[topic.id] ? 'expanded' : ''}`}>
                                        {topic.subtopics.map((subtopic) => (
                                            <li key={subtopic.id} className="subtopic-item">
                                                <Link
                                                    to={`/${subjectId}/${topic.id}/${subtopic.id}`}
                                                    className={`subtopic-link ${isSubtopicActive(topic, subtopic) ? 'active' : ''}`}
                                                    onClick={closeSidebar}
                                                >
                                                    {subtopic.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="sidebar-footer">
                    <p className="sidebar-credit">© 2024 Study with Arshad</p>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
