import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function DensityBasedMethods() {
    return (
        <div>
            <p>
                <strong>DBSCAN (Density-Based Spatial Clustering of Applications with Noise)</strong>
                finds clusters of <strong>arbitrary shape</strong> and automatically detects
                <strong> outliers/noise</strong>. Unlike K-Means, no need to specify k beforehand!
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "DBSCAN: ε (Epsilon) and MinPts parameters",
                    "Core, Border, and Noise points",
                    "How DBSCAN works step by step",
                    "Advantages and Disadvantages"
                ]}
            />

            <h2 id="parameters">Key Parameters</h2>
            <ul>
                <li><strong>ε (Epsilon/Eps):</strong> Radius of the neighborhood around a point</li>
                <li><strong>MinPts:</strong> Minimum points required within ε to form a dense region</li>
            </ul>

            <h2 id="point-types">Types of Points in DBSCAN</h2>

            <table>
                <thead><tr><th>Point Type</th><th>Definition</th><th>Analogy</th></tr></thead>
                <tbody>
                    <tr>
                        <td><strong>Core Point</strong></td>
                        <td>Has at least MinPts neighbors within ε</td>
                        <td>The popular kid with many friends nearby 🌟</td>
                    </tr>
                    <tr>
                        <td><strong>Border Point</strong></td>
                        <td>Fewer than MinPts neighbors but within ε of a Core Point</td>
                        <td>Friend of the popular kid 👤</td>
                    </tr>
                    <tr>
                        <td><strong>Noise Point</strong></td>
                        <td>Not Core and not within ε of any Core Point</td>
                        <td>The loner who doesn't belong 🚫</td>
                    </tr>
                </tbody>
            </table>

            <ImagePlaceholder
                name="DBSCANPointTypes.png"
                description="2D scatter plot: Large red dots as 'Core Points' with ε circles containing many points. Yellow dots as 'Border Points' near core points. Gray dots as 'Noise Points' isolated far away. Include ε circles drawn around core points."
                suggestedSize="700x450"
            />

            <h2 id="how-it-works">How DBSCAN Works</h2>
            <ol>
                <li>Pick any unvisited point</li>
                <li>Find all points within ε distance (its ε-neighborhood)</li>
                <li>If ≥ MinPts neighbors → <strong>Core Point</strong>. Start new cluster and add neighbors</li>
                <li>Recursively: if neighbors are also Core Points, add their neighbors too (density-reachability)</li>
                <li>If &lt; MinPts neighbors and not near any Core Point → <strong>Noise</strong></li>
                <li>Continue until all points are visited</li>
            </ol>

            <ExampleBox title="DBSCAN Example (ε=1.5, MinPts=3)">
                <p>Consider these 2D points and check each point:</p>
                <ul>
                    <li>Point A has 4 neighbors within ε=1.5 → <strong>Core Point</strong> (4 ≥ 3)</li>
                    <li>Point B has 1 neighbor but is within ε of Core Point A → <strong>Border Point</strong></li>
                    <li>Point C has 0 neighbors within ε and isn't near any core → <strong>Noise</strong></li>
                </ul>
                <p>
                    Core points and their density-connected neighbors form <strong>clusters</strong>.
                    Noise points are excluded. No need to specify k!
                </p>
            </ExampleBox>

            <h2 id="pros-cons">Advantages and Disadvantages</h2>
            <table>
                <thead><tr><th>Advantages ✅</th><th>Disadvantages ❌</th></tr></thead>
                <tbody>
                    <tr><td>Finds clusters of arbitrary shape (not just spherical)</td><td>Cannot handle varying densities well</td></tr>
                    <tr><td>Automatically identifies noise/outliers</td><td>Choosing right ε and MinPts is tricky</td></tr>
                    <tr><td>No need to specify k</td><td>Not suitable for high-dimensional data</td></tr>
                    <tr><td>Robust to noise</td><td>Sensitive to ε parameter choice</td></tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "DBSCAN uses ε (radius) and MinPts to find dense regions",
                    "Three point types: Core (≥MinPts neighbors), Border (near core), Noise (isolated)",
                    "Finds arbitrary-shaped clusters and detects outliers automatically",
                    "No k needed — clusters emerge from density connectivity"
                ]}
            />
        </div>
    );
}
