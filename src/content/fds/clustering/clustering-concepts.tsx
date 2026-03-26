// src/content/fds/clustering/clustering-concepts.tsx
import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function ClusteringConcepts() {
    return (
        <div>
            <p>
                Imagine you're a new librarian at a huge library with thousands of unsorted books dumped
                on the floor. Nobody told you the categories — you have to <strong>group similar books
                together on your own</strong>. You'd naturally place cookbooks together, novels together,
                science textbooks together. That's exactly what <strong>Clustering</strong> does with data!
                Unlike Classification (where categories are already known), Clustering <strong>discovers
                natural groups</strong> in data without any predefined labels.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "What is Cluster Analysis and why it's important",
                    "Clustering vs Classification — The key difference",
                    "Partitioning Methods — K-Means Algorithm (step-by-step with example)",
                    "Hierarchical Methods — Agglomerative and Divisive approaches",
                    "Density-Based Methods — DBSCAN Algorithm",
                    "Grid-Based Methods — How they work",
                    "Evaluation of Clustering — How to measure cluster quality"
                ]}
            />

            <h2 id="cluster-analysis">What is Cluster Analysis?</h2>

            <p>
                <strong>Cluster Analysis (Clustering)</strong> is an <strong>unsupervised learning</strong> technique
                that groups a set of data objects into <strong>clusters</strong> such that:
            </p>

            <ul>
                <li>Objects <strong>within the same cluster</strong> are highly similar to each other (high intra-cluster similarity)</li>
                <li>Objects <strong>in different clusters</strong> are very different from each other (low inter-cluster similarity)</li>
            </ul>

            <blockquote>
                "Clustering is the process of organizing objects into groups whose members are similar
                in some way. A cluster is therefore a collection of objects that are similar to each
                other and dissimilar to objects belonging to other clusters."
            </blockquote>

            <ImagePlaceholder
                name="ClusteringConcept.png"
                description="A visual representation of clustering: Left side shows scattered, mixed-up colored dots (unclustered data). Right side shows the same dots neatly grouped into 3 distinct clusters (red cluster, blue cluster, green cluster) with dashed circles around each cluster. An arrow labeled 'Clustering Algorithm' connects left to right. Clean, modern data visualization style."
                suggestedSize="850x350"
            />

            <h3>Clustering vs Classification</h3>

            <table>
                <thead>
                    <tr>
                        <th>Aspect</th>
                        <th>Classification</th>
                        <th>Clustering</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Type</strong></td>
                        <td>Supervised Learning (teacher guides the learning)</td>
                        <td>Unsupervised Learning (no teacher, self-discovery)</td>
                    </tr>
                    <tr>
                        <td><strong>Labels</strong></td>
                        <td>Predefined class labels are known (Spam/Not Spam)</td>
                        <td>No predefined labels — groups are discovered automatically</td>
                    </tr>
                    <tr>
                        <td><strong>Training Data</strong></td>
                        <td>Requires labeled training data</td>
                        <td>Works with unlabeled data</td>
                    </tr>
                    <tr>
                        <td><strong>Goal</strong></td>
                        <td>Predict the class of new data</td>
                        <td>Discover natural groups in data</td>
                    </tr>
                    <tr>
                        <td><strong>Example</strong></td>
                        <td>"Is this email Spam or Not Spam?" (labels given)</td>
                        <td>"Group similar customers together" (discover groups)</td>
                    </tr>
                </tbody>
            </table>

            <h3>Applications of Clustering</h3>

            <ul>
                <li><strong>Customer Segmentation:</strong> Grouping customers by buying behavior for targeted marketing</li>
                <li><strong>Image Segmentation:</strong> Dividing an image into meaningful regions</li>
                <li><strong>Document Clustering:</strong> Grouping similar news articles or web pages</li>
                <li><strong>Anomaly Detection:</strong> Data points that don't belong to any cluster might be outliers/fraud</li>
                <li><strong>Biology:</strong> Grouping plants/animals by genetic similarity (taxonomy)</li>
                <li><strong>Social Network Analysis:</strong> Finding communities in social media networks</li>
            </ul>

            <h2 id="partitioning-methods">Partitioning Methods — K-Means Algorithm</h2>

            <p>
                <strong>K-Means</strong> is the most popular and widely-used clustering algorithm.
                It partitions n objects into <strong>k clusters</strong>, where each object belongs to
                the cluster with the <strong>nearest mean (centroid)</strong>.
            </p>

            <h3>How K-Means Works — Step by Step</h3>

            <ol>
                <li><strong>Choose k:</strong> Decide how many clusters you want (user must specify this!)</li>
                <li><strong>Initialize:</strong> Randomly select k data points as initial <strong>centroids</strong> (cluster centers)</li>
                <li><strong>Assign:</strong> Assign each data point to the <strong>nearest centroid</strong> (using distance, usually Euclidean distance)</li>
                <li><strong>Update:</strong> Recalculate the centroid of each cluster as the <strong>mean of all points</strong> assigned to it</li>
                <li><strong>Repeat:</strong> Steps 3-4 until centroids stop moving (converge) or maximum iterations reached</li>
            </ol>

            <ImagePlaceholder
                name="KMeansSteps.png"
                description="A 4-panel step-by-step visualization of K-Means (k=3): Panel 1 - Random initial centroids placed on scattered data points. Panel 2 - Each point colored by nearest centroid. Panel 3 - Centroids move to mean of assigned points. Panel 4 - Final converged clusters with stable centroids. Use red, blue, and green for the 3 clusters. Stars for centroids. Modern clean style."
                suggestedSize="900x500"
            />

            <ExampleBox title="🔢 K-Means — Complete Worked Example (k=2)">
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

                <p><strong>Step 1: k = 2 → We want 2 clusters</strong></p>
                <p><strong>Step 2: Choose initial centroids randomly</strong></p>
                <p>Let C1 = P1(2,10) and C2 = P3(8,4)</p>

                <p><strong>Iteration 1 — Assign points to nearest centroid:</strong></p>
                <table>
                    <thead><tr><th>Point</th><th>Distance to C1(2,10)</th><th>Distance to C2(8,4)</th><th>Assigned to</th></tr></thead>
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
                    <li>New C1 = Mean of P1, P2, P4 = ((2+2+5)/3, (10+5+8)/3) = <strong>(3, 7.67)</strong></li>
                    <li>New C2 = Mean of P3, P5, P6 = ((8+7+6)/3, (4+5+4)/3) = <strong>(7, 4.33)</strong></li>
                </ul>

                <p><strong>Iteration 2 — Reassign with new centroids and repeat until convergence.</strong></p>
                <p><strong>Final Result:</strong></p>
                <ul>
                    <li><strong>Cluster 1:</strong> {"{"}P1, P2, P4{"}"} — points with smaller x values and higher y values</li>
                    <li><strong>Cluster 2:</strong> {"{"}P3, P5, P6{"}"} — points with larger x values and lower y values</li>
                </ul>
            </ExampleBox>

            <h3>Advantages and Disadvantages of K-Means</h3>

            <table>
                <thead>
                    <tr>
                        <th>Advantages ✅</th>
                        <th>Disadvantages ❌</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Simple and easy to understand</td>
                        <td>Must specify k (number of clusters) in advance</td>
                    </tr>
                    <tr>
                        <td>Fast — works well on large datasets</td>
                        <td>Results depend on initial centroid selection (may not find global optimum)</td>
                    </tr>
                    <tr>
                        <td>Works well with spherical/globular clusters</td>
                        <td>Cannot handle non-spherical clusters well</td>
                    </tr>
                    <tr>
                        <td>Easy to implement</td>
                        <td>Sensitive to outliers (one extreme value can shift centroid)</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="hierarchical-methods">Hierarchical Methods</h2>

            <p>
                Hierarchical clustering creates a <strong>tree-like structure</strong> (called a <strong>dendrogram</strong>)
                that shows how clusters are formed step by step. There are two approaches:
            </p>

            <h3>1. Agglomerative (Bottom-Up) ⬆️</h3>
            <p>
                Start with each data point as its own individual cluster. Then repeatedly <strong>merge
                the two closest clusters</strong> until only one cluster remains.
            </p>
            <ol>
                <li>Start: Each object is a separate cluster (n clusters for n objects)</li>
                <li>Find the two closest clusters and merge them</li>
                <li>Repeat step 2 until only one big cluster remains (or desired number of clusters reached)</li>
            </ol>

            <h3>2. Divisive (Top-Down) ⬇️</h3>
            <p>
                Start with all data points in <strong>one single cluster</strong>. Then repeatedly <strong>split</strong>
                the cluster into smaller clusters until each data point is its own cluster.
            </p>
            <ol>
                <li>Start: All objects in one cluster</li>
                <li>Find the cluster with the most dissimilar objects and split it</li>
                <li>Repeat until each object is its own cluster (or desired number reached)</li>
            </ol>

            <ImagePlaceholder
                name="Dendrogram.png"
                description="A dendrogram (tree diagram) showing hierarchical clustering. Bottom shows 6 individual data points (A, B, C, D, E, F). Lines show how they merge step by step: A-B merge first (most similar), then C-D, then AB merges with CD, then E merges, then F. Y-axis shows 'Distance'. Include a horizontal 'cut line' at a certain height showing how cutting at that level gives 2 or 3 clusters. Use professional blue-gray color scheme."
                suggestedSize="700x500"
            />

            <ExampleBox title="Reading a Dendrogram">
                <p>
                    A <strong>dendrogram</strong> is like a family tree for clusters:
                </p>
                <ul>
                    <li><strong>Bottom leaves:</strong> Individual data points</li>
                    <li><strong>Height of the merge:</strong> Shows how dissimilar the merged clusters were (higher = more dissimilar)</li>
                    <li><strong>Cutting the dendrogram horizontally:</strong> Gives you clusters! Cut at a low height → many small clusters. Cut at a high height → few large clusters</li>
                </ul>
            </ExampleBox>

            <h3>Distance Measures Between Clusters</h3>

            <table>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Distance Definition</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Single Linkage (MIN)</strong></td>
                        <td>Minimum distance between any two points from different clusters</td>
                        <td>Nearest neighbor approach — can create long, chain-like clusters</td>
                    </tr>
                    <tr>
                        <td><strong>Complete Linkage (MAX)</strong></td>
                        <td>Maximum distance between any two points from different clusters</td>
                        <td>Farthest neighbor — creates compact, spherical clusters</td>
                    </tr>
                    <tr>
                        <td><strong>Average Linkage</strong></td>
                        <td>Average distance between all pairs of points from different clusters</td>
                        <td>Balanced approach between single and complete linkage</td>
                    </tr>
                    <tr>
                        <td><strong>Centroid</strong></td>
                        <td>Distance between cluster centroids (means)</td>
                        <td>Uses the center point of each cluster</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="density-based">Density-Based Methods — DBSCAN</h2>

            <p>
                <strong>DBSCAN (Density-Based Spatial Clustering of Applications with Noise)</strong> is
                a powerful algorithm that finds clusters of <strong>arbitrary shape</strong> and can
                automatically detect <strong>outliers/noise</strong>. Unlike K-Means, it doesn't require
                specifying the number of clusters beforehand!
            </p>

            <h3>Key Concepts</h3>

            <ul>
                <li>
                    <strong>ε (Epsilon/Eps):</strong> The radius of the neighborhood around a point.
                    "How close must points be to be considered neighbors?"
                </li>
                <li>
                    <strong>MinPts:</strong> The minimum number of points required within ε radius
                    to form a dense region.
                </li>
            </ul>

            <h3>Types of Points in DBSCAN</h3>

            <table>
                <thead>
                    <tr>
                        <th>Point Type</th>
                        <th>Definition</th>
                        <th>Analogy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Core Point</strong></td>
                        <td>Has at least MinPts neighbors within ε distance</td>
                        <td>The popular kid with many friends nearby 🌟</td>
                    </tr>
                    <tr>
                        <td><strong>Border Point</strong></td>
                        <td>Has fewer than MinPts neighbors but is within ε of a Core Point</td>
                        <td>A friend of the popular kid — not popular themselves but part of the group 👤</td>
                    </tr>
                    <tr>
                        <td><strong>Noise Point (Outlier)</strong></td>
                        <td>Not a Core Point and not within ε of any Core Point</td>
                        <td>The loner who doesn't belong to any group 🚫</td>
                    </tr>
                </tbody>
            </table>

            <ImagePlaceholder
                name="DBSCANPointTypes.png"
                description="A 2D scatter plot illustrating DBSCAN point types: Several large red dots labeled 'Core Points' (with circles of radius ε around them containing many points), yellow dots labeled 'Border Points' (within ε of a core point but having few neighbors), and gray/black dots labeled 'Noise Points' (isolated, far from any core point). Include ε radius circles drawn around core points. Clean, educational diagram style."
                suggestedSize="700x450"
            />

            <h3>How DBSCAN Works</h3>

            <ol>
                <li>Pick any unvisited point from the dataset</li>
                <li>Find all points within ε distance (its ε-neighborhood)</li>
                <li>If it has ≥ MinPts neighbors → It's a <strong>Core Point</strong>. Start a new cluster and add all its neighbors</li>
                <li>Recursively check each neighbor: if they're also Core Points, add their neighbors too (density-reachability)</li>
                <li>If a point has &lt; MinPts neighbors and isn't near any Core Point → It's <strong>Noise</strong></li>
                <li>Continue until all points are visited</li>
            </ol>

            <h3>Advantages and Disadvantages of DBSCAN</h3>

            <table>
                <thead>
                    <tr>
                        <th>Advantages ✅</th>
                        <th>Disadvantages ❌</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Discovers clusters of arbitrary shape (not just spherical!)</td>
                        <td>Cannot handle datasets with varying densities well</td>
                    </tr>
                    <tr>
                        <td>Automatically identifies outliers/noise</td>
                        <td>Choosing the right ε and MinPts values can be tricky</td>
                    </tr>
                    <tr>
                        <td>No need to specify number of clusters (k) in advance</td>
                        <td>Not suitable for high-dimensional data</td>
                    </tr>
                    <tr>
                        <td>Robust to noise</td>
                        <td>Sensitive to the ε parameter</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="grid-based">Grid-Based Methods</h2>

            <p>
                Grid-Based methods take a fundamentally different approach. Instead of focusing on
                individual data points, they <strong>divide the data space into a grid</strong> (like
                placing a chess board over the data) and then perform clustering on the grid cells.
            </p>

            <h3>How Grid-Based Methods Work</h3>

            <ol>
                <li><strong>Divide:</strong> Partition the data space into a finite number of cells (creating a grid structure)</li>
                <li><strong>Calculate:</strong> Compute summary statistics for each cell (count, mean, etc.)</li>
                <li><strong>Cluster:</strong> Identify and merge adjacent dense cells to form clusters</li>
            </ol>

            <h3>Key Advantages</h3>
            <ul>
                <li><strong>Very fast:</strong> Processing time depends on the grid size, not the number of data points</li>
                <li><strong>Scalable:</strong> Works well with very large datasets</li>
                <li><strong>Efficient:</strong> The grid can be built in a single scan of the data</li>
            </ul>

            <h3>Examples of Grid-Based Algorithms</h3>
            <table>
                <thead>
                    <tr>
                        <th>Algorithm</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>STING</strong></td>
                        <td>STatistical INformation Grid — uses hierarchical grid structure with statistical parameters</td>
                    </tr>
                    <tr>
                        <td><strong>CLIQUE</strong></td>
                        <td>CLustering In QUEst — combines grid-based and density-based approaches for high-dimensional data</td>
                    </tr>
                    <tr>
                        <td><strong>WaveCluster</strong></td>
                        <td>Uses wavelet transform on the grid for multi-resolution clustering</td>
                    </tr>
                </tbody>
            </table>

            <ImagePlaceholder
                name="GridBasedClustering.png"
                description="A 2D grid overlaid on scattered data points. The grid divides the space into rectangular cells. Dense cells (with many points) are highlighted in blue, sparse cells in white/gray. Adjacent dense cells are merged to form clusters, shown with dashed outlines around groups of dense cells. A few isolated points in sparse cells are marked as noise. Clean, geometric style."
                suggestedSize="700x450"
            />

            <h2 id="comparison">Comparison of All Clustering Methods</h2>

            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>K-Means</th>
                        <th>Hierarchical</th>
                        <th>DBSCAN</th>
                        <th>Grid-Based</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Type</strong></td>
                        <td>Partitioning</td>
                        <td>Tree building</td>
                        <td>Density-based</td>
                        <td>Grid cells</td>
                    </tr>
                    <tr>
                        <td><strong>Need to specify k?</strong></td>
                        <td>Yes</td>
                        <td>No (cut dendrogram)</td>
                        <td>No</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td><strong>Cluster Shape</strong></td>
                        <td>Spherical only</td>
                        <td>Any shape</td>
                        <td>Any shape</td>
                        <td>Any shape</td>
                    </tr>
                    <tr>
                        <td><strong>Handles Noise?</strong></td>
                        <td>No (sensitive)</td>
                        <td>No</td>
                        <td>Yes ✅</td>
                        <td>Somewhat</td>
                    </tr>
                    <tr>
                        <td><strong>Speed</strong></td>
                        <td>Fast</td>
                        <td>Slow for large data</td>
                        <td>Moderate</td>
                        <td>Very Fast</td>
                    </tr>
                    <tr>
                        <td><strong>Scalability</strong></td>
                        <td>Good</td>
                        <td>Poor</td>
                        <td>Good</td>
                        <td>Excellent</td>
                    </tr>
                    <tr>
                        <td><strong>Best For</strong></td>
                        <td>Well-separated, spherical clusters</td>
                        <td>Understanding data hierarchy</td>
                        <td>Arbitrary shaped clusters with noise</td>
                        <td>Very large datasets</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="evaluation">Evaluation of Clustering</h2>

            <p>
                How do we know if our clustering result is <strong>good</strong>? Since clustering is
                unsupervised (no labels to compare against), evaluation is quite challenging.
                Here are the main approaches:
            </p>

            <h3>1. Internal Evaluation (No external labels needed)</h3>
            <p>
                These measures evaluate clustering quality based on the data itself:
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Measure</th>
                        <th>What It Checks</th>
                        <th>Goal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Cohesion (Compactness)</strong></td>
                        <td>How close are objects within the same cluster?</td>
                        <td>Minimize intra-cluster distance</td>
                    </tr>
                    <tr>
                        <td><strong>Separation</strong></td>
                        <td>How far apart are different clusters?</td>
                        <td>Maximize inter-cluster distance</td>
                    </tr>
                    <tr>
                        <td><strong>Silhouette Coefficient</strong></td>
                        <td>Combines cohesion and separation into a single score (-1 to +1)</td>
                        <td>Higher is better; +1 = perfect, 0 = overlapping, -1 = wrong cluster</td>
                    </tr>
                </tbody>
            </table>

            <InfoBox type="highlight" title="Silhouette Coefficient — Easy Understanding">
                <p>
                    For each data point, the Silhouette score answers: <em>"Is this point in the right
                    cluster or would it be better in a neighboring cluster?"</em>
                </p>
                <ul>
                    <li><strong>Score close to +1:</strong> Well-matched to its own cluster, poorly matched to neighboring clusters ✅</li>
                    <li><strong>Score close to 0:</strong> On the border between two clusters 🤷</li>
                    <li><strong>Score close to -1:</strong> Probably assigned to the wrong cluster ❌</li>
                </ul>
            </InfoBox>

            <h3>2. External Evaluation (When true labels are available)</h3>
            <p>
                If we happen to know the true class labels (ground truth), we can compare our clustering
                result against them:
            </p>

            <ul>
                <li><strong>Purity:</strong> The fraction of correctly assigned objects in each cluster</li>
                <li><strong>Rand Index:</strong> Measures agreement between clustering and true labels</li>
                <li><strong>Jaccard Coefficient:</strong> Measures overlap between clusters and true groups</li>
                <li><strong>F-measure:</strong> Harmonic mean of precision and recall applied to clustering</li>
            </ul>

            <h3>3. Relative Evaluation</h3>
            <p>
                Compare different clustering results (different algorithms or different values of k)
                to determine which gives the best result. Common approach: <strong>Elbow Method</strong> for
                choosing optimal k in K-Means.
            </p>

            <ExampleBox title="📊 The Elbow Method for Choosing k">
                <p>
                    Run K-Means with different values of k (k=1, 2, 3, 4, ... 10). For each k, calculate
                    the total <strong>Within-Cluster Sum of Squares (WCSS)</strong>. Plot k vs WCSS.
                </p>
                <p>
                    The graph typically shows a sharp decrease and then levels off — forming an "elbow".
                    The k value at the elbow point is usually the <strong>optimal number of clusters</strong>.
                </p>
                <p>
                    <strong>Example:</strong> If the WCSS drops significantly from k=1 to k=3, then drops only
                    slightly from k=3 to k=10, the elbow is at k=3, suggesting 3 clusters is optimal.
                </p>
            </ExampleBox>

            <ImagePlaceholder
                name="ElbowMethod.png"
                description="A line chart showing the Elbow Method. X-axis: 'Number of Clusters (k)' from 1 to 10. Y-axis: 'WCSS (Within-Cluster Sum of Squares)'. The line drops sharply from k=1 to k=3, then curves and flattens from k=3 onwards, forming an 'elbow' shape. A red circle highlights the elbow point at k=3 with label 'Optimal k=3'. Clean chart with gridlines."
                suggestedSize="700x400"
            />

            <h2 id="summary">Summary</h2>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Clustering is unsupervised learning — discovers natural groups without predefined labels",
                    "K-Means: Partition-based, needs k specified, works best with spherical clusters",
                    "K-Means iterates: Assign to nearest centroid → Update centroids → Repeat until convergence",
                    "Hierarchical: Builds a dendrogram — Agglomerative (bottom-up merge) or Divisive (top-down split)",
                    "DBSCAN: Density-based, finds arbitrary-shaped clusters, automatically detects outliers/noise",
                    "DBSCAN uses ε (neighborhood radius) and MinPts to classify Core, Border, and Noise points",
                    "Grid-Based: Divides space into grid cells then merges dense cells — very fast",
                    "Evaluation: Silhouette Coefficient (internal), Purity/Rand Index (external), Elbow Method (relative)"
                ]}
            />

            <InfoBox type="highlight" title="🎉 Congratulations! Subject Complete!">
                <p>
                    You have now covered the complete <strong>Fundamentals of Data Science</strong> syllabus!
                    From Data Mining and Data Warehousing to Frequent Patterns, Classification, and Clustering —
                    you now have a solid foundation. Remember: practice with examples, draw diagrams in exams,
                    and always explain with real-world analogies. Best of luck with your exams! 🎯📚
                </p>
            </InfoBox>
        </div>
    );
}
