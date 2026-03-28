import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function RuleBasedClassification() {
    return (
        <div>
            <p>
                <strong>Rule-Based Classification</strong> uses a set of <strong>IF-THEN rules</strong> to
                classify data. These rules are human-readable and easy to understand, making them popular
                in applications where <strong>interpretability</strong> is crucial (like medical decision systems).
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "What are IF-THEN rules?",
                    "Rule structure: Antecedent → Consequent",
                    "How rules are generated from Decision Trees",
                    "Rule evaluation: Coverage and Accuracy",
                    "Advantages and Disadvantages"
                ]}
            />

            <h2 id="if-then-rules">IF-THEN Rules</h2>

            <p>A classification rule is of the form:</p>
            <InfoBox type="highlight" title="Rule Format">
                <p><strong>IF (condition) THEN (class label)</strong></p>
                <p><strong>IF (antecedent) THEN (consequent)</strong></p>
            </InfoBox>

            <ExampleBox title="IF-THEN Rule Examples">
                <ul>
                    <li><strong>R1:</strong> IF Age=Youth AND Student=Yes THEN Buys_Computer = Yes</li>
                    <li><strong>R2:</strong> IF Age=Senior AND Credit=Excellent THEN Buys_Computer = No</li>
                    <li><strong>R3:</strong> IF Age=Middle-aged THEN Buys_Computer = Yes</li>
                    <li><strong>R4:</strong> IF Income=High AND Student=No THEN Buys_Computer = No</li>
                </ul>
            </ExampleBox>

            <h2 id="rule-evaluation">Evaluating Rules</h2>

            <table>
                <thead><tr><th>Metric</th><th>Formula</th><th>Meaning</th></tr></thead>
                <tbody>
                    <tr><td><strong>Coverage</strong></td><td>% of records that satisfy the antecedent</td><td>How many records does this rule apply to?</td></tr>
                    <tr><td><strong>Accuracy</strong></td><td>% of covered records that are correctly classified</td><td>When the rule fires, how often is it right?</td></tr>
                </tbody>
            </table>

            <ExampleBox title="Coverage and Accuracy Example">
                <p><strong>Rule:</strong> IF Age=Youth AND Student=Yes THEN Buys=Yes</p>
                <p>Out of 14 records:</p>
                <ul>
                    <li>2 records satisfy "Age=Youth AND Student=Yes" → <strong>Coverage = 2/14 = 14.3%</strong></li>
                    <li>Both 2 records have Buys=Yes → <strong>Accuracy = 2/2 = 100%</strong></li>
                </ul>
            </ExampleBox>

            <h2 id="from-trees">Generating Rules from Decision Trees</h2>
            <p>
                Each path from root to leaf in a Decision Tree can be converted into an IF-THEN rule.
                This is one of the simplest ways to create rule-based classifiers.
            </p>

            <ExampleBox title="Tree to Rules Conversion">
                <p><strong>Decision Tree path:</strong> Root(Outlook) → Sunny → Humidity → High → No</p>
                <p><strong>Becomes Rule:</strong> IF Outlook=Sunny AND Humidity=High THEN Play=No</p>
                <p><strong>Another path:</strong> Root(Outlook) → Overcast → Yes</p>
                <p><strong>Becomes Rule:</strong> IF Outlook=Overcast THEN Play=Yes</p>
            </ExampleBox>

            <h2 id="rule-conflict">Handling Rule Conflicts</h2>
            <p>When multiple rules match a record but give different predictions:</p>
            <ul>
                <li><strong>Ordered Rules (Decision List):</strong> Rules have priority — the first matching rule wins</li>
                <li><strong>Unordered Rules:</strong> Use voting — the majority class prediction wins</li>
                <li><strong>Default Rule:</strong> If no rule matches, use a default class (usually the most common class)</li>
            </ul>

            <h2 id="pros-cons">Advantages and Disadvantages</h2>

            <table>
                <thead><tr><th>Advantages ✅</th><th>Disadvantages ❌</th></tr></thead>
                <tbody>
                    <tr><td>Highly interpretable — easy to understand</td><td>May generate too many rules</td></tr>
                    <tr><td>Can be directly derived from Decision Trees</td><td>Rules may conflict with each other</td></tr>
                    <tr><td>Easy to modify — add/remove rules</td><td>May not cover all scenarios (gaps)</td></tr>
                    <tr><td>Suitable for expert systems</td><td>Harder to optimize than other methods</td></tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Rules are IF (condition) THEN (class) — human-readable!",
                    "Coverage = how many records a rule applies to",
                    "Accuracy = how often the rule is correct when it fires",
                    "Decision Tree paths can be converted to IF-THEN rules"
                ]}
            />
        </div>
    );
}
