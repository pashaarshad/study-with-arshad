import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function DataReductionDiscretization() {
    return (
        <div>
            <p>
                Real-world datasets can be <strong>huge</strong> — millions of records with hundreds of
                attributes. Mining such massive data directly is slow and computationally expensive.
                <strong>Data Reduction</strong> shrinks the data size while preserving the essential
                information. <strong>Discretization</strong> converts continuous data into categories.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "Why Data Reduction is needed",
                    "Dimensionality Reduction — reducing attributes",
                    "Numerosity Reduction — reducing data volume",
                    "Data Compression techniques",
                    "Data Discretization — continuous to categorical"
                ]}
            />

            <h2 id="why-reduction">Why Data Reduction?</h2>

            <ul>
                <li>Reduces computation time and storage</li>
                <li>Removes irrelevant or redundant features</li>
                <li>Prevents overfitting (too many features confuse the algorithm)</li>
                <li>Makes results more interpretable</li>
            </ul>

            <h2 id="dimensionality">1. Dimensionality Reduction</h2>
            <p>Reducing the <strong>number of attributes (columns)</strong> in the dataset.</p>

            <h3>a) Feature Selection (Attribute Subset Selection)</h3>
            <p>Selecting only the <strong>most relevant</strong> attributes and discarding the rest.</p>
            <ExampleBox title="Feature Selection Example">
                <p>
                    A student dataset has 50 columns: Name, Roll_No, DOB, Blood_Group, Shoe_Size,
                    Marks, Attendance, ...
                </p>
                <p>
                    To predict <strong>exam performance</strong>, we select: Marks, Attendance, Study_Hours.<br />
                    We discard: Blood_Group, Shoe_Size, Favorite_Color — these are <strong>irrelevant</strong>!
                </p>
            </ExampleBox>

            <h3>b) Principal Component Analysis (PCA)</h3>
            <p>
                A mathematical technique that <strong>transforms</strong> many correlated variables into
                fewer uncorrelated variables called <strong>principal components</strong>.
            </p>

            <ExampleBox title="PCA Analogy">
                <p>
                    Imagine watching a 3D movie. PCA is like finding the <strong>"best angle"</strong>
                    to project the 3D scene onto a 2D screen while losing as little information as possible.
                    It captures the most important "directions" in the data.
                </p>
            </ExampleBox>

            <h2 id="numerosity">2. Numerosity Reduction</h2>
            <p>Reducing the <strong>volume (number of records)</strong> while maintaining data characteristics.</p>

            <table>
                <thead>
                    <tr><th>Method</th><th>Description</th><th>Example</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Sampling</strong></td>
                        <td>Use a representative subset instead of the full dataset</td>
                        <td>Analyze 10,000 records instead of 10 million</td>
                    </tr>
                    <tr>
                        <td><strong>Histograms</strong></td>
                        <td>Represent data distribution using frequency bars</td>
                        <td>Age groups: 0-10: 50 people, 10-20: 120 people...</td>
                    </tr>
                    <tr>
                        <td><strong>Clustering</strong></td>
                        <td>Replace clusters of points with cluster representatives</td>
                        <td>1000 customers → 5 cluster centroids</td>
                    </tr>
                    <tr>
                        <td><strong>Regression</strong></td>
                        <td>Represent data using a mathematical model</td>
                        <td>y = 2x + 5 (one equation replaces thousands of points)</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="compression">3. Data Compression</h2>
            <p>Compressing data to <strong>reduce storage and transmission</strong> requirements.</p>
            <ul>
                <li><strong>Lossless Compression:</strong> Original data can be fully recovered (like ZIP files)</li>
                <li><strong>Lossy Compression:</strong> Slight information loss, but manageable (like JPEG images)</li>
            </ul>

            <h2 id="discretization">Data Discretization</h2>
            <p>
                Converting <strong>continuous values</strong> into <strong>discrete categories</strong>.
                Many mining algorithms (like Decision Trees) work better with categorical data.
            </p>

            <ExampleBox title="Discretization Example">
                <table>
                    <thead><tr><th>Continuous Value</th><th>Discretized Category</th></tr></thead>
                    <tbody>
                        <tr><td>Age = 5</td><td>"Child" (0-12)</td></tr>
                        <tr><td>Age = 17</td><td>"Teenager" (13-19)</td></tr>
                        <tr><td>Age = 35</td><td>"Adult" (20-59)</td></tr>
                        <tr><td>Age = 70</td><td>"Senior" (60+)</td></tr>
                        <tr><td>Income = ₹25,000</td><td>"Low" (&lt;₹30K)</td></tr>
                        <tr><td>Income = ₹75,000</td><td>"Medium" (₹30K-₹1L)</td></tr>
                        <tr><td>Income = ₹3,00,000</td><td>"High" (&gt;₹1L)</td></tr>
                    </tbody>
                </table>
            </ExampleBox>

            <h3>Methods of Discretization</h3>
            <ul>
                <li><strong>Equal-Width Binning:</strong> Divide range into equal-sized intervals (0-20, 20-40, 40-60...)</li>
                <li><strong>Equal-Frequency Binning:</strong> Each bin contains approximately the same number of data points</li>
                <li><strong>Clustering-Based:</strong> Use clustering to create natural groups as bins</li>
                <li><strong>Entropy-Based:</strong> Use decision tree split criterion (Information Gain) to find best splits</li>
            </ul>

            <h2 id="summary">All Techniques at a Glance</h2>
            <table>
                <thead>
                    <tr><th>Category</th><th>Technique</th><th>Reduces</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Dimensionality Reduction</strong></td><td>Feature Selection, PCA</td><td>Number of attributes (columns)</td></tr>
                    <tr><td><strong>Numerosity Reduction</strong></td><td>Sampling, Histograms, Clustering</td><td>Number of records (rows)</td></tr>
                    <tr><td><strong>Compression</strong></td><td>Lossless (ZIP), Lossy (JPEG)</td><td>Storage size</td></tr>
                    <tr><td><strong>Discretization</strong></td><td>Binning, Entropy-Based</td><td>Continuous → Categorical</td></tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Data Reduction makes large datasets manageable without losing essential information",
                    "Dimensionality reduction removes irrelevant attributes (Feature Selection, PCA)",
                    "Numerosity reduction decreases data volume (Sampling, Histograms, Clustering)",
                    "Discretization converts continuous values to categories (Age 35 → 'Adult')",
                    "Both lossless and lossy compression reduce storage requirements"
                ]}
            />
        </div>
    );
}
