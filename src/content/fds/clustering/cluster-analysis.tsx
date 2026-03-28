import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function ClusterAnalysis() {
    return (
        <div>
            <p>
                Imagine you're a new librarian with thousands of unsorted books dumped on the floor.
                Nobody told you the categories — you have to <strong>group similar books together on
                your own</strong>. Cookbooks together, novels together, science textbooks together.
                That's exactly what <strong>Cluster Analysis</strong> does with data! Unlike Classification
                (where categories are known), Clustering <strong>discovers natural groups</strong> without
                any predefined labels.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "What is Cluster Analysis?",
                    "Clustering vs Classification — the key difference",
                    "Types of Clustering Methods",
                    "Applications of Clustering in the real world"
                ]}
            />

            <h2 id="what-is-clustering">What is Cluster Analysis?</h2>

            <p>
                <strong>Cluster Analysis (Clustering)</strong> is an <strong>unsupervised learning</strong>
                technique that groups data objects into <strong>clusters</strong> such that:
            </p>
            <ul>
                <li>Objects <strong>within the same cluster</strong> are highly similar (high intra-cluster similarity)</li>
                <li>Objects <strong>in different clusters</strong> are very different (low inter-cluster similarity)</li>
            </ul>

            <blockquote>
                "Clustering is organizing objects into groups whose members are similar in some way."
            </blockquote>

            <ImagePlaceholder
                name="ClusteringConcept.png"
                description="Left side: scattered mixed-up colored dots (unclustered). Right side: same dots neatly grouped into 3 clusters with dashed circles. Arrow labeled 'Clustering Algorithm' connects left to right."
                suggestedSize="850x350"
            />

            <h2 id="vs-classification">Clustering vs Classification</h2>

            <table>
                <thead><tr><th>Aspect</th><th>Classification</th><th>Clustering</th></tr></thead>
                <tbody>
                    <tr><td><strong>Type</strong></td><td>Supervised Learning</td><td>Unsupervised Learning</td></tr>
                    <tr><td><strong>Labels</strong></td><td>Predefined class labels are known</td><td>No predefined labels — groups discovered automatically</td></tr>
                    <tr><td><strong>Training Data</strong></td><td>Requires labeled training data</td><td>Works with unlabeled data</td></tr>
                    <tr><td><strong>Goal</strong></td><td>Predict the class of new data</td><td>Discover natural groups in data</td></tr>
                    <tr><td><strong>Example</strong></td><td>"Is this Spam or Not Spam?" (labels given)</td><td>"Group similar customers together" (discover groups)</td></tr>
                </tbody>
            </table>

            <h2 id="types">Types of Clustering Methods</h2>

            <table>
                <thead><tr><th>Type</th><th>Method</th><th>Key Algorithms</th></tr></thead>
                <tbody>
                    <tr><td><strong>Partitioning</strong></td><td>Divide data into k non-overlapping groups</td><td>K-Means, K-Medoids</td></tr>
                    <tr><td><strong>Hierarchical</strong></td><td>Build a tree (dendrogram) of clusters</td><td>Agglomerative, Divisive</td></tr>
                    <tr><td><strong>Density-Based</strong></td><td>Find clusters based on density of points</td><td>DBSCAN, OPTICS</td></tr>
                    <tr><td><strong>Grid-Based</strong></td><td>Divide space into grid cells</td><td>STING, CLIQUE</td></tr>
                </tbody>
            </table>

            <h2 id="applications">Applications of Clustering</h2>
            <ul>
                <li><strong>Customer Segmentation:</strong> Grouping customers by buying behavior for targeted marketing</li>
                <li><strong>Image Segmentation:</strong> Dividing images into meaningful regions</li>
                <li><strong>Document Clustering:</strong> Similar news articles or web pages grouped together</li>
                <li><strong>Anomaly Detection:</strong> Points that don't belong to any cluster might be fraud/outliers</li>
                <li><strong>Biology:</strong> Grouping plants/animals by genetic similarity</li>
                <li><strong>Social Network:</strong> Finding communities in social media networks</li>
            </ul>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Clustering is unsupervised — discovers natural groups without predefined labels",
                    "High intra-cluster similarity + Low inter-cluster similarity = good clustering",
                    "4 main types: Partitioning, Hierarchical, Density-Based, Grid-Based",
                    "Classification needs labels; Clustering discovers groups on its own"
                ]}
            />
        </div>
    );
}
