import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function AprioriAlgorithm() {
    return (
        <div>
            <p>
                The <strong>Apriori Algorithm</strong> is the most famous and foundational algorithm for
                frequent itemset mining. Proposed by <strong>Agrawal and Srikant (1994)</strong>, it
                uses a "bottom-up" approach — starting from individual items and building up to larger
                itemsets. Its name comes from its use of <strong>"a priori" (prior) knowledge</strong> about
                frequent itemsets.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "The Apriori Property (Anti-Monotone Property)",
                    "How Apriori works — step-by-step",
                    "Complete Worked Example with calculations",
                    "Candidate Generation and Pruning",
                    "Advantages and Limitations"
                ]}
            />

            <h2 id="apriori-property">The Apriori Property (Anti-Monotone) ⭐</h2>

            <InfoBox type="highlight" title="The Golden Rule of Apriori">
                <p>
                    <strong>"If an itemset is infrequent, all its supersets must also be infrequent."</strong>
                </p>
                <p>
                    Conversely: <strong>"All subsets of a frequent itemset must also be frequent."</strong>
                </p>
            </InfoBox>

            <ExampleBox title="Understanding the Apriori Property">
                <p>
                    If {"{"}Bread, Butter{"}"} is <strong>infrequent</strong> (appears in too few transactions),
                    then we <strong>don't need to check</strong> {"{"}Bread, Butter, Milk{"}"} because
                    it can't possibly be frequent either! This saves enormous computation.
                </p>
                <p>
                    Conversely: If {"{"}Bread, Butter, Milk{"}"} is <strong>frequent</strong>, then
                    {"{"}Bread, Butter{"}"}, {"{"}Bread, Milk{"}"}, and {"{"}Butter, Milk{"}"} must
                    all be frequent too.
                </p>
            </ExampleBox>

            <h2 id="algorithm-steps">How Apriori Works</h2>

            <ol>
                <li><strong>Scan database</strong> to count support of each individual item (1-itemsets)</li>
                <li><strong>Prune:</strong> Remove items below minimum support → gives frequent 1-itemsets (L1)</li>
                <li><strong>Generate candidates:</strong> Join L1 with L1 to create candidate 2-itemsets (C2)</li>
                <li><strong>Scan database</strong> again to count support of each candidate in C2</li>
                <li><strong>Prune:</strong> Remove candidates below min_sup → gives L2</li>
                <li><strong>Repeat:</strong> Join Lk with Lk to get C(k+1), scan, prune → L(k+1)</li>
                <li><strong>Stop</strong> when no more frequent itemsets can be generated</li>
            </ol>

            <ImagePlaceholder
                name="AprioriFlowchart.png"
                description="Flowchart: Start → Scan DB for L1 → Generate C2 → Scan DB, Prune → L2 → Generate C3 → Scan DB, Prune → L3 → ... → Stop when Lk is empty. Show iterative loop clearly."
                suggestedSize="800x500"
            />

            <h2 id="worked-example">Complete Worked Example ⭐</h2>

            <ExampleBox title="📝 Apriori Algorithm — Step-by-Step (min_sup = 40%, i.e. 2 out of 5)">
                <p><strong>Transaction Database:</strong></p>
                <table>
                    <thead><tr><th>TID</th><th>Items</th></tr></thead>
                    <tbody>
                        <tr><td>T1</td><td>I1, I2, I5</td></tr>
                        <tr><td>T2</td><td>I2, I4</td></tr>
                        <tr><td>T3</td><td>I2, I3</td></tr>
                        <tr><td>T4</td><td>I1, I2, I4</td></tr>
                        <tr><td>T5</td><td>I1, I3</td></tr>
                    </tbody>
                </table>
                <p>Total transactions = 5. Minimum support = 2 (i.e., 40% of 5).</p>

                <p><strong>Step 1: Scan for 1-itemsets (C1 → L1)</strong></p>
                <table>
                    <thead><tr><th>Itemset</th><th>Count</th><th>Frequent?</th></tr></thead>
                    <tbody>
                        <tr><td>{"{"}I1{"}"}</td><td>3</td><td>✅ Yes (≥2)</td></tr>
                        <tr><td>{"{"}I2{"}"}</td><td>4</td><td>✅ Yes</td></tr>
                        <tr><td>{"{"}I3{"}"}</td><td>2</td><td>✅ Yes</td></tr>
                        <tr><td>{"{"}I4{"}"}</td><td>2</td><td>✅ Yes</td></tr>
                        <tr><td>{"{"}I5{"}"}</td><td>1</td><td>❌ No (&lt;2)</td></tr>
                    </tbody>
                </table>
                <p><strong>L1 = {"{"}I1, I2, I3, I4{"}"}</strong> (I5 is pruned!)</p>

                <p><strong>Step 2: Generate C2 (Join L1 × L1) → Count → L2</strong></p>
                <table>
                    <thead><tr><th>Itemset</th><th>Count</th><th>Frequent?</th></tr></thead>
                    <tbody>
                        <tr><td>{"{"}I1, I2{"}"}</td><td>2</td><td>✅ Yes</td></tr>
                        <tr><td>{"{"}I1, I3{"}"}</td><td>1</td><td>❌ No</td></tr>
                        <tr><td>{"{"}I1, I4{"}"}</td><td>1</td><td>❌ No</td></tr>
                        <tr><td>{"{"}I2, I3{"}"}</td><td>1</td><td>❌ No</td></tr>
                        <tr><td>{"{"}I2, I4{"}"}</td><td>2</td><td>✅ Yes</td></tr>
                        <tr><td>{"{"}I3, I4{"}"}</td><td>0</td><td>❌ No</td></tr>
                    </tbody>
                </table>
                <p><strong>L2 = {"{"}(I1, I2), (I2, I4){"}"}</strong></p>

                <p><strong>Step 3: Generate C3 from L2 → Count → L3</strong></p>
                <p>
                    C3 = {"{"}I1, I2, I4{"}"} (joining {"{"}I1,I2{"}"} and {"{"}I2,I4{"}"})
                </p>
                <table>
                    <thead><tr><th>Itemset</th><th>Count</th><th>Frequent?</th></tr></thead>
                    <tbody>
                        <tr><td>{"{"}I1, I2, I4{"}"}</td><td>1</td><td>❌ No</td></tr>
                    </tbody>
                </table>
                <p><strong>L3 = Empty → STOP!</strong></p>

                <p><strong>Final Frequent Itemsets:</strong></p>
                <ul>
                    <li>L1: {"{"}I1{"}"}, {"{"}I2{"}"}, {"{"}I3{"}"}, {"{"}I4{"}"}</li>
                    <li>L2: {"{"}I1, I2{"}"}, {"{"}I2, I4{"}"}</li>
                </ul>
            </ExampleBox>

            <h2 id="pros-cons">Advantages and Disadvantages</h2>

            <table>
                <thead>
                    <tr><th>Advantages ✅</th><th>Disadvantages ❌</th></tr>
                </thead>
                <tbody>
                    <tr><td>Simple and easy to understand</td><td>Multiple database scans (slow for large datasets)</td></tr>
                    <tr><td>Effective pruning using Apriori Property</td><td>Generates a huge number of candidates</td></tr>
                    <tr><td>No false positives — all frequent itemsets are correct</td><td>Tedious candidate generation and testing</td></tr>
                    <tr><td>Works well with small to medium datasets</td><td>Not suitable for very large databases</td></tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Apriori Property: If an itemset is infrequent, all its supersets are also infrequent",
                    "Process: Scan → Count → Prune → Join → Repeat until no more frequent itemsets",
                    "Each iteration requires a full database scan (expensive for large DBs)",
                    "The Apriori property saves computation by eliminating impossible candidates early"
                ]}
            />
        </div>
    );
}
