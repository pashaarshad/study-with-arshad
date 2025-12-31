// src/app/[subject]/[unit]/[topic]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSubjectBySlug } from '@/data/subjects';
import { TopicHeader, TopicNavigation, KeyPoints, InfoBox, ExampleBox, CodeBlock, ImagePlaceholder } from '@/components/ContentDisplay';
import { getTopicContentComponent } from '@/content';

interface PageProps {
    params: Promise<{
        subject: string;
        unit: string;
        topic: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { subject: subjectSlug, unit: unitSlug, topic: topicSlug } = await params;
    const subject = getSubjectBySlug(subjectSlug);

    if (!subject) {
        return { title: 'Not Found' };
    }

    const unit = subject.units.find(u => u.slug === unitSlug);
    const topic = unit?.topics.find(t => t.slug === topicSlug);

    return {
        title: topic ? `${topic.title} - Study with Arshad` : 'Not Found',
        description: topic?.description || 'Educational content on Study with Arshad',
    };
}

function getNavigationLinks(subjectSlug: string, unitSlug: string, topicSlug: string) {
    const subject = getSubjectBySlug(subjectSlug);
    if (!subject) return { prev: undefined, next: undefined };

    // Flatten all topics with their unit slugs
    const allTopics: { unitSlug: string; topicSlug: string; title: string }[] = [];
    subject.units.forEach(unit => {
        unit.topics.forEach(topic => {
            allTopics.push({
                unitSlug: unit.slug,
                topicSlug: topic.slug,
                title: topic.title
            });
        });
    });

    const currentIndex = allTopics.findIndex(
        t => t.unitSlug === unitSlug && t.topicSlug === topicSlug
    );

    const prev = currentIndex > 0 ? allTopics[currentIndex - 1] : undefined;
    const next = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : undefined;

    return {
        prev: prev ? {
            title: prev.title,
            href: `/${subjectSlug}/${prev.unitSlug}/${prev.topicSlug}`
        } : undefined,
        next: next ? {
            title: next.title,
            href: `/${subjectSlug}/${next.unitSlug}/${next.topicSlug}`
        } : undefined
    };
}

export default async function TopicPage({ params }: PageProps) {
    const { subject: subjectSlug, unit: unitSlug, topic: topicSlug } = await params;

    const subject = getSubjectBySlug(subjectSlug);
    if (!subject) notFound();

    const unit = subject.units.find(u => u.slug === unitSlug);
    if (!unit) notFound();

    const topic = unit.topics.find(t => t.slug === topicSlug);
    if (!topic) notFound();

    const { prev, next } = getNavigationLinks(subjectSlug, unitSlug, topicSlug);

    // Get the content component for this topic
    const ContentComponent = getTopicContentComponent(subjectSlug, unitSlug, topicSlug);

    return (
        <article>
            <TopicHeader
                title={topic.title}
                readTime="10-15 min"
                lastUpdated="31 December 2025"
            />

            {ContentComponent ? (
                <ContentComponent />
            ) : (
                <div>
                    <InfoBox type="note" title="Content Coming Soon">
                        <p>The detailed content for this topic is being prepared. Check back soon!</p>
                    </InfoBox>
                </div>
            )}

            <TopicNavigation prev={prev} next={next} />
        </article>
    );
}
