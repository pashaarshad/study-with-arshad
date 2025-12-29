'use client';

import Link from 'next/link';

export default function WhatIsAIContent() {
    return (
        <article className="content">
            {/* Breadcrumb */}
            <nav className="breadcrumb">
                <Link href="/ai">AI</Link>
                <span>/</span>
                <Link href="/ai/introduction">Unit 1: Introduction</Link>
                <span>/</span>
                <span>What is Artificial Intelligence</span>
            </nav>

            {/* Page Header */}
            <header className="page-header">
                <span className="topic-badge">1.1</span>
                <h1>What is Artificial Intelligence?</h1>
                <p className="last-updated">Last Updated: December 29, 2025</p>
            </header>

            {/* Introduction */}
            <section>
                <p>
                    <strong>Artificial Intelligence (AI)</strong> is a branch of computer science that focuses on creating
                    intelligent machines that can think, learn, and act like humans. It is the simulation of human
                    intelligence processes by computer systems.
                </p>

                <blockquote>
                    <p>
                        &ldquo;Artificial Intelligence is the study of how to make computers do things which, at the moment,
                        people do better.&rdquo; — <strong>Elaine Rich</strong>
                    </p>
                </blockquote>

                <p>
                    In simpler terms, AI enables machines to mimic cognitive functions such as learning from experience,
                    recognizing patterns, understanding language, solving problems, and making decisions.
                </p>
            </section>

            {/* Definitions */}
            <section>
                <h2>📖 Formal Definitions of AI</h2>

                <p>Over the years, many researchers have defined AI in different ways:</p>

                <div className="definition-grid">
                    <div className="definition-card">
                        <h4>Thinking Humanly</h4>
                        <p>&ldquo;The exciting new effort to make computers think... machines with minds, in the full and literal sense.&rdquo;</p>
                        <span className="author">— Haugeland, 1985</span>
                    </div>

                    <div className="definition-card">
                        <h4>Thinking Rationally</h4>
                        <p>&ldquo;The study of mental faculties through the use of computational models.&rdquo;</p>
                        <span className="author">— Charniak and McDermott, 1985</span>
                    </div>

                    <div className="definition-card">
                        <h4>Acting Humanly</h4>
                        <p>&ldquo;The art of creating machines that perform functions that require intelligence when performed by people.&rdquo;</p>
                        <span className="author">— Kurzweil, 1990</span>
                    </div>

                    <div className="definition-card">
                        <h4>Acting Rationally</h4>
                        <p>&ldquo;The study of the design of intelligent agents.&rdquo;</p>
                        <span className="author">— Poole et al., 1998</span>
                    </div>
                </div>
            </section>

            {/* Real World Examples */}
            <section>
                <h2>🌍 Real-World Examples of AI</h2>

                <p>AI is all around us! Here are some examples you probably use every day:</p>

                <div className="example-list">
                    <div className="example-item">
                        <span className="example-icon">📱</span>
                        <div>
                            <h4>Voice Assistants</h4>
                            <p>Siri, Google Assistant, and Alexa understand your voice commands and respond intelligently.</p>
                        </div>
                    </div>

                    <div className="example-item">
                        <span className="example-icon">🎬</span>
                        <div>
                            <h4>Netflix & YouTube Recommendations</h4>
                            <p>AI analyzes your watching history to suggest movies and videos you might like.</p>
                        </div>
                    </div>

                    <div className="example-item">
                        <span className="example-icon">📧</span>
                        <div>
                            <h4>Email Spam Filters</h4>
                            <p>Gmail uses AI to automatically detect and filter spam emails from your inbox.</p>
                        </div>
                    </div>

                    <div className="example-item">
                        <span className="example-icon">🚗</span>
                        <div>
                            <h4>Self-Driving Cars</h4>
                            <p>Tesla and Waymo use AI to navigate roads, detect obstacles, and make driving decisions.</p>
                        </div>
                    </div>

                    <div className="example-item">
                        <span className="example-icon">📷</span>
                        <div>
                            <h4>Face Recognition</h4>
                            <p>Your phone unlocks by recognizing your face using AI-powered facial recognition.</p>
                        </div>
                    </div>

                    <div className="example-item">
                        <span className="example-icon">💬</span>
                        <div>
                            <h4>ChatGPT & AI Chatbots</h4>
                            <p>AI systems that can have human-like conversations and answer questions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of AI */}
            <section>
                <h2>🔷 Types of Artificial Intelligence</h2>

                <p>AI can be classified in two main ways:</p>

                <h3>Based on Capabilities</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Narrow AI (Weak AI)</strong></td>
                            <td>Designed to perform a specific task. Most AI today falls into this category.</td>
                            <td>Chess-playing computer, Siri, Spam filters</td>
                        </tr>
                        <tr>
                            <td><strong>General AI (Strong AI)</strong></td>
                            <td>Can perform any intellectual task that a human can. Does not exist yet.</td>
                            <td>Theoretical - like human-level intelligence</td>
                        </tr>
                        <tr>
                            <td><strong>Super AI</strong></td>
                            <td>Surpasses human intelligence in all aspects. Purely hypothetical.</td>
                            <td>Science fiction (like Skynet, HAL 9000)</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Based on Functionality</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Reactive Machines</strong></td>
                            <td>No memory, reacts to current situations only. Example: IBM&apos;s Deep Blue chess computer.</td>
                        </tr>
                        <tr>
                            <td><strong>Limited Memory</strong></td>
                            <td>Can use past experiences for decisions. Example: Self-driving cars.</td>
                        </tr>
                        <tr>
                            <td><strong>Theory of Mind</strong></td>
                            <td>Can understand emotions and thoughts. Still in research.</td>
                        </tr>
                        <tr>
                            <td><strong>Self-Aware AI</strong></td>
                            <td>Has consciousness and self-awareness. Does not exist.</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Python Example */}
            <section>
                <h2>💻 Simple AI Example in Python</h2>

                <p>
                    Let&apos;s see a simple example of AI in action! Here&apos;s a basic &ldquo;chatbot&rdquo; that can respond to greetings:
                </p>

                <pre><code>{`# A Simple AI Chatbot Example
# This demonstrates basic pattern matching - a fundamental AI concept

def simple_chatbot(user_input):
    """
    A simple chatbot that responds to greetings.
    This is an example of rule-based AI.
    """
    # Convert input to lowercase for easier matching
    user_input = user_input.lower()
    
    # Define responses based on patterns
    if "hello" in user_input or "hi" in user_input:
        return "Hello! How can I help you today?"
    
    elif "how are you" in user_input:
        return "I'm just a program, but I'm functioning well! Thank you for asking."
    
    elif "what is ai" in user_input:
        return "AI stands for Artificial Intelligence - the simulation of human intelligence by machines."
    
    elif "bye" in user_input or "goodbye" in user_input:
        return "Goodbye! Have a great day!"
    
    else:
        return "I'm still learning. Can you please rephrase your question?"


# Test the chatbot
print(simple_chatbot("Hello!"))
# Output: Hello! How can I help you today?

print(simple_chatbot("What is AI?"))
# Output: AI stands for Artificial Intelligence - the simulation of human intelligence by machines.`}</code></pre>

                <div className="note note-info">
                    <strong>💡 Note:</strong> This is a very simple rule-based AI. Modern AI systems like ChatGPT use
                    complex Machine Learning and Neural Networks to understand and generate human-like responses.
                </div>
            </section>

            {/* Image Placeholder */}
            <section>
                <h2>📊 Visual Representation</h2>

                <div className="image-placeholder">
                    <div className="placeholder-icon">🖼️</div>
                    <span><strong>Image: ai-overview-diagram.png</strong></span>
                    <span>A diagram showing the relationship between AI, Machine Learning, and Deep Learning</span>
                </div>

                <div className="image-placeholder">
                    <div className="placeholder-icon">🖼️</div>
                    <span><strong>Image: ai-applications-infographic.png</strong></span>
                    <span>An infographic showing various real-world applications of AI</span>
                </div>
            </section>

            {/* Key Takeaways */}
            <section>
                <h2>📝 Key Takeaways</h2>

                <ul>
                    <li><strong>AI</strong> is the simulation of human intelligence by computer systems.</li>
                    <li>AI enables machines to <strong>learn, reason, perceive, and make decisions</strong>.</li>
                    <li><strong>Narrow AI</strong> (specialized tasks) exists today; <strong>General AI</strong> is still theoretical.</li>
                    <li>AI is used in everyday applications like <strong>voice assistants, recommendations, and face recognition</strong>.</li>
                    <li>The goal of AI is to create systems that can <strong>act rationally</strong> to achieve the best outcomes.</li>
                </ul>
            </section>

            {/* Navigation */}
            <nav className="page-navigation">
                <div className="nav-prev disabled">
                    <span>← Previous</span>
                </div>
                <Link href="/ai/introduction/foundations" className="nav-next">
                    <span>Next: Foundations of AI →</span>
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

        .definition-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .definition-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 1.25rem;
        }

        .definition-card h4 {
          color: var(--link-color);
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .definition-card p {
          font-size: 0.9rem;
          font-style: italic;
          margin-bottom: 0.5rem;
        }

        .definition-card .author {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .example-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        }

        .example-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background-color: var(--bg-secondary);
          border-radius: 8px;
          padding: 1rem 1.25rem;
          border-left: 3px solid var(--link-color);
        }

        .example-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .example-item h4 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .example-item p {
          font-size: 0.9rem;
          margin-bottom: 0;
          color: var(--text-secondary);
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

        .page-navigation a, .nav-prev, .nav-next {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .page-navigation a {
          background-color: var(--link-color);
          color: white;
          text-decoration: none;
        }

        .page-navigation a:hover {
          opacity: 0.9;
          text-decoration: none;
        }

        .nav-prev.disabled, .nav-next.disabled {
          background-color: var(--bg-tertiary);
          color: var(--text-muted);
          cursor: not-allowed;
        }

        @media (max-width: 640px) {
          .page-header h1 {
            font-size: 1.75rem;
          }

          .definition-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </article>
    );
}
