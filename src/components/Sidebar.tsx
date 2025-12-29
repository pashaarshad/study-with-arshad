'use client';
// src/components/Sidebar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Subject, Unit, Topic } from '@/types';
import styles from './Sidebar.module.css';

interface SidebarProps {
    subject: Subject;
}

interface UnitAccordionProps {
    unit: Unit;
    subjectSlug: string;
    isOpen: boolean;
    onToggle: () => void;
}

function UnitAccordion({ unit, subjectSlug, isOpen, onToggle }: UnitAccordionProps) {
    const pathname = usePathname();

    const isTopicActive = (topicSlug: string) => {
        return pathname === `/${subjectSlug}/${unit.slug}/${topicSlug}`;
    };

    const hasActiveTopic = unit.topics.some(topic => isTopicActive(topic.slug));

    return (
        <div className={`${styles.unit} ${hasActiveTopic ? styles.unitActive : ''}`}>
            <button
                className={styles.unitHeader}
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span className={styles.unitTitle}>{unit.title}</span>
                <svg
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>

            <div className={`${styles.topicList} ${isOpen ? styles.topicListOpen : ''}`}>
                {unit.topics.map((topic) => (
                    <Link
                        key={topic.id}
                        href={`/${subjectSlug}/${unit.slug}/${topic.slug}`}
                        className={`${styles.topicLink} ${isTopicActive(topic.slug) ? styles.topicActive : ''}`}
                    >
                        <span className={styles.topicIndicator}></span>
                        <span className={styles.topicTitle}>{topic.title}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default function Sidebar({ subject }: SidebarProps) {
    const pathname = usePathname();

    // Initialize open units based on current path
    const getInitialOpenUnits = () => {
        const openUnits: string[] = [];
        subject.units.forEach(unit => {
            if (unit.topics.some(topic => pathname.includes(`/${unit.slug}/${topic.slug}`))) {
                openUnits.push(unit.id);
            }
        });
        // If no unit matches, open the first one
        if (openUnits.length === 0 && subject.units.length > 0) {
            openUnits.push(subject.units[0].id);
        }
        return openUnits;
    };

    const [openUnits, setOpenUnits] = useState<string[]>(getInitialOpenUnits);

    const toggleUnit = (unitId: string) => {
        setOpenUnits(prev =>
            prev.includes(unitId)
                ? prev.filter(id => id !== unitId)
                : [...prev, unitId]
        );
    };

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarContent}>
                {/* Subject Header */}
                <div className={styles.subjectHeader}>
                    <span className={styles.subjectIcon}>{subject.icon}</span>
                    <div className={styles.subjectInfo}>
                        <h2 className={styles.subjectTitle}>{subject.title}</h2>
                        <p className={styles.subjectDescription}>{subject.description}</p>
                    </div>
                </div>

                {/* Units Navigation */}
                <nav className={styles.nav}>
                    {subject.units.map((unit) => (
                        <UnitAccordion
                            key={unit.id}
                            unit={unit}
                            subjectSlug={subject.slug}
                            isOpen={openUnits.includes(unit.id)}
                            onToggle={() => toggleUnit(unit.id)}
                        />
                    ))}
                </nav>
            </div>
        </aside>
    );
}
