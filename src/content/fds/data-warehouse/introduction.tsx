import React from 'react';
import { KeyPoints, InfoBox, ExampleBox, ContentImage } from '@/components/ContentDisplay';

export default function DWIntroduction() {
    return (
        <div>
            <p>
                Imagine you own a huge company with branches in 50 cities. Each branch stores its data in
                its own database — sales in one, HR in another, inventory in a third. When the CEO asks
                <em>"What was our total revenue last year, state-wise?"</em>, nobody can answer quickly
                because data is scattered everywhere. A <strong>Data Warehouse</strong> solves this problem
                by bringing all data together into <strong>one single, organized treasure chest</strong> for
                analysis and decision-making.
            </p>

            <KeyPoints
                title="What You'll Learn"
                points={[
                    "What is a Data Warehouse — Definition and Purpose",
                    "The 4 Key Characteristics (Inmon's Definition)",
                    "Data Warehouse vs Operational Database",
                    "ETL Process — Extract, Transform, Load",
                    "Data Warehouse Architecture"
                ]}
            />

            <h2 id="what-is-dw">What is a Data Warehouse?</h2>

            <blockquote>
                "A Data Warehouse is a subject-oriented, integrated, time-variant, and non-volatile
                collection of data in support of management's decision-making process."
                <br /><br />
                — William H. Inmon, Father of Data Warehousing
            </blockquote>

            <h3>The 4 Key Characteristics</h3>

            <ContentImage
                src="/imgs/fds/dw_characteristics.svg"
                alt="Infographic showing the 4 characteristics of Data Warehouse: Subject-Oriented, Integrated, Time-Variant, Non-Volatile."
                caption="A Data Warehouse must satisfy these four defining characteristics proposed by Bill Inmon."
            />

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
                        <td>Organized around major subjects (Sales, Customer, Product)</td>
                        <td>A retail DW focuses on "Sales", "Products" — not on "Login System"</td>
                    </tr>
                    <tr>
                        <td><strong>Integrated</strong></td>
                        <td>Data from multiple sources is unified into a consistent format</td>
                        <td>"Male/Female" from one source and "M/F" from another → standardized to "Male/Female"</td>
                    </tr>
                    <tr>
                        <td><strong>Time-Variant</strong></td>
                        <td>Captures historical data with time stamps over years</td>
                        <td>Compare sales of Q1 2024 with Q1 2025</td>
                    </tr>
                    <tr>
                        <td><strong>Non-Volatile</strong></td>
                        <td>Data is permanent and read-only — never updated or deleted</td>
                        <td>Old address "Mumbai" is kept even after customer moves to "Delhi"</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="dw-vs-oltp">Data Warehouse (OLAP) vs Operational Database (OLTP)</h2>

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
                        <td>Analysis and decision-making (read-only)</td>
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
                        <td>Simple, short: "What is this product's price?"</td>
                        <td>Complex: "Sales trend over 5 years by region?"</td>
                    </tr>
                    <tr>
                        <td><strong>Size</strong></td>
                        <td>Megabytes to Gigabytes</td>
                        <td>Gigabytes to Terabytes</td>
                    </tr>
                    <tr>
                        <td><strong>Updates</strong></td>
                        <td>Frequent read/write operations</td>
                        <td>Read-only (data loaded periodically via ETL)</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="etl">ETL Process — Extract, Transform, Load</h2>

            <p>
                <strong>ETL</strong> is the backbone of any Data Warehouse — it's the process of moving
                data from source systems into the warehouse:
            </p>

            <ContentImage
                src="/imgs/fds/dw_architecture.svg"
                alt="ETL flow from multiple source icons Extract into Transform and Load into DW."
                caption="The ETL pipeline Extracting data from numerous silos, Transforming it to a unified standard, and Loading it into the Data Warehouse."
            />

            <ol>
                <li><strong>Extract:</strong> Pull raw data from various sources (databases, files, APIs, spreadsheets)</li>
                <li><strong>Transform:</strong> Clean, standardize, and convert data into a unified format</li>
                <li><strong>Load:</strong> Store the cleaned data into the Data Warehouse</li>
            </ol>

            <ExampleBox title="ETL in Action: University Example">
                <ul>
                    <li><strong>Extract:</strong> Pull from Admission System (MySQL), Exam System (Oracle), Library (PostgreSQL), Fee System (Excel)</li>
                    <li><strong>Transform:</strong> Standardize student IDs, convert date formats, handle missing marks as "Absent"</li>
                    <li><strong>Load:</strong> Store unified data into DW for analysis like "Which department has highest pass percentage over 5 years?"</li>
                </ul>
            </ExampleBox>

            <KeyPoints
                title="Key Takeaways"
                points={[
                    "Data Warehouse = centralized, read-only repository for analysis",
                    "4 characteristics: Subject-Oriented, Integrated, Time-Variant, Non-Volatile",
                    "OLTP = daily transactions (current data); OLAP = analysis (historical data)",
                    "ETL (Extract, Transform, Load) moves data from sources into the warehouse"
                ]}
            />
        </div>
    );
}
