import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function IntroductionToDM() {
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
                    "The motivation behind Data Mining",
                    "How Data Mining fits into the bigger picture of Data Science",
                    "Why organizations invest heavily in Data Mining"
                ]}
            />

            <h2 id="what-is-data-mining">What is Data Mining?</h2>

            <p>
                <strong>Data Mining</strong> is the process of automatically discovering useful patterns,
                correlations, anomalies, and statistical relationships from large volumes of data using
                intelligent methods such as machine learning, statistics, and database systems.
            </p>

            <ExampleBox title="🏔️ The Gold Mining Analogy">
                <p>
                    Just like a gold miner digs through <strong>tons of rock and soil</strong> to find tiny
                    pieces of valuable gold, a <strong>data miner</strong> sifts through <strong>millions
                    of data records</strong> to find valuable patterns and insights that can drive 
                    business decisions, scientific discoveries, and more.
                </p>
            </ExampleBox>

            <ImagePlaceholder
                name="DataMiningConcept.png"
                description="An infographic showing the concept of Data Mining — a large mountain of raw data on the left, with a mining pickaxe extracting golden nuggets labeled 'Patterns', 'Trends', 'Insights', 'Knowledge' on the right. Use a dark blue and gold color scheme with modern flat design."
                suggestedSize="850x400"
            />

            <h2 id="why-dm">Why is Data Mining Important?</h2>

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

            <InfoBox type="highlight" title="Key Fields that Use Data Mining">
                <ul>
                    <li><strong>Business:</strong> Customer behavior analysis, market prediction</li>
                    <li><strong>Healthcare:</strong> Disease diagnosis, drug discovery</li>
                    <li><strong>Finance:</strong> Fraud detection, risk assessment</li>
                    <li><strong>Science:</strong> Climate patterns, genome analysis</li>
                    <li><strong>Education:</strong> Student performance prediction, adaptive learning</li>
                    <li><strong>Social Media:</strong> Sentiment analysis, recommendation systems</li>
                </ul>
            </InfoBox>

            <h2 id="dm-vs-traditional">Data Mining vs Traditional Data Analysis</h2>

            <p>
                Traditional data analysis (using SQL queries, Excel, etc.) is like reading a book and finding answers
                to <strong>specific questions you already have</strong>. Data Mining is like having an AI assistant
                read <strong>thousands of books</strong> and tell you <strong>things you never thought to ask about</strong>.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Aspect</th>
                        <th>Traditional Analysis</th>
                        <th>Data Mining</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Approach</strong></td>
                        <td>Verification-driven (test a specific hypothesis)</td>
                        <td>Discovery-driven (find unknown patterns)</td>
                    </tr>
                    <tr>
                        <td><strong>Questions</strong></td>
                        <td>"How many products did we sell in January?"</td>
                        <td>"What hidden factors predict high sales?"</td>
                    </tr>
                    <tr>
                        <td><strong>Automation</strong></td>
                        <td>Mostly manual queries</td>
                        <td>Automated pattern discovery</td>
                    </tr>
                    <tr>
                        <td><strong>Scale</strong></td>
                        <td>Small to medium datasets</td>
                        <td>Millions to billions of records</td>
                    </tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Data Mining extracts hidden patterns and knowledge from large datasets",
                    "It automates the discovery process that humans can't do manually",
                    "It's used in business, healthcare, finance, science, education, and social media",
                    "Data Mining is discovery-driven, not just verification-driven like traditional analysis"
                ]}
            />
        </div>
    );
}
