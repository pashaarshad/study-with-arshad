// Unit 1 Part 2: Intelligent Agents
// Comprehensive educational content with real-world examples

export const IntelligentAgentsContent = {
    // Main Intelligent Agents page
    main: (
        <div>
            <h1>Intelligent Agents</h1>

            <p>
                An <strong>intelligent agent</strong> is the central concept in modern AI. Rather than
                asking "Can machines think?" (a philosophical question), we focus on "Can machines
                act intelligently?" This practical approach has driven the development of AI systems
                that solve real-world problems.
            </p>

            <div className="info-box">
                <h4>📌 What is an Agent?</h4>
                <p>
                    An <strong>agent</strong> is anything that can be viewed as perceiving its <strong>environment</strong>
                    through <strong>sensors</strong> and acting upon that environment through <strong>actuators</strong>.
                </p>
            </div>

            <h2>The Agent Concept</h2>

            <p>
                Think of agents as entities that interact with their world. This simple but powerful
                abstraction applies to many systems:
            </p>

            <div className="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Agent Type</th>
                            <th>Sensors (Perception)</th>
                            <th>Actuators (Action)</th>
                            <th>Environment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Human</td>
                            <td>Eyes, ears, skin, tongue, nose</td>
                            <td>Hands, legs, voice, facial expressions</td>
                            <td>Physical world, social environment</td>
                        </tr>
                        <tr>
                            <td>Robot</td>
                            <td>Cameras, LIDAR, microphones, touch sensors</td>
                            <td>Motors, grippers, speakers, displays</td>
                            <td>Physical surroundings</td>
                        </tr>
                        <tr>
                            <td>Software Agent</td>
                            <td>Keyboard input, file contents, network data</td>
                            <td>Screen output, file writes, network messages</td>
                            <td>Digital environment, databases</td>
                        </tr>
                        <tr>
                            <td>Self-Driving Car</td>
                            <td>Cameras, radar, GPS, accelerometers</td>
                            <td>Steering, acceleration, braking, signals</td>
                            <td>Roads, traffic, weather</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>The Percept Sequence</h2>

            <p>
                An agent's <strong>percept</strong> is its perceptual input at any given instant.
                The <strong>percept sequence</strong> is the complete history of everything the agent
                has ever perceived.
            </p>

            <div className="note-box">
                <h4>💡 Key Insight</h4>
                <p>
                    An agent's choice of action at any given instant can depend on the entire percept
                    sequence observed to date, but not on anything it hasn't perceived. This is why
                    memory and learning are so important!
                </p>
            </div>

            <h2>Agent Function and Agent Program</h2>

            <p>
                We describe an agent's behavior by its <strong>agent function</strong>—a mathematical
                mapping from percept sequences to actions:
            </p>

            <pre><code>{`Agent Function: f: P* → A

Where:
  P* = all possible percept sequences
  A = set of all possible actions`}</code></pre>

            <p>
                The <strong>agent program</strong> is the concrete implementation of the agent function
                that runs on the physical system (the agent architecture).
            </p>

            <div className="code-example">
                <div className="code-example-header">
                    <span className="code-example-title">Simple Agent (Python)</span>
                </div>
                <pre><code>{`class SimpleAgent:
    """A basic agent that responds to percepts"""
    
    def __init__(self):
        self.percept_history = []
    
    def perceive(self, percept):
        """Process incoming percept"""
        self.percept_history.append(percept)
        return self.act()
    
    def act(self):
        """Decide on action based on percept history"""
        # Simple rule: react to most recent percept
        current = self.percept_history[-1]
        
        if current['temperature'] > 30:
            return 'turn_on_cooling'
        elif current['temperature'] < 18:
            return 'turn_on_heating'
        else:
            return 'do_nothing'

# Usage example
thermostat = SimpleAgent()
action = thermostat.perceive({'temperature': 32, 'humidity': 60})
print(f"Action: {action}")  # Output: Action: turn_on_cooling`}</code></pre>
            </div>

            <h2>Topics in This Section</h2>

            <div className="definition-list">
                <div className="definition-item">
                    <dt>Environments</dt>
                    <dd>
                        Learn about different types of environments where agents operate and how
                        to specify the task environment using the PEAS description.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Task Environment Properties</dt>
                    <dd>
                        Explore the key properties that characterize environments: observability,
                        determinism, episodic vs. sequential, static vs. dynamic, and more.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Structure of Agents</dt>
                    <dd>
                        Understand how agents are built: the agent architecture and the agent
                        program working together.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Types of Agents</dt>
                    <dd>
                        Study different agent architectures: simple reflex, model-based, goal-based,
                        and utility-based agents.
                    </dd>
                </div>
            </div>

            <div className="key-points">
                <h3>🎯 Learning Objectives</h3>
                <ul>
                    <li>Understand the concept of an intelligent agent</li>
                    <li>Learn how to describe task environments using PEAS</li>
                    <li>Classify environments based on their properties</li>
                    <li>Understand different agent architectures and when to use them</li>
                    <li>Relate agent concepts to real-world AI applications</li>
                </ul>
            </div>
        </div>
    ),

    // Environments
    environments: (
        <div>
            <h1>Environments in AI</h1>

            <p>
                Before designing an agent, we must understand the <strong>environment</strong> it will
                operate in. The environment determines what information is available to the agent,
                what actions are possible, and how the environment responds to those actions.
            </p>

            <h2>The PEAS Description</h2>

            <p>
                To fully specify a task environment, we use the <strong>PEAS</strong> framework:
            </p>

            <div className="definition-list">
                <div className="definition-item">
                    <dt>P - Performance Measure</dt>
                    <dd>
                        How do we evaluate the agent's success? This defines what it means for the
                        agent to do well. It should be objective and measurable.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>E - Environment</dt>
                    <dd>
                        What external factors does the agent interact with? This includes other
                        agents, physical properties, and any relevant aspects of the world.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>A - Actuators</dt>
                    <dd>
                        What actions can the agent take? These are the mechanisms through which
                        the agent affects its environment.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>S - Sensors</dt>
                    <dd>
                        What information can the agent perceive? These are the mechanisms through
                        which the agent receives information about its environment.
                    </dd>
                </div>
            </div>

            <h2>PEAS Examples</h2>

            <h3>Example 1: Automated Taxi Driver</h3>

            <div className="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Performance</strong></td>
                            <td>Safe arrival, minimal travel time, legal driving, passenger comfort, maximize profit</td>
                        </tr>
                        <tr>
                            <td><strong>Environment</strong></td>
                            <td>Roads, traffic, pedestrians, weather, customers, other vehicles</td>
                        </tr>
                        <tr>
                            <td><strong>Actuators</strong></td>
                            <td>Steering, accelerator, brake, turn signals, horn, display/speaker for communication</td>
                        </tr>
                        <tr>
                            <td><strong>Sensors</strong></td>
                            <td>Cameras, LIDAR, radar, GPS, speedometer, engine sensors, microphone</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Example 2: Medical Diagnosis System</h3>

            <div className="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Performance</strong></td>
                            <td>Healthy patient, minimize costs, minimize lawsuits, diagnostic accuracy</td>
                        </tr>
                        <tr>
                            <td><strong>Environment</strong></td>
                            <td>Patient, hospital, medical staff, medical records, test results</td>
                        </tr>
                        <tr>
                            <td><strong>Actuators</strong></td>
                            <td>Screen display (diagnosis, recommendations), questions to patient</td>
                        </tr>
                        <tr>
                            <td><strong>Sensors</strong></td>
                            <td>Keyboard input (symptoms, test results), patient history database</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Example 3: Chess Playing Agent</h3>

            <div className="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Performance</strong></td>
                            <td>Win/lose/draw, style of play, time taken per move</td>
                        </tr>
                        <tr>
                            <td><strong>Environment</strong></td>
                            <td>Chess board, opponent, clock</td>
                        </tr>
                        <tr>
                            <td><strong>Actuators</strong></td>
                            <td>Moving pieces on the board (physical or digital output)</td>
                        </tr>
                        <tr>
                            <td><strong>Sensors</strong></td>
                            <td>Board state (current position of all pieces), clock</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="example-box">
                <h4>🌍 Real-World Exercise</h4>
                <p>
                    Think about a virtual assistant like Siri or Alexa. Can you describe it using PEAS?
                </p>
                <ul>
                    <li><strong>Performance:</strong> User satisfaction, task completion rate, response accuracy</li>
                    <li><strong>Environment:</strong> User's home, smart devices, internet services, user history</li>
                    <li><strong>Actuators:</strong> Voice output, device control commands, screen display</li>
                    <li><strong>Sensors:</strong> Microphone (voice input), device states, user account data</li>
                </ul>
            </div>

            <h2>Why PEAS Matters</h2>

            <p>
                The PEAS description helps us:
            </p>

            <ul>
                <li><strong>Clarify Requirements:</strong> What exactly should the agent achieve?</li>
                <li><strong>Design Sensors:</strong> What information is needed to make good decisions?</li>
                <li><strong>Design Actuators:</strong> What actions are necessary and sufficient?</li>
                <li><strong>Evaluate Performance:</strong> How do we know if the agent is successful?</li>
                <li><strong>Compare Agents:</strong> Objectively compare different agent designs</li>
            </ul>

            <div className="code-example">
                <div className="code-example-header">
                    <span className="code-example-title">PEAS Definition (Python)</span>
                </div>
                <pre><code>{`class TaskEnvironment:
    """Define a task environment using PEAS"""
    
    def __init__(self, name):
        self.name = name
        self.performance_measures = []
        self.environment_elements = []
        self.actuators = []
        self.sensors = []
    
    def add_performance(self, measure):
        self.performance_measures.append(measure)
    
    def add_environment(self, element):
        self.environment_elements.append(element)
    
    def add_actuator(self, actuator):
        self.actuators.append(actuator)
    
    def add_sensor(self, sensor):
        self.sensors.append(sensor)
    
    def describe(self):
        print(f"Task Environment: {self.name}")
        print(f"  Performance: {', '.join(self.performance_measures)}")
        print(f"  Environment: {', '.join(self.environment_elements)}")
        print(f"  Actuators: {', '.join(self.actuators)}")
        print(f"  Sensors: {', '.join(self.sensors)}")

# Example: Define a robot vacuum cleaner
vacuum = TaskEnvironment("Robot Vacuum Cleaner")
vacuum.add_performance("floor cleanliness")
vacuum.add_performance("battery efficiency")
vacuum.add_performance("coverage completeness")
vacuum.add_environment("rooms")
vacuum.add_environment("furniture")
vacuum.add_environment("dirt/debris")
vacuum.add_environment("charging station")
vacuum.add_actuator("wheels/motors")
vacuum.add_actuator("vacuum suction")
vacuum.add_actuator("brushes")
vacuum.add_sensor("bump sensor")
vacuum.add_sensor("infrared sensor")
vacuum.add_sensor("camera")
vacuum.add_sensor("dirt sensor")

vacuum.describe()`}</code></pre>
            </div>

            <div className="key-points">
                <h3>📝 Key Takeaways</h3>
                <ul>
                    <li>PEAS (Performance, Environment, Actuators, Sensors) provides a complete task specification</li>
                    <li>Performance measures define what success means for the agent</li>
                    <li>Understanding the environment is crucial for agent design</li>
                    <li>Actuators determine what actions are possible</li>
                    <li>Sensors determine what information is available</li>
                    <li>The same PEAS framework applies to any agent, from robots to software</li>
                </ul>
            </div>

            <div className="content-image-container">
                <div className="image-placeholder">
                    <p className="image-placeholder-text">
                        📷 <strong>Image Suggestion:</strong> peas-framework-diagram.png<br />
                        A diagram showing an agent in the center with arrows connecting to Performance, Environment, Actuators, and Sensors
                    </p>
                </div>
            </div>
        </div>
    ),

    // Task Environment Properties
    taskEnvironment: (
        <div>
            <h1>Properties of Task Environments</h1>

            <p>
                Different environments have different characteristics that significantly affect
                how we design agents. Understanding these properties helps us choose appropriate
                algorithms and architectures.
            </p>

            <h2>Key Environment Properties</h2>

            <h3>1. Fully Observable vs. Partially Observable</h3>

            <div className="definition-list">
                <div className="definition-item">
                    <dt>Fully Observable</dt>
                    <dd>
                        The agent's sensors give it access to the complete state of the environment
                        at each point in time. The agent doesn't need to maintain any internal state
                        to keep track of the world.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Partially Observable</dt>
                    <dd>
                        The agent cannot see the complete state—sensors may be limited, noisy, or
                        inaccurate. The agent must maintain beliefs about the unobserved aspects.
                    </dd>
                </div>
            </div>

            <div className="example-box">
                <h4>🌍 Real-World Examples</h4>
                <ul>
                    <li><strong>Chess (Fully Observable):</strong> Both players can see all pieces on the board</li>
                    <li><strong>Poker (Partially Observable):</strong> Players cannot see opponents' cards</li>
                    <li><strong>Self-driving car (Partially Observable):</strong> Cannot see around corners, behind obstacles, or predict other drivers' intentions</li>
                </ul>
            </div>

            <h3>2. Deterministic vs. Stochastic</h3>

            <div className="definition-list">
                <div className="definition-item">
                    <dt>Deterministic</dt>
                    <dd>
                        The next state of the environment is completely determined by the current
                        state and the agent's action. No randomness or uncertainty.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Stochastic</dt>
                    <dd>
                        There is randomness involved—the same action in the same state may lead
                        to different outcomes. The agent must reason about probabilities.
                    </dd>
                </div>
            </div>

            <div className="example-box">
                <h4>🌍 Real-World Examples</h4>
                <ul>
                    <li><strong>Rubik's Cube (Deterministic):</strong> Each move has a predictable outcome</li>
                    <li><strong>Dice Games (Stochastic):</strong> Random outcomes from dice rolls</li>
                    <li><strong>Stock Trading (Stochastic):</strong> Market movements are unpredictable</li>
                </ul>
            </div>

            <div className="note-box">
                <h4>💡 Strategic vs. Stochastic</h4>
                <p>
                    If an environment is deterministic except for the actions of other agents,
                    we call it <strong>strategic</strong>. Game theory is relevant for such environments.
                </p>
            </div>

            <h3>3. Episodic vs. Sequential</h3>

            <div className="definition-list">
                <div className="definition-item">
                    <dt>Episodic</dt>
                    <dd>
                        The agent's experience is divided into independent episodes. Each episode
                        consists of perceiving and acting, and the action in one episode doesn't
                        affect future episodes.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Sequential</dt>
                    <dd>
                        Current decisions affect future decisions. The agent must think ahead and
                        consider the long-term consequences of its actions.
                    </dd>
                </div>
            </div>

            <div className="example-box">
                <h4>🌍 Real-World Examples</h4>
                <ul>
                    <li><strong>Image Classification (Episodic):</strong> Classifying one image doesn't affect the next</li>
                    <li><strong>Spam Detection (Episodic):</strong> Each email is classified independently</li>
                    <li><strong>Chess (Sequential):</strong> Each move affects the entire game</li>
                    <li><strong>Investment (Sequential):</strong> Today's decisions affect tomorrow's options</li>
                </ul>
            </div>

            <h3>4. Static vs. Dynamic</h3>

            <div className="definition-list">
                <div className="definition-item">
                    <dt>Static</dt>
                    <dd>
                        The environment doesn't change while the agent is deliberating. The agent
                        can take as much time as needed to decide without worrying about the world
                        changing.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Dynamic</dt>
                    <dd>
                        The environment can change while the agent is thinking. Time matters—slow
                        decisions may become irrelevant or harmful.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Semi-Dynamic</dt>
                    <dd>
                        The environment doesn't change, but the agent's performance score does
                        (e.g., time-based scoring in games).
                    </dd>
                </div>
            </div>

            <div className="example-box">
                <h4>🌍 Real-World Examples</h4>
                <ul>
                    <li><strong>Crossword Puzzle (Static):</strong> The puzzle doesn't change while you think</li>
                    <li><strong>Real-time Strategy Game (Dynamic):</strong> Opponents act while you plan</li>
                    <li><strong>Chess with Clock (Semi-Dynamic):</strong> Position is static, but time is limited</li>
                    <li><strong>Autonomous Driving (Dynamic):</strong> Traffic constantly changes</li>
                </ul>
            </div>

            <h3>5. Discrete vs. Continuous</h3>

            <div className="definition-list">
                <div className="definition-item">
                    <dt>Discrete</dt>
                    <dd>
                        There are a finite number of distinct states, percepts, and actions.
                        Countable and well-defined.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Continuous</dt>
                    <dd>
                        States, time, percepts, and/or actions vary continuously (real-valued).
                        Infinite possible values.
                    </dd>
                </div>
            </div>

            <div className="example-box">
                <h4>🌍 Real-World Examples</h4>
                <ul>
                    <li><strong>Chess (Discrete):</strong> Finite board positions and legal moves</li>
                    <li><strong>Robot Navigation (Continuous):</strong> Position in space is continuous</li>
                    <li><strong>Temperature Control (Continuous):</strong> Temperature and settings are continuous</li>
                </ul>
            </div>

            <h3>6. Single Agent vs. Multi-Agent</h3>

            <div className="definition-list">
                <div className="definition-item">
                    <dt>Single Agent</dt>
                    <dd>
                        Only one agent operates in the environment. No need to model other agents'
                        behavior.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Multi-Agent</dt>
                    <dd>
                        Multiple agents interact in the same environment. These can be cooperative,
                        competitive, or a mix of both.
                    </dd>
                </div>
            </div>

            <div className="example-box">
                <h4>🌍 Real-World Examples</h4>
                <ul>
                    <li><strong>Crossword (Single):</strong> Just you and the puzzle</li>
                    <li><strong>Chess (Multi-Agent, Competitive):</strong> Two players competing</li>
                    <li><strong>Warehouse Robots (Multi-Agent, Cooperative):</strong> Robots coordinate to fulfill orders</li>
                    <li><strong>Traffic (Multi-Agent, Mixed):</strong> Drivers are partly cooperative, partly competitive</li>
                </ul>
            </div>

            <h3>7. Known vs. Unknown</h3>

            <div className="definition-list">
                <div className="definition-item">
                    <dt>Known</dt>
                    <dd>
                        The agent understands the laws governing the environment—it knows the
                        outcomes (or probabilities of outcomes) of all actions.
                    </dd>
                </div>

                <div className="definition-item">
                    <dt>Unknown</dt>
                    <dd>
                        The agent must learn how the environment works through experience.
                    </dd>
                </div>
            </div>

            <h2>Environment Classification Summary</h2>

            <div className="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Environment</th>
                            <th>Observable</th>
                            <th>Deterministic</th>
                            <th>Episodic</th>
                            <th>Static</th>
                            <th>Discrete</th>
                            <th>Agents</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chess</td>
                            <td>Full</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>Semi</td>
                            <td>Yes</td>
                            <td>Multi</td>
                        </tr>
                        <tr>
                            <td>Poker</td>
                            <td>Partial</td>
                            <td>No</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td>Multi</td>
                        </tr>
                        <tr>
                            <td>Self-Driving</td>
                            <td>Partial</td>
                            <td>No</td>
                            <td>No</td>
                            <td>No</td>
                            <td>No</td>
                            <td>Multi</td>
                        </tr>
                        <tr>
                            <td>Spam Filter</td>
                            <td>Full</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td>Single</td>
                        </tr>
                        <tr>
                            <td>Medical Diagnosis</td>
                            <td>Partial</td>
                            <td>No</td>
                            <td>No</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>Single</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="warning-box">
                <h4>⚠️ The Hardest Environments</h4>
                <p>
                    The most challenging environments are: <strong>partially observable, stochastic,
                        sequential, dynamic, continuous, and multi-agent</strong>. Real-world problems
                    like autonomous driving fall into this category, which is why they're so difficult!
                </p>
            </div>

            <div className="code-example">
                <div className="code-example-header">
                    <span className="code-example-title">Environment Classification (Python)</span>
                </div>
                <pre><code>{`class EnvironmentProperties:
    """Classify an environment's properties"""
    
    def __init__(self, name):
        self.name = name
        self.properties = {}
    
    def set_observability(self, full=False, partial=False):
        self.properties['observable'] = 'full' if full else 'partial'
    
    def set_determinism(self, deterministic=False, stochastic=False):
        self.properties['determinism'] = 'deterministic' if deterministic else 'stochastic'
    
    def set_episode_type(self, episodic=False, sequential=False):
        self.properties['episode'] = 'episodic' if episodic else 'sequential'
    
    def set_dynamics(self, static=False, dynamic=False):
        self.properties['dynamics'] = 'static' if static else 'dynamic'
    
    def set_discreteness(self, discrete=False, continuous=False):
        self.properties['discreteness'] = 'discrete' if discrete else 'continuous'
    
    def set_agents(self, single=False, multi=False):
        self.properties['agents'] = 'single' if single else 'multi'
    
    def get_difficulty(self):
        """Higher score = more difficult environment"""
        difficulty = 0
        if self.properties.get('observable') == 'partial':
            difficulty += 1
        if self.properties.get('determinism') == 'stochastic':
            difficulty += 1
        if self.properties.get('episode') == 'sequential':
            difficulty += 1
        if self.properties.get('dynamics') == 'dynamic':
            difficulty += 1
        if self.properties.get('discreteness') == 'continuous':
            difficulty += 1
        if self.properties.get('agents') == 'multi':
            difficulty += 1
        return difficulty

# Example: Classify autonomous driving
driving = EnvironmentProperties("Autonomous Driving")
driving.set_observability(partial=True)
driving.set_determinism(stochastic=True)
driving.set_episode_type(sequential=True)
driving.set_dynamics(dynamic=True)
driving.set_discreteness(continuous=True)
driving.set_agents(multi=True)

print(f"Difficulty score: {driving.get_difficulty()}/6")  # Output: 6/6`}</code></pre>
            </div>

            <div className="key-points">
                <h3>📝 Key Takeaways</h3>
                <ul>
                    <li>Environment properties determine the appropriate agent design</li>
                    <li>Fully observable environments are easier—no need to track hidden state</li>
                    <li>Deterministic environments allow perfect prediction</li>
                    <li>Sequential environments require planning and foresight</li>
                    <li>Dynamic environments require quick decision-making</li>
                    <li>Real-world problems typically combine multiple difficult properties</li>
                </ul>
            </div>

            <div className="content-image-container">
                <div className="image-placeholder">
                    <p className="image-placeholder-text">
                        📷 <strong>Image Suggestion:</strong> environment-properties-spectrum.png<br />
                        A visual spectrum showing easy (left) to hard (right) environment properties
                    </p>
                </div>
            </div>
        </div>
    ),

    // Structure of Agents
    agentStructure: (
        <div>
            <h1>Structure of Agents</h1>

            <p>
                An agent consists of two main components: the <strong>architecture</strong> (the
                physical or software platform) and the <strong>agent program</strong> (the code
                that implements the agent function).
            </p>

            <div className="info-box">
                <h4>📌 The Agent Equation</h4>
                <p>
                    <strong>Agent = Architecture + Program</strong><br />
                    The architecture provides sensors and actuators; the program decides what to do.
                </p>
            </div>

            <h2>Agent Architecture</h2>

            <p>
                The architecture is the computing device with sensors and actuators on which
                the agent program runs. This could be:
            </p>

            <ul>
                <li>A physical robot with cameras, motors, and grippers</li>
                <li>A computer with input/output capabilities</li>
                <li>A specialized hardware system</li>
                <li>A virtual environment interface</li>
            </ul>

            <h2>Agent Program</h2>

            <p>
                The agent program is a function that takes the current percept as input and
                returns an action. The simplest form looks like:
            </p>

            <div className="code-example">
                <div className="code-example-header">
                    <span className="code-example-title">Basic Agent Program Structure</span>
                </div>
                <pre><code>{`function AGENT-PROGRAM(percept) returns action
    static: memory  // agent's memory of past events
    
    memory ← UPDATE-MEMORY(memory, percept)
    action ← CHOOSE-ACTION(memory)
    memory ← UPDATE-MEMORY(memory, action)
    
    return action`}</code></pre>
            </div>

            <h2>The Skeleton Agent</h2>

            <p>
                In Python, we can implement a generic agent structure:
            </p>

            <div className="code-example">
                <div className="code-example-header">
                    <span className="code-example-title">Generic Agent Class (Python)</span>
                </div>
                <pre><code>{`class Agent:
    """Generic agent class that serves as a template"""
    
    def __init__(self, program=None):
        """Initialize agent with an optional program function"""
        self.alive = True
        self.performance = 0
        
        if program is None:
            # Default: random action selection
            def default_program(percept):
                return input(f"Percept={percept}; action? ")
            self.program = default_program
        else:
            self.program = program
    
    def __call__(self, percept):
        """Execute agent program given a percept"""
        return self.program(percept)


class Environment:
    """Base class for environments"""
    
    def __init__(self):
        self.agents = []
        self.things = []
    
    def add_agent(self, agent, location=None):
        """Add an agent to the environment"""
        self.agents.append(agent)
    
    def percept(self, agent):
        """Return the percept that the agent sees at this point"""
        raise NotImplementedError
    
    def execute_action(self, agent, action):
        """Change the environment based on agent's action"""
        raise NotImplementedError
    
    def step(self):
        """Run one step of the environment"""
        for agent in self.agents:
            if agent.alive:
                percept = self.percept(agent)
                action = agent(percept)
                self.execute_action(agent, action)
    
    def run(self, steps=1000):
        """Run the environment for given number of steps"""
        for step in range(steps):
            if self.is_done():
                break
            self.step()
    
    def is_done(self):
        """Check if environment should stop"""
        return not any(agent.alive for agent in self.agents)`}</code></pre>
            </div>

            <h2>The Vacuum World Example</h2>

            <p>
                Let's implement a simple vacuum cleaner agent to understand the structure better:
            </p>

            <div className="code-example">
                <div className="code-example-header">
                    <span className="code-example-title">Vacuum World Implementation (Python)</span>
                </div>
                <pre><code>{`class VacuumEnvironment:
    """A simple two-location vacuum world"""
    
    def __init__(self):
        # Two locations: A (left) and B (right)
        # Each can be Clean or Dirty
        self.status = {
            'A': 'Dirty',
            'B': 'Dirty'
        }
        self.agent_location = 'A'
    
    def get_percept(self):
        """Return current location and status"""
        location = self.agent_location
        status = self.status[location]
        return (location, status)
    
    def execute_action(self, action):
        """Execute the agent's action"""
        if action == 'Suck':
            self.status[self.agent_location] = 'Clean'
        elif action == 'Right' and self.agent_location == 'A':
            self.agent_location = 'B'
        elif action == 'Left' and self.agent_location == 'B':
            self.agent_location = 'A'
        # 'NoOp' does nothing
    
    def is_clean(self):
        """Check if both locations are clean"""
        return all(s == 'Clean' for s in self.status.values())


def simple_vacuum_agent(percept):
    """Simple reflex agent for vacuum world"""
    location, status = percept
    
    if status == 'Dirty':
        return 'Suck'
    elif location == 'A':
        return 'Right'
    else:
        return 'Left'


# Run the vacuum agent
env = VacuumEnvironment()
print(f"Initial state: {env.status}, Agent at: {env.agent_location}")

for step in range(5):
    percept = env.get_percept()
    action = simple_vacuum_agent(percept)
    print(f"Step {step+1}: Percept={percept}, Action={action}")
    env.execute_action(action)
    print(f"  New state: {env.status}, Agent at: {env.agent_location}")
    
    if env.is_clean():
        print("Environment is clean!")
        break`}</code></pre>
            </div>

            <div className="example-box">
                <h4>🌍 Understanding the Vacuum World</h4>
                <p>
                    This simple example demonstrates key concepts:
                </p>
                <ul>
                    <li>The <strong>environment</strong> has state (dirt in locations A and B)</li>
                    <li>The <strong>agent</strong> perceives its location and whether it's dirty</li>
                    <li>The <strong>actions</strong> are: Suck, Left, Right, NoOp</li>
                    <li>The <strong>goal</strong> (performance measure) is to clean both locations</li>
                </ul>
            </div>

            <h2>Agent Program Types</h2>

            <p>
                Agent programs can be organized into four basic types, ranging from simple to complex:
            </p>

            <ol>
                <li><strong>Simple Reflex Agents:</strong> React directly to current percept</li>
                <li><strong>Model-Based Reflex Agents:</strong> Maintain internal state</li>
                <li><strong>Goal-Based Agents:</strong> Plan to achieve goals</li>
                <li><strong>Utility-Based Agents:</strong> Maximize expected utility</li>
            </ol>

            <p>
                These are covered in detail in the "Types of Agents" section.
            </p>

            <div className="key-points">
                <h3>📝 Key Takeaways</h3>
                <ul>
                    <li>An agent consists of architecture (platform) and program (decision logic)</li>
                    <li>The agent program maps percepts to actions</li>
                    <li>Simple agents can be represented as lookup tables</li>
                    <li>Real agents need more sophisticated approaches due to state space size</li>
                    <li>The vacuum world is a classic example for understanding agent concepts</li>
                </ul>
            </div>

            <div className="content-image-container">
                <div className="image-placeholder">
                    <p className="image-placeholder-text">
                        📷 <strong>Image Suggestion:</strong> agent-structure-diagram.png<br />
                        A diagram showing Agent = Architecture (sensors, actuators) + Program (decision logic)
                    </p>
                </div>
            </div>
        </div>
    ),

    // Types of Agents
    agentTypes: (
        <div>
            <h1>Types of Agents</h1>

            <p>
                Agents can be grouped into four main types based on how they process information
                and make decisions. Each type represents an increasingly sophisticated approach
                to intelligence.
            </p>

            <h2>1. Simple Reflex Agents</h2>

            <p>
                The simplest type of agent. It selects actions based only on the <strong>current
                    percept</strong>, ignoring the rest of the percept history.
            </p>

            <div className="info-box">
                <h4>📌 How It Works</h4>
                <p>
                    Simple reflex agents use <strong>condition-action rules</strong> (also called
                    if-then rules or productions): "If condition, then action."
                </p>
            </div>

            <div className="code-example">
                <div className="code-example-header">
                    <span className="code-example-title">Simple Reflex Agent</span>
                </div>
                <pre><code>{`function SIMPLE-REFLEX-AGENT(percept) returns action
    static: rules  // a set of condition-action rules
    
    state ← INTERPRET-INPUT(percept)
    rule ← RULE-MATCH(state, rules)
    action ← rule.ACTION
    
    return action`}</code></pre>
            </div>

            <div className="code-example">
                <div className="code-example-header">
                    <span className="code-example-title">Python Implementation</span>
                </div>
                <pre><code>{`class SimpleReflexAgent:
    """Agent that acts based on current percept only"""
    
    def __init__(self):
        # Condition-action rules
        self.rules = [
            {'condition': lambda p: p['temperature'] > 30, 
             'action': 'turn_on_ac'},
            {'condition': lambda p: p['temperature'] < 18, 
             'action': 'turn_on_heater'},
            {'condition': lambda p: p['light_level'] < 50, 
             'action': 'turn_on_lights'},
            {'condition': lambda p: True,  # Default rule
             'action': 'do_nothing'}
        ]
    
    def act(self, percept):
        """Match percept to rules and return action"""
        for rule in self.rules:
            if rule['condition'](percept):
                return rule['action']
        return 'do_nothing'

# Example usage
agent = SimpleReflexAgent()
print(agent.act({'temperature': 35, 'light_level': 80}))  # turn_on_ac
print(agent.act({'temperature': 22, 'light_level': 30}))  # turn_on_lights`}</code></pre>
            </div>

            <h3>Advantages and Limitations</h3>

            <div className="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Advantages</th>
                            <th>Limitations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Very simple to implement</td>
                            <td>Only works in fully observable environments</td>
                        </tr>
                        <tr>
                            <td>Fast decision-making</td>
                            <td>No memory of past percepts</td>
                        </tr>
                        <tr>
                            <td>Works well for simple tasks</td>
                            <td>Cannot handle hidden state</td>
                        </tr>
                        <tr>
                            <td>Easy to understand and debug</td>
                            <td>Can get stuck in infinite loops</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="example-box">
                <h4>🌍 Real-World Examples</h4>
                <ul>
                    <li><strong>Thermostat:</strong> If temperature > threshold, turn on cooling</li>
                    <li><strong>Automatic door:</strong> If motion detected, open door</li>
                    <li><strong>Simple email filter:</strong> If contains "spam keywords", mark as spam</li>
                </ul>
            </div>

            <h2>2. Model-Based Reflex Agents</h2>

            <p>
                These agents maintain an <strong>internal state</strong> that tracks aspects of
                the world that cannot be directly observed. This allows them to work in partially
                observable environments.
            </p>

            <div className="info-box">
                <h4>📌 The Internal Model</h4>
                <p>
                    The agent needs two types of knowledge:
                </p>
                <ul>
                    <li><strong>Transition model:</strong> How the world evolves independently and based on agent actions</li>
                    <li><strong>Sensor model:</strong> How the state of the world is reflected in the agent's percepts</li>
                </ul>
            </div>

            <div className="code-example">
                <div className="code-example-header">
                    <span className="code-example-title">Model-Based Reflex Agent</span>
                </div>
                <pre><code>{`function MODEL-BASED-REFLEX-AGENT(percept) returns action
    static: 
        state        // current conception of the world state
        model        // how the world evolves and how actions affect it
        rules        // condition-action rules
        action       // the most recent action
    
    state ← UPDATE-STATE(state, action, percept, model)
    rule ← RULE-MATCH(state, rules)
    action ← rule.ACTION
    
    return action`}</code></pre>
            </div>

            <div className="code-example">
                <div className="code-example-header">
                    <span className="code-example-title">Python Implementation</span>
                </div>
                <pre><code>{`class ModelBasedReflexAgent:
    """Agent that maintains internal state about the world"""
    
    def __init__(self):
        # Internal state - what the agent believes about the world
        self.state = {
            'rooms_visited': set(),
            'dirty_rooms': set(),
            'current_location': None,
            'last_action': None
        }
    
    def update_state(self, percept):
        """Update internal state based on percept and last action"""
        location = percept['location']
        is_dirty = percept['dirty']
        
        # Update current location
        self.state['current_location'] = location
        self.state['rooms_visited'].add(location)
        
        # Update dirty room knowledge
        if is_dirty:
            self.state['dirty_rooms'].add(location)
        else:
            self.state['dirty_rooms'].discard(location)
    
    def act(self, percept):
        """Decide action based on updated state"""
        self.update_state(percept)
        
        location = self.state['current_location']
        
        # If current room is dirty, clean it
        if location in self.state['dirty_rooms']:
            self.state['last_action'] = 'Suck'
            return 'Suck'
        
        # Move to unexplored or dirty rooms
        if location == 'A':
            if 'B' not in self.state['rooms_visited'] or 'B' in self.state['dirty_rooms']:
                self.state['last_action'] = 'Right'
                return 'Right'
        else:
            if 'A' not in self.state['rooms_visited'] or 'A' in self.state['dirty_rooms']:
                self.state['last_action'] = 'Left'
                return 'Left'
        
        self.state['last_action'] = 'NoOp'
        return 'NoOp'  # All rooms clean

# Example
agent = ModelBasedReflexAgent()
print(agent.act({'location': 'A', 'dirty': True}))   # Suck
print(agent.act({'location': 'A', 'dirty': False}))  # Right`}</code></pre>
            </div>

            <div className="example-box">
                <h4>🌍 Real-World Examples</h4>
                <ul>
                    <li><strong>Robot vacuum:</strong> Remembers which areas have been cleaned</li>
                    <li><strong>Video game AI:</strong> Tracks player's last known position</li>
                    <li><strong>Traffic light controller:</strong> Remembers which directions have waited longest</li>
                </ul>
            </div>

            <h2>3. Goal-Based Agents</h2>

            <p>
                Goal-based agents go beyond reacting to the current situation. They consider
                <strong>future consequences</strong> of their actions and choose actions that
                achieve their goals.
            </p>

            <div className="info-box">
                <h4>📌 Search and Planning</h4>
                <p>
                    Goal-based agents need to <strong>search</strong> through possible action sequences
                    and <strong>plan</strong> ahead to find paths to the goal. This involves techniques
                    you'll learn in "Problem Solving by Searching."
                </p>
            </div>

            <div className="code-example">
                <div className="code-example-header">
                    <span className="code-example-title">Goal-Based Agent Concept</span>
                </div>
                <pre><code>{`class GoalBasedAgent:
    """Agent that plans actions to achieve goals"""
    
    def __init__(self, goals):
        self.state = {}
        self.goals = goals
        self.plan = []
    
    def update_state(self, percept):
        """Update internal world model"""
        # Update based on percept
        pass
    
    def formulate_goal(self):
        """Determine what goal to pursue"""
        # Could be based on current state and priorities
        return self.goals[0] if self.goals else None
    
    def formulate_problem(self, goal):
        """Create a problem representation for the goal"""
        # Define initial state, goal test, actions, transition model
        return {
            'initial': self.state,
            'goal': goal,
            'actions': self.get_possible_actions(),
            'transition': self.transition_model
        }
    
    def search(self, problem):
        """Find a sequence of actions to achieve the goal"""
        # Implement search algorithm (BFS, DFS, A*, etc.)
        # Returns a plan (sequence of actions)
        pass
    
    def act(self, percept):
        """Execute the next action in the plan"""
        self.update_state(percept)
        
        # Re-plan if needed
        if not self.plan:
            goal = self.formulate_goal()
            if goal:
                problem = self.formulate_problem(goal)
                self.plan = self.search(problem)
        
        # Execute next step in plan
        if self.plan:
            return self.plan.pop(0)
        return 'NoOp'`}</code></pre>
            </div>

            <h3>Advantages Over Reflex Agents</h3>
            <ul>
                <li><strong>Flexibility:</strong> The goal can change without rewriting rules</li>
                <li><strong>Reasoning:</strong> Can figure out how to achieve goals in new situations</li>
                <li><strong>Optimality:</strong> Can find optimal paths to goals</li>
            </ul>

            <div className="example-box">
                <h4>🌍 Real-World Examples</h4>
                <ul>
                    <li><strong>GPS Navigation:</strong> Plans route to reach destination</li>
                    <li><strong>Chess engine:</strong> Plans moves to checkmate opponent</li>
                    <li><strong>Robot arm:</strong> Plans movements to pick up objects</li>
                    <li><strong>Delivery drone:</strong> Plans flight path considering obstacles</li>
                </ul>
            </div>

            <h2>4. Utility-Based Agents</h2>

            <p>
                Utility-based agents go beyond achieving goals—they consider <strong>how
                    well</strong> they achieve them. They use a <strong>utility function</strong>
                that measures the "happiness" or "desirability" of states.
            </p>

            <div className="info-box">
                <h4>📌 Why Utility?</h4>
                <p>
                    <strong>Goals</strong> are binary (achieved or not), but some outcomes are
                    better than others. <strong>Utility</strong> provides a way to compare
                    different outcomes and handle:
                </p>
                <ul>
                    <li>Conflicting goals (can't achieve all)</li>
                    <li>Uncertain outcomes (probability of success)</li>
                    <li>Trade-offs between goals</li>
                </ul>
            </div>

            <div className="code-example">
                <div className="code-example-header">
                    <span className="code-example-title">Utility-Based Agent</span>
                </div>
                <pre><code>{`class UtilityBasedAgent:
    """Agent that maximizes expected utility"""
    
    def __init__(self):
        self.state = {}
    
    def utility(self, state):
        """
        Calculate utility (happiness) of a state.
        Higher values are more desirable.
        """
        utility_value = 0
        
        # Example: Taxi agent utility function
        utility_value += state.get('passenger_delivered', 0) * 100
        utility_value -= state.get('fuel_used', 0) * 0.5
        utility_value -= state.get('time_taken', 0) * 1
        utility_value -= state.get('traffic_violations', 0) * 50
        utility_value += state.get('passenger_comfort', 5) * 10
        
        return utility_value
    
    def expected_utility(self, action, state):
        """Calculate expected utility of taking an action"""
        # Consider all possible outcomes and their probabilities
        total_utility = 0
        
        outcomes = self.get_possible_outcomes(action, state)
        for outcome_state, probability in outcomes:
            total_utility += probability * self.utility(outcome_state)
        
        return total_utility
    
    def act(self, percept):
        """Choose action that maximizes expected utility"""
        self.update_state(percept)
        
        best_action = None
        best_utility = float('-inf')
        
        for action in self.get_possible_actions():
            eu = self.expected_utility(action, self.state)
            if eu > best_utility:
                best_utility = eu
                best_action = action
        
        return best_action`}</code></pre>
            </div>

            <h3>Utility Under Uncertainty</h3>

            <p>
                When outcomes are uncertain, the agent chooses actions that maximize
                <strong>expected utility</strong>:
            </p>

            <pre><code>{`Expected Utility(action) = Σ P(outcome | action) × U(outcome)

Where:
  P(outcome | action) = probability of outcome given action
  U(outcome) = utility of that outcome`}</code></pre>

            <div className="example-box">
                <h4>🌍 Real-World Examples</h4>
                <ul>
                    <li><strong>Investment AI:</strong> Balances risk vs. return for maximum expected profit</li>
                    <li><strong>Medical treatment:</strong> Considers treatment effectiveness, side effects, cost</li>
                    <li><strong>Autonomous taxi:</strong> Balances speed, safety, fuel efficiency, comfort</li>
                    <li><strong>Recommendation system:</strong> Maximizes user satisfaction metrics</li>
                </ul>
            </div>

            <h2>Comparison of Agent Types</h2>

            <div className="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Agent Type</th>
                            <th>Uses</th>
                            <th>Best For</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Simple Reflex</td>
                            <td>Current percept only</td>
                            <td>Fully observable, deterministic, simple tasks</td>
                        </tr>
                        <tr>
                            <td>Model-Based Reflex</td>
                            <td>Percept + Internal state</td>
                            <td>Partially observable environments</td>
                        </tr>
                        <tr>
                            <td>Goal-Based</td>
                            <td>State + Goals + Search</td>
                            <td>Complex tasks requiring planning</td>
                        </tr>
                        <tr>
                            <td>Utility-Based</td>
                            <td>State + Utility function</td>
                            <td>Uncertain outcomes, conflicting goals</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Learning Agents</h2>

            <p>
                Any of these agent types can be enhanced with <strong>learning capabilities</strong>.
                A learning agent has four main components:
            </p>

            <div className="definition-list">
                <div className="definition-item">
                    <dt>Learning Element</dt>
                    <dd>Responsible for making improvements based on feedback</dd>
                </div>

                <div className="definition-item">
                    <dt>Performance Element</dt>
                    <dd>Selects actions (this is what we've been calling the agent)</dd>
                </div>

                <div className="definition-item">
                    <dt>Critic</dt>
                    <dd>Provides feedback on how well the agent is doing</dd>
                </div>

                <div className="definition-item">
                    <dt>Problem Generator</dt>
                    <dd>Suggests exploratory actions that might lead to new experiences</dd>
                </div>
            </div>

            <div className="key-points">
                <h3>📝 Key Takeaways</h3>
                <ul>
                    <li><strong>Simple reflex agents</strong> react directly to percepts—fast but limited</li>
                    <li><strong>Model-based agents</strong> track unobservable state—handle partial observability</li>
                    <li><strong>Goal-based agents</strong> plan ahead to achieve objectives—more flexible</li>
                    <li><strong>Utility-based agents</strong> optimize for best outcomes—handle trade-offs</li>
                    <li>More sophisticated agents can handle more complex environments</li>
                    <li>Learning enables agents to improve over time</li>
                </ul>
            </div>

            <div className="content-image-container">
                <div className="image-placeholder">
                    <p className="image-placeholder-text">
                        📷 <strong>Image Suggestion:</strong> agent-types-hierarchy.png<br />
                        A diagram showing the progression from simple reflex to utility-based agents, with each layer adding complexity
                    </p>
                </div>
            </div>
        </div>
    )
}
