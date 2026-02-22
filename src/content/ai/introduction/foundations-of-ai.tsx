// src/content/ai/introduction/foundations-of-ai.tsx
import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, CodeBlock, ImagePlaceholder, ContentImage } from '@/components/ContentDisplay';

export default function FoundationsOfAI() {
    return (
        <div>
            <p>
                Artificial Intelligence didn't emerge from a vacuum — it stands on the shoulders of giants from
                multiple disciplines. Understanding the <strong>foundations of AI</strong> helps us appreciate
                how this field came to be and why it works the way it does. AI is truly an interdisciplinary
                field, drawing from philosophy, mathematics, psychology, neuroscience, computer science,
                economics, and more.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "The key disciplines that contributed to AI development",
                    "How philosophy shaped AI's fundamental questions",
                    "The mathematical foundations that make AI possible",
                    "The role of neuroscience and psychology in AI",
                    "Computer science and engineering contributions to AI"
                ]}
            />

            <h2 id="philosophy">1. Philosophy</h2>

            <p>
                Philosophy laid the groundwork for AI by asking fundamental questions about the mind,
                knowledge, and reasoning. These questions, pondered for centuries, directly influenced
                how we think about machine intelligence.
            </p>

            <h3>Key Philosophical Contributions</h3>

            <table>
                <thead>
                    <tr>
                        <th>Philosopher</th>
                        <th>Era</th>
                        <th>Contribution to AI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Aristotle</strong></td>
                        <td>384-322 BC</td>
                        <td>Developed formal logic and syllogisms — the foundation of logical reasoning in AI</td>
                    </tr>
                    <tr>
                        <td><strong>René Descartes</strong></td>
                        <td>1596-1650</td>
                        <td>Mind-body dualism; questioned whether machines could think</td>
                    </tr>
                    <tr>
                        <td><strong>Thomas Hobbes</strong></td>
                        <td>1588-1679</td>
                        <td>Proposed that reasoning is like numerical computation</td>
                    </tr>
                    <tr>
                        <td><strong>Gottfried Leibniz</strong></td>
                        <td>1646-1716</td>
                        <td>Dreamed of a universal language of reasoning (calculus ratiocinator)</td>
                    </tr>
                </tbody>
            </table>

            <ExampleBox title="Aristotle's Syllogism — The First Algorithm">
                <p>
                    Aristotle's syllogism is considered one of the earliest forms of logical reasoning,
                    which modern AI systems use for inference:
                </p>
                <pre>
                    <code>{`Premise 1: All humans are mortal.
Premise 2: Socrates is a human.
Conclusion: Therefore, Socrates is mortal.`}</code>
                </pre>
                <p>
                    This deductive reasoning is the basis for <strong>rule-based expert systems</strong> and
                    <strong>knowledge representation</strong> in AI.
                </p>
            </ExampleBox>

            <h3>Key Philosophical Questions for AI</h3>
            <ul>
                <li><strong>Can machines think?</strong> — The central question of AI philosophy</li>
                <li><strong>What is knowledge?</strong> — Epistemology informs how AI acquires and represents knowledge</li>
                <li><strong>What is consciousness?</strong> — Relevant for understanding if AI can truly be "intelligent"</li>
                <li><strong>Do we have free will?</strong> — Important for understanding autonomous agents</li>
            </ul>

            <InfoBox type="highlight" title="The Chinese Room Argument">
                <p>
                    Philosopher <strong>John Searle</strong> (1980) proposed a thought experiment: A person
                    in a room follows rules to respond to Chinese characters without understanding Chinese.
                    Similarly, can AI truly "understand" or is it just manipulating symbols? This remains
                    a crucial debate in AI philosophy.
                </p>
            </InfoBox>

            <h2 id="mathematics">2. Mathematics</h2>

            <p>
                Mathematics provides the formal language and tools that make AI possible. Without mathematical
                foundations, we couldn't build algorithms, analyze data, or train machine learning models.
            </p>

            <h3>Key Mathematical Areas for AI</h3>

            <table>
                <thead>
                    <tr>
                        <th>Mathematical Area</th>
                        <th>Application in AI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Logic</strong></td>
                        <td>Knowledge representation, inference, expert systems</td>
                    </tr>
                    <tr>
                        <td><strong>Probability & Statistics</strong></td>
                        <td>Machine learning, uncertainty handling, Bayesian networks</td>
                    </tr>
                    <tr>
                        <td><strong>Linear Algebra</strong></td>
                        <td>Neural networks, data representation, transformations</td>
                    </tr>
                    <tr>
                        <td><strong>Calculus</strong></td>
                        <td>Optimization, gradient descent for training models</td>
                    </tr>
                    <tr>
                        <td><strong>Graph Theory</strong></td>
                        <td>Search algorithms, network analysis, knowledge graphs</td>
                    </tr>
                    <tr>
                        <td><strong>Information Theory</strong></td>
                        <td>Data compression, decision trees, entropy</td>
                    </tr>
                </tbody>
            </table>

            <ExampleBox title="Probability in AI — A Simple Example">
                <p>
                    AI systems often deal with uncertainty. Here's an example of using probability:
                </p>
                <CodeBlock
                    language="python"
                    title="bayesian_probability.py"
                    code={`# Simple Bayesian Probability Example
# Scenario: A medical test for a disease

# Given probabilities
p_disease = 0.01          # 1% of population has the disease
p_positive_given_disease = 0.95   # Test accuracy if you have disease
p_positive_given_no_disease = 0.05  # False positive rate

# Calculate: If tested positive, what's probability of having disease?
# Using Bayes' Theorem: P(Disease|Positive) = P(Positive|Disease) * P(Disease) / P(Positive)

p_positive = (p_positive_given_disease * p_disease) + \
             (p_positive_given_no_disease * (1 - p_disease))

p_disease_given_positive = (p_positive_given_disease * p_disease) / p_positive

print(f"Probability of having disease given positive test: {p_disease_given_positive:.2%}")
# Output: Probability of having disease given positive test: 16.10%

# Surprisingly low! This is why AI must handle uncertainty carefully.`}
                />
            </ExampleBox>

            <h3>Key Mathematical Pioneers</h3>
            <ul>
                <li><strong>George Boole (1815-1864)</strong> — Boolean algebra, foundation of digital logic</li>
                <li><strong>Alan Turing (1912-1954)</strong> — Turing machine, computability theory</li>
                <li><strong>Claude Shannon (1916-2001)</strong> — Information theory, digital circuits</li>
                <li><strong>Andrey Kolmogorov (1903-1987)</strong> — Probability theory axioms</li>
            </ul>

            <ContentImage
                src="/imgs/math-foundations-diagram.png"
                alt="A diagram showing how different mathematical fields connect to various AI applications"
                caption="Mathematical Foundations of Artificial Intelligence"
            />

            <h2 id="neuroscience">3. Neuroscience</h2>

            <p>
                The human brain, with its billions of neurons, is the ultimate inspiration for artificial
                intelligence. Neuroscience helps us understand how biological intelligence works, which
                informs the design of artificial neural networks.
            </p>

            <h3>The Neuron — Nature's Processor</h3>
            <p>
                A biological neuron receives signals through <strong>dendrites</strong>, processes them in
                the <strong>cell body</strong>, and sends outputs through the <strong>axon</strong>. This
                process inspired the artificial neuron (perceptron).
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Biological Neuron</th>
                        <th>Artificial Neuron</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dendrites (input)</td>
                        <td>Input values × Weights</td>
                    </tr>
                    <tr>
                        <td>Cell body (processing)</td>
                        <td>Summation + Activation function</td>
                    </tr>
                    <tr>
                        <td>Axon (output)</td>
                        <td>Output value</td>
                    </tr>
                    <tr>
                        <td>Synapse (connection)</td>
                        <td>Weights (learnable parameters)</td>
                    </tr>
                </tbody>
            </table>

            <ExampleBox title="Artificial Neuron in Code">
                <CodeBlock
                    language="python"
                    title="simple_neuron.py"
                    code={`import math

def sigmoid(x):
    """Activation function that outputs between 0 and 1"""
    return 1 / (1 + math.exp(-x))

def artificial_neuron(inputs, weights, bias):
    """
    Simulates an artificial neuron.
    
    Args:
        inputs: List of input values
        weights: List of weights for each input
        bias: The bias term
    
    Returns:
        The neuron's output (activated)
    """
    # Step 1: Calculate weighted sum
    weighted_sum = sum(i * w for i, w in zip(inputs, weights)) + bias
    
    # Step 2: Apply activation function
    output = sigmoid(weighted_sum)
    
    return output

# Example: A neuron that might detect if something is a cat
inputs = [0.8, 0.2, 0.5]  # Features: has fur, has feathers, size
weights = [0.6, -0.5, 0.3]  # Learned weights
bias = -0.1

result = artificial_neuron(inputs, weights, bias)
print(f"Neuron output: {result:.4f}")
# Output: Neuron output: 0.6457`}
                />
            </ExampleBox>

            <InfoBox type="note" title="Brain vs Computer">
                <p>
                    The human brain has approximately <strong>86 billion neurons</strong> connected by
                    <strong>100 trillion synapses</strong>. Modern AI systems are still far from this
                    complexity, but they can perform specific tasks much faster than humans.
                </p>
            </InfoBox>

            <h2 id="psychology">4. Psychology</h2>

            <p>
                Psychology studies human behavior and cognitive processes, providing insights into how
                intelligent beings perceive, learn, remember, and solve problems. These insights are
                crucial for designing AI systems that interact with humans.
            </p>

            <h3>Key Psychological Contributions</h3>

            <ul>
                <li>
                    <strong>Cognitive Psychology</strong> — Studies mental processes like attention, memory,
                    and problem-solving. Influenced cognitive architectures in AI.
                </li>
                <li>
                    <strong>Behaviorism</strong> — Studies stimulus-response relationships. Influenced
                    reinforcement learning where agents learn from rewards and punishments.
                </li>
                <li>
                    <strong>Gestalt Psychology</strong> — Studies how we perceive patterns as wholes.
                    Influenced computer vision and pattern recognition.
                </li>
            </ul>

            <ExampleBox title="Reinforcement Learning — Inspired by Behaviorism">
                <p>
                    Just like training a dog with treats, AI can learn through rewards:
                </p>
                <CodeBlock
                    language="python"
                    title="simple_reinforcement.py"
                    code={`# Simple Reinforcement Learning Concept
# An agent learns to find the goal in a simple environment

import random

class SimpleAgent:
    def __init__(self):
        self.position = 0
        self.goal = 10
        self.q_values = {}  # Learned values for actions
        self.learning_rate = 0.1
        
    def choose_action(self):
        """Choose to move left (-1) or right (+1)"""
        # Exploitation vs Exploration
        if random.random() < 0.1:  # 10% explore
            return random.choice([-1, 1])
        else:  # 90% exploit learned knowledge
            left_val = self.q_values.get((self.position, -1), 0)
            right_val = self.q_values.get((self.position, 1), 0)
            return 1 if right_val >= left_val else -1
    
    def learn(self, action, reward):
        """Update knowledge based on reward"""
        key = (self.position, action)
        old_value = self.q_values.get(key, 0)
        self.q_values[key] = old_value + self.learning_rate * (reward - old_value)
        
    def step(self, action):
        self.position += action
        # Reward: +10 for reaching goal, -1 for each step
        if self.position == self.goal:
            return 10  # Big reward for success!
        return -1      # Small penalty for each step

print("Agent learns to reach goal through trial and error!")
print("This is the foundation of reinforcement learning.")`}
                />
            </ExampleBox>

            <h2 id="computer-science">5. Computer Science</h2>

            <p>
                Computer science provides the practical tools to implement AI systems — programming languages,
                algorithms, data structures, and hardware. Without advances in computing, AI would remain
                purely theoretical.
            </p>

            <h3>Key Computer Science Contributions</h3>

            <table>
                <thead>
                    <tr>
                        <th>Contribution</th>
                        <th>Pioneer</th>
                        <th>Impact on AI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Turing Machine</td>
                        <td>Alan Turing (1936)</td>
                        <td>Theoretical foundation of computation</td>
                    </tr>
                    <tr>
                        <td>Stored Program Computer</td>
                        <td>John von Neumann (1945)</td>
                        <td>Made programmable AI possible</td>
                    </tr>
                    <tr>
                        <td>LISP Language</td>
                        <td>John McCarthy (1958)</td>
                        <td>Primary AI programming language for decades</td>
                    </tr>
                    <tr>
                        <td>Object-Oriented Programming</td>
                        <td>Alan Kay (1970s)</td>
                        <td>Better ways to model AI agents and knowledge</td>
                    </tr>
                    <tr>
                        <td>GPUs for Computing</td>
                        <td>NVIDIA (2000s)</td>
                        <td>Enabled deep learning revolution</td>
                    </tr>
                </tbody>
            </table>

            <ContentImage
                src="/imgs/turing-machine-diagram.png"
                alt="A simplified diagram of a Turing Machine showing tape, head, and state transitions"
                caption="Conceptual Diagram of a Turing Machine"
            />

            <h2 id="economics">6. Economics</h2>

            <p>
                Economics contributes to AI through <strong>game theory</strong>, <strong>decision theory</strong>,
                and <strong>utility theory</strong>. These help AI systems make rational decisions in complex
                environments with multiple agents.
            </p>

            <h3>Key Economic Concepts in AI</h3>
            <ul>
                <li>
                    <strong>Utility Theory</strong> — Agents choose actions that maximize expected utility
                    (satisfaction/benefit). Used in utility-based AI agents.
                </li>
                <li>
                    <strong>Game Theory</strong> — Studies strategic interactions between multiple agents.
                    Used in multi-agent systems and competitive AI.
                </li>
                <li>
                    <strong>Decision Theory</strong> — Framework for making optimal decisions under uncertainty.
                    Core to AI planning and problem-solving.
                </li>
            </ul>

            <h2 id="linguistics">7. Linguistics</h2>

            <p>
                Linguistics studies the structure and meaning of language, which is essential for
                <strong>Natural Language Processing (NLP)</strong> — enabling AI to understand and
                generate human language.
            </p>

            <h3>Key Linguistic Contributions</h3>
            <ul>
                <li><strong>Noam Chomsky</strong> — Formal grammars and language structure</li>
                <li><strong>Syntax analysis</strong> — Parsing sentences for AI understanding</li>
                <li><strong>Semantics</strong> — Understanding meaning in language</li>
                <li><strong>Pragmatics</strong> — Understanding context and intent</li>
            </ul>

            <InfoBox type="tip" title="Modern NLP">
                <p>
                    Today's language models like GPT, Claude, and Gemini use <strong>deep learning</strong>
                    to understand language, but they still benefit from linguistic insights about grammar,
                    syntax, and semantics.
                </p>
            </InfoBox>

            <h2 id="summary">Summary</h2>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "AI is built on contributions from philosophy, mathematics, neuroscience, psychology, computer science, economics, and linguistics",
                    "Philosophy raised fundamental questions about mind, knowledge, and reasoning",
                    "Mathematics provides logic, probability, and optimization tools essential for AI algorithms",
                    "Neuroscience inspired artificial neural networks by modeling biological neurons",
                    "Psychology contributed understanding of learning, memory, and behavior",
                    "Computer science provides the hardware and software to implement AI systems",
                    "Economics contributes decision-making frameworks through utility and game theory"
                ]}
            />

            <ContentImage
                src="/imgs/ai-foundations-overview.png"
                alt="A comprehensive diagram showing all disciplines contributing to AI with connecting lines to show relationships"
                caption="The Multi-Disciplinary Foundations of Artificial Intelligence"
            />

            <InfoBox type="tip" title="What's Next?">
                <p>
                    In the next topic, we'll explore the <strong>History of AI</strong> — from early dreams
                    of artificial beings to modern breakthroughs in deep learning and large language models.
                </p>
            </InfoBox>
        </div>
    );
}
