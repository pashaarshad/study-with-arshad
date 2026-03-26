import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function ProblemsIssuesChallenges() {
    return (
        <div>
            <p>
                While Data Mining is incredibly powerful, it's not without its <strong>challenges</strong>.
                Real-world data is messy, massive, and complex. Understanding these problems is essential
                for any aspiring data scientist — and a frequently asked <strong>exam topic</strong>!
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "Data Quality Issues — noise, missing values, inconsistency",
                    "Scalability & Performance challenges",
                    "Privacy & Security concerns",
                    "Data Complexity problems",
                    "The 'Black Box' interpretability problem",
                    "Mining Methodology challenges"
                ]}
            />

            <h2 id="data-quality">1. Data Quality Issues 📊</h2>

            <p>
                The most fundamental challenge: <strong>real-world data is dirty!</strong>
            </p>

            <ul>
                <li><strong>Noisy Data:</strong> Random errors or unnecessary information. Example: A sensor reading "Temperature: 500°C" in a room — clearly an error!</li>
                <li><strong>Missing Values:</strong> Many records have blank fields. Example: A customer survey where 40% didn't fill in their income.</li>
                <li><strong>Inconsistent Data:</strong> Same information stored differently. Example: "Bangalore" vs "Bengaluru" vs "BLR".</li>
                <li><strong>Duplicate Data:</strong> Same customer appears multiple times with slight spelling variations.</li>
                <li><strong>Outdated Data:</strong> Using 5-year-old data to predict current trends.</li>
            </ul>

            <InfoBox type="warning" title="Garbage In, Garbage Out (GIGO)">
                <p>
                    If you feed bad quality data into a Data Mining algorithm, you will get bad results out.
                    This is why <strong>80% of a data scientist's time</strong> is spent on cleaning and
                    preparing data, and only 20% on actual mining!
                </p>
            </InfoBox>

            <h2 id="scalability">2. Scalability & Performance 🚀</h2>

            <ul>
                <li>Modern datasets can be <strong>petabytes or exabytes</strong> in size (millions of gigabytes!)</li>
                <li>Traditional algorithms may take <strong>days or weeks</strong> to process such massive datasets</li>
                <li>As data grows, algorithms must scale efficiently — not exponentially slow down</li>
            </ul>

            <ExampleBox title="Scale Challenge Example">
                <p>
                    <strong>Facebook</strong> generates over <strong>4 petabytes</strong> of data per day!
                    Running a clustering algorithm on this data using a single computer would take years.
                    Solutions include <strong>distributed computing</strong> (Hadoop, Spark) and
                    <strong> parallel processing</strong> across thousands of servers.
                </p>
            </ExampleBox>

            <h2 id="privacy">3. Data Privacy & Security 🔒</h2>

            <ul>
                <li>Data Mining can uncover <strong>sensitive personal information</strong> even when individual records seem harmless</li>
                <li>Medical data mining must protect <strong>patient confidentiality</strong></li>
                <li>Financial data mining must comply with regulations like <strong>GDPR</strong> (Europe), <strong>IT Act</strong> (India)</li>
                <li>There's always a tension between "useful mining" and "respecting privacy"</li>
            </ul>

            <ExampleBox title="🔒 Privacy Concern: Target Pregnancy Prediction">
                <p>
                    Target (US retailer) used Data Mining to predict pregnant customers and sent them baby
                    product coupons. One father complained when his teenage daughter received these coupons —
                    only to discover she was indeed pregnant. While the mining was accurate, it raised
                    serious <strong>privacy and ethical questions</strong> about how much companies should
                    know about our lives.
                </p>
            </ExampleBox>

            <h2 id="complexity">4. Complexity of Data 🧩</h2>

            <ul>
                <li><strong>Heterogeneous data:</strong> Modern data comes as text, images, audio, video, social media posts, GPS — not just simple numbers!</li>
                <li><strong>High dimensionality:</strong> When data has thousands of attributes, mining becomes exponentially harder (the "Curse of Dimensionality")</li>
                <li><strong>Dynamic data:</strong> Data changing rapidly (stock prices, social media feeds) requires real-time mining</li>
                <li><strong>Unstructured data:</strong> More than 80% of world's data is unstructured (emails, photos, videos) — much harder to mine than structured tables</li>
            </ul>

            <InfoBox type="note" title="The Curse of Dimensionality">
                <p>
                    As the number of features/dimensions increases, the volume of the data space increases
                    exponentially. Data becomes sparse, and the notion of "distance" loses meaning.
                    A dataset with 100 features needs exponentially more data points than one with 10 features
                    to achieve the same statistical significance.
                </p>
            </InfoBox>

            <h2 id="interpretability">5. Interpretability — The "Black Box" Problem 🔲</h2>

            <ul>
                <li>Some powerful algorithms (like <strong>Neural Networks, Deep Learning</strong>) produce results that are very difficult for humans to understand</li>
                <li>If an AI system denies someone a loan, we should be able to explain <strong>WHY</strong> — but complex models make this hard</li>
                <li>Growing demand for <strong>Explainable AI (XAI)</strong> that provides transparent, understandable results</li>
                <li>Regulators increasingly require companies to <strong>explain automated decisions</strong></li>
            </ul>

            <ExampleBox title="Black Box Problem in Health">
                <p>
                    A neural network predicts that a patient has a <strong>90% chance of heart disease</strong>.
                    But the doctor asks: <em>"Why? Which factors are causing this prediction?"</em>
                    The neural network can't explain its reasoning clearly — it's a "black box". This makes
                    it difficult for doctors to trust and use the model in critical decisions.
                </p>
            </ExampleBox>

            <h2 id="methodology">6. Mining Methodology Challenges</h2>

            <ul>
                <li><strong>Choosing the right algorithm:</strong> Which technique works best for your specific problem? Decision Tree vs Neural Network vs KNN?</li>
                <li><strong>Handling noise:</strong> How to deal with uncertain or imprecise data during mining?</li>
                <li><strong>Pattern evaluation:</strong> How to distinguish genuinely interesting patterns from random coincidences?</li>
                <li><strong>Knowledge representation:</strong> How to present mined knowledge in a way users can understand and act upon?</li>
                <li><strong>Incorporating domain knowledge:</strong> Mining without understanding the domain can lead to meaningless results</li>
                <li><strong>Real-time mining:</strong> How to mine data streams that arrive continuously?</li>
            </ul>

            <h2 id="summary-table">Summary: All Problems at a Glance</h2>

            <table>
                <thead>
                    <tr>
                        <th>Challenge Category</th>
                        <th>Key Problem</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Data Quality</strong></td>
                        <td>Noisy, missing, inconsistent data</td>
                        <td>Age = -25, "Bangalore" vs "BLR"</td>
                    </tr>
                    <tr>
                        <td><strong>Scalability</strong></td>
                        <td>Datasets too large for traditional methods</td>
                        <td>Facebook: 4 PB/day</td>
                    </tr>
                    <tr>
                        <td><strong>Privacy</strong></td>
                        <td>Mining reveals sensitive information</td>
                        <td>Target's pregnancy prediction</td>
                    </tr>
                    <tr>
                        <td><strong>Complexity</strong></td>
                        <td>Heterogeneous, high-dimensional data</td>
                        <td>Images + text + GPS combined</td>
                    </tr>
                    <tr>
                        <td><strong>Interpretability</strong></td>
                        <td>Models are "black boxes"</td>
                        <td>Neural network can't explain WHY</td>
                    </tr>
                    <tr>
                        <td><strong>Methodology</strong></td>
                        <td>Choosing algorithms, evaluating patterns</td>
                        <td>Which algorithm for which problem?</td>
                    </tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "80% of time goes into data preparation due to quality issues (GIGO principle)",
                    "Scalability is crucial — modern datasets need distributed computing",
                    "Privacy regulations (GDPR, IT Act) limit what can be mined from personal data",
                    "The Curse of Dimensionality makes high-dimensional data extremely challenging",
                    "Black box models need Explainable AI (XAI) for trust and regulatory compliance",
                    "Choosing the right algorithm and evaluating patterns are ongoing methodology challenges"
                ]}
            />
        </div>
    );
}
