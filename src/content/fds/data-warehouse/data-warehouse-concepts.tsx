// src/content/fds/data-warehouse/data-warehouse-concepts.tsx
import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder } from '@/components/ContentDisplay';

export default function DataWarehouseConcepts() {
    return (
        <div>
            <p>
                Imagine you own a huge company with branches in 50 cities. Each branch stores its data in
                its own database — sales in one, HR in another, inventory in a third. When the CEO asks
                <em>"What was our total revenue last year, state-wise?"</em>, nobody can answer quickly
                because data is scattered everywhere. A <strong>Data Warehouse</strong> solves this problem
                by bringing all the data together into <strong>one single, organized treasure chest</strong> for
                analysis and decision-making.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "What is a Data Warehouse — Definition and Characteristics",
                    "Data Warehouse Architecture and Components",
                    "Multidimensional Data Model (Star Schema, Snowflake Schema)",
                    "Data Cleaning — Handling missing, noisy, and inconsistent data",
                    "Data Integration and Transformation",
                    "Data Reduction and Discretization",
                    "OLAP Operations: Roll-up, Drill-down, Slice, Dice, Pivot",
                    "ROLAP vs MOLAP vs HOLAP"
                ]}
            />

            <h2 id="what-is-dw">What is a Data Warehouse?</h2>

            <p>
                A <strong>Data Warehouse (DW)</strong> is a centralized repository that stores integrated
                data from multiple sources. It is specifically designed for <strong>query and analysis</strong>,
                not for daily transactions.
            </p>

            <blockquote>
                "A Data Warehouse is a subject-oriented, integrated, time-variant, and non-volatile
                collection of data in support of management's decision-making process."
                <br /><br />
                — William H. Inmon, Father of Data Warehousing
            </blockquote>

            <h3>The 4 Key Characteristics of a Data Warehouse</h3>

            <table>
                <thead>
                    <tr>
                        <th>Characteristic</th>
                        <th>Meaning</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Subject-Oriented</strong></td>
                        <td>Organized around major subjects (Sales, Customer, Product) rather than applications</td>
                        <td>A retail DW focuses on "Sales", "Products", "Customers" — not on "Login System" or "Email Server"</td>
                    </tr>
                    <tr>
                        <td><strong>Integrated</strong></td>
                        <td>Data from multiple sources is cleaned, transformed, and unified into a consistent format</td>
                        <td>"Male/Female" from one source and "M/F" from another are standardized to "Male/Female"</td>
                    </tr>
                    <tr>
                        <td><strong>Time-Variant</strong></td>
                        <td>Data is stored with time stamps; it captures historical data over months and years</td>
                        <td>You can compare sales of Q1 2024 with Q1 2025 — operational databases usually only store current data</td>
                    </tr>
                    <tr>
                        <td><strong>Non-Volatile</strong></td>
                        <td>Once data enters the warehouse, it is NOT updated or deleted — it's permanent and read-only</td>
                        <td>If a customer's old address was "Mumbai", even after they move to "Delhi", the warehouse keeps both records for historical analysis</td>
                    </tr>
                </tbody>
            </table>

            <ImagePlaceholder
                name="DataWarehouseCharacteristics.png"
                description="A four-quadrant infographic showing the 4 characteristics of a Data Warehouse: Subject-Oriented (book icon), Integrated (puzzle pieces joining together), Time-Variant (clock with timeline), Non-Volatile (lock/shield icon). Each quadrant has the characteristic name, a one-liner explanation, and a small relevant icon. Use a clean corporate blue and white color scheme."
                suggestedSize="800x500"
            />

            <h3>Data Warehouse vs Operational Database</h3>

            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Operational Database (OLTP)</th>
                        <th>Data Warehouse (OLAP)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Purpose</strong></td>
                        <td>Day-to-day transactions (insert, update, delete)</td>
                        <td>Analysis and decision-making (read-only queries)</td>
                    </tr>
                    <tr>
                        <td><strong>Data</strong></td>
                        <td>Current data only</td>
                        <td>Historical data (years of records)</td>
                    </tr>
                    <tr>
                        <td><strong>Users</strong></td>
                        <td>Clerks, cashiers, operators</td>
                        <td>Managers, analysts, executives</td>
                    </tr>
                    <tr>
                        <td><strong>Queries</strong></td>
                        <td>Simple, short queries ("What is this product's price?")</td>
                        <td>Complex analytical queries ("What was the trend of sales over 5 years?")</td>
                    </tr>
                    <tr>
                        <td><strong>Size</strong></td>
                        <td>Megabytes to Gigabytes</td>
                        <td>Gigabytes to Terabytes (much larger!)</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="dw-architecture">Data Warehouse Architecture</h2>

            <p>
                A Data Warehouse has a structured architecture with multiple layers. The key component
                connecting everything is the <strong>ETL process</strong>.
            </p>

            <h3>ETL Process — Extract, Transform, Load</h3>

            <p>
                ETL is the backbone of any Data Warehouse. It's the process of moving data from
                source systems into the warehouse:
            </p>

            <ol>
                <li>
                    <strong>Extract:</strong> Pull raw data from various sources (databases, files, APIs, spreadsheets)
                </li>
                <li>
                    <strong>Transform:</strong> Clean, standardize, and convert the data into a unified format
                    (handle missing values, resolve conflicts, apply business rules)
                </li>
                <li>
                    <strong>Load:</strong> Store the cleaned, transformed data into the Data Warehouse
                </li>
            </ol>

            <ImagePlaceholder
                name="ETLProcess.png"
                description="A horizontal flow diagram showing the ETL (Extract, Transform, Load) process. Left side shows multiple data sources (MySQL database icon, Excel file icon, API icon, CSV file icon) with arrows pointing to 'EXTRACT' (funnel icon), then to 'TRANSFORM' (gear/wrench icon showing cleaning and formatting), then to 'LOAD' (arrow pointing into a Data Warehouse cylinder). Use a professional blue-green color palette."
                suggestedSize="900x350"
            />

            <ExampleBox title="ETL in Action: University Example">
                <p>
                    A university wants to build a Data Warehouse to analyze student performance:
                </p>
                <ul>
                    <li><strong>Extract:</strong> Pull data from Admission System (MySQL), Exam System (Oracle), Library System (PostgreSQL), and Fee System (Excel files)</li>
                    <li><strong>Transform:</strong> Standardize student IDs across systems, convert date formats, handle missing marks as "Absent", merge duplicate student records</li>
                    <li><strong>Load:</strong> Store the unified data into the Data Warehouse for analysis like "Which department has the highest pass percentage over 5 years?"</li>
                </ul>
            </ExampleBox>

            <h2 id="multidimensional-model">Multidimensional Data Model</h2>

            <p>
                In a Data Warehouse, data is organized using a <strong>Multidimensional Model</strong>
                — think of it like a <strong>Rubik's Cube</strong> where you can look at data from different
                angles (dimensions) like Time, Location, Product, etc.
            </p>

            <h3>Key Concepts</h3>

            <ul>
                <li>
                    <strong>Facts:</strong> The measurable quantities you want to analyze (e.g., Sales Amount, Quantity Sold, Profit)
                </li>
                <li>
                    <strong>Dimensions:</strong> The perspectives from which you want to view the facts (e.g., Time, Location, Product, Customer)
                </li>
                <li>
                    <strong>Data Cube:</strong> A multi-dimensional array of values. A 3D cube might have dimensions: Time × Location × Product, with the "fact" being Sales Amount
                </li>
            </ul>

            <ExampleBox title="Understanding the Data Cube">
                <p>
                    Imagine you run a chain of electronics stores across India. You want to analyze your
                    <strong> TV sales</strong>:
                </p>
                <ul>
                    <li><strong>Dimension 1 — Time:</strong> Q1 2024, Q2 2024, Q3 2024, Q4 2024</li>
                    <li><strong>Dimension 2 — Location:</strong> Mumbai, Delhi, Bangalore, Chennai</li>
                    <li><strong>Dimension 3 — Product:</strong> Samsung, LG, Sony, Xiaomi</li>
                    <li><strong>Fact (Measure):</strong> Total Sales Amount (₹)</li>
                </ul>
                <p>
                    With this cube, you can instantly answer: <em>"How much did Samsung TVs sell in
                    Mumbai during Q3 2024?"</em> — just look at the intersection of those three dimensions!
                </p>
            </ExampleBox>

            <ImagePlaceholder
                name="DataCube3D.png"
                description="A 3D cube visualization showing a Data Cube with three dimensions: Time (vertical axis showing Q1-Q4), Location (horizontal axis showing Mumbai, Delhi, Bangalore), and Product (depth axis showing Samsung, LG, Sony). Each small cell inside the cube contains a sales value. The cube should look semi-transparent with labeled axes. Use blue, green, and purple for the three axes."
                suggestedSize="700x500"
            />

            <h3>Schema Designs</h3>

            <h4>1. Star Schema ⭐</h4>
            <p>
                The most common and simplest schema design. It has one <strong>central Fact table</strong>
                surrounded by <strong>Dimension tables</strong> — resembling a star shape.
            </p>
            <ul>
                <li><strong>Fact Table:</strong> Contains the measurable data (Sales_Amount, Quantity) and foreign keys to dimensions</li>
                <li><strong>Dimension Tables:</strong> Contain descriptive details (Product_Name, City_Name, Date)</li>
                <li><strong>Advantage:</strong> Simple design, easy to understand, fast queries</li>
                <li><strong>Disadvantage:</strong> Dimension tables may have redundant (repeated) data</li>
            </ul>

            <h4>2. Snowflake Schema ❄️</h4>
            <p>
                A more normalized version of the Star Schema where dimension tables are further
                broken into sub-dimension tables — resembling a snowflake.
            </p>
            <ul>
                <li><strong>Fact Table:</strong> Same as Star Schema</li>
                <li><strong>Dimension Tables:</strong> Further normalized into sub-tables (e.g., City → State → Country)</li>
                <li><strong>Advantage:</strong> Less data redundancy, saves storage space</li>
                <li><strong>Disadvantage:</strong> More complex queries, slower performance due to more joins</li>
            </ul>

            <ImagePlaceholder
                name="StarVsSnowflakeSchema.png"
                description="A side-by-side comparison of Star Schema (left) and Snowflake Schema (right). Star Schema shows a central 'Sales Fact' table connected to 4 dimension tables (Time, Product, Store, Customer) in a star pattern. Snowflake Schema shows the same fact table but with dimension tables further split (e.g., Store → City → State → Country). Use blue for fact tables and green for dimension tables."
                suggestedSize="900x450"
            />

            <h2 id="data-cleaning">Data Cleaning</h2>

            <p>
                Real-world data is <strong>dirty</strong>! It contains errors, missing values, duplicates,
                and inconsistencies. Data Cleaning (also called Data Scrubbing) is the process of
                detecting and correcting these issues.
            </p>

            <h3>Types of Dirty Data and How to Clean Them</h3>

            <h4>1. Missing Values</h4>
            <p>When some attributes have no value recorded.</p>
            <table>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Description</th>
                        <th>When to Use</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Ignore the record</strong></td>
                        <td>Simply delete records with missing values</td>
                        <td>When very few records are affected</td>
                    </tr>
                    <tr>
                        <td><strong>Fill manually</strong></td>
                        <td>A human expert fills in the correct value</td>
                        <td>Small datasets, critical fields</td>
                    </tr>
                    <tr>
                        <td><strong>Use a default value</strong></td>
                        <td>Replace missing values with a constant like "Unknown" or 0</td>
                        <td>Non-critical fields</td>
                    </tr>
                    <tr>
                        <td><strong>Use the mean/median</strong></td>
                        <td>Replace with the average (for numerical data) or mode (for categorical data)</td>
                        <td>Common approach for numerical attributes</td>
                    </tr>
                    <tr>
                        <td><strong>Use the most probable value</strong></td>
                        <td>Use prediction (regression, Bayesian, etc.) to estimate the missing value</td>
                        <td>When accuracy is critical</td>
                    </tr>
                </tbody>
            </table>

            <h4>2. Noisy Data</h4>
            <p>
                Noise is random error or variance in a measured variable. It's data that doesn't make sense.
            </p>
            <ul>
                <li><strong>Binning:</strong> Sort data into "bins" (groups) and smooth by replacing each value with the bin mean or median</li>
                <li><strong>Regression:</strong> Fit data to a smooth function (e.g., a straight line) and use the predicted values</li>
                <li><strong>Clustering:</strong> Group similar values and treat outliers as noise</li>
            </ul>

            <h4>3. Inconsistent Data</h4>
            <p>Same information stored in different formats.</p>
            <ExampleBox title="Examples of Inconsistent Data">
                <ul>
                    <li>"Bangalore" vs "Bengaluru" vs "BLR" → Standardize to "Bengaluru"</li>
                    <li>"01/03/2024" (DD/MM) vs "03/01/2024" (MM/DD) → Use a standard date format</li>
                    <li>"₹5,00,000" vs "500000" vs "5 Lakh" → Standardize to numeric format</li>
                    <li>Gender stored as "Male", "M", "1", "male" → Standardize to "Male"</li>
                </ul>
            </ExampleBox>

            <h2 id="data-integration">Data Integration and Transformation</h2>

            <h3>Data Integration</h3>
            <p>
                Combining data from multiple sources into a <strong>unified, consistent store</strong>.
                Challenges include:
            </p>
            <ul>
                <li><strong>Schema Integration:</strong> Different databases use different names for the same thing (e.g., "Customer_ID" vs "Cust_No" vs "client_id")</li>
                <li><strong>Entity Identification:</strong> Recognizing that "John D. Smith" and "J.D. Smith" are the same person</li>
                <li><strong>Detecting Redundancy:</strong> Finding and removing duplicate attributes stored across multiple databases</li>
                <li><strong>Handling Conflicts:</strong> Resolving different units (km vs miles), currencies (₹ vs $), or date formats</li>
            </ul>

            <h3>Data Transformation</h3>
            <p>
                Converting data into a form suitable for mining. Key techniques include:
            </p>
            <ul>
                <li>
                    <strong>Normalization:</strong> Scaling data to a range [0, 1] or [-1, 1].
                    <em> Example: Salary (₹10,000 to ₹10,00,000) normalized to (0.01 to 1.0)</em>
                </li>
                <li>
                    <strong>Aggregation:</strong> Summarizing data. <em>Example: Daily sales → Monthly totals</em>
                </li>
                <li>
                    <strong>Generalization:</strong> Replacing low-level data with higher-level concepts.
                    <em> Example: "Age 23" → "Young Adult" category</em>
                </li>
                <li>
                    <strong>Attribute Construction:</strong> Creating new attributes from existing ones.
                    <em> Example: Creating "BMI" from Height and Weight</em>
                </li>
            </ul>

            <h2 id="data-reduction">Data Reduction and Discretization</h2>

            <h3>Data Reduction</h3>
            <p>
                Real datasets can have millions of rows and thousands of columns. Data Reduction
                produces a smaller representation of the dataset that still gives similar analytical results.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Technique</th>
                        <th>What It Does</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Dimensionality Reduction</strong></td>
                        <td>Reduces the number of attributes (columns)</td>
                        <td>From 100 features, select only the 10 most important ones using PCA</td>
                    </tr>
                    <tr>
                        <td><strong>Numerosity Reduction</strong></td>
                        <td>Reduces the number of data points (rows)</td>
                        <td>Use a mathematical model to represent the data instead of storing all points</td>
                    </tr>
                    <tr>
                        <td><strong>Data Compression</strong></td>
                        <td>Compresses the data to use less storage</td>
                        <td>Wavelet transforms, encoding techniques</td>
                    </tr>
                </tbody>
            </table>

            <h3>Discretization</h3>
            <p>
                Converting continuous values into discrete categories (intervals/labels). This simplifies
                data and makes it suitable for many mining algorithms.
            </p>

            <ExampleBox title="Discretization Example">
                <table>
                    <thead>
                        <tr>
                            <th>Continuous Value (Age)</th>
                            <th>Discretized Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>0 – 12</td><td>Child</td></tr>
                        <tr><td>13 – 19</td><td>Teenager</td></tr>
                        <tr><td>20 – 35</td><td>Young Adult</td></tr>
                        <tr><td>36 – 55</td><td>Middle-Aged</td></tr>
                        <tr><td>56+</td><td>Senior</td></tr>
                    </tbody>
                </table>
            </ExampleBox>

            <h2 id="olap">OLAP Operations</h2>

            <p>
                <strong>OLAP (Online Analytical Processing)</strong> allows users to interactively analyze
                multidimensional data from multiple perspectives. Think of it as a tool that lets you
                "play" with the Data Cube — rotating it, zooming in, zooming out, and slicing it
                to see data from different angles.
            </p>

            <h3>The 5 Key OLAP Operations</h3>

            <h4>1. Roll-Up (Drill-Up) ⬆️</h4>
            <p>
                <strong>Aggregating</strong> data by climbing up a concept hierarchy or reducing a dimension.
                It summarizes data at a higher level of abstraction.
            </p>
            <ExampleBox title="Roll-Up Example">
                <p>
                    <strong>Before Roll-Up:</strong> Sales data for individual cities (Mumbai, Pune, Nagpur)<br />
                    <strong>After Roll-Up:</strong> Sales data aggregated at State level (Maharashtra = Mumbai + Pune + Nagpur)
                </p>
                <p>
                    Another example: Daily sales → Monthly sales → Quarterly sales → Yearly sales
                </p>
            </ExampleBox>

            <h4>2. Drill-Down ⬇️</h4>
            <p>
                The <strong>reverse of Roll-Up</strong>. It breaks summarized data into more detailed data
                by navigating down a hierarchy.
            </p>
            <ExampleBox title="Drill-Down Example">
                <p>
                    <strong>Before Drill-Down:</strong> Total sales for India = ₹50 Crore<br />
                    <strong>After Drill-Down:</strong> Sales broken down by state → Maharashtra: ₹15 Cr, Karnataka: ₹12 Cr, Tamil Nadu: ₹10 Cr...
                </p>
                <p>
                    Go even deeper: Maharashtra → Mumbai: ₹8 Cr, Pune: ₹4 Cr, Nagpur: ₹3 Cr
                </p>
            </ExampleBox>

            <h4>3. Slice 🔪</h4>
            <p>
                Selecting a <strong>single value</strong> for one dimension, resulting in a sub-cube
                (essentially a 2D "slice" of the 3D cube).
            </p>
            <ExampleBox title="Slice Example">
                <p>
                    From a 3D cube (Time × Location × Product):<br />
                    <strong>Slice on Time = "Q3 2024"</strong> → You get a 2D table showing Sales for all
                    Locations × Products, but only for Q3 2024.
                </p>
            </ExampleBox>

            <h4>4. Dice 🎲</h4>
            <p>
                Selecting <strong>multiple values</strong> for two or more dimensions, resulting in a smaller sub-cube.
            </p>
            <ExampleBox title="Dice Example">
                <p>
                    From the same 3D cube:<br />
                    <strong>Dice:</strong> Time = {"{"}"Q2 2024", "Q3 2024"{"}"}, Location = {"{"}"Mumbai", "Delhi"{"}"}, Product = {"{"}"Samsung", "LG"{"}"}<br />
                    Result: A smaller cube containing only the selected values across all three dimensions.
                </p>
            </ExampleBox>

            <h4>5. Pivot (Rotate) 🔄</h4>
            <p>
                <strong>Rotating</strong> the data cube to view it from a different perspective.
                This changes which dimensions appear as rows, columns, and pages.
            </p>
            <ExampleBox title="Pivot Example">
                <p>
                    <strong>Before Pivot:</strong> Rows = Products, Columns = Time<br />
                    <strong>After Pivot:</strong> Rows = Time, Columns = Products<br />
                    The data is the same, but the view changes — making different trends visible!
                </p>
            </ExampleBox>

            <ImagePlaceholder
                name="OLAPOperations.png"
                description="An infographic showing all 5 OLAP operations visually: Roll-Up (small cubes merging into bigger cube with arrow going up), Drill-Down (big cube splitting into smaller cubes with arrow going down), Slice (a flat plane cutting through a 3D cube), Dice (a smaller cube extracted from a larger cube), Pivot (a cube rotating with curved arrow). Each operation labeled clearly. Use a modern dark theme with neon-colored highlights."
                suggestedSize="900x500"
            />

            <h2 id="rolap-molap-holap">ROLAP vs MOLAP vs HOLAP</h2>

            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>ROLAP (Relational OLAP)</th>
                        <th>MOLAP (Multidimensional OLAP)</th>
                        <th>HOLAP (Hybrid OLAP)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Storage</strong></td>
                        <td>Uses relational databases (tables)</td>
                        <td>Uses multidimensional arrays (cubes)</td>
                        <td>Combination of both</td>
                    </tr>
                    <tr>
                        <td><strong>Performance</strong></td>
                        <td>Slower for complex queries</td>
                        <td>Faster for complex queries (pre-computed)</td>
                        <td>Balanced performance</td>
                    </tr>
                    <tr>
                        <td><strong>Data Size</strong></td>
                        <td>Handles very large datasets well</td>
                        <td>Limited by memory for very large data</td>
                        <td>Handles large data with good performance</td>
                    </tr>
                    <tr>
                        <td><strong>Use Case</strong></td>
                        <td>When data volume is very large</td>
                        <td>When fast query speed is essential</td>
                        <td>Best of both worlds approach</td>
                    </tr>
                    <tr>
                        <td><strong>Example</strong></td>
                        <td>Microsoft SQL Server Analysis Services</td>
                        <td>Oracle Essbase, IBM Cognos</td>
                        <td>SAP BW, Microsoft SSAS</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="summary">Summary</h2>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "A Data Warehouse is a centralized repository for analysis — Subject-Oriented, Integrated, Time-Variant, Non-Volatile",
                    "ETL (Extract, Transform, Load) is the process of moving data into the warehouse",
                    "Data Cubes organize data along multiple dimensions (Time, Location, Product, etc.)",
                    "Star Schema has a central fact table connected to dimension tables; Snowflake Schema normalizes dimensions further",
                    "Data Cleaning handles missing values, noisy data, and inconsistencies",
                    "Data Transformation includes normalization, aggregation, and generalization",
                    "5 OLAP Operations: Roll-Up, Drill-Down, Slice, Dice, and Pivot",
                    "ROLAP uses relational tables, MOLAP uses multidimensional arrays, HOLAP combines both"
                ]}
            />

            <InfoBox type="tip" title="What's Next?">
                <p>
                    In the next topic, we'll explore <strong>Mining Frequent Patterns</strong> — learning
                    how to discover item relationships using Market Basket Analysis, the Apriori Algorithm,
                    and FP-Growth Algorithm for mining association rules.
                </p>
            </InfoBox>
        </div>
    );
}
