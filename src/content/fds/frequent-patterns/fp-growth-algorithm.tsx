import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function FPGrowthAlgorithm() {
    return (
        <div>
            <p>
                The Apriori algorithm has a major weakness: <strong>multiple database scans</strong> and
                <strong> huge candidate generation</strong>. The <strong>FP-Growth (Frequent Pattern Growth)
                </strong> algorithm solves this by compressing the database into a compact tree structure
                called an <strong>FP-Tree</strong>, requiring only <strong>2 database scans</strong> and
                <strong> zero candidate generation!</strong>
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "Why FP-Growth was created (limitations of Apriori)",
                    "What is an FP-Tree (Frequent Pattern Tree)?",
                    "How FP-Growth builds and mines the FP-Tree",
                    "Apriori vs FP-Growth — complete comparison"
                ]}
            />

            <h2 id="why-fpgrowth">Why FP-Growth? (Apriori's Problems)</h2>

            <table>
                <thead>
                    <tr><th>Apriori's Problem</th><th>FP-Growth's Solution</th></tr>
                </thead>
                <tbody>
                    <tr><td>Multiple database scans (K scans for K-itemsets)</td><td>Only <strong>2 scans</strong> needed</td></tr>
                    <tr><td>Generates huge number of candidates</td><td><strong>No candidate generation</strong> — divide and conquer</td></tr>
                    <tr><td>Slow for large datasets</td><td>Much faster — compresses DB into FP-Tree</td></tr>
                </tbody>
            </table>

            <h2 id="fp-tree">What is an FP-Tree?</h2>

            <p>
                An <strong>FP-Tree</strong> is a compact, compressed representation of the entire database
                that retains all the frequent itemset information. Think of it like a smart filing system
                where common prefixes are shared — just like how a dictionary organizes words.
            </p>

            <ImagePlaceholder
                name="FPTreeStructure.png"
                description="An FP-Tree diagram showing a root node labeled 'null', with child branches for frequent items. Each node shows an item and its count. Nodes are connected by solid lines (parent-child). Dotted lines connect nodes of the same item (header table links). Professional tree diagram."
                suggestedSize="750x500"
            />

            <h2 id="how-it-works">How FP-Growth Works — 3 Steps</h2>

            <h3>Step 1: First Scan — Count Item Frequencies</h3>
            <p>Scan the database once to count the support of each item. Remove infrequent items.</p>

            <h3>Step 2: Build the FP-Tree</h3>
            <ol>
                <li>Create a root node labeled <strong>"null"</strong></li>
                <li>For each transaction, <strong>sort items by frequency</strong> (most frequent first)</li>
                <li>Insert each transaction into the tree — <strong>share common prefixes</strong></li>
                <li>Maintain a <strong>header table</strong> linking all nodes of the same item</li>
            </ol>

            <ExampleBox title="Building FP-Tree — Example">
                <p><strong>Transaction Database (min_sup = 3):</strong></p>
                <table>
                    <thead><tr><th>TID</th><th>Items</th><th>Ordered Frequent Items</th></tr></thead>
                    <tbody>
                        <tr><td>T1</td><td>f, a, c, d, g, i, m, p</td><td>f, c, a, m, p</td></tr>
                        <tr><td>T2</td><td>a, b, c, f, l, m, o</td><td>f, c, a, b, m</td></tr>
                        <tr><td>T3</td><td>b, f, h, j, o</td><td>f, b</td></tr>
                        <tr><td>T4</td><td>b, c, k, s, p</td><td>c, b, p</td></tr>
                        <tr><td>T5</td><td>a, f, c, e, l, p, m, n</td><td>f, c, a, m, p</td></tr>
                    </tbody>
                </table>
                <p>
                    Items sorted by frequency: f(4), c(4), a(3), b(3), m(3), p(3) — all have support ≥ 3.<br />
                    The tree shares common prefixes (f→c→a→m→p appears twice, counted as one path with count 2).
                </p>
            </ExampleBox>

            <h3>Step 3: Mine the FP-Tree</h3>
            <p>
                Mine patterns using the <strong>divide-and-conquer strategy</strong>:
            </p>
            <ol>
                <li>Start from the <strong>least frequent item</strong> in the header table</li>
                <li>For each item, find its <strong>conditional pattern base</strong> (all prefix paths)</li>
                <li>Build a <strong>conditional FP-Tree</strong> from these paths</li>
                <li>Recursively mine the conditional FP-Tree</li>
            </ol>

            <h2 id="apriori-vs-fpgrowth">Apriori vs FP-Growth</h2>

            <table>
                <thead>
                    <tr><th>Feature</th><th>Apriori</th><th>FP-Growth</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Database Scans</strong></td><td>Multiple (k scans for k-itemsets)</td><td>Only 2 scans</td></tr>
                    <tr><td><strong>Candidate Generation</strong></td><td>Generates huge candidates</td><td>No candidate generation!</td></tr>
                    <tr><td><strong>Data Structure</strong></td><td>Uses flat itemsets</td><td>Compressed FP-Tree</td></tr>
                    <tr><td><strong>Speed</strong></td><td>Slower for large datasets</td><td>Much faster</td></tr>
                    <tr><td><strong>Memory</strong></td><td>Less memory</td><td>More memory (stores entire tree)</td></tr>
                    <tr><td><strong>Approach</strong></td><td>Generate and Test</td><td>Divide and Conquer</td></tr>
                    <tr><td><strong>Complexity</strong></td><td>Simple to understand</td><td>More complex to implement</td></tr>
                    <tr><td><strong>Best For</strong></td><td>Small to medium datasets</td><td>Large datasets</td></tr>
                </tbody>
            </table>

            <InfoBox type="tip" title="Exam Tip ⭐">
                <p>
                    The comparison table between Apriori and FP-Growth is very frequently asked
                    (5-10 marks). Memorize at least 5 differences. Also practice drawing the FP-Tree
                    for a given dataset.
                </p>
            </InfoBox>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "FP-Growth overcomes Apriori's multiple scans and candidate generation problems",
                    "FP-Tree is a compressed tree that stores the entire database in 2 scans",
                    "Uses divide-and-conquer: conditional pattern base → conditional FP-Tree → mine recursively",
                    "FP-Growth is significantly faster than Apriori for large datasets",
                    "Trade-off: FP-Growth uses more memory due to tree storage"
                ]}
            />
        </div>
    );
}
