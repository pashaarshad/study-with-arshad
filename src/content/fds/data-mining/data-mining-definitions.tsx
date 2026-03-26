import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function DataMiningDefinitions() {
    return (
        <div>
            <p>
                Understanding Data Mining starts with its <strong>formal definitions</strong>. Different
                authors and textbooks define Data Mining in slightly different ways, but the core idea
                remains the same — <em>extracting useful knowledge from large datasets</em>.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "Multiple formal definitions of Data Mining",
                    "Key terms: patterns, knowledge, data repository",
                    "Alternative names for Data Mining",
                    "The relationship between Data Mining and other fields"
                ]}
            />

            <h2 id="formal-definitions">Formal Definitions of Data Mining</h2>

            <InfoBox type="note" title="Definition 1 — Simple Definition">
                <p>
                    Data Mining is the process of <strong>finding patterns and knowledge</strong> from large
                    amounts of data. The data sources can include databases, data warehouses, the web,
                    or other data repositories.
                </p>
            </InfoBox>

            <InfoBox type="note" title="Definition 2 — Jiawei Han (Textbook Author)">
                <p>
                    "Data Mining is the process of discovering interesting patterns and knowledge from
                    large amounts of data. The data sources can include databases, data warehouses,
                    the Web, other information repositories, or data that are streamed into the system dynamically."
                </p>
            </InfoBox>

            <InfoBox type="note" title="Definition 3 — Technical Definition">
                <p>
                    Data Mining refers to extracting or "mining" knowledge from large amounts of data.
                    It is also known as <strong>Knowledge Discovery from Data (KDD)</strong>, although technically
                    Data Mining is just one step within the larger KDD process.
                </p>
            </InfoBox>

            <InfoBox type="note" title="Definition 4 — Ian H. Witten">
                <p>
                    "Data Mining is the extraction of implicit, previously unknown, and potentially useful
                    information from data."
                </p>
            </InfoBox>

            <h2 id="key-terms">Key Terms in Data Mining</h2>

            <table>
                <thead>
                    <tr>
                        <th>Term</th>
                        <th>Meaning</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Pattern</strong></td>
                        <td>A recurring arrangement or relationship found in data</td>
                        <td>"80% of customers who buy bread also buy butter"</td>
                    </tr>
                    <tr>
                        <td><strong>Knowledge</strong></td>
                        <td>Validated, actionable patterns that can be used for decision-making</td>
                        <td>"Place bread and butter together on shelves to increase sales"</td>
                    </tr>
                    <tr>
                        <td><strong>Data Repository</strong></td>
                        <td>Any storage of data — databases, files, data warehouses, web</td>
                        <td>MySQL database, CSV files, Amazon S3 storage</td>
                    </tr>
                    <tr>
                        <td><strong>Interesting Pattern</strong></td>
                        <td>A pattern that is novel, valid, potentially useful, and understandable</td>
                        <td>"Diaper buyers on Fridays also buy beer" — surprising and useful!</td>
                    </tr>
                    <tr>
                        <td><strong>Noise</strong></td>
                        <td>Random errors or irrelevant information in data</td>
                        <td>A temperature sensor reading 500°C in a room</td>
                    </tr>
                    <tr>
                        <td><strong>Outlier</strong></td>
                        <td>A data point significantly different from others</td>
                        <td>One employee earning ₹50 Lakh when average is ₹5 Lakh</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="alternative-names">Alternative Names for Data Mining</h2>

            <p>
                Data Mining is known by many names in different contexts:
            </p>

            <ul>
                <li><strong>Knowledge Discovery in Databases (KDD)</strong> — The most common alternative (though technically KDD is the broader process)</li>
                <li><strong>Knowledge Extraction</strong></li>
                <li><strong>Data/Pattern Analysis</strong></li>
                <li><strong>Data Archaeology</strong></li>
                <li><strong>Data Dredging</strong></li>
                <li><strong>Information Harvesting</strong></li>
                <li><strong>Business Intelligence</strong> (in the corporate world)</li>
            </ul>

            <h2 id="interdisciplinary">Data Mining: An Interdisciplinary Field</h2>

            <p>
                Data Mining is not just one subject — it draws knowledge from <strong>many fields</strong>,
                making it a truly interdisciplinary domain:
            </p>

            <ImagePlaceholder
                name="DataMiningInterdisciplinary.png"
                description="A hub-and-spoke diagram showing Data Mining at the center, with spokes connecting to: Statistics, Machine Learning, Database Systems, Pattern Recognition, Artificial Intelligence, Information Retrieval, Visualization, and High-Performance Computing. Each spoke has a small icon. Use a modern radial design with gradient colors."
                suggestedSize="700x500"
            />

            <table>
                <thead>
                    <tr>
                        <th>Contributing Field</th>
                        <th>What It Contributes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Statistics</strong></td>
                        <td>Probability, hypothesis testing, distributions, sampling</td>
                    </tr>
                    <tr>
                        <td><strong>Machine Learning</strong></td>
                        <td>Classification, clustering, neural networks, learning algorithms</td>
                    </tr>
                    <tr>
                        <td><strong>Database Systems</strong></td>
                        <td>Efficient storage, indexing, query processing</td>
                    </tr>
                    <tr>
                        <td><strong>Artificial Intelligence</strong></td>
                        <td>Intelligent search, optimization, reasoning</td>
                    </tr>
                    <tr>
                        <td><strong>Visualization</strong></td>
                        <td>Charts, graphs, dashboards for presenting results</td>
                    </tr>
                    <tr>
                        <td><strong>High-Performance Computing</strong></td>
                        <td>Parallel processing, distributed computing for large datasets</td>
                    </tr>
                </tbody>
            </table>

            <InfoBox type="tip" title="Exam Tip ⭐">
                <p>
                    When asked to <strong>"Define Data Mining"</strong> in exams, always write at least
                    2 definitions + mention that it is an interdisciplinary field combining statistics,
                    machine learning, and database systems. Drawing the interdisciplinary diagram earns
                    extra marks!
                </p>
            </InfoBox>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Data Mining = Extracting hidden, useful patterns from large data",
                    "Patterns must be: novel, valid, potentially useful, and understandable",
                    "Also known as KDD, Knowledge Extraction, Data Pattern Analysis",
                    "It's an interdisciplinary field combining statistics, ML, databases, AI, and more"
                ]}
            />
        </div>
    );
}
