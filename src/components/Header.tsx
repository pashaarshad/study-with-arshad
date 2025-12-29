'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { subjects } from '@/data/ai-syllabus';
import { usePathname } from 'next/navigation';

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();

    // Get current subject from URL
    const currentSubject = pathname.split('/')[1] || 'ai';

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <Link href="/" className="logo">
                    <span className="logo-icon">📚</span>
                    <span className="logo-text">Study with Arshad</span>
                </Link>

                {/* Subject Navigation */}
                <nav className="subject-nav">
                    {subjects.map((subject) => (
                        <Link
                            key={subject.id}
                            href={subject.id === 'ai' ? '/ai/introduction/what-is-ai' : '#'}
                            className={`subject-tab ${currentSubject === subject.id ? 'active' : ''} ${subject.id !== 'ai' ? 'disabled' : ''}`}
                        >
                            <span className="subject-icon">{subject.icon}</span>
                            <span className="subject-name">{subject.name}</span>
                        </Link>
                    ))}
                </nav>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="theme-toggle"
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    )}
                </button>
            </div>

            <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background-color: var(--header-bg);
          border-bottom: 1px solid var(--border-color);
          z-index: 100;
          box-shadow: var(--shadow);
        }

        .header-container {
          max-width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
          gap: 1rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 700;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .logo:hover {
          text-decoration: none;
        }

        .logo-icon {
          font-size: 1.5rem;
        }

        .subject-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          overflow-x: auto;
          flex: 1;
          justify-content: center;
        }

        .subject-tab {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem 0.875rem;
          border-radius: 6px;
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .subject-tab:hover {
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
          text-decoration: none;
        }

        .subject-tab.active {
          background-color: var(--link-color);
          color: white;
        }

        .subject-tab.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .subject-icon {
          font-size: 1rem;
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-secondary);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .theme-toggle:hover {
          background-color: var(--bg-tertiary);
          border-color: var(--link-color);
        }

        @media (max-width: 768px) {
          .subject-name {
            display: none;
          }
          
          .logo-text {
            display: none;
          }
          
          .subject-tab {
            padding: 0.5rem;
          }
        }
      `}</style>
        </header>
    );
}
