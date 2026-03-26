import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function ClusteringEvaluation() {
    return (
        <div>
            <p>
                Once you've clustered data, how do you know if the result is <strong>good or bad?</strong>
                Unlike classification (where you can check against known labels), clustering evaluation is
                trickier because there's often no "correct answer." There are two main approaches:
                <strong> Internal</strong> and <strong>External evaluation</strong>.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "Internal Evaluation (no ground truth needed)",
                    "External Evaluation (comparing to known labels)",
                    "Key metrics: Silhouette Coefficient, Purity",
                    "What defines a good cluster?"
                ]}
            />

            <h2 id="good-cluster">What Makes a Good Clustering?</h2>
            <ul>
                <li><strong>High Intra-Cluster Similarity:</strong> Objects within the same cluster should be very similar</li>
                <li><strong>Low Inter-Cluster Similarity:</strong> Objects in different clusters should be very different</li>
                <li><strong>Compact & Well-Separated:</strong> Tight clusters with clear boundaries between them</li>
            </ul>

            <h2 id="internal">Internal Evaluation (Intrinsic)</h2>
            <p>Measures cluster quality using <strong>only the data itself</strong> — no external labels needed.</p>

            <h3>Silhouette Coefficient</h3>
            <InfoBox type="highlight" title="Silhouette Coefficient Formula">
                <p>For each point i:</p>
                <p><strong>s(i) = (b(i) - a(i)) / max(a(i), b(i))</strong></p>
                <ul>
                    <li><strong>a(i):</strong> Average distance from i to other points in the SAME cluster (cohesion)</li>
                    <li><strong>b(i):</strong> Average distance from i to points in the NEAREST other cluster (separation)</li>
                </ul>
                <p>Range: <strong>-1 to +1</strong></p>
                <ul>
                    <li><strong>+1:</strong> Perfectly clustered (point is far from other clusters)</li>
                    <li><strong>0:</strong> On the boundary between clusters</li>
                    <li><strong>-1:</strong> Probably in the wrong cluster!</li>
                </ul>
            </InfoBox>

            <h3>Other Internal Metrics</h3>
            <ul>
                <li><strong>Sum of Squared Errors (SSE):</strong> Sum of distances from each point to its cluster centroid — lower is better</li>
                <li><strong>Dunn Index:</strong> Ratio of minimum inter-cluster distance to maximum intra-cluster distance — higher is better</li>
            </ul>

            <h2 id="external">External Evaluation (Extrinsic)</h2>
            <p>Compare clustering results against <strong>known ground-truth labels</strong>.</p>

            <h3>Purity</h3>
            <InfoBox type="highlight" title="Purity Formula">
                <p><strong>Purity = (1/N) × Σ max(points of each class in cluster k)</strong></p>
                <p>Count how many points in each cluster belong to the majority class, sum up, divide by N.</p>
                <p>Range: <strong>0 to 1</strong> (1 = perfect, each cluster has only one class)</p>
            </InfoBox>

            <ExampleBox title="Purity Example">
                <table>
                    <thead><tr><th>Cluster</th><th>Class A</th><th>Class B</th><th>Class C</th><th>Majority</th></tr></thead>
                    <tbody>
                        <tr><td>Cluster 1</td><td>5</td><td>1</td><td>0</td><td>5 (Class A)</td></tr>
                        <tr><td>Cluster 2</td><td>1</td><td>4</td><td>1</td><td>4 (Class B)</td></tr>
                        <tr><td>Cluster 3</td><td>0</td><td>1</td><td>4</td><td>4 (Class C)</td></tr>
                    </tbody>
                </table>
                <p>Purity = (5 + 4 + 4) / (6 + 6 + 5) = 13/17 = <strong>0.765 (76.5%)</strong></p>
            </ExampleBox>

            <h2 id="summary">Evaluation Methods Summary</h2>

            <table>
                <thead><tr><th>Method</th><th>Needs Labels?</th><th>Key Metric</th><th>Range</th><th>Higher/Lower Better</th></tr></thead>
                <tbody>
                    <tr><td><strong>Silhouette</strong></td><td>No</td><td>Silhouette Coefficient</td><td>-1 to +1</td><td>Higher = Better</td></tr>
                    <tr><td><strong>SSE</strong></td><td>No</td><td>Sum of Squared Errors</td><td>0 to ∞</td><td>Lower = Better</td></tr>
                    <tr><td><strong>Dunn Index</strong></td><td>No</td><td>Min inter / Max intra</td><td>0 to ∞</td><td>Higher = Better</td></tr>
                    <tr><td><strong>Purity</strong></td><td>Yes</td><td>Majority class fraction</td><td>0 to 1</td><td>Higher = Better</td></tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Good clusters = high intra-similarity + low inter-similarity",
                    "Silhouette Coefficient: +1 (perfect), 0 (border), -1 (wrong cluster)",
                    "Purity needs ground truth labels — measures how 'pure' each cluster is",
                    "Use internal metrics when no labels available; external for benchmarking"
                ]}
            />
        </div>
    );
}
