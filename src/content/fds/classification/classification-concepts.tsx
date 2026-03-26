// src/content/fds/classification/classification-concepts.tsx
import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder, CodeBlock } from '@/components/ContentDisplay';

export default function ClassificationConcepts() {
    return (
        <div>
            <p>
                Every time Gmail moves an email to your spam folder, or a bank approves/rejects your loan
                application, or a doctor's AI system diagnoses a disease — <strong>Classification</strong> is
                at work! Classification is one of the most important and widely-used Data Mining techniques. It
                involves learning from past data to <strong>predict the category (class)</strong> of new,
                unseen data.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "What is Classification — Basic Concepts and Issues",
                    "Decision Tree Induction (ID3/C4.5) with worked examples",
                    "Bayesian Classification (Naïve Bayes) with examples",
                    "Rule-Based Classification",
                    "Lazy Learners — k-Nearest Neighbor (KNN) Algorithm",
                    "Prediction concepts",
                    "Evaluation Metrics: Accuracy, Precision, and Recall"
                ]}
            />

            <h2 id="what-is-classification">What is Classification?</h2>

            <p>
                <strong>Classification</strong> is a <strong>supervised learning</strong> technique where we build
                a model (classifier) from a <strong>training dataset</strong> (where the class label is known),
                and then use this model to <strong>predict the class label</strong> of new, unseen data.
            </p>

            <InfoBox type="note" title="Classification in Simple Words">
                <p>
                    Think of Classification like a teacher grading exam papers:
                </p>
                <ul>
                    <li>The teacher has <strong>already graded</strong> previous papers (training data with known grades A, B, C, F)</li>
                    <li>Based on experience, the teacher learns <strong>patterns</strong> (students who wrote &gt;4 pages with diagrams usually get A)</li>
                    <li>When a <strong>new paper</strong> comes, the teacher can <strong>predict</strong> the grade based on learned patterns</li>
                </ul>
            </InfoBox>

            <h3>The Two-Step Process</h3>

            <table>
                <thead>
                    <tr>
                        <th>Step</th>
                        <th>Name</th>
                        <th>What Happens</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Step 1</strong></td>
                        <td>Training (Model Building)</td>
                        <td>The algorithm learns from training data (with known class labels) and builds a classification model</td>
                    </tr>
                    <tr>
                        <td><strong>Step 2</strong></td>
                        <td>Testing (Prediction)</td>
                        <td>The model is used to predict the class of new, unseen test data</td>
                    </tr>
                </tbody>
            </table>

            <ImagePlaceholder
                name="ClassificationProcess.png"
                description="A two-part diagram showing the Classification process. Part 1 (Training): Training Data (table with attributes and class labels) feeds into a 'Classification Algorithm' box, which outputs a 'Classifier Model'. Part 2 (Testing): New unseen data feeds into the Classifier Model, which outputs 'Predicted Class Label'. Use blue for training phase and green for testing phase."
                suggestedSize="900x400"
            />

            <h3>Key Issues in Classification</h3>

            <ul>
                <li><strong>Overfitting:</strong> The model memorizes the training data too well, including noise, and performs poorly on new data (like a student who memorizes answers without understanding)</li>
                <li><strong>Underfitting:</strong> The model is too simple and fails to capture the underlying patterns (like studying only chapter 1 for a full syllabus exam)</li>
                <li><strong>Missing Values:</strong> How to handle records where some attributes are missing?</li>
                <li><strong>Class Imbalance:</strong> When one class has many more examples than another (e.g., fraud is only 1% of transactions)</li>
                <li><strong>Choosing the right algorithm:</strong> Different problems require different classifiers</li>
            </ul>

            <h2 id="decision-tree">Decision Tree Induction</h2>

            <p>
                A <strong>Decision Tree</strong> is a tree-shaped model where each <strong>internal node</strong> represents
                a test on an attribute, each <strong>branch</strong> represents the outcome of that test, and
                each <strong>leaf node</strong> represents a class label (the final decision).
            </p>

            <ExampleBox title="🌳 A Simple Decision Tree: Should I Play Cricket Today?">
                <p>Imagine a Decision Tree that decides whether to play cricket based on weather:</p>
                <pre style={{ backgroundColor: '#1a1a2e', color: '#eaeaea', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
{`                    [Weather?]
                   /     |      \\
              Sunny    Rainy   Overcast
              /          \\         \\
        [Humidity?]   [Wind?]    Play ✅
        /       \\     /      \\
    High      Normal  Strong   Weak
      ↓          ↓      ↓       ↓
  Don't Play  Play ✅  Don't   Play ✅
      ❌                Play ❌`}
                </pre>
                <p>
                    <strong>How to read:</strong> Start at the top → If Weather is "Sunny", check Humidity → If Humidity is "High", Don't Play. If "Normal", Play!
                </p>
            </ExampleBox>

            <ImagePlaceholder
                name="DecisionTreeExample.png"
                description="A beautifully designed Decision Tree for the 'Play Cricket' example. Root node 'Weather?' splits into 3 branches (Sunny, Rainy, Overcast). Sunny branch goes to 'Humidity?' which splits into High (Don't Play ❌) and Normal (Play ✅). Rainy branch goes to 'Wind?' which splits into Strong (Don't Play ❌) and Weak (Play ✅). Overcast directly goes to Play ✅. Use green for Play nodes and red for Don't Play nodes. Tree-style design with rounded boxes."
                suggestedSize="800x500"
            />

            <h3>How to Build a Decision Tree — The Algorithm</h3>

            <p>
                The key question is: <strong>"Which attribute should we test first?"</strong> We want to
                choose the attribute that best separates the data into pure classes. We measure this
                using <strong>Information Gain</strong> (based on Entropy).
            </p>

            <h4>Entropy</h4>
            <p>
                <strong>Entropy</strong> measures the impurity (disorder) in a dataset. If all data belongs
                to one class, entropy = 0 (perfectly pure). If data is evenly split, entropy is maximum.
            </p>

            <InfoBox type="highlight" title="Entropy Formula">
                <p>
                    <strong>Entropy(S) = -Σ pᵢ × log₂(pᵢ)</strong>
                </p>
                <p>Where pᵢ is the proportion of class i in dataset S.</p>
                <p>
                    <strong>Example:</strong> If a dataset has 9 "Yes" and 5 "No" examples:<br />
                    p(Yes) = 9/14, p(No) = 5/14<br />
                    Entropy = -(9/14)×log₂(9/14) - (5/14)×log₂(5/14) = <strong>0.940</strong>
                </p>
            </InfoBox>

            <h4>Information Gain</h4>
            <p>
                <strong>Information Gain</strong> measures how much entropy is reduced after splitting
                the data on an attribute. The attribute with the <strong>highest Information Gain</strong> is
                chosen as the root/next node.
            </p>

            <InfoBox type="highlight" title="Information Gain Formula">
                <p>
                    <strong>Gain(S, A) = Entropy(S) - Σ (|Sv|/|S|) × Entropy(Sv)</strong>
                </p>
                <p>Where Sv is the subset of S for which attribute A has value v.</p>
            </InfoBox>

            <h3>Advantages and Disadvantages of Decision Trees</h3>

            <table>
                <thead>
                    <tr>
                        <th>Advantages ✅</th>
                        <th>Disadvantages ❌</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Easy to understand and interpret (visual model)</td>
                        <td>Can overfit (create overly complex trees)</td>
                    </tr>
                    <tr>
                        <td>Requires little data preparation</td>
                        <td>Sensitive to small changes in data</td>
                    </tr>
                    <tr>
                        <td>Handles both numerical and categorical data</td>
                        <td>Can be biased towards attributes with more levels</td>
                    </tr>
                    <tr>
                        <td>Works well for both small and large datasets</td>
                        <td>May create complex trees that don't generalize well</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="bayes-classification">Bayesian Classification (Naïve Bayes)</h2>

            <p>
                <strong>Naïve Bayes</strong> is a classification algorithm based on <strong>Bayes' Theorem</strong>
                (probability). It's called "Naïve" because it makes the simplifying assumption that all
                attributes are <strong>independent</strong> of each other (which is rarely true in reality,
                but the algorithm still works surprisingly well!).
            </p>

            <h3>Bayes' Theorem</h3>

            <InfoBox type="highlight" title="Bayes' Theorem Formula">
                <p>
                    <strong>P(C|X) = [P(X|C) × P(C)] / P(X)</strong>
                </p>
                <ul>
                    <li><strong>P(C|X):</strong> Posterior probability — probability of class C given data X (what we want to find!)</li>
                    <li><strong>P(X|C):</strong> Likelihood — probability of data X given class C</li>
                    <li><strong>P(C):</strong> Prior probability — how common is class C in general?</li>
                    <li><strong>P(X):</strong> Evidence — probability of data X occurring (constant for all classes)</li>
                </ul>
            </InfoBox>

            <ExampleBox title="🎯 Naïve Bayes — Complete Worked Example">
                <p><strong>Problem:</strong> Predict whether a customer will buy a computer based on Age, Income, and Student status.</p>

                <p><strong>Training Data:</strong></p>
                <table>
                    <thead><tr><th>Age</th><th>Income</th><th>Student</th><th>Buys Computer?</th></tr></thead>
                    <tbody>
                        <tr><td>Young</td><td>High</td><td>No</td><td>No</td></tr>
                        <tr><td>Young</td><td>High</td><td>No</td><td>No</td></tr>
                        <tr><td>Middle</td><td>High</td><td>No</td><td>Yes</td></tr>
                        <tr><td>Senior</td><td>Medium</td><td>No</td><td>Yes</td></tr>
                        <tr><td>Senior</td><td>Low</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Senior</td><td>Low</td><td>Yes</td><td>No</td></tr>
                        <tr><td>Middle</td><td>Low</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Young</td><td>Medium</td><td>No</td><td>No</td></tr>
                        <tr><td>Young</td><td>Low</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Senior</td><td>Medium</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Young</td><td>Medium</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Middle</td><td>Medium</td><td>No</td><td>Yes</td></tr>
                        <tr><td>Middle</td><td>High</td><td>Yes</td><td>Yes</td></tr>
                        <tr><td>Senior</td><td>Medium</td><td>No</td><td>No</td></tr>
                    </tbody>
                </table>

                <p><strong>New Customer:</strong> X = (Age = Young, Income = Medium, Student = Yes)</p>
                <p><strong>Question:</strong> Will this customer buy a computer?</p>

                <p><strong>Step 1: Calculate Prior Probabilities</strong></p>
                <ul>
                    <li>P(Yes) = 9/14 = 0.643</li>
                    <li>P(No) = 5/14 = 0.357</li>
                </ul>

                <p><strong>Step 2: Calculate Likelihoods for each attribute</strong></p>
                <ul>
                    <li>P(Age=Young | Yes) = 2/9 = 0.222</li>
                    <li>P(Income=Medium | Yes) = 4/9 = 0.444</li>
                    <li>P(Student=Yes | Yes) = 6/9 = 0.667</li>
                    <li>P(Age=Young | No) = 3/5 = 0.600</li>
                    <li>P(Income=Medium | No) = 2/5 = 0.400</li>
                    <li>P(Student=Yes | No) = 1/5 = 0.200</li>
                </ul>

                <p><strong>Step 3: Calculate posterior for each class</strong></p>
                <ul>
                    <li>P(Yes|X) ∝ P(Young|Yes) × P(Medium|Yes) × P(Student=Yes|Yes) × P(Yes) = 0.222 × 0.444 × 0.667 × 0.643 = <strong>0.0424</strong></li>
                    <li>P(No|X) ∝ P(Young|No) × P(Medium|No) × P(Student=Yes|No) × P(No) = 0.600 × 0.400 × 0.200 × 0.357 = <strong>0.0171</strong></li>
                </ul>

                <p><strong>Step 4: Normalize and Compare</strong></p>
                <p>P(Yes|X) = 0.0424 / (0.0424 + 0.0171) = <strong>71.3%</strong></p>
                <p>P(No|X) = 0.0171 / (0.0424 + 0.0171) = <strong>28.7%</strong></p>

                <p><strong>✅ Prediction: YES — The customer will likely buy a computer!</strong></p>
            </ExampleBox>

            <h3>Advantages and Disadvantages of Naïve Bayes</h3>

            <table>
                <thead>
                    <tr>
                        <th>Advantages ✅</th>
                        <th>Disadvantages ❌</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Very fast and efficient</td>
                        <td>Assumes all features are independent (naïve assumption)</td>
                    </tr>
                    <tr>
                        <td>Works well with high-dimensional data</td>
                        <td>If a category wasn't seen in training, probability becomes zero ("zero probability problem")</td>
                    </tr>
                    <tr>
                        <td>Requires less training data</td>
                        <td>Not suitable for data with complex feature relationships</td>
                    </tr>
                    <tr>
                        <td>Good for text classification (spam detection)</td>
                        <td>Accuracy can be lower than more complex algorithms</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="rule-based">Rule-Based Classification</h2>

            <p>
                Rule-Based Classification uses a set of <strong>IF-THEN rules</strong> to classify data.
                Rules are easy to understand and can be directly derived from Decision Trees.
            </p>

            <ExampleBox title="IF-THEN Rules Example">
                <pre style={{ backgroundColor: '#1a1a2e', color: '#eaeaea', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
{`Rule 1: IF Age = "Young" AND Student = "Yes" THEN Buy = "Yes"
Rule 2: IF Age = "Young" AND Student = "No"  THEN Buy = "No"
Rule 3: IF Age = "Middle"                    THEN Buy = "Yes"
Rule 4: IF Age = "Senior" AND Credit = "Good" THEN Buy = "Yes"
Rule 5: IF Age = "Senior" AND Credit = "Fair" THEN Buy = "No"

Default Rule: IF none of the above match      THEN Buy = "No"`}
                </pre>
                <p>
                    Rules are evaluated in order. The first rule that matches is used for classification.
                    If no rule matches, the <strong>default rule</strong> is applied.
                </p>
            </ExampleBox>

            <h3>Properties of Good Rules</h3>
            <ul>
                <li><strong>Mutually Exclusive:</strong> No two rules should apply to the same instance</li>
                <li><strong>Exhaustive:</strong> Every possible combination should be covered by some rule</li>
                <li><strong>Simple:</strong> Fewer conditions in each rule make them easier to understand</li>
                <li><strong>Accurate:</strong> Rules should correctly classify most instances</li>
            </ul>

            <h2 id="knn">Lazy Learners — k-Nearest Neighbor (KNN)</h2>

            <p>
                KNN is called a <strong>"lazy learner"</strong> because it doesn't learn a model during
                training — instead, it <strong>stores all the training data</strong> and only does the
                work when a new data point needs to be classified.
            </p>

            <h3>How KNN Works</h3>

            <ol>
                <li><strong>Store</strong> all training data as-is (no model building!)</li>
                <li>When a new data point arrives, <strong>calculate the distance</strong> between it and all training data points</li>
                <li>Find the <strong>k nearest neighbors</strong> (the k most similar/closest data points)</li>
                <li><strong>Vote:</strong> The class that appears most frequently among the k neighbors is assigned to the new data point</li>
            </ol>

            <ExampleBox title="🎯 KNN Example (k=3)">
                <p>
                    Suppose we have a dataset of fruits with features: Weight and Color Score.
                    We want to classify a new fruit.
                </p>
                <table>
                    <thead><tr><th>Fruit</th><th>Weight (g)</th><th>Color Score</th><th>Type</th></tr></thead>
                    <tbody>
                        <tr><td>F1</td><td>150</td><td>7</td><td>Apple 🍎</td></tr>
                        <tr><td>F2</td><td>170</td><td>8</td><td>Apple 🍎</td></tr>
                        <tr><td>F3</td><td>130</td><td>6</td><td>Apple 🍎</td></tr>
                        <tr><td>F4</td><td>120</td><td>3</td><td>Orange 🍊</td></tr>
                        <tr><td>F5</td><td>200</td><td>2</td><td>Orange 🍊</td></tr>
                        <tr><td>F6</td><td>180</td><td>3</td><td>Orange 🍊</td></tr>
                    </tbody>
                </table>
                <p><strong>New fruit:</strong> Weight = 160g, Color Score = 6</p>
                <p><strong>With k=3:</strong> The 3 nearest neighbors are F1 (Apple), F2 (Apple), F3 (Apple)</p>
                <p><strong>Vote:</strong> Apple = 3 votes, Orange = 0 votes</p>
                <p><strong>✅ Prediction: Apple! 🍎</strong></p>
            </ExampleBox>

            <ImagePlaceholder
                name="KNNVisualization.png"
                description="A 2D scatter plot showing KNN classification. X-axis is Weight, Y-axis is Color Score. Red dots represent Apples, blue dots represent Oranges. A new green dot (unknown fruit) is in the center with a dashed circle around it showing the 3 nearest neighbors (k=3). The boundary between apple and orange regions is shown as a curved line. Clean, modern data visualization style."
                suggestedSize="700x500"
            />

            <h3>Choosing the Right k Value</h3>

            <table>
                <thead>
                    <tr>
                        <th>k Value</th>
                        <th>Effect</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>k = 1</strong></td>
                        <td>Highly sensitive to noise (overfitting). One noisy neighbor can cause wrong prediction</td>
                    </tr>
                    <tr>
                        <td><strong>k = small (3-5)</strong></td>
                        <td>Good balance between accuracy and noise sensitivity</td>
                    </tr>
                    <tr>
                        <td><strong>k = large</strong></td>
                        <td>Smoother boundaries but may miss local patterns (underfitting)</td>
                    </tr>
                    <tr>
                        <td><strong>k = N (total data)</strong></td>
                        <td>Always predicts the majority class — useless!</td>
                    </tr>
                </tbody>
            </table>

            <InfoBox type="tip" title="Best Practice">
                <p>
                    Always choose an <strong>odd value for k</strong> (like 3, 5, 7) to avoid ties in voting.
                    Use <strong>cross-validation</strong> to find the optimal k for your specific dataset.
                </p>
            </InfoBox>

            <h2 id="prediction">Prediction</h2>

            <p>
                While Classification predicts <strong>categorical</strong> (discrete) class labels (Yes/No,
                Spam/Not Spam), <strong>Prediction</strong> (or Regression) predicts <strong>continuous</strong> numerical
                values (e.g., temperature, stock price, salary).
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Aspect</th>
                        <th>Classification</th>
                        <th>Prediction (Regression)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Output Type</strong></td>
                        <td>Categorical (Discrete)</td>
                        <td>Numerical (Continuous)</td>
                    </tr>
                    <tr>
                        <td><strong>Example</strong></td>
                        <td>"Will this student pass or fail?"</td>
                        <td>"What marks will this student score?"</td>
                    </tr>
                    <tr>
                        <td><strong>Techniques</strong></td>
                        <td>Decision Tree, Naïve Bayes, KNN</td>
                        <td>Linear Regression, Polynomial Regression</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="accuracy-precision-recall">Accuracy, Precision, and Recall</h2>

            <p>
                After building a classifier, we need to measure <strong>how well it performs</strong>.
                Three key metrics are used:
            </p>

            <h3>Confusion Matrix</h3>
            <p>
                A confusion matrix is a table that shows the performance of a classifier:
            </p>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Predicted: YES</th>
                        <th>Predicted: NO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Actual: YES</strong></td>
                        <td>True Positive (TP) ✅</td>
                        <td>False Negative (FN) ❌</td>
                    </tr>
                    <tr>
                        <td><strong>Actual: NO</strong></td>
                        <td>False Positive (FP) ❌</td>
                        <td>True Negative (TN) ✅</td>
                    </tr>
                </tbody>
            </table>

            <ImagePlaceholder
                name="ConfusionMatrix.png"
                description="A visually appealing 2x2 confusion matrix grid showing True Positive (green, top-left), False Positive (red, bottom-left), False Negative (red, top-right), True Negative (green, bottom-right). Rows labeled 'Actual: Yes/No', columns labeled 'Predicted: Yes/No'. Each cell has the term, abbreviation, and a simple icon (checkmark or cross). Modern card-style design."
                suggestedSize="600x400"
            />

            <h3>The Three Key Metrics</h3>

            <table>
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>Formula</th>
                        <th>What It Measures</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Accuracy</strong></td>
                        <td>(TP + TN) / (TP + TN + FP + FN)</td>
                        <td>Overall correctness of the model</td>
                        <td>"Out of all predictions, how many were correct?"</td>
                    </tr>
                    <tr>
                        <td><strong>Precision</strong></td>
                        <td>TP / (TP + FP)</td>
                        <td>Of all positive predictions, how many were actually positive?</td>
                        <td>"Of all emails marked as spam, how many were actually spam?"</td>
                    </tr>
                    <tr>
                        <td><strong>Recall (Sensitivity)</strong></td>
                        <td>TP / (TP + FN)</td>
                        <td>Of all actual positives, how many did the model correctly identify?</td>
                        <td>"Of all actual spam emails, how many did the system catch?"</td>
                    </tr>
                </tbody>
            </table>

            <ExampleBox title="📊 Complete Evaluation Example">
                <p>
                    A spam detection system tested on 100 emails:
                </p>
                <ul>
                    <li><strong>TP = 38:</strong> System correctly identified 38 spam emails as spam ✅</li>
                    <li><strong>TN = 50:</strong> System correctly identified 50 normal emails as normal ✅</li>
                    <li><strong>FP = 5:</strong> System wrongly marked 5 normal emails as spam ❌ (annoying!)</li>
                    <li><strong>FN = 7:</strong> System missed 7 spam emails and let them through ❌ (dangerous!)</li>
                </ul>
                <p><strong>Calculations:</strong></p>
                <ul>
                    <li><strong>Accuracy</strong> = (38 + 50) / 100 = <strong>88%</strong> — "88 out of 100 predictions were correct"</li>
                    <li><strong>Precision</strong> = 38 / (38 + 5) = <strong>88.4%</strong> — "88.4% of emails flagged as spam were actually spam"</li>
                    <li><strong>Recall</strong> = 38 / (38 + 7) = <strong>84.4%</strong> — "84.4% of actual spam emails were caught"</li>
                </ul>
            </ExampleBox>

            <InfoBox type="warning" title="When Accuracy Alone is Misleading!">
                <p>
                    In a disease detection system testing 1000 patients where only 10 actually have the disease:
                </p>
                <p>
                    A classifier that <strong>always predicts "No Disease"</strong> would have 990/1000 = 99% accuracy!
                    But it would miss all 10 patients who actually have the disease (Recall = 0%). This is why
                    we need <strong>Precision and Recall alongside Accuracy</strong>.
                </p>
            </InfoBox>

            <h3>F1-Score: The Balanced Metric</h3>
            <p>
                <strong>F1-Score</strong> is the harmonic mean of Precision and Recall. It provides a
                single balanced metric when both are important.
            </p>
            <p>
                <strong>F1 = 2 × (Precision × Recall) / (Precision + Recall)</strong>
            </p>

            <h2 id="summary">Summary</h2>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Classification is supervised learning that predicts categorical class labels",
                    "Two-step process: Training (build model) → Testing (predict new data)",
                    "Decision Trees split data using attributes with highest Information Gain (lowest Entropy)",
                    "Naïve Bayes uses Bayes' Theorem assuming feature independence — fast and effective for text",
                    "Rule-Based Classification uses IF-THEN rules — easy to understand and interpret",
                    "KNN (k-Nearest Neighbor) is a lazy learner — stores all data and classifies by voting from k nearest points",
                    "Prediction (Regression) predicts continuous values; Classification predicts discrete categories",
                    "Evaluation uses Confusion Matrix → Accuracy, Precision, Recall, and F1-Score"
                ]}
            />

            <InfoBox type="tip" title="What's Next?">
                <p>
                    In the final unit, we'll explore <strong>Clustering</strong> — discovering natural
                    groups in data without predefined labels, using Partitioning Methods (K-Means),
                    Hierarchical Methods, Density-Based Methods (DBSCAN), and Grid-Based Methods.
                </p>
            </InfoBox>
        </div>
    );
}
