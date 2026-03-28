import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function ClassificationBasics() {
    return (
        <div>
            <p>
                Imagine you're a doctor examining a patient. Based on symptoms (fever, cough, fatigue),
                you classify the illness as "Flu" or "COVID" or "Cold". This is exactly what
                <strong> Classification</strong> does in Data Mining — it learns from past examples and
                predicts the <strong>category (class)</strong> for new, unseen data.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "What is Classification — Definition & Process",
                    "The Two-Step Process: Training & Testing",
                    "Key Issues in Classification",
                    "Supervised vs Unsupervised Learning",
                    "Key Terminology: features, labels, training set, test set"
                ]}
            />

            <h2 id="what-is-classification">What is Classification?</h2>
            <p>
                <strong>Classification</strong> is a <strong>supervised learning</strong> technique that
                assigns each data object to one of the <strong>predefined categories (classes)</strong>.
            </p>

            <h3>The Two-Step Process</h3>
            <ol>
                <li><strong>Step 1 — Training (Learning):</strong> Build a model by learning from labeled training data. The model learns the relationship between input features and the output class.</li>
                <li><strong>Step 2 — Testing (Classification):</strong> Use the trained model to predict the class of new, unseen data. Evaluate accuracy using test data.</li>
            </ol>

            <ImagePlaceholder
                name="ClassificationProcess.png"
                description="Two-panel diagram: Left panel shows 'Training Phase' with labeled data (emails marked Spam/Not Spam) feeding into a learning algorithm producing a 'Classifier Model'. Right panel shows 'Testing Phase' where a new email goes into the Classifier Model and gets classified as 'Spam'."
                suggestedSize="900x400"
            />

            <ExampleBox title="🎯 Classification Examples in Real Life">
                <ul>
                    <li><strong>Email:</strong> Spam ✉️ or Not Spam ✅</li>
                    <li><strong>Medical:</strong> Disease Present 🔴 or Absent 🟢</li>
                    <li><strong>Loan:</strong> Approve ✅ or Reject ❌</li>
                    <li><strong>Sentiment:</strong> Positive 😊, Negative 😞, or Neutral 😐</li>
                    <li><strong>Image:</strong> Cat 🐱, Dog 🐕, or Bird 🐦</li>
                </ul>
            </ExampleBox>

            <h2 id="terminology">Key Terminology</h2>

            <table>
                <thead><tr><th>Term</th><th>Meaning</th><th>Example</th></tr></thead>
                <tbody>
                    <tr><td><strong>Features (Attributes)</strong></td><td>Input variables used for prediction</td><td>Age, Income, Credit Score</td></tr>
                    <tr><td><strong>Class Label</strong></td><td>The category to predict</td><td>Approve/Reject, Spam/Not Spam</td></tr>
                    <tr><td><strong>Training Set</strong></td><td>Labeled data used to build the model</td><td>1000 emails with known Spam/Not Spam labels</td></tr>
                    <tr><td><strong>Test Set</strong></td><td>Data used to evaluate model accuracy</td><td>200 emails — predict, then check against true labels</td></tr>
                    <tr><td><strong>Classifier</strong></td><td>The trained model/algorithm</td><td>Decision Tree, Naïve Bayes, KNN</td></tr>
                    <tr><td><strong>Overfitting</strong></td><td>Model memorizes training data, fails on new data</td><td>100% accuracy on training, 60% on test</td></tr>
                    <tr><td><strong>Underfitting</strong></td><td>Model is too simple, fails on both training and test data</td><td>50% accuracy on everything</td></tr>
                </tbody>
            </table>

            <h2 id="key-issues">Key Issues in Classification</h2>

            <ul>
                <li><strong>Overfitting:</strong> The model becomes too complex and memorizes noise in training data instead of learning real patterns</li>
                <li><strong>Underfitting:</strong> The model is too simple and cannot capture the underlying relationships</li>
                <li><strong>Class Imbalance:</strong> When 95% are "Not Fraud" and 5% are "Fraud" — the model might just predict everything as "Not Fraud" and still get 95% accuracy!</li>
                <li><strong>Missing Values:</strong> How to classify records with incomplete data?</li>
                <li><strong>Feature Selection:</strong> Which attributes are truly relevant for classification?</li>
                <li><strong>Scalability:</strong> Can the algorithm handle millions of training records?</li>
            </ul>

            <InfoBox type="highlight" title="Overfitting vs Underfitting — Easy Analogy 🧠">
                <p>
                    <strong>Overfitting:</strong> A student who memorizes all past exam papers word-by-word but can't answer any new question → fails the exam! 📚❌<br /><br />
                    <strong>Underfitting:</strong> A student who barely reads and knows too little → also fails! 😴❌<br /><br />
                    <strong>Good Fit:</strong> A student who understands concepts and can apply them to new questions → passes! 🎯✅
                </p>
            </InfoBox>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Classification is supervised learning — predicts predefined class labels",
                    "Two-step process: Train on labeled data → Test/predict on new data",
                    "Key challenge: balance between overfitting and underfitting",
                    "Common classifiers: Decision Trees, Naïve Bayes, KNN, Rule-Based"
                ]}
            />
        </div>
    );
}
