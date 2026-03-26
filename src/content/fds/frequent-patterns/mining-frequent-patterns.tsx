// src/content/fds/frequent-patterns/mining-frequent-patterns.tsx
import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder, CodeBlock } from '@/components/ContentDisplay';

export default function MiningFrequentPatterns() {
    return (
        <div>
            <p>
                Have you ever noticed that when you buy a smartphone on Amazon, it immediately suggests
                a phone case and a screen protector? Or when you buy pasta, the store recommends pasta sauce?
                This isn't magic — it's <strong>Frequent Pattern Mining</strong>! By analyzing millions of
                shopping transactions, algorithms discover which items are <strong>frequently bought together</strong>,
                enabling powerful recommendations and business decisions.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "What are Frequent Patterns and why they matter",
                    "Basic Concepts: Support, Confidence, Lift",
                    "Market Basket Analysis — The Business Foundation",
                    "Frequent Itemset Mining Methods",
                    "The Apriori Algorithm — Step-by-step with examples",
                    "FP-Growth (Frequent Pattern Growth) Algorithm",
                    "Mining Association Rules from Frequent Itemsets"
                ]}
            />

            <h2 id="basic-concepts">Basic Concepts</h2>

            <h3>What is a Frequent Pattern?</h3>
            <p>
                A <strong>frequent pattern</strong> is a pattern (a set of items, a sequence, or a structure)
                that occurs frequently in a dataset. Finding these patterns is fundamental to many Data Mining tasks
                like association rules, correlations, and sequential patterns.
            </p>

            <InfoBox type="note" title="Types of Frequent Patterns">
                <ul>
                    <li><strong>Frequent Itemsets:</strong> Items that frequently appear together in transactions. Example: {"{"}Bread, Butter{"}"} appears in 60% of all shopping baskets</li>
                    <li><strong>Frequent Subsequences:</strong> Patterns that occur in a sequence. Example: Buying a laptop → then a laptop bag → then a mouse</li>
                    <li><strong>Frequent Substructures:</strong> Structural patterns in graphs or trees (more advanced)</li>
                </ul>
            </InfoBox>

            <h3>Key Terminology</h3>

            <h4>1. Transaction Database</h4>
            <p>
                A dataset where each record (transaction) contains a set of items purchased together.
            </p>

            <ExampleBox title="Sample Transaction Database (Supermarket)">
                <table>
                    <thead>
                        <tr>
                            <th>Transaction ID (TID)</th>
                            <th>Items Bought</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>T1</td><td>Bread, Butter, Milk</td></tr>
                        <tr><td>T2</td><td>Bread, Butter</td></tr>
                        <tr><td>T3</td><td>Bread, Milk, Eggs</td></tr>
                        <tr><td>T4</td><td>Butter, Milk, Eggs</td></tr>
                        <tr><td>T5</td><td>Bread, Butter, Milk, Eggs</td></tr>
                    </tbody>
                </table>
            </ExampleBox>

            <h4>2. Support</h4>
            <p>
                <strong>Support</strong> measures how frequently an itemset appears in the database.
                It's the percentage of transactions that contain the itemset.
            </p>

            <InfoBox type="highlight" title="Support Formula">
                <p>
                    <strong>Support(A) = (Number of transactions containing A) / (Total number of transactions)</strong>
                </p>
                <p>
                    Example: From the table above, <strong>Support(Bread)</strong> = 4/5 = <strong>80%</strong> (Bread appears in T1, T2, T3, T5 → 4 out of 5 transactions)
                </p>
                <p>
                    <strong>Support(Bread, Butter)</strong> = 3/5 = <strong>60%</strong> (Both Bread AND Butter appear together in T1, T2, T5)
                </p>
            </InfoBox>

            <h4>3. Minimum Support Threshold</h4>
            <p>
                A user-defined threshold. An itemset is considered <strong>"frequent"</strong> only if its
                support is greater than or equal to the minimum support threshold.
            </p>
            <ExampleBox title="Example">
                <p>
                    If <strong>minimum support = 50%</strong>, then an itemset must appear in at least 50% of
                    transactions to be considered frequent. From our table: Support(Bread) = 80% ✅ Frequent,
                    Support(Eggs) = 60% ✅ Frequent.
                </p>
            </ExampleBox>

            <h4>4. Confidence</h4>
            <p>
                <strong>Confidence</strong> measures the reliability of an association rule. It tells you:
                <em> "If someone buys item A, what's the probability they also buy item B?"</em>
            </p>

            <InfoBox type="highlight" title="Confidence Formula">
                <p>
                    <strong>Confidence(A → B) = Support(A ∪ B) / Support(A)</strong>
                </p>
                <p>
                    Example: <strong>Confidence(Bread → Butter)</strong> = Support(Bread, Butter) / Support(Bread) = (3/5) / (4/5) = 3/4 = <strong>75%</strong>
                </p>
                <p>
                    Meaning: <em>"75% of the time, when someone buys Bread, they also buy Butter."</em>
                </p>
            </InfoBox>

            <h4>5. Lift</h4>
            <p>
                <strong>Lift</strong> measures how much more often items A and B occur together than expected
                if they were statistically independent.
            </p>

            <InfoBox type="highlight" title="Lift Formula">
                <p>
                    <strong>Lift(A → B) = Confidence(A → B) / Support(B)</strong>
                </p>
                <ul>
                    <li><strong>Lift {'>'} 1:</strong> A and B are positively correlated (buying A increases the chance of buying B)</li>
                    <li><strong>Lift = 1:</strong> A and B are independent (no relationship)</li>
                    <li><strong>Lift {'<'} 1:</strong> A and B are negatively correlated (buying A decreases the chance of buying B)</li>
                </ul>
            </InfoBox>

            <h2 id="market-basket">Market Basket Analysis</h2>

            <p>
                <strong>Market Basket Analysis</strong> is a Data Mining technique used primarily in retail
                to find associations between items that customers frequently buy together. It answers
                the question: <em>"What items do customers frequently purchase together?"</em>
            </p>

            <ImagePlaceholder
                name="MarketBasketAnalysis.png"
                description="An illustration showing a shopping cart (market basket) with items like bread, butter, milk, eggs. Arrows connect items that are frequently bought together, with percentage labels showing support and confidence values. The background should be a stylized supermarket shelf. Use warm, friendly colors."
                suggestedSize="800x400"
            />

            <ExampleBox title="🛒 Famous Real-World Example: Beer & Diapers">
                <p>
                    In the 1990s, a US supermarket chain ran Market Basket Analysis and discovered an
                    astonishing pattern: <strong>Men who came to buy diapers on Friday evenings also
                    bought beer!</strong>
                </p>
                <p>
                    The store placed beer and diapers near each other, and sales of both products increased
                    significantly. This is the quintessential example of Data Mining revealing
                    <em> non-obvious, actionable patterns</em> that no human would have guessed!
                </p>
            </ExampleBox>

            <h2 id="apriori-algorithm">The Apriori Algorithm</h2>

            <p>
                The <strong>Apriori Algorithm</strong> is the most fundamental and widely-used algorithm for
                mining frequent itemsets. It was proposed by <strong>Agrawal and Srikant</strong> in 1994.
            </p>

            <h3>The Apriori Principle (Key Idea)</h3>

            <InfoBox type="highlight" title="The Apriori Property (Anti-Monotone Property)">
                <p>
                    <strong>"If an itemset is infrequent, then all its supersets must also be infrequent."</strong>
                </p>
                <p>
                    In simple words: If {"{"}Bread{"}"} is not frequent (doesn't meet minimum support), then
                    {"{"}Bread, Butter{"}"}, {"{"}Bread, Milk{"}"}, {"{"}Bread, Butter, Milk{"}"} — ALL of them
                    are automatically infrequent. So we can <strong>prune</strong> (skip) them and save
                    enormous computation time!
                </p>
            </InfoBox>

            <h3>How Apriori Works — Step by Step</h3>

            <ol>
                <li>
                    <strong>Step 1: Scan the database</strong> to find the support of each individual item (1-itemsets). Remove items that don't meet the minimum support threshold.
                </li>
                <li>
                    <strong>Step 2: Generate candidate 2-itemsets</strong> by combining frequent 1-itemsets. Scan the database again to find their support. Remove infrequent ones.
                </li>
                <li>
                    <strong>Step 3: Generate candidate 3-itemsets</strong> from frequent 2-itemsets. Scan again. Remove infrequent ones.
                </li>
                <li>
                    <strong>Continue</strong> until no more frequent itemsets can be generated.
                </li>
            </ol>

            <ExampleBox title="🔢 Apriori Algorithm — Complete Worked Example">
                <p><strong>Transaction Database:</strong></p>
                <table>
                    <thead><tr><th>TID</th><th>Items</th></tr></thead>
                    <tbody>
                        <tr><td>T1</td><td>A, B, C</td></tr>
                        <tr><td>T2</td><td>A, C</td></tr>
                        <tr><td>T3</td><td>A, B</td></tr>
                        <tr><td>T4</td><td>A, B, C</td></tr>
                        <tr><td>T5</td><td>B, C</td></tr>
                    </tbody>
                </table>
                <p><strong>Minimum Support = 60% (i.e., item must appear in at least 3 out of 5 transactions)</strong></p>

                <p><strong>Pass 1 — Find frequent 1-itemsets (C₁ → L₁):</strong></p>
                <table>
                    <thead><tr><th>Itemset</th><th>Count</th><th>Support</th><th>Frequent?</th></tr></thead>
                    <tbody>
                        <tr><td>{"{"}A{"}"}</td><td>4</td><td>80%</td><td>✅ Yes</td></tr>
                        <tr><td>{"{"}B{"}"}</td><td>4</td><td>80%</td><td>✅ Yes</td></tr>
                        <tr><td>{"{"}C{"}"}</td><td>4</td><td>80%</td><td>✅ Yes</td></tr>
                    </tbody>
                </table>

                <p><strong>Pass 2 — Find frequent 2-itemsets (C₂ → L₂):</strong></p>
                <table>
                    <thead><tr><th>Itemset</th><th>Count</th><th>Support</th><th>Frequent?</th></tr></thead>
                    <tbody>
                        <tr><td>{"{"}A, B{"}"}</td><td>3</td><td>60%</td><td>✅ Yes</td></tr>
                        <tr><td>{"{"}A, C{"}"}</td><td>3</td><td>60%</td><td>✅ Yes</td></tr>
                        <tr><td>{"{"}B, C{"}"}</td><td>3</td><td>60%</td><td>✅ Yes</td></tr>
                    </tbody>
                </table>

                <p><strong>Pass 3 — Find frequent 3-itemsets (C₃ → L₃):</strong></p>
                <table>
                    <thead><tr><th>Itemset</th><th>Count</th><th>Support</th><th>Frequent?</th></tr></thead>
                    <tbody>
                        <tr><td>{"{"}A, B, C{"}"}</td><td>2</td><td>40%</td><td>❌ No (below 60%)</td></tr>
                    </tbody>
                </table>

                <p><strong>Final Frequent Itemsets:</strong> {"{"}A{"}"}, {"{"}B{"}"}, {"{"}C{"}"}, {"{"}A,B{"}"}, {"{"}A,C{"}"}, {"{"}B,C{"}"}</p>
            </ExampleBox>

            <ImagePlaceholder
                name="AprioriAlgorithmFlowchart.png"
                description="A flowchart of the Apriori Algorithm showing the iterative process: Start → Scan DB for 1-itemsets → Prune infrequent → Generate candidate 2-itemsets → Scan DB → Prune → Generate candidate 3-itemsets → ... → No more candidates? → Stop. Each step in a rounded box with arrows. Highlight the 'pruning' step in red to emphasize the Apriori property. Use a clean flowchart style with blue boxes and red pruning diamonds."
                suggestedSize="700x600"
            />

            <h3>Limitations of Apriori</h3>
            <ul>
                <li><strong>Multiple database scans:</strong> Apriori scans the entire database multiple times (once per pass), which is slow for large databases</li>
                <li><strong>Candidate generation:</strong> It generates a huge number of candidate itemsets, many of which turn out to be infrequent</li>
                <li><strong>Memory intensive:</strong> Storing all candidate itemsets requires significant memory</li>
            </ul>

            <h2 id="fp-growth">FP-Growth Algorithm</h2>

            <p>
                The <strong>FP-Growth (Frequent Pattern Growth)</strong> algorithm was designed to overcome
                the limitations of Apriori. It is <strong>significantly faster</strong> because it:
            </p>
            <ul>
                <li>Scans the database only <strong>twice</strong> (not multiple times like Apriori)</li>
                <li>Does <strong>NOT generate candidates</strong></li>
                <li>Compresses the database into a compact tree structure called an <strong>FP-Tree</strong></li>
            </ul>

            <h3>How FP-Growth Works</h3>

            <ol>
                <li>
                    <strong>First Scan:</strong> Count the frequency of each individual item. Remove infrequent items. Sort remaining items by decreasing frequency.
                </li>
                <li>
                    <strong>Second Scan:</strong> Build the <strong>FP-Tree</strong> by reading each transaction and inserting items (in sorted order) into the tree. Common prefixes are shared, making the tree compact.
                </li>
                <li>
                    <strong>Mining:</strong> Extract frequent itemsets directly from the FP-Tree using a divide-and-conquer strategy, without ever scanning the original database again.
                </li>
            </ol>

            <ImagePlaceholder
                name="FPTreeExample.png"
                description="A visual example of an FP-Tree (Frequent Pattern Tree). Show a tree structure with a root node labeled 'null' at top, with branches going down. Nodes represent items (like Bread:4, Butter:3, Milk:3) with counts. Common prefixes share the same path. Include a header table on the left showing items and their frequencies, with node-link pointers. Use green for nodes, red for node-links."
                suggestedSize="800x500"
            />

            <h3>Apriori vs FP-Growth Comparison</h3>

            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Apriori</th>
                        <th>FP-Growth</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Database Scans</strong></td>
                        <td>Multiple (one per level)</td>
                        <td>Only 2 scans</td>
                    </tr>
                    <tr>
                        <td><strong>Candidate Generation</strong></td>
                        <td>Yes (generates many candidates)</td>
                        <td>No (uses tree structure)</td>
                    </tr>
                    <tr>
                        <td><strong>Speed</strong></td>
                        <td>Slower for large datasets</td>
                        <td>Much faster</td>
                    </tr>
                    <tr>
                        <td><strong>Memory</strong></td>
                        <td>High (stores all candidates)</td>
                        <td>Moderate (stores compressed tree)</td>
                    </tr>
                    <tr>
                        <td><strong>Best For</strong></td>
                        <td>Small to medium datasets</td>
                        <td>Large datasets</td>
                    </tr>
                    <tr>
                        <td><strong>Algorithm Type</strong></td>
                        <td>Generate-and-Test</td>
                        <td>Pattern-Growth (Divide & Conquer)</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="association-rules">Mining Association Rules</h2>

            <p>
                Once we have found the frequent itemsets, the next step is to generate <strong>association
                rules</strong> from them. An association rule is an implication of the form:
            </p>

            <InfoBox type="highlight" title="Association Rule Format">
                <p>
                    <strong>A → B</strong> [Support = s%, Confidence = c%]
                </p>
                <p>
                    Meaning: <em>"If a customer buys item A, they are also likely to buy item B, with confidence c%."</em>
                </p>
            </InfoBox>

            <h3>Generating Rules from Frequent Itemsets</h3>

            <p>
                For each frequent itemset <strong>L</strong>, generate all non-empty subsets. For each
                subset <strong>s</strong>, generate a rule <strong>s → (L - s)</strong> if the confidence
                meets the minimum confidence threshold.
            </p>

            <ExampleBox title="Generating Association Rules">
                <p>
                    <strong>Frequent Itemset:</strong> {"{"}A, B, C{"}"} with support = 40%
                </p>
                <p><strong>Possible Association Rules:</strong></p>
                <table>
                    <thead><tr><th>Rule</th><th>Confidence</th><th>Strong? (min_conf = 70%)</th></tr></thead>
                    <tbody>
                        <tr><td>A, B → C</td><td>Support(A,B,C)/Support(A,B) = 40%/60% = 67%</td><td>❌ No</td></tr>
                        <tr><td>A, C → B</td><td>Support(A,B,C)/Support(A,C) = 40%/60% = 67%</td><td>❌ No</td></tr>
                        <tr><td>B, C → A</td><td>Support(A,B,C)/Support(B,C) = 40%/60% = 67%</td><td>❌ No</td></tr>
                        <tr><td>A → B, C</td><td>Support(A,B,C)/Support(A) = 40%/80% = 50%</td><td>❌ No</td></tr>
                        <tr><td>B → A, C</td><td>Support(A,B,C)/Support(B) = 40%/80% = 50%</td><td>❌ No</td></tr>
                        <tr><td>C → A, B</td><td>Support(A,B,C)/Support(C) = 40%/80% = 50%</td><td>❌ No</td></tr>
                    </tbody>
                </table>
                <p>In this example, no strong rules are generated at 70% confidence from {"{"}A,B,C{"}"}. In practice, strong rules often emerge from 2-itemsets!</p>
            </ExampleBox>

            <h3>Strong Rules from 2-Itemsets</h3>

            <ExampleBox title="Strong Association Rules Example">
                <p>From our frequent 2-itemsets:</p>
                <table>
                    <thead><tr><th>Rule</th><th>Confidence Calculation</th><th>Result</th></tr></thead>
                    <tbody>
                        <tr>
                            <td><strong>A → B</strong></td>
                            <td>Support(A,B)/Support(A) = 60%/80%</td>
                            <td><strong>75% ✅</strong></td>
                        </tr>
                        <tr>
                            <td><strong>B → A</strong></td>
                            <td>Support(A,B)/Support(B) = 60%/80%</td>
                            <td><strong>75% ✅</strong></td>
                        </tr>
                        <tr>
                            <td><strong>A → C</strong></td>
                            <td>Support(A,C)/Support(A) = 60%/80%</td>
                            <td><strong>75% ✅</strong></td>
                        </tr>
                        <tr>
                            <td><strong>B → C</strong></td>
                            <td>Support(B,C)/Support(B) = 60%/80%</td>
                            <td><strong>75% ✅</strong></td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <strong>Interpretation:</strong> "75% of the time, customers who buy A also buy B" —
                    this is actionable! Place A and B together in the store.
                </p>
            </ExampleBox>

            <h2 id="summary">Summary</h2>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Frequent Patterns are items, sequences, or structures that appear frequently in data",
                    "Support measures frequency; Confidence measures reliability; Lift measures correlation strength",
                    "Market Basket Analysis finds items commonly bought together",
                    "Apriori Algorithm: Uses generate-and-test approach with the Apriori property for pruning",
                    "Apriori Property: If an itemset is infrequent, all its supersets are also infrequent",
                    "FP-Growth: Faster alternative that builds a compressed FP-Tree and needs only 2 database scans",
                    "Association Rules (A → B) are generated from frequent itemsets with minimum confidence threshold",
                    "Strong rules must meet both minimum support AND minimum confidence thresholds"
                ]}
            />

            <InfoBox type="tip" title="What's Next?">
                <p>
                    In the next topic, we'll explore <strong>Classification</strong> — understanding how
                    algorithms learn to categorize data into predefined classes using Decision Trees,
                    Bayesian Classification, Rule-Based methods, and k-Nearest Neighbors.
                </p>
            </InfoBox>
        </div>
    );
}
