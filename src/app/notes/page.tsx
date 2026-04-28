// src/app/notes/page.tsx
import { Metadata } from 'next';
import { subjects, subjectPdfs, PdfNote } from '@/data/subjects';
import styles from './notes.module.css';

export const metadata: Metadata = {
    title: 'Study Notes - PDF Downloads | Study with Arshad',
    description: 'Download free PDF study notes for BCA 6th Semester subjects including AI, FDS, PHP, and WCMS. All notes organized by unit.',
};

// Group notes by unit
function groupByUnit(notes: PdfNote[]): Record<string, PdfNote[]> {
    const groups: Record<string, PdfNote[]> = {};
    notes.forEach(note => {
        const key = note.unit || 'Other';
        if (!groups[key]) groups[key] = [];
        groups[key].push(note);
    });
    return groups;
}

// Get the right icon for the unit type
function getUnitIcon(unit: string): string {
    if (unit.startsWith('Unit')) return '📖';
    if (unit === 'Lab') return '💻';
    if (unit === 'Question Paper') return '📝';
    if (unit === 'Assignment') return '📋';
    return '📑';
}

export default function NotesPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    📄 Study Notes <span className={styles.highlight}>PDF Downloads</span>
                </h1>
                <p className={styles.subtitle}>
                    Download free PDF notes for BCA 6th Semester subjects. All notes are organized by unit for easy access.
                </p>
                <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{subjectPdfs.length}</span>
                        <span className={styles.statLabel}>Subjects</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>
                            {subjectPdfs.reduce((acc, s) => acc + s.notes.length, 0)}
                        </span>
                        <span className={styles.statLabel}>Files</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>5</span>
                        <span className={styles.statLabel}>Units Each</span>
                    </div>
                </div>
            </div>

            <div className={styles.subjectsGrid}>
                {subjectPdfs.map((subjectPdf) => {
                    const subject = subjects.find(s => s.slug === subjectPdf.subjectSlug);
                    if (!subject) return null;

                    const grouped = groupByUnit(subjectPdf.notes);
                    const unitOrder = ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Lab', 'Assignment', 'Question Paper', 'Other'];
                    const sortedUnits = Object.keys(grouped).sort(
                        (a, b) => unitOrder.indexOf(a) - unitOrder.indexOf(b)
                    );

                    return (
                        <div key={subjectPdf.subjectSlug} className={styles.subjectCard}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardIcon}>{subject.icon}</span>
                                <div>
                                    <h2 className={styles.cardTitle}>{subject.title}</h2>
                                    <p className={styles.cardDescription}>{subject.description}</p>
                                </div>
                            </div>

                            <div className={styles.notesList}>
                                {sortedUnits.map(unitName => (
                                    <div key={unitName} className={styles.unitGroup}>
                                        <div className={styles.unitGroupHeader}>
                                            <span className={styles.unitGroupIcon}>{getUnitIcon(unitName)}</span>
                                            <span className={styles.unitGroupTitle}>{unitName}</span>
                                            <span className={styles.unitGroupCount}>
                                                {grouped[unitName].length} file{grouped[unitName].length > 1 ? 's' : ''}
                                            </span>
                                        </div>
                                        {grouped[unitName].map((note, index) => (
                                            <a
                                                key={index}
                                                href={note.path}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.noteItem}
                                            >
                                                <div className={styles.noteIcon}>📑</div>
                                                <div className={styles.noteInfo}>
                                                    <span className={styles.noteTitle}>{note.title}</span>
                                                    <div className={styles.noteMeta}>
                                                        {note.unit && <span className={styles.unitBadge}>{note.unit}</span>}
                                                        <span className={styles.noteSize}>{note.size}</span>
                                                    </div>
                                                </div>
                                                <div className={styles.downloadIcon}>⬇️</div>
                                            </a>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div className={styles.cardFooter}>
                                <span>{subjectPdf.notes.length} file{subjectPdf.notes.length > 1 ? 's' : ''} available</span>
                                <span className={styles.footerUnits}>
                                    {sortedUnits.filter(u => u.startsWith('Unit')).length} units
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Resources Section */}
            <div className={styles.syllabusSection}>
                <h2 className={styles.syllabusTitle}>📋 Common Resources</h2>
                <a
                    href="/6-sem-Subjets/computer_application-thirdyear-23.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.syllabusLink}
                >
                    <span className={styles.syllabusIcon}>📘</span>
                    <div className={styles.syllabusInfo}>
                        <span className={styles.syllabusName}>Complete BCA 3rd Year Syllabus (2023)</span>
                        <span className={styles.syllabusSize}>1.1 MB • PDF</span>
                    </div>
                    <span className={styles.downloadBtn}>Download ⬇️</span>
                </a>
                <a
                    href="/6-sem-Subjets/ia-time-table.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.syllabusLink}
                >
                    <span className={styles.syllabusIcon}>📅</span>
                    <div className={styles.syllabusInfo}>
                        <span className={styles.syllabusName}>IA Exam Timetable</span>
                        <span className={styles.syllabusSize}>120 KB • JPEG</span>
                    </div>
                    <span className={styles.downloadBtn}>View ⬇️</span>
                </a>
            </div>
        </div>
    );
}
