'use client';

import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'History of AI - Study with Arshad',
    description: 'Explore the complete history of Artificial Intelligence from 1943 to present, including key milestones, AI winters, and breakthroughs.',
};

export default function HistoryPage() {
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
                    setbacks, and remarkable achievements. Understanding this history helps us appreciate
                    where AI came from and where it&apos;s headed.
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
                    {/* 1943 */}
                    <div className="timeline-item">
                        <div className="timeline-year">1943</div>
                        <div className="timeline-content">
                            <h4>🧠 First Neural Network Model</h4>
                            <p>
                                <strong>Warren McCulloch</strong> and <strong>Walter Pitts</strong> created the first
                                mathematical model of a neural network. They showed that simple connected neurons could
                                compute logical functions.
                            </p>
                            <div className="timeline-significance">
                                <strong>Significance:</strong> This laid the foundation for all neural network research and
                                eventually led to modern deep learning!
                            </div>
                        </div>
                    </div>

                    {/* 1950 */}
                    <div className="timeline-item">
                        <div className="timeline-year">1950</div>
                        <div className="timeline-content">
                            <h4>🎯 The Turing Test</h4>
                            <p>
                                <strong>Alan Turing</strong> published his famous paper &ldquo;Computing Machinery and Intelligence&rdquo;
                                where he proposed the <strong>Turing Test</strong>: if a machine can have a conversation with
                                a human and the human cannot tell it&apos;s a machine, then the machine can be considered &ldquo;intelligent.&rdquo;
                            </p>
                            <div className="timeline-significance">
                                <strong>Key Question:</strong> &ldquo;Can machines think?&rdquo; This question shaped AI research for decades.
                            </div>
                        </div>
                    </div>

                    {/* 1956 */}
                    <div className="timeline-item highlight">
                        <div className="timeline-year">1956</div>
                        <div className="timeline-content">
                            <h4>🎂 Birth of AI - Dartmouth Conference</h4>
                            <p>
                                <strong>John McCarthy</strong>, <strong>Marvin Minsky</strong>, <strong>Claude Shannon</strong>,
                                and <strong>Nathaniel Rochester</strong> organized a summer workshop at Dartmouth College.
                                Here, the term <strong>&ldquo;Artificial Intelligence&rdquo;</strong> was officially coined.
                            </p>
                            <div className="timeline-significance">
                                <strong>Prediction:</strong> They believed that &ldquo;every aspect of learning or any other feature
                                of intelligence can be so precisely described that a machine can be made to simulate it.&rdquo;
                            </div>
                        </div>
                    </div>

                    {/* 1957 */}
                    <div className="timeline-item">
                        <div className="timeline-year">1957</div>
                        <div className="timeline-content">
                            <h4>🔮 The Perceptron</h4>
                            <p>
                                <strong>Frank Rosenblatt</strong> invented the <strong>Perceptron</strong>, the first
                                artificial neural network capable of learning. It could recognize simple patterns.
                            </p>
                        </div>
                    </div>

                    {/* 1966 */}
                    <div className="timeline-item">
                        <div className="timeline-year">1966</div>
                        <div className="timeline-content">
                            <h4>💬 ELIZA - First Chatbot</h4>
                            <p>
                                <strong>Joseph Weizenbaum</strong> at MIT created <strong>ELIZA</strong>, a program that
                                could have text conversations. It simulated a psychotherapist and amazed users with its
                                seemingly intelligent responses.
                            </p>
                            <pre><code>{`User: I am feeling sad today.
ELIZA: Why do you say you are feeling sad?
User: My dog ran away.
ELIZA: Tell me more about your dog.`}</code></pre>
                        </div>
                    </div>

                    {/* 1969 */}
                    <div className="timeline-item">
                        <div className="timeline-year">1969</div>
                        <div className="timeline-content">
                            <h4>🤖 Shakey the Robot</h4>
                            <p>
                                <strong>SRI International</strong> built <strong>Shakey</strong>, the first mobile robot
                                that could reason about its actions. It could navigate rooms, push objects, and plan its movements.
                            </p>
                        </div>
                    </div>

                    {/* 1974-1980 */}
                    <div className="timeline-item winter">
                        <div className="timeline-year">1974-1980</div>
                        <div className="timeline-content">
                            <h4>❄️ First AI Winter</h4>
                            <p>
                                Funding for AI research dramatically decreased due to:
                            </p>
                            <ul>
                                <li>Overpromised results that were not delivered</li>
                                <li>Computers were too slow and too expensive</li>
                                <li>Limited memory couldn&apos;t handle complex problems</li>
                                <li>Minsky &amp; Papert&apos;s book showed limitations of Perceptrons</li>
                            </ul>
                        </div>
                    </div>

                    {/* 1980s */}
                    <div className="timeline-item">
                        <div className="timeline-year">1980s</div>
                        <div className="timeline-content">
                            <h4>📊 Expert Systems Boom</h4>
                            <p>
                                <strong>Expert Systems</strong> brought AI back to life! These were programs that captured
                                the knowledge of human experts in specific domains.
                            </p>
                            <ul>
                                <li><strong>MYCIN (1976)</strong> — Diagnosed bacterial infections</li>
                                <li><strong>XCON (1980)</strong> — Configured computer systems at DEC, saved $40 million/year</li>
                                <li><strong>DENDRAL</strong> — Identified chemical compounds</li>
                            </ul>
                        </div>
                    </div>

                    {/* 1987-1993 */}
                    <div className="timeline-item winter">
                        <div className="timeline-year">1987-1993</div>
                        <div className="timeline-content">
                            <h4>❄️ Second AI Winter</h4>
                            <p>
                                Expert systems proved expensive to maintain and update. The specialized hardware market
                                collapsed, and funding reduced again.
                            </p>
                        </div>
                    </div>

                    {/* 1997 */}
                    <div className="timeline-item highlight">
                        <div className="timeline-year">1997</div>
                        <div className="timeline-content">
                            <h4>♟️ Deep Blue Defeats World Chess Champion</h4>
                            <p>
                                IBM&apos;s <strong>Deep Blue</strong> defeated world chess champion <strong>Garry Kasparov</strong>
                                in a six-game match. This was a landmark moment—a machine had beaten a human at a complex intellectual game.
                            </p>
                            <div className="timeline-significance">
                                <strong>Fact:</strong> Deep Blue could evaluate 200 million positions per second!
                            </div>
                        </div>
                    </div>

                    {/* 2011 */}
                    <div className="timeline-item">
                        <div className="timeline-year">2011</div>
                        <div className="timeline-content">
                            <h4>🎤 Watson Wins Jeopardy!</h4>
                            <p>
                                IBM&apos;s <strong>Watson</strong> defeated human champions on the TV quiz show Jeopardy!,
                                demonstrating natural language understanding and knowledge retrieval.
                            </p>
                        </div>
                    </div>

                    {/* 2012 */}
                    <div className="timeline-item highlight">
                        <div className="timeline-year">2012</div>
                        <div className="timeline-content">
                            <h4>🖼️ Deep Learning Revolution</h4>
                            <p>
                                <strong>AlexNet</strong>, a deep neural network by Geoffrey Hinton&apos;s team, won the ImageNet
                                competition with dramatically better accuracy. This sparked the <strong>deep learning revolution</strong>.
                            </p>
                            <ul>
                                <li>Error rate dropped from 26% to 15%</li>
                                <li>Used GPUs for faster training</li>
                                <li>Opened the door to modern AI</li>
                            </ul>
                        </div>
                    </div>

                    {/* 2016 */}
                    <div className="timeline-item">
                        <div className="timeline-year">2016</div>
                        <div className="timeline-content">
                            <h4>🎮 AlphaGo Defeats World Go Champion</h4>
                            <p>
                                Google DeepMind&apos;s <strong>AlphaGo</strong> defeated Lee Sedol, one of the world&apos;s best
                                Go players, 4-1. Go is far more complex than chess (more possible positions than atoms in the universe!).
                            </p>
                        </div>
                    </div>

                    {/* 2020 */}
                    <div className="timeline-item">
                        <div className="timeline-year">2020</div>
                        <div className="timeline-content">
                            <h4>🧬 AlphaFold Solves Protein Folding</h4>
                            <p>
                                DeepMind&apos;s <strong>AlphaFold</strong> solved the 50-year-old protein folding problem,
                                predicting 3D protein structures with remarkable accuracy. This could revolutionize medicine and biology.
                            </p>
                        </div>
                    </div>

                    {/* 2022 */}
                    <div className="timeline-item highlight">
                        <div className="timeline-year">2022</div>
                        <div className="timeline-content">
                            <h4>💬 ChatGPT Changes Everything</h4>
                            <p>
                                OpenAI released <strong>ChatGPT</strong>, a large language model that can have human-like
                                conversations, write code, create content, and answer questions. It gained 100 million users
                                in just 2 months—the fastest-growing application in history!
                            </p>
                        </div>
                    </div>

                    {/* 2023-Present */}
                    <div className="timeline-item">
                        <div className="timeline-year">2023-Now</div>
                        <div className="timeline-content">
                            <h4>🚀 The AI Revolution Continues</h4>
                            <ul>
                                <li><strong>GPT-4</strong> — Multimodal AI (text + images)</li>
                                <li><strong>DALL-E, Midjourney</strong> — AI image generation</li>
                                <li><strong>GitHub Copilot</strong> — AI coding assistant</li>
                                <li><strong>Self-driving cars</strong> — Becoming mainstream</li>
                                <li><strong>AI in healthcare</strong> — Diagnosing diseases</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Winters Explained */}
            <section>
                <h2>❄️ Understanding AI Winters</h2>

                <p>
                    <strong>AI Winters</strong> were periods when funding and interest in AI research dramatically
                    decreased due to unmet expectations.
                </p>

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
                            <td>Overpromised results, limited computing power, Perceptron limitations</td>
                            <td>Government funding cut, research slowed</td>
                        </tr>
                        <tr>
                            <td><strong>Second AI Winter (1987-1993)</strong></td>
                            <td>Expert systems too expensive, specialized hardware market crash</td>
                            <td>Many AI companies failed, researchers left the field</td>
                        </tr>
                    </tbody>
                </table>

                <div className="note note-info">
                    <strong>💡 Lesson:</strong> AI winters teach us the importance of setting realistic expectations
                    and building on solid foundations rather than overpromising quick results.
                </div>
            </section>

            {/* Image Placeholder */}
            <section>
                <h2>📊 Visual Timeline</h2>

                <div className="image-placeholder">
                    <div className="placeholder-icon">🖼️</div>
                    <span><strong>Image: ai-history-timeline.png</strong></span>
                    <span>A visual timeline showing major AI milestones from 1943 to present</span>
                </div>

                <div className="image-placeholder">
                    <div className="placeholder-icon">🖼️</div>
                    <span><strong>Image: ai-pioneers-photos.png</strong></span>
                    <span>Photos of AI pioneers: Turing, McCarthy, Minsky, Hinton</span>
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
                    <li>Key breakthroughs: Neural networks → Expert systems → Deep learning → Large Language Models</li>
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
        .content {
          max-width: 900px;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .breadcrumb a {
          color: var(--link-color);
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .topic-badge {
          display: inline-block;
          background-color: var(--link-color);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .page-header h1 {
          font-size: 2.25rem;
          margin-bottom: 0.5rem;
        }

        .last-updated {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        section {
          margin-bottom: 3rem;
        }

        /* Timeline Styles */
        .timeline {
          position: relative;
          padding-left: 2rem;
          border-left: 3px solid var(--border-color);
        }

        .timeline-item {
          position: relative;
          padding-bottom: 2rem;
          padding-left: 1.5rem;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -2.45rem;
          top: 0.25rem;
          width: 12px;
          height: 12px;
          background-color: var(--bg-primary);
          border: 3px solid var(--link-color);
          border-radius: 50%;
        }

        .timeline-item.highlight::before {
          background-color: var(--link-color);
          width: 16px;
          height: 16px;
          left: -2.55rem;
        }

        .timeline-item.winter::before {
          border-color: #60a5fa;
          background-color: #60a5fa;
        }

        .timeline-year {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--link-color);
          margin-bottom: 0.5rem;
        }

        .timeline-item.winter .timeline-year {
          color: #60a5fa;
        }

        .timeline-content h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .timeline-content p {
          font-size: 0.95rem;
        }

        .timeline-significance {
          background-color: var(--bg-secondary);
          border-radius: 6px;
          padding: 0.75rem 1rem;
          margin-top: 0.75rem;
          font-size: 0.9rem;
          border-left: 3px solid var(--link-color);
        }

        .placeholder-icon {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }

        .page-navigation {
          display: flex;
          justify-content: space-between;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .page-navigation a {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.9rem;
          background-color: var(--link-color);
          color: white;
          text-decoration: none;
        }

        .page-navigation a:hover {
          opacity: 0.9;
          text-decoration: none;
        }

        @media (max-width: 640px) {
          .page-header h1 {
            font-size: 1.75rem;
          }

          .timeline {
            padding-left: 1.5rem;
          }

          .timeline-item {
            padding-left: 1rem;
          }

          .page-navigation {
            flex-direction: column;
          }

          .page-navigation a {
            text-align: center;
          }
        }
      `}</style>
        </article>
    );
}
