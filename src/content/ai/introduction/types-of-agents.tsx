// src/content/ai/introduction/types-of-agents.tsx
import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, CodeBlock, ImagePlaceholder } from '@/components/ContentDisplay';

export default function TypesOfAgents() {
    return (
        <div>
            <p>
                Not all intelligent agents are created equal. Based on how agents make decisions and
                process information, we can categorize them into different types. Each type represents
                a different level of sophistication, from simple stimulus-response systems to complex
                utility-maximizing agents. Understanding these types helps you choose the right
                approach for different AI problems.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "Four main types of agent architectures",
                    "Simple Reflex Agents — reactive, no memory",
                    "Model-Based Reflex Agents — agents that remember",
                    "Goal-Based Agents — agents that plan ahead",
                    "Utility-Based Agents — agents that optimize",
                    "Learning Agents — agents that improve over time",
                    "When to use each type of agent"
                ]}
            />

            <h2 id="overview">Overview of Agent Types</h2>

            <p>
                Agent architectures range from simple to complex:
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Agent Type</th>
                        <th>Key Feature</th>
                        <th>Complexity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Simple Reflex</strong></td>
                        <td>Condition-action rules only</td>
                        <td>★☆☆☆☆</td>
                    </tr>
                    <tr>
                        <td><strong>Model-Based Reflex</strong></td>
                        <td>Maintains internal state</td>
                        <td>★★☆☆☆</td>
                    </tr>
                    <tr>
                        <td><strong>Goal-Based</strong></td>
                        <td>Has explicit goals</td>
                        <td>★★★☆☆</td>
                    </tr>
                    <tr>
                        <td><strong>Utility-Based</strong></td>
                        <td>Optimizes happiness/utility</td>
                        <td>★★★★☆</td>
                    </tr>
                    <tr>
                        <td><strong>Learning</strong></td>
                        <td>Improves from experience</td>
                        <td>★★★★★</td>
                    </tr>
                </tbody>
            </table>

            <ImagePlaceholder
                name="agent-types-hierarchy"
                description="A diagram showing the hierarchy of agent types from simple to complex, with arrows showing increasing capability"
                suggestedSize="900x500"
            />

            <h2 id="simple-reflex">1. Simple Reflex Agents</h2>

            <p>
                The simplest type of agent. It selects actions based <strong>only on the current
                    percept</strong>, ignoring the rest of the percept history. It works on a simple
                <strong>condition-action rule</strong> (also called <em>if-then rules</em> or
                <em>production rules</em>).
            </p>

            <h3>How It Works</h3>
            <pre><code>{`IF condition THEN action

Example:
IF car_in_front_is_braking THEN apply_brakes
IF temperature > 30 THEN turn_on_AC
IF email_contains_spam_words THEN mark_as_spam`}</code></pre>

            <h3>Characteristics</h3>
            <ul>
                <li><strong>No memory</strong> — doesn't remember past percepts</li>
                <li><strong>No internal state</strong> — purely reactive</li>
                <li><strong>Works in fully observable environments</strong></li>
                <li><strong>Fast and simple</strong> — minimal computation</li>
            </ul>

            <ExampleBox title="Simple Reflex Agent: Vacuum Cleaner">
                <CodeBlock
                    language="python"
                    title="simple_reflex_vacuum.py"
                    code={`class SimpleReflexVacuumAgent:
    """
    A simple reflex agent for vacuum cleaning.
    
    Rules:
    1. If current location is dirty → Suck
    2. If in location A → Move Right  
    3. If in location B → Move Left
    """
    
    def __init__(self):
        # Note: No internal state or memory!
        pass
    
    def decide(self, percept):
        """
        Choose action based ONLY on current percept.
        No history, no planning, just reaction.
        """
        location, is_dirty = percept
        
        # Simple condition-action rules
        if is_dirty:
            return 'SUCK'
        elif location == 'A':
            return 'MOVE_RIGHT'
        elif location == 'B':
            return 'MOVE_LEFT'
    
    def run(self, environment):
        """One step of the agent"""
        # Perceive current state only
        location = environment.agent_location
        is_dirty = environment.is_dirty(location)
        percept = (location, is_dirty)
        
        # React based on rules
        action = self.decide(percept)
        
        # Execute action
        environment.execute(action)
        return action

# Simulation
def simulate_simple_reflex():
    # Environment: two locations, both initially dirty
    env = {'A': True, 'B': True, 'agent': 'A'}
    agent = SimpleReflexVacuumAgent()
    
    for step in range(4):
        location = env['agent']
        percept = (location, env[location])
        action = agent.decide(percept)
        
        if action == 'SUCK':
            env[location] = False
            print(f"Step {step+1}: At {location}, cleaned dirt")
        elif action == 'MOVE_RIGHT':
            env['agent'] = 'B'
            print(f"Step {step+1}: Moved to B")
        elif action == 'MOVE_LEFT':
            env['agent'] = 'A'
            print(f"Step {step+1}: Moved to A")
    
    print(f"Final state: {env}")

simulate_simple_reflex()
# Output:
# Step 1: At A, cleaned dirt
# Step 2: Moved to B  
# Step 3: At B, cleaned dirt
# Step 4: Moved to A`}
                />
            </ExampleBox>

            <InfoBox type="warning" title="Limitation: Infinite Loops">
                <p>
                    Simple reflex agents can get stuck in infinite loops in partially observable
                    environments. For example, if the vacuum can't see both locations, it might
                    keep moving back and forth without knowing if the other location is clean.
                </p>
                <p>
                    Solution: <strong>Randomization</strong> can help! Instead of always going right
                    when in A, randomly choose a direction to eventually cover all areas.
                </p>
            </InfoBox>

            <h3>When to Use Simple Reflex Agents</h3>
            <ul>
                <li>Fully observable environments</li>
                <li>Simple, well-defined problems</li>
                <li>When speed is critical</li>
                <li>When resources (memory/CPU) are limited</li>
            </ul>

            <ImagePlaceholder
                name="simple-reflex-agent-diagram"
                description="Diagram showing sensors → condition-action rules → actuators, with no memory component"
                suggestedSize="800x400"
            />

            <h2 id="model-based">2. Model-Based Reflex Agents</h2>

            <p>
                To handle <strong>partial observability</strong>, an agent needs <strong>internal
                    state</strong> — memory of things it can't currently see. A model-based reflex agent
                maintains a model of the world and updates it based on percepts.
            </p>

            <h3>Two Types of Knowledge</h3>
            <ol>
                <li><strong>Transition Model:</strong> How the world changes (with and without agent actions)</li>
                <li><strong>Sensor Model:</strong> How the agent's sensors reflect the world state</li>
            </ol>

            <ExampleBox title="Model-Based Reflex Agent: Smart Vacuum">
                <CodeBlock
                    language="python"
                    title="model_based_vacuum.py"
                    code={`class ModelBasedVacuumAgent:
    """
    Model-based reflex agent that remembers what it has cleaned.
    Works even in partially observable environments!
    """
    
    def __init__(self, locations):
        # INTERNAL STATE: Remember the world
        self.model = {loc: 'Unknown' for loc in locations}
        self.current_location = None
        self.locations = locations
    
    def update_state(self, percept, last_action):
        """
        Update internal model based on:
        1. What we just perceived
        2. What action we took (transition model)
        """
        location, is_dirty = percept
        self.current_location = location
        
        # Update model with new information
        self.model[location] = 'Dirty' if is_dirty else 'Clean'
        
        # If we just cleaned, update model
        if last_action == 'SUCK':
            self.model[location] = 'Clean'
    
    def decide(self, percept, last_action=None):
        """
        Choose action based on current percept AND internal state
        """
        # First, update our model of the world
        self.update_state(percept, last_action)
        
        location, is_dirty = percept
        
        # Rule 1: Clean if dirty
        if is_dirty:
            return 'SUCK'
        
        # Rule 2: Find unvisited or dirty locations
        for loc in self.locations:
            if self.model[loc] == 'Unknown' or self.model[loc] == 'Dirty':
                if loc != location:
                    # Move toward unknown/dirty location
                    if self.locations.index(loc) > self.locations.index(location):
                        return 'MOVE_RIGHT'
                    else:
                        return 'MOVE_LEFT'
        
        # Rule 3: Everything is clean and known!
        return 'NOTHING'  # Job done!
    
    def __str__(self):
        return f"Model: {self.model}, Location: {self.current_location}"

# Demonstration
def simulate_model_based():
    locations = ['A', 'B', 'C']  # Three locations now!
    agent = ModelBasedVacuumAgent(locations)
    
    # Environment (agent can only see current location)
    environment = {'A': True, 'B': False, 'C': True}
    current_loc = 'A'
    
    last_action = None
    for step in range(6):
        percept = (current_loc, environment[current_loc])
        action = agent.decide(percept, last_action)
        
        print(f"Step {step+1}: At {current_loc}, Action: {action}")
        print(f"  Agent's mental model: {agent.model}")
        
        # Execute action
        if action == 'SUCK':
            environment[current_loc] = False
        elif action == 'MOVE_RIGHT':
            idx = locations.index(current_loc)
            if idx < len(locations) - 1:
                current_loc = locations[idx + 1]
        elif action == 'MOVE_LEFT':
            idx = locations.index(current_loc)
            if idx > 0:
                current_loc = locations[idx - 1]
        
        last_action = action
        
        if action == 'NOTHING':
            print("All locations clean!")
            break

simulate_model_based()`}
                />
            </ExampleBox>

            <h3>Key Difference from Simple Reflex</h3>
            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Simple Reflex</th>
                        <th>Model-Based</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Memory</td>
                        <td>None</td>
                        <td>Has internal state</td>
                    </tr>
                    <tr>
                        <td>Handles partial observability</td>
                        <td>No</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Knowledge of world changes</td>
                        <td>No</td>
                        <td>Yes (transition model)</td>
                    </tr>
                    <tr>
                        <td>Complexity</td>
                        <td>Very low</td>
                        <td>Low-medium</td>
                    </tr>
                </tbody>
            </table>

            <ImagePlaceholder
                name="model-based-agent-diagram"
                description="Diagram showing sensors → state update (with internal model) → condition-action rules → actuators"
                suggestedSize="800x450"
            />

            <h2 id="goal-based">3. Goal-Based Agents</h2>

            <p>
                Knowing the current state isn't always enough. An agent sometimes needs to know
                <strong>where it wants to be</strong> — its <strong>goal</strong>. Goal-based agents
                consider future outcomes and select actions that will achieve their goals.
            </p>

            <h3>Key Characteristics</h3>
            <ul>
                <li><strong>Explicit goals:</strong> Desired states the agent wants to achieve</li>
                <li><strong>Search and planning:</strong> Considers sequences of actions</li>
                <li><strong>More flexible:</strong> Can adapt to different goals</li>
                <li><strong>Future-oriented:</strong> Thinks about consequences of actions</li>
            </ul>

            <ExampleBox title="Goal-Based Agent: Navigation">
                <CodeBlock
                    language="python"
                    title="goal_based_navigation.py"
                    code={`class GoalBasedNavigationAgent:
    """
    A goal-based agent that navigates a grid to reach a destination.
    Uses search/planning to find the optimal path.
    """
    
    def __init__(self, grid_size):
        self.grid_size = grid_size
        self.current_position = (0, 0)
        self.goal = None
        self.planned_path = []
    
    def set_goal(self, goal_position):
        """Set the destination"""
        self.goal = goal_position
        print(f"Goal set to: {self.goal}")
    
    def plan_path(self):
        """
        PLANNING: Find a path from current position to goal.
        Using simple Manhattan distance (could use A* for complex cases)
        """
        path = []
        current = self.current_position
        
        while current != self.goal:
            x, y = current
            goal_x, goal_y = self.goal
            
            # Move toward goal
            if x < goal_x:
                next_pos = (x + 1, y)
                action = 'MOVE_RIGHT'
            elif x > goal_x:
                next_pos = (x - 1, y)
                action = 'MOVE_LEFT'
            elif y < goal_y:
                next_pos = (x, y + 1)
                action = 'MOVE_UP'
            elif y > goal_y:
                next_pos = (x, y - 1)
                action = 'MOVE_DOWN'
            
            path.append((action, next_pos))
            current = next_pos
        
        self.planned_path = path
        print(f"Planned path: {[a for a, _ in path]}")
        return path
    
    def decide(self, percept):
        """
        If we have a plan, follow it. Otherwise, plan first.
        """
        self.current_position = percept['position']
        
        # Check if we've reached the goal
        if self.current_position == self.goal:
            return 'GOAL_REACHED'
        
        # If no plan exists, create one
        if not self.planned_path:
            self.plan_path()
        
        # Execute next action in plan
        if self.planned_path:
            action, _ = self.planned_path.pop(0)
            return action
        
        return 'NOTHING'

# Demonstration
def simulate_goal_based():
    agent = GoalBasedNavigationAgent(grid_size=(5, 5))
    agent.current_position = (0, 0)
    agent.set_goal((3, 2))  # Goal: position (3, 2)
    
    print(f"Starting at: {agent.current_position}")
    
    for step in range(10):
        percept = {'position': agent.current_position}
        action = agent.decide(percept)
        
        print(f"Step {step+1}: At {agent.current_position}, Action: {action}")
        
        if action == 'GOAL_REACHED':
            print("🎯 Goal achieved!")
            break
        
        # Simulate movement
        x, y = agent.current_position
        if action == 'MOVE_RIGHT': agent.current_position = (x+1, y)
        elif action == 'MOVE_LEFT': agent.current_position = (x-1, y)
        elif action == 'MOVE_UP': agent.current_position = (x, y+1)
        elif action == 'MOVE_DOWN': agent.current_position = (x, y-1)

simulate_goal_based()

# Output:
# Goal set to: (3, 2)
# Starting at: (0, 0)
# Planned path: ['MOVE_RIGHT', 'MOVE_RIGHT', 'MOVE_RIGHT', 'MOVE_UP', 'MOVE_UP']
# Step 1: At (0, 0), Action: MOVE_RIGHT
# Step 2: At (1, 0), Action: MOVE_RIGHT
# Step 3: At (2, 0), Action: MOVE_RIGHT
# Step 4: At (3, 0), Action: MOVE_UP
# Step 5: At (3, 1), Action: MOVE_UP
# Step 6: At (3, 2), Action: GOAL_REACHED
# 🎯 Goal achieved!`}
                />
            </ExampleBox>

            <h3>Advantages of Goal-Based Agents</h3>
            <ul>
                <li><strong>Flexibility:</strong> Same agent can pursue different goals</li>
                <li><strong>Adaptability:</strong> Can replan if environment changes</li>
                <li><strong>Transparency:</strong> Easy to understand (it has a goal!)</li>
            </ul>

            <InfoBox type="note" title="Goal vs Decision">
                <p>
                    <strong>Reflex agents</strong> ask: "What do I do now?"<br />
                    <strong>Goal-based agents</strong> ask: "Where do I want to be, and how do I get there?"
                </p>
            </InfoBox>

            <ImagePlaceholder
                name="goal-based-agent-diagram"
                description="Diagram showing sensors → state → goal checking → search/planning → actuators"
                suggestedSize="800x450"
            />

            <h2 id="utility-based">4. Utility-Based Agents</h2>

            <p>
                Goals are binary (achieved or not achieved), but sometimes we need to compare
                <strong>how good</strong> different states are. A <strong>utility-based agent</strong>
                uses a <strong>utility function</strong> to measure how "happy" it would be in
                different states.
            </p>

            <h3>What is Utility?</h3>
            <p>
                <strong>Utility</strong> is a number that represents the desirability of a state.
                Higher utility = more desirable state.
            </p>

            <ul>
                <li>Allows comparison between different goals</li>
                <li>Handles trade-offs between conflicting objectives</li>
                <li>Deals with uncertainty through <strong>expected utility</strong></li>
            </ul>

            <ExampleBox title="Utility-Based Agent: Route Selection">
                <CodeBlock
                    language="python"
                    title="utility_based_route.py"
                    code={`class UtilityBasedRouteAgent:
    """
    A utility-based agent that chooses the best route considering
    multiple factors: time, cost, safety, comfort.
    """
    
    def __init__(self, weights):
        """
        weights: How much we value each factor
        Higher weight = more important
        """
        self.weights = weights  # e.g., {'time': 0.4, 'cost': 0.3, 'safety': 0.2, 'comfort': 0.1}
    
    def calculate_utility(self, route):
        """
        Calculate utility (happiness score) for a route.
        Utility is a weighted sum of normalized factors.
        """
        utility = 0
        
        # Normalize factors to 0-1 scale (lower time/cost is better)
        time_score = 1 - (route['time'] / 60)  # 60 min = 0, 0 min = 1
        cost_score = 1 - (route['cost'] / 50)  # $50 = 0, $0 = 1
        safety_score = route['safety'] / 10    # 10 = safest
        comfort_score = route['comfort'] / 10  # 10 = most comfortable
        
        utility += self.weights['time'] * time_score
        utility += self.weights['cost'] * cost_score
        utility += self.weights['safety'] * safety_score
        utility += self.weights['comfort'] * comfort_score
        
        return utility
    
    def decide(self, available_routes):
        """
        Choose the route that maximizes utility.
        """
        best_route = None
        best_utility = -float('inf')
        
        print("Evaluating routes:")
        for route in available_routes:
            utility = self.calculate_utility(route)
            print(f"  {route['name']}: utility = {utility:.3f}")
            
            if utility > best_utility:
                best_utility = utility
                best_route = route
        
        print(f"\\nChosen: {best_route['name']} (utility: {best_utility:.3f})")
        return best_route

# Demonstration
def simulate_utility_based():
    # Different user preferences
    business_weights = {'time': 0.6, 'cost': 0.1, 'safety': 0.2, 'comfort': 0.1}
    budget_weights = {'time': 0.2, 'cost': 0.5, 'safety': 0.2, 'comfort': 0.1}
    family_weights = {'time': 0.2, 'cost': 0.2, 'safety': 0.4, 'comfort': 0.2}
    
    routes = [
        {'name': 'Highway', 'time': 20, 'cost': 15, 'safety': 6, 'comfort': 4},
        {'name': 'Scenic', 'time': 45, 'cost': 10, 'safety': 8, 'comfort': 9},
        {'name': 'Express', 'time': 15, 'cost': 35, 'safety': 5, 'comfort': 3},
    ]
    
    print("=" * 50)
    print("BUSINESS TRAVELER (values time)")
    agent1 = UtilityBasedRouteAgent(business_weights)
    agent1.decide(routes)
    
    print("\\n" + "=" * 50)
    print("BUDGET TRAVELER (values cost)")
    agent2 = UtilityBasedRouteAgent(budget_weights)
    agent2.decide(routes)
    
    print("\\n" + "=" * 50)
    print("FAMILY TRIP (values safety)")
    agent3 = UtilityBasedRouteAgent(family_weights)
    agent3.decide(routes)

simulate_utility_based()

# Output shows how same agent with different utilities chooses different routes!`}
                />
            </ExampleBox>

            <h3>Utility vs Goals</h3>
            <table>
                <thead>
                    <tr>
                        <th>Aspect</th>
                        <th>Goal-Based</th>
                        <th>Utility-Based</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Success measure</td>
                        <td>Binary (achieved/not)</td>
                        <td>Continuous (how good)</td>
                    </tr>
                    <tr>
                        <td>Multiple objectives</td>
                        <td>Hard to handle</td>
                        <td>Natural trade-offs</td>
                    </tr>
                    <tr>
                        <td>Uncertainty</td>
                        <td>Limited handling</td>
                        <td>Expected utility</td>
                    </tr>
                    <tr>
                        <td>Computational cost</td>
                        <td>Lower</td>
                        <td>Higher</td>
                    </tr>
                </tbody>
            </table>

            <InfoBox type="highlight" title="Expected Utility">
                <p>
                    When outcomes are uncertain, utility-based agents calculate <strong>expected utility</strong>:
                </p>
                <pre><code>{`EU(Action) = Σ P(outcome) × U(outcome)

Example:
Action: Cross street
- 99% chance: arrive safely (utility = 10)  
- 1% chance: accident (utility = -1000)

EU = 0.99 × 10 + 0.01 × (-1000) = 9.9 - 10 = -0.1

This action has negative expected utility — don't do it!`}</code></pre>
            </InfoBox>

            <ImagePlaceholder
                name="utility-based-agent-diagram"
                description="Diagram showing sensors → state → utility function evaluation → action selection → actuators"
                suggestedSize="800x450"
            />

            <h2 id="learning-agents">5. Learning Agents</h2>

            <p>
                All previous agents have fixed behavior. A <strong>learning agent</strong> can
                improve its performance over time based on experience. This is the foundation of
                modern AI systems like ChatGPT, self-driving cars, and recommendation systems.
            </p>

            <h3>Components of a Learning Agent</h3>

            <table>
                <thead>
                    <tr>
                        <th>Component</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Performance Element</strong></td>
                        <td>What we've been calling the "agent" — selects actions</td>
                    </tr>
                    <tr>
                        <td><strong>Critic</strong></td>
                        <td>Evaluates how well the agent is doing based on performance standard</td>
                    </tr>
                    <tr>
                        <td><strong>Learning Element</strong></td>
                        <td>Modifies the performance element to improve</td>
                    </tr>
                    <tr>
                        <td><strong>Problem Generator</strong></td>
                        <td>Suggests exploratory actions for new experiences</td>
                    </tr>
                </tbody>
            </table>

            <ExampleBox title="Learning Agent: Adaptive Vacuum">
                <CodeBlock
                    language="python"
                    title="learning_vacuum.py"
                    code={`import random

class LearningVacuumAgent:
    """
    A vacuum agent that learns which areas get dirty more often
    and optimizes its cleaning pattern.
    """
    
    def __init__(self, locations):
        self.locations = locations
        self.current_location = locations[0]
        
        # Learning: Track how often each location gets dirty
        self.dirt_frequency = {loc: 0 for loc in locations}
        self.visit_count = {loc: 0 for loc in locations}
        
        # Learning rate
        self.exploration_rate = 0.2
    
    def update_learning(self, location, was_dirty):
        """CRITIC + LEARNING ELEMENT: Update knowledge"""
        self.visit_count[location] += 1
        if was_dirty:
            self.dirt_frequency[location] += 1
    
    def get_priority_score(self, location):
        """Higher score = should visit more often"""
        if self.visit_count[location] == 0:
            return 1.0  # Unexplored
        return self.dirt_frequency[location] / self.visit_count[location]
    
    def decide(self, percept):
        """
        PERFORMANCE ELEMENT with learning
        """
        location, is_dirty = percept
        self.current_location = location
        
        # Update learning
        self.update_learning(location, is_dirty)
        
        # If dirty, clean
        if is_dirty:
            return 'SUCK'
        
        # PROBLEM GENERATOR: Sometimes explore randomly
        if random.random() < self.exploration_rate:
            return random.choice(['MOVE_LEFT', 'MOVE_RIGHT'])
        
        # EXPLOIT: Go to location with highest dirt frequency
        priorities = [(self.get_priority_score(loc), loc) 
                     for loc in self.locations if loc != location]
        
        if priorities:
            _, best_location = max(priorities)
            if self.locations.index(best_location) > self.locations.index(location):
                return 'MOVE_RIGHT'
            return 'MOVE_LEFT'
        
        return 'NOTHING'

# Simulation showing learning
def simulate_learning_agent():
    locations = ['A', 'B', 'C', 'D']
    agent = LearningVacuumAgent(locations)
    
    # Environment: C gets dirty most often!
    def get_random_dirt():
        dirt = {loc: False for loc in locations}
        # C is dirty 50% of time, others only 10%
        for loc in locations:
            prob = 0.5 if loc == 'C' else 0.1
            if random.random() < prob:
                dirt[loc] = True
        return dirt
    
    print("Agent learning over 100 steps...")
    current_loc = 'A'
    
    for step in range(100):
        environment = get_random_dirt()
        percept = (current_loc, environment[current_loc])
        action = agent.decide(percept)
        
        # Execute action
        if action == 'SUCK':
            environment[current_loc] = False
        elif action == 'MOVE_RIGHT':
            idx = locations.index(current_loc)
            if idx < len(locations) - 1:
                current_loc = locations[idx + 1]
        elif action == 'MOVE_LEFT':
            idx = locations.index(current_loc)
            if idx > 0:
                current_loc = locations[idx - 1]
    
    print("\\nLearned dirt frequencies:")
    for loc in locations:
        freq = agent.get_priority_score(loc)
        print(f"  Location {loc}: {freq:.2%} dirty")
    print("\\nAgent learned that C is dirtiest and prioritizes it!")

simulate_learning_agent()`}
                />
            </ExampleBox>

            <ImagePlaceholder
                name="learning-agent-diagram"
                description="Diagram showing the four components: Performance element, Critic, Learning element, Problem generator, and their connections"
                suggestedSize="900x500"
            />

            <h2 id="comparison">Comparison of Agent Types</h2>

            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Memory</th>
                        <th>Goals</th>
                        <th>Planning</th>
                        <th>Learning</th>
                        <th>Best For</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Simple Reflex</td>
                        <td>❌</td>
                        <td>❌</td>
                        <td>❌</td>
                        <td>❌</td>
                        <td>Simple, fully observable tasks</td>
                    </tr>
                    <tr>
                        <td>Model-Based</td>
                        <td>✅</td>
                        <td>❌</td>
                        <td>❌</td>
                        <td>❌</td>
                        <td>Partially observable environments</td>
                    </tr>
                    <tr>
                        <td>Goal-Based</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>❌</td>
                        <td>Navigation, problem solving</td>
                    </tr>
                    <tr>
                        <td>Utility-Based</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>❌</td>
                        <td>Multi-objective optimization</td>
                    </tr>
                    <tr>
                        <td>Learning</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>Complex, unknown environments</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="summary">Summary</h2>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Simple Reflex: IF-THEN rules, no memory, works in fully observable environments",
                    "Model-Based: Maintains internal state, handles partial observability",
                    "Goal-Based: Has explicit goals, uses search and planning",
                    "Utility-Based: Uses utility function to compare states, handles trade-offs",
                    "Learning: Improves from experience, has critic and learning elements",
                    "More sophisticated agents are needed for more complex environments",
                    "Modern AI systems (like ChatGPT) are learning agents with all capabilities"
                ]}
            />

            <InfoBox type="tip" title="Congratulations!">
                <p>
                    You've completed <strong>Unit 1: Introduction to AI</strong>! You now understand:
                </p>
                <ul>
                    <li>What AI is and its foundations</li>
                    <li>The history and evolution of AI</li>
                    <li>How intelligent agents work</li>
                    <li>Different types of environments and agents</li>
                </ul>
                <p>
                    In <strong>Unit 2</strong>, we'll dive into <strong>Problem Solving by Searching</strong> —
                    learning algorithms like BFS, DFS, A*, and how agents find solutions to complex problems!
                </p>
            </InfoBox>
        </div>
    );
}
