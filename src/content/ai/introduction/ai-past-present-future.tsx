// src/content/ai/introduction/ai-past-present-future.tsx
import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, CodeBlock, ImagePlaceholder } from '@/components/ContentDisplay';

export default function AIPastPresentFuture() {
    return (
        <div>
            <p>
                Artificial Intelligence has traveled an incredible journey — from the dreams of ancient
                philosophers to today's AI assistants that millions use daily. In this topic, we'll take
                a comprehensive look at AI's evolution, understand where we are today, and explore the
                possibilities and challenges that lie ahead. This is not just history — it's about
                understanding the trajectory that will shape our future.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "How AI evolved from simple rule-based systems to modern deep learning",
                    "Current state-of-the-art AI capabilities and limitations",
                    "Emerging trends in AI research and development",
                    "Potential future developments: AGI, consciousness, and beyond",
                    "Ethical considerations and societal impact of AI"
                ]}
            />

            <h2 id="the-past">AI: The Past</h2>

            <p>
                The history of AI can be understood through distinct phases, each with its own paradigms
                and breakthroughs.
            </p>

            <h3>Era 1: Symbolic AI (1956-1990s)</h3>
            <p>
                The first era of AI was dominated by <strong>symbolic reasoning</strong> — the idea that
                intelligence could be achieved by manipulating symbols according to logical rules.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Approach</th>
                        <th>Philosophy</th>
                        <th>Examples</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Logic-based AI</strong></td>
                        <td>Intelligence = logical reasoning</td>
                        <td>Theorem provers, Prolog</td>
                    </tr>
                    <tr>
                        <td><strong>Expert Systems</strong></td>
                        <td>Encode human expertise as rules</td>
                        <td>MYCIN, R1/XCON</td>
                    </tr>
                    <tr>
                        <td><strong>Knowledge Representation</strong></td>
                        <td>Structure knowledge for reasoning</td>
                        <td>Semantic networks, frames</td>
                    </tr>
                </tbody>
            </table>

            <ExampleBox title="Example: Symbolic Rule in an Expert System">
                <CodeBlock
                    language="prolog"
                    title="medical_diagnosis.pl"
                    code={`% Symbolic AI: Rules for medical diagnosis
% This is how expert systems worked in the 1980s

% Rule 1: If patient has fever and cough, might have flu
diagnosis(flu) :- 
    symptom(fever), 
    symptom(cough),
    symptom(fatigue).

% Rule 2: If patient has fever and rash, might have measles  
diagnosis(measles) :- 
    symptom(fever), 
    symptom(rash),
    symptom(red_eyes).

% Facts about a patient
symptom(fever).
symptom(cough).
symptom(fatigue).

% Query: What's the diagnosis?
% ?- diagnosis(X).
% X = flu`}
                />
                <p>
                    <strong>Limitation:</strong> All rules had to be manually coded. If there were 1000
                    diseases with 10,000 symptoms, the system became impossible to maintain!
                </p>
            </ExampleBox>

            <h3>Era 2: Statistical/Machine Learning AI (1990s-2010s)</h3>
            <p>
                The focus shifted from hand-coded rules to <strong>learning from data</strong>:
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Approach</th>
                        <th>Philosophy</th>
                        <th>Examples</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Statistical ML</strong></td>
                        <td>Learn patterns from data</td>
                        <td>Decision trees, SVMs, Naive Bayes</td>
                    </tr>
                    <tr>
                        <td><strong>Neural Networks</strong></td>
                        <td>Brain-inspired computation</td>
                        <td>Perceptrons, backpropagation</td>
                    </tr>
                    <tr>
                        <td><strong>Probabilistic Methods</strong></td>
                        <td>Handle uncertainty mathematically</td>
                        <td>Bayesian networks, HMMs</td>
                    </tr>
                </tbody>
            </table>

            <h3>Era 3: Deep Learning (2012-Present)</h3>
            <p>
                The current era is defined by <strong>deep neural networks</strong> with many layers
                that can learn hierarchical representations:
            </p>

            <ul>
                <li><strong>CNNs</strong> revolutionized computer vision (2012)</li>
                <li><strong>RNNs/LSTMs</strong> enabled sequence modeling for speech and text</li>
                <li><strong>Transformers</strong> (2017) revolutionized NLP with attention mechanisms</li>
                <li><strong>Large Language Models</strong> (2018-present) showed emergent capabilities</li>
            </ul>

            <ImagePlaceholder
                name="ai-evolution-diagram"
                description="Three-column diagram showing evolution from Symbolic AI to Statistical ML to Deep Learning"
                suggestedSize="900x450"
            />

            <h2 id="the-present">AI: The Present</h2>

            <p>
                Today, AI is everywhere — often invisible but powering countless applications we use daily.
                Let's examine the current state of the art.
            </p>

            <h3>Current AI Capabilities</h3>

            <table>
                <thead>
                    <tr>
                        <th>Domain</th>
                        <th>Capability</th>
                        <th>Examples</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Language</strong></td>
                        <td>Understanding, generation, translation, summarization</td>
                        <td>ChatGPT, Claude, Gemini, Google Translate</td>
                    </tr>
                    <tr>
                        <td><strong>Vision</strong></td>
                        <td>Object detection, image generation, video analysis</td>
                        <td>DALL-E, Midjourney, Tesla Autopilot</td>
                    </tr>
                    <tr>
                        <td><strong>Speech</strong></td>
                        <td>Recognition, synthesis, real-time translation</td>
                        <td>Siri, Alexa, Google Assistant</td>
                    </tr>
                    <tr>
                        <td><strong>Games</strong></td>
                        <td>Superhuman performance in complex games</td>
                        <td>AlphaGo, AlphaFold, OpenAI Five</td>
                    </tr>
                    <tr>
                        <td><strong>Science</strong></td>
                        <td>Protein folding, drug discovery, materials science</td>
                        <td>AlphaFold (solved 50-year problem)</td>
                    </tr>
                    <tr>
                        <td><strong>Code</strong></td>
                        <td>Code generation, debugging, explanation</td>
                        <td>GitHub Copilot, Cursor, Claude</td>
                    </tr>
                </tbody>
            </table>

            <ExampleBox title="Modern AI in Action: Language Model">
                <p>
                    Here's how you might interact with a modern LLM API:
                </p>
                <CodeBlock
                    language="python"
                    title="using_llm_api.py"
                    code={`# Example: Using a Language Model API (simplified)
import requests

def ask_ai(question):
    """
    Send a question to an AI language model and get a response.
    This is how ChatGPT-like applications work behind the scenes.
    """
    # API endpoint (example - not real)
    api_url = "https://api.example-ai.com/v1/chat"
    
    payload = {
        "model": "advanced-language-model",
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": question}
        ],
        "temperature": 0.7,  # Controls creativity
        "max_tokens": 500    # Maximum response length
    }
    
    # In reality, you'd send this request to the API
    # response = requests.post(api_url, json=payload)
    # return response.json()['choices'][0]['message']['content']
    
    return "This is how AI responds to your questions!"

# Usage
answer = ask_ai("Explain quantum computing in simple terms")
print(answer)

# The AI has learned from billions of text examples
# to generate relevant, coherent responses!`}
                />
            </ExampleBox>

            <h3>Current Limitations</h3>
            <p>
                Despite impressive capabilities, today's AI has significant limitations:
            </p>

            <ul>
                <li>
                    <strong>Hallucinations:</strong> AI can confidently generate false information
                </li>
                <li>
                    <strong>No True Understanding:</strong> AI processes patterns, not meaning
                </li>
                <li>
                    <strong>Limited Reasoning:</strong> Struggles with multi-step logical reasoning
                </li>
                <li>
                    <strong>Data Dependencies:</strong> Performance depends heavily on training data
                </li>
                <li>
                    <strong>Energy Consumption:</strong> Training large models uses enormous power
                </li>
                <li>
                    <strong>Bias:</strong> AI can perpetuate and amplify human biases
                </li>
            </ul>

            <InfoBox type="warning" title="AI Hallucinations">
                <p>
                    AI systems can generate plausible-sounding but completely false information. For example:
                </p>
                <ul>
                    <li>Citing research papers that don't exist</li>
                    <li>Making up historical events</li>
                    <li>Providing incorrect code that "looks right"</li>
                </ul>
                <p>
                    <strong>Always verify AI-generated information from reliable sources!</strong>
                </p>
            </InfoBox>

            <h3>AI Today By the Numbers (2024)</h3>

            <table>
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Global AI market size</td>
                        <td>~$200 billion</td>
                    </tr>
                    <tr>
                        <td>ChatGPT users</td>
                        <td>100+ million weekly</td>
                    </tr>
                    <tr>
                        <td>GPT-4 parameter count</td>
                        <td>~1.8 trillion</td>
                    </tr>
                    <tr>
                        <td>Training cost for large models</td>
                        <td>$10-100+ million</td>
                    </tr>
                    <tr>
                        <td>Countries with AI strategies</td>
                        <td>60+</td>
                    </tr>
                </tbody>
            </table>

            <ImagePlaceholder
                name="ai-applications-2024"
                description="Infographic showing current AI applications across industries: healthcare, finance, transportation, entertainment, education"
                suggestedSize="900x600"
            />

            <h2 id="the-future">AI: The Future</h2>

            <p>
                Predicting the future is difficult, but we can identify trends and possibilities based
                on current research directions.
            </p>

            <h3>Near-Term Future (2024-2030)</h3>

            <table>
                <thead>
                    <tr>
                        <th>Development</th>
                        <th>Timeline</th>
                        <th>Impact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Multimodal AI</strong></td>
                        <td>Now</td>
                        <td>AI that can process text, images, audio, and video together</td>
                    </tr>
                    <tr>
                        <td><strong>AI Agents</strong></td>
                        <td>2024-2026</td>
                        <td>AI that can autonomously complete complex tasks</td>
                    </tr>
                    <tr>
                        <td><strong>Personalized AI</strong></td>
                        <td>2024-2027</td>
                        <td>AI assistants tailored to individual users</td>
                    </tr>
                    <tr>
                        <td><strong>AI in Science</strong></td>
                        <td>Ongoing</td>
                        <td>Accelerating drug discovery, materials science, climate modeling</td>
                    </tr>
                    <tr>
                        <td><strong>Embodied AI</strong></td>
                        <td>2025-2030</td>
                        <td>Robots with advanced AI for real-world tasks</td>
                    </tr>
                </tbody>
            </table>

            <h3>Long-Term Possibilities</h3>

            <h4>1. Artificial General Intelligence (AGI)</h4>
            <p>
                AGI refers to AI that can perform any intellectual task that a human can. Unlike today's
                narrow AI, AGI would be able to:
            </p>
            <ul>
                <li>Transfer learning across domains seamlessly</li>
                <li>Reason about novel situations</li>
                <li>Possess common sense understanding</li>
                <li>Set and pursue its own goals</li>
            </ul>

            <InfoBox type="highlight" title="When Will AGI Arrive?">
                <p>Predictions vary wildly:</p>
                <ul>
                    <li><strong>Optimists:</strong> 2025-2035 (some AI researchers)</li>
                    <li><strong>Moderates:</strong> 2040-2060</li>
                    <li><strong>Pessimists:</strong> 2100+ or never</li>
                </ul>
                <p>
                    The truth is, we don't know. And the definition of AGI itself is debated!
                </p>
            </InfoBox>

            <h4>2. Artificial Superintelligence (ASI)</h4>
            <p>
                Hypothetical AI that would surpass human intelligence in every domain — creativity,
                wisdom, social skills, scientific reasoning, and more.
            </p>

            <h4>3. Brain-Computer Interfaces</h4>
            <p>
                Companies like Neuralink are working on direct brain-AI connections, potentially enabling:
            </p>
            <ul>
                <li>Direct thought-to-text communication</li>
                <li>Memory augmentation</li>
                <li>Treating neurological conditions</li>
                <li>Enhanced human-AI collaboration</li>
            </ul>

            <h4>4. Conscious AI?</h4>
            <p>
                The question of machine consciousness remains open. Would a sufficiently advanced AI
                be conscious? Would it have subjective experiences? This remains one of the deepest
                questions in AI and philosophy.
            </p>

            <ImagePlaceholder
                name="ai-future-timeline"
                description="Speculative timeline from 2024 to 2050+ showing potential AI milestones"
                suggestedSize="1000x500"
            />

            <h2 id="ethical-considerations">Ethical Considerations</h2>

            <p>
                As AI becomes more powerful, ethical considerations become crucial:
            </p>

            <h3>Key Ethical Challenges</h3>

            <table>
                <thead>
                    <tr>
                        <th>Challenge</th>
                        <th>Description</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Bias & Fairness</strong></td>
                        <td>AI can perpetuate and amplify human biases</td>
                        <td>Biased hiring algorithms, facial recognition errors for minorities</td>
                    </tr>
                    <tr>
                        <td><strong>Privacy</strong></td>
                        <td>AI enables unprecedented surveillance</td>
                        <td>Facial recognition, behavior prediction, data harvesting</td>
                    </tr>
                    <tr>
                        <td><strong>Job Displacement</strong></td>
                        <td>AI may automate many jobs</td>
                        <td>Customer service, data entry, potentially creative work</td>
                    </tr>
                    <tr>
                        <td><strong>Misinformation</strong></td>
                        <td>AI can generate convincing fake content</td>
                        <td>Deepfakes, fake news, bot-generated content</td>
                    </tr>
                    <tr>
                        <td><strong>Autonomy</strong></td>
                        <td>Should AI make decisions for humans?</td>
                        <td>Autonomous weapons, medical decisions, judicial systems</td>
                    </tr>
                    <tr>
                        <td><strong>Existential Risk</strong></td>
                        <td>Could superintelligent AI pose existential threats?</td>
                        <td>The "alignment problem" — ensuring AI goals match human values</td>
                    </tr>
                </tbody>
            </table>

            <InfoBox type="warning" title="The Alignment Problem">
                <p>
                    How do we ensure that advanced AI systems pursue goals that are beneficial to humanity?
                    This is called the <strong>alignment problem</strong> and is considered one of the
                    most important challenges in AI safety:
                </p>
                <ul>
                    <li>AI might achieve its goal in unexpected, harmful ways</li>
                    <li>It's hard to specify human values precisely</li>
                    <li>A superintelligent AI might be impossible to control</li>
                </ul>
            </InfoBox>

            <h3>AI Governance Efforts</h3>
            <ul>
                <li><strong>EU AI Act:</strong> First comprehensive AI regulation (2024)</li>
                <li><strong>AI Safety Institutes:</strong> Government bodies focusing on AI safety (UK, US)</li>
                <li><strong>Industry Self-Regulation:</strong> OpenAI, Anthropic, Google pledges</li>
                <li><strong>UNESCO AI Ethics Recommendation:</strong> Global framework</li>
            </ul>

            <h2 id="preparing-for-future">Preparing for the AI Future</h2>

            <p>
                As students, how can you prepare for an AI-driven future?
            </p>

            <h3>Skills to Develop</h3>
            <ul>
                <li>
                    <strong>Technical Skills:</strong> Programming, data science, understanding of ML/AI
                </li>
                <li>
                    <strong>Uniquely Human Skills:</strong> Creativity, empathy, complex communication,
                    ethical judgment
                </li>
                <li>
                    <strong>Adaptability:</strong> Ability to learn new skills as the landscape changes
                </li>
                <li>
                    <strong>Critical Thinking:</strong> Evaluating AI outputs, understanding limitations
                </li>
                <li>
                    <strong>AI Literacy:</strong> Understanding how AI works, its capabilities and limits
                </li>
            </ul>

            <InfoBox type="tip" title="Advice for Students">
                <p>
                    <strong>Learn to work WITH AI, not compete against it.</strong> AI is a tool that
                    amplifies human capabilities. Those who can effectively leverage AI while contributing
                    uniquely human skills will thrive.
                </p>
            </InfoBox>

            <h2 id="summary">Summary</h2>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "AI evolved from symbolic/rule-based systems to statistical ML to deep learning",
                    "Current AI excels at pattern recognition but lacks true understanding",
                    "Today's AI can generate text, images, code, and more, but has significant limitations",
                    "Near-term future includes multimodal AI, AI agents, and continued scientific breakthroughs",
                    "Long-term possibilities include AGI and ASI, though timelines are uncertain",
                    "Ethical considerations around bias, privacy, jobs, and existential risk are crucial",
                    "Preparing for the AI future requires both technical and uniquely human skills"
                ]}
            />

            <InfoBox type="tip" title="What's Next?">
                <p>
                    In the next topic, we'll dive into <strong>Intelligent Agents</strong> — the fundamental
                    concept in AI that models how AI systems perceive and act in their environments.
                </p>
            </InfoBox>
        </div>
    );
}
