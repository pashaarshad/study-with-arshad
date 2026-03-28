import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ContentImage } from '@/components/ContentDisplay';

export default function DBMSvsDataMining() {
    return (
        <div>
            <p>
                Both <strong>DBMS (Database Management System)</strong> and <strong>Data Mining</strong> work
                with data, but they serve <strong>completely different purposes</strong>. A DBMS is like a
                <strong> librarian</strong> who helps you find specific books. Data Mining is like a
                <strong> researcher</strong> who reads all the books and discovers new knowledge nobody knew before.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "What is a DBMS and what it does",
                    "How DBMS and Data Mining differ fundamentally",
                    "Type of questions each can answer",
                    "Why we need Data Mining when DBMS already exists"
                ]}
            />

            <h2 id="dbms-overview">What Does a DBMS Do?</h2>

            <p>
                A <strong>DBMS (Database Management System)</strong> is software that stores, manages, retrieves,
                and updates data efficiently. It answers <strong>specific, predefined questions</strong> using
                SQL queries.
            </p>

            <ExampleBox title="DBMS Can Answer These Questions">
                <ul>
                    <li>"Show me all customers from Bangalore" → <code>SELECT * FROM customers WHERE city = 'Bangalore'</code></li>
                    <li>"What was John's bank balance on March 15?"</li>
                    <li>"How many products did we sell last month?"</li>
                    <li>"List all employees with salary above ₹50,000"</li>
                </ul>
            </ExampleBox>

            <h2 id="dm-overview">What Does Data Mining Do?</h2>

            <p>
                Data Mining goes <strong>beyond simple queries</strong>. It discovers <strong>hidden patterns,
                predictions, and relationships</strong> that no one explicitly asked about.
            </p>

            <ExampleBox title="Data Mining Can Answer These Questions">
                <ul>
                    <li>"Which customers are most likely to <strong>stop buying</strong> from us next month?" (Churn Prediction)</li>
                    <li>"What products are <strong>frequently bought together</strong>?" (Association Rules)</li>
                    <li>"Is this credit card transaction <strong>fraudulent</strong>?" (Anomaly Detection)</li>
                    <li>"Which students are <strong>at risk of failing</strong> this semester?" (Classification)</li>
                </ul>
            </ExampleBox>

            <h2 id="comparison-table">DBMS vs Data Mining — Complete Comparison</h2>

            <ContentImage
                src="/imgs/fds/dbms_vs_data_mining.svg"
                alt="Split comparison showing DBMS querying specific data vs Data Mining discovering hidden patterns."
                caption="DBMS retrieves known information, while Data Mining discovers unknown patterns and predictions."
            />

            <table>
                <thead>
                    <tr>
                        <th>Aspect</th>
                        <th>DBMS</th>
                        <th>Data Mining</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Purpose</strong></td>
                        <td>Store, manage, retrieve, and update data efficiently</td>
                        <td>Discover hidden patterns, trends, and insights</td>
                    </tr>
                    <tr>
                        <td><strong>Type of Queries</strong></td>
                        <td>Simple, straightforward: "Show me all customers from Bangalore"</td>
                        <td>Complex, exploratory: "Which customers will stop buying next month?"</td>
                    </tr>
                    <tr>
                        <td><strong>Data Type</strong></td>
                        <td>Mainly structured data in rows and columns</td>
                        <td>Structured, semi-structured, and unstructured data</td>
                    </tr>
                    <tr>
                        <td><strong>Output</strong></td>
                        <td>Exact data as stored — no new knowledge created</td>
                        <td>New knowledge: patterns, predictions, trends, rules</td>
                    </tr>
                    <tr>
                        <td><strong>Approach</strong></td>
                        <td>Retrospective — tells you <strong>what happened</strong></td>
                        <td>Prospective — tells you <strong>what will happen</strong></td>
                    </tr>
                    <tr>
                        <td><strong>Technique</strong></td>
                        <td>SQL queries, joins, aggregation</td>
                        <td>Classification, clustering, association rules, regression</td>
                    </tr>
                    <tr>
                        <td><strong>User</strong></td>
                        <td>Database administrator, application developer</td>
                        <td>Data scientist, business analyst</td>
                    </tr>
                    <tr>
                        <td><strong>Tools</strong></td>
                        <td>MySQL, PostgreSQL, Oracle, SQL Server</td>
                        <td>Weka, RapidMiner, Python (scikit-learn), R</td>
                    </tr>
                    <tr>
                        <td><strong>Data Volume</strong></td>
                        <td>Works with operational data (current)</td>
                        <td>Works with historical data (years of records)</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="why-need-dm">Why Do We Need Data Mining When DBMS Exists?</h2>

            <InfoBox type="highlight" title="The Key Insight">
                <p>
                    DBMS can only answer questions you <strong>already know to ask</strong>.<br />
                    Data Mining answers questions you <strong>never thought to ask</strong>!
                </p>
            </InfoBox>

            <ExampleBox title="🏦 Banking Example">
                <p>
                    <strong>DBMS query:</strong> "Show me all transactions above ₹1,00,000 today."
                    → Returns a list of large transactions. But many fraudulent transactions are <em>small</em> amounts!
                </p>
                <p>
                    <strong>Data Mining:</strong> Analyzes patterns across millions of transactions and discovers:
                    <em>"This account had 50 small transactions of ₹9,999 each across 10 different cities in 2 hours —
                    this pattern matches known money laundering behavior!"</em>
                </p>
                <p>
                    The DBMS couldn't detect this because nobody asked the right query. Data Mining
                    <strong> automatically discovered</strong> the suspicious pattern!
                </p>
            </ExampleBox>

            <InfoBox type="tip" title="Easy Analogy 🧠">
                <p>
                    <strong>DBMS = Google Search</strong> — you type a specific question and get specific answers.<br />
                    <strong>Data Mining = Google Discover/Recommendations</strong> — it shows you interesting things you didn't even search for!
                </p>
            </InfoBox>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "DBMS stores and retrieves data; Data Mining discovers NEW knowledge",
                    "DBMS is retrospective (what happened); Data Mining is prospective (what will happen)",
                    "DBMS answers specific queries; Data Mining finds hidden patterns automatically",
                    "Both work with data but serve fundamentally different purposes",
                    "Data Mining needs DBMS as a foundation — it mines data stored by DBMS!"
                ]}
            />
        </div>
    );
}
