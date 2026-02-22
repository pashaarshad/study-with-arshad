// src/app/page.tsx
import Link from 'next/link';
import { subjects } from '@/data/subjects';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome to <span className={styles.highlight}>Study with Arshad</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Your comprehensive platform for learning Artificial Intelligence,
            Machine Learning, and more. Quality education made simple.
          </p>
          <div className={styles.heroCta}>
            <Link href="/ai/introduction/what-is-ai" className={styles.primaryBtn}>
              Start Learning AI
            </Link>
            <Link href="/notes" className={styles.secondaryBtn}>
              📄 Download Notes
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.visualIcon}>🤖</div>
          <div className={styles.visualRing}></div>
          <div className={styles.visualRing2}></div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className={styles.subjects}>
        <h2 className={styles.sectionTitle}>BCA 6th Semester Subjects</h2>
        <p className={styles.sectionSubtitle}>
          Choose a subject to begin your learning journey
        </p>

        <div className={styles.subjectGrid}>
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              href={subject.units.length > 0
                ? `/${subject.slug}/${subject.units[0].slug}/${subject.units[0].topics[0].slug}`
                : '/notes'}
              className={`${styles.subjectCard}`}
            >
              <div className={styles.subjectIcon}>{subject.icon}</div>
              <h3 className={styles.subjectTitle}>{subject.title}</h3>
              <p className={styles.subjectDescription}>{subject.description}</p>
              {subject.units.length > 0 ? (
                <div className={styles.subjectMeta}>
                  <span>{subject.units.length} Units</span>
                  <span>•</span>
                  <span>{subject.units.reduce((acc, unit) => acc + unit.topics.length, 0)} Topics</span>
                </div>
              ) : (
                <div className={styles.comingSoon}>📄 PDF Notes Available</div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Why Study with Arshad?</h2>

        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📚</div>
            <h3>Comprehensive Content</h3>
            <p>Detailed explanations with real-world examples and code snippets</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📄</div>
            <h3>PDF Study Notes</h3>
            <p>Download free PDF notes for all subjects organized by unit</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌙</div>
            <h3>Dark & Light Mode</h3>
            <p>Easy on your eyes with comfortable reading themes</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💻</div>
            <h3>Code Examples</h3>
            <p>Practical programming examples to reinforce concepts</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 Study with Arshad. Made with ❤️ for students.</p>
      </footer>
    </div>
  );
}

