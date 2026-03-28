import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ImagePlaceholder, ContentImage } from '@/components/ContentDisplay';
export default function MultidimensionalDataModel() {
    return (
        <div>
            <p>
                In a Data Warehouse, data is organized using a <strong>Multidimensional Model</strong> —
                think of it like a <strong>Rubik's Cube</strong> where you can look at data from different
                angles (dimensions) like Time, Location, Product, etc.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "Facts and Dimensions — the building blocks",
                    "Data Cube — visualizing multidimensional data",
                    "Star Schema vs Snowflake Schema",
                    "OLAP Operations: Roll-up, Drill-down, Slice, Dice, Pivot",
                    "ROLAP vs MOLAP vs HOLAP"
                ]}
            />

            <h2 id="facts-dimensions">Facts and Dimensions</h2>

            <ul>
                <li><strong>Facts:</strong> The measurable quantities you want to analyze (e.g., Sales Amount, Quantity Sold, Profit)</li>
                <li><strong>Dimensions:</strong> The perspectives from which you view the facts (e.g., Time, Location, Product, Customer)</li>
                <li><strong>Data Cube:</strong> A multi-dimensional array of values, organized along dimensions</li>
            </ul>

            <ExampleBox title="Understanding the Data Cube">
                <p>You run a chain of electronics stores across India:</p>
                <ul>
                    <li><strong>Dimension 1 — Time:</strong> Q1, Q2, Q3, Q4 of 2024</li>
                    <li><strong>Dimension 2 — Location:</strong> Mumbai, Delhi, Bangalore, Chennai</li>
                    <li><strong>Dimension 3 — Product:</strong> Samsung, LG, Sony, Xiaomi</li>
                    <li><strong>Fact (Measure):</strong> Total Sales Amount (₹)</li>
                </ul>
                <p>You can instantly answer: <em>"How much did Samsung TVs sell in Mumbai during Q3 2024?"</em></p>
            </ExampleBox>

            <ContentImage
                src="/imgs/fds/data_cube_3d.svg"
                alt="A 3D cube with axes representing Time, Location, and Product. Highlights how data intersects."
                caption="A Data Cube visualizes how multiple dimensions intersect to provide a specific measurable fact (e.g., Sales)."
            />

            <h2 id="schemas">Schema Designs</h2>

            <h3>Star Schema ⭐</h3>
            <p>
                The most common and simplest schema. One <strong>central Fact table</strong> surrounded by
                <strong> Dimension tables</strong> — resembling a star shape.
            </p>
            <ul>
                <li><strong>Fact Table:</strong> Contains measurable data (Sales_Amount) + foreign keys to dimensions</li>
                <li><strong>Dimension Tables:</strong> Contain descriptive info (Product_Name, City_Name, Date)</li>
                <li><strong>Advantage:</strong> Simple, easy, fast queries</li>
                <li><strong>Disadvantage:</strong> Dimension tables may have redundant data</li>
            </ul>

            <h3>Snowflake Schema ❄️</h3>
            <p>A more normalized version where dimension tables are further broken into sub-tables.</p>
            <ul>
                <li><strong>Dimension Tables:</strong> Normalized into sub-tables (City → State → Country)</li>
                <li><strong>Advantage:</strong> Less redundancy, saves storage</li>
                <li><strong>Disadvantage:</strong> More complex queries, more joins, slower</li>
            </ul>

            <ContentImage
                src="/imgs/fds/star_vs_snowflake.svg"
                alt="Diagram showing a simple Star Schema vs a complex Snowflake Schema."
                caption="Star Schema uses flat dimension tables, while Snowflake Schema normalizes dimensions into sub-tables."
            />

            <table>
                <thead>
                    <tr><th>Feature</th><th>Star Schema ⭐</th><th>Snowflake Schema ❄️</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Structure</strong></td><td>Simple — fact + flat dimension tables</td><td>Complex — normalized dimension tables</td></tr>
                    <tr><td><strong>Redundancy</strong></td><td>More redundancy</td><td>Less redundancy</td></tr>
                    <tr><td><strong>Query Speed</strong></td><td>Faster (fewer joins)</td><td>Slower (more joins)</td></tr>
                    <tr><td><strong>Storage</strong></td><td>More storage needed</td><td>Less storage needed</td></tr>
                    <tr><td><strong>Best For</strong></td><td>Simple analysis, BI dashboards</td><td>When storage optimization is critical</td></tr>
                </tbody>
            </table>

            <h2 id="olap">OLAP Operations</h2>

            <p>
                <strong>OLAP (Online Analytical Processing)</strong> lets users interactively analyze
                multidimensional data. Think of it as "playing" with the Data Cube — rotating, zooming, slicing.
            </p>

            <ContentImage
                src="/imgs/fds/olap_operations.svg"
                alt="Infographic showing 5 OLAP operations: Roll-Up, Drill-Down, Slice, Dice, and Pivot."
                caption="The 5 major OLAP operations allow analysts to view multidimensional data from multiple granularities and perspectives."
            />

            <h3>1. Roll-Up (Drill-Up) ⬆️</h3>
            <p><strong>Aggregating</strong> data by climbing up a hierarchy.</p>
            <ExampleBox title="Roll-Up Example">
                <p><strong>Before:</strong> Sales for Mumbai, Pune, Nagpur<br />
                    <strong>After:</strong> Sales for Maharashtra (= Mumbai + Pune + Nagpur)<br />
                    Or: Daily → Monthly → Quarterly → Yearly</p>
            </ExampleBox>

            <h3>2. Drill-Down ⬇️</h3>
            <p><strong>Reverse of Roll-Up.</strong> Breaks summary into detail.</p>
            <ExampleBox title="Drill-Down Example">
                <p><strong>Before:</strong> India total = ₹50 Crore<br />
                    <strong>After:</strong> Maharashtra: ₹15 Cr, Karnataka: ₹12 Cr, Tamil Nadu: ₹10 Cr...<br />
                    Go deeper: Maharashtra → Mumbai: ₹8 Cr, Pune: ₹4 Cr, Nagpur: ₹3 Cr</p>
            </ExampleBox>

            <h3>3. Slice 🔪</h3>
            <p>Selecting a <strong>single value</strong> for one dimension → 2D table.</p>
            <ExampleBox title="Slice Example">
                <p><strong>Slice on Time = "Q3 2024"</strong> → See Sales for all Locations × Products, only for Q3.</p>
            </ExampleBox>

            <h3>4. Dice 🎲</h3>
            <p>Selecting <strong>multiple values</strong> for two or more dimensions → smaller sub-cube.</p>
            <ExampleBox title="Dice Example">
                <p><strong>Dice:</strong> Time = {"{"}Q2, Q3{"}"}, Location = {"{"}Mumbai, Delhi{"}"}, Product = {"{"}Samsung, LG{"}"}<br />
                    Result: A smaller cube with only selected values.</p>
            </ExampleBox>

            <h3>5. Pivot (Rotate) 🔄</h3>
            <p><strong>Rotating</strong> the cube to view from a different perspective.</p>
            <ExampleBox title="Pivot Example">
                <p><strong>Before:</strong> Rows = Products, Columns = Time<br />
                    <strong>After:</strong> Rows = Time, Columns = Products<br />
                    Same data, different view — revealing different trends!</p>
            </ExampleBox>

            <h2 id="rolap-molap-holap">ROLAP vs MOLAP vs HOLAP</h2>

            <table>
                <thead>
                    <tr><th>Feature</th><th>ROLAP</th><th>MOLAP</th><th>HOLAP</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Storage</strong></td><td>Relational tables</td><td>Multidimensional arrays (cubes)</td><td>Combination of both</td></tr>
                    <tr><td><strong>Performance</strong></td><td>Slower for complex queries</td><td>Faster (pre-computed)</td><td>Balanced</td></tr>
                    <tr><td><strong>Data Size</strong></td><td>Handles very large datasets</td><td>Limited by memory</td><td>Good balance</td></tr>
                    <tr><td><strong>Example</strong></td><td>SQL Server Analysis Services</td><td>Oracle Essbase</td><td>SAP BW</td></tr>
                </tbody>
            </table>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Data Cubes organize data along dimensions (Time, Location, Product)",
                    "Star Schema = simple + fast; Snowflake Schema = normalized + less redundancy",
                    "5 OLAP Operations: Roll-Up, Drill-Down, Slice, Dice, Pivot",
                    "ROLAP = relational; MOLAP = multidimensional arrays; HOLAP = hybrid"
                ]}
            />
        </div>
    );
}
