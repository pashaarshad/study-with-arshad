import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function DataIntegrationTransformation() {
    return (
        <div>
            <p>
                Once data is cleaned, the next steps are <strong>Data Integration</strong> (combining data
                from multiple sources) and <strong>Data Transformation</strong> (converting data into the
                right format for mining). These steps ensure the data is ready for analysis.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "Data Integration — combining multiple data sources",
                    "Challenges: Schema conflicts, entity identification, redundancy",
                    "Data Transformation techniques",
                    "Normalization, Aggregation, Generalization, Attribute Construction"
                ]}
            />

            <h2 id="data-integration">Data Integration</h2>
            <p>Combining data from multiple sources into a <strong>unified, consistent store</strong>.</p>

            <h3>Key Challenges</h3>
            <ul>
                <li><strong>Schema Integration:</strong> Different databases use different names for the same thing (e.g., "Customer_ID" vs "Cust_No" vs "client_id")</li>
                <li><strong>Entity Identification:</strong> Recognizing that "John D. Smith" and "J.D. Smith" are the same person</li>
                <li><strong>Detecting Redundancy:</strong> Finding and removing duplicate attributes across databases</li>
                <li><strong>Handling Conflicts:</strong> Resolving different units (km vs miles), currencies (₹ vs $), date formats</li>
            </ul>

            <ExampleBox title="Integration Challenge Example">
                <p>A university has 3 databases:</p>
                <table>
                    <thead><tr><th>System</th><th>Student ID Field</th><th>Name Format</th><th>Date Format</th></tr></thead>
                    <tbody>
                        <tr><td>Admission</td><td>Admission_No</td><td>First, Last</td><td>DD/MM/YYYY</td></tr>
                        <tr><td>Exam</td><td>Roll_Number</td><td>Last, First</td><td>MM-DD-YYYY</td></tr>
                        <tr><td>Library</td><td>Student_ID</td><td>Full Name</td><td>YYYY/MM/DD</td></tr>
                    </tbody>
                </table>
                <p>
                    <strong>Integration must:</strong> Map all 3 ID fields to one unified ID, standardize name format,
                    and convert all dates to ISO format (YYYY-MM-DD).
                </p>
            </ExampleBox>

            <h2 id="data-transformation">Data Transformation</h2>
            <p>Converting data into a form suitable for mining. Key techniques:</p>

            <h3>1. Normalization</h3>
            <p>
                Scaling data to a standard range like [0, 1] or [-1, 1]. This is important when attributes
                have different scales (e.g., Age 0-100 vs Salary ₹10K-₹10L).
            </p>
            <InfoBox type="highlight" title="Min-Max Normalization Formula">
                <p>
                    <strong>v' = (v - min) / (max - min)</strong>
                </p>
                <p>
                    Example: If Salary range is ₹10,000 to ₹10,00,000 and a person earns ₹5,00,000:<br />
                    v' = (500000 - 10000) / (1000000 - 10000) = 490000 / 990000 = <strong>0.495</strong>
                </p>
            </InfoBox>

            <h3>2. Aggregation</h3>
            <p>Summarizing data at a higher level.</p>
            <ExampleBox title="Aggregation Examples">
                <ul>
                    <li>Daily sales → <strong>Monthly totals</strong></li>
                    <li>Individual student marks → <strong>Class average</strong></li>
                    <li>Hourly temperature readings → <strong>Daily average</strong></li>
                </ul>
            </ExampleBox>

            <h3>3. Generalization</h3>
            <p>Replacing low-level data with higher-level concepts.</p>
            <ExampleBox title="Generalization Examples">
                <ul>
                    <li>Age "23" → <strong>"Young Adult"</strong> category</li>
                    <li>City "Mumbai" → <strong>"Maharashtra"</strong> → <strong>"India"</strong></li>
                    <li>Product "iPhone 15 Pro Max" → <strong>"Smartphone"</strong> → <strong>"Electronics"</strong></li>
                </ul>
            </ExampleBox>

            <h3>4. Attribute Construction</h3>
            <p>Creating new attributes from existing ones.</p>
            <ExampleBox title="Attribute Construction Examples">
                <ul>
                    <li>Height + Weight → <strong>BMI (Body Mass Index)</strong></li>
                    <li>Date of Birth → <strong>Age</strong></li>
                    <li>Revenue - Cost → <strong>Profit</strong></li>
                    <li>Total Marks / Number of Subjects → <strong>Average Percentage</strong></li>
                </ul>
            </ExampleBox>

            <h2 id="summary-table">Transformation Techniques Summary</h2>

            <table>
                <thead>
                    <tr><th>Technique</th><th>What It Does</th><th>Example</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Normalization</strong></td><td>Scales values to standard range</td><td>Salary ₹5L → 0.495</td></tr>
                    <tr><td><strong>Aggregation</strong></td><td>Summarizes at higher level</td><td>Daily → Monthly</td></tr>
                    <tr><td><strong>Generalization</strong></td><td>Replaces with higher-level concept</td><td>Age 23 → "Young Adult"</td></tr>
                    <tr><td><strong>Attribute Construction</strong></td><td>Creates new attributes</td><td>Height + Weight → BMI</td></tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Data Integration combines multiple sources into one unified, consistent dataset",
                    "Key challenges: schema conflicts, entity matching, redundancy, unit conflicts",
                    "Normalization scales values to a standard range for fair comparison",
                    "Aggregation, Generalization, and Attribute Construction transform data for better mining"
                ]}
            />
        </div>
    );
}
