# Diona Forms & AI Internship — PDF-to-Web Assignment

## Exercises
1. `exercise1/` — Worker Progress Report (3 pages)
2. `exercise2/` — Medical & Travel Expense Request (2 pages)

## Run
No build tools or dependencies are required.

Open either HTML file directly in a browser:
- `exercise1/index.html`
- `exercise2/index.html`

For the cleanest demo, use Chrome/Edge and optionally run a local static server.

## Dynamic behavior
Each exercise has a dataset selector in the toolbar. Switch from Sample A to Sample B to demonstrate that the same layout handles different values and different numbers of rows.

Dynamic data includes:
- Claim number, Worker App ID, submitted timestamp and worker name
- Dates and status/selection fields
- Free-text responses
- Medical treatment, medication and exercise details
- Expense table rows and amounts
- Parking, mileage and bus/taxi rows

The document layout, labels, branding, footer structure and certification text are treated as static template content.

## Printing
Use `Print / Save PDF`. Print CSS hides the demo toolbar and keeps the document pages separated.

## AI disclosure
AI assistance was used to accelerate code scaffolding and review. The actual implementation was inspected and adapted to the supplied PDFs. See `AI_PROMPT_HISTORY.md`.

## Video
Two 2-minute video scripts/checklists are in:
- `VIDEO_SCRIPT_EXERCISE_1.md`
- `VIDEO_SCRIPT_EXERCISE_2.md`

The required videos themselves should be recorded by the candidate with screen + face visible in PiP, then placed in `videos/` or linked from this README before submission.

## Important assumptions
- The assignment says "similar", so the implementation focuses on reproducing the visual hierarchy, page structure, tables, borders, branding and dynamic behavior rather than reproducing the source PDF as an immutable pixel image.
- The provided sample values are treated as demo data. Sample B deliberately uses alternate values and additional rows to demonstrate dynamic rendering.
- The WCB logo image was extracted from the supplied PDF and reused as a local asset.
