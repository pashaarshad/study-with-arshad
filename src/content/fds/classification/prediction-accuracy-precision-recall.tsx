import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function PredictionAccuracyPrecisionRecall() {
    return (
        <div>
            <p>
                Once you've built a classifier, the crucial question is: <strong>"How good is it?"</strong>
                You need to measure its performance using evaluation metrics. Understanding <strong>Accuracy,
                Precision, Recall</strong>, and the <strong>Confusion Matrix</strong> is essential for
                both exams and real-world applications.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "Prediction vs Classification — the difference",
                    "Confusion Matrix — TP, TN, FP, FN",
                    "Accuracy, Precision, Recall, F1-Score",
                    "Complete Worked Example with Confusion Matrix",
                    "When to use which metric"
                ]}
            />

            <h2 id="prediction-vs-classification">Prediction vs Classification</h2>

            <table>
                <thead><tr><th>Aspect</th><th>Classification</th><th>Prediction</th></tr></thead>
                <tbody>
                    <tr><td><strong>Output</strong></td><td>Discrete class label (Spam/Not Spam)</td><td>Continuous numerical value (₹5,00,000)</td></tr>
                    <tr><td><strong>Method</strong></td><td>Decision Trees, KNN, Naïve Bayes</td><td>Regression (Linear, Logistic)</td></tr>
                    <tr><td><strong>Example</strong></td><td>"This email is Spam" (category)</td><td>"House price will be ₹50 Lakh" (number)</td></tr>
                </tbody>
            </table>

            <h2 id="confusion-matrix">The Confusion Matrix ⭐</h2>

            <p>A table that shows how many predictions were correct vs incorrect:</p>

            <ImagePlaceholder
                name="ConfusionMatrix.png"
                description="A 2x2 confusion matrix grid. Rows labeled 'Actual Positive' and 'Actual Negative'. Columns labeled 'Predicted Positive' and 'Predicted Negative'. Cells: TP (green), FP (orange), FN (red), TN (green). Clean, colorful."
                suggestedSize="600x400"
            />

            <table>
                <thead>
                    <tr><th></th><th><strong>Predicted: Positive</strong></th><th><strong>Predicted: Negative</strong></th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Actual: Positive</strong></td>
                        <td><strong>TP</strong> (True Positive) ✅ — Correctly predicted positive</td>
                        <td><strong>FN</strong> (False Negative) ❌ — Missed a positive (Type II Error)</td>
                    </tr>
                    <tr>
                        <td><strong>Actual: Negative</strong></td>
                        <td><strong>FP</strong> (False Positive) ❌ — False alarm (Type I Error)</td>
                        <td><strong>TN</strong> (True Negative) ✅ — Correctly predicted negative</td>
                    </tr>
                </tbody>
            </table>

            <ExampleBox title="Understanding TP, FP, FN, TN with Medical Example">
                <ul>
                    <li><strong>TP:</strong> Patient HAS disease, model says "Disease" ✅ (Correctly caught!)</li>
                    <li><strong>TN:</strong> Patient is HEALTHY, model says "No Disease" ✅ (Correctly cleared!)</li>
                    <li><strong>FP:</strong> Patient is HEALTHY, model says "Disease" ❌ (Unnecessary worry!)</li>
                    <li><strong>FN:</strong> Patient HAS disease, model says "No Disease" ❌ (DANGEROUS — missed!)</li>
                </ul>
            </ExampleBox>

            <h2 id="metrics">Evaluation Metrics — Formulas</h2>

            <h3>1. Accuracy</h3>
            <InfoBox type="highlight" title="Accuracy Formula">
                <p><strong>Accuracy = (TP + TN) / (TP + TN + FP + FN)</strong></p>
                <p>"What percentage of all predictions were correct?"</p>
            </InfoBox>

            <h3>2. Precision</h3>
            <InfoBox type="highlight" title="Precision Formula">
                <p><strong>Precision = TP / (TP + FP)</strong></p>
                <p>"Of all positive predictions, how many were actually positive?"</p>
                <p>📧 For spam: "Of all emails marked as Spam, how many are actually Spam?"</p>
            </InfoBox>

            <h3>3. Recall (Sensitivity)</h3>
            <InfoBox type="highlight" title="Recall Formula">
                <p><strong>Recall = TP / (TP + FN)</strong></p>
                <p>"Of all actual positives, how many did we catch?"</p>
                <p>🏥 For disease: "Of all sick patients, how many did we correctly identify?"</p>
            </InfoBox>

            <h3>4. F1-Score (Harmonic Mean)</h3>
            <InfoBox type="highlight" title="F1-Score Formula">
                <p><strong>F1 = 2 × (Precision × Recall) / (Precision + Recall)</strong></p>
                <p>"A single balanced score combining Precision and Recall"</p>
            </InfoBox>

            <h2 id="worked-example">Complete Worked Example ⭐</h2>

            <ExampleBox title="📝 Calculating Metrics from Confusion Matrix">
                <p><strong>A spam classifier tested on 200 emails:</strong></p>
                <table>
                    <thead><tr><th></th><th>Predicted: Spam</th><th>Predicted: Not Spam</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Actual: Spam</strong></td><td>TP = 80</td><td>FN = 20</td></tr>
                        <tr><td><strong>Actual: Not Spam</strong></td><td>FP = 10</td><td>TN = 90</td></tr>
                    </tbody>
                </table>

                <p><strong>Accuracy</strong> = (80 + 90) / (80 + 90 + 10 + 20) = 170/200 = <strong>85%</strong></p>
                <p><strong>Precision</strong> = 80 / (80 + 10) = 80/90 = <strong>88.9%</strong></p>
                <p><strong>Recall</strong> = 80 / (80 + 20) = 80/100 = <strong>80%</strong></p>
                <p><strong>F1-Score</strong> = 2 × (0.889 × 0.80) / (0.889 + 0.80) = 2 × 0.711 / 1.689 = <strong>84.2%</strong></p>

                <p><strong>Interpretation:</strong></p>
                <ul>
                    <li>Our classifier correctly identifies 85% of all emails</li>
                    <li>When it says "Spam", it's right 88.9% of the time (high precision)</li>
                    <li>It catches 80% of actual spam emails (recall could be better — 20% spam slips through)</li>
                </ul>
            </ExampleBox>

            <h2 id="when-to-use">When to Use Which Metric?</h2>

            <table>
                <thead><tr><th>Scenario</th><th>Prioritize</th><th>Why</th></tr></thead>
                <tbody>
                    <tr><td><strong>Disease Detection</strong></td><td>Recall (Sensitivity)</td><td>Missing a sick patient is dangerous! (Minimize FN)</td></tr>
                    <tr><td><strong>Spam Filtering</strong></td><td>Precision</td><td>Marking a legit email as spam is annoying! (Minimize FP)</td></tr>
                    <tr><td><strong>Balanced Problems</strong></td><td>F1-Score</td><td>Need both precision and recall to be good</td></tr>
                    <tr><td><strong>General Use</strong></td><td>Accuracy</td><td>When classes are roughly balanced</td></tr>
                </tbody>
            </table>

            <InfoBox type="warning" title="Accuracy Paradox ⚠️">
                <p>
                    Don't rely on accuracy alone! If 95% of emails are "Not Spam", a model that predicts
                    everything as "Not Spam" gets <strong>95% accuracy but catches ZERO spam!</strong>
                    In imbalanced datasets, always use Precision, Recall, and F1-Score.
                </p>
            </InfoBox>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Confusion Matrix has 4 values: TP, TN, FP, FN",
                    "Accuracy = (TP+TN)/Total — overall correctness",
                    "Precision = TP/(TP+FP) — 'of predicted positives, how many correct?'",
                    "Recall = TP/(TP+FN) — 'of actual positives, how many caught?'",
                    "F1-Score balances Precision and Recall",
                    "Use Recall for medical/security; Precision for spam filtering"
                ]}
            />
        </div>
    );
}
