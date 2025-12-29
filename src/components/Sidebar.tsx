'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { aiSyllabus } from '@/data/ai-syllabus';

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedUnits, setExpandedUnits] = useState<number[]>([1]); // Unit 1 expanded by default

  const toggleUnit = (unitId: number) => {
    setExpandedUnits(prev =>
      prev.includes(unitId)
        ? prev.filter(id => id !== unitId)
        : [...prev, unitId]
    );
  };

  const isTopicActive = (unitSlug: string, topicSlug: string) => {
    return pathname.includes(`/ai/${unitSlug}/${topicSlug}`);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>{aiSyllabus.name}</h2>
        <p className="course-info">
          <span>{aiSyllabus.code}</span>
          <span>•</span>
          <span>Semester {aiSyllabus.semester}</span>
          <span>•</span>
          <span>{aiSyllabus.credits} Credits</span>
        </p>
      </div>

      <nav className="sidebar-nav">
        {aiSyllabus.units.map((unit) => (
          <div key={unit.id} className="unit-group">
            {/* Unit Header */}
            <button
              className={`unit-header ${expandedUnits.includes(unit.id) ? 'expanded' : ''}`}
              onClick={() => toggleUnit(unit.id)}
            >
              <span className="unit-arrow">
                {expandedUnits.includes(unit.id) ? '▼' : '▶'}
              </span>
              <span className="unit-title">{unit.title}</span>
              <span className="unit-hours">{unit.hours}h</span>
            </button>

            {/* Expanded Content */}
            {expandedUnits.includes(unit.id) && (
              <div className="unit-content">
                {/* Chapter Name */}
                <div className="chapter-name">
                  {unit.chapterName}
                </div>

                {/* Topics */}
                <ul className="topic-list">
                  {unit.topics.map((topic) => (
                    <li key={topic.id}>
                      <Link
                        href={`/ai/${unit.slug}/${topic.slug}`}
                        className={`topic-link ${isTopicActive(unit.slug, topic.slug) ? 'active' : ''}`}
                      >
                        <span className="topic-number">{topic.id}</span>
                        <span className="topic-title">{topic.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </nav>

      <style jsx>{`
        .sidebar {
          position: fixed;
          top: 60px;
          left: 0;
          width: 300px;
          height: calc(100vh - 60px);
          background-color: var(--sidebar-bg);
          border-right: 1px solid var(--border-color);
          overflow-y: auto;
          z-index: 50;
        }

        .sidebar-header {
          padding: 1.25rem;
          border-bottom: 1px solid var(--border-color);
        }

        .sidebar-header h2 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .course-info {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .sidebar-nav {
          padding: 0.5rem 0;
        }

        .unit-group {
          border-bottom: 1px solid var(--border-color);
        }

        .unit-header {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.25rem;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          transition: background-color 0.2s ease;
        }

        .unit-header:hover {
          background-color: var(--sidebar-hover);
        }

        .unit-header.expanded {
          background-color: var(--sidebar-hover);
        }

        .unit-arrow {
          font-size: 0.7rem;
          color: var(--link-color);
          width: 12px;
        }

        .unit-title {
          flex: 1;
        }

        .unit-hours {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 400;
        }

        .unit-content {
          padding: 0 1.25rem 0.75rem;
        }

        .chapter-name {
          font-size: 0.8rem;
          color: var(--link-color);
          font-weight: 500;
          padding: 0.5rem 0 0.5rem 1.25rem;
          border-left: 2px solid var(--border-color);
          margin-left: 0.25rem;
        }

        .topic-list {
          list-style: none;
          padding: 0;
          margin: 0;
          margin-left: 0.25rem;
          border-left: 2px solid var(--border-color);
        }

        .topic-link {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem 0.5rem 1.25rem;
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.8rem;
          transition: all 0.2s ease;
          line-height: 1.4;
        }

        .topic-link:hover {
          color: var(--link-color);
          background-color: var(--sidebar-hover);
          text-decoration: none;
        }

        .topic-link.active {
          color: var(--link-color);
          background-color: rgba(34, 197, 94, 0.1);
          border-left: 2px solid var(--link-color);
          margin-left: -2px;
        }

        .topic-number {
          color: var(--text-muted);
          font-size: 0.75rem;
          min-width: 24px;
        }

        .topic-title {
          flex: 1;
        }

        @media (max-width: 1024px) {
          .sidebar {
            width: 260px;
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
}
