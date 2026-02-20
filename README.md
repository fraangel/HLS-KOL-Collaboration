# HLS KOL Collaboration Platform

A Salesforce Lightning Web Components (LWC) document viewer designed for Healthcare Professionals (HCPs) and Key Opinion Leaders (KOLs) in clinical oncology. Built as a standalone SFDX project, ready for deployment to any Salesforce org or Experience Cloud site.

## Components

| Component | Description |
|---|---|
| **collabDocumentGallery** | Parent gallery with search, category/year filtering, recent documents section, and responsive grid layout |
| **collabDocumentTile** | Document card displaying title, description, author, date, file-type icon, and category indicator |
| **collabButton** | Reusable button with primary (green), neutral, and destructive variants |
| **collabMockData** | 10 clinical oncology sample documents across 5 categories |

## Clinical Taxonomy

| Category | Examples |
|---|---|
| Clinical Case Documentation | CTC Morphological Analysis, Liquid Biopsy Assessments |
| Diagnostic Reports | Biomarker Characterization, CTC Enumeration Trends |
| Scientific Resources | Phase III Clinical Trial Summaries |
| Scientific Evidence | RWE White Papers, Consensus Guidelines |
| Regulatory & Procedural Docs | Informed Consent Templates, SOPs |

## Design System

| Element | Color | Hex |
|---|---|---|
| Primary (buttons, active states, card accents) | Green | `#008e5b` |
| Secondary (titles, category icons) | Blue | `#004289` |
| Clinical Case Documentation dot | Teal | `#0d9488` |
| Diagnostic Reports dot | Blue | `#3b82f6` |
| Scientific Resources dot | Purple | `#8b5cf6` |
| Scientific Evidence dot | Amber | `#f59e0b` |
| Regulatory & Procedural Docs dot | Gray | `#6b7280` |

## Supported File Types

| Extension | SLDS Icon |
|---|---|
| `.pdf` | `doctype:pdf` |
| `.xls` | `doctype:excel` |
| `.word` | `doctype:word` |
| `.jpg` | `doctype:image` |

## Features

- **Dynamic Filtering** — Search by title, description, or author; filter by category and year
- **File-Type Icons** — Conditional rendering of SLDS doctype icons based on file extension
- **Responsive Grid** — 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Clinical Branding** — Green/blue palette replacing legacy red branding

## Project Structure

```
hls-kol-collaboration/
├── sfdx-project.json
├── .forceignore
├── .gitignore
└── force-app/main/default/lwc/
    ├── collabDocumentGallery/    (parent)
    ├── collabDocumentTile/       (child card)
    ├── collabButton/             (button)
    └── collabMockData/           (data module)
```

## Deployment

### Prerequisites
- [Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli) installed
- Authenticated to a target org (`sf org login web`)

### Deploy to an org

```bash
sf project deploy start --source-dir force-app --target-org <your-org-alias>
```

### Use in Experience Cloud

After deployment, add `collabDocumentGallery` to any Experience Cloud page via Experience Builder — the component is exposed with `lightningCommunity__Page` target.

## API Version

All components use Salesforce API version **65.0**.

## Origin

Adapted from the [HLS-components](https://github.com/fraangel/HLS-components) repository. Refactored with renamed components, English localization, clinical oncology content, and green/blue branding.
