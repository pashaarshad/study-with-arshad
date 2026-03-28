import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function BayesianClassification() {
    return (
        <div>
            <p>
                <strong>Naïve Bayes</strong> is a probabilistic classifier based on <strong>Bayes' Theorem</strong>.
                Despite being called "naïve" (because it makes a simplifying assumption), it works surprisingly
                well in practice and is widely used for <strong>spam detection, sentiment analysis, and
                medical diagnosis</strong>.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "Bayes' Theorem — the foundation",
                    "Why it's called 'Naïve'",
                    "Complete Worked Example — step-by-step calculation",
                    "Advantages, Disadvantages, and Applications"
                ]}
            />

            <h2 id="bayes-theorem">Bayes' Theorem</h2>

            <InfoBox type="highlight" title="Bayes' Theorem Formula">
                <p>
                    <strong>P(C|X) = P(X|C) × P(C) / P(X)</strong>
                </p>
                <ul>
                    <li><strong>P(C|X):</strong> Posterior probability — probability of class C given features X</li>
                    <li><strong>P(X|C):</strong> Likelihood — probability of features X given class C</li>
                    <li><strong>P(C):</strong> Prior probability — probability of class C in the dataset</li>
                    <li><strong>P(X):</strong> Evidence — probability of features X (same for all classes, often ignored)</li>
                </ul>
            </InfoBox>

            <h2 id="why-naive">Why "Naïve"?</h2>
            <p>
                It assumes all features are <strong>conditionally independent</strong> — meaning each feature
                contributes independently to the classification. In reality, this is rarely true, but the
                algorithm still performs well despite this simplification.
            </p>
            <ExampleBox title="Independence Assumption">
                <p>
                    For spam detection, Naïve Bayes assumes that the word "free" and the word "offer" are
                    independent — knowing the email has "free" doesn't change the probability of having "offer".
                    This is "naïve" because in reality, spam emails tend to have both words together!
                </p>
            </ExampleBox>

            <h2 id="worked-example">Complete Worked Example ⭐</h2>

            <ExampleBox title="📝 Naïve Bayes — Will the Customer Buy a Computer?">
                <table>
                    <thead><tr><th>#</th><th>Age</th><th>Income</th><th>Student?</th><th>Credit Rating</th><th>Buys Computer?</th></tr></thead>
                    <tbody>
                        <tr><td>1</td><td>Youth</td><td>High</td><td>No</td><td>Fair</td><td>No</td></tr>
                        <tr><td>2</td><td>Youth</td><td>High</td><td>No</td><td>Excellent</td><td>No</td></tr>
                        <tr><td>3</td><td>Middle-aged</td><td>High</td><td>No</td><td>Fair</td><td>Yes</td></tr>
                        <tr><td>4</td><td>Senior</td><td>Medium</td><td>No</td><td>Fair</td><td>Yes</td></tr>
                        <tr><td>5</td><td>Senior</td><td>Low</td><td>Yes</td><td>Fair</td><td>Yes</td></tr>
                        <tr><td>6</td><td>Senior</td><td>Low</td><td>Yes</td><td>Excellent</td><td>No</td></tr>
                        <tr><td>7</td><td>Middle-aged</td><td>Low</td><td>Yes</td><td>Excellent</td><td>Yes</td></tr>
                        <tr><td>8</td><td>Youth</td><td>Medium</td><td>No</td><td>Fair</td><td>No</td></tr>
                        <tr><td>9</td><td>Youth</td><td>Low</td><td>Yes</td><td>Fair</td><td>Yes</td></tr>
                        <tr><td>10</td><td>Senior</td><td>Medium</td><td>Yes</td><td>Fair</td><td>Yes</td></tr>
                        <tr><td>11</td><td>Youth</td><td>Medium</td><td>Yes</td><td>Excellent</td><td>Yes</td></tr>
                        <tr><td>12</td><td>Middle-aged</td><td>Medium</td><td>No</td><td>Excellent</td><td>Yes</td></tr>
                        <tr><td>13</td><td>Middle-aged</td><td>High</td><td>Yes</td><td>Fair</td><td>Yes</td></tr>
                        <tr><td>14</td><td>Senior</td><td>Medium</td><td>No</td><td>Excellent</td><td>No</td></tr>
                    </tbody>
                </table>

                <p><strong>Predict:</strong> X = (Age=Youth, Income=Medium, Student=Yes, Credit=Fair) → Buys Computer?</p>

                <p><strong>Step 1: Calculate Prior Probabilities</strong></p>
                <ul>
                    <li>P(Yes) = 9/14 = <strong>0.643</strong></li>
                    <li>P(No) = 5/14 = <strong>0.357</strong></li>
                </ul>

                <p><strong>Step 2: Calculate Likelihoods</strong></p>
                <table>
                    <thead><tr><th>Feature</th><th>P(feature | Yes)</th><th>P(feature | No)</th></tr></thead>
                    <tbody>
                        <tr><td>Age = Youth</td><td>2/9 = 0.222</td><td>3/5 = 0.600</td></tr>
                        <tr><td>Income = Medium</td><td>4/9 = 0.444</td><td>2/5 = 0.400</td></tr>
                        <tr><td>Student = Yes</td><td>6/9 = 0.667</td><td>1/5 = 0.200</td></tr>
                        <tr><td>Credit = Fair</td><td>6/9 = 0.667</td><td>2/5 = 0.400</td></tr>
                    </tbody>
                </table>

                <p><strong>Step 3: Calculate Posterior (Class Probabilities)</strong></p>
                <p>P(X|Yes) × P(Yes) = 0.222 × 0.444 × 0.667 × 0.667 × 0.643 = <strong>0.028</strong></p>
                <p>P(X|No) × P(No) = 0.600 × 0.400 × 0.200 × 0.400 × 0.357 = <strong>0.007</strong></p>

                <p><strong>Step 4: Compare and Classify</strong></p>
                <p>P(Yes|X) ∝ 0.028 &gt; P(No|X) ∝ 0.007</p>
                <p><strong>Prediction: Buys Computer = YES ✅</strong></p>
            </ExampleBox>

            <h2 id="pros-cons">Advantages and Disadvantages</h2>

            <table>
                <thead><tr><th>Advantages ✅</th><th>Disadvantages ❌</th></tr></thead>
                <tbody>
                    <tr><td>Very fast — both training and prediction</td><td>Independence assumption rarely holds</td></tr>
                    <tr><td>Works well with small training data</td><td>Poor with correlated features</td></tr>
                    <tr><td>Handles multiple classes easily</td><td>Sensitive to irrelevant features</td></tr>
                    <tr><td>Simple, easy to implement</td><td>"Zero frequency problem" (unseen feature values)</td></tr>
                    <tr><td>Excellent for text classification (spam, sentiment)</td><td>Cannot capture feature interactions</td></tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Naïve Bayes uses Bayes' Theorem: P(C|X) = P(X|C) × P(C) / P(X)",
                    "'Naïve' because it assumes feature independence",
                    "Calculate P(X|each class) × P(class) → choose the class with highest value",
                    "Works surprisingly well for spam detection, sentiment analysis, medical diagnosis",
                    "Fast, simple, and effective even with small training data"
                ]}
            />
        </div>
    );
}
