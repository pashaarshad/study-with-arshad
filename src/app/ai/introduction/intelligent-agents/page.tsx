'use client';

import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Intelligent Agents - Study with Arshad',
    description: 'Learn about Intelligent Agents in AI, including types of agents, environments, PEAS framework, and how agents make decisions.',
};

export default function IntelligentAgentsPage() {
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
                    sensors and act upon that environment through actuators. This is one of the most fundamental
                    concepts in AI—almost all AI systems can be viewed as agents!
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

                <p>
                    An agent is an entity that:
                </p>

                <ul>
                    <li><strong>Perceives</strong> its environment through <span className="highlight-term">sensors</span></li>
                    <li><strong>Decides</strong> what action to take</li>
                    <li><strong>Acts</strong> upon the environment through <span className="highlight-term">actuators</span></li>
                </ul>

                <div className="agent-diagram">
                    <div className="diagram-box environment">
                        <span>🌍 Environment</span>
                    </div>
                    <div className="diagram-arrows">
                        <div className="arrow-down">
                            <span>Percepts</span>
                            <span className="arrow">↓</span>
                        </div>
                        <div className="arrow-up">
                            <span>Actions</span>
                            <span className="arrow">↑</span>
                        </div>
                    </div>
                    <div className="diagram-box agent">
                        <span>🤖 Agent</span>
                        <div className="agent-parts">
                            <span>👁️ Sensors</span>
                            <span>🧠 Decision</span>
                            <span>🦾 Actuators</span>
                        </div>
                    </div>
                </div>

                <h3>Examples of Agents</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Agent</th>
                            <th>Sensors</th>
                            <th>Actuators</th>
                            <th>Environment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Human</strong></td>
                            <td>Eyes, ears, skin, nose, tongue</td>
                            <td>Hands, legs, mouth, body</td>
                            <td>Physical world</td>
                        </tr>
                        <tr>
                            <td><strong>Robot</strong></td>
                            <td>Cameras, infrared sensors, GPS</td>
                            <td>Motors, wheels, grippers</td>
                            <td>Factory floor, roads</td>
                        </tr>
                        <tr>
                            <td><strong>Software Agent</strong></td>
                            <td>Keyboard input, file contents</td>
                            <td>Screen output, file writes</td>
                            <td>Computer system</td>
                        </tr>
                        <tr>
                            <td><strong>Thermostat</strong></td>
                            <td>Temperature sensor</td>
                            <td>Heater switch</td>
                            <td>Room temperature</td>
                        </tr>
                        <tr>
                            <td><strong>Self-driving Car</strong></td>
                            <td>Cameras, LIDAR, radar, GPS</td>
                            <td>Steering, brakes, accelerator</td>
                            <td>Roads, traffic</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Rational Agent */}
            <section>
                <h2>🎯 Rational Agent</h2>

                <p>
                    A <strong>Rational Agent</strong> is one that does the &ldquo;right thing.&rdquo; But what is the right thing?
                </p>

                <div className="definition-box">
                    <h4>Definition of Rational Agent</h4>
                    <p>
                        For each possible sequence of percepts, a rational agent should select an action that is
                        expected to <strong>maximize its performance measure</strong>, given:
                    </p>
                    <ul>
                        <li>The evidence provided by the percept sequence</li>
                        <li>Whatever built-in knowledge the agent has</li>
                    </ul>
                </div>

                <div className="example-box">
                    <h4>💡 Real-World Example: Chess AI</h4>
                    <p>
                        <strong>Performance measure:</strong> Winning the game<br />
                        <strong>Percepts:</strong> Current board position<br />
                        <strong>Actions:</strong> Legal chess moves<br />
                        <strong>Rational behavior:</strong> Choose moves that maximize probability of winning
                    </p>
                </div>

                <div className="note note-info">
                    <strong>💡 Important:</strong> Rationality is NOT omniscience (knowing everything).
                    A rational agent makes the best decision based on what it knows, even if that decision
                    turns out to be wrong due to unknown factors.
                </div>
            </section>

            {/* PEAS Framework */}
            <section>
                <h2>📋 PEAS Framework</h2>

                <p>
                    When designing an agent, we need to specify its <strong>PEAS</strong>:
                </p>

                <div className="peas-grid">
                    <div className="peas-card">
                        <div className="peas-letter">P</div>
                        <h4>Performance Measure</h4>
                        <p>How do we evaluate the agent&apos;s success?</p>
                    </div>
                    <div className="peas-card">
                        <div className="peas-letter">E</div>
                        <h4>Environment</h4>
                        <p>What is the world the agent operates in?</p>
                    </div>
                    <div className="peas-card">
                        <div className="peas-letter">A</div>
                        <h4>Actuators</h4>
                        <p>How can the agent affect the environment?</p>
                    </div>
                    <div className="peas-card">
                        <div className="peas-letter">S</div>
                        <h4>Sensors</h4>
                        <p>How does the agent perceive the environment?</p>
                    </div>
                </div>

                <h3>PEAS Examples</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Agent</th>
                            <th>Performance</th>
                            <th>Environment</th>
                            <th>Actuators</th>
                            <th>Sensors</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Taxi Driver</strong></td>
                            <td>Safe, fast, legal, comfortable ride, maximize profits</td>
                            <td>Roads, traffic, pedestrians, customers</td>
                            <td>Steering, accelerator, brake, signal, horn</td>
                            <td>Cameras, GPS, speedometer, engine sensors</td>
                        </tr>
                        <tr>
                            <td><strong>Medical Diagnosis</strong></td>
                            <td>Healthy patient, minimize costs, minimize tests</td>
                            <td>Patient, hospital, staff</td>
                            <td>Display questions, tests, diagnoses, treatments</td>
                            <td>Keyboard entry of symptoms, test results</td>
                        </tr>
                        <tr>
                            <td><strong>Chess AI</strong></td>
                            <td>Win the game</td>
                            <td>Chess board, opponent</td>
                            <td>Move pieces</td>
                            <td>Board state</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Environment Properties */}
            <section>
                <h2>🌍 Properties of Task Environments</h2>

                <p>
                    Environments differ in many ways. Understanding these properties helps us design better agents:
                </p>

                <div className="properties-list">
                    <div className="property-item">
                        <h4>1️⃣ Fully Observable vs. Partially Observable</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td><strong>Fully Observable</strong></td>
                                    <td>Agent can see the complete state of the environment</td>
                                    <td>Chess (can see all pieces)</td>
                                </tr>
                                <tr>
                                    <td><strong>Partially Observable</strong></td>
                                    <td>Agent can only see part of the environment</td>
                                    <td>Poker (can&apos;t see other players&apos; cards)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="property-item">
                        <h4>2️⃣ Deterministic vs. Stochastic</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td><strong>Deterministic</strong></td>
                                    <td>Next state is completely determined by current state and action</td>
                                    <td>Chess (no randomness)</td>
                                </tr>
                                <tr>
                                    <td><strong>Stochastic</strong></td>
                                    <td>Some randomness/uncertainty in outcomes</td>
                                    <td>Backgammon (dice rolls)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="property-item">
                        <h4>3️⃣ Episodic vs. Sequential</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td><strong>Episodic</strong></td>
                                    <td>Actions in one episode don&apos;t affect future episodes</td>
                                    <td>Image classification (each image is independent)</td>
                                </tr>
                                <tr>
                                    <td><strong>Sequential</strong></td>
                                    <td>Current actions affect future decisions</td>
                                    <td>Chess (moves build on each other)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="property-item">
                        <h4>4️⃣ Static vs. Dynamic</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td><strong>Static</strong></td>
                                    <td>Environment doesn&apos;t change while agent is thinking</td>
                                    <td>Crossword puzzle</td>
                                </tr>
                                <tr>
                                    <td><strong>Dynamic</strong></td>
                                    <td>Environment changes while agent is thinking</td>
                                    <td>Self-driving car (traffic moves)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="property-item">
                        <h4>5️⃣ Discrete vs. Continuous</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td><strong>Discrete</strong></td>
                                    <td>Finite number of states/actions/percepts</td>
                                    <td>Chess (finite board positions)</td>
                                </tr>
                                <tr>
                                    <td><strong>Continuous</strong></td>
                                    <td>Infinite possible states/actions</td>
                                    <td>Robot navigation (infinite positions)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="property-item">
                        <h4>6️⃣ Single Agent vs. Multi-Agent</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td><strong>Single Agent</strong></td>
                                    <td>Only one agent in the environment</td>
                                    <td>Solving a puzzle alone</td>
                                </tr>
                                <tr>
                                    <td><strong>Multi-Agent</strong></td>
                                    <td>Multiple agents interacting</td>
                                    <td>Chess (two players), traffic</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Types of Agents */}
            <section>
                <h2>🔷 Types of Agents</h2>

                <p>
                    Agents can be classified based on how they make decisions. Here are the main types,
                    from simplest to most complex:
                </p>

                <div className="agent-types">
                    {/* Simple Reflex Agent */}
                    <div className="agent-type-card">
                        <div className="agent-type-header">
                            <span className="agent-type-number">1</span>
                            <h3>Simple Reflex Agent</h3>
                        </div>
                        <div className="agent-type-content">
                            <p>
                                Acts ONLY based on the current percept. Uses <strong>condition-action rules</strong>
                                (if-then rules). No memory of past.
                            </p>
                            <pre><code>{`# Simple Reflex Agent Example
def simple_reflex_agent(percept):
    """
    Makes decisions based only on current percept.
    No memory of past!
    """
    if percept == "dirty":
        return "clean"
    elif percept == "clean":
        return "move"
    else:
        return "do_nothing"

# Example: Vacuum Cleaner
current_state = "dirty"
action = simple_reflex_agent(current_state)
print(f"Action: {action}")  # Output: clean`}</code></pre>
                            <div className="pros-cons">
                                <div className="pros">
                                    <strong>✅ Pros:</strong> Simple, fast, easy to implement
                                </div>
                                <div className="cons">
                                    <strong>❌ Cons:</strong> Can&apos;t handle partial observability, no learning
                                </div>
                            </div>
                            <p><strong>Example:</strong> Basic thermostat (if cold → heat on, if hot → heat off)</p>
                        </div>
                    </div>

                    {/* Model-Based Reflex Agent */}
                    <div className="agent-type-card">
                        <div className="agent-type-header">
                            <span className="agent-type-number">2</span>
                            <h3>Model-Based Reflex Agent</h3>
                        </div>
                        <div className="agent-type-content">
                            <p>
                                Maintains an <strong>internal state</strong> (model of the world) based on
                                percept history. Can handle partial observability.
                            </p>
                            <pre><code>{`# Model-Based Reflex Agent Example
class ModelBasedAgent:
    def __init__(self):
        self.state = {}  # Internal model of the world
        self.model = {}  # How the world evolves
    
    def update_state(self, percept):
        """Update internal state based on percept"""
        # Remember what we've seen
        self.state['last_percept'] = percept
        self.state['history'] = self.state.get('history', [])
        self.state['history'].append(percept)
    
    def choose_action(self):
        """Choose action based on internal state"""
        if self.state.get('last_percept') == "obstacle_detected":
            return "turn_right"
        elif len(self.state.get('history', [])) > 5:
            return "go_back"  # Remembers it's been exploring
        return "move_forward"

agent = ModelBasedAgent()
agent.update_state("obstacle_detected")
print(agent.choose_action())  # Output: turn_right`}</code></pre>
                            <div className="pros-cons">
                                <div className="pros">
                                    <strong>✅ Pros:</strong> Can handle partial observability, has memory
                                </div>
                                <div className="cons">
                                    <strong>❌ Cons:</strong> Still reactive, no goals or planning
                                </div>
                            </div>
                            <p><strong>Example:</strong> A robot that remembers where obstacles are</p>
                        </div>
                    </div>

                    {/* Goal-Based Agent */}
                    <div className="agent-type-card">
                        <div className="agent-type-header">
                            <span className="agent-type-number">3</span>
                            <h3>Goal-Based Agent</h3>
                        </div>
                        <div className="agent-type-content">
                            <p>
                                Has <strong>goals</strong> it wants to achieve. Can <strong>plan</strong> sequences
                                of actions to reach goals. More flexible than reflex agents.
                            </p>
                            <pre><code>{`# Goal-Based Agent Example
class GoalBasedAgent:
    def __init__(self, goal):
        self.goal = goal
        self.current_state = None
    
    def set_state(self, state):
        self.current_state = state
    
    def plan_actions(self):
        """
        Plan a sequence of actions to reach the goal.
        This is a simplified planning example.
        """
        if self.goal == "reach_destination":
            if self.current_state == "at_home":
                return ["start_car", "drive", "park"]
            elif self.current_state == "driving":
                return ["continue", "park"]
        return ["explore"]
    
    def is_goal_achieved(self):
        return self.current_state == "at_destination"

agent = GoalBasedAgent("reach_destination")
agent.set_state("at_home")
plan = agent.plan_actions()
print(f"Plan: {plan}")  
# Output: ['start_car', 'drive', 'park']`}</code></pre>
                            <div className="pros-cons">
                                <div className="pros">
                                    <strong>✅ Pros:</strong> Can plan, flexible, handles complex tasks
                                </div>
                                <div className="cons">
                                    <strong>❌ Cons:</strong> Planning can be slow, multiple goals = conflict
                                </div>
                            </div>
                            <p><strong>Example:</strong> GPS navigation (goal: reach destination)</p>
                        </div>
                    </div>

                    {/* Utility-Based Agent */}
                    <div className="agent-type-card">
                        <div className="agent-type-header">
                            <span className="agent-type-number">4</span>
                            <h3>Utility-Based Agent</h3>
                        </div>
                        <div className="agent-type-content">
                            <p>
                                Uses a <strong>utility function</strong> to measure how &ldquo;happy&rdquo; it would
                                be in different states. Chooses actions that maximize expected utility. Best for
                                balancing multiple goals!
                            </p>
                            <pre><code>{`# Utility-Based Agent Example
class UtilityBasedAgent:
    def __init__(self):
        pass
    
    def utility(self, state):
        """
        Measure how 'good' a state is.
        Higher utility = better state.
        """
        # Example: Route planning
        # Consider: time, fuel, safety, comfort
        utility_score = 0
        utility_score += (100 - state['time_minutes'])  # Less time = better
        utility_score += (50 - state['fuel_cost'])      # Less fuel = better
        utility_score += state['safety_score'] * 10     # Safety matters a lot
        utility_score += state['comfort_score'] * 5     # Comfort is nice
        return utility_score
    
    def choose_best_action(self, possible_outcomes):
        """Choose action with highest utility"""
        best_action = None
        best_utility = float('-inf')
        
        for action, state in possible_outcomes.items():
            u = self.utility(state)
            if u > best_utility:
                best_utility = u
                best_action = action
        
        return best_action

agent = UtilityBasedAgent()
routes = {
    "highway": {"time_minutes": 30, "fuel_cost": 20, "safety_score": 8, "comfort_score": 7},
    "scenic": {"time_minutes": 60, "fuel_cost": 15, "safety_score": 9, "comfort_score": 10},
    "shortcut": {"time_minutes": 25, "fuel_cost": 25, "safety_score": 5, "comfort_score": 3}
}
best = agent.choose_best_action(routes)
print(f"Best route: {best}")  # Considers all factors!`}</code></pre>
                            <div className="pros-cons">
                                <div className="pros">
                                    <strong>✅ Pros:</strong> Handles trade-offs, optimal decisions, flexible goals
                                </div>
                                <div className="cons">
                                    <strong>❌ Cons:</strong> Complex to design utility function, computationally expensive
                                </div>
                            </div>
                            <p><strong>Example:</strong> Self-driving car (balance speed, safety, comfort, fuel)</p>
                        </div>
                    </div>

                    {/* Learning Agent */}
                    <div className="agent-type-card featured">
                        <div className="agent-type-header">
                            <span className="agent-type-number">5</span>
                            <h3>Learning Agent</h3>
                        </div>
                        <div className="agent-type-content">
                            <p>
                                Can <strong>improve its performance over time</strong> by learning from experience.
                                This is the most advanced type of agent and the foundation of modern AI!
                            </p>

                            <div className="learning-components">
                                <div className="component">
                                    <h5>🎓 Learning Element</h5>
                                    <p>Improves the agent based on feedback</p>
                                </div>
                                <div className="component">
                                    <h5>⚙️ Performance Element</h5>
                                    <p>Selects actions (the &ldquo;brain&rdquo;)</p>
                                </div>
                                <div className="component">
                                    <h5>📊 Critic</h5>
                                    <p>Evaluates how well the agent is doing</p>
                                </div>
                                <div className="component">
                                    <h5>🔍 Problem Generator</h5>
                                    <p>Suggests exploratory actions for learning</p>
                                </div>
                            </div>

                            <pre><code>{`# Learning Agent Example (Simplified Q-Learning)
class LearningAgent:
    def __init__(self):
        self.q_table = {}  # Learned values
        self.learning_rate = 0.1
        self.discount = 0.9
    
    def get_q_value(self, state, action):
        return self.q_table.get((state, action), 0.0)
    
    def learn(self, state, action, reward, next_state):
        """
        Learn from experience!
        Update Q-value based on reward received.
        """
        old_value = self.get_q_value(state, action)
        
        # Find best future value
        future_actions = ['up', 'down', 'left', 'right']
        future_value = max([self.get_q_value(next_state, a) 
                          for a in future_actions])
        
        # Update Q-value
        new_value = old_value + self.learning_rate * (
            reward + self.discount * future_value - old_value
        )
        self.q_table[(state, action)] = new_value
        
        print(f"Learned: state={state}, action={action}, new_value={new_value:.2f}")

# The agent learns through trial and error!
agent = LearningAgent()
agent.learn("position_1", "right", 10, "position_2")
agent.learn("position_2", "right", -5, "position_3")  # Negative reward = bad`}</code></pre>
                            <div className="pros-cons">
                                <div className="pros">
                                    <strong>✅ Pros:</strong> Improves over time, adapts to new situations, no need to program everything
                                </div>
                                <div className="cons">
                                    <strong>❌ Cons:</strong> Needs training data/time, may learn wrong things, harder to debug
                                </div>
                            </div>
                            <p><strong>Example:</strong> AlphaGo (learned to play Go by playing millions of games)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Agent Types Comparison */}
            <section>
                <h2>📊 Comparison of Agent Types</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Agent Type</th>
                            <th>Memory</th>
                            <th>Goals</th>
                            <th>Learning</th>
                            <th>Complexity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Simple Reflex</td>
                            <td>❌ No</td>
                            <td>❌ No</td>
                            <td>❌ No</td>
                            <td>⭐</td>
                        </tr>
                        <tr>
                            <td>Model-Based</td>
                            <td>✅ Yes</td>
                            <td>❌ No</td>
                            <td>❌ No</td>
                            <td>⭐⭐</td>
                        </tr>
                        <tr>
                            <td>Goal-Based</td>
                            <td>✅ Yes</td>
                            <td>✅ Yes</td>
                            <td>❌ No</td>
                            <td>⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td>Utility-Based</td>
                            <td>✅ Yes</td>
                            <td>✅ Yes</td>
                            <td>❌ No</td>
                            <td>⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td>Learning</td>
                            <td>✅ Yes</td>
                            <td>✅ Yes</td>
                            <td>✅ Yes</td>
                            <td>⭐⭐⭐⭐⭐</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Image Placeholders */}
            <section>
                <h2>📊 Visual Summary</h2>

                <div className="image-placeholder">
                    <div className="placeholder-icon">🖼️</div>
                    <span><strong>Image: agent-environment-diagram.png</strong></span>
                    <span>A diagram showing the agent-environment interaction (sensors, actuators, percepts, actions)</span>
                </div>

                <div className="image-placeholder">
                    <div className="placeholder-icon">🖼️</div>
                    <span><strong>Image: agent-types-hierarchy.png</strong></span>
                    <span>A hierarchy diagram showing the relationship between different agent types</span>
                </div>

                <div className="image-placeholder">
                    <div className="placeholder-icon">🖼️</div>
                    <span><strong>Image: learning-agent-architecture.png</strong></span>
                    <span>Architecture diagram of a learning agent with all four components</span>
                </div>
            </section>

            {/* Key Takeaways */}
            <section>
                <h2>📝 Key Takeaways</h2>

                <ul>
                    <li>An <strong>agent</strong> perceives its environment and acts upon it.</li>
                    <li>A <strong>rational agent</strong> acts to maximize its performance measure.</li>
                    <li><strong>PEAS</strong> (Performance, Environment, Actuators, Sensors) is used to specify agents.</li>
                    <li>Environment properties (observable, deterministic, static, etc.) affect agent design.</li>
                    <li>Agent types range from <strong>simple reflex</strong> to <strong>learning agents</strong>.</li>
                    <li><strong>Learning agents</strong> can improve over time—foundation of modern AI!</li>
                    <li>The choice of agent type depends on the task complexity and requirements.</li>
                </ul>
            </section>

            {/* Unit Summary */}
            <section className="unit-summary">
                <h2>🎉 Unit 1 Complete!</h2>
                <p>
                    Congratulations! You have completed <strong>Unit 1: Introduction to AI</strong>.
                    You&apos;ve learned:
                </p>
                <ul>
                    <li>What AI is and its different definitions</li>
                    <li>The foundations of AI from multiple disciplines</li>
                    <li>The complete history of AI from 1943 to today</li>
                    <li>How AI has evolved from past to present and what the future holds</li>
                    <li>Intelligent agents and their various types</li>
                </ul>
                <p>
                    <strong>Next up:</strong> Unit 2 will dive deep into <strong>Problem Solving by Searching</strong>—how
                    AI finds solutions to complex problems!
                </p>
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

        .highlight-term {
          color: var(--link-color);
          font-weight: 600;
        }

        /* Agent Diagram */
        .agent-diagram {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin: 2rem 0;
          padding: 2rem;
          background-color: var(--bg-secondary);
          border-radius: 12px;
        }

        .diagram-box {
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          text-align: center;
        }

        .diagram-box.environment {
          background-color: var(--bg-tertiary);
          border: 2px solid var(--border-color);
        }

        .diagram-box.agent {
          background-color: var(--link-color);
          color: white;
        }

        .agent-parts {
          display: flex;
          gap: 1rem;
          margin-top: 0.75rem;
          font-size: 0.875rem;
          font-weight: 400;
        }

        .diagram-arrows {
          display: flex;
          gap: 4rem;
        }

        .arrow-down, .arrow-up {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .arrow {
          font-size: 1.5rem;
          color: var(--link-color);
        }

        /* PEAS Grid */
        .peas-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin: 1.5rem 0;
        }

        .peas-card {
          background-color: var(--bg-secondary);
          border-radius: 8px;
          padding: 1.25rem;
          text-align: center;
          border: 1px solid var(--border-color);
        }

        .peas-letter {
          width: 40px;
          height: 40px;
          background-color: var(--link-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
          margin: 0 auto 0.75rem;
        }

        .peas-card h4 {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .peas-card p {
          font-size: 0.8rem;
          margin-bottom: 0;
        }

        /* Definition Box */
        .definition-box {
          background-color: var(--bg-secondary);
          border: 1px solid var(--link-color);
          border-radius: 8px;
          padding: 1.25rem;
          margin: 1rem 0;
        }

        .definition-box h4 {
          color: var(--link-color);
          margin-bottom: 0.75rem;
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

        /* Properties List */
        .properties-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .property-item {
          background-color: var(--bg-secondary);
          border-radius: 8px;
          padding: 1.25rem;
        }

        .property-item h4 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .property-item table {
          margin: 0;
        }

        /* Agent Types */
        .agent-types {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .agent-type-card {
          background-color: var(--bg-secondary);
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border-color);
        }

        .agent-type-card.featured {
          border-color: var(--link-color);
          border-width: 2px;
        }

        .agent-type-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background-color: var(--bg-tertiary);
        }

        .agent-type-number {
          width: 32px;
          height: 32px;
          background-color: var(--link-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }

        .agent-type-header h3 {
          margin: 0;
          font-size: 1.1rem;
        }

        .agent-type-content {
          padding: 1.5rem;
        }

        .pros-cons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 1rem 0;
        }

        .pros, .cons {
          padding: 0.75rem;
          border-radius: 6px;
          font-size: 0.875rem;
        }

        .pros {
          background-color: rgba(34, 197, 94, 0.1);
        }

        .cons {
          background-color: rgba(239, 68, 68, 0.1);
        }

        .learning-components {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin: 1rem 0;
        }

        .component {
          background-color: var(--bg-tertiary);
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
        }

        .component h5 {
          margin-bottom: 0.5rem;
        }

        .component p {
          font-size: 0.875rem;
          margin-bottom: 0;
        }

        .unit-summary {
          background-color: rgba(34, 197, 94, 0.1);
          border: 2px solid var(--link-color);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .unit-summary h2 {
          color: var(--link-color);
          border: none;
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

        .nav-next.disabled {
          background-color: var(--bg-tertiary);
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .peas-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pros-cons, .learning-components {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .page-header h1 {
            font-size: 1.75rem;
          }

          .peas-grid {
            grid-template-columns: 1fr;
          }

          .page-navigation {
            flex-direction: column;
          }

          .page-navigation a, .nav-next {
            text-align: center;
          }
        }
      `}</style>
        </article>
    );
}
