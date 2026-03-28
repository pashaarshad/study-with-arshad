import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ContentImage } from '@/components/ContentDisplay';

export default function DMApplications() {
    return (
        <div>
            <p>
                Data Mining has revolutionized virtually <strong>every industry</strong> in the world.
                From the moment you wake up and check your phone to when Netflix recommends your next show,
                Data Mining is working behind the scenes. Let's explore the major application domains.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "7 major domains where Data Mining is applied",
                    "Real-world success stories from each domain",
                    "How Data Mining creates business value",
                    "Emerging applications in modern industries"
                ]}
            />

            <ContentImage
                src="/imgs/fds/dm_applications.svg"
                alt="Circular infographic showing 7 major application areas of Data Mining: Retail, Banking, Healthcare, Education, Telecom, Web/Social, and Science."
                caption="Data Mining is applied across virtually every major modern industry to extract actionable insights."
            />

            <h2 id="retail">1. Market Basket Analysis (Retail) 🛒</h2>
            <p>
                By analyzing what items customers buy together, retail stores optimize product
                placement, promotions, and cross-selling strategies.
            </p>
            <ExampleBox title="Famous Example: Target's Pregnancy Prediction">
                <p>
                    The US retailer <strong>Target</strong> analyzed shopping patterns and discovered that
                    when women suddenly started buying <em>unscented lotion, mineral supplements, and
                    cotton balls</em>, they were very likely pregnant. Target started sending them baby
                    product coupons before competitors even knew!
                </p>
            </ExampleBox>

            <h2 id="banking">2. Banking & Finance 🏦</h2>
            <ul>
                <li><strong>Fraud Detection:</strong> Credit card suddenly used in London while you live in Mumbai → flagged instantly</li>
                <li><strong>Credit Scoring:</strong> Banks assess loan risk by mining past repayment history</li>
                <li><strong>Stock Market Analysis:</strong> Trading algorithms mine market data to predict price movements</li>
                <li><strong>Anti-Money Laundering:</strong> Detecting suspicious financial transaction patterns</li>
            </ul>

            <ExampleBox title="🏦 How Banks Use Data Mining">
                <p>
                    <strong>HDFC Bank</strong> uses data mining to analyze spending patterns of millions of
                    customers. If your credit card is used for a large international purchase that doesn't match
                    your normal behavior, the system <strong>blocks the transaction within milliseconds</strong>
                    and sends you an alert. This saves billions in fraud losses worldwide!
                </p>
            </ExampleBox>

            <h2 id="healthcare">3. Healthcare & Medicine 🏥</h2>
            <ul>
                <li><strong>Disease Prediction:</strong> Mining patient records to predict heart disease, diabetes risk</li>
                <li><strong>Drug Discovery:</strong> Analyzing molecular data to find potential new medicines faster</li>
                <li><strong>Epidemic Tracking:</strong> Mining health data to detect disease outbreaks early (COVID-19 hotspots)</li>
                <li><strong>Treatment Optimization:</strong> Finding which treatments work best for specific patient groups</li>
            </ul>

            <ExampleBox title="🏥 COVID-19 & Data Mining">
                <p>
                    During the COVID-19 pandemic, data mining was used to:<br />
                    • <strong>Predict hotspots</strong> by mining mobility and infection data<br />
                    • <strong>Identify high-risk patients</strong> by mining medical history<br />
                    • <strong>Accelerate vaccine development</strong> by mining molecular structure data<br />
                    • <strong>Track variants</strong> by mining genomic sequences worldwide
                </p>
            </ExampleBox>

            <h2 id="education">4. Education 📚</h2>
            <ul>
                <li><strong>Student Performance Prediction:</strong> Identifying students likely to fail mid-semester for early intervention</li>
                <li><strong>Adaptive Learning:</strong> Personalizing content based on each student's learning pace</li>
                <li><strong>Curriculum Design:</strong> Mining learning outcomes to improve course structure</li>
                <li><strong>Dropout Prediction:</strong> Identifying students at risk of dropping out</li>
            </ul>

            <h2 id="telecom">5. Telecommunications 📱</h2>
            <ul>
                <li><strong>Customer Churn Prediction:</strong> Identifying customers likely to switch to a competitor (Jio → Airtel)</li>
                <li><strong>Network Optimization:</strong> Mining usage data to optimize tower placement and bandwidth</li>
                <li><strong>Fraud Detection:</strong> Detecting unusual call patterns like SIM cloning</li>
                <li><strong>Targeted Marketing:</strong> Offering right plans to right customer segments</li>
            </ul>

            <h2 id="web">6. Web & Social Media 🌐</h2>
            <ul>
                <li><strong>Recommendation Systems:</strong> Netflix, YouTube, Amazon recommend content you'll love</li>
                <li><strong>Sentiment Analysis:</strong> Mining tweets and reviews to understand public opinion</li>
                <li><strong>Search Engines:</strong> Google mines web data using crawling, indexing, and ranking</li>
                <li><strong>Ad Targeting:</strong> Facebook/Instagram show you ads based on your behavior patterns</li>
            </ul>

            <ExampleBox title="🎬 Netflix & Data Mining">
                <p>
                    <strong>Netflix</strong> uses Data Mining to analyze the viewing habits of its
                    <strong> 200+ million subscribers</strong>. It mines what you watch, when you watch,
                    how long you watch, what you pause, and even what you abandon. This data mining
                    drives their recommendation engine, which is responsible for <strong>80% of shows
                    watched on Netflix</strong>! They even mine data to decide which
                    <strong> original shows</strong> to produce.
                </p>
            </ExampleBox>

            <h2 id="science">7. Scientific Research 🔬</h2>
            <ul>
                <li><strong>Bioinformatics:</strong> Mining DNA/genome data to find genetic markers for diseases</li>
                <li><strong>Astronomy:</strong> Analyzing telescope data to classify stars and galaxies</li>
                <li><strong>Climate Science:</strong> Mining weather patterns to understand and predict climate change</li>
                <li><strong>Physics:</strong> CERN mines petabytes of particle collision data to discover new particles</li>
            </ul>

            <h2 id="summary-table">Applications Summary</h2>

            <table>
                <thead>
                    <tr>
                        <th>Domain</th>
                        <th>Primary DM Technique</th>
                        <th>Key Application</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><strong>Retail</strong></td><td>Association Rules</td><td>Market Basket Analysis</td></tr>
                    <tr><td><strong>Banking</strong></td><td>Classification, Anomaly Detection</td><td>Fraud Detection</td></tr>
                    <tr><td><strong>Healthcare</strong></td><td>Classification, Clustering</td><td>Disease Prediction</td></tr>
                    <tr><td><strong>Education</strong></td><td>Classification, Prediction</td><td>Student Performance</td></tr>
                    <tr><td><strong>Telecom</strong></td><td>Classification, Clustering</td><td>Churn Prediction</td></tr>
                    <tr><td><strong>Web/Social</strong></td><td>Clustering, Association Rules</td><td>Recommendations</td></tr>
                    <tr><td><strong>Science</strong></td><td>Clustering, Classification</td><td>Genome Analysis</td></tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Data Mining is used in retail, banking, healthcare, education, telecom, web, and science",
                    "Market Basket Analysis helps retailers place products strategically",
                    "Banks use anomaly detection to prevent billions in fraud losses",
                    "Netflix's recommendation engine (powered by DM) drives 80% of content watched",
                    "Healthcare uses mining for disease prediction, drug discovery, and epidemic tracking",
                    "Scientific research mines massive datasets (DNA, telescope data, particle collisions)"
                ]}
            />
        </div>
    );
}
