import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function GridBasedMethods() {
    return (
        <div>
            <p>
                Grid-Based methods take a different approach — instead of analyzing individual points,
                they <strong>divide the data space into a grid</strong> (like a chess board) and perform
                clustering on the grid cells. This makes them <strong>extremely fast!</strong>
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "How Grid-Based methods work",
                    "Key algorithms: STING, CLIQUE, WaveCluster",
                    "Advantages over other methods"
                ]}
            />

            <h2 id="how-it-works">How Grid-Based Methods Work</h2>
            <ol>
                <li><strong>Divide:</strong> Partition data space into finite grid cells</li>
                <li><strong>Calculate:</strong> Compute statistics for each cell (count, mean, etc.)</li>
                <li><strong>Cluster:</strong> Merge adjacent dense cells to form clusters</li>
            </ol>

            <ImagePlaceholder
                name="GridBasedClustering.png"
                description="2D grid overlaid on data points. Dense cells highlighted in blue, sparse in white/gray. Adjacent dense cells merged with dashed outlines showing clusters. Isolated points in sparse cells marked as noise."
                suggestedSize="700x450"
            />

            <h2 id="algorithms">Key Algorithms</h2>
            <table>
                <thead><tr><th>Algorithm</th><th>Description</th></tr></thead>
                <tbody>
                    <tr><td><strong>STING</strong></td><td>STatistical INformation Grid — hierarchical grid with statistical parameters at each level</td></tr>
                    <tr><td><strong>CLIQUE</strong></td><td>CLustering In QUEst — combines grid-based and density-based for high-dimensional data</td></tr>
                    <tr><td><strong>WaveCluster</strong></td><td>Wavelet transform on grid for multi-resolution clustering</td></tr>
                </tbody>
            </table>

            <h2 id="advantages">Key Advantages</h2>
            <ul>
                <li><strong>Very fast:</strong> Processing time depends on grid size, not data size</li>
                <li><strong>Scalable:</strong> Handles very large datasets efficiently</li>
                <li><strong>Single scan:</strong> Grid built in one pass through data</li>
            </ul>

            <h2 id="comparison">Complete Comparison of All Methods</h2>

            <table>
                <thead>
                    <tr><th>Feature</th><th>K-Means</th><th>Hierarchical</th><th>DBSCAN</th><th>Grid-Based</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Type</strong></td><td>Partitioning</td><td>Tree building</td><td>Density-based</td><td>Grid cells</td></tr>
                    <tr><td><strong>Need k?</strong></td><td>Yes</td><td>No</td><td>No</td><td>No</td></tr>
                    <tr><td><strong>Shape</strong></td><td>Spherical only</td><td>Any shape</td><td>Any shape</td><td>Any shape</td></tr>
                    <tr><td><strong>Handles Noise?</strong></td><td>No</td><td>No</td><td>Yes ✅</td><td>Somewhat</td></tr>
                    <tr><td><strong>Speed</strong></td><td>Fast</td><td>Slow</td><td>Moderate</td><td>Very Fast</td></tr>
                    <tr><td><strong>Scalability</strong></td><td>Good</td><td>Poor</td><td>Good</td><td>Excellent</td></tr>
                    <tr><td><strong>Best For</strong></td><td>Spherical clusters</td><td>Understanding hierarchy</td><td>Arbitrary shapes + noise</td><td>Very large datasets</td></tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Grid-based methods divide space into cells, then merge dense adjacent cells",
                    "Processing time depends on grid size (not data size) → Very fast!",
                    "Each method has its sweet spot — choose based on data characteristics",
                    "K-Means for speed, Hierarchical for visualization, DBSCAN for noise, Grid for scale"
                ]}
            />
        </div>
    );
}
