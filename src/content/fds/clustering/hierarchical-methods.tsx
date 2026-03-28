import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function HierarchicalMethods() {
    return (
        <div>
            <p>
                Hierarchical clustering builds a <strong>tree-like structure</strong> called a
                <strong> dendrogram</strong> that shows how clusters form step by step. Unlike 
                K-Means, you <strong>don't need to specify k</strong> in advance — you can decide
                the number of clusters by "cutting" the dendrogram at the right level.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "Agglomerative (Bottom-Up) approach",
                    "Divisive (Top-Down) approach",
                    "Reading and interpreting Dendrograms",
                    "Distance Measures: Single, Complete, Average Linkage"
                ]}
            />

            <h2 id="agglomerative">Agglomerative (Bottom-Up) ⬆️</h2>
            <p>Start with each point as its own cluster, then repeatedly <strong>merge the two closest</strong> until one cluster remains.</p>
            <ol>
                <li>Start: Each object is a separate cluster (n clusters for n objects)</li>
                <li>Find the two closest clusters and merge them</li>
                <li>Repeat until only one cluster remains or desired number reached</li>
            </ol>

            <h2 id="divisive">Divisive (Top-Down) ⬇️</h2>
            <p>Start with all points in <strong>one cluster</strong>, then repeatedly <strong>split</strong> until each point is its own.</p>
            <ol>
                <li>Start: All objects in one cluster</li>
                <li>Find the most dissimilar cluster and split it</li>
                <li>Repeat until desired number of clusters reached</li>
            </ol>

            <h2 id="dendrogram">Reading a Dendrogram</h2>

            <ImagePlaceholder
                name="Dendrogram.png"
                description="Dendrogram with 6 data points (A-F) at the bottom. Lines merge step by step. Y-axis shows 'Distance'. A horizontal cut line at a certain height creates 2 or 3 clusters. Blue-gray color scheme."
                suggestedSize="700x500"
            />

            <ExampleBox title="How to Read a Dendrogram">
                <ul>
                    <li><strong>Bottom leaves:</strong> Individual data points</li>
                    <li><strong>Height of merge:</strong> How dissimilar the merged clusters were (higher = more different)</li>
                    <li><strong>Cutting horizontally:</strong> Cut low → many small clusters. Cut high → few large clusters</li>
                </ul>
            </ExampleBox>

            <h2 id="linkage">Distance Measures Between Clusters</h2>

            <table>
                <thead><tr><th>Method</th><th>Definition</th><th>Characteristic</th></tr></thead>
                <tbody>
                    <tr>
                        <td><strong>Single Linkage (MIN)</strong></td>
                        <td>Minimum distance between any two points from different clusters</td>
                        <td>Nearest neighbor — can create long, chain-like clusters</td>
                    </tr>
                    <tr>
                        <td><strong>Complete Linkage (MAX)</strong></td>
                        <td>Maximum distance between any two points from different clusters</td>
                        <td>Creates compact, spherical clusters</td>
                    </tr>
                    <tr>
                        <td><strong>Average Linkage</strong></td>
                        <td>Average distance between all pairs of points from different clusters</td>
                        <td>Balanced approach</td>
                    </tr>
                    <tr>
                        <td><strong>Centroid</strong></td>
                        <td>Distance between cluster centroids (means)</td>
                        <td>Uses center point of each cluster</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="pros-cons">Advantages and Disadvantages</h2>
            <table>
                <thead><tr><th>Advantages ✅</th><th>Disadvantages ❌</th></tr></thead>
                <tbody>
                    <tr><td>No need to specify k in advance</td><td>Slow for large datasets (O(n²) or worse)</td></tr>
                    <tr><td>Produces informative dendrogram for visualization</td><td>Cannot undo a merge/split once done</td></tr>
                    <tr><td>Can find clusters of arbitrary shape</td><td>Sensitive to noise and outliers</td></tr>
                    <tr><td>Flexible — cut dendrogram at any level</td><td>Not scalable for very large data</td></tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Agglomerative: bottom-up merging; Divisive: top-down splitting",
                    "Dendrogram visualizes the hierarchy — cut at desired level for K clusters",
                    "Single Linkage = chain-like; Complete Linkage = compact clusters",
                    "No k needed! But slow for large datasets"
                ]}
            />
        </div>
    );
}
