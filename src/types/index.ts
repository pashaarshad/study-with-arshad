// src/types/index.ts

export interface Topic {
    id: string;
    title: string;
    slug: string;
    description?: string;
}

export interface Unit {
    id: string;
    title: string;
    slug: string;
    topics: Topic[];
}

export interface Subject {
    id: string;
    title: string;
    slug: string;
    description: string;
    icon: string;
    units: Unit[];
}

export interface NavigationItem {
    id: string;
    title: string;
    slug: string;
    children?: NavigationItem[];
}

// Content types
export interface ContentSection {
    type: 'paragraph' | 'heading' | 'list' | 'code' | 'image' | 'note' | 'example' | 'keypoints';
    content: any;
}

export interface TopicContent {
    title: string;
    description: string;
    lastUpdated: string;
    readTime: string;
    sections: ContentSection[];
}
