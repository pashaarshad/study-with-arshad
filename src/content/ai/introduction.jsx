// Unit 1: Introduction to Artificial Intelligence
// Comprehensive educational content with real-world examples

export const IntroductionContent = {
    // Course Overview
    overview: (
        <div className="ai-overview">
            <h1>Artificial Intelligence and Applications</h1>
            <p className="course-info">
                <strong>Course Code:</strong> DSC16 | <strong>Credits:</strong> 04 | <strong>Semester:</strong> VI
            </p>

            <div className="info-box">
                <h4>📚 Course Objectives</h4>
                <p>
                    This course provides a comprehensive understanding of Artificial Intelligence, from its
                    historical foundations to modern applications. You will learn about intelligent agents,
                    problem-solving techniques, knowledge representation, machine learning, and real-world
                    AI applications.
                </p>
            </div>

            <h2>What You Will Learn</h2>
            <ul>
                <li><strong>CO1:</strong> Gain a historical perspective of AI and its foundations</li>
                <li><strong>CO2:</strong> Become familiar with basic principles and strategies of AI towards problem solving</li>
                <li><strong>CO3:</strong> Understand and apply approaches of inference, perception, knowledge representation, and learning</li>
                <li><strong>CO4:</strong> Understand the various applications of AI</li>
            </ul>

            <h2>Course Structure</h2>
            <div className="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Unit</th>
                            <th>Topic</th>
                            <th>Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Introduction to AI & Intelligent Agents</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Problem Solving by Searching</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Knowledge Representation</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Machine Learning</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Applications of AI</td>
                            <td>10</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Recommended Textbooks</h2>
            <ol>
                <li>Stuart Russell & Peter Norvig: <em>"Artificial Intelligence: A Modern Approach"</em>, 2nd Edition, Pearson Education, 2003</li>
                <li>Tom Mitchell: <em>"Machine Learning"</em>, 1st Edition, McGraw-Hill, 2017</li>
                <li>Elaine Rich, Kevin Knight, Shivashankar B Nair: <em>"Artificial Intelligence"</em>, Tata McGraw Hill, 3rd Edition, 2013</li>
            </ol>

            <div className="note-box">
                <h4>💡 Getting Started</h4>
                <p>
                    Begin your AI journey by exploring the "Introduction to AI" section in the sidebar.
                    Each topic includes detailed explanations, real-world examples, and code snippets
                    to help you understand the concepts thoroughly.
                </p>
            </div>
        </div>
    ),

    // Main Introduction page
    main: (
        <div>
            <h1>Unit 1: Introduction to Artificial Intelligence</h1>

            <p>
                Welcome to the fascinating world of Artificial Intelligence! This unit introduces you to
                the fundamental concepts of AI, its historical development, and its transformative impact
                on our world. Understanding these foundations is crucial before diving into more advanced
                topics like search algorithms, knowledge representation, and machine learning.
            </p>

            <div className="key-points">
                <h3>🎯 Learning Objectives</h3>
                <ul>
                    <li>Understand what Artificial Intelligence is and its various definitions</li>
                    <li>Explore the philosophical and scientific foundations of AI</li>
                    <li>Trace the historical evolution of AI from its inception to today</li>
                    <li>Analyze the current state and future prospects of AI technology</li>
                </ul>
            </div>

            <h2>Topics Covered in This Unit</h2>

            <div className="definition-list">
                <div className="definition-item">
                    <dt>What is Artificial Intelligence?</dt>
                    <dd>
                        Explore the various definitions and perspectives on AI, from thinking humanly
                        to acting rationally. Understand what makes a system "intelligent."
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Foundations of AI</dt>
                    <dd>
                        Discover the multidisciplinary roots of AI, including philosophy, mathematics,
                        psychology, linguistics, computer science, and neuroscience.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>History of AI</dt>
                    <dd>
                        Journey through the key milestones in AI development, from Alan Turing's
                        foundational work to the modern deep learning revolution.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>AI - Past, Present & Future</dt>
                    <dd>
                        Examine the evolution of AI capabilities, current breakthroughs, and
                        predictions for how AI will shape our future.
                    </dd>
                </div>
            </div>

            <div className="info-box">
                <h4>📖 How to Study This Unit</h4>
                <p>
                    Start with "What is AI?" to build a solid conceptual foundation. Then explore the
                    historical context to understand how the field evolved. Pay special attention to
                    the real-world examples provided—they will help you connect theoretical concepts
                    to practical applications.
                </p>
            </div>
        </div>
    ),

    // What is Artificial Intelligence?
    whatIsAI: (
        <div>
            <h1>What is Artificial Intelligence?</h1>

            <p>
                Artificial Intelligence (AI) is one of the most transformative technologies of our time.
                But what exactly is AI? The answer depends on whom you ask. Different researchers and
                practitioners have proposed various definitions based on their perspectives and goals.
            </p>

            <h2>Defining Artificial Intelligence</h2>

            <p>
                AI can be understood through four main approaches, organized along two dimensions:
            </p>

            <div className="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Human-Based</th>
                            <th>Ideal Rationality</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Thought Process</strong></td>
                            <td>Thinking Humanly</td>
                            <td>Thinking Rationally</td>
                        </tr>
                        <tr>
                            <td><strong>Behavior</strong></td>
                            <td>Acting Humanly</td>
                            <td>Acting Rationally</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>1. Thinking Humanly: The Cognitive Modeling Approach</h3>
            <p>
                This approach focuses on understanding how humans think and then replicating those
                thought processes in machines. The goal is to create systems that think like humans.
            </p>

            <blockquote>
                "The exciting new effort to make computers think... machines with minds, in the full
                and literal sense." — Haugeland, 1985
            </blockquote>

            <div className="example-box">
                <h4>🌍 Real-World Example</h4>
                <p>
                    <strong>Cognitive architectures</strong> like ACT-R and SOAR are designed to model
                    human cognitive processes. Researchers use these to understand human memory,
                    problem-solving, and decision-making by simulating them in software.
                </p>
            </div>

            <h3>2. Acting Humanly: The Turing Test Approach</h3>
            <p>
                Proposed by Alan Turing in 1950, this approach defines intelligence based on behavior.
                A machine is intelligent if it can exhibit behavior indistinguishable from a human.
            </p>

            <div className="info-box">
                <h4>🧪 The Turing Test</h4>
                <p>
                    In the Turing Test, a human evaluator engages in a natural language conversation
                    with both a human and a machine (without knowing which is which). If the evaluator
                    cannot reliably distinguish the machine from the human, the machine is said to
                    pass the test.
                </p>
            </div>

            <p>
                To pass the Turing Test, a computer would need:
            </p>
            <ul>
                <li><strong>Natural Language Processing (NLP):</strong> To communicate in English or other human languages</li>
                <li><strong>Knowledge Representation:</strong> To store and retrieve information</li>
                <li><strong>Automated Reasoning:</strong> To answer questions and draw conclusions</li>
                <li><strong>Machine Learning:</strong> To adapt to new situations and detect patterns</li>
            </ul>

            <div className="example-box">
                <h4>🌍 Real-World Example</h4>
                <p>
                    <strong>ChatGPT and other Large Language Models (LLMs)</strong> demonstrate remarkable
                    ability to converse naturally with humans. While they don't perfectly pass the Turing
                    Test in all scenarios, they represent significant progress toward this goal.
                </p>
            </div>

            <h3>3. Thinking Rationally: The Laws of Thought Approach</h3>
            <p>
                This approach is based on formal logic—the study of correct reasoning. The goal is to
                create systems that think correctly according to logical rules.
            </p>

            <blockquote>
                "The study of mental faculties through the use of computational models." — Charniak and McDermott, 1985
            </blockquote>

            <p>
                The Greek philosopher Aristotle was among the first to codify "right thinking" through
                syllogisms—patterns of argument that always yield correct conclusions given correct premises.
            </p>

            <div className="code-example">
                <div className="code-example-header">
                    <span className="code-example-title">Example: Logical Syllogism</span>
                </div>
                <pre><code>{`Premise 1: All humans are mortal.
Premise 2: Socrates is a human.
Conclusion: Therefore, Socrates is mortal.`}</code></pre>
            </div>

            <h3>4. Acting Rationally: The Rational Agent Approach</h3>
            <p>
                This is the most widely adopted approach in modern AI. A <strong>rational agent</strong>
                is one that acts to achieve the best outcome or, when there is uncertainty, the best
                expected outcome.
            </p>

            <blockquote>
                "AI is concerned with intelligent behavior in artifacts." — Nilsson, 1998
            </blockquote>

            <p>
                This approach is appealing because:
            </p>
            <ul>
                <li>It's more general than the "laws of thought" approach (includes actions beyond inference)</li>
                <li>It's more scientifically tractable than human-based approaches</li>
                <li>It provides clear criteria for measuring success</li>
            </ul>

            <div className="example-box">
                <h4>🌍 Real-World Example</h4>
                <p>
                    <strong>Self-driving cars</strong> are rational agents. They perceive their environment
                    through sensors, process information, and take actions (steering, braking, accelerating)
                    to achieve the goal of safely transporting passengers from point A to point B.
                </p>
            </div>

            <h2>A Modern Definition</h2>

            <div className="info-box">
                <h4>📌 Definition</h4>
                <p>
                    <strong>Artificial Intelligence</strong> is the study and design of intelligent agents,
                    where an intelligent agent is a system that perceives its environment and takes actions
                    that maximize its chances of successfully achieving its goals.
                </p>
            </div>

            <h2>Types of AI</h2>

            <h3>Based on Capability</h3>

            <div className="definition-list">
                <div className="definition-item">
                    <dt>Narrow AI (Weak AI)</dt>
                    <dd>
                        Designed for specific tasks. Examples: Siri, Alexa, chess-playing programs,
                        recommendation systems. This is what we have today.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>General AI (Strong AI)</dt>
                    <dd>
                        Hypothetical AI with human-level intelligence across all domains. Can learn,
                        understand, and apply knowledge to any task. This does not exist yet.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Super AI</dt>
                    <dd>
                        Theoretical AI that surpasses human intelligence in all aspects. A concept
                        for future consideration and ethical debate.
                    </dd>
                </div>
            </div>

            <h3>Based on Functionality</h3>

            <div className="definition-list">
                <div className="definition-item">
                    <dt>Reactive Machines</dt>
                    <dd>
                        Basic AI that reacts to current situations without memory. Example: IBM's Deep Blue chess computer.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Limited Memory</dt>
                    <dd>
                        Can use past experiences to inform decisions. Example: Self-driving cars that observe other vehicles' speed and direction.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Theory of Mind</dt>
                    <dd>
                        Understands emotions, beliefs, and intentions of others. Still in research phase.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Self-Aware</dt>
                    <dd>
                        Has consciousness and self-awareness. Purely theoretical at this point.
                    </dd>
                </div>
            </div>

            <div className="key-points">
                <h3>📝 Key Takeaways</h3>
                <ul>
                    <li>AI can be defined from four perspectives: thinking humanly, acting humanly, thinking rationally, and acting rationally</li>
                    <li>The Turing Test, proposed in 1950, remains a benchmark for machine intelligence</li>
                    <li>Modern AI focuses on rational agents—systems that act to achieve optimal outcomes</li>
                    <li>Current AI is "narrow"—specialized for specific tasks, not general intelligence</li>
                    <li>AI combines knowledge from multiple fields: computer science, mathematics, philosophy, psychology, and more</li>
                </ul>
            </div>

            <div className="content-image-container">
                <div className="image-placeholder">
                    <p className="image-placeholder-text">
                        📷 <strong>Image Suggestion:</strong> ai-approaches-diagram.png<br />
                        A visual diagram showing the four approaches to AI (Thinking/Acting × Human/Rational)
                    </p>
                </div>
            </div>
        </div>
    ),

    // Foundations of AI
    foundations: (
        <div>
            <h1>Foundations of Artificial Intelligence</h1>

            <p>
                Artificial Intelligence didn't emerge in isolation—it stands on the shoulders of giants
                from multiple disciplines. Understanding these foundations helps us appreciate why AI
                developed the way it did and where it might go in the future.
            </p>

            <div className="info-box">
                <h4>🌳 The Multidisciplinary Tree of AI</h4>
                <p>
                    AI draws from philosophy, mathematics, economics, neuroscience, psychology,
                    computer engineering, control theory, and linguistics. Each field contributed
                    essential concepts that make modern AI possible.
                </p>
            </div>

            <h2>1. Philosophy (428 BC - Present)</h2>

            <p>
                Philosophy laid the groundwork for AI by asking fundamental questions about the
                mind, knowledge, and reasoning.
            </p>

            <h3>Key Contributions</h3>
            <ul>
                <li><strong>Rationalism:</strong> Descartes and others proposed that the mind operates according to rules that can be expressed formally</li>
                <li><strong>Materialism:</strong> The brain is a machine that operates according to physical laws</li>
                <li><strong>Empiricism:</strong> Knowledge comes from sensory experience (Locke, Hume)</li>
                <li><strong>Logic:</strong> Aristotle's syllogisms provided the first formal system for reasoning</li>
            </ul>

            <div className="example-box">
                <h4>🌍 Real-World Connection</h4>
                <p>
                    When you ask Siri or Alexa a question, the system uses logical reasoning to process
                    your query—a direct application of philosophical ideas about formal reasoning that
                    date back to Aristotle.
                </p>
            </div>

            <blockquote>
                "I think, therefore I am." — René Descartes (1596-1650)
            </blockquote>

            <h2>2. Mathematics (800 AD - Present)</h2>

            <p>
                Mathematics provides the formal language and tools that make AI possible. Three
                areas of mathematics are particularly important:
            </p>

            <h3>Key Mathematical Foundations</h3>

            <div className="definition-list">
                <div className="definition-item">
                    <dt>Formal Logic</dt>
                    <dd>
                        George Boole (1815-1864) developed Boolean algebra, showing how logical
                        reasoning could be expressed mathematically. This became the foundation
                        for digital computers and AI reasoning systems.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Computation Theory</dt>
                    <dd>
                        Alan Turing (1912-1954) and Alonzo Church defined what it means to compute.
                        Turing's abstract "Turing Machine" proved that certain problems cannot be
                        solved by any algorithm—defining the limits of what computers can do.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Probability and Statistics</dt>
                    <dd>
                        Thomas Bayes (1702-1761) developed Bayes' theorem, which allows AI systems
                        to reason under uncertainty. Modern machine learning heavily relies on
                        probability theory.
                    </dd>
                </div>
            </div>

            <div className="code-example">
                <div className="code-example-header">
                    <span className="code-example-title">Bayes' Theorem (Python)</span>
                </div>
                <pre><code>{`# Bayes' Theorem: P(A|B) = P(B|A) * P(A) / P(B)

def bayes_theorem(prior_a, likelihood_b_given_a, evidence_b):
    """
    Calculate posterior probability using Bayes' theorem
    
    Args:
        prior_a: P(A) - Prior probability of A
        likelihood_b_given_a: P(B|A) - Probability of B given A
        evidence_b: P(B) - Total probability of B
    
    Returns:
        P(A|B) - Posterior probability of A given B
    """
    posterior = (likelihood_b_given_a * prior_a) / evidence_b
    return posterior

# Example: Email spam detection
# P(Spam|"free") = P("free"|Spam) * P(Spam) / P("free")
prior_spam = 0.3  # 30% of emails are spam
prob_free_given_spam = 0.8  # 80% of spam contains "free"
prob_free = 0.4  # 40% of all emails contain "free"

prob_spam_given_free = bayes_theorem(prior_spam, prob_free_given_spam, prob_free)
print(f"P(Spam|'free') = {prob_spam_given_free}")  # Output: 0.6`}</code></pre>
            </div>

            <h2>3. Economics (1776 - Present)</h2>

            <p>
                Economics contributed the theory of rational decision-making. How should an
                agent act to maximize utility (satisfaction or reward)?
            </p>

            <h3>Key Concepts</h3>
            <ul>
                <li><strong>Utility Theory:</strong> Quantifying preferences and making optimal choices</li>
                <li><strong>Decision Theory:</strong> Making decisions under uncertainty</li>
                <li><strong>Game Theory:</strong> Strategic decision-making when multiple agents interact (John von Neumann)</li>
                <li><strong>Operations Research:</strong> Optimizing complex systems with multiple constraints</li>
            </ul>

            <div className="example-box">
                <h4>🌍 Real-World Example</h4>
                <p>
                    <strong>Recommendation systems</strong> (like Netflix or Amazon) use utility theory
                    to predict which products or content will maximize user satisfaction, then rank
                    recommendations accordingly.
                </p>
            </div>

            <h2>4. Neuroscience (1861 - Present)</h2>

            <p>
                Neuroscience studies how the brain produces intelligence. Understanding biological
                neural networks inspired artificial neural networks.
            </p>

            <h3>Key Discoveries</h3>
            <ul>
                <li><strong>Neurons:</strong> The brain consists of interconnected nerve cells (neurons) that transmit electrical signals</li>
                <li><strong>Plasticity:</strong> Neural connections strengthen or weaken based on experience (learning)</li>
                <li><strong>Localization:</strong> Different brain regions specialize in different functions</li>
            </ul>

            <div className="info-box">
                <h4>🧠 The Brain by Numbers</h4>
                <p>
                    The human brain contains approximately <strong>86 billion neurons</strong>, each connected
                    to thousands of others, creating roughly <strong>100 trillion synapses</strong>. While
                    artificial neural networks are inspired by this structure, they're much simpler—current
                    large language models have around 175 billion parameters.
                </p>
            </div>

            <h2>5. Psychology (1879 - Present)</h2>

            <p>
                Psychology studies how humans and animals think and act. Cognitive psychology,
                in particular, views the mind as an information-processing system.
            </p>

            <h3>Key Contributions</h3>
            <ul>
                <li><strong>Behaviorism:</strong> Stimulus-response patterns (influenced early AI)</li>
                <li><strong>Cognitive Psychology:</strong> Mental representations and processes</li>
                <li><strong>Memory Models:</strong> Short-term vs. long-term memory, working memory</li>
                <li><strong>Problem-Solving:</strong> Search strategies, means-ends analysis</li>
            </ul>

            <div className="example-box">
                <h4>🌍 Real-World Example</h4>
                <p>
                    The concept of <strong>working memory</strong> in psychology directly influenced
                    AI architectures. Modern language models use "attention mechanisms" that function
                    similarly to how human working memory focuses on relevant information.
                </p>
            </div>

            <h2>6. Computer Engineering (1940 - Present)</h2>

            <p>
                Without powerful computers, AI would remain theoretical. Hardware advances have
                been crucial to AI progress.
            </p>

            <h3>Key Milestones</h3>
            <ul>
                <li><strong>1943:</strong> First electronic computer (ENIAC)</li>
                <li><strong>1950s:</strong> Transistors replace vacuum tubes</li>
                <li><strong>1970s:</strong> Microprocessors emerge</li>
                <li><strong>1980s:</strong> Personal computers democratize computing</li>
                <li><strong>2010s:</strong> GPUs enable deep learning revolution</li>
                <li><strong>2020s:</strong> Specialized AI chips (TPUs, NPUs) accelerate training</li>
            </ul>

            <div className="note-box">
                <h4>📈 Moore's Law and AI</h4>
                <p>
                    Computing power has roughly doubled every 18-24 months since the 1960s. This
                    exponential growth enabled AI systems that were theoretically possible but
                    computationally infeasible to finally become practical.
                </p>
            </div>

            <h2>7. Control Theory & Cybernetics (1948 - Present)</h2>

            <p>
                Control theory studies how systems can regulate themselves to achieve goals.
                Norbert Wiener's cybernetics explored the parallels between machines and living
                organisms.
            </p>

            <h3>Key Concepts</h3>
            <ul>
                <li><strong>Feedback Loops:</strong> Systems that adjust behavior based on output</li>
                <li><strong>Homeostasis:</strong> Maintaining stability through self-regulation</li>
                <li><strong>Objective Functions:</strong> Mathematical descriptions of goals</li>
            </ul>

            <div className="example-box">
                <h4>🌍 Real-World Example</h4>
                <p>
                    A <strong>thermostat</strong> is a simple control system: it measures temperature
                    (perception), compares it to the desired temperature (goal), and turns heating
                    on/off (action). Modern AI agents follow the same perceive-decide-act cycle,
                    just with far more complexity.
                </p>
            </div>

            <h2>8. Linguistics (1957 - Present)</h2>

            <p>
                Linguistics studies the structure and meaning of language. Natural Language
                Processing (NLP) is one of AI's most important application areas.
            </p>

            <h3>Key Contributions</h3>
            <ul>
                <li><strong>Chomsky's Generative Grammar:</strong> Language follows formal rules that can be computationally modeled</li>
                <li><strong>Semantic Analysis:</strong> Understanding meaning, not just syntax</li>
                <li><strong>Computational Linguistics:</strong> Applying computer science to language problems</li>
            </ul>

            <div className="example-box">
                <h4>🌍 Real-World Example</h4>
                <p>
                    <strong>Google Translate</strong> uses deep learning to translate between languages.
                    Early systems used rule-based approaches inspired by Chomsky's work; modern systems
                    learn patterns from massive amounts of translated text.
                </p>
            </div>

            <div className="key-points">
                <h3>📝 Key Takeaways</h3>
                <ul>
                    <li>AI is fundamentally interdisciplinary, drawing from at least 8 major fields</li>
                    <li>Philosophy provided the conceptual framework for understanding intelligence</li>
                    <li>Mathematics gave us the formal tools: logic, probability, and computation theory</li>
                    <li>Neuroscience inspired artificial neural networks</li>
                    <li>Computer engineering made AI practical through exponential hardware improvements</li>
                    <li>Each discipline continues to contribute new insights to AI research</li>
                </ul>
            </div>

            <div className="content-image-container">
                <div className="image-placeholder">
                    <p className="image-placeholder-text">
                        📷 <strong>Image Suggestion:</strong> ai-foundations-diagram.png<br />
                        A circular diagram showing the 8 foundational disciplines connected to AI at the center
                    </p>
                </div>
            </div>
        </div>
    ),

    // History of AI (placeholder for brevity - would contain similar detailed content)
    history: (
        <div>
            <h1>History of Artificial Intelligence</h1>

            <p>
                The history of AI is a fascinating journey of ambitious dreams, remarkable breakthroughs,
                and humbling setbacks. Understanding this history helps us appreciate current achievements
                and anticipate future challenges.
            </p>

            <h2>The Birth of AI (1943-1956)</h2>

            <h3>1943: The First Neural Network Model</h3>
            <p>
                Warren McCulloch and Walter Pitts published "A Logical Calculus of Ideas Immanent in
                Nervous Activity," proposing the first mathematical model of a neural network. They
                showed that simple connected neurons could compute any computable function.
            </p>

            <h3>1950: Turing's Vision</h3>
            <p>
                Alan Turing published "Computing Machinery and Intelligence," introducing the famous
                Turing Test and addressing fundamental questions about machine intelligence.
            </p>

            <blockquote>
                "I propose to consider the question, 'Can machines think?'" — Alan Turing, 1950
            </blockquote>

            <h3>1956: The Dartmouth Conference</h3>
            <p>
                John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon organized a
                summer workshop at Dartmouth College. This event is considered the <strong>official
                    birth of AI as a field</strong>.
            </p>

            <div className="info-box">
                <h4>📌 The Dartmouth Proposal</h4>
                <p>
                    "We propose that a 2 month, 10 man study of artificial intelligence be carried out...
                    The study is to proceed on the basis of the conjecture that every aspect of learning
                    or any other feature of intelligence can in principle be so precisely described that
                    a machine can be made to simulate it."
                </p>
            </div>

            <h2>Early Enthusiasm (1956-1969)</h2>

            <p>
                The early years were marked by optimism and impressive demonstrations:
            </p>

            <ul>
                <li><strong>1956:</strong> Logic Theorist (Newell & Simon) - First AI program, proved mathematical theorems</li>
                <li><strong>1958:</strong> LISP programming language created by John McCarthy</li>
                <li><strong>1959:</strong> General Problem Solver (GPS) - Attempt to create a universal problem-solving machine</li>
                <li><strong>1966:</strong> ELIZA - Early natural language processing program that simulated a psychotherapist</li>
                <li><strong>1969:</strong> SHRDLU - Robot that could understand and execute English commands in a blocks world</li>
            </ul>

            <div className="example-box">
                <h4>🌍 ELIZA: The First Chatbot</h4>
                <p>
                    Created by Joseph Weizenbaum at MIT, ELIZA used pattern matching to simulate
                    conversation. Surprisingly, many users formed emotional attachments to it,
                    believing it truly understood them—a phenomenon still relevant with modern chatbots.
                </p>
            </div>

            <h2>The First AI Winter (1969-1979)</h2>

            <p>
                Initial optimism gave way to disappointment as researchers realized the difficulty
                of their goals:
            </p>

            <ul>
                <li>Machine translation proved far harder than anticipated</li>
                <li>Perceptrons (early neural networks) were shown to have fundamental limitations</li>
                <li>Scaling up from toy problems to real-world complexity was extremely difficult</li>
                <li>Government funding was cut significantly</li>
            </ul>

            <div className="warning-box">
                <h4>⚠️ The Lighthill Report (1973)</h4>
                <p>
                    Sir James Lighthill's report to the British government concluded that AI had
                    failed to achieve its ambitious objectives. This led to major funding cuts in
                    the UK and contributed to reduced interest worldwide.
                </p>
            </div>

            <h2>Expert Systems Era (1980-1987)</h2>

            <p>
                AI experienced a resurgence with <strong>expert systems</strong>—programs that
                captured human expertise in specific domains:
            </p>

            <ul>
                <li><strong>MYCIN:</strong> Diagnosed blood infections and recommended antibiotics</li>
                <li><strong>DENDRAL:</strong> Identified molecular structures from mass spectrometry data</li>
                <li><strong>R1/XCON:</strong> Configured computer systems for DEC, saving millions of dollars</li>
            </ul>

            <p>
                Companies invested heavily in AI, and the field grew rapidly. Japan announced
                the ambitious Fifth Generation Computer project.
            </p>

            <h2>The Second AI Winter (1987-1993)</h2>

            <p>
                The expert systems bubble burst as their limitations became apparent:
            </p>

            <ul>
                <li>Expert systems were brittle—they failed when encountering situations outside their narrow expertise</li>
                <li>Knowledge acquisition was expensive and time-consuming</li>
                <li>Maintenance costs were high</li>
                <li>Desktop computers became powerful enough for many tasks, reducing demand for specialized AI hardware</li>
            </ul>

            <h2>The Modern Era (1993-Present)</h2>

            <h3>Rise of Machine Learning (1990s-2000s)</h3>
            <p>
                AI shifted from knowledge-based systems to learning-based approaches:
            </p>
            <ul>
                <li>Statistical methods became dominant</li>
                <li>Support Vector Machines and other learning algorithms matured</li>
                <li>Big data and improved computing power enabled new possibilities</li>
            </ul>

            <h3>Deep Learning Revolution (2010s)</h3>
            <p>
                Deep neural networks achieved breakthrough results:
            </p>
            <ul>
                <li><strong>2012:</strong> AlexNet won ImageNet competition, triggering deep learning boom</li>
                <li><strong>2014:</strong> Generative Adversarial Networks (GANs) introduced</li>
                <li><strong>2016:</strong> AlphaGo defeated world Go champion Lee Sedol</li>
                <li><strong>2017:</strong> Transformer architecture revolutionized NLP</li>
            </ul>

            <h3>The Generative AI Era (2020s)</h3>
            <ul>
                <li><strong>2020:</strong> GPT-3 demonstrated remarkable language capabilities</li>
                <li><strong>2022:</strong> ChatGPT brought conversational AI to mainstream</li>
                <li><strong>2023:</strong> GPT-4 showed multimodal understanding</li>
                <li><strong>2024:</strong> AI agents and autonomous systems advancing rapidly</li>
            </ul>

            <div className="key-points">
                <h3>📝 Key Takeaways</h3>
                <ul>
                    <li>AI as a field was formally born at the 1956 Dartmouth Conference</li>
                    <li>The field has experienced cycles of enthusiasm and disappointment ("AI winters")</li>
                    <li>Expert systems dominated the 1980s but proved too brittle for general use</li>
                    <li>Machine learning, especially deep learning, enabled the modern AI renaissance</li>
                    <li>Each era built upon previous work—even "failures" contributed to progress</li>
                </ul>
            </div>

            <div className="content-image-container">
                <div className="image-placeholder">
                    <p className="image-placeholder-text">
                        📷 <strong>Image Suggestion:</strong> ai-timeline.png<br />
                        A horizontal timeline showing major AI milestones from 1943 to 2024
                    </p>
                </div>
            </div>
        </div>
    ),

    // AI Past, Present, and Future
    pastPresentFuture: (
        <div>
            <h1>AI - Past, Present, and Future</h1>

            <p>
                Where has AI been, where is it now, and where is it going? This section examines
                the evolution of AI capabilities and explores what the future might hold.
            </p>

            <h2>The Past: Early AI Achievements</h2>

            <p>
                Early AI focused on symbolic reasoning and game playing:
            </p>

            <div className="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Era</th>
                            <th>Characteristic</th>
                            <th>Example Systems</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1950s-1960s</td>
                            <td>Symbolic AI, Logic-based</td>
                            <td>Logic Theorist, GPS</td>
                        </tr>
                        <tr>
                            <td>1970s-1980s</td>
                            <td>Expert Systems, Knowledge-based</td>
                            <td>MYCIN, DENDRAL</td>
                        </tr>
                        <tr>
                            <td>1990s-2000s</td>
                            <td>Statistical ML, Probabilistic</td>
                            <td>SVM, HMM, Bayesian Networks</td>
                        </tr>
                        <tr>
                            <td>2010s</td>
                            <td>Deep Learning, Neural Networks</td>
                            <td>AlexNet, AlphaGo</td>
                        </tr>
                        <tr>
                            <td>2020s</td>
                            <td>Large Models, Generative AI</td>
                            <td>GPT-4, Gemini, Claude</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>The Present: Current AI Capabilities</h2>

            <h3>What AI Can Do Today</h3>

            <div className="definition-list">
                <div className="definition-item">
                    <dt>Natural Language Processing</dt>
                    <dd>
                        AI can understand, generate, and translate human language with impressive
                        accuracy. Applications include chatbots, translation services, content
                        generation, and sentiment analysis.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Computer Vision</dt>
                    <dd>
                        AI can recognize objects, faces, scenes, and actions in images and videos.
                        Used in autonomous vehicles, medical imaging, security systems, and quality control.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Speech Recognition & Synthesis</dt>
                    <dd>
                        AI can transcribe speech to text and generate natural-sounding speech.
                        Powers virtual assistants, dictation software, and accessibility tools.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Game Playing</dt>
                    <dd>
                        AI has surpassed human champions in chess, Go, poker, StarCraft, and many
                        other games, demonstrating strategic reasoning and learning capabilities.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Scientific Discovery</dt>
                    <dd>
                        AI is accelerating research in drug discovery, protein folding (AlphaFold),
                        materials science, and climate modeling.
                    </dd>
                </div>
            </div>

            <div className="example-box">
                <h4>🌍 Real-World AI Applications Today</h4>
                <ul>
                    <li><strong>Healthcare:</strong> AI assists in diagnosing diseases, analyzing medical images, and drug discovery</li>
                    <li><strong>Finance:</strong> Fraud detection, algorithmic trading, credit scoring</li>
                    <li><strong>Transportation:</strong> Navigation, traffic prediction, autonomous vehicles</li>
                    <li><strong>Entertainment:</strong> Content recommendation, generation, and game AI</li>
                    <li><strong>Education:</strong> Personalized learning, automated grading, tutoring systems</li>
                </ul>
            </div>

            <h3>Current Limitations</h3>

            <div className="warning-box">
                <h4>⚠️ What AI Cannot Do Well (Yet)</h4>
                <ul>
                    <li><strong>Common Sense Reasoning:</strong> Understanding basic facts about the physical and social world</li>
                    <li><strong>Causal Understanding:</strong> Distinguishing correlation from causation</li>
                    <li><strong>Transfer Learning:</strong> Applying knowledge from one domain to completely different domains</li>
                    <li><strong>Physical World Interaction:</strong> Robust manipulation and navigation in unstructured environments</li>
                    <li><strong>True Understanding:</strong> Moving beyond pattern matching to genuine comprehension</li>
                </ul>
            </div>

            <h2>The Future: What's Next for AI?</h2>

            <h3>Short-term (1-5 years)</h3>
            <ul>
                <li>More capable and efficient large language models</li>
                <li>Improved multimodal AI (combining text, images, video, audio)</li>
                <li>Better AI agents that can take actions in the real world</li>
                <li>Wider deployment of AI in healthcare, education, and science</li>
                <li>Enhanced AI safety and alignment techniques</li>
            </ul>

            <h3>Medium-term (5-15 years)</h3>
            <ul>
                <li>More autonomous vehicles and robotics</li>
                <li>AI-assisted scientific breakthroughs</li>
                <li>Personalized education and healthcare at scale</li>
                <li>Advanced human-AI collaboration tools</li>
                <li>Potential progress toward more general AI capabilities</li>
            </ul>

            <h3>Long-term Possibilities</h3>
            <ul>
                <li><strong>Artificial General Intelligence (AGI):</strong> Systems that match or exceed human-level intelligence across all domains</li>
                <li><strong>Brain-Computer Interfaces:</strong> Direct neural connections to AI systems</li>
                <li><strong>Artificial Consciousness:</strong> Machines with subjective experiences (highly speculative)</li>
            </ul>

            <h2>Ethical Considerations</h2>

            <p>
                As AI becomes more powerful, we must address important ethical questions:
            </p>

            <div className="key-points">
                <h3>🤔 Key Ethical Questions</h3>
                <ul>
                    <li><strong>Bias and Fairness:</strong> How do we ensure AI systems don't perpetuate or amplify human biases?</li>
                    <li><strong>Privacy:</strong> How do we protect personal data used to train AI systems?</li>
                    <li><strong>Job Displacement:</strong> How do we prepare for AI's impact on employment?</li>
                    <li><strong>Accountability:</strong> Who is responsible when AI systems cause harm?</li>
                    <li><strong>Safety:</strong> How do we ensure AI systems behave as intended?</li>
                    <li><strong>Existential Risk:</strong> How do we manage potential risks from very advanced AI?</li>
                </ul>
            </div>

            <div className="note-box">
                <h4>💡 The Importance of AI Ethics</h4>
                <p>
                    As future AI practitioners, understanding ethical implications is crucial. You will
                    be building systems that affect millions of lives. Consider not just "can we build
                    this?" but also "should we build this?" and "how do we build it responsibly?"
                </p>
            </div>

            <h2>Career Opportunities in AI</h2>

            <p>
                The AI field offers diverse career paths:
            </p>

            <ul>
                <li><strong>Machine Learning Engineer:</strong> Build and deploy ML systems</li>
                <li><strong>Data Scientist:</strong> Extract insights from data using AI/ML</li>
                <li><strong>Research Scientist:</strong> Push the boundaries of AI capabilities</li>
                <li><strong>AI Product Manager:</strong> Guide AI product development</li>
                <li><strong>AI Ethics Specialist:</strong> Ensure responsible AI development</li>
                <li><strong>Robotics Engineer:</strong> Build intelligent physical systems</li>
                <li><strong>NLP Engineer:</strong> Specialize in language understanding and generation</li>
            </ul>

            <div className="key-points">
                <h3>📝 Key Takeaways</h3>
                <ul>
                    <li>AI has evolved from rule-based systems to learning-based systems</li>
                    <li>Current AI excels at specific tasks but lacks general intelligence</li>
                    <li>AI is transforming industries from healthcare to entertainment</li>
                    <li>Important limitations remain in common sense reasoning and true understanding</li>
                    <li>Ethical considerations are crucial as AI becomes more powerful</li>
                    <li>The field offers exciting career opportunities across many specializations</li>
                </ul>
            </div>

            <div className="content-image-container">
                <div className="image-placeholder">
                    <p className="image-placeholder-text">
                        📷 <strong>Image Suggestion:</strong> ai-applications-collage.png<br />
                        A collage showing various AI applications: autonomous cars, medical imaging, chatbots, robots
                    </p>
                </div>
            </div>
        </div>
    )
}
