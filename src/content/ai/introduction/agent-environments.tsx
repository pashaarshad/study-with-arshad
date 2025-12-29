// src/content/ai/introduction/agent-environments.tsx
import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, CodeBlock, ImagePlaceholder } from '@/components/ContentDisplay';

export default function AgentEnvironments() {
    return (
        <div>
            <p>
                The design of an AI agent depends heavily on the characteristics of the environment it
                operates in. A chess-playing AI faces very different challenges than a self-driving car,
                even though both are intelligent agents. Understanding <strong>environment properties</strong>
                is crucial for designing effective AI systems.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "How to specify and describe task environments",
                    "Different properties of environments (observable, deterministic, etc.)",
                    "How environment properties affect agent design",
                    "Examples of various environment types",
                    "The spectrum from simple to complex environments"
                ]}
            />

            <h2 id="specifying-environment">Specifying the Task Environment</h2>

            <p>
                Before building an agent, we must understand its operating environment. The <strong>PEAS</strong>
                framework (from the previous topic) helps us specify:
            </p>

            <ul>
                <li><strong>Performance Measure:</strong> What defines success?</li>
                <li><strong>Environment:</strong> What is the world like?</li>
                <li><strong>Actuators:</strong> What can the agent do?</li>
                <li><strong>Sensors:</strong> What can the agent perceive?</li>
            </ul>

            <p>
                Beyond PEAS, we need to understand the <strong>properties</strong> of the environment that
                affect how we design the agent's decision-making logic.
            </p>

            <h2 id="properties">Properties of Task Environments</h2>

            <p>
                Task environments can be categorized along several dimensions. These dimensions are
                crucial for determining what kind of agent architecture is appropriate.
            </p>

            <ImagePlaceholder
                name="environment-properties-grid"
                description="A grid showing 6 environment property dimensions with examples for each"
                suggestedSize="900x600"
            />

            <h3 id="observable">1. Fully Observable vs Partially Observable</h3>

            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Examples</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Fully Observable</strong></td>
                        <td>Agent's sensors give access to the complete state of the environment at any time</td>
                        <td>Chess, Tic-tac-toe, simple puzzle games</td>
                    </tr>
                    <tr>
                        <td><strong>Partially Observable</strong></td>
                        <td>Agent cannot see everything; some state is hidden</td>
                        <td>Poker (hidden cards), driving (blind spots), real world</td>
                    </tr>
                    <tr>
                        <td><strong>Unobservable (Sensorless)</strong></td>
                        <td>Agent has no sensors at all</td>
                        <td>Some theoretical problems, "blind" agents</td>
                    </tr>
                </tbody>
            </table>

            <ExampleBox title="Observable Environment Examples">
                <p><strong>Fully Observable: Chess</strong></p>
                <ul>
                    <li>The entire board is visible to both players</li>
                    <li>No hidden information</li>
                    <li>Agent knows the complete state</li>
                </ul>

                <p><strong>Partially Observable: Poker</strong></p>
                <ul>
                    <li>Player only sees their own cards</li>
                    <li>Opponents' hands are hidden</li>
                    <li>Agent must reason about uncertain information</li>
                </ul>

                <p><strong>Partially Observable: Self-driving car</strong></p>
                <ul>
                    <li>Cannot see around corners</li>
                    <li>Occluded objects behind other cars</li>
                    <li>Weather can reduce visibility</li>
                </ul>
            </ExampleBox>

            <InfoBox type="note" title="Design Implication">
                <p>
                    <strong>Fully observable</strong> environments are easier to handle — the agent just
                    needs to sense the current state.<br /><br />
                    <strong>Partially observable</strong> environments require the agent to maintain
                    <strong>internal state</strong> and make inferences about hidden information.
                </p>
            </InfoBox>

            <h3 id="deterministic">2. Deterministic vs Stochastic</h3>

            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Examples</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Deterministic</strong></td>
                        <td>The next state is completely determined by current state and action</td>
                        <td>Chess, puzzle games, most board games</td>
                    </tr>
                    <tr>
                        <td><strong>Stochastic</strong></td>
                        <td>Randomness/uncertainty in the outcomes of actions</td>
                        <td>Backgammon (dice), weather prediction, stock market</td>
                    </tr>
                    <tr>
                        <td><strong>Nondeterministic</strong></td>
                        <td>Multiple possible outcomes, but not characterized by probabilities</td>
                        <td>Internet responses (timing varies)</td>
                    </tr>
                </tbody>
            </table>

            <ExampleBox title="Determinism Examples">
                <CodeBlock
                    language="python"
                    title="determinism_examples.py"
                    code={`import random

# DETERMINISTIC Environment
# Same action always produces same result
class DeterministicChess:
    def move(self, piece, destination):
        """Move is always predictable"""
        # If valid, piece moves to destination
        # No randomness involved
        return f"{piece} moved to {destination}"  # Always same result

# STOCHASTIC Environment  
# Same action can produce different results
class StochasticBackgammon:
    def roll_dice(self):
        """Outcome is random"""
        return (random.randint(1, 6), random.randint(1, 6))
    
    def move(self, piece, dice_result):
        """Movement depends on random dice roll"""
        # Same action, different possible outcomes
        return f"{piece} moves {sum(dice_result)} spaces"

# Real-world driving is stochastic
class DrivingEnvironment:
    def accelerate(self, speed_increase):
        """
        Even pressing gas pedal has uncertain outcomes:
        - Tire grip varies
        - Road conditions change
        - Other drivers react unpredictably
        """
        base_result = speed_increase
        randomness = random.uniform(-0.1, 0.1) * speed_increase
        return base_result + randomness  # Slight variation`}
                />
            </ExampleBox>

            <InfoBox type="note" title="Design Implication">
                <p>
                    <strong>Deterministic</strong> environments: Agent can plan with certainty.<br /><br />
                    <strong>Stochastic</strong> environments: Agent must consider probabilities and
                    expected outcomes. Planning becomes more complex.
                </p>
            </InfoBox>

            <h3 id="episodic">3. Episodic vs Sequential</h3>

            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Examples</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Episodic</strong></td>
                        <td>Each action is independent; no connection between episodes</td>
                        <td>Image classification, spam detection</td>
                    </tr>
                    <tr>
                        <td><strong>Sequential</strong></td>
                        <td>Current action affects future states and decisions</td>
                        <td>Chess, driving, most real-world tasks</td>
                    </tr>
                </tbody>
            </table>

            <ExampleBox title="Episodic vs Sequential">
                <p><strong>Episodic: Spam Email Classifier</strong></p>
                <pre><code>{`Email 1: "You won $1000000!" → SPAM ✓
Email 2: "Meeting at 3pm" → NOT SPAM ✓
Email 3: "Buy now cheap pills" → SPAM ✓

Each classification is independent!
Previous emails don't affect current classification.`}</code></pre>

                <p><strong>Sequential: Chess Game</strong></p>
                <pre><code>{`Move 1: e4 → Opens center, affects future positions
Move 2: Depends on opponent's response to e4
Move 3: Build on previous moves...
...
Move 40: Result of all previous moves

Every move affects future possibilities!`}</code></pre>
            </ExampleBox>

            <InfoBox type="note" title="Design Implication">
                <p>
                    <strong>Episodic</strong>: Simple! Just map percept → action. No memory needed.<br /><br />
                    <strong>Sequential</strong>: Much harder! Must think ahead. Current actions have
                    long-term consequences.
                </p>
            </InfoBox>

            <h3 id="static">4. Static vs Dynamic</h3>

            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Examples</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Static</strong></td>
                        <td>Environment doesn't change while agent is thinking</td>
                        <td>Chess (with no clock), crossword puzzles</td>
                    </tr>
                    <tr>
                        <td><strong>Dynamic</strong></td>
                        <td>Environment changes while agent is deliberating</td>
                        <td>Driving, real-time games, stock trading</td>
                    </tr>
                    <tr>
                        <td><strong>Semidynamic</strong></td>
                        <td>Environment doesn't change, but agent's performance score does</td>
                        <td>Timed chess (clock ticks while thinking)</td>
                    </tr>
                </tbody>
            </table>

            <ExampleBox title="Static vs Dynamic">
                <p><strong>Static: Crossword Puzzle</strong></p>
                <ul>
                    <li>Puzzle doesn't change while you think</li>
                    <li>Take as long as you want</li>
                    <li>No time pressure from environment</li>
                </ul>

                <p><strong>Dynamic: Highway Driving</strong></p>
                <ul>
                    <li>Other cars keep moving while you decide</li>
                    <li>Taking too long to decide = crash!</li>
                    <li>Must make real-time decisions</li>
                </ul>

                <p><strong>Semidynamic: Speed Chess</strong></p>
                <ul>
                    <li>Board doesn't change while thinking</li>
                    <li>But your clock is ticking!</li>
                    <li>Thinking time affects performance</li>
                </ul>
            </ExampleBox>

            <InfoBox type="warning" title="Design Implication">
                <p>
                    <strong>Static</strong>: Agent can take time to compute optimal action.<br /><br />
                    <strong>Dynamic</strong>: Agent must have <strong>real-time</strong> response.
                    May need to act with incomplete analysis. Computationally demanding!
                </p>
            </InfoBox>

            <h3 id="discrete">5. Discrete vs Continuous</h3>

            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Examples</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Discrete</strong></td>
                        <td>Finite number of distinct states, actions, percepts</td>
                        <td>Chess (finite positions), digital sensors</td>
                    </tr>
                    <tr>
                        <td><strong>Continuous</strong></td>
                        <td>Infinite number of possible states or values</td>
                        <td>Robot arm angles, car speed, temperature</td>
                    </tr>
                </tbody>
            </table>

            <ExampleBox title="Discrete vs Continuous">
                <CodeBlock
                    language="python"
                    title="discrete_vs_continuous.py"
                    code={`# DISCRETE Environment: Chess
class ChessEnvironment:
    """
    - 64 squares
    - 6 piece types × 2 colors
    - Finite (though huge) number of legal positions
    - Finite number of legal moves per position
    """
    possible_squares = 64  # Discrete!
    piece_types = ['King', 'Queen', 'Rook', 'Bishop', 'Knight', 'Pawn']
    
    def get_legal_moves(self, position):
        """Returns a finite list of moves"""
        return ['e4', 'e5', 'Nf3', ...]  # Countable options


# CONTINUOUS Environment: Robot Arm
class RobotArmEnvironment:
    """
    - Joint angles can be any real number (0-360 degrees)
    - End effector can be at any point in 3D space
    - Infinite possible configurations
    """
    def set_joint_angle(self, joint_id, angle: float):
        """Angle can be 45.0, 45.001, 45.00001, ..."""
        # Any value in range 0 to 360
        if 0 <= angle <= 360:
            self.joints[joint_id] = angle
    
    def get_position(self) -> tuple:
        """Returns (x, y, z) - all continuous values"""
        return (3.14159, 2.71828, 1.41421)  # Any real numbers!


# HYBRID: Self-driving car
class SelfDrivingEnvironment:
    """
    - Continuous: Steering angle, speed, position
    - Discrete: Traffic light (red/yellow/green), lane choice
    """
    steering_angle: float  # Continuous: -45.0 to 45.0
    speed: float           # Continuous: 0 to 200 km/h
    current_lane: int      # Discrete: 1, 2, or 3
    traffic_light: str     # Discrete: 'red', 'yellow', 'green'`}
                />
            </ExampleBox>

            <h3 id="single-multi">6. Single Agent vs Multi-Agent</h3>

            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Examples</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Single Agent</strong></td>
                        <td>Only one agent in the environment</td>
                        <td>Crossword puzzle, solitaire</td>
                    </tr>
                    <tr>
                        <td><strong>Competitive Multi-Agent</strong></td>
                        <td>Multiple agents with opposing goals</td>
                        <td>Chess, Go, competitive games</td>
                    </tr>
                    <tr>
                        <td><strong>Cooperative Multi-Agent</strong></td>
                        <td>Multiple agents working together</td>
                        <td>Robot soccer team, multi-robot warehouse</td>
                    </tr>
                    <tr>
                        <td><strong>Mixed</strong></td>
                        <td>Both cooperation and competition</td>
                        <td>Traffic (cooperate to avoid crashes, compete for space)</td>
                    </tr>
                </tbody>
            </table>

            <InfoBox type="note" title="Multi-Agent Challenges">
                <p>
                    Multi-agent environments introduce additional complexity:
                </p>
                <ul>
                    <li><strong>Game Theory:</strong> Predicting opponent behavior</li>
                    <li><strong>Communication:</strong> How agents share information</li>
                    <li><strong>Coordination:</strong> Avoiding conflicts between cooperating agents</li>
                    <li><strong>Emergent Behavior:</strong> System behavior not predictable from individual agents</li>
                </ul>
            </InfoBox>

            <h2 id="complexity-spectrum">Environment Complexity Spectrum</h2>

            <p>
                We can arrange environments by complexity:
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Easiest ➡️ Hardest</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fully observable, deterministic, static, discrete, single-agent</td>
                        <td>Crossword puzzle</td>
                    </tr>
                    <tr>
                        <td>Add partial observability</td>
                        <td>Minesweeper</td>
                    </tr>
                    <tr>
                        <td>Add stochastic elements</td>
                        <td>Backgammon</td>
                    </tr>
                    <tr>
                        <td>Add multiple agents</td>
                        <td>Chess</td>
                    </tr>
                    <tr>
                        <td>Add dynamic environment</td>
                        <td>Real-time strategy games</td>
                    </tr>
                    <tr>
                        <td>Add continuity</td>
                        <td>Robot soccer</td>
                    </tr>
                    <tr>
                        <td>All hard properties</td>
                        <td>Real-world driving</td>
                    </tr>
                </tbody>
            </table>

            <ImagePlaceholder
                name="environment-complexity-diagram"
                description="A pyramid or ladder diagram showing environments from simple (bottom) to complex (top)"
                suggestedSize="800x500"
            />

            <h2 id="real-world-analysis">Real-World Environment Analysis</h2>

            <ExampleBox title="Environment Analysis: Self-Driving Car">
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Classification</th>
                            <th>Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Observable</td>
                            <td><strong>Partially</strong></td>
                            <td>Can't see behind buildings, other cars block view</td>
                        </tr>
                        <tr>
                            <td>Deterministic</td>
                            <td><strong>Stochastic</strong></td>
                            <td>Other drivers, weather, mechanical factors unpredictable</td>
                        </tr>
                        <tr>
                            <td>Episodic/Sequential</td>
                            <td><strong>Sequential</strong></td>
                            <td>Each driving decision affects future situations</td>
                        </tr>
                        <tr>
                            <td>Static/Dynamic</td>
                            <td><strong>Dynamic</strong></td>
                            <td>Traffic changes while driving</td>
                        </tr>
                        <tr>
                            <td>Discrete/Continuous</td>
                            <td><strong>Continuous</strong></td>
                            <td>Speed, steering, position are continuous values</td>
                        </tr>
                        <tr>
                            <td>Agents</td>
                            <td><strong>Multi-agent</strong></td>
                            <td>Other cars are also agents</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <strong>Result:</strong> Self-driving is one of the HARDEST AI problems because
                    the environment has all the difficult properties!
                </p>
            </ExampleBox>

            <h2 id="summary">Summary</h2>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Task environments have properties that fundamentally affect agent design",
                    "Observable: Can the agent see everything? (Fully vs Partially)",
                    "Deterministic: Are action outcomes predictable? (Deterministic vs Stochastic)",
                    "Episodic: Do actions have long-term consequences? (Episodic vs Sequential)",
                    "Static: Does the environment change while agent thinks? (Static vs Dynamic)",
                    "Discrete: Are states/actions countable? (Discrete vs Continuous)",
                    "Multi-agent: Are there other agents? (Single vs Multi-agent)",
                    "Real-world environments typically have the hardest properties"
                ]}
            />

            <InfoBox type="tip" title="What's Next?">
                <p>
                    In the next topic, we'll explore the <strong>Types of Agents</strong> — from simple
                    reflex agents to sophisticated utility-based agents. We'll see how different agent
                    architectures are suited to different types of environments.
                </p>
            </InfoBox>
        </div>
    );
}
