import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function BasicConceptsFP() {
    return (
        <div>
            <p>
                Ever wondered how online stores know to recommend <em>"Customers who bought this
                also bought..."</em>? The answer is <strong>Frequent Pattern Mining!</strong> It's the
                technique behind discovering which items are frequently bought together, which web pages
                are visited together, and which genes are often co-expressed. Let's start with the basics.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "What are Frequent Patterns?",
                    "Types: Frequent Itemsets, Sequential Patterns, Substructures",
                    "Support, Confidence, and Lift — the 3 key measures",
                    "Market Basket Analysis — the classic application",
                    "Minimum Support and Confidence thresholds"
                ]}
            />

            <h2 id="what-are-fp">What are Frequent Patterns?</h2>
            <p>
                A <strong>frequent pattern</strong> is a pattern (set of items, subsequence, or substructure)
                that occurs <strong>frequently</strong> in a dataset. It reveals interesting relationships
                and correlations in data.
            </p>

            <h3>Types of Frequent Patterns</h3>
            <table>
                <thead><tr><th>Type</th><th>Description</th><th>Example</th></tr></thead>
                <tbody>
                    <tr><td><strong>Frequent Itemsets</strong></td><td>Items that frequently appear together</td><td>{"{"}Bread, Butter{"}"} appear in 60% of transactions</td></tr>
                    <tr><td><strong>Sequential Patterns</strong></td><td>Items bought in a sequence over time</td><td>Buy laptop → buy mouse → buy bag (within 1 month)</td></tr>
                    <tr><td><strong>Substructures</strong></td><td>Structural patterns in graphs or networks</td><td>Common molecular substructures in drug compounds</td></tr>
                </tbody>
            </table>

            <h2 id="market-basket">Market Basket Analysis 🛒</h2>
            <p>
                The most classic application! Analyzing <strong>supermarket transaction data</strong> to
                find which products are frequently bought together.
            </p>

            <ExampleBox title="🛒 Sample Transaction Database">
                <table>
                    <thead><tr><th>TID</th><th>Items Bought</th></tr></thead>
                    <tbody>
                        <tr><td>T1</td><td>Bread, Butter, Milk</td></tr>
                        <tr><td>T2</td><td>Bread, Butter</td></tr>
                        <tr><td>T3</td><td>Bread, Milk, Eggs</td></tr>
                        <tr><td>T4</td><td>Butter, Milk, Eggs</td></tr>
                        <tr><td>T5</td><td>Bread, Butter, Milk, Eggs</td></tr>
                    </tbody>
                </table>
                <p>
                    From this data, we can discover: <em>"{"{"}Bread, Butter{"}"} appears in 3 out of
                    5 transactions (60%)!"</em>
                </p>
            </ExampleBox>

            <h2 id="support-confidence-lift">The Three Key Measures ⭐</h2>

            <h3>1. Support</h3>
            <InfoBox type="note" title="Support Formula">
                <p>
                    <strong>Support(X) = (Number of transactions containing X) / (Total transactions)</strong>
                </p>
                <p>
                    <strong>Support(X → Y) = (Transactions containing both X and Y) / (Total transactions)</strong>
                </p>
                <p>"How often does this pattern occur in the entire dataset?"</p>
            </InfoBox>

            <ExampleBox title="Support Example (from 5 transactions above)">
                <ul>
                    <li>Support(Bread) = 4/5 = <strong>0.8 (80%)</strong></li>
                    <li>Support(Butter) = 3/5 = <strong>0.6 (60%)</strong></li>
                    <li>Support(Bread ∧ Butter) = 3/5 = <strong>0.6 (60%)</strong></li>
                </ul>
            </ExampleBox>

            <h3>2. Confidence</h3>
            <InfoBox type="note" title="Confidence Formula">
                <p>
                    <strong>Confidence(X → Y) = Support(X ∧ Y) / Support(X)</strong>
                </p>
                <p>"If a customer buys X, what is the probability they also buy Y?"</p>
            </InfoBox>

            <ExampleBox title="Confidence Example">
                <p><strong>Confidence(Bread → Butter)</strong> = Support(Bread ∧ Butter) / Support(Bread)</p>
                <p>= 0.6 / 0.8 = <strong>0.75 (75%)</strong></p>
                <p>💡 "75% of customers who buy Bread also buy Butter!"</p>
            </ExampleBox>

            <h3>3. Lift</h3>
            <InfoBox type="note" title="Lift Formula">
                <p>
                    <strong>Lift(X → Y) = Confidence(X → Y) / Support(Y)</strong>
                </p>
                <p>"Does X really influence the purchase of Y, or is it just a coincidence?"</p>
            </InfoBox>

            <ExampleBox title="Interpreting Lift">
                <ul>
                    <li><strong>Lift = 1:</strong> No relationship — X and Y are independent</li>
                    <li><strong>Lift &gt; 1:</strong> Positive correlation — buying X increases chance of buying Y ✅</li>
                    <li><strong>Lift &lt; 1:</strong> Negative correlation — buying X decreases chance of buying Y</li>
                </ul>
                <p>
                    Lift(Bread → Butter) = 0.75 / 0.6 = <strong>1.25</strong> → Positive correlation!
                    Bread buyers are 1.25× more likely to buy Butter.
                </p>
            </ExampleBox>

            <h2 id="min-threshold">Minimum Support & Confidence Thresholds</h2>
            <p>
                To filter out uninteresting patterns, we set <strong>minimum thresholds</strong>:
            </p>
            <ul>
                <li><strong>Minimum Support (min_sup):</strong> Only keep itemsets that appear in at least this % of transactions</li>
                <li><strong>Minimum Confidence (min_conf):</strong> Only keep rules with at least this confidence level</li>
            </ul>
            <ExampleBox title="Threshold Example">
                <p>If min_sup = 50% and min_conf = 70%:</p>
                <ul>
                    <li>{"{"}Bread, Butter{"}"} with Support 60% → ✅ Passes (≥50%)</li>
                    <li>{"{"}Bread, Eggs{"}"} with Support 40% → ❌ Fails (&lt;50%)</li>
                    <li>Bread → Butter with Confidence 75% → ✅ Passes (≥70%)</li>
                </ul>
            </ExampleBox>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Frequent Patterns = items/sequences that appear frequently in data",
                    "Support = how often a pattern occurs in the dataset",
                    "Confidence = probability of Y given X was purchased",
                    "Lift > 1 means positive correlation; Lift = 1 means independent",
                    "Set min_sup and min_conf thresholds to filter uninteresting patterns"
                ]}
            />
        </div>
    );
}
