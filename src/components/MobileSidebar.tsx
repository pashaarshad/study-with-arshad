'use client';
// src/components/MobileSidebar.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Subject, Unit } from '@/types';
import styles from './MobileSidebar.module.css';

interface MobileSidebarProps {
    subject: Subject;
}

export default function MobileSidebar({ subject }: MobileSidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close sidebar when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent body scroll when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const isTopicActive = (unitSlug: string, topicSlug: string) => {
        return pathname === `/${subject.slug}/${unitSlug}/${topicSlug}`;
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                className={styles.toggleBtn}
                onClick={() => setIsOpen(true)}
                aria-label="Open navigation"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span>Topics</span>
            </button>

            {/* Overlay */}
            <div
                className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
                <div className={styles.header}>
                    <div className={styles.subjectInfo}>
                        <span className={styles.subjectIcon}>{subject.icon}</span>
                        <span className={styles.subjectTitle}>{subject.title}</span>
                    </div>
                    <button
                        className={styles.closeBtn}
                        onClick={() => setIsOpen(false)}
                        aria-label="Close navigation"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className={styles.nav}>
                    {subject.units.map((unit) => (
                        <div key={unit.id} className={styles.unit}>
                            <div className={styles.unitTitle}>{unit.title}</div>
                            <div className={styles.topicList}>
                                {unit.topics.map((topic) => (
                                    <Link
                                        key={topic.id}
                                        href={`/${subject.slug}/${unit.slug}/${topic.slug}`}
                                        className={`${styles.topicLink} ${isTopicActive(unit.slug, topic.slug) ? styles.topicActive : ''}`}
                                    >
                                        {topic.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
        </>
    );
}
