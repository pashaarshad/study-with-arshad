// src/content/fds/data-mining/introduction-to-data-mining.tsx
import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function IntroductionToDataMining() {
    return (
        <div>
            <p>
                In today's digital world, we generate <strong>2.5 quintillion bytes</strong> of data every single day!
                But raw data alone is useless — it's like having a mountain of gold ore but no way to extract
                the pure gold. <strong>Data Mining</strong> is the powerful process that helps us discover hidden
                patterns, valuable insights, and actionable knowledge from massive datasets.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "What is Data Mining and why it matters",
                    "Key definitions and core concepts",
                    "Knowledge Discovery in Databases (KDD) — The Complete Process",
                    "KDD vs Data Mining — The Critical Difference",
                    "DBMS vs Data Mining — How they differ fundamentally",
                    "Data Mining Techniques overview",
                    "Problems, Issues, and Challenges in Data Mining",
                    "Real-world Applications of Data Mining"
                ]}
            />

            <h2 id="what-is-data-mining">What is Data Mining?</h2>

            <p>
                <strong>Data Mining</strong> is the process of automatically discovering useful patterns,
                correlations, anomalies, and statistical relationships from large volumes of data using
                intelligent methods such as machine learning, statistics, and database systems.
            </p>

            <blockquote>
                "Data Mining is the extraction of implicit, previously unknown, and potentially useful
                information from data."
                <br /><br />
                — Ian H. Witten, Author of "Data Mining: Practical Machine Learning Tools and Techniques"
            </blockquote>

            <p>
                Think of Data Mining like a <strong>detective looking at a crime scene</strong>. The detective
                doesn't just see random objects — they find <em>connections</em>, <em>patterns</em>, and
                <em>hidden clues</em> that others might miss. Similarly, Data Mining algorithms look at millions
                of data records and find the "hidden stories" within the data.
            </p>

            <ImagePlaceholder
                name="DataMiningConcept.png"
                description="An infographic showing the concept of Data Mining — a large mountain of raw data on the left, with a mining pickaxe extracting golden nuggets labeled 'Patterns', 'Trends', 'Insights', 'Knowledge' on the right. Use a dark blue and gold color scheme with modern flat design."
                suggestedSize="850x400"
            />

            <h3>Formal Definitions of Data Mining</h3>

            <InfoBox type="note" title="Definition 1 — Simple">
                <p>
                    Data Mining is the process of <strong>finding patterns and knowledge</strong> from large
                    amounts of data. The data sources can include databases, data warehouses, the web,
                    or other data repositories.
                </p>
            </InfoBox>

            <InfoBox type="note" title="Definition 2 — Technical (Textbook)">
                <p>
                    Data Mining refers to extracting or "mining" knowledge from large amounts of data.
                    It is also known as <strong>Knowledge Discovery from Data (KDD)</strong>, although technically
                    Data Mining is just one step within the larger KDD process.
                </p>
            </InfoBox>

            <InfoBox type="note" title="Definition 3 — Jiawei Han (Textbook Author)">
                <p>
                    "Data Mining is the process of discovering interesting patterns and knowledge from
                    large amounts of data. The data sources can include databases, data warehouses,
                    the Web, other information repositories, or data that are streamed into the system dynamically."
                </p>
            </InfoBox>

            <h3>Why is Data Mining Important?</h3>

            <p>
                We live in the <strong>"Data Age"</strong>. Every day, businesses, hospitals, banks, and governments
                collect enormous volumes of data. But collecting data is not enough — you need to
                <strong> understand</strong> it. Here's why Data Mining matters:
            </p>

            <ul>
                <li>
                    <strong>Too much data, too little knowledge:</strong> Organizations are drowning in data but
                    starving for useful information. Data Mining bridges this gap.
                </li>
                <li>
                    <strong>Competitive advantage:</strong> Companies that mine their data effectively can predict
                    customer behavior, optimize operations, and outperform their competitors.
                </li>
                <li>
                    <strong>Better decision making:</strong> Instead of relying on gut feelings, leaders can make
                    data-driven decisions backed by evidence.
                </li>
                <li>
                    <strong>Automation:</strong> Data Mining automates the discovery process — no human could
                    manually analyze millions of records!
                </li>
            </ul>

            <ExampleBox title="🏪 Real-Life Example: Walmart's Hurricane Discovery">
                <p>
                    Before hurricanes in the USA, <strong>Walmart</strong> used Data Mining on their sales
                    data and discovered something surprising: <em>customers didn't just buy emergency supplies
                    like flashlights and batteries — they also bought massive amounts of
                    <strong> strawberry Pop-Tarts!</strong></em>
                </p>
                <p>
                    Walmart started stocking Pop-Tarts at the front of stores before every hurricane.
                    Sales skyrocketed! This is a perfect example of Data Mining revealing hidden, non-obvious
                    patterns that humans would never guess on their own.
                </p>
            </ExampleBox>

            <h2 id="kdd-process">Knowledge Discovery in Databases (KDD)</h2>

            <p>
                <strong>KDD (Knowledge Discovery in Databases)</strong> is the overall, end-to-end process
                of converting raw data into useful knowledge. Think of it as the <strong>complete recipe</strong> —
                from buying ingredients to serving the final dish. Data Mining is just the "cooking" step
                in this recipe.
            </p>

            <blockquote>
                "KDD is the non-trivial process of identifying valid, novel, potentially useful, and
                ultimately understandable patterns in data."
                <br /><br />
                — Fayyad, Piatetsky-Shapiro, and Smyth (1996)
            </blockquote>

            <ImagePlaceholder
                name="KDDProcess.png"
                description="A detailed flowchart showing all 7 steps of the KDD Process in a horizontal pipeline: Data Cleaning → Data Integration → Data Selection → Data Transformation → Data Mining → Pattern Evaluation → Knowledge Representation. Each step should be in a rounded rectangle with a small icon, connected by arrows. Use gradient blue-to-purple color scheme with white text."
                suggestedSize="900x350"
            />

            <h3>The 7 Steps of KDD Process (Very Important for Exams! ⭐)</h3>

            <InfoBox type="highlight" title="📝 Exam Tip">
                <p>
                    This is one of the most frequently asked questions in exams (5 marks and 10 marks).
                    Always draw a neat diagram and explain each step with an example. Memorize all 7 steps
                    in order!
                </p>
            </InfoBox>

            <ol>
                <li>
                    <h4>Step 1: Data Cleaning (Data Cleansing)</h4>
                    <p>
                        Raw data from the real world is <strong>messy</strong>! It contains errors, missing values,
                        duplicate records, and inconsistencies. Data Cleaning removes noise and corrects errors
                        to prepare clean data.
                    </p>
                    <ExampleBox title="Example">
                        <ul>
                            <li>A customer's age is recorded as <strong>-25</strong> → corrected to <strong>25</strong></li>
                            <li>An email field has <strong>"N/A"</strong> → replaced with empty/null</li>
                            <li>Duplicate customer entries are merged into one</li>
                            <li>Phone number <strong>"123-ABC-4567"</strong> → flagged as invalid data</li>
                        </ul>
                    </ExampleBox>
                </li>
                <li>
                    <h4>Step 2: Data Integration</h4>
                    <p>
                        In large organizations, data is stored in <strong>multiple different databases</strong>.
                        Data Integration combines data from various sources into a single, unified dataset.
                    </p>
                    <ExampleBox title="Example">
                        <p>
                            A hospital has 3 separate databases: <strong>Patient Records</strong> (in MySQL),
                            <strong> Lab Results</strong> (in Oracle), and <strong>Billing Information</strong> (in Excel files).
                            Data Integration merges all three into one comprehensive dataset for analysis.
                        </p>
                    </ExampleBox>
                </li>
                <li>
                    <h4>Step 3: Data Selection</h4>
                    <p>
                        Not all data is relevant for analysis. In this step, we <strong>select only the data
                        that is relevant</strong> to the mining task and ignore the rest.
                    </p>
                    <ExampleBox title="Example">
                        <p>
                            If we want to analyze <strong>"which products sell best in summer"</strong>,
                            we only select sales data from June-August and ignore data from other months.
                            We also ignore unrelated columns like employee names or office addresses.
                        </p>
                    </ExampleBox>
                </li>
                <li>
                    <h4>Step 4: Data Transformation</h4>
                    <p>
                        Data is converted into a <strong>suitable format</strong> for mining. This includes
                        normalization, aggregation, and creating new derived attributes.
                    </p>
                    <ExampleBox title="Example">
                        <ul>
                            <li><strong>Normalization:</strong> Salary values (₹20,000 to ₹5,00,000) are scaled to a range of 0 to 1</li>
                            <li><strong>Aggregation:</strong> Daily sales are summed up to get monthly sales</li>
                            <li><strong>Derived Attributes:</strong> Date of Birth is converted to "Age"</li>
                        </ul>
                    </ExampleBox>
                </li>
                <li>
                    <h4>Step 5: Data Mining ⭐ (The Core Step!)</h4>
                    <p>
                        This is the <strong>heart of the KDD process</strong>! In this step, intelligent algorithms
                        are applied to the prepared data to extract patterns, relationships, and insights.
                        Techniques used include Classification, Clustering, Association Rules, Regression, etc.
                    </p>
                    <ExampleBox title="Example">
                        <p>
                            An algorithm discovers: <em>"80% of customers who bought bread also bought butter
                            within the same transaction."</em> This pattern can help stores place these items
                            close together.
                        </p>
                    </ExampleBox>
                </li>
                <li>
                    <h4>Step 6: Pattern Evaluation</h4>
                    <p>
                        Not all discovered patterns are useful! This step <strong>evaluates the quality</strong> of
                        the mined patterns using interestingness measures. Only truly valuable and novel
                        patterns are kept; obvious or trivial patterns are discarded.
                    </p>
                    <ExampleBox title="Example">
                        <ul>
                            <li><strong>Obvious (discarded):</strong> "People who buy shoes also buy socks" — everyone knows this!</li>
                            <li><strong>Valuable (kept):</strong> "People who buy diapers on Friday evenings also buy beer" — this is a non-obvious, actionable business insight!</li>
                        </ul>
                    </ExampleBox>
                </li>
                <li>
                    <h4>Step 7: Knowledge Representation (Visualization)</h4>
                    <p>
                        The final knowledge is <strong>presented to decision-makers</strong> (managers, doctors, leaders)
                        using visual tools like charts, graphs, reports, and dashboards. The goal is to make
                        the insights easy to understand and act upon.
                    </p>
                    <ExampleBox title="Example">
                        <p>
                            A dashboard showing: <em>"Customer churn is highest among users aged 18-25 in
                            Tier-2 cities"</em> with a colorful bar chart. The marketing team can now
                            create targeted campaigns for this specific group.
                        </p>
                    </ExampleBox>
                </li>
            </ol>

            <ImagePlaceholder
                name="KDDStepsDetailed.png"
                description="A vertical infographic showing all 7 KDD steps as stacked cards, each with a small icon, step number, name, and one-line description. Steps: 1-Data Cleaning, 2-Data Integration, 3-Data Selection, 4-Data Transformation, 5-Data Mining (highlighted in gold as the core step), 6-Pattern Evaluation, 7-Knowledge Representation. Use a modern card-style design with gradients."
                suggestedSize="600x800"
            />

            <h2 id="kdd-vs-dm">KDD vs Data Mining — The Critical Difference</h2>

            <p>
                Many students confuse KDD and Data Mining, but they are <strong>NOT the same thing</strong>.
                This is one of the most frequently asked questions in exams!
            </p>

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
                        <td>All 7 steps: Cleaning, Integration, Selection, Transformation, Mining, Evaluation, Presentation</td>
                        <td>Only 1 step: The actual mining/pattern discovery</td>
                    </tr>
                    <tr>
                        <td><strong>Relationship</strong></td>
                        <td>Data Mining is a step <strong>inside</strong> KDD</td>
                        <td>Data Mining is the <strong>5th step</strong> of the KDD process</td>
                    </tr>
                    <tr>
                        <td><strong>Analogy</strong></td>
                        <td>The <strong>entire recipe</strong>: buying ingredients → mixing → cooking → serving</td>
                        <td>Just the <strong>cooking step</strong> where the magic happens</td>
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
                    <strong>Data Mining = The Climax Scene</strong> (the most exciting and important part, but still just one scene in the full movie!)
                </p>
            </InfoBox>

            <h2 id="dbms-vs-dm">DBMS vs Data Mining</h2>

            <p>
                <strong>DBMS (Database Management System)</strong> and <strong>Data Mining</strong> both work
                with data, but they serve completely different purposes. A DBMS is like a <strong>librarian</strong> who
                helps you find books. Data Mining is like a <strong>researcher</strong> who reads all the books
                and discovers new knowledge that nobody knew before.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Aspect</th>
                        <th>DBMS (Database Management System)</th>
                        <th>Data Mining</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Purpose</strong></td>
                        <td>Store, manage, retrieve, and update data efficiently</td>
                        <td>Discover hidden patterns, trends, and insights from data</td>
                    </tr>
                    <tr>
                        <td><strong>Type of Queries</strong></td>
                        <td>Simple, straightforward queries: "Show me all customers from Bangalore"</td>
                        <td>Complex, exploratory questions: "Which customers are likely to stop buying next month?"</td>
                    </tr>
                    <tr>
                        <td><strong>Data Type</strong></td>
                        <td>Mainly structured data in rows and columns</td>
                        <td>Structured, semi-structured, and unstructured data</td>
                    </tr>
                    <tr>
                        <td><strong>Output</strong></td>
                        <td>Exact data as stored — no new knowledge is created</td>
                        <td>New knowledge: patterns, predictions, trends, and rules</td>
                    </tr>
                    <tr>
                        <td><strong>Approach</strong></td>
                        <td>Retrospective — tells you <strong>what happened</strong></td>
                        <td>Prospective — tells you <strong>what will happen</strong></td>
                    </tr>
                    <tr>
                        <td><strong>Tools</strong></td>
                        <td>MySQL, PostgreSQL, Oracle, SQL Server</td>
                        <td>Weka, RapidMiner, Python (scikit-learn), R</td>
                    </tr>
                    <tr>
                        <td><strong>Example</strong></td>
                        <td>"What was John's bank balance on March 15?"</td>
                        <td>"Which customers are most likely to default on their loans?"</td>
                    </tr>
                </tbody>
            </table>

            <ImagePlaceholder
                name="DBMSvsDataMining.png"
                description="A split comparison infographic showing DBMS on the left (represented by a filing cabinet icon with organized folders, labeled 'Store & Retrieve') and Data Mining on the right (represented by a magnifying glass over data patterns with a lightbulb, labeled 'Discover & Predict'). Connected by a 'vs' badge in the center. Use blue for DBMS side and purple for Data Mining side."
                suggestedSize="850x400"
            />

            <h2 id="dm-techniques">Data Mining Techniques</h2>

            <p>
                Data Mining uses various techniques to extract different types of knowledge from data.
                Here are the major techniques you need to know:
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Technique</th>
                        <th>What It Does</th>
                        <th>Real-World Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Classification</strong></td>
                        <td>Assigns data items into predefined categories/classes</td>
                        <td>Email → Spam or Not Spam</td>
                    </tr>
                    <tr>
                        <td><strong>Clustering</strong></td>
                        <td>Groups similar data items together (without predefined categories)</td>
                        <td>Grouping customers by shopping behavior</td>
                    </tr>
                    <tr>
                        <td><strong>Association Rule Mining</strong></td>
                        <td>Finds relationships between items that occur together</td>
                        <td>"Customers who buy bread also buy butter"</td>
                    </tr>
                    <tr>
                        <td><strong>Regression</strong></td>
                        <td>Predicts a continuous numerical value</td>
                        <td>Predicting tomorrow's stock price</td>
                    </tr>
                    <tr>
                        <td><strong>Anomaly/Outlier Detection</strong></td>
                        <td>Identifies data points that don't fit the normal pattern</td>
                        <td>Detecting credit card fraud</td>
                    </tr>
                    <tr>
                        <td><strong>Prediction</strong></td>
                        <td>Forecasts future values based on historical data</td>
                        <td>Weather forecasting, sales prediction</td>
                    </tr>
                </tbody>
            </table>

            <InfoBox type="highlight" title="Classification vs Clustering — Key Difference">
                <p>
                    <strong>Classification:</strong> You already know the categories (Supervised). Example: "Is this email Spam or Not Spam?"<br />
                    <strong>Clustering:</strong> You don't know the categories — the algorithm discovers them (Unsupervised). Example: "Group these customers based on similarities."
                </p>
            </InfoBox>

            <h2 id="issues-challenges">Problems, Issues, and Challenges in Data Mining</h2>

            <p>
                While Data Mining is incredibly powerful, it comes with significant challenges that
                data scientists must overcome:
            </p>

            <h3>1. Data Quality Issues 📊</h3>
            <ul>
                <li><strong>Noisy Data:</strong> Data with random errors or unnecessary information. Example: A sensor reading "Temperature: 500°C" in a room — clearly an error!</li>
                <li><strong>Missing Values:</strong> Many records have blank fields. Example: A customer survey where 40% didn't fill in their income.</li>
                <li><strong>Inconsistent Data:</strong> Same information stored differently. Example: "Bangalore" vs "Bengaluru" vs "BLR" for the same city.</li>
                <li><strong>Duplicate Data:</strong> The same customer appears multiple times with slightly different spellings.</li>
            </ul>

            <InfoBox type="warning" title="Garbage In, Garbage Out (GIGO)">
                <p>
                    If you feed bad quality data into a Data Mining algorithm, you will get bad results out.
                    This is why <strong>80% of a data scientist's time</strong> is spent on cleaning and
                    preparing data, and only 20% on actual mining!
                </p>
            </InfoBox>

            <h3>2. Scalability & Performance 🚀</h3>
            <ul>
                <li>Modern datasets can be <strong>petabytes or even exabytes</strong> in size (millions of gigabytes!)</li>
                <li>Traditional algorithms may take days or weeks to process such massive datasets</li>
                <li>Solutions include parallel processing (Hadoop, Spark), distributed computing, and efficient algorithm design</li>
            </ul>

            <h3>3. Data Privacy & Security 🔒</h3>
            <ul>
                <li>Data Mining can uncover <strong>sensitive personal information</strong></li>
                <li>Medical data mining must protect patient confidentiality</li>
                <li>Financial data mining must comply with regulations (like GDPR in Europe, IT Act in India)</li>
                <li>There's always a tension between "useful mining" and "respecting privacy"</li>
            </ul>

            <h3>4. Complexity of Data 🧩</h3>
            <ul>
                <li><strong>Heterogeneous data:</strong> Modern data comes as text, images, audio, video, social media posts, GPS locations — not just simple numbers in tables!</li>
                <li><strong>High dimensionality:</strong> When data has thousands of attributes/features, mining becomes exponentially harder (the "Curse of Dimensionality")</li>
                <li><strong>Dynamic data:</strong> Data that changes rapidly (stock prices, social media feeds) requires real-time or near-real-time mining</li>
            </ul>

            <h3>5. Interpretability — The "Black Box" Problem 🔲</h3>
            <ul>
                <li>Some powerful algorithms (like Neural Networks) produce results that are <strong>very difficult for humans to understand</strong></li>
                <li>If an AI system denies someone a loan, we should be able to explain <strong>WHY</strong> — but complex models make this hard</li>
                <li>There's a growing demand for <strong>Explainable AI (XAI)</strong> that provides transparent, understandable results</li>
            </ul>

            <h3>6. Mining Methodology Challenges</h3>
            <ul>
                <li><strong>Choosing the right algorithm:</strong> Which technique works best for your specific problem?</li>
                <li><strong>Handling noise:</strong> How to deal with uncertain or imprecise data?</li>
                <li><strong>Pattern evaluation:</strong> How to distinguish genuinely interesting patterns from random noise?</li>
                <li><strong>Knowledge representation:</strong> How to present the mined knowledge in a way users can understand and act upon?</li>
            </ul>

            <h2 id="dm-applications">Applications of Data Mining</h2>

            <p>
                Data Mining has revolutionized virtually every industry. Here are the major application areas:
            </p>

            <h3>1. Market Basket Analysis (Retail) 🛒</h3>
            <p>
                By analyzing what items customers buy together, retail stores can optimize their product
                placement, promotions, and cross-selling strategies.
            </p>
            <ExampleBox title="Famous Example: Target's Pregnancy Prediction">
                <p>
                    The US retailer <strong>Target</strong> used Data Mining to analyze shopping patterns and
                    discovered that when women suddenly started buying <em>unscented lotion, mineral supplements,
                    and cotton balls</em>, they were very likely pregnant. Target started sending them baby
                    product coupons before their competitors even knew! One father was shocked to receive
                    baby coupons for his teenage daughter — only to find out she was indeed pregnant!
                </p>
            </ExampleBox>

            <h3>2. Banking & Finance 🏦</h3>
            <ul>
                <li><strong>Fraud Detection:</strong> If your credit card is suddenly used in London while you live in Mumbai, the system flags it instantly</li>
                <li><strong>Credit Scoring:</strong> Banks assess loan risk by mining past customer repayment history</li>
                <li><strong>Stock Market Analysis:</strong> Trading algorithms mine market data to predict price movements</li>
                <li><strong>Anti-Money Laundering:</strong> Detecting suspicious financial transactions</li>
            </ul>

            <h3>3. Healthcare & Medicine 🏥</h3>
            <ul>
                <li><strong>Disease Prediction:</strong> Mining patient records to predict who is at risk of heart disease, diabetes, etc.</li>
                <li><strong>Drug Discovery:</strong> Analyzing molecular data to find potential new medicines faster</li>
                <li><strong>Epidemic Tracking:</strong> Mining public health data to detect disease outbreaks early (like COVID-19 hotspot detection)</li>
                <li><strong>Treatment Optimization:</strong> Finding which treatments work best for specific patient groups</li>
            </ul>

            <h3>4. Education 📚</h3>
            <ul>
                <li><strong>Student Performance Prediction:</strong> Identifying students likely to fail a course mid-semester so teachers can intervene early</li>
                <li><strong>Adaptive Learning:</strong> Personalizing course content based on each student's learning style and pace</li>
                <li><strong>Curriculum Design:</strong> Mining learning outcome data to improve curriculum</li>
            </ul>

            <h3>5. Telecommunications 📱</h3>
            <ul>
                <li><strong>Customer Churn Prediction:</strong> Identifying customers likely to switch to a competitor</li>
                <li><strong>Network Optimization:</strong> Mining network usage data to optimize tower placement and bandwidth</li>
                <li><strong>Fraud Detection:</strong> Detecting unusual call patterns (like SIM cloning)</li>
            </ul>

            <h3>6. Web & Social Media 🌐</h3>
            <ul>
                <li><strong>Recommendation Systems:</strong> Netflix, YouTube, Amazon use Data Mining to recommend content you'll love</li>
                <li><strong>Sentiment Analysis:</strong> Mining tweets and reviews to understand public opinion</li>
                <li><strong>Search Engines:</strong> Google mines web data using crawling, indexing, and ranking algorithms</li>
            </ul>

            <h3>7. Scientific Research 🔬</h3>
            <ul>
                <li><strong>Bioinformatics:</strong> Mining DNA/genome data to find genetic markers for diseases</li>
                <li><strong>Astronomy:</strong> Analyzing telescope data to classify stars and galaxies</li>
                <li><strong>Climate Science:</strong> Mining weather patterns to understand and predict climate change</li>
            </ul>

            <ImagePlaceholder
                name="DataMiningApplications.png"
                description="A circular infographic showing 7 major application areas of Data Mining arranged in a wheel: Retail, Banking, Healthcare, Education, Telecommunications, Web/Social Media, and Scientific Research. Each segment has a small icon and label. Center shows 'Data Mining Applications'. Use vibrant, distinct colors for each segment."
                suggestedSize="700x700"
            />

            <h2 id="summary">Summary</h2>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Data Mining is the process of discovering hidden patterns from large datasets",
                    "KDD is the complete 7-step process; Data Mining is step 5 within KDD",
                    "The 7 KDD steps: Cleaning → Integration → Selection → Transformation → Mining → Evaluation → Presentation",
                    "DBMS stores and retrieves data; Data Mining discovers NEW knowledge from data",
                    "Major techniques: Classification, Clustering, Association Rules, Regression, Outlier Detection",
                    "Challenges include data quality, scalability, privacy, complexity, and interpretability",
                    "Data Mining is used in Retail, Banking, Healthcare, Education, Telecom, Web, and Science",
                    "80% of a data scientist's time goes into data preparation — only 20% into actual mining"
                ]}
            />

            <InfoBox type="tip" title="What's Next?">
                <p>
                    In the next topic, we'll dive deep into <strong>Data Warehousing</strong> — understanding
                    how data is organized, stored, and processed at scale using multidimensional models,
                    data cleaning techniques, and OLAP operations.
                </p>
            </InfoBox>
        </div>
    );
}
