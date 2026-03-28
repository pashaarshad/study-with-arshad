import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ContentImage } from '@/components/ContentDisplay';

export default function DMTechniques() {
    return (
        <div>
            <p>
                Data Mining uses a variety of powerful techniques to extract different types of knowledge
                from data. Each technique is designed for a specific kind of problem. Understanding
                <strong> which technique to use when</strong> is essential for any data scientist.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "All major Data Mining techniques with real-world examples",
                    "Classification vs Clustering — the key difference",
                    "Association Rule Mining — finding item relationships",
                    "Regression, Anomaly Detection, and Prediction",
                    "Choosing the right technique for your problem"
                ]}
            />

            <h2 id="overview">Overview of Data Mining Techniques</h2>

            <ContentImage
                src="/imgs/fds/dm_techniques_overview.svg"
                alt="Mind map showing Data Mining Techniques: Classification, Clustering, Association Rules, Regression, Anomaly Detection, and Prediction."
                caption="The six major Data Mining techniques and their primary use cases."
            />

            <table>
                <thead>
                    <tr>
                        <th>Technique</th>
                        <th>What It Does</th>
                        <th>Type</th>
                        <th>Real-World Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Classification</strong></td>
                        <td>Assigns data items into predefined categories</td>
                        <td>Supervised</td>
                        <td>Email → Spam or Not Spam</td>
                    </tr>
                    <tr>
                        <td><strong>Clustering</strong></td>
                        <td>Groups similar data without predefined categories</td>
                        <td>Unsupervised</td>
                        <td>Grouping customers by shopping behavior</td>
                    </tr>
                    <tr>
                        <td><strong>Association Rules</strong></td>
                        <td>Finds relationships between items that co-occur</td>
                        <td>Unsupervised</td>
                        <td>"Bread buyers also buy butter"</td>
                    </tr>
                    <tr>
                        <td><strong>Regression</strong></td>
                        <td>Predicts a continuous numerical value</td>
                        <td>Supervised</td>
                        <td>Predicting tomorrow's stock price</td>
                    </tr>
                    <tr>
                        <td><strong>Anomaly Detection</strong></td>
                        <td>Identifies data points that don't fit the pattern</td>
                        <td>Can be both</td>
                        <td>Detecting credit card fraud</td>
                    </tr>
                    <tr>
                        <td><strong>Prediction</strong></td>
                        <td>Forecasts future values from historical data</td>
                        <td>Supervised</td>
                        <td>Weather forecasting, sales prediction</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="classification">1. Classification</h2>
            <p>
                Classification assigns each data item to <strong>one of the predefined categories (classes)</strong>.
                It learns from labeled training data and then predicts the class of new, unseen data.
            </p>
            <ExampleBox title="🎯 Classification Examples">
                <ul>
                    <li><strong>Email Filtering:</strong> Spam ✉️ or Not Spam ✅</li>
                    <li><strong>Medical Diagnosis:</strong> Disease Present 🔴 or Absent 🟢</li>
                    <li><strong>Loan Approval:</strong> Approve ✅ or Reject ❌</li>
                    <li><strong>Sentiment Analysis:</strong> Positive 😊, Negative 😞, or Neutral 😐</li>
                </ul>
            </ExampleBox>

            <h2 id="clustering">2. Clustering</h2>
            <p>
                Clustering groups similar data items together <strong>without any predefined categories</strong>.
                The algorithm discovers the groups on its own.
            </p>
            <ExampleBox title="🎯 Clustering Examples">
                <ul>
                    <li><strong>Customer Segmentation:</strong> "Group our 1 million customers into meaningful segments"</li>
                    <li><strong>Document Grouping:</strong> "Organize these 10,000 news articles by topic"</li>
                    <li><strong>Image Segmentation:</strong> "Divide this satellite image into land, water, and forest areas"</li>
                </ul>
            </ExampleBox>

            <InfoBox type="highlight" title="Classification vs Clustering — Key Difference">
                <p>
                    <strong>Classification (Supervised):</strong> Labels are <strong>known</strong>. You train: "This is Spam, this is Not Spam" → model learns → predicts new emails.<br /><br />
                    <strong>Clustering (Unsupervised):</strong> Labels are <strong>unknown</strong>. You say: "Group these customers by similarity" → algorithm finds groups on its own.
                </p>
            </InfoBox>

            <h2 id="association">3. Association Rule Mining</h2>
            <p>
                Finds <strong>interesting relationships</strong> between items in large transaction datasets.
                The most common application is <strong>Market Basket Analysis</strong>.
            </p>
            <ExampleBox title="🛒 Association Rule Examples">
                <ul>
                    <li><strong>Rule:</strong> {"{"}Bread{"}"} → {"{"}Butter{"}"} (80% confidence) — "80% of bread buyers also buy butter"</li>
                    <li><strong>Rule:</strong> {"{"}Laptop{"}"} → {"{"}Mouse, Laptop Bag{"}"} — "Laptop buyers frequently also buy a mouse and bag"</li>
                    <li><strong>Famous:</strong> {"{"}Diapers, Friday{"}"} → {"{"}Beer{"}"} — "Men buying diapers on Fridays also buy beer"</li>
                </ul>
            </ExampleBox>

            <h2 id="regression">4. Regression</h2>
            <p>
                Regression predicts a <strong>continuous numerical value</strong> (not a category).
                It models the relationship between input variables and an output variable.
            </p>
            <ExampleBox title="📈 Regression Examples">
                <ul>
                    <li><strong>House Price Prediction:</strong> Given bedrooms, location, area → predict price (₹)</li>
                    <li><strong>Sales Forecasting:</strong> Based on past trends → predict next quarter's revenue</li>
                    <li><strong>Temperature Prediction:</strong> Based on weather data → predict tomorrow's temp</li>
                </ul>
            </ExampleBox>

            <h2 id="anomaly">5. Anomaly/Outlier Detection</h2>
            <p>
                Identifies data points that are <strong>significantly different</strong> from the majority
                of data. These outliers often represent fraud, errors, or rare events.
            </p>
            <ExampleBox title="🔍 Anomaly Detection Examples">
                <ul>
                    <li><strong>Credit Card Fraud:</strong> Card used in Mumbai and London within 1 hour → FRAUD ALERT!</li>
                    <li><strong>Network Intrusion:</strong> Unusual login patterns at 3 AM from a foreign IP</li>
                    <li><strong>Manufacturing:</strong> A machine suddenly producing defective parts (sensor anomaly)</li>
                    <li><strong>Health Monitoring:</strong> Heart rate spiking abnormally on a smartwatch</li>
                </ul>
            </ExampleBox>

            <h2 id="prediction">6. Prediction</h2>
            <p>
                Uses historical data to <strong>forecast future outcomes</strong>. It combines classification
                and regression techniques with time-series analysis.
            </p>
            <ExampleBox title="🔮 Prediction Examples">
                <ul>
                    <li><strong>Weather Forecasting:</strong> "It will rain tomorrow with 85% probability"</li>
                    <li><strong>Stock Market:</strong> "This stock is likely to rise 5% next month"</li>
                    <li><strong>Election Prediction:</strong> "Candidate A has a 67% chance of winning"</li>
                    <li><strong>Demand Forecasting:</strong> "We'll need 10,000 units of Product X next month"</li>
                </ul>
            </ExampleBox>

            <h2 id="choosing">Choosing the Right Technique</h2>

            <table>
                <thead>
                    <tr>
                        <th>If Your Question Is...</th>
                        <th>Use This Technique</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>"Which category does this belong to?"</td>
                        <td><strong>Classification</strong></td>
                    </tr>
                    <tr>
                        <td>"What natural groups exist in this data?"</td>
                        <td><strong>Clustering</strong></td>
                    </tr>
                    <tr>
                        <td>"What items are frequently bought together?"</td>
                        <td><strong>Association Rules</strong></td>
                    </tr>
                    <tr>
                        <td>"What number will this be?" (continuous value)</td>
                        <td><strong>Regression</strong></td>
                    </tr>
                    <tr>
                        <td>"Is this point unusual or suspicious?"</td>
                        <td><strong>Anomaly Detection</strong></td>
                    </tr>
                    <tr>
                        <td>"What will happen in the future?"</td>
                        <td><strong>Prediction</strong></td>
                    </tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Classification = predicting categories (supervised), Clustering = finding groups (unsupervised)",
                    "Association Rules find co-occurring items (Market Basket Analysis)",
                    "Regression predicts continuous values; Prediction forecasts future outcomes",
                    "Anomaly Detection identifies unusual data points (fraud, errors)",
                    "Choosing the right technique depends on the type of question you're asking"
                ]}
            />
        </div>
    );
}
