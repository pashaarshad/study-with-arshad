// src/app/[subject]/layout.tsx
import { notFound } from 'next/navigation';
import { getSubjectBySlug } from '@/data/subjects';
import Sidebar from '@/components/Sidebar';
import MobileSidebar from '@/components/MobileSidebar';
import styles from './layout.module.css';

interface SubjectLayoutProps {
    children: React.ReactNode;
    params: Promise<{ subject: string }>;
}

export default async function SubjectLayout({ children, params }: SubjectLayoutProps) {
    const { subject: subjectSlug } = await params;
    const subject = getSubjectBySlug(subjectSlug);

    if (!subject || subject.units.length === 0) {
        notFound();
    }

    return (
        <div className={styles.layout}>
            <Sidebar subject={subject} />
            <div className={styles.mainContent}>
                {children}
                <MobileSidebar subject={subject} />
            </div>
        </div>
    );
}
