'use client';

import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Foundations of AI - Study with Arshad',
    description: 'Explore the foundational disciplines that contribute to Artificial Intelligence including Philosophy, Mathematics, Psychology, Computer Science, and more.',
};

export default function FoundationsPage() {
    return (
        <article className="content">
            {/* Breadcrumb */}
            <nav className="breadcrumb">
                <Link href="/ai">AI</Link>
                <span>/</span>
                <Link href="/ai/introduction">Unit 1: Introduction</Link>
                <span>/</span>
                <span>Foundations of AI</span>
            </nav>

            {/* Page Header */}
            <header className="page-header">
                <span className="topic-badge">1.2</span>
                <h1>Foundations of Artificial Intelligence</h1>
                <p className="last-updated">Last Updated: December 29, 2025</p>
            </header>

            {/* Introduction */}
            <section>
                <p>
                    Artificial Intelligence is not a standalone field—it is built upon the contributions of many
                    disciplines. Understanding the <strong>foundations of AI</strong> helps us appreciate how this
                    fascinating field came to be and why it works the way it does.
                </p>

                <blockquote>
                    <p>
                        &ldquo;AI is a unique field in that it has borrowed ideas from philosophy, mathematics,
                        psychology, linguistics, and computer science to create something entirely new.&rdquo;
                    </p>
                </blockquote>

                <p>
                    Let&apos;s explore the key disciplines that have contributed to the development of AI:
                </p>
            </section>

            {/* Philosophy */}
            <section>
                <h2>🧠 1. Philosophy (400 BC – Present)</h2>

                <p>
                    Philosophy laid the groundwork for AI by asking fundamental questions about the mind and reasoning:
                </p>

                <ul>
                    <li><strong>Can machines think?</strong> — This question, later formalized by Alan Turing, originated from philosophical debates.</li>
                    <li><strong>How does the mind work?</strong> — Philosophers like Aristotle developed formal logic and rules of reasoning.</li>
                    <li><strong>What is knowledge?</strong> — Epistemology (study of knowledge) influences how we represent knowledge in AI systems.</li>
                </ul>

                <div className="highlight-box">
                    <h4>Key Contributions:</h4>
                    <ul>
                        <li><strong>Aristotle (384-322 BC)</strong> — Created the first formal system of logic (syllogisms)</li>
                        <li><strong>René Descartes</strong> — Proposed dualism (mind vs. body) and mechanical explanations of behavior</li>
                        <li><strong>Thomas Hobbes</strong> — Suggested that reasoning is like numerical computation</li>
                    </ul>
                </div>

                <div className="example-box">
                    <h4>💡 Real-World Connection:</h4>
                    <p>
                        When AI systems use <strong>logic-based reasoning</strong> (like expert systems that diagnose diseases
                        based on symptoms), they are applying principles that date back to Aristotle&apos;s syllogistic logic!
                    </p>
                </div>
            </section>

            {/* Mathematics */}
            <section>
                <h2>📐 2. Mathematics (800 AD – Present)</h2>

                <p>
                    Mathematics provides the formal language and tools that AI systems use to represent and manipulate knowledge:
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Mathematical Area</th>
                            <th>Contribution to AI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Formal Logic</strong></td>
                            <td>Provides precise notation for statements and rules of inference</td>
                        </tr>
                        <tr>
                            <td><strong>Probability Theory</strong></td>
                            <td>Enables AI to handle uncertainty and make predictions (e.g., weather forecasting AI)</td>
                        </tr>
                        <tr>
                            <td><strong>Statistics</strong></td>
                            <td>Foundation for Machine Learning algorithms that learn from data</td>
                        </tr>
                        <tr>
                            <td><strong>Computation Theory</strong></td>
                            <td>Defines what can and cannot be computed (Turing machines, algorithms)</td>
                        </tr>
                        <tr>
                            <td><strong>Linear Algebra</strong></td>
                            <td>Essential for neural networks and deep learning (matrix operations)</td>
                        </tr>
                        <tr>
                            <td><strong>Calculus</strong></td>
                            <td>Used in optimization (training machine learning models)</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Python Example: Logic in AI</h3>
                <pre><code>{`# Simple example of logical reasoning in Python
# This demonstrates how AI uses logic to make inferences

# Knowledge Base (Facts)
facts = {
    "socrates_is_human": True,
    "all_humans_are_mortal": True
}

def logical_inference():
    """
    Using classical syllogism:
    Premise 1: All humans are mortal
    Premise 2: Socrates is a human
    Conclusion: Therefore, Socrates is mortal
    """
    if facts["all_humans_are_mortal"] and facts["socrates_is_human"]:
        return "Socrates is mortal"
    return "Cannot determine"

print(logical_inference())
# Output: Socrates is mortal

# This is the foundation of how expert systems reason!`}</code></pre>
            </section>

            {/* Economics */}
            <section>
                <h2>💰 3. Economics (1776 – Present)</h2>

                <p>
                    Economics contributes important concepts for AI decision-making:
                </p>

                <ul>
                    <li><strong>Utility Theory</strong> — How to measure preferences and make optimal decisions</li>
                    <li><strong>Decision Theory</strong> — How to make choices under uncertainty</li>
                    <li><strong>Game Theory</strong> — How to make decisions when other agents are involved</li>
                    <li><strong>Optimization</strong> — Finding the best solution among many possibilities</li>
                </ul>

                <div className="example-box">
                    <h4>💡 Real-World Connection:</h4>
                    <p>
                        When an AI like <strong>Amazon&apos;s pricing algorithm</strong> decides the optimal price for a product,
                        it uses game theory (considering competitor prices) and optimization (maximizing profit while
                        remaining competitive).
                    </p>
                </div>
            </section>

            {/* Neuroscience */}
            <section>
                <h2>🧬 4. Neuroscience (1861 – Present)</h2>

                <p>
                    Neuroscience studies how the brain works, directly inspiring AI architectures:
                </p>

                <div className="comparison-grid">
                    <div className="comparison-card">
                        <h4>Human Brain</h4>
                        <ul>
                            <li>~86 billion neurons</li>
                            <li>Neurons connected by synapses</li>
                            <li>Learns through experience</li>
                            <li>Parallel processing</li>
                        </ul>
                    </div>
                    <div className="comparison-card">
                        <h4>Artificial Neural Network</h4>
                        <ul>
                            <li>Millions of artificial neurons</li>
                            <li>Nodes connected by weights</li>
                            <li>Learns from data (training)</li>
                            <li>GPU parallel processing</li>
                        </ul>
                    </div>
                </div>

                <div className="note note-info">
                    <strong>💡 Key Insight:</strong> The structure of <strong>Artificial Neural Networks (ANNs)</strong>,
                    which power modern AI like ChatGPT, is directly inspired by how neurons in our brain are connected
                    and communicate!
                </div>
            </section>

            {/* Psychology */}
            <section>
                <h2>🔬 5. Psychology (1879 – Present)</h2>

                <p>
                    Psychology helps us understand how humans think, learn, and perceive—key insights for building intelligent systems:
                </p>

                <ul>
                    <li><strong>Cognitive Psychology</strong> — Studies mental processes like perception, memory, and problem-solving</li>
                    <li><strong>Behaviorism</strong> — Focuses on observable behavior and responses to stimuli (influenced reinforcement learning)</li>
                    <li><strong>Cognitive Science</strong> — Interdisciplinary study of the mind, combining psychology, philosophy, and AI</li>
                </ul>

                <div className="highlight-box">
                    <h4>Key Contributions:</h4>
                    <ul>
                        <li><strong>George Miller</strong> — Discovered short-term memory limitations (&ldquo;The Magical Number Seven&rdquo;)</li>
                        <li><strong>B.F. Skinner</strong> — Reinforcement learning concepts (reward and punishment)</li>
                        <li><strong>Noam Chomsky</strong> — Theories of language that influenced Natural Language Processing</li>
                    </ul>
                </div>

                <div className="example-box">
                    <h4>💡 Real-World Connection:</h4>
                    <p>
                        <strong>Reinforcement Learning AI</strong> (like AlphaGo that beat world champions in Go) learns
                        by receiving rewards for good moves and penalties for bad ones—directly inspired by how
                        animals learn through reward and punishment!
                    </p>
                </div>
            </section>

            {/* Computer Engineering */}
            <section>
                <h2>💻 6. Computer Engineering (1940 – Present)</h2>

                <p>
                    Without computers, AI would remain just a theory. Computer engineering provides:
                </p>

                <ul>
                    <li><strong>Hardware</strong> — Fast processors (CPUs, GPUs, TPUs) that can run AI algorithms</li>
                    <li><strong>Programming Languages</strong> — Python, Lisp, Prolog for implementing AI</li>
                    <li><strong>Data Storage</strong> — Big data storage for training AI models</li>
                    <li><strong>Networking</strong> — Cloud computing for distributed AI processing</li>
                </ul>

                <table>
                    <thead>
                        <tr>
                            <th>Era</th>
                            <th>Computer Capability</th>
                            <th>AI Achievement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1950s</td>
                            <td>Room-sized computers, basic calculations</td>
                            <td>First AI programs, checkers</td>
                        </tr>
                        <tr>
                            <td>1990s</td>
                            <td>Personal computers, megabytes of RAM</td>
                            <td>Deep Blue beats chess champion</td>
                        </tr>
                        <tr>
                            <td>2010s</td>
                            <td>GPUs, cloud computing, terabytes of data</td>
                            <td>Deep learning revolution, AlphaGo</td>
                        </tr>
                        <tr>
                            <td>2020s</td>
                            <td>TPUs, massive data centers</td>
                            <td>ChatGPT, DALL-E, autonomous vehicles</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Linguistics */}
            <section>
                <h2>📝 7. Linguistics (1957 – Present)</h2>

                <p>
                    Linguistics—the study of language—is crucial for AI systems that understand and generate human language:
                </p>

                <ul>
                    <li><strong>Syntax</strong> — Rules for sentence structure</li>
                    <li><strong>Semantics</strong> — Meaning of words and sentences</li>
                    <li><strong>Pragmatics</strong> — Context and intended meaning</li>
                    <li><strong>Computational Linguistics</strong> — Applying linguistic theories to computers</li>
                </ul>

                <div className="example-box">
                    <h4>💡 Real-World Connection:</h4>
                    <p>
                        <strong>Google Translate</strong> and <strong>ChatGPT</strong> use computational linguistics
                        to understand grammar, context, and meaning in multiple languages!
                    </p>
                </div>
            </section>

            {/* Image Placeholders */}
            <section>
                <h2>📊 Visual Summary</h2>

                <div className="image-placeholder">
                    <div className="placeholder-icon">🖼️</div>
                    <span><strong>Image: ai-foundations-diagram.png</strong></span>
                    <span>A diagram showing all contributing disciplines to AI with their key contributions</span>
                </div>

                <div className="image-placeholder">
                    <div className="placeholder-icon">🖼️</div>
                    <span><strong>Image: ai-timeline-foundations.png</strong></span>
                    <span>A timeline showing when each discipline contributed to AI development</span>
                </div>
            </section>

            {/* Key Takeaways */}
            <section>
                <h2>📝 Key Takeaways</h2>

                <ul>
                    <li>AI is an <strong>interdisciplinary field</strong> built on contributions from many disciplines.</li>
                    <li><strong>Philosophy</strong> provided the foundational questions about mind and reasoning.</li>
                    <li><strong>Mathematics</strong> gave AI formal logic, probability, and computation theory.</li>
                    <li><strong>Neuroscience</strong> inspired neural network architectures.</li>
                    <li><strong>Psychology</strong> contributed understanding of learning and cognition.</li>
                    <li><strong>Computer Engineering</strong> made AI practically possible with fast hardware.</li>
                    <li><strong>Linguistics</strong> enabled AI to understand and generate human language.</li>
                </ul>
            </section>

            {/* Navigation */}
            <nav className="page-navigation">
                <Link href="/ai/introduction/what-is-ai" className="nav-prev">
                    <span>← Previous: What is AI?</span>
                </Link>
                <Link href="/ai/introduction/history" className="nav-next">
                    <span>Next: History of AI →</span>
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

        .highlight-box {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 1.25rem;
          margin: 1rem 0;
        }

        .highlight-box h4 {
          color: var(--link-color);
          margin-bottom: 0.75rem;
        }

        .highlight-box ul {
          margin-bottom: 0;
        }

        .example-box {
          background-color: rgba(34, 197, 94, 0.1);
          border-left: 4px solid var(--link-color);
          border-radius: 0 8px 8px 0;
          padding: 1rem 1.25rem;
          margin: 1rem 0;
        }

        .example-box h4 {
          color: var(--link-color);
          margin-bottom: 0.5rem;
        }

        .example-box p {
          margin-bottom: 0;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 1rem 0;
        }

        .comparison-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 1.25rem;
        }

        .comparison-card h4 {
          color: var(--link-color);
          margin-bottom: 0.75rem;
          text-align: center;
        }

        .comparison-card ul {
          margin-bottom: 0;
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

          .comparison-grid {
            grid-template-columns: 1fr;
          }

          .page-navigation {
            flex-direction: column;
            gap: 1rem;
          }

          .page-navigation a {
            text-align: center;
          }
        }
      `}</style>
        </article>
    );
}
