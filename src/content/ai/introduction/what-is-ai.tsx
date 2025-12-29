// src/content/ai/introduction/what-is-ai.tsx
import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, CodeBlock, ImagePlaceholder } from '@/components/ContentDisplay';

export default function WhatIsAI() {
    return (
        <div>
            <p>
                <strong>Artificial Intelligence (AI)</strong> is one of the most transformative technologies of our time.
                At its core, AI refers to the simulation of human intelligence processes by computer systems.
                These processes include <em>learning</em> (acquiring information and rules for using it),
                <em>reasoning</em> (using rules to reach approximate or definite conclusions), and
                <em>self-correction</em>.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "Definition and core concepts of Artificial Intelligence",
                    "Difference between AI, Machine Learning, and Deep Learning",
                    "Types of AI: Narrow AI vs General AI",
                    "Real-world applications of AI in everyday life",
                    "Why AI is important for the future"
                ]}
            />

            <h2 id="definition">Definition of Artificial Intelligence</h2>

            <p>
                The term "Artificial Intelligence" was coined by <strong>John McCarthy</strong> in 1956 at the
                Dartmouth Conference. He defined AI as:
            </p>

            <blockquote>
                "The science and engineering of making intelligent machines, especially intelligent computer programs.
                It is related to the similar task of using computers to understand human intelligence, but AI does
                not have to confine itself to methods that are biologically observable."
                <br /><br />
                — John McCarthy, 1956
            </blockquote>

            <p>
                In simpler terms, AI is the capability of a machine to imitate intelligent human behavior.
                AI systems are designed to perform tasks that typically require human intelligence, such as:
            </p>

            <ul>
                <li><strong>Visual perception</strong> — recognizing objects, faces, and scenes</li>
                <li><strong>Speech recognition</strong> — understanding spoken language</li>
                <li><strong>Decision-making</strong> — choosing the best action based on data</li>
                <li><strong>Language translation</strong> — converting text between languages</li>
                <li><strong>Problem-solving</strong> — finding solutions to complex problems</li>
            </ul>

            <ImagePlaceholder
                name="ai-definition-diagram"
                description="A diagram showing the relationship between AI, Machine Learning, and Deep Learning as nested circles"
                suggestedSize="800x450"
            />

            <h2 id="ai-vs-ml-vs-dl">AI vs Machine Learning vs Deep Learning</h2>

            <p>
                Many people use these terms interchangeably, but they have distinct meanings:
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Term</th>
                        <th>Definition</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Artificial Intelligence</strong></td>
                        <td>The broad concept of machines being able to carry out tasks in a "smart" way</td>
                        <td>A chess-playing computer</td>
                    </tr>
                    <tr>
                        <td><strong>Machine Learning</strong></td>
                        <td>A subset of AI where machines learn from data without being explicitly programmed</td>
                        <td>Email spam filter that improves over time</td>
                    </tr>
                    <tr>
                        <td><strong>Deep Learning</strong></td>
                        <td>A subset of ML using neural networks with many layers</td>
                        <td>Image recognition, voice assistants</td>
                    </tr>
                </tbody>
            </table>

            <InfoBox type="tip" title="Think of it like this">
                <p>
                    <strong>AI</strong> is like the entire universe of intelligent machines.<br />
                    <strong>Machine Learning</strong> is a galaxy within that universe.<br />
                    <strong>Deep Learning</strong> is a solar system within that galaxy.
                </p>
            </InfoBox>

            <h2 id="types-of-ai">Types of Artificial Intelligence</h2>

            <p>
                AI can be classified based on its capabilities and functionalities. Here are the main types:
            </p>

            <h3>Based on Capabilities</h3>

            <h4>1. Narrow AI (Weak AI)</h4>
            <p>
                Narrow AI is designed to perform a single task or a narrow set of tasks. It operates under
                limited constraints and cannot perform beyond its programmed capabilities. This is the <strong>only
                    type of AI that exists today</strong>.
            </p>

            <ExampleBox title="Real-World Examples of Narrow AI">
                <ul>
                    <li><strong>Siri, Alexa, Google Assistant</strong> — Voice-activated assistants</li>
                    <li><strong>Netflix recommendations</strong> — Suggesting movies based on your history</li>
                    <li><strong>Self-driving cars</strong> — Autonomous navigation systems</li>
                    <li><strong>Spam filters</strong> — Email classification systems</li>
                    <li><strong>Face recognition</strong> — Used in smartphones and security systems</li>
                </ul>
            </ExampleBox>

            <h4>2. General AI (Strong AI)</h4>
            <p>
                General AI refers to machines that possess the ability to perform any intellectual task that
                a human can do. Such systems would have consciousness, self-awareness, and the ability to
                learn and apply knowledge across various domains. <strong>This type of AI does not exist yet</strong>
                and remains a goal for future research.
            </p>

            <h4>3. Super AI (Artificial Superintelligence)</h4>
            <p>
                Super AI is a hypothetical form of AI that would surpass human intelligence in all aspects —
                creativity, problem-solving, emotional intelligence, and more. This is still in the realm of
                science fiction and theoretical future AI.
            </p>

            <ImagePlaceholder
                name="ai-types-comparison"
                description="An infographic comparing Narrow AI, General AI, and Super AI with their characteristics"
                suggestedSize="800x500"
            />

            <h3>Based on Functionalities</h3>

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
                        <td><strong>Reactive Machines</strong></td>
                        <td>No memory, responds only to current inputs</td>
                        <td>IBM's Deep Blue (chess)</td>
                    </tr>
                    <tr>
                        <td><strong>Limited Memory</strong></td>
                        <td>Uses past experiences to inform decisions</td>
                        <td>Self-driving cars</td>
                    </tr>
                    <tr>
                        <td><strong>Theory of Mind</strong></td>
                        <td>Can understand emotions and beliefs (future AI)</td>
                        <td>Not yet achieved</td>
                    </tr>
                    <tr>
                        <td><strong>Self-Aware</strong></td>
                        <td>Has consciousness and self-awareness</td>
                        <td>Hypothetical future AI</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="real-world-applications">Real-World Applications of AI</h2>

            <p>
                AI is no longer just a concept from science fiction movies. It's integrated into our daily lives
                in ways we might not even realize:
            </p>

            <h3>1. Healthcare 🏥</h3>
            <ul>
                <li>Disease diagnosis from medical images (X-rays, MRIs)</li>
                <li>Drug discovery and development</li>
                <li>Personalized treatment recommendations</li>
                <li>Robot-assisted surgery</li>
            </ul>

            <h3>2. Finance 💰</h3>
            <ul>
                <li>Fraud detection in credit card transactions</li>
                <li>Algorithmic trading in stock markets</li>
                <li>Credit scoring and loan approvals</li>
                <li>Customer service chatbots</li>
            </ul>

            <h3>3. Transportation 🚗</h3>
            <ul>
                <li>Self-driving cars (Tesla, Waymo)</li>
                <li>Traffic prediction and route optimization (Google Maps)</li>
                <li>Ride-sharing algorithms (Uber, Lyft)</li>
                <li>Drone delivery systems</li>
            </ul>

            <h3>4. Entertainment 🎬</h3>
            <ul>
                <li>Content recommendations (Netflix, Spotify, YouTube)</li>
                <li>AI-generated art and music</li>
                <li>Video game AI for dynamic gameplay</li>
                <li>Deepfakes and visual effects</li>
            </ul>

            <h3>5. Education 📚</h3>
            <ul>
                <li>Personalized learning platforms</li>
                <li>Automated grading systems</li>
                <li>Intelligent tutoring systems</li>
                <li>Language learning apps (Duolingo)</li>
            </ul>

            <ExampleBox title="Code Example: Simple AI Concept">
                <p>
                    Here's a simple Python example that demonstrates a basic AI concept — making a decision
                    based on input (this is a very simplified rule-based AI):
                </p>
                <CodeBlock
                    language="python"
                    title="simple_ai_decision.py"
                    code={`# Simple Rule-Based AI Decision System
# This demonstrates how AI makes decisions based on rules

def smart_assistant(user_query):
    """
    A simple AI assistant that responds based on keywords.
    This is an example of rule-based AI (narrow AI).
    """
    # Convert query to lowercase for easier matching
    query = user_query.lower()
    
    # Define rules (in real AI, these would be learned from data)
    if 'weather' in query:
        return "I'll check the weather for you! It looks sunny today. 🌞"
    elif 'time' in query:
        return "The current time is displayed on your device! ⏰"
    elif 'hello' in query or 'hi' in query:
        return "Hello! How can I help you today? 👋"
    elif 'thank' in query:
        return "You're welcome! Is there anything else I can help with? 😊"
    else:
        return "I'm still learning! Can you rephrase that? 🤔"

# Test the AI
print(smart_assistant("Hello there!"))
print(smart_assistant("What's the weather like?"))
print(smart_assistant("Thank you so much!"))

# Output:
# Hello! How can I help you today? 👋
# I'll check the weather for you! It looks sunny today. 🌞
# You're welcome! Is there anything else I can help with? 😊`}
                />
            </ExampleBox>

            <InfoBox type="note" title="Important Note">
                <p>
                    The code example above is a <strong>rule-based system</strong>, which is one of the earliest
                    forms of AI. Modern AI systems use <strong>machine learning</strong> to automatically learn
                    patterns from data instead of relying on manually coded rules.
                </p>
            </InfoBox>

            <h2 id="importance">Why is AI Important?</h2>

            <p>
                AI is fundamentally changing how we live, work, and interact with technology:
            </p>

            <ul>
                <li>
                    <strong>Automation:</strong> AI can perform repetitive tasks faster and more accurately
                    than humans, freeing us for more creative work.
                </li>
                <li>
                    <strong>Data Analysis:</strong> AI can process and analyze massive amounts of data quickly,
                    finding patterns humans might miss.
                </li>
                <li>
                    <strong>Personalization:</strong> AI enables highly personalized experiences, from shopping
                    recommendations to healthcare treatments.
                </li>
                <li>
                    <strong>Innovation:</strong> AI is driving innovations in fields like medicine, climate
                    science, and space exploration.
                </li>
                <li>
                    <strong>Economic Impact:</strong> AI is projected to add trillions of dollars to the
                    global economy in the coming decades.
                </li>
            </ul>

            <InfoBox type="highlight" title="Industry Insight">
                <p>
                    According to a study by PwC, AI is expected to contribute <strong>$15.7 trillion</strong> to
                    the global economy by 2030. This makes understanding AI crucial for students and
                    professionals alike!
                </p>
            </InfoBox>

            <h2 id="summary">Summary</h2>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "AI is the simulation of human intelligence by machines",
                    "AI encompasses Machine Learning and Deep Learning as subfields",
                    "Currently, only Narrow (Weak) AI exists; General and Super AI are future goals",
                    "AI is classified into Reactive, Limited Memory, Theory of Mind, and Self-Aware types",
                    "AI is already used in healthcare, finance, transportation, entertainment, and education",
                    "Understanding AI is essential for the future job market and technology landscape"
                ]}
            />

            <InfoBox type="tip" title="What's Next?">
                <p>
                    In the next topic, we'll explore the <strong>Foundations of AI</strong> — the disciplines
                    that contributed to making AI possible, including philosophy, mathematics, neuroscience,
                    and computer science.
                </p>
            </InfoBox>
        </div>
    );
}
