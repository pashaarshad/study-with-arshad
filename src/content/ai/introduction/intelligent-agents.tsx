// src/content/ai/introduction/intelligent-agents.tsx
import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, CodeBlock, ContentImage } from '@/components/ContentDisplay';

export default function IntelligentAgents() {
    return (
        <div>
            <p>
                In Artificial Intelligence, everything revolves around the concept of an <strong>agent</strong>.
                An intelligent agent is anything that can perceive its environment through sensors and act
                upon that environment through actuators. This simple but powerful framework helps us understand
                and design AI systems — from chess-playing programs to self-driving cars to virtual assistants.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "Definition and components of an intelligent agent",
                    "The agent-environment interaction model",
                    "What makes an agent 'intelligent' or 'rational'",
                    "Percepts, actions, and the agent function",
                    "PEAS description framework for analyzing agents"
                ]}
            />

            <h2 id="what-is-agent">What is an Agent?</h2>

            <p>
                An <strong>agent</strong> is an entity that:
            </p>

            <ol>
                <li><strong>Perceives</strong> its environment through <em>sensors</em></li>
                <li><strong>Acts</strong> upon that environment through <em>actuators</em></li>
            </ol>

            <table>
                <thead>
                    <tr>
                        <th>Agent Type</th>
                        <th>Sensors (Perception)</th>
                        <th>Actuators (Actions)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Human</strong></td>
                        <td>Eyes, ears, nose, tongue, skin</td>
                        <td>Hands, legs, voice, facial expressions</td>
                    </tr>
                    <tr>
                        <td><strong>Robot</strong></td>
                        <td>Cameras, microphones, touch sensors, LIDAR</td>
                        <td>Motors, wheels, robotic arms, speakers</td>
                    </tr>
                    <tr>
                        <td><strong>Software Agent</strong></td>
                        <td>Keyboard input, file contents, network data</td>
                        <td>Display output, file writing, network packets</td>
                    </tr>
                    <tr>
                        <td><strong>Self-driving Car</strong></td>
                        <td>Cameras, radar, GPS, speedometer</td>
                        <td>Steering, accelerator, brakes, signals</td>
                    </tr>
                    <tr>
                        <td><strong>Thermostat</strong></td>
                        <td>Temperature sensor</td>
                        <td>Heater on/off control</td>
                    </tr>
                </tbody>
            </table>

            <ContentImage
                src="/imgs/agent-environment-diagram.svg"
                alt="Diagram showing an agent with sensors receiving percepts from the environment and actuators producing actions that affect the environment"
                caption="Interaction between an Agent and its Environment"
            />

            <h2 id="perception-action-cycle">The Perception-Action Cycle</h2>

            <p>
                The fundamental loop of an intelligent agent is:
            </p>

            <ol>
                <li><strong>Sense:</strong> Receive information from the environment (percept)</li>
                <li><strong>Think:</strong> Process information and decide what to do</li>
                <li><strong>Act:</strong> Execute an action that affects the environment</li>
                <li><strong>Repeat:</strong> The environment changes, and the cycle continues</li>
            </ol>

            <ExampleBox title="Perception-Action Cycle Example: Vacuum Cleaner Robot">
                <CodeBlock
                    language="python"
                    title="vacuum_agent_cycle.py"
                    code={`# Simple Vacuum Cleaner Agent - Perception - Action Cycle

class VacuumAgent:
    def __init__(self):
self.location = 'A'  # Starting location
        
    def sense(self, environment):
"""
SENSE: Perceive the current state
Returns: current location and whether it's dirty
"""
current_location = self.location
is_dirty = environment[current_location]
return (current_location, is_dirty)
    
    def think(self, percept):
"""
THINK: Decide what action to take based on percept
        Simple rule - based logic
"""
location, is_dirty = percept

if is_dirty:
    return 'SUCK'  # Clean if dirty
        elif location == 'A':
return 'MOVE_RIGHT'  # Move to B if at A
        elif location == 'B':
return 'MOVE_LEFT'  # Move to A if at B
    
    def act(self, action, environment):
"""
ACT: Execute the chosen action
        Modifies the environment or agent state
"""
if action == 'SUCK':
    environment[self.location] = False  # Clean the spot
print(f"Cleaned location {self.location}")
        elif action == 'MOVE_RIGHT':
self.location = 'B'
print("Moved to location B")
        elif action == 'MOVE_LEFT':
self.location = 'A'
print("Moved to location A")
    
    def run_cycle(self, environment):
"""Complete one perception-action cycle"""
percept = self.sense(environment)
action = self.think(percept)
self.act(action, environment)
return action

# Simulation
environment = { 'A': True, 'B': True }  # Both locations are dirty
agent = VacuumAgent()

print("Initial environment:", environment)
print("-" * 40)

for step in range(4):
    print(f"Step {step + 1}:")
agent.run_cycle(environment)
print(f"Environment now: {environment}")
print()

# Output:
# Initial environment: { 'A': True, 'B': True }
# Step 1: Cleaned location A
# Step 2: Moved to location B
# Step 3: Cleaned location B
# Step 4: Moved to location A`}
                />
            </ExampleBox>

            <h2 id="percepts-and-actions">Percepts and Actions</h2>

            <h3>Percept</h3>
            <p>
                A <strong>percept</strong> is the input that an agent receives at any given moment. It's
                the information gathered by the agent's sensors about the current state of the environment.
            </p>

            <ul>
                <li><strong>Percept:</strong> A single sensory input at one moment</li>
                <li><strong>Percept Sequence:</strong> The complete history of everything the agent has perceived</li>
            </ul>

            <h3>Actions</h3>
            <p>
                An <strong>action</strong> is something the agent can do to affect the environment.
                The set of all possible actions is called the <strong>action space</strong>.
            </p>

            <InfoBox type="note" title="Action Space Examples">
                <table>
                    <thead>
                        <tr>
                            <th>Agent</th>
                            <th>Action Space</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chess AI</td>
                            <td>All legal chess moves (~35 average)</td>
                        </tr>
                        <tr>
                            <td>Self-driving car</td>
                            <td>Steering angle, speed, brake, signals</td>
                        </tr>
                        <tr>
                            <td>Chatbot</td>
                            <td>All possible text responses</td>
                        </tr>
                        <tr>
                            <td>Vacuum robot</td>
                            <td>Move left, move right, suck, do nothing</td>
                        </tr>
                    </tbody>
                </table>
            </InfoBox>

            <h2 id="agent-function">The Agent Function</h2>

            <p>
                The <strong>agent function</strong> is a mathematical description that maps any percept
                sequence to an action:
            </p>

            <pre><code>{`f: P * → A

Where:
P * = all possible percept sequences
A = set of possible actions`}</code></pre>

            <p>
                The agent function captures everything about how an agent behaves. An AI designer's job
                is to create an <strong>agent program</strong> that implements the desired agent function.
            </p>

            <ExampleBox title="Agent Function vs Agent Program">
                <p><strong>Agent Function:</strong> The abstract mathematical mapping (what the agent should do)</p>
                <p><strong>Agent Program:</strong> The concrete implementation (how it's computed)</p>

                <CodeBlock
                    language="python"
                    title="agent_function.py"
                    code={`# Agent Function(conceptual - this table would be infinite!)
agent_function_table = {
    # Percept sequence → Action
        ('A', 'Clean'): 'Right',
    ('A', 'Dirty'): 'Suck',
    ('B', 'Clean'): 'Left',
        ('B', 'Dirty'): 'Suck',
            (('A', 'Clean'), ('A', 'Clean')): 'Right',  # History matters!
    # ... infinite more entries
}

# Agent Program(practical implementation)
def simple_reflex_agent(percept):
"""
    A simple agent program that implements the agent function.
    Uses rules instead of a lookup table.
    """
location, status = percept
if status == 'Dirty':
    return 'Suck'
    elif location == 'A':
return 'Right'
    else:
return 'Left'

# The agent program is a compact way to represent
# the(potentially infinite) agent function!`}
                />
            </ExampleBox>

            <h2 id="rational-agents">Rational Agents</h2>

            <p>
                An agent that always does the "right thing" is called a <strong>rational agent</strong>.
                But what is the "right thing"?
            </p>

            <h3>Performance Measure</h3>
            <p>
                A <strong>performance measure</strong> is a criterion that evaluates how successful an
                agent is. It defines what we mean by "good" behavior.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Agent</th>
                        <th>Possible Performance Measures</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Vacuum cleaner</td>
                        <td>Amount of dirt cleaned, energy used, time taken</td>
                    </tr>
                    <tr>
                        <td>Taxi driver</td>
                        <td>Safety, speed, legal compliance, passenger comfort, profit</td>
                    </tr>
                    <tr>
                        <td>Chess player</td>
                        <td>Win/loss/draw ratio, rating points</td>
                    </tr>
                    <tr>
                        <td>Customer service bot</td>
                        <td>Customer satisfaction, issues resolved, response time</td>
                    </tr>
                </tbody>
            </table>

            <h3>Definition of Rationality</h3>
            <blockquote>
                For each possible percept sequence, a <strong>rational agent</strong> should select an action
                that is expected to <strong>maximize its performance measure</strong>, given the evidence
                provided by the percept sequence and whatever built-in knowledge the agent has.
            </blockquote>

            <InfoBox type="highlight" title="Rational ≠ Omniscient">
                <p>
                    Important distinctions:
                </p>
                <ul>
                    <li><strong>Rational:</strong> Makes the best decision based on available information</li>
                    <li><strong>Omniscient:</strong> Knows the actual outcome of all actions (impossible!)</li>
                    <li><strong>Clairvoyant:</strong> Knows future percepts (also impossible!)</li>
                </ul>
                <p>
                    A rational agent does the best it can with what it knows, even if the outcome isn't perfect.
                </p>
            </InfoBox>

            <ExampleBox title="Rationality Example">
                <p>
                    <strong>Scenario:</strong> A self-driving car approaches a green light.
                </p>
                <ul>
                    <li>A <strong>rational</strong> decision is to proceed through the intersection</li>
                    <li>If another car runs the red light and causes an accident, the self-driving car
                        wasn't irrational — it made the best decision based on available information</li>
                    <li>An <strong>omniscient</strong> agent would have stopped, but we can't expect that</li>
                </ul>
            </ExampleBox>

            <h2 id="peas">PEAS: Describing Task Environments</h2>

            <p>
                To design a rational agent, we must first specify the <strong>task environment</strong>.
                The <strong>PEAS</strong> framework helps us do this:
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Letter</th>
                        <th>Stands For</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>P</strong></td>
                        <td>Performance Measure</td>
                        <td>How do we evaluate success?</td>
                    </tr>
                    <tr>
                        <td><strong>E</strong></td>
                        <td>Environment</td>
                        <td>What is the agent operating in?</td>
                    </tr>
                    <tr>
                        <td><strong>A</strong></td>
                        <td>Actuators</td>
                        <td>What can the agent do?</td>
                    </tr>
                    <tr>
                        <td><strong>S</strong></td>
                        <td>Sensors</td>
                        <td>What can the agent perceive?</td>
                    </tr>
                </tbody>
            </table>

            <h3>PEAS Examples</h3>

            <h4>Automated Taxi Driver</h4>
            <table>
                <thead>
                    <tr>
                        <th>PEAS Component</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Performance</strong></td>
                        <td>Safe, fast, legal driving; maximize profits; minimize wear</td>
                    </tr>
                    <tr>
                        <td><strong>Environment</strong></td>
                        <td>Roads, traffic, pedestrians, weather, customers</td>
                    </tr>
                    <tr>
                        <td><strong>Actuators</strong></td>
                        <td>Steering, accelerator, brake, horn, turn signals, display</td>
                    </tr>
                    <tr>
                        <td><strong>Sensors</strong></td>
                        <td>Cameras, LIDAR, GPS, speedometer, odometer, engine sensors</td>
                    </tr>
                </tbody>
            </table>

            <h4>Medical Diagnosis System</h4>
            <table>
                <thead>
                    <tr>
                        <th>PEAS Component</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Performance</strong></td>
                        <td>Correct diagnosis, minimize tests, minimize costs</td>
                    </tr>
                    <tr>
                        <td><strong>Environment</strong></td>
                        <td>Patient, hospital, medical knowledge base</td>
                    </tr>
                    <tr>
                        <td><strong>Actuators</strong></td>
                        <td>Display (diagnosis, recommendations), order tests</td>
                    </tr>
                    <tr>
                        <td><strong>Sensors</strong></td>
                        <td>Patient input, test results, symptoms, medical history</td>
                    </tr>
                </tbody>
            </table>

            <h4>Chess-Playing AI</h4>
            <table>
                <thead>
                    <tr>
                        <th>PEAS Component</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Performance</strong></td>
                        <td>Win/lose/draw, rating, games played</td>
                    </tr>
                    <tr>
                        <td><strong>Environment</strong></td>
                        <td>Chess board, opponent's moves, time clock</td>
                    </tr>
                    <tr>
                        <td><strong>Actuators</strong></td>
                        <td>Moving pieces on the board</td>
                    </tr>
                    <tr>
                        <td><strong>Sensors</strong></td>
                        <td>Board state, opponent's moves, time remaining</td>
                    </tr>
                </tbody>
            </table>

            <ContentImage
                src="/imgs/peas-framework-diagram.svg"
                alt="Visual diagram of PEAS framework showing the four components and their relationships"
                caption="The PEAS Framework (Performance, Environment, Actuators, Sensors)"
            />

            <h2 id="agent-structure">Structure of Agents</h2>

            <p>
                An agent consists of:
            </p>

            <pre><code>{`Agent = Architecture + Program

Where:
Architecture = the physical or virtual platform(hardware / software)
Program = the logic that implements the agent function`}</code></pre>

            <ExampleBox title="Agent Structure Example">
                <CodeBlock
                    language="python"
                    title="agent_structure.py"
                    code={`# Generic Agent Structure

class Agent:
"""
    Base class representing an intelligent agent.
    Combines architecture(platform) and program(logic).
    """
    
    def __init__(self, sensors, actuators):
"""
ARCHITECTURE: What the agent can perceive and do
    """
        self.sensors = sensors
self.actuators = actuators
self.internal_state = {}  # Memory(for some agent types)
    
    def perceive(self, environment):
"""
        Use sensors to get percept from environment
"""
percept = {}
for sensor in self.sensors:
    percept[sensor] = environment.get_reading(sensor)
return percept
    
    def decide(self, percept):
"""
PROGRAM: The agent's decision-making logic
        This is where the AI magic happens!
        Override this in specific agent implementations.
        """
        raise NotImplementedError("Subclass must implement decide()")
    
    def act(self, action, environment):
"""
        Use actuators to perform action in environment
"""
for actuator, value in action.items():
    if actuator in self.actuators:
        environment.apply_action(actuator, value)
    
    def run_step(self, environment):
"""
        One step of the agent's lifecycle
"""
percept = self.perceive(environment)
action = self.decide(percept)
self.act(action, environment)
return action


# Specific implementation: Simple Thermostat Agent
class ThermostatAgent(Agent):
    def __init__(self, target_temp = 22):
super().__init__(
    sensors = ['temperature'],
    actuators = ['heater', 'cooler']
)
self.target_temp = target_temp
    
    def decide(self, percept):
"""
        Simple rule - based decision making
"""
current_temp = percept['temperature']

if current_temp < self.target_temp - 1:
    return { 'heater': 'ON', 'cooler': 'OFF' }
        elif current_temp > self.target_temp + 1:
return { 'heater': 'OFF', 'cooler': 'ON' }
        else:
return { 'heater': 'OFF', 'cooler': 'OFF' }

# Usage
thermostat = ThermostatAgent(target_temp = 22)
# thermostat.run_step(room_environment)`}
                />
            </ExampleBox>

            <h2 id="summary">Summary</h2>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "An agent perceives its environment through sensors and acts through actuators",
                    "The perception-action cycle: Sense → Think → Act → Repeat",
                    "A percept is momentary input; percept sequence is the complete history",
                    "The agent function maps percept sequences to actions",
                    "A rational agent maximizes expected performance based on available information",
                    "PEAS (Performance, Environment, Actuators, Sensors) describes task environments",
                    "Agent = Architecture (platform) + Program (logic)"
                ]}
            />

            <InfoBox type="tip" title="What's Next?">
                <p>
                    In the next topic, we'll explore <strong>Environments & Task Specifications</strong> in
                    detail — learning about different types of environments (deterministic, stochastic,
                    fully/partially observable) and how they affect agent design.
                </p>
            </InfoBox>
        </div>
    );
}
