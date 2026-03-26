import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function KNNLazyLearners() {
    return (
        <div>
            <p>
                Unlike Decision Trees and Naïve Bayes which build a model during training,
                <strong> Lazy Learners</strong> (also called <strong>Instance-Based Learners</strong>)
                don't build any model at all! They simply <strong>store the training data</strong> and
                wait until a new data point arrives, then classify it based on its neighbors. The most
                famous lazy learner is <strong>K-Nearest Neighbor (KNN)</strong>.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "What are Lazy Learners vs Eager Learners?",
                    "K-Nearest Neighbor (KNN) Algorithm",
                    "How KNN classifies — step-by-step",
                    "Choosing the right value of K",
                    "Distance measures (Euclidean, Manhattan)",
                    "Complete Worked Example"
                ]}
            />

            <h2 id="lazy-vs-eager">Lazy vs Eager Learners</h2>

            <table>
                <thead><tr><th>Aspect</th><th>Eager Learners</th><th>Lazy Learners</th></tr></thead>
                <tbody>
                    <tr><td><strong>Training</strong></td><td>Builds a model during training</td><td>Simply stores training data</td></tr>
                    <tr><td><strong>Training Time</strong></td><td>Long (builds complex model)</td><td>Very short (just storage)</td></tr>
                    <tr><td><strong>Prediction Time</strong></td><td>Fast (model already built)</td><td>Slow (computes at prediction time)</td></tr>
                    <tr><td><strong>Examples</strong></td><td>Decision Trees, Naïve Bayes, SVM</td><td>KNN, Case-Based Reasoning</td></tr>
                    <tr><td><strong>Analogy</strong></td><td>Studying for exam (prepare in advance) 📚</td><td>Open-book exam (look up answers live) 📖</td></tr>
                </tbody>
            </table>

            <h2 id="knn-algorithm">K-Nearest Neighbor (KNN) Algorithm</h2>

            <p>KNN classifies a new data point by looking at the <strong>K closest training examples</strong> and taking a <strong>majority vote</strong>.</p>

            <ol>
                <li><strong>Choose K:</strong> Decide how many neighbors to consider (e.g., K=3)</li>
                <li><strong>Calculate Distance:</strong> Find the distance from the new point to ALL training points</li>
                <li><strong>Find K Nearest:</strong> Select the K closest training points</li>
                <li><strong>Vote:</strong> The majority class among the K neighbors = predicted class</li>
            </ol>

            <ImagePlaceholder
                name="KNNClassification.png"
                description="2D scatter plot with two classes (red circles and blue squares). A green star represents a new data point. Two circles drawn around the star: K=3 circle (2 red, 1 blue → predict Red) and K=5 circle (2 red, 3 blue → predict Blue). Shows how K changes the prediction."
                suggestedSize="700x500"
            />

            <h3>Distance Measures</h3>

            <table>
                <thead><tr><th>Measure</th><th>Formula</th><th>When to Use</th></tr></thead>
                <tbody>
                    <tr><td><strong>Euclidean</strong></td><td>√(Σ(xᵢ - yᵢ)²) — straight-line distance</td><td>Most common, works well in general</td></tr>
                    <tr><td><strong>Manhattan</strong></td><td>Σ|xᵢ - yᵢ| — grid/taxi-cab distance</td><td>When features are on different scales</td></tr>
                </tbody>
            </table>

            <h2 id="worked-example">Complete Worked Example ⭐</h2>

            <ExampleBox title="📝 KNN Classification — Play Tennis? (K=3)">
                <p><strong>Training Data:</strong></p>
                <table>
                    <thead><tr><th>Point</th><th>Temperature</th><th>Humidity</th><th>Play?</th></tr></thead>
                    <tbody>
                        <tr><td>P1</td><td>30</td><td>85</td><td>No</td></tr>
                        <tr><td>P2</td><td>25</td><td>70</td><td>Yes</td></tr>
                        <tr><td>P3</td><td>35</td><td>90</td><td>No</td></tr>
                        <tr><td>P4</td><td>22</td><td>65</td><td>Yes</td></tr>
                        <tr><td>P5</td><td>28</td><td>78</td><td>Yes</td></tr>
                    </tbody>
                </table>

                <p><strong>New Point X:</strong> Temperature=27, Humidity=75. Play Tennis?</p>

                <p><strong>Step 1: Calculate Euclidean Distance from X to each point:</strong></p>
                <table>
                    <thead><tr><th>Point</th><th>Distance to X(27,75)</th><th>Class</th></tr></thead>
                    <tbody>
                        <tr><td>P1(30,85)</td><td>√((27-30)²+(75-85)²) = √(9+100) = <strong>10.44</strong></td><td>No</td></tr>
                        <tr><td>P2(25,70)</td><td>√((27-25)²+(75-70)²) = √(4+25) = <strong>5.39</strong></td><td>Yes</td></tr>
                        <tr><td>P3(35,90)</td><td>√((27-35)²+(75-90)²) = √(64+225) = <strong>17.0</strong></td><td>No</td></tr>
                        <tr><td>P4(22,65)</td><td>√((27-22)²+(75-65)²) = √(25+100) = <strong>11.18</strong></td><td>Yes</td></tr>
                        <tr><td>P5(28,78)</td><td>√((27-28)²+(75-78)²) = √(1+9) = <strong>3.16</strong></td><td>Yes</td></tr>
                    </tbody>
                </table>

                <p><strong>Step 2: Find K=3 nearest neighbors (sort by distance):</strong></p>
                <ol>
                    <li>P5 (3.16) → <strong>Yes</strong></li>
                    <li>P2 (5.39) → <strong>Yes</strong></li>
                    <li>P1 (10.44) → <strong>No</strong></li>
                </ol>

                <p><strong>Step 3: Majority Vote:</strong> Yes=2, No=1 → <strong>Prediction: Play = YES ✅</strong></p>
            </ExampleBox>

            <h2 id="choosing-k">Choosing the Right K</h2>

            <table>
                <thead><tr><th>K Value</th><th>Effect</th><th>Risk</th></tr></thead>
                <tbody>
                    <tr><td><strong>K too small (K=1)</strong></td><td>Highly sensitive to noise</td><td>Overfitting</td></tr>
                    <tr><td><strong>K too large (K=n)</strong></td><td>Over-smoothing, ignores local patterns</td><td>Underfitting</td></tr>
                    <tr><td><strong>K moderate (K=5,7)</strong></td><td>Good balance</td><td>Best practice</td></tr>
                </tbody>
            </table>

            <InfoBox type="tip" title="Tips for Choosing K">
                <ul>
                    <li>Always use an <strong>odd number</strong> for K (avoids ties in 2-class problems)</li>
                    <li><strong>K = √n</strong> (square root of total training records) is a common rule of thumb</li>
                    <li>Use <strong>cross-validation</strong> to test different K values and pick the best</li>
                </ul>
            </InfoBox>

            <h2 id="pros-cons">Advantages and Disadvantages</h2>

            <table>
                <thead><tr><th>Advantages ✅</th><th>Disadvantages ❌</th></tr></thead>
                <tbody>
                    <tr><td>Simple and intuitive</td><td>Slow prediction (computes all distances every time)</td></tr>
                    <tr><td>No training phase needed</td><td>Needs lots of memory (stores all data)</td></tr>
                    <tr><td>Works with any number of classes</td><td>Sensitive to irrelevant features</td></tr>
                    <tr><td>Adapts easily to new data</td><td>Needs feature scaling (normalization)</td></tr>
                    <tr><td>Can handle non-linear boundaries</td><td>Performance degrades with high dimensions</td></tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "KNN is a lazy learner — no model building, just stores data",
                    "Classifies by majority vote of K nearest neighbors",
                    "Uses distance measures (Euclidean most common) to find neighbors",
                    "Choose odd K; K=√n is a good rule of thumb",
                    "Fast training but slow prediction"
                ]}
            />
        </div>
    );
}
