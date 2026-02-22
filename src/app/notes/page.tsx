// src/app/notes/page.tsx
import { Metadata } from 'next';
import { subjects, subjectPdfs } from '@/data/subjects';
import styles from './notes.module.css';

export const metadata: Metadata = {
    title: 'Study Notes - PDF Downloads | Study with Arshad',
    description: 'Download free PDF study notes for BCA 6th Semester subjects including AI, PHP, Full Stack Development, and Wireless Communication.',
};

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
            </div>

            <div className={styles.subjectsGrid}>
                {subjectPdfs.map((subjectPdf) => {
                    const subject = subjects.find(s => s.slug === subjectPdf.subjectSlug);
                    if (!subject) return null;

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
                                {subjectPdf.notes.map((note, index) => (
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

                            <div className={styles.cardFooter}>
                                <span>{subjectPdf.notes.length} file{subjectPdf.notes.length > 1 ? 's' : ''} available</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Syllabus PDF */}
            <div className={styles.syllabusSection}>
                <h2 className={styles.syllabusTitle}>📋 BCA 6th Semester Syllabus</h2>
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
            </div>
        </div>
    );
}
