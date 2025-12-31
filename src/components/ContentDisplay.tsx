'use client';
// src/components/ContentDisplay.tsx
import React from 'react';
import styles from './ContentDisplay.module.css';

// Info Box Component
interface InfoBoxProps {
    type: 'note' | 'tip' | 'warning' | 'highlight';
    title: string;
    children: React.ReactNode;
}

export function InfoBox({ type, title, children }: InfoBoxProps) {
    const icons = {
        note: '💡',
        tip: '✅',
        warning: '⚠️',
        highlight: '📌'
    };

    return (
        <div className={`info-box ${type}`}>
            <div className="info-box-title">
                <span>{icons[type]}</span>
                <span>{title}</span>
            </div>
            <div>{children}</div>
        </div>
    );
}

// Key Points Component
interface KeyPointsProps {
    title?: string;
    points: string[];
}

export function KeyPoints({ title = 'Key Points', points }: KeyPointsProps) {
    return (
        <div className="key-points">
            <div className="key-points-title">
                <span>🔑</span>
                <span>{title}</span>
            </div>
            <ul>
                {points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
}

// Example Box Component
interface ExampleBoxProps {
    title: string;
    children: React.ReactNode;
}

export function ExampleBox({ title, children }: ExampleBoxProps) {
    return (
        <div className="example-box">
            <div className="example-header">
                <span>💻</span>
                <span>{title}</span>
            </div>
            <div className="example-content">{children}</div>
        </div>
    );
}

// Code Block Component with Collapse/Expand and Copy functionality
interface CodeBlockProps {
    code: string;
    language?: string;
    title?: string;
}

export function CodeBlock({ code, language = 'python', title }: CodeBlockProps) {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [isCopied, setIsCopied] = React.useState(false);

    const handleCopy = async () => {
        try {
            // Check if clipboard API is available
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(code);
            } else {
                // Fallback for older browsers or non-HTTPS
                const textArea = document.createElement('textarea');
                textArea.value = code;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            }
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.codeContainer}>
            <div className={styles.codeHeader} onClick={toggleExpand}>
                <div className={styles.codeHeaderLeft}>
                    <span className={styles.codeIcon}>{isExpanded ? '▼' : '▶'}</span>
                    <span className={styles.codeLabel}>💻 Example Program</span>
                    {title && <span className={styles.codeTitle}>— {title}</span>}
                </div>
                <div className={styles.codeHeaderRight}>
                    <span className={styles.expandHint}>
                        {isExpanded ? 'Click to collapse' : 'Click to expand'}
                    </span>
                </div>
            </div>

            {isExpanded && (
                <div className={styles.codeContent}>
                    <button
                        className={styles.copyButton}
                        onClick={(e) => { e.stopPropagation(); handleCopy(); }}
                        title="Copy to clipboard"
                    >
                        {isCopied ? (
                            <>✓ Copied!</>
                        ) : (
                            <>📋 Copy</>
                        )}
                    </button>
                    <pre className={styles.codeBlock}>
                        <code className={language}>{code}</code>
                    </pre>
                </div>
            )}
        </div>
    );
}


// Image Placeholder Component
interface ImagePlaceholderProps {
    name: string;
    description: string;
    suggestedSize?: string;
}

export function ImagePlaceholder({ name, description, suggestedSize = '800x400' }: ImagePlaceholderProps) {
    return (
        <div className="image-placeholder">
            <div className="image-placeholder-icon">🖼️</div>
            <div className="image-placeholder-text">
                <strong>Image: {name}</strong>
                <br />
                {description}
                <br />
                <small>Suggested size: {suggestedSize}px</small>
            </div>
        </div>
    );
}

// Content Image Component
interface ContentImageProps {
    src: string;
    alt: string;
    caption?: string;
}

export function ContentImage({ src, alt, caption }: ContentImageProps) {
    return (
        <figure className={styles.figure}>
            <img src={src} alt={alt} className="content-image" />
            {caption && <figcaption className="content-image-caption">{caption}</figcaption>}
        </figure>
    );
}

// Topic Header Component
interface TopicHeaderProps {
    title: string;
    readTime?: string;
    lastUpdated?: string;
}

export function TopicHeader({ title, readTime, lastUpdated }: TopicHeaderProps) {
    return (
        <div className={styles.topicHeader}>
            <h1 className={styles.topicTitle}>{title}</h1>
            <div className={styles.topicMeta}>
                {readTime && (
                    <span className={styles.metaItem}>
                        <span>⏱️</span>
                        <span>{readTime} read</span>
                    </span>
                )}
                {lastUpdated && (
                    <span className={styles.metaItem}>
                        <span>📅</span>
                        <span>Updated: {lastUpdated}</span>
                    </span>
                )}
            </div>
        </div>
    );
}

// Navigation between topics
interface TopicNavigationProps {
    prev?: { title: string; href: string };
    next?: { title: string; href: string };
}

export function TopicNavigation({ prev, next }: TopicNavigationProps) {
    return (
        <div className={styles.topicNavigation}>
            {prev ? (
                <a href={prev.href} className={styles.navPrev}>
                    <span className={styles.navLabel}>← Previous</span>
                    <span className={styles.navTitle}>{prev.title}</span>
                </a>
            ) : (
                <div />
            )}
            {next && (
                <a href={next.href} className={styles.navNext}>
                    <span className={styles.navLabel}>Next →</span>
                    <span className={styles.navTitle}>{next.title}</span>
                </a>
            )}
        </div>
    );
}

// Table of Contents
interface TableOfContentsProps {
    items: { id: string; title: string; level: number }[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
    return (
        <nav className={styles.toc}>
            <div className={styles.tocTitle}>📑 On This Page</div>
            <ul className={styles.tocList}>
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={styles.tocItem}
                        style={{ paddingLeft: `${(item.level - 2) * 0.75}rem` }}
                    >
                        <a href={`#${item.id}`} className={styles.tocLink}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
