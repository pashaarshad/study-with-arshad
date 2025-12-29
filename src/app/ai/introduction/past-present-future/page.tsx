'use client';

import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI - Past, Present and Future - Study with Arshad',
  description: 'Understand the evolution of AI from its early days to present applications and future possibilities including AGI and ethical considerations.',
};

export default function PastPresentFuturePage() {
  return (
    <article className="content">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link href="/ai">AI</Link>
        <span>/</span>
        <Link href="/ai/introduction">Unit 1: Introduction</Link>
        <span>/</span>
        <span>AI - Past, Present and Future</span>
      </nav>

      {/* Page Header */}
      <header className="page-header">
        <span className="topic-badge">1.4</span>
        <h1>AI - Past, Present and Future</h1>
        <p className="last-updated">Last Updated: December 29, 2025</p>
      </header>

      {/* Introduction */}
      <section>
        <p>
          Understanding where AI has been, where it is now, and where it&apos;s going gives us a
          complete picture of this transformative technology. Let&apos;s explore the three phases
          of AI evolution.
        </p>
      </section>

      {/* THE PAST */}
      <section>
        <h2>🕰️ The Past: Early Dreams and Foundations (1950s - 2000s)</h2>

        <p>
          The past of AI was characterized by <strong>ambitious dreams</strong>, <strong>limited technology</strong>,
          and <strong>cycles of optimism and disappointment</strong>.
        </p>

        <h3>Key Characteristics of Early AI</h3>

        <div className="era-grid">
          <div className="era-card">
            <h4>🔧 Rule-Based Systems</h4>
            <p>
              Early AI relied on humans manually coding rules. If-then statements defined how
              the system should behave.
            </p>
            <pre><code>{`# Early AI approach - explicit rules
if symptom == "fever" and symptom == "cough":
    diagnosis = "possible flu"
elif symptom == "headache":
    diagnosis = "possible migraine"`}</code></pre>
          </div>

          <div className="era-card">
            <h4>📚 Expert Systems</h4>
            <p>
              Knowledge from human experts was encoded into systems. They worked well in narrow
              domains but couldn&apos;t learn or adapt.
            </p>
          </div>

          <div className="era-card">
            <h4>🐌 Limited Computing</h4>
            <p>
              Computers were slow and expensive. Training even simple models took days or weeks.
              Memory was measured in kilobytes, not gigabytes.
            </p>
          </div>

          <div className="era-card">
            <h4>📉 AI Winters</h4>
            <p>
              Periods of reduced funding due to overpromised and underdelivered results.
              Researchers faced skepticism about AI&apos;s potential.
            </p>
          </div>
        </div>

        <div className="comparison-table">
          <h4>AI in the Past vs. Today</h4>
          <table>
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Past (1950s-2000s)</th>
                <th>Today (2020s)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Learning</td>
                <td>Programmed rules</td>
                <td>Learns from data</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>Limited, manual input</td>
                <td>Big Data, billions of examples</td>
              </tr>
              <tr>
                <td>Hardware</td>
                <td>Slow CPUs</td>
                <td>Fast GPUs, TPUs, cloud</td>
              </tr>
              <tr>
                <td>Applications</td>
                <td>Chess, simple tasks</td>
                <td>Language, vision, creativity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* THE PRESENT */}
      <section>
        <h2>🌟 The Present: The AI Revolution (2010s - Now)</h2>

        <p>
          We are living in the <strong>golden age of AI</strong>. Three factors converged to make this possible:
        </p>

        <div className="three-pillars">
          <div className="pillar">
            <div className="pillar-icon">📊</div>
            <h4>Big Data</h4>
            <p>The internet generates massive amounts of data that AI can learn from.</p>
          </div>
          <div className="pillar">
            <div className="pillar-icon">⚡</div>
            <h4>Computing Power</h4>
            <p>GPUs and cloud computing made training large models practical.</p>
          </div>
          <div className="pillar">
            <div className="pillar-icon">🧮</div>
            <h4>Better Algorithms</h4>
            <p>Deep learning and transformer architectures revolutionized AI.</p>
          </div>
        </div>

        <h3>AI Applications Today</h3>

        <div className="applications-grid">
          <div className="app-card">
            <span className="app-icon">💬</span>
            <h4>Conversational AI</h4>
            <p>ChatGPT, Claude, Google Bard can hold human-like conversations, answer questions, write code, and create content.</p>
          </div>

          <div className="app-card">
            <span className="app-icon">🎨</span>
            <h4>Generative AI</h4>
            <p>DALL-E, Midjourney, Stable Diffusion create stunning images from text descriptions.</p>
          </div>

          <div className="app-card">
            <span className="app-icon">🚗</span>
            <h4>Autonomous Vehicles</h4>
            <p>Tesla, Waymo are developing self-driving cars that can navigate complex roads.</p>
          </div>

          <div className="app-card">
            <span className="app-icon">🏥</span>
            <h4>Healthcare AI</h4>
            <p>AI diagnoses diseases from medical images, predicts patient outcomes, and accelerates drug discovery.</p>
          </div>

          <div className="app-card">
            <span className="app-icon">🎵</span>
            <h4>Recommendation Systems</h4>
            <p>Netflix, Spotify, YouTube use AI to suggest content you&apos;ll love.</p>
          </div>

          <div className="app-card">
            <span className="app-icon">🔒</span>
            <h4>Cybersecurity</h4>
            <p>AI detects fraud, identifies threats, and protects systems in real-time.</p>
          </div>
        </div>

        <h3>Python Example: Modern AI in Action</h3>
        <pre><code>{`# Modern AI with Transformers (Simplified Example)
# This shows how easy it is to use pre-trained AI models today

from transformers import pipeline

# Load a pre-trained sentiment analysis model
classifier = pipeline("sentiment-analysis")

# Analyze text sentiment
result = classifier("I love learning about AI!")
print(result)
# Output: [{'label': 'POSITIVE', 'score': 0.9998}]

# Text generation with GPT-like models
generator = pipeline("text-generation", model="gpt2")
story = generator("Once upon a time in the world of AI,", max_length=50)
print(story)

# Just 3 lines of code to use powerful AI!`}</code></pre>

        <div className="note note-info">
          <strong>💡 Key Insight:</strong> Modern AI frameworks like Hugging Face Transformers make
          it incredibly easy to use powerful AI models. What took research teams years to build
          can now be used with just a few lines of code!
        </div>
      </section>

      {/* THE FUTURE */}
      <section>
        <h2>🚀 The Future: What&apos;s Coming Next?</h2>

        <p>
          The future of AI is both exciting and uncertain. Here are the key developments
          experts predict:
        </p>

        <h3>🎯 Artificial General Intelligence (AGI)</h3>
        <div className="future-card">
          <p>
            <strong>AGI</strong> is AI that can perform any intellectual task that a human can.
            Unlike current AI (which is specialized), AGI would be a general-purpose thinking machine.
          </p>
          <ul>
            <li>Current AI: Good at ONE task (e.g., ChatGPT is good at text, DALL-E at images)</li>
            <li>AGI: Good at EVERYTHING (like a human who can learn any skill)</li>
            <li>Timeline: Experts disagree—could be 10 years or 100 years away</li>
          </ul>
        </div>

        <h3>🔮 Predicted Future Applications</h3>

        <div className="future-grid">
          <div className="future-item">
            <span className="future-icon">🏥</span>
            <div>
              <h4>Personalized Medicine</h4>
              <p>AI will create treatment plans tailored to your unique genetics and health history.</p>
            </div>
          </div>

          <div className="future-item">
            <span className="future-icon">🧪</span>
            <div>
              <h4>Scientific Discovery</h4>
              <p>AI will help discover new materials, drugs, and solve complex scientific problems.</p>
            </div>
          </div>

          <div className="future-item">
            <span className="future-icon">🎓</span>
            <div>
              <h4>Personalized Education</h4>
              <p>AI tutors will adapt to each student&apos;s learning style and pace.</p>
            </div>
          </div>

          <div className="future-item">
            <span className="future-icon">🌍</span>
            <div>
              <h4>Climate Solutions</h4>
              <p>AI will optimize energy usage and help develop sustainable technologies.</p>
            </div>
          </div>

          <div className="future-item">
            <span className="future-icon">🤖</span>
            <div>
              <h4>Advanced Robotics</h4>
              <p>Robots will assist in homes, hospitals, and dangerous environments.</p>
            </div>
          </div>

          <div className="future-item">
            <span className="future-icon">🧠</span>
            <div>
              <h4>Brain-Computer Interfaces</h4>
              <p>AI will help interpret brain signals for medical applications and human augmentation.</p>
            </div>
          </div>
        </div>

        <h3>⚠️ Challenges and Concerns</h3>

        <div className="challenges-grid">
          <div className="challenge-card warning">
            <h4>🔐 Privacy</h4>
            <p>AI systems collect and process massive amounts of personal data. How do we protect privacy?</p>
          </div>

          <div className="challenge-card warning">
            <h4>💼 Job Displacement</h4>
            <p>AI may automate many jobs. Society needs to adapt with new skills and safety nets.</p>
          </div>

          <div className="challenge-card warning">
            <h4>⚖️ Bias and Fairness</h4>
            <p>AI can inherit biases from training data. Ensuring fair AI is crucial.</p>
          </div>

          <div className="challenge-card danger">
            <h4>🎭 Deepfakes</h4>
            <p>AI can create fake videos and images that are hard to detect. This threatens trust.</p>
          </div>

          <div className="challenge-card danger">
            <h4>🎮 Autonomous Weapons</h4>
            <p>AI-powered weapons raise serious ethical and safety concerns.</p>
          </div>

          <div className="challenge-card warning">
            <h4>🔮 Existential Risk</h4>
            <p>Some experts worry about superintelligent AI that might not align with human values.</p>
          </div>
        </div>
      </section>

      {/* Summary Comparison */}
      <section>
        <h2>📊 Past vs Present vs Future</h2>

        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Past</th>
              <th>Present</th>
              <th>Future</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Type of AI</strong></td>
              <td>Rule-based, Expert Systems</td>
              <td>Machine Learning, Deep Learning</td>
              <td>AGI, Brain-Computer Interfaces</td>
            </tr>
            <tr>
              <td><strong>Learning</strong></td>
              <td>Programmed by humans</td>
              <td>Learns from data</td>
              <td>Self-improving, general learning</td>
            </tr>
            <tr>
              <td><strong>Capabilities</strong></td>
              <td>Narrow, specific tasks</td>
              <td>Impressive but specialized</td>
              <td>Human-level or beyond</td>
            </tr>
            <tr>
              <td><strong>Impact</strong></td>
              <td>Limited, academic</td>
              <td>Transforming industries</td>
              <td>Reshaping civilization</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Image Placeholder */}
      <section>
        <h2>📊 Visual Summary</h2>

        <div className="image-placeholder">
          <div className="placeholder-icon">🖼️</div>
          <span><strong>Image: ai-evolution-infographic.png</strong></span>
          <span>An infographic showing the evolution from Past → Present → Future AI</span>
        </div>

        <div className="image-placeholder">
          <div className="placeholder-icon">🖼️</div>
          <span><strong>Image: ai-future-applications.png</strong></span>
          <span>A visual showing predicted future AI applications in different sectors</span>
        </div>
      </section>

      {/* Key Takeaways */}
      <section>
        <h2>📝 Key Takeaways</h2>

        <ul>
          <li><strong>Past AI</strong> was rule-based, limited by computing power, and experienced &ldquo;winters.&rdquo;</li>
          <li><strong>Present AI</strong> is powered by big data, GPUs, and deep learning—transforming every industry.</li>
          <li><strong>Future AI</strong> may achieve AGI; will bring both opportunities and challenges.</li>
          <li>Three pillars of modern AI: <strong>Big Data + Computing Power + Better Algorithms</strong>.</li>
          <li>We must address <strong>ethical concerns</strong> like privacy, bias, job displacement, and safety.</li>
          <li>AI is a <strong>tool</strong>—how we use it will determine whether the future is positive or negative.</li>
        </ul>
      </section>

      {/* Navigation */}
      <nav className="page-navigation">
        <Link href="/ai/introduction/history" className="nav-prev">
          <span>← Previous: History of AI</span>
        </Link>
        <Link href="/ai/introduction/intelligent-agents" className="nav-next">
          <span>Next: Intelligent Agents →</span>
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

        .era-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin: 1rem 0;
        }

        .era-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 1.25rem;
        }

        .era-card h4 {
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .era-card p {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .three-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin: 1.5rem 0;
        }

        .pillar {
          text-align: center;
          padding: 1.5rem;
          background-color: var(--bg-secondary);
          border-radius: 8px;
          border: 1px solid var(--border-color);
        }

        .pillar-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
        }

        .pillar h4 {
          margin-bottom: 0.5rem;
          color: var(--link-color);
        }

        .pillar p {
          font-size: 0.875rem;
          margin-bottom: 0;
        }

        .applications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
          margin: 1rem 0;
        }

        .app-card {
          background-color: var(--bg-secondary);
          border-radius: 8px;
          padding: 1.25rem;
          border-left: 4px solid var(--link-color);
        }

        .app-icon {
          font-size: 1.5rem;
        }

        .app-card h4 {
          margin: 0.5rem 0;
          font-size: 1rem;
        }

        .app-card p {
          font-size: 0.875rem;
          margin-bottom: 0;
        }

        .future-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--link-color);
          border-radius: 8px;
          padding: 1.25rem;
          margin: 1rem 0;
        }

        .future-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin: 1rem 0;
        }

        .future-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background-color: var(--bg-secondary);
          border-radius: 8px;
        }

        .future-icon {
          font-size: 1.75rem;
          flex-shrink: 0;
        }

        .future-item h4 {
          margin-bottom: 0.25rem;
          font-size: 1rem;
        }

        .future-item p {
          font-size: 0.875rem;
          margin-bottom: 0;
        }

        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin: 1rem 0;
        }

        .challenge-card {
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid;
        }

        .challenge-card.warning {
          background-color: rgba(234, 179, 8, 0.1);
          border-color: #eab308;
        }

        .challenge-card.danger {
          background-color: rgba(239, 68, 68, 0.1);
          border-color: #ef4444;
        }

        .challenge-card h4 {
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .challenge-card p {
          font-size: 0.875rem;
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

        @media (max-width: 768px) {
          .three-pillars {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .page-header h1 {
            font-size: 1.75rem;
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
