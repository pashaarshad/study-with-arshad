'use client';
// src/components/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { subjects } from '@/data/subjects';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

export default function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActiveSubject = (slug: string) => {
        return pathname.startsWith(`/${slug}`);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/imgs/logo12.png"
                        alt="Study with Arshad"
                        width={40}
                        height={40}
                        className={styles.logoImage}
                        priority
                    />
                    <span className={styles.logoText}>
                        Study with <span className={styles.logoHighlight}>Arshad</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {subjects.map((subject) => (
                            <li key={subject.id} className={styles.navItem}>
                                <Link
                                    href={subject.units.length > 0 ? `/${subject.slug}/${subject.units[0].slug}/${subject.units[0].topics[0].slug}` : '#'}
                                    className={`${styles.navLink} ${isActiveSubject(subject.slug) ? styles.active : ''} ${subject.units.length === 0 ? styles.disabled : ''}`}
                                >
                                    <span className={styles.navIcon}>{subject.icon}</span>
                                    <span className={styles.navTitle}>{subject.title}</span>
                                </Link>
                            </li>
                        ))}
                        <li className={styles.navItem}>
                            <Link
                                href="/notes"
                                className={`${styles.navLink} ${pathname === '/notes' ? styles.active : ''}`}
                            >
                                <span className={styles.navIcon}>📄</span>
                                <span className={styles.navTitle}>PDF Notes</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Right Section */}
                <div className={styles.rightSection}>
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ''}`}>
                <ul className={styles.mobileNavList}>
                    {subjects.map((subject) => (
                        <li key={subject.id}>
                            <Link
                                href={subject.units.length > 0 ? `/${subject.slug}/${subject.units[0].slug}/${subject.units[0].topics[0].slug}` : '#'}
                                className={`${styles.mobileNavLink} ${isActiveSubject(subject.slug) ? styles.active : ''} ${subject.units.length === 0 ? styles.disabled : ''}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className={styles.navIcon}>{subject.icon}</span>
                                <span>{subject.title}</span>
                                {subject.units.length === 0 && <span className={styles.comingSoon}>Coming Soon</span>}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/notes"
                            className={`${styles.mobileNavLink} ${pathname === '/notes' ? styles.active : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className={styles.navIcon}>📄</span>
                            <span>PDF Notes</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
