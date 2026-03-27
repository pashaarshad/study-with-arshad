import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ContentImage } from '@/components/ContentDisplay';

export default function KDDvsDataMining() {
    return (
        <div>
            <p>
                Many students confuse <strong>KDD</strong> and <strong>Data Mining</strong> — they use the
                terms interchangeably. But they are <strong>NOT the same thing!</strong> Understanding the
                difference is crucial for exams and for real-world data science work. Let's clear this up
                once and for all.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "What is KDD (Knowledge Discovery in Databases)?",
                    "The complete 7-step KDD process with examples",
                    "How Data Mining fits within KDD",
                    "KDD vs Data Mining — the critical difference"
                ]}
            />

            <h2 id="what-is-kdd">What is KDD?</h2>

            <p>
                <strong>KDD (Knowledge Discovery in Databases)</strong> is the overall, <strong>end-to-end
                process</strong> of converting raw data into useful knowledge. Think of it as the
                <strong> complete recipe</strong> — from buying ingredients to serving the final dish.
                Data Mining is just the "cooking" step in this recipe.
            </p>

            <blockquote>
                "KDD is the non-trivial process of identifying valid, novel, potentially useful, and
                ultimately understandable patterns in data."
                <br /><br />
                — Fayyad, Piatetsky-Shapiro, and Smyth (1996)
            </blockquote>

            <ContentImage
                src="/imgs/fds/kdd_process.svg"
                alt="Flowchart showing all 7 steps of the KDD Process from Data Cleaning to Knowledge Representation."
                caption="The 7 step KDD Process pipeline. Note how Data Mining is just one specific step (Step 5) within the larger context."
            />

            <h2 id="kdd-steps">The 7 Steps of KDD Process (Very Important ⭐)</h2>

            <InfoBox type="highlight" title="📝 Exam Tip">
                <p>
                    This is one of the most frequently asked questions (5 marks and 10 marks).
                    Always draw a neat diagram and explain each step with an example. Memorize all 7 steps!
                </p>
            </InfoBox>

            <h3>Step 1: Data Cleaning (Data Cleansing)</h3>
            <p>
                Raw data from the real world is <strong>messy!</strong> It contains errors, missing values,
                duplicate records, and inconsistencies. Data Cleaning removes noise and corrects errors.
            </p>
            <ExampleBox title="Examples of Data Cleaning">
                <ul>
                    <li>A customer's age recorded as <strong>-25</strong> → corrected to <strong>25</strong></li>
                    <li>An email field has <strong>"N/A"</strong> → replaced with empty/null</li>
                    <li>Duplicate customer entries are merged into one</li>
                    <li>Phone number <strong>"123-ABC-4567"</strong> → flagged as invalid data</li>
                </ul>
            </ExampleBox>

            <h3>Step 2: Data Integration</h3>
            <p>
                In large organizations, data is stored in <strong>multiple different databases</strong>.
                Data Integration combines data from various sources into a single, unified dataset.
            </p>
            <ExampleBox title="Example">
                <p>
                    A hospital has 3 separate databases: <strong>Patient Records</strong> (MySQL),
                    <strong> Lab Results</strong> (Oracle), and <strong>Billing Information</strong> (Excel).
                    Data Integration merges all three into one comprehensive dataset for analysis.
                </p>
            </ExampleBox>

            <h3>Step 3: Data Selection</h3>
            <p>
                Not all data is relevant for analysis. We <strong>select only the data
                that is relevant</strong> to the mining task and ignore the rest.
            </p>
            <ExampleBox title="Example">
                <p>
                    To analyze <strong>"which products sell best in summer"</strong>,
                    we only select sales data from June-August and ignore other months.
                    We also ignore unrelated columns like employee names.
                </p>
            </ExampleBox>

            <h3>Step 4: Data Transformation</h3>
            <p>
                Data is converted into a <strong>suitable format</strong> for mining. This includes
                normalization, aggregation, and creating new derived attributes.
            </p>
            <ExampleBox title="Example">
                <ul>
                    <li><strong>Normalization:</strong> Salary values (₹20,000 to ₹5,00,000) scaled to 0 to 1</li>
                    <li><strong>Aggregation:</strong> Daily sales summed up to monthly sales</li>
                    <li><strong>Derived Attributes:</strong> Date of Birth → "Age"</li>
                </ul>
            </ExampleBox>

            <h3>Step 5: Data Mining ⭐ (The Core Step!)</h3>
            <p>
                This is the <strong>heart of the KDD process!</strong> Intelligent algorithms are applied
                to discover patterns, relationships, and insights. Techniques include Classification,
                Clustering, Association Rules, Regression, etc.
            </p>
            <ExampleBox title="Example">
                <p>
                    An algorithm discovers: <em>"80% of customers who bought bread also bought butter
                    within the same transaction."</em> This pattern helps stores place these items together.
                </p>
            </ExampleBox>

            <h3>Step 6: Pattern Evaluation</h3>
            <p>
                Not all discovered patterns are useful! This step <strong>evaluates the quality</strong> of
                the mined patterns. Only truly valuable and novel patterns are kept.
            </p>
            <ExampleBox title="Example">
                <ul>
                    <li><strong>Obvious (discarded):</strong> "People who buy shoes also buy socks" — everyone knows this!</li>
                    <li><strong>Valuable (kept):</strong> "Diaper buyers on Fridays also buy beer" — non-obvious, actionable!</li>
                </ul>
            </ExampleBox>

            <h3>Step 7: Knowledge Representation (Visualization)</h3>
            <p>
                The final knowledge is <strong>presented to decision-makers</strong> using visual tools
                like charts, graphs, reports, and dashboards.
            </p>
            <ExampleBox title="Example">
                <p>
                    A dashboard showing: <em>"Customer churn is highest among users aged 18-25 in
                    Tier-2 cities"</em> — the marketing team can now create targeted campaigns.
                </p>
            </ExampleBox>

            <ContentImage
                src="/imgs/fds/kdd_steps_detailed.svg"
                alt="A vertical infographic showing all 7 KDD steps as stacked cards. Step 5 (Data Mining) is highlighted."
                caption="A detailed view of the 7 steps in the Knowledge Discovery in Databases (KDD) process."
            />

            <h2 id="kdd-vs-dm-table">KDD vs Data Mining — Comparison Table</h2>

            <table>
                <thead>
                    <tr>
                        <th>Aspect</th>
                        <th>KDD (Knowledge Discovery in Databases)</th>
                        <th>Data Mining</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Definition</strong></td>
                        <td>The complete, multi-step process of extracting useful knowledge from raw data</td>
                        <td>The specific step of discovering patterns from prepared data</td>
                    </tr>
                    <tr>
                        <td><strong>Scope</strong></td>
                        <td>Broader — includes everything from cleaning to presentation</td>
                        <td>Narrower — only the pattern extraction step</td>
                    </tr>
                    <tr>
                        <td><strong>Steps Involved</strong></td>
                        <td>All 7 steps: Cleaning → Integration → Selection → Transformation → Mining → Evaluation → Presentation</td>
                        <td>Only 1 step: The actual mining/pattern discovery</td>
                    </tr>
                    <tr>
                        <td><strong>Relationship</strong></td>
                        <td>Data Mining is a step <strong>inside</strong> KDD</td>
                        <td>Data Mining is the <strong>5th step</strong> of KDD</td>
                    </tr>
                    <tr>
                        <td><strong>Analogy</strong></td>
                        <td>The <strong>entire recipe</strong>: buying → mixing → cooking → serving</td>
                        <td>Just the <strong>cooking step</strong></td>
                    </tr>
                    <tr>
                        <td><strong>Focus</strong></td>
                        <td>End-to-end data processing pipeline</td>
                        <td>Application of algorithms to find patterns</td>
                    </tr>
                </tbody>
            </table>

            <InfoBox type="tip" title="Easy Memory Trick 🧠">
                <p>
                    <strong>KDD = The Full Movie</strong> (from casting to release)<br />
                    <strong>Data Mining = The Climax Scene</strong> (the most exciting part, but still just one scene!)
                </p>
            </InfoBox>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "KDD is the complete 7-step process from raw data to knowledge",
                    "Data Mining is STEP 5 within the KDD process",
                    "KDD = The full recipe; Data Mining = Just the cooking step",
                    "The 7 steps: Cleaning → Integration → Selection → Transformation → Mining → Evaluation → Presentation"
                ]}
            />
        </div>
    );
}
