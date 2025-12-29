'use client';

import Link from 'next/link';

export default function IntelligentAgentsContent() {
    return (
        <article className="content">
            {/* Breadcrumb */}
            <nav className="breadcrumb">
                <Link href="/ai">AI</Link>
                <span>/</span>
                <Link href="/ai/introduction">Unit 1: Introduction</Link>
                <span>/</span>
                <span>Intelligent Agents</span>
            </nav>

            {/* Page Header */}
            <header className="page-header">
                <span className="topic-badge">1.5</span>
                <h1>Intelligent Agents</h1>
                <p className="last-updated">Last Updated: December 29, 2025</p>
            </header>

            {/* Introduction */}
            <section>
                <p>
                    An <strong>Intelligent Agent</strong> is anything that can perceive its environment through
                    sensors and act upon that environment through actuators.
                </p>

                <blockquote>
                    <p>
                        &ldquo;An agent is anything that can be viewed as perceiving its environment through sensors
                        and acting upon that environment through actuators.&rdquo;
                        <br />— <strong>Russell & Norvig</strong>, AI: A Modern Approach
                    </p>
                </blockquote>
            </section>

            {/* What is an Agent */}
            <section>
                <h2>🤖 What is an Agent?</h2>

                <p>An agent is an entity that:</p>
                <ul>
                    <li><strong>Perceives</strong> its environment through sensors</li>
                    <li><strong>Decides</strong> what action to take</li>
                    <li><strong>Acts</strong> upon the environment through actuators</li>
                </ul>

                <h3>Examples of Agents</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Agent</th>
                            <th>Sensors</th>
                            <th>Actuators</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Human</strong></td>
                            <td>Eyes, ears, skin</td>
                            <td>Hands, legs, mouth</td>
                        </tr>
                        <tr>
                            <td><strong>Robot</strong></td>
                            <td>Cameras, infrared, GPS</td>
                            <td>Motors, wheels, grippers</td>
                        </tr>
                        <tr>
                            <td><strong>Self-driving Car</strong></td>
                            <td>Cameras, LIDAR, radar</td>
                            <td>Steering, brakes, accelerator</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Rational Agent */}
            <section>
                <h2>🎯 Rational Agent</h2>

                <p>A <strong>Rational Agent</strong> is one that does the &ldquo;right thing&rdquo; — it selects actions that maximize its performance measure.</p>

                <div className="definition-box">
                    <h4>Definition</h4>
                    <p>For each possible sequence of percepts, a rational agent should select an action that is expected to maximize its performance measure.</p>
                </div>

                <div className="note note-info">
                    <strong>💡 Important:</strong> Rationality is NOT omniscience. A rational agent makes the best decision based on what it knows.
                </div>
            </section>

            {/* PEAS Framework */}
            <section>
                <h2>📋 PEAS Framework</h2>

                <p>When designing an agent, we need to specify its <strong>PEAS</strong>:</p>

                <div className="peas-grid">
                    <div className="peas-card">
                        <div className="peas-letter">P</div>
                        <h4>Performance Measure</h4>
                        <p>How do we evaluate success?</p>
                    </div>
                    <div className="peas-card">
                        <div className="peas-letter">E</div>
                        <h4>Environment</h4>
                        <p>What world does it operate in?</p>
                    </div>
                    <div className="peas-card">
                        <div className="peas-letter">A</div>
                        <h4>Actuators</h4>
                        <p>How can it affect the environment?</p>
                    </div>
                    <div className="peas-card">
                        <div className="peas-letter">S</div>
                        <h4>Sensors</h4>
                        <p>How does it perceive?</p>
                    </div>
                </div>
            </section>

            {/* Types of Agents */}
            <section>
                <h2>🔷 Types of Agents</h2>

                <div className="agent-types">
                    <div className="agent-type-card">
                        <div className="agent-type-header">
                            <span className="agent-type-number">1</span>
                            <h3>Simple Reflex Agent</h3>
                        </div>
                        <div className="agent-type-content">
                            <p>Acts ONLY based on the current percept. Uses if-then rules. No memory.</p>
                            <pre><code>{`if percept == "dirty":
    return "clean"
elif percept == "clean":
    return "move"`}</code></pre>
                            <p><strong>Example:</strong> Basic thermostat</p>
                        </div>
                    </div>

                    <div className="agent-type-card">
                        <div className="agent-type-header">
                            <span className="agent-type-number">2</span>
                            <h3>Model-Based Reflex Agent</h3>
                        </div>
                        <div className="agent-type-content">
                            <p>Maintains an <strong>internal state</strong> based on percept history. Can handle partial observability.</p>
                            <p><strong>Example:</strong> Robot that remembers where obstacles are</p>
                        </div>
                    </div>

                    <div className="agent-type-card">
                        <div className="agent-type-header">
                            <span className="agent-type-number">3</span>
                            <h3>Goal-Based Agent</h3>
                        </div>
                        <div className="agent-type-content">
                            <p>Has <strong>goals</strong> it wants to achieve. Can plan sequences of actions.</p>
                            <p><strong>Example:</strong> GPS navigation (goal: reach destination)</p>
                        </div>
                    </div>

                    <div className="agent-type-card">
                        <div className="agent-type-header">
                            <span className="agent-type-number">4</span>
                            <h3>Utility-Based Agent</h3>
                        </div>
                        <div className="agent-type-content">
                            <p>Uses a <strong>utility function</strong> to measure how &ldquo;happy&rdquo; it would be. Chooses actions that maximize utility.</p>
                            <p><strong>Example:</strong> Self-driving car (balance speed, safety, comfort)</p>
                        </div>
                    </div>

                    <div className="agent-type-card featured">
                        <div className="agent-type-header">
                            <span className="agent-type-number">5</span>
                            <h3>Learning Agent</h3>
                        </div>
                        <div className="agent-type-content">
                            <p>Can <strong>improve its performance over time</strong> by learning from experience. Foundation of modern AI!</p>
                            <p><strong>Example:</strong> AlphaGo (learned by playing millions of games)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section>
                <h2>📊 Comparison of Agent Types</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Agent Type</th>
                            <th>Memory</th>
                            <th>Goals</th>
                            <th>Learning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Simple Reflex</td><td>❌</td><td>❌</td><td>❌</td></tr>
                        <tr><td>Model-Based</td><td>✅</td><td>❌</td><td>❌</td></tr>
                        <tr><td>Goal-Based</td><td>✅</td><td>✅</td><td>❌</td></tr>
                        <tr><td>Utility-Based</td><td>✅</td><td>✅</td><td>❌</td></tr>
                        <tr><td>Learning</td><td>✅</td><td>✅</td><td>✅</td></tr>
                    </tbody>
                </table>
            </section>

            {/* Image Placeholder */}
            <section>
                <h2>📊 Visual Summary</h2>
                <div className="image-placeholder">
                    <div className="placeholder-icon">🖼️</div>
                    <span><strong>Image: agent-types-hierarchy.png</strong></span>
                    <span>A diagram showing the hierarchy of agent types</span>
                </div>
            </section>

            {/* Key Takeaways */}
            <section>
                <h2>📝 Key Takeaways</h2>
                <ul>
                    <li>An <strong>agent</strong> perceives its environment and acts upon it.</li>
                    <li>A <strong>rational agent</strong> acts to maximize its performance measure.</li>
                    <li><strong>PEAS</strong> (Performance, Environment, Actuators, Sensors) is used to specify agents.</li>
                    <li>Agent types range from <strong>simple reflex</strong> to <strong>learning agents</strong>.</li>
                    <li><strong>Learning agents</strong> can improve over time—foundation of modern AI!</li>
                </ul>
            </section>

            {/* Unit Summary */}
            <section className="unit-summary">
                <h2>🎉 Unit 1 Complete!</h2>
                <p>Congratulations! You have completed <strong>Unit 1: Introduction to AI</strong>.</p>
                <p><strong>Next up:</strong> Unit 2 will dive deep into <strong>Problem Solving by Searching</strong>!</p>
            </section>

            {/* Navigation */}
            <nav className="page-navigation">
                <Link href="/ai/introduction/past-present-future" className="nav-prev">
                    <span>← Previous: Past, Present & Future</span>
                </Link>
                <div className="nav-next disabled">
                    <span>Unit 2: Coming Soon →</span>
                </div>
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
        .definition-box { background-color: var(--bg-secondary); border: 1px solid var(--link-color); border-radius: 8px; padding: 1.25rem; margin: 1rem 0; }
        .definition-box h4 { color: var(--link-color); margin-bottom: 0.75rem; }
        .peas-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin: 1.5rem 0; }
        .peas-card { background-color: var(--bg-secondary); border-radius: 8px; padding: 1.25rem; text-align: center; border: 1px solid var(--border-color); }
        .peas-letter { width: 40px; height: 40px; background-color: var(--link-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.25rem; margin: 0 auto 0.75rem; }
        .peas-card h4 { font-size: 0.9rem; margin-bottom: 0.5rem; }
        .peas-card p { font-size: 0.8rem; margin-bottom: 0; }
        .agent-types { display: flex; flex-direction: column; gap: 1.5rem; }
        .agent-type-card { background-color: var(--bg-secondary); border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); }
        .agent-type-card.featured { border-color: var(--link-color); border-width: 2px; }
        .agent-type-header { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.5rem; background-color: var(--bg-tertiary); }
        .agent-type-number { width: 32px; height: 32px; background-color: var(--link-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; }
        .agent-type-header h3 { margin: 0; font-size: 1.1rem; }
        .agent-type-content { padding: 1.5rem; }
        .unit-summary { background-color: rgba(34, 197, 94, 0.1); border: 2px solid var(--link-color); border-radius: 12px; padding: 1.5rem; }
        .unit-summary h2 { color: var(--link-color); border: none; }
        .placeholder-icon { font-size: 3rem; margin-bottom: 0.5rem; }
        .page-navigation { display: flex; justify-content: space-between; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-color); flex-wrap: wrap; gap: 1rem; }
        .page-navigation a, .nav-prev, .nav-next { padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 500; font-size: 0.9rem; }
        .page-navigation a { background-color: var(--link-color); color: white; text-decoration: none; }
        .page-navigation a:hover { opacity: 0.9; text-decoration: none; }
        .nav-next.disabled { background-color: var(--bg-tertiary); color: var(--text-muted); }
        @media (max-width: 768px) { .peas-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .page-header h1 { font-size: 1.75rem; } .peas-grid { grid-template-columns: 1fr; } .page-navigation { flex-direction: column; } .page-navigation a, .nav-next { text-align: center; } }
      `}</style>
        </article>
    );
}
