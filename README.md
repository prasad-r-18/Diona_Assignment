# Diona Forms & AI Internship — PDF-to-Web Assignment

## Overview

This project implements two web-based forms based on the supplied PDF references. The objective was to recreate the document layouts using **HTML, CSS and JavaScript**, while supporting dynamic data and browser-based printing.

## Technology Stack

* HTML5
* CSS3
* JavaScript
* Chrome / Edge for browser testing
* Git & GitHub for version control and submission

## Exercises

### Exercise 1 — Worker Progress Report

Location:

`exercise1/`

Main files:

* `exercise1/index.html`
* `exercise1/script.js`

The implementation recreates the multi-page Worker Progress Report structure, including:

* Header and WCB branding
* Form sections and labels
* Dynamic worker/report information
* Dynamic responses and status fields
* Tables and row-based content
* Footer content
* Page numbering
* Print/PDF layout

### Exercise 2 — Medical & Travel Expense Request

Location:

`exercise2/`

Main files:

* `exercise2/index.html`
* `exercise2/script.js`

The implementation recreates the Medical & Travel Expense Request structure, including:

* Header and WCB branding
* Dynamic claim and worker information
* Medical treatment and medication details
* Exercise and free-text sections
* Dynamic expense table rows
* Parking, mileage and bus/taxi expense sections
* Footer and certification content
* Page numbering
* Print/PDF layout

## Dynamic Behavior

Both exercises use JavaScript-driven datasets.

Each exercise provides a dataset selector in the browser toolbar. Switching between the available samples updates the document using the selected data without changing the underlying HTML structure.

The implementation was tested with different datasets to demonstrate that the layout can handle changing values and different numbers of table rows.

Examples of dynamic data include:

* Claim/report numbers
* Worker App ID
* Submitted date and timestamp
* Worker name
* Dates
* Status and selection fields
* Free-text responses
* Medical treatment information
* Medication details
* Exercise information
* Expense table rows
* Expense amounts
* Parking expenses
* Mileage expenses
* Bus/taxi expenses

The following elements are treated as static template content:

* Document structure
* Labels
* Branding
* Visual hierarchy
* Footer structure
* Certification text
* Table headings

## PDF / Print Support

A `Print / Save PDF` option is provided in the browser interface.

The print stylesheet:

* Hides the demo toolbar
* Preserves the document layout
* Separates pages appropriately
* Maintains headers, footers and page numbering
* Provides deterministic print pagination

For the cleanest result, use Chrome or Microsoft Edge and select **Save as PDF** from the browser print dialog.

## Running the Project

No build tools, frameworks or external dependencies are required.

### Option 1 — Open directly

Open either HTML file in a modern browser:

```text
exercise1/index.html
exercise2/index.html
```

### Option 2 — Run a local static server

From the project root:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

Using a local server is recommended for the cleanest browser demonstration.

## Project Structure

```text
Diona_Assignment/
│
├── assets/
│   └── wcb-logo.png
│
├── exercise1/
│   ├── index.html
│   └── script.js
│
├── exercise2/
│   ├── index.html
│   └── script.js
│
├── videos/
│   ├── Exercise_1_Demo.mp4
│   └── Exercise_2_Demo.mp4
│
├── AI_PROMPT_HISTORY.md
├── README.md
├── shared.css
└── .gitignore
```

## Demonstration Videos

The required narrated demonstration videos are included directly in this GitHub repository.

* **Exercise 1:** `videos/Exercise_1_Demo.mp4`
* **Exercise 2:** `videos/Exercise_2_Demo.mp4`

The demonstrations cover:

* Understanding of the requirements
* Assumptions made during implementation
* Browser execution
* Dynamic behavior using different datasets
* HTML, CSS and JavaScript implementation
* Challenges encountered and their resolutions
* AI usage during development

The videos use the required **Picture-in-Picture (PiP)** presentation format, showing both the screen and presenter.

## AI Disclosure

AI assistance was used during development for code scaffolding, implementation guidance, debugging, layout refinement and review.

The generated suggestions were reviewed, tested and adapted to the supplied PDF references and the requirements of the assignment.

The prompts used during development are documented in:

`AI_PROMPT_HISTORY.md`

## Important Assumptions

* The assignment specifies that the generated content should be **similar to the supplied PDFs**. Therefore, the implementation focuses on reproducing the visual hierarchy, page structure, tables, borders, branding, footer content and dynamic behavior rather than treating the source PDFs as immutable images.
* The supplied sample values are treated as demonstration data.
* Alternate sample data is used to demonstrate that the same document structure can render different values and different numbers of rows dynamically.
* The WCB logo was extracted from the supplied reference PDF and reused as a local image asset.
* Browser print rendering is used to generate the final PDF-style output.
* No external frameworks or libraries are required for the implementation.

## Verification

The exercises were tested in the browser using multiple datasets.

The implementation was checked for:

* Correct document structure
* Dynamic data rendering
* Different table row counts
* Header and footer rendering
* Page numbering
* Image/logo rendering
* Print/PDF pagination
* Consistency with the supplied PDF references
* Successful browser execution using HTML, CSS and JavaScript

## Submission

Repository:

`https://github.com/prasad-r-18/Diona_Assignment`

The repository contains the complete source code, assets, documentation, AI prompt history and demonstration videos required for the assignment.
