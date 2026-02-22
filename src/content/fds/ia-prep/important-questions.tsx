// src/content/fds/ia-prep/important-questions.tsx
import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ContentImage } from '@/components/ContentDisplay';

export default function ImportantQuestions() {
    return (
        <div>
            <p>
                Welcome to the Internal Assessment (IA) preparation guide for <strong>Fundamentals of Data Science (FDS)</strong>.
                This guide covers the most frequently asked and important questions, explained in very simple English
                with real-world examples so you can remember them forever and secure maximum marks!
            </p>

            <KeyPoints
                title="IA Exam Pattern"
                points={[
                    "Total Marks: 40 Marks",
                    "Question Pattern: 4 Questions × 10 Marks each",
                    "Always draw the KDD Process diagram neatly to score full marks.",
                    "Use tables to write differences—teachers love clear comparisons with headings.",
                    "Include at least one real-world example in your answer to show real understanding."
                ]}
            />

            <h2 id="q1">Q1. Difference between DBMS and Data Mining (10 Marks)</h2>
            <p>
                Think of a <strong>DBMS</strong> (Database Management System) like a giant electronic filing cabinet.
                Its main job is to safely store information and let you search for it quickly.
                <strong>Data Mining</strong> is like a detective looking at all those files to discover a secret pattern
                nobody noticed before.
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
                        <td><strong>Definition</strong></td>
                        <td>A software system used to store, manage, and access databases.</td>
                        <td>The process of discovering patterns and extracting useful information from large datasets.</td>
                    </tr>
                    <tr>
                        <td><strong>Main Purpose</strong></td>
                        <td>Efficient storage, management, and retrieval of data.</td>
                        <td>Extract knowledge, insights, and hidden patterns from data.</td>
                    </tr>
                    <tr>
                        <td><strong>Type of Data</strong></td>
                        <td>Mainly structured data stored in tables with predefined schemas.</td>
                        <td>Structured, semi-structured, and unstructured data.</td>
                    </tr>
                    <tr>
                        <td><strong>Output</strong></td>
                        <td>Stored and retrieved data in its original form exactly as asked.</td>
                        <td>Knowledge, trends, rules, and predictions about the future.</td>
                    </tr>
                    <tr>
                        <td><strong>Real-World Example</strong></td>
                        <td>"Show me the bank balance of John Doe." (Extracts exact recorded number)</td>
                        <td>"Find out which customers are most likely to default on their loan." (Predicts future action)</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="q2">Q2. Difference between Data Mining and KDD (10 Marks)</h2>
            <p>
                <strong>KDD (Knowledge Discovery in Databases)</strong> is the complete, end-to-end journey of turning messy raw data into useful knowledge.
                <strong>Data Mining</strong> is just ONE incredibly important step inside that journey where the actual pattern discovery happens.
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Aspect</th>
                        <th>Data Mining (DM)</th>
                        <th>KDD (Knowledge Discovery in Databases)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Definition</strong></td>
                        <td>Process of discovering patterns from prepared datasets.</td>
                        <td>The overall massive process of extracting knowledge from raw data through multiple steps.</td>
                    </tr>
                    <tr>
                        <td><strong>Scope</strong></td>
                        <td>Narrower in scope (Only the extraction step).</td>
                        <td>Broader in scope (Preparation + Extraction + Presentation).</td>
                    </tr>
                    <tr>
                        <td><strong>Role in Process</strong></td>
                        <td>It is typically the 5th phase (a single step) within the KDD process.</td>
                        <td>It is the complete methodology that includes Data Cleaning, Integration, Mining, and Evaluation.</td>
                    </tr>
                    <tr>
                        <td><strong>Techniques Used</strong></td>
                        <td>Classification, Clustering, Regression, Association rules.</td>
                        <td>Data cleaning, Transformation, Pattern evaluation, Knowledge presentation.</td>
                    </tr>
                    <tr>
                        <td><strong>Real-World Analogy</strong></td>
                        <td><strong>Baking the cake</strong> in the oven (The core transformation step).</td>
                        <td><strong>The entire recipe:</strong> Buying ingredients, mixing, baking, decorating, and serving.</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="q3">Q3. Explain KDD (Knowledge Discovery in Databases) with a Neat Diagram (10 Marks)</h2>
            <p>
                <strong>Definition:</strong> KDD is a multi-step process of extracting useful knowledge or insights from large datasets.
                To score full marks, you MUST memorize and draw these exact 7 steps in sequential order.
            </p>

            <ContentImage
                src="/imgs/kdd-process-diagram.png"
                alt="KDD Process Flowchart showing Data Cleaning, Integration, Selection, Transformation, Data Mining, Pattern Evaluation, and Knowledge Presentation"
                caption="The 7 Steps of Knowledge Discovery in Databases (KDD)"
            />

            <h3>The 7 Steps of KDD:</h3>
            <ol>
                <li>
                    <strong>Data-Cleaning:</strong> Raw data is messy! This step removes noise, handles missing-values,
                    removes duplicate records, and corrects typographical errors.
                    <em>Example: Fixing a customer's age from "-25" to "25".</em>
                </li>
                <li>
                    <strong>Data-Integration:</strong> Combining data from multiple sources into a unified format.
                    <em>Example: Merging Excel sheets from the HR department and the Sales department.</em>
                </li>
                <li>
                    <strong>Data-Selection:</strong> Identifying and retrieving only the relevant data needed for analysis, ignoring the rest.
                    <em>Example: If we are analyzing clothes sales, we ignore the data about electronics.</em>
                </li>
                <li>
                    <strong>Data-Transformation:</strong> Converting data into a format suitable for analysis through Normalization or Aggregation.
                    <em>Example: Converting a birthdate into exactly "Years Old".</em>
                </li>
                <li>
                    <strong>Data-Mining:</strong> The brain of the operation! Extracting patterns, relationships, and insights using intelligent methods like Clustering or Classification.
                </li>
                <li>
                    <strong>Pattern Evaluation:</strong> Assessing the quality and usefulness of discovered patterns. Throwing away useless patterns.
                    <em>Example: Realizing that "people who buy shoes also buy socks" is obvious and uninteresting, while "people who buy diapers also buy beer" is a valuable business insight.</em>
                </li>
                <li>
                    <strong>Knowledge Presentation:</strong> Giving the final insights to the stakeholders (bosses/managers) using visual reports or dashboards so they can make business decisions.
                </li>
            </ol>

            <h2 id="q4">Q4. Explain Applications of Data Mining (10 Marks)</h2>
            <p>Data mining is used everywhere today to predict the future and make smart decisions. Here are the major applications:</p>

            <ul>
                <li>
                    <strong>Market Basket Analysis (Retail & Supermarkets):</strong> By analyzing what items customers buy together, stores optimize their layouts.
                    <em>Example: Placing bread next to milk because data shows they are often bought together.</em>
                </li>
                <li>
                    <strong>Financial & Banking Sector:</strong> Banks use it heavily for Risk Assessment and Fraud Detection.
                    <em>Example: If your credit card is swiped in London, but you live in Mumbai, the data mining system recognizes the anomaly and instantly blocks the transaction to prevent fraud.</em>
                </li>
                <li>
                    <strong>Healthcare and Insurance:</strong> It identifies successful medical therapies, predicts disease outbreaks, and detects false insurance claims.
                    <em>Example: Predicting which patients are most at risk of having a heart attack based on thousands of past patient records.</em>
                </li>
                <li>
                    <strong>Education:</strong> Educational Data Mining (EDM) predicts student performance and helps design curriculum.
                    <em>Example: Identifying which students are likely to fail a course mid-semester so teachers can provide extra help early.</em>
                </li>
                <li>
                    <strong>Scientific Analysis:</strong> Analyzing complex astronomical objects or bioinformatics data.
                    <em>Example: Analyzing DNA sequences rapidly to find genetic markers for diseases.</em>
                </li>
            </ul>

            <h2 id="q5">Q5. Explain Issues and Challenges in Data Mining (10 Marks)</h2>
            <p>Data mining is powerful, but it comes with a lot of challenges that Data Scientists struggle to solve:</p>

            <ul>
                <li>
                    <strong>Data Quality (Noisy/Incomplete Data):</strong> Real-world data is dirty. It contains missing values, errors, and inconsistencies.
                    <em>If you feed garbage data into an algorithm, you will get garbage predictions back ("Garbage In, Garbage Out").</em>
                </li>
                <li>
                    <strong>Data Privacy and Security:</strong> Data mining can uncover highly personal, sensitive information.
                    <em>If a hospital mines patient data, they must be extremely careful not to violate patient privacy or let hackers steal the database.</em>
                </li>
                <li>
                    <strong>Scalability & Performance Issues:</strong> We are dealing with "Big Data" now. Mining massive, petabyte-sized datasets requires huge computational power and time.
                    <em>Algorithms must be efficient, parallel, and distributed (like using Hadoop or Spark) to handle the load.</em>
                </li>
                <li>
                    <strong>Data Complexity (Heterogeneous Data):</strong> Databases don't just store simple numbers anymore.
                    <em>Mining complex data forms like images, social media streams, audio, video, and geographic data is incredibly difficult.</em>
                </li>
                <li>
                    <strong>Interpretability (The "Black Box" Problem):</strong> Some data mining algorithms produce complex mathematical models that humans cannot understand.
                    <em>If an AI denies a person a loan, we must be able to explain WHY, but complex models make this hard.</em>
                </li>
            </ul>

            <h2 id="q6">Q6. What is Data Mining? Give any 5 real-world examples (10 Marks)</h2>

            <p>
                <strong>Definition:</strong> Data mining is the process of automatically discovering patterns, trends, and valuable insights
                from huge volumes of data. Its main aim is to extract knowledge to inform decision-making, predict future outcomes, and drive innovation.
            </p>

            <ExampleBox title="5 Real-World Examples of Data Mining You Can Memorize Easily">
                <ol>
                    <li>
                        <strong>Netflix & YouTube Recommendations:</strong> Have you ever wondered how Netflix knows exactly what movie you want to watch?
                        It mines your viewing history and compares it to millions of other users to recommend shows you are highly likely to click on.
                    </li>
                    <li>
                        <strong>Target's Pregnancy Prediction:</strong> Retailer 'Target' famously used data mining to analyze shopping baskets.
                        They noticed that when women suddenly started buying unscented lotion and vitamins, they were likely pregnant.
                        Target started mailing them baby coupons before the competitors even knew!
                    </li>
                    <li>
                        <strong>Amazon's "Customers Who Bought This Also Bought":</strong> When you buy a phone on Amazon, it immediately suggests a phone case.
                        This is "Association Rule Mining" predicting what complementary product will increase their total sales.
                    </li>
                    <li>
                        <strong>Spam Email Filtering:</strong> Gmail mines the text inside incoming emails to check for patterns
                        (like the words "Free Money" or "Winner") and automatically sends them to the spam folder, keeping your inbox clean.
                    </li>
                    <li>
                        <strong>Weather Prediction:</strong> Meteorologists mine massive amounts of historical weather data alongside current satellite feeds
                        to accurately predict storm trajectories, tornadoes, and climate change patterns, saving lives.
                    </li>
                </ol>
            </ExampleBox>

            <p><br /><em>Study Tip: Don't try to memorize Word-to-Word! Understand the stories and real-world examples, and explain them in your own English in the exam. Best of luck! 🎯</em></p>
        </div>
    );
}
