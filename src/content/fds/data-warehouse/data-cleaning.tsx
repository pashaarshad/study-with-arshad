import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function DataCleaning() {
    return (
        <div>
            <p>
                Real-world data is <strong>dirty!</strong> It contains errors, missing values, duplicates,
                and inconsistencies. <strong>Data Cleaning</strong> (also called Data Scrubbing) is the
                crucial process of detecting and correcting these issues before mining can begin.
                Remember: <strong>80% of data science time goes into cleaning!</strong>
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "Types of dirty data and their impact",
                    "Handling Missing Values — 5 methods",
                    "Handling Noisy Data — Binning, Regression, Clustering",
                    "Handling Inconsistent Data — examples and solutions"
                ]}
            />

            <h2 id="missing-values">1. Missing Values</h2>
            <p>When some attributes have no value recorded — very common in real datasets.</p>

            <table>
                <thead>
                    <tr><th>Method</th><th>Description</th><th>When to Use</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Ignore the record</strong></td><td>Delete records with missing values</td><td>Very few records affected</td></tr>
                    <tr><td><strong>Fill manually</strong></td><td>A human expert fills the value</td><td>Small datasets, critical fields</td></tr>
                    <tr><td><strong>Use a default value</strong></td><td>Replace with "Unknown" or 0</td><td>Non-critical fields</td></tr>
                    <tr><td><strong>Use mean/median</strong></td><td>Replace with average (numerical) or mode (categorical)</td><td>Most common approach</td></tr>
                    <tr><td><strong>Use most probable value</strong></td><td>Predict using regression/Bayesian methods</td><td>When accuracy is critical</td></tr>
                </tbody>
            </table>

            <ExampleBox title="Missing Values in Student Database">
                <table>
                    <thead><tr><th>Name</th><th>Marks</th><th>Attendance</th></tr></thead>
                    <tbody>
                        <tr><td>Rahul</td><td>85</td><td>90%</td></tr>
                        <tr><td>Priya</td><td><em>Missing</em></td><td>75%</td></tr>
                        <tr><td>Amit</td><td>72</td><td><em>Missing</em></td></tr>
                    </tbody>
                </table>
                <p><strong>Solution using Mean:</strong> Average marks = (85+72)/2 = 78.5 → Fill Priya's marks as 78.5</p>
            </ExampleBox>

            <h2 id="noisy-data">2. Noisy Data</h2>
            <p>
                <strong>Noise</strong> is random error or variance in a measured variable — data that
                doesn't make sense.
            </p>

            <h3>Method 1: Binning</h3>
            <p>Sort data into "bins" (groups) and smooth by replacing values with bin mean, median, or boundary.</p>
            <ExampleBox title="Binning Example">
                <p><strong>Original sorted data:</strong> 4, 8, 9, 15, 21, 21, 24, 25, 26, 28, 29, 34</p>
                <p><strong>Bin 1:</strong> 4, 8, 9, 15 → Mean = 9 → Smoothed: 9, 9, 9, 9</p>
                <p><strong>Bin 2:</strong> 21, 21, 24, 25 → Mean = 22.75 → Smoothed: 22.75, 22.75, 22.75, 22.75</p>
                <p><strong>Bin 3:</strong> 26, 28, 29, 34 → Mean = 29.25 → Smoothed: 29.25, 29.25, 29.25, 29.25</p>
            </ExampleBox>

            <h3>Method 2: Regression</h3>
            <p>Fit data to a smooth function (e.g., a straight line) and use the predicted values instead of noisy originals.</p>

            <h3>Method 3: Clustering</h3>
            <p>Group similar values together. Values that fall outside any cluster are likely noise/outliers.</p>

            <h2 id="inconsistent-data">3. Inconsistent Data</h2>
            <p>Same information stored in different formats across systems.</p>

            <ExampleBox title="Examples of Inconsistent Data & Solutions">
                <table>
                    <thead><tr><th>Inconsistency</th><th>Solution</th></tr></thead>
                    <tbody>
                        <tr><td>"Bangalore" vs "Bengaluru" vs "BLR"</td><td>Standardize to "Bengaluru"</td></tr>
                        <tr><td>"01/03/2024" (DD/MM) vs "03/01/2024" (MM/DD)</td><td>Use standard ISO format: 2024-03-01</td></tr>
                        <tr><td>"₹5,00,000" vs "500000" vs "5 Lakh"</td><td>Convert to numeric: 500000</td></tr>
                        <tr><td>Gender: "Male", "M", "1", "male"</td><td>Standardize to "Male"</td></tr>
                        <tr><td>Age = 25, Birth Year = 1990 (doesn't match)</td><td>Recalculate from birth year</td></tr>
                    </tbody>
                </table>
            </ExampleBox>

            <InfoBox type="warning" title="GIGO — Garbage In, Garbage Out">
                <p>
                    If you feed bad quality data into algorithms, the results will be meaningless.
                    <strong> Data cleaning is the single most important step in Data Mining!</strong>
                </p>
            </InfoBox>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Missing values: use mean/median, default values, or predictive methods",
                    "Noisy data: smooth using Binning, Regression, or Clustering",
                    "Inconsistent data: standardize formats across all sources",
                    "Data cleaning takes 80% of a data scientist's time — it's that important!"
                ]}
            />
        </div>
    );
}
