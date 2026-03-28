import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function PartitioningMethods() {
    return (
        <div>
            <p>
                <strong>K-Means</strong> is the most popular and widely-used clustering algorithm. It
                partitions n objects into <strong>k clusters</strong>, where each object belongs to the
                cluster with the <strong>nearest mean (centroid)</strong>. Simple, fast, and effective!
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "How K-Means works — step by step",
                    "Complete Worked Example (k=2)",
                    "Choosing the right K (Elbow Method)",
                    "Advantages and Disadvantages",
                    "K-Medoids — an alternative to K-Means"
                ]}
            />

            <h2 id="kmeans-steps">K-Means Algorithm — How It Works</h2>
            <ol>
                <li><strong>Choose k:</strong> Decide how many clusters you want</li>
                <li><strong>Initialize:</strong> Randomly select k data points as initial <strong>centroids</strong></li>
                <li><strong>Assign:</strong> Assign each data point to the <strong>nearest centroid</strong> (Euclidean distance)</li>
                <li><strong>Update:</strong> Recalculate each centroid as the <strong>mean of all assigned points</strong></li>
                <li><strong>Repeat:</strong> Steps 3-4 until centroids stop moving (convergence)</li>
            </ol>

            <ImagePlaceholder
                name="KMeansSteps.png"
                description="4-panel K-Means steps: Panel 1 - Random centroids placed. Panel 2 - Points colored by nearest centroid. Panel 3 - Centroids move to mean. Panel 4 - Final converged clusters. Stars for centroids."
                suggestedSize="900x500"
            />

            <h2 id="worked-example">Complete Worked Example ⭐</h2>

            <ExampleBox title="🔢 K-Means (k=2) — Step by Step">
                <p><strong>Dataset:</strong> 6 data points in 2D</p>
                <table>
                    <thead><tr><th>Point</th><th>X</th><th>Y</th></tr></thead>
                    <tbody>
                        <tr><td>P1</td><td>2</td><td>10</td></tr>
                        <tr><td>P2</td><td>2</td><td>5</td></tr>
                        <tr><td>P3</td><td>8</td><td>4</td></tr>
                        <tr><td>P4</td><td>5</td><td>8</td></tr>
                        <tr><td>P5</td><td>7</td><td>5</td></tr>
                        <tr><td>P6</td><td>6</td><td>4</td></tr>
                    </tbody>
                </table>

                <p><strong>Step 1:</strong> k=2 → We want 2 clusters</p>
                <p><strong>Step 2:</strong> Choose initial centroids: C1 = P1(2,10), C2 = P3(8,4)</p>

                <p><strong>Iteration 1 — Assign to nearest centroid:</strong></p>
                <table>
                    <thead><tr><th>Point</th><th>Dist to C1(2,10)</th><th>Dist to C2(8,4)</th><th>Assigned</th></tr></thead>
                    <tbody>
                        <tr><td>P1(2,10)</td><td>0</td><td>8.49</td><td>Cluster 1</td></tr>
                        <tr><td>P2(2,5)</td><td>5</td><td>6.08</td><td>Cluster 1</td></tr>
                        <tr><td>P3(8,4)</td><td>8.49</td><td>0</td><td>Cluster 2</td></tr>
                        <tr><td>P4(5,8)</td><td>3.61</td><td>5</td><td>Cluster 1</td></tr>
                        <tr><td>P5(7,5)</td><td>7.07</td><td>1.41</td><td>Cluster 2</td></tr>
                        <tr><td>P6(6,4)</td><td>7.21</td><td>2</td><td>Cluster 2</td></tr>
                    </tbody>
                </table>

                <p><strong>Update centroids:</strong></p>
                <ul>
                    <li>New C1 = Mean of P1,P2,P4 = ((2+2+5)/3, (10+5+8)/3) = <strong>(3, 7.67)</strong></li>
                    <li>New C2 = Mean of P3,P5,P6 = ((8+7+6)/3, (4+5+4)/3) = <strong>(7, 4.33)</strong></li>
                </ul>

                <p><strong>Iteration 2 — Reassign and repeat until convergence.</strong></p>
                <p><strong>Final Result:</strong></p>
                <ul>
                    <li><strong>Cluster 1:</strong> {"{"}P1, P2, P4{"}"} — upper-left group</li>
                    <li><strong>Cluster 2:</strong> {"{"}P3, P5, P6{"}"} — lower-right group</li>
                </ul>
            </ExampleBox>

            <h2 id="elbow">Choosing K — The Elbow Method</h2>
            <p>
                Run K-Means with k=1, 2, 3, ... 10. For each k, calculate <strong>WCSS
                (Within-Cluster Sum of Squares)</strong>. Plot k vs WCSS. The "elbow" point is your
                optimal k!
            </p>

            <ImagePlaceholder
                name="ElbowMethod.png"
                description="Line chart: X-axis 'Number of Clusters (k)' 1-10, Y-axis 'WCSS'. Sharp drop from k=1 to k=3, then flattens. Red circle at k=3 labeled 'Optimal k=3'."
                suggestedSize="700x400"
            />

            <h2 id="pros-cons">Advantages and Disadvantages</h2>
            <table>
                <thead><tr><th>Advantages ✅</th><th>Disadvantages ❌</th></tr></thead>
                <tbody>
                    <tr><td>Simple and easy to understand</td><td>Must specify k in advance</td></tr>
                    <tr><td>Fast — works well on large datasets</td><td>Sensitive to initial centroid selection</td></tr>
                    <tr><td>Works well with spherical clusters</td><td>Cannot handle non-spherical clusters</td></tr>
                    <tr><td>Easy to implement</td><td>Sensitive to outliers</td></tr>
                </tbody>
            </table>

            <h2 id="k-medoids">K-Medoids (PAM Algorithm)</h2>
            <p>
                An alternative to K-Means that uses <strong>actual data points</strong> (medoids) as
                cluster centers instead of computed means. This makes it <strong>more robust to
                outliers</strong>.
            </p>
            <table>
                <thead><tr><th>Feature</th><th>K-Means</th><th>K-Medoids</th></tr></thead>
                <tbody>
                    <tr><td><strong>Center</strong></td><td>Computed mean (may not be a real point)</td><td>Actual data point (medoid)</td></tr>
                    <tr><td><strong>Outlier Sensitivity</strong></td><td>High — outliers shift the mean</td><td>Low — medoid is a real point</td></tr>
                    <tr><td><strong>Speed</strong></td><td>Faster</td><td>Slower</td></tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "K-Means: Assign to nearest centroid → Update centroids → Repeat until convergence",
                    "Use the Elbow Method to find optimal k",
                    "K-Means works best with spherical, equally-sized clusters",
                    "K-Medoids is more robust to outliers but slower"
                ]}
            />
        </div>
    );
}
