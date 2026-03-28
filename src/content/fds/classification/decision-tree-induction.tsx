import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function DecisionTreeInduction() {
    return (
        <div>
            <p>
                A <strong>Decision Tree</strong> is one of the most intuitive classification algorithms —
                it works exactly like how you make decisions in real life! Think of the game
                <strong> "20 Questions"</strong>: you ask yes/no questions and narrow down possibilities.
                That's precisely how a Decision Tree classifies data.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "What is a Decision Tree?",
                    "How Decision Trees split data — Attribute Selection",
                    "Entropy and Information Gain — formulas & examples",
                    "Building a Decision Tree step-by-step",
                    "Advantages and Disadvantages"
                ]}
            />

            <h2 id="what-is-dt">What is a Decision Tree?</h2>
            <p>A tree-like structure where:</p>
            <ul>
                <li><strong>Internal Nodes:</strong> Test on an attribute (e.g., "Is Age &gt; 30?")</li>
                <li><strong>Branches:</strong> Outcomes of the test (Yes/No)</li>
                <li><strong>Leaf Nodes:</strong> Final class label (Approve/Reject)</li>
            </ul>

            <ImagePlaceholder
                name="DecisionTreeExample.png"
                description="A simple Decision Tree for loan approval: Root node 'Income?' with branches 'High' (leads to 'Approve' leaf), 'Medium' (leads to 'Credit Score?' node with branches 'Good'→'Approve' and 'Bad'→'Reject'), 'Low' (leads to 'Reject' leaf). Clean diagram."
                suggestedSize="700x450"
            />

            <h2 id="attribute-selection">How to Choose Which Attribute to Split On?</h2>
            <p>
                The key challenge: <strong>which attribute should be at the root?</strong> Which one
                separates the data best? We use <strong>Information Gain</strong> based on
                <strong> Entropy</strong> (from information theory).
            </p>

            <h3>Entropy — Measuring "Impurity"</h3>

            <InfoBox type="highlight" title="Entropy Formula">
                <p>
                    <strong>Entropy(S) = -Σ pᵢ × log₂(pᵢ)</strong>
                </p>
                <p>
                    Where pᵢ is the proportion of class i in the dataset S.
                </p>
                <ul>
                    <li><strong>Entropy = 0:</strong> Pure node — all samples belong to one class (perfect!)</li>
                    <li><strong>Entropy = 1:</strong> Maximum impurity — samples equally split between classes</li>
                </ul>
            </InfoBox>

            <ExampleBox title="Entropy Example">
                <p>A dataset of 14 students: 9 Pass, 5 Fail</p>
                <p><strong>Entropy(S)</strong> = -(9/14) × log₂(9/14) - (5/14) × log₂(5/14)</p>
                <p>= -(0.643 × -0.637) - (0.357 × -1.485)</p>
                <p>= 0.410 + 0.530 = <strong>0.940</strong></p>
                <p>💡 High entropy (close to 1) = data is mixed/impure</p>
            </ExampleBox>

            <h3>Information Gain — Choosing the Best Attribute</h3>

            <InfoBox type="highlight" title="Information Gain Formula">
                <p>
                    <strong>Gain(S, A) = Entropy(S) - Σ (|Sv|/|S|) × Entropy(Sv)</strong>
                </p>
                <p>
                    Where Sv is the subset of S for which attribute A has value v.
                </p>
                <p>
                    <strong>Choose the attribute with the HIGHEST Information Gain</strong> as the splitting attribute!
                </p>
            </InfoBox>

            <ExampleBox title="📝 Information Gain — Complete Example">
                <p><strong>Dataset:</strong> 14 records — Predict "Play Tennis?" based on Outlook, Temp, Humidity, Wind</p>
                <table>
                    <thead><tr><th>Outlook</th><th>Play Tennis?</th></tr></thead>
                    <tbody>
                        <tr><td>Sunny (5 records)</td><td>2 Yes, 3 No</td></tr>
                        <tr><td>Overcast (4 records)</td><td>4 Yes, 0 No</td></tr>
                        <tr><td>Rain (5 records)</td><td>3 Yes, 2 No</td></tr>
                    </tbody>
                </table>
                <p><strong>Entropy(S)</strong> = -(9/14)log₂(9/14) - (5/14)log₂(5/14) = <strong>0.940</strong></p>
                <p><strong>Entropy(Sunny)</strong> = -(2/5)log₂(2/5) - (3/5)log₂(3/5) = <strong>0.971</strong></p>
                <p><strong>Entropy(Overcast)</strong> = -(4/4)log₂(4/4) = <strong>0</strong> (pure!)</p>
                <p><strong>Entropy(Rain)</strong> = -(3/5)log₂(3/5) - (2/5)log₂(2/5) = <strong>0.971</strong></p>
                <p><strong>Gain(S, Outlook)</strong> = 0.940 - (5/14×0.971 + 4/14×0 + 5/14×0.971) = 0.940 - 0.694 = <strong>0.246</strong></p>
                <p>Calculate Gain for all attributes. If Outlook has the highest → it becomes the root!</p>
            </ExampleBox>

            <h2 id="pros-cons">Advantages and Disadvantages</h2>

            <table>
                <thead><tr><th>Advantages ✅</th><th>Disadvantages ❌</th></tr></thead>
                <tbody>
                    <tr><td>Easy to understand and visualize</td><td>Prone to overfitting (deep trees)</td></tr>
                    <tr><td>No need for data normalization</td><td>Small changes in data can change tree dramatically</td></tr>
                    <tr><td>Handles both numerical and categorical data</td><td>Biased towards attributes with many values</td></tr>
                    <tr><td>Fast prediction once tree is built</td><td>Cannot handle complex relationships well</td></tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Decision Tree splits data using attribute tests at each node",
                    "Entropy measures impurity (0 = pure, 1 = maximum impurity)",
                    "Information Gain = drop in entropy after splitting — higher is better",
                    "Always choose the attribute with highest Information Gain as root/split",
                    "Pruning helps prevent overfitting"
                ]}
            />
        </div>
    );
}
