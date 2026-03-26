import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function MiningAssociationRules() {
    return (
        <div>
            <p>
                Once we have the <strong>frequent itemsets</strong> (using Apriori or FP-Growth), the next
                step is to <strong>generate association rules</strong> from them. Association rules take the
                form <strong>X → Y</strong>, meaning "if a customer buys X, they are likely to also buy Y."
                This is where the real business value comes from!
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "What are Association Rules?",
                    "How to generate rules from frequent itemsets",
                    "Evaluating rule quality: Support, Confidence, Lift",
                    "Types of Association Rules",
                    "Applications of Association Rule Mining"
                ]}
            />

            <h2 id="what-are-rules">What are Association Rules?</h2>

            <p>
                An <strong>Association Rule</strong> is an implication of the form <strong>X → Y</strong> where:
            </p>
            <ul>
                <li><strong>X (Antecedent/LHS):</strong> The "if" part — the condition</li>
                <li><strong>Y (Consequent/RHS):</strong> The "then" part — the result</li>
                <li><strong>X ∩ Y = ∅:</strong> X and Y must not share any common items</li>
            </ul>

            <ExampleBox title="Association Rule Examples">
                <ul>
                    <li><strong>{"{"}Bread{"}"} → {"{"}Butter{"}"}</strong> — "Bread buyers also buy Butter"</li>
                    <li><strong>{"{"}Laptop, Mouse{"}"} → {"{"}Laptop Bag{"}"}</strong> — "Laptop + Mouse buyers also buy a Laptop Bag"</li>
                    <li><strong>{"{"}Diapers, Friday{"}"} → {"{"}Beer{"}"}</strong> — "Diaper buyers on Fridays also buy Beer"</li>
                </ul>
            </ExampleBox>

            <h2 id="rule-generation">How to Generate Rules from Frequent Itemsets</h2>

            <p>
                For each frequent itemset <em>l</em>, generate all non-empty subsets <em>s</em>.
                For each subset <em>s</em>, create the rule: <strong>s → (l - s)</strong> and check if
                its confidence ≥ min_conf.
            </p>

            <ExampleBox title="📝 Rule Generation — Worked Example">
                <p><strong>Frequent Itemset:</strong> {"{"}I1, I2, I5{"}"} with Support = 2/5 (40%)</p>
                <p><strong>Generate all non-empty subsets:</strong></p>
                <table>
                    <thead><tr><th>Subset (s)</th><th>Rule: s → (l - s)</th><th>Confidence</th><th>Keep? (min_conf = 70%)</th></tr></thead>
                    <tbody>
                        <tr><td>{"{"}I1, I2{"}"}</td><td>{"{"}I1, I2{"}"} → {"{"}I5{"}"}</td><td>2/4 = 50%</td><td>❌ No</td></tr>
                        <tr><td>{"{"}I1, I5{"}"}</td><td>{"{"}I1, I5{"}"} → {"{"}I2{"}"}</td><td>2/2 = 100%</td><td>✅ Yes</td></tr>
                        <tr><td>{"{"}I2, I5{"}"}</td><td>{"{"}I2, I5{"}"} → {"{"}I1{"}"}</td><td>2/2 = 100%</td><td>✅ Yes</td></tr>
                        <tr><td>{"{"}I1{"}"}</td><td>{"{"}I1{"}"} → {"{"}I2, I5{"}"}</td><td>2/6 = 33%</td><td>❌ No</td></tr>
                        <tr><td>{"{"}I2{"}"}</td><td>{"{"}I2{"}"} → {"{"}I1, I5{"}"}</td><td>2/7 = 29%</td><td>❌ No</td></tr>
                        <tr><td>{"{"}I5{"}"}</td><td>{"{"}I5{"}"} → {"{"}I1, I2{"}"}</td><td>2/2 = 100%</td><td>✅ Yes</td></tr>
                    </tbody>
                </table>
                <p><strong>Final Strong Rules (with min_conf ≥ 70%):</strong></p>
                <ul>
                    <li>{"{"}I1, I5{"}"} → {"{"}I2{"}"} (100% confidence)</li>
                    <li>{"{"}I2, I5{"}"} → {"{"}I1{"}"} (100% confidence)</li>
                    <li>{"{"}I5{"}"} → {"{"}I1, I2{"}"} (100% confidence)</li>
                </ul>
            </ExampleBox>

            <h2 id="types-of-rules">Types of Association Rules</h2>

            <table>
                <thead>
                    <tr><th>Type</th><th>Description</th><th>Example</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Boolean Rules</strong></td><td>Items either present or absent</td><td>Bread → Butter (buy or don't buy)</td></tr>
                    <tr><td><strong>Quantitative Rules</strong></td><td>Involve numerical attributes</td><td>Age(30-40) ∧ Income(High) → Buys(Car)</td></tr>
                    <tr><td><strong>Single-Dimensional</strong></td><td>All items from one dimension</td><td>Product → Product</td></tr>
                    <tr><td><strong>Multi-Dimensional</strong></td><td>Items from multiple dimensions</td><td>Age ∧ Location → Product</td></tr>
                    <tr><td><strong>Multilevel</strong></td><td>Rules at different hierarchy levels</td><td>Milk → Bread (general) vs Amul_Milk → Brown_Bread (specific)</td></tr>
                </tbody>
            </table>

            <h2 id="applications">Applications</h2>

            <table>
                <thead>
                    <tr><th>Domain</th><th>Example Rule</th><th>Business Action</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Retail</strong></td><td>Bread → Butter (75%)</td><td>Place bread & butter near each other</td></tr>
                    <tr><td><strong>E-Commerce</strong></td><td>Laptop → Mouse, Bag (60%)</td><td>"Frequently bought together" section</td></tr>
                    <tr><td><strong>Healthcare</strong></td><td>Symptom_A, Symptom_B → Disease_X (85%)</td><td>Automated preliminary diagnosis</td></tr>
                    <tr><td><strong>Web Mining</strong></td><td>Page_A → Page_B → Page_C (70%)</td><td>Optimize website navigation</td></tr>
                    <tr><td><strong>Banking</strong></td><td>Savings_Account → Fixed_Deposit (65%)</td><td>Cross-sell FD to savings holders</td></tr>
                </tbody>
            </table>

            <InfoBox type="tip" title="Exam Strategy 📝">
                <p>
                    For "Mining Association Rules" questions: First explain what association rules are,
                    then show the generation process with a numerical example, and finally mention 2-3
                    real-world applications. This covers all marking criteria.
                </p>
            </InfoBox>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Association Rules: X → Y (if X then Y) — generated from frequent itemsets",
                    "Rules must satisfy minimum support AND minimum confidence thresholds",
                    "Generate all subsets of a frequent itemset and test each as a potential rule",
                    "Types: Boolean, Quantitative, Single-Dimensional, Multi-Dimensional, Multilevel",
                    "Major applications: retail product placement, e-commerce recommendations, healthcare diagnosis"
                ]}
            />
        </div>
    );
}
