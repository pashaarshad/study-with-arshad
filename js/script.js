// Study with Arshad - Main JavaScript

document.addEventListener('DOMContentLoaded', function () {
    initThemeToggle();
    initSidebarNavigation();
    initSubjectNavigation();
    initContentNavigation();
});

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', function () {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Sidebar Navigation - Expand/Collapse Topics
function initSidebarNavigation() {
    // Main topics
    const mainTopics = document.querySelectorAll('.main-topic');
    mainTopics.forEach(topic => {
        const subtopicList = topic.nextElementSibling;
        const isCollapsed = subtopicList.classList.contains('collapsed');

        if (!isCollapsed) {
            topic.classList.add('expanded');
        }

        topic.addEventListener('click', function () {
            this.classList.toggle('expanded');
            subtopicList.classList.toggle('collapsed');
        });
    });

    // Nested subtopics
    const subtopicParents = document.querySelectorAll('.subtopic-parent');
    subtopicParents.forEach(parent => {
        const nestedList = parent.nextElementSibling;

        parent.addEventListener('click', function () {
            this.classList.toggle('expanded');
            nestedList.classList.toggle('expanded');
        });
    });

    // Subtopic links
    const subtopicLinks = document.querySelectorAll('.subtopic-link');
    subtopicLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links
            subtopicLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Load content (for now just show the content id)
            const contentId = this.getAttribute('data-content');
            loadContent(contentId);
        });
    });
}

// Subject Navigation
function initSubjectNavigation() {
    const subjectLinks = document.querySelectorAll('.subject-link');

    subjectLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all subject links
            subjectLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Get subject
            const subject = this.getAttribute('data-subject');

            // Update sidebar header
            const sidebarHeader = document.querySelector('.sidebar-header h2');
            if (subject === 'ai') {
                sidebarHeader.textContent = 'AI Topics';
            } else {
                sidebarHeader.textContent = this.textContent + ' Topics';
            }

            // In the future, load different sidebar content for each subject
            console.log('Selected subject:', subject);
        });
    });
}

// Content Navigation (Next/Previous buttons)
function initContentNavigation() {
    const nextBtn = document.querySelector('.nav-btn.next');
    const prevBtn = document.querySelector('.nav-btn.prev');

    if (nextBtn) {
        nextBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const nextContent = this.getAttribute('data-next');
            if (nextContent) {
                loadContent(nextContent);

                // Update active sidebar link
                const subtopicLinks = document.querySelectorAll('.subtopic-link');
                subtopicLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-content') === nextContent) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// Load Content - This will be expanded in the future
function loadContent(contentId) {
    console.log('Loading content:', contentId);

    // For now, show a message for content that's not yet available
    const contentArea = document.getElementById('contentArea');

    // Content mapping - will be expanded
    const availableContent = ['what-is-ai'];

    if (!availableContent.includes(contentId)) {
        contentArea.innerHTML = `
            <article class="content-article">
                <div class="breadcrumb">
                    <span>AI</span> > <span>Coming Soon</span>
                </div>
                <h1>Content Coming Soon</h1>
                <div class="content-body">
                    <p class="intro-text">
                        This topic is currently under development. Check back soon for the complete content!
                    </p>
                    <div class="info-box">
                        <h4>Topic: ${contentId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
                        <p>This content will be added in future updates.</p>
                    </div>
                    <div class="navigation-buttons">
                        <a href="#" class="nav-btn prev" onclick="location.reload()">← Back to Introduction</a>
                    </div>
                </div>
            </article>
        `;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile sidebar toggle (for future use)
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}
