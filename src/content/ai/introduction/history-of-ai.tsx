// src/content/ai/introduction/history-of-ai.tsx
import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, CodeBlock, ImagePlaceholder } from '@/components/ContentDisplay';

export default function HistoryOfAI() {
    return (
        <div>
            <p>
                The dream of creating intelligent machines is ancient, but the field we now call
                <strong> Artificial Intelligence</strong> was officially born in 1956. Understanding AI's
                history helps us appreciate where we are today and where we might be heading. The journey
                includes periods of immense optimism, followed by disappointments (AI winters), and
                ultimately the revolutionary breakthroughs of the 21st century.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "The origins of AI in ancient myths and early machines",
                    "Key milestones from 1940s to present day",
                    "The AI winters and why they happened",
                    "Major breakthroughs that shaped modern AI",
                    "Timeline of important AI achievements"
                ]}
            />

            <h2 id="early-dreams">Early Dreams of Artificial Beings (Before 1900)</h2>

            <p>
                Long before computers existed, humans dreamed of creating artificial beings. These stories
                and inventions laid the imaginative groundwork for AI:
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Era/Year</th>
                        <th>Creation/Story</th>
                        <th>Significance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Greek Mythology</td>
                        <td><strong>Talos</strong></td>
                        <td>Bronze automaton that protected Crete — early concept of a robot</td>
                    </tr>
                    <tr>
                        <td>1206</td>
                        <td><strong>Al-Jazari's Automata</strong></td>
                        <td>Programmable humanoid robots that could serve drinks</td>
                    </tr>
                    <tr>
                        <td>1770</td>
                        <td><strong>The Mechanical Turk</strong></td>
                        <td>Chess-playing "automaton" (actually a hoax with a hidden human)</td>
                    </tr>
                    <tr>
                        <td>1818</td>
                        <td><strong>Frankenstein</strong></td>
                        <td>Mary Shelley's novel raised questions about creating artificial life</td>
                    </tr>
                    <tr>
                        <td>1837</td>
                        <td><strong>Analytical Engine</strong></td>
                        <td>Charles Babbage's design for a general-purpose computer</td>
                    </tr>
                </tbody>
            </table>

            <InfoBox type="highlight" title="Ada Lovelace — The First Programmer">
                <p>
                    In 1843, <strong>Ada Lovelace</strong> wrote the first computer program for Babbage's
                    Analytical Engine. She also speculated whether the machine could compose music or
                    create art — perhaps the first thoughts about creative AI!
                </p>
            </InfoBox>

            <ImagePlaceholder
                name="early-automata-timeline"
                description="A timeline showing early automata from ancient Greece to the 1800s with illustrations"
                suggestedSize="900x400"
            />

            <h2 id="theoretical-foundations">Theoretical Foundations (1900-1950)</h2>

            <p>
                The early 20th century saw the development of theoretical foundations that would make
                AI possible:
            </p>

            <h3>Key Developments</h3>

            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Development</th>
                        <th>Pioneer(s)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1936</td>
                        <td><strong>Turing Machine</strong> — theoretical model of computation</td>
                        <td>Alan Turing</td>
                    </tr>
                    <tr>
                        <td>1943</td>
                        <td><strong>McCulloch-Pitts Neuron</strong> — first mathematical model of a neuron</td>
                        <td>Warren McCulloch, Walter Pitts</td>
                    </tr>
                    <tr>
                        <td>1948</td>
                        <td><strong>Cybernetics</strong> — study of control and communication in animals/machines</td>
                        <td>Norbert Wiener</td>
                    </tr>
                    <tr>
                        <td>1949</td>
                        <td><strong>Hebbian Learning</strong> — "Neurons that fire together, wire together"</td>
                        <td>Donald Hebb</td>
                    </tr>
                    <tr>
                        <td>1950</td>
                        <td><strong>Turing Test</strong> — test for machine intelligence</td>
                        <td>Alan Turing</td>
                    </tr>
                </tbody>
            </table>

            <ExampleBox title="The Turing Test Explained">
                <p>
                    In his 1950 paper "Computing Machinery and Intelligence," Alan Turing proposed the
                    <strong> Imitation Game</strong> (now called the Turing Test):
                </p>
                <ul>
                    <li>A human evaluator converses with both a human and a machine</li>
                    <li>The evaluator cannot see who they're talking to</li>
                    <li>If the evaluator cannot reliably distinguish the machine from the human,
                        the machine is said to exhibit intelligent behavior</li>
                </ul>
                <p>
                    <strong>Turing's famous question:</strong> "Can machines think?" He proposed to replace
                    this with "Can machines do what we (as thinking entities) can do?"
                </p>
            </ExampleBox>

            <h2 id="birth-of-ai">The Birth of AI (1956)</h2>

            <p>
                The field of Artificial Intelligence was officially born at a workshop at Dartmouth
                College in the summer of 1956. This event, organized by John McCarthy, Marvin Minsky,
                Nathaniel Rochester, and Claude Shannon, is considered the founding moment of AI.
            </p>

            <blockquote>
                "We propose that a 2 month, 10 man study of artificial intelligence be carried out
                during the summer of 1956 at Dartmouth College in Hanover, New Hampshire. The study
                is to proceed on the basis of the conjecture that every aspect of learning or any
                other feature of intelligence can in principle be so precisely described that a
                machine can be made to simulate it."
                <br /><br />
                — Dartmouth Proposal, 1955
            </blockquote>

            <h3>Key Attendees and Their Contributions</h3>
            <ul>
                <li><strong>John McCarthy</strong> — Coined the term "Artificial Intelligence", created LISP</li>
                <li><strong>Marvin Minsky</strong> — Pioneered neural networks, co-founded MIT AI Lab</li>
                <li><strong>Allen Newell & Herbert Simon</strong> — Created the Logic Theorist, first AI program</li>
                <li><strong>Claude Shannon</strong> — Father of information theory</li>
            </ul>

            <ImagePlaceholder
                name="dartmouth-conference-1956"
                description="Historic photo or illustration of the Dartmouth Conference attendees in 1956"
                suggestedSize="800x450"
            />

            <h2 id="golden-years">The Golden Years (1956-1974)</h2>

            <p>
                After Dartmouth, AI experienced a period of tremendous optimism and exciting developments:
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Achievement</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1956</td>
                        <td><strong>Logic Theorist</strong></td>
                        <td>First AI program, proved mathematical theorems</td>
                    </tr>
                    <tr>
                        <td>1958</td>
                        <td><strong>LISP</strong></td>
                        <td>McCarthy created LISP, the dominant AI programming language</td>
                    </tr>
                    <tr>
                        <td>1959</td>
                        <td><strong>General Problem Solver</strong></td>
                        <td>Newell & Simon's program that could solve various problems</td>
                    </tr>
                    <tr>
                        <td>1961</td>
                        <td><strong>Unimate</strong></td>
                        <td>First industrial robot installed at General Motors</td>
                    </tr>
                    <tr>
                        <td>1964</td>
                        <td><strong>ELIZA</strong></td>
                        <td>First chatbot, simulated a psychotherapist</td>
                    </tr>
                    <tr>
                        <td>1966</td>
                        <td><strong>Shakey the Robot</strong></td>
                        <td>First mobile robot with reasoning capabilities</td>
                    </tr>
                    <tr>
                        <td>1969</td>
                        <td><strong>SHRDLU</strong></td>
                        <td>Natural language understanding in a blocks world</td>
                    </tr>
                </tbody>
            </table>

            <ExampleBox title="ELIZA — The First Chatbot (1964)">
                <p>
                    Created by Joseph Weizenbaum at MIT, ELIZA simulated a Rogerian psychotherapist.
                    Here's a sample conversation:
                </p>
                <pre>
                    <code>{`User: Men are all alike.
ELIZA: In what way?
User: They're always bugging us about something.
ELIZA: Can you think of a specific example?
User: Well, my boyfriend made me come here.
ELIZA: Your boyfriend made you come here?
User: He says I'm depressed much of the time.
ELIZA: I am sorry to hear you are depressed.`}</code>
                </pre>
                <p>
                    ELIZA used <strong>pattern matching</strong> to give the illusion of understanding.
                    Amazingly, some users believed they were talking to a real person!
                </p>
            </ExampleBox>

            <InfoBox type="warning" title="Over-Optimistic Predictions">
                <p>
                    During this era, AI pioneers made bold predictions that would prove premature:
                </p>
                <ul>
                    <li><em>"Within 20 years, machines will be capable of doing any work a man can do."</em> — Herbert Simon, 1965</li>
                    <li><em>"Within a generation, the problem of creating AI will be substantially solved."</em> — Marvin Minsky, 1967</li>
                </ul>
            </InfoBox>

            <h2 id="first-ai-winter">The First AI Winter (1974-1980)</h2>

            <p>
                By the early 1970s, AI faced serious challenges that led to reduced funding and interest —
                the first "AI Winter":
            </p>

            <h3>Causes of the First AI Winter</h3>
            <ul>
                <li>
                    <strong>Intractability:</strong> Many problems were computationally too complex for
                    1970s computers
                </li>
                <li>
                    <strong>Combinatorial Explosion:</strong> As problems grew, the search space grew
                    exponentially
                </li>
                <li>
                    <strong>Moravec's Paradox:</strong> Easy things for humans (perception, motor skills)
                    were hard for AI, while hard things (chess) were easier
                </li>
                <li>
                    <strong>Limited Data:</strong> Not enough data to train sophisticated systems
                </li>
                <li>
                    <strong>Lighthill Report (1973):</strong> British report criticized AI progress,
                    leading to funding cuts
                </li>
            </ul>

            <h2 id="expert-systems">Rise of Expert Systems (1980-1987)</h2>

            <p>
                AI experienced a revival through <strong>Expert Systems</strong> — programs that encoded
                human expertise in specific domains:
            </p>

            <table>
                <thead>
                    <tr>
                        <th>System</th>
                        <th>Year</th>
                        <th>Domain</th>
                        <th>Impact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>MYCIN</strong></td>
                        <td>1976</td>
                        <td>Medical diagnosis</td>
                        <td>Diagnosed bacterial infections, outperformed some doctors</td>
                    </tr>
                    <tr>
                        <td><strong>R1/XCON</strong></td>
                        <td>1980</td>
                        <td>Computer configuration</td>
                        <td>Saved DEC $40 million/year</td>
                    </tr>
                    <tr>
                        <td><strong>DENDRAL</strong></td>
                        <td>1969</td>
                        <td>Chemistry</td>
                        <td>Identified organic molecules</td>
                    </tr>
                </tbody>
            </table>

            <p>
                By 1985, the AI industry was worth over $1 billion. But this boom would soon face another bust.
            </p>

            <h2 id="second-ai-winter">The Second AI Winter (1987-1993)</h2>

            <h3>Causes of the Second AI Winter</h3>
            <ul>
                <li>
                    <strong>Expert Systems Limitations:</strong> Difficult to maintain, couldn't handle
                    uncertainty, failed in novel situations
                </li>
                <li>
                    <strong>Specialized Hardware Collapse:</strong> LISP machines became obsolete as
                    general-purpose PCs improved
                </li>
                <li>
                    <strong>Reduced Funding:</strong> DARPA cut AI funding significantly</li>
                <li>
                    <strong>Failed Promises:</strong> The Japanese Fifth Generation Project didn't
                    meet its ambitious goals
                </li>
            </ul>

            <InfoBox type="note" title="Lessons from AI Winters">
                <p>
                    AI winters teach us important lessons: <strong>overpromising leads to disappointment</strong>.
                    Modern AI researchers are more measured in their predictions, though excitement about
                    recent breakthroughs has renewed bold claims.
                </p>
            </InfoBox>

            <h2 id="quiet-progress">Quiet Progress (1993-2006)</h2>

            <p>
                During this period, AI researchers avoided the term "AI" (which had become unfashionable)
                but made steady progress:
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Achievement</th>
                        <th>Significance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1997</td>
                        <td><strong>Deep Blue beats Kasparov</strong></td>
                        <td>IBM's computer defeats world chess champion</td>
                    </tr>
                    <tr>
                        <td>1997</td>
                        <td><strong>LSTM Networks</strong></td>
                        <td>Hochreiter & Schmidhuber's breakthrough for sequence learning</td>
                    </tr>
                    <tr>
                        <td>1998</td>
                        <td><strong>LeNet-5</strong></td>
                        <td>Yann LeCun's CNN for digit recognition</td>
                    </tr>
                    <tr>
                        <td>2002</td>
                        <td><strong>Roomba</strong></td>
                        <td>First successful consumer robot vacuum</td>
                    </tr>
                    <tr>
                        <td>2004</td>
                        <td><strong>DARPA Grand Challenge</strong></td>
                        <td>First autonomous vehicle competition (no finishers!)</td>
                    </tr>
                    <tr>
                        <td>2005</td>
                        <td><strong>Stanley wins DARPA Challenge</strong></td>
                        <td>First autonomous vehicle to complete the course</td>
                    </tr>
                </tbody>
            </table>

            <ExampleBox title="Deep Blue vs Kasparov (1997)">
                <p>
                    On May 11, 1997, IBM's <strong>Deep Blue</strong> defeated world chess champion
                    <strong>Garry Kasparov</strong> in a six-game match. This was a landmark moment:
                </p>
                <ul>
                    <li>Deep Blue could evaluate 200 million chess positions per second</li>
                    <li>It used specialized hardware and extensive chess knowledge</li>
                    <li>Kasparov accused IBM of cheating (they refused a rematch)</li>
                    <li>The victory showed that computers could beat humans in complex games</li>
                </ul>
                <p>
                    However, Deep Blue was <strong>narrow AI</strong> — it couldn't do anything else but play chess.
                </p>
            </ExampleBox>

            <h2 id="deep-learning-revolution">The Deep Learning Revolution (2006-Present)</h2>

            <p>
                Three factors converged to enable the modern AI boom:
            </p>

            <ol>
                <li><strong>Big Data:</strong> The internet generated massive datasets for training</li>
                <li><strong>GPU Computing:</strong> Graphics cards enabled parallel processing for neural networks</li>
                <li><strong>Algorithmic Advances:</strong> Better architectures and training techniques</li>
            </ol>

            <h3>Major Milestones</h3>

            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Achievement</th>
                        <th>Impact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2006</td>
                        <td><strong>Geoffrey Hinton's deep learning</strong></td>
                        <td>Breakthrough in training deep neural networks</td>
                    </tr>
                    <tr>
                        <td>2011</td>
                        <td><strong>IBM Watson wins Jeopardy!</strong></td>
                        <td>AI beats champions in natural language Q&A</td>
                    </tr>
                    <tr>
                        <td>2012</td>
                        <td><strong>AlexNet wins ImageNet</strong></td>
                        <td>Deep learning revolution in computer vision begins</td>
                    </tr>
                    <tr>
                        <td>2014</td>
                        <td><strong>GANs invented</strong></td>
                        <td>Generative Adversarial Networks for creating images</td>
                    </tr>
                    <tr>
                        <td>2016</td>
                        <td><strong>AlphaGo beats Lee Sedol</strong></td>
                        <td>AI masters Go, considered impossible for computers</td>
                    </tr>
                    <tr>
                        <td>2017</td>
                        <td><strong>Transformer architecture</strong></td>
                        <td>"Attention is All You Need" paper revolutionizes NLP</td>
                    </tr>
                    <tr>
                        <td>2018</td>
                        <td><strong>BERT</strong></td>
                        <td>Google's language model advances NLP significantly</td>
                    </tr>
                    <tr>
                        <td>2020</td>
                        <td><strong>GPT-3</strong></td>
                        <td>OpenAI's 175B parameter model shows remarkable capabilities</td>
                    </tr>
                    <tr>
                        <td>2022</td>
                        <td><strong>ChatGPT, DALL-E 2</strong></td>
                        <td>AI goes mainstream with conversational AI and image generation</td>
                    </tr>
                    <tr>
                        <td>2023</td>
                        <td><strong>GPT-4, Gemini</strong></td>
                        <td>Multimodal AI with text, image, and reasoning capabilities</td>
                    </tr>
                </tbody>
            </table>

            <ImagePlaceholder
                name="ai-history-timeline"
                description="A comprehensive timeline showing all major AI milestones from 1950 to 2024"
                suggestedSize="1000x500"
            />

            <InfoBox type="highlight" title="AlphaGo — A Defining Moment">
                <p>
                    In 2016, DeepMind's <strong>AlphaGo</strong> defeated Go world champion <strong>Lee Sedol</strong>
                    4-1. Go has more possible positions than atoms in the universe, making brute-force search
                    impossible. AlphaGo used <strong>deep reinforcement learning</strong> to develop intuition —
                    a truly revolutionary achievement.
                </p>
            </InfoBox>

            <h2 id="summary">Summary</h2>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Dreams of artificial beings date back to ancient mythology",
                    "The theoretical foundations (Turing, neurons) were laid in the 1940s",
                    "AI was born at the Dartmouth Conference in 1956",
                    "The field experienced two 'AI Winters' due to overpromising and technical limitations",
                    "Expert systems dominated the 1980s but had limitations",
                    "Deep learning, big data, and GPUs enabled the modern AI revolution (2006-present)",
                    "Recent breakthroughs in transformers led to ChatGPT, GPT-4, and multimodal AI"
                ]}
            />

            <InfoBox type="tip" title="What's Next?">
                <p>
                    In the next topic, we'll explore <strong>AI — Past, Present, and Future</strong>, diving
                    deeper into where AI stands today and the exciting (and concerning) possibilities ahead.
                </p>
            </InfoBox>
        </div>
    );
}
