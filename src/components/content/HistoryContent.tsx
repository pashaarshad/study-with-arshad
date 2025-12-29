'use client';

import Link from 'next/link';

export default function HistoryContent() {
    return (
        <article className="content">
            {/* Breadcrumb */}
            <nav className="breadcrumb">
                <Link href="/ai">AI</Link>
                <span>/</span>
                <Link href="/ai/introduction">Unit 1: Introduction</Link>
                <span>/</span>
                <span>History of AI</span>
            </nav>

            {/* Page Header */}
            <header className="page-header">
                <span className="topic-badge">1.3</span>
                <h1>History of Artificial Intelligence</h1>
                <p className="last-updated">Last Updated: December 29, 2025</p>
            </header>

            {/* Introduction */}
            <section>
                <p>
                    The history of Artificial Intelligence is a fascinating journey of dreams, breakthroughs,
                    setbacks, and remarkable achievements.
                </p>

                <blockquote>
                    <p>
                        &ldquo;We can only see a short distance ahead, but we can see plenty there that needs to be done.&rdquo;
                        <br />— <strong>Alan Turing</strong>, 1950
                    </p>
                </blockquote>
            </section>

            {/* Timeline */}
            <section>
                <h2>📅 AI Timeline: Key Milestones</h2>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-year">1943</div>
                        <div className="timeline-content">
                            <h4>🧠 First Neural Network Model</h4>
                            <p><strong>McCulloch</strong> and <strong>Pitts</strong> created the first mathematical model of a neural network.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-year">1950</div>
                        <div className="timeline-content">
                            <h4>🎯 The Turing Test</h4>
                            <p><strong>Alan Turing</strong> proposed the famous Turing Test to measure machine intelligence.</p>
                        </div>
                    </div>

                    <div className="timeline-item highlight">
                        <div className="timeline-year">1956</div>
                        <div className="timeline-content">
                            <h4>🎂 Birth of AI - Dartmouth Conference</h4>
                            <p>The term <strong>&ldquo;Artificial Intelligence&rdquo;</strong> was officially coined by John McCarthy.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-year">1966</div>
                        <div className="timeline-content">
                            <h4>💬 ELIZA - First Chatbot</h4>
                            <p>Joseph Weizenbaum created ELIZA, a program that could simulate conversation.</p>
                        </div>
                    </div>

                    <div className="timeline-item winter">
                        <div className="timeline-year">1974-1980</div>
                        <div className="timeline-content">
                            <h4>❄️ First AI Winter</h4>
                            <p>Funding decreased due to overpromised results and limited computing power.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-year">1980s</div>
                        <div className="timeline-content">
                            <h4>📊 Expert Systems Boom</h4>
                            <p>Expert Systems like MYCIN and XCON brought AI back to commercial applications.</p>
                        </div>
                    </div>

                    <div className="timeline-item winter">
                        <div className="timeline-year">1987-1993</div>
                        <div className="timeline-content">
                            <h4>❄️ Second AI Winter</h4>
                            <p>Expert systems proved expensive to maintain; specialized hardware market collapsed.</p>
                        </div>
                    </div>

                    <div className="timeline-item highlight">
                        <div className="timeline-year">1997</div>
                        <div className="timeline-content">
                            <h4>♟️ Deep Blue Defeats World Chess Champion</h4>
                            <p>IBM&apos;s Deep Blue defeated Garry Kasparov—a landmark moment in AI history.</p>
                        </div>
                    </div>

                    <div className="timeline-item highlight">
                        <div className="timeline-year">2012</div>
                        <div className="timeline-content">
                            <h4>🖼️ Deep Learning Revolution</h4>
                            <p>AlexNet sparked the deep learning revolution with dramatic improvements in image recognition.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-year">2016</div>
                        <div className="timeline-content">
                            <h4>🎮 AlphaGo Defeats World Go Champion</h4>
                            <p>Google DeepMind&apos;s AlphaGo mastered the complex game of Go.</p>
                        </div>
                    </div>

                    <div className="timeline-item highlight">
                        <div className="timeline-year">2022</div>
                        <div className="timeline-content">
                            <h4>💬 ChatGPT Changes Everything</h4>
                            <p>OpenAI released ChatGPT—gained 100 million users in 2 months!</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-year">2023-Now</div>
                        <div className="timeline-content">
                            <h4>🚀 The AI Revolution Continues</h4>
                            <p>GPT-4, DALL-E, Midjourney, GitHub Copilot, and more are transforming every industry.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Winters */}
            <section>
                <h2>❄️ Understanding AI Winters</h2>

                <p><strong>AI Winters</strong> were periods when funding and interest dramatically decreased due to unmet expectations.</p>

                <table>
                    <thead>
                        <tr>
                            <th>Period</th>
                            <th>Causes</th>
                            <th>Impact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>First AI Winter (1974-1980)</strong></td>
                            <td>Overpromised results, limited computing power</td>
                            <td>Government funding cut</td>
                        </tr>
                        <tr>
                            <td><strong>Second AI Winter (1987-1993)</strong></td>
                            <td>Expert systems too expensive, hardware market crash</td>
                            <td>Many AI companies failed</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Image Placeholder */}
            <section>
                <h2>📊 Visual Timeline</h2>

                <div className="image-placeholder">
                    <div className="placeholder-icon">🖼️</div>
                    <span><strong>Image: ai-history-timeline.png</strong></span>
                    <span>A visual timeline showing major AI milestones from 1943 to present</span>
                </div>
            </section>

            {/* Key Takeaways */}
            <section>
                <h2>📝 Key Takeaways</h2>

                <ul>
                    <li>AI officially began at the <strong>Dartmouth Conference in 1956</strong>.</li>
                    <li><strong>Alan Turing</strong> proposed the Turing Test to measure machine intelligence.</li>
                    <li>AI has experienced two <strong>&ldquo;winters&rdquo;</strong> due to unmet expectations.</li>
                    <li>The <strong>deep learning revolution (2012)</strong> transformed AI capabilities.</li>
                    <li><strong>Modern AI</strong> (ChatGPT, DALL-E) is changing every industry.</li>
                </ul>
            </section>

            {/* Navigation */}
            <nav className="page-navigation">
                <Link href="/ai/introduction/foundations" className="nav-prev">
                    <span>← Previous: Foundations of AI</span>
                </Link>
                <Link href="/ai/introduction/past-present-future" className="nav-next">
                    <span>Next: AI - Past, Present & Future →</span>
                </Link>
            </nav>

            <style jsx>{`
        .content { max-width: 900px; }
        .breadcrumb { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.5rem; flex-wrap: wrap; }
        .breadcrumb a { color: var(--link-color); }
        .page-header { margin-bottom: 2rem; }
        .topic-badge { display: inline-block; background-color: var(--link-color); color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.75rem; }
        .page-header h1 { font-size: 2.25rem; margin-bottom: 0.5rem; }
        .last-updated { font-size: 0.875rem; color: var(--text-muted); }
        section { margin-bottom: 3rem; }
        .timeline { position: relative; padding-left: 2rem; border-left: 3px solid var(--border-color); }
        .timeline-item { position: relative; padding-bottom: 2rem; padding-left: 1.5rem; }
        .timeline-item::before { content: ''; position: absolute; left: -2.45rem; top: 0.25rem; width: 12px; height: 12px; background-color: var(--bg-primary); border: 3px solid var(--link-color); border-radius: 50%; }
        .timeline-item.highlight::before { background-color: var(--link-color); width: 16px; height: 16px; left: -2.55rem; }
        .timeline-item.winter::before { border-color: #60a5fa; background-color: #60a5fa; }
        .timeline-year { font-weight: 700; font-size: 1.1rem; color: var(--link-color); margin-bottom: 0.5rem; }
        .timeline-item.winter .timeline-year { color: #60a5fa; }
        .timeline-content h4 { font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--text-primary); }
        .timeline-content p { font-size: 0.95rem; }
        .placeholder-icon { font-size: 3rem; margin-bottom: 0.5rem; }
        .page-navigation { display: flex; justify-content: space-between; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-color); flex-wrap: wrap; gap: 1rem; }
        .page-navigation a { padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 500; font-size: 0.9rem; background-color: var(--link-color); color: white; text-decoration: none; }
        .page-navigation a:hover { opacity: 0.9; text-decoration: none; }
        @media (max-width: 640px) { .page-header h1 { font-size: 1.75rem; } .timeline { padding-left: 1.5rem; } .page-navigation { flex-direction: column; } .page-navigation a { text-align: center; } }
      `}</style>
        </article>
    );
}
