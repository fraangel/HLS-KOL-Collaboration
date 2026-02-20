const DOCUMENTS_DATA = [
    {
        id: 'DOC001',
        title: 'High-Res CTC Morphological Analysis - Patient #402',
        type: 'Case Study',
        date: '2026-01-15',
        author: 'Dr. Elena Marchetti',
        category: 'Clinical Case Documentation',
        size: '3.2 MB',
        format: 'PDF',
        fileType: 'pdf',
        downloadUrl: '#',
        description: 'Detailed morphological characterization of circulating tumor cells isolated from peripheral blood, including immunofluorescence staining panel results.'
    },
    {
        id: 'DOC002',
        title: 'Liquid Biopsy Baseline Assessment - Case Ref: SR-99',
        type: 'Case Study',
        date: '2026-02-03',
        author: 'Prof. Marco Santini',
        category: 'Clinical Case Documentation',
        size: '1.8 MB',
        format: 'PDF',
        fileType: 'pdf',
        downloadUrl: '#',
        description: 'Baseline liquid biopsy assessment for metastatic breast cancer case including CTC count, ctDNA analysis, and exosome profiling.'
    },
    {
        id: 'DOC003',
        title: 'Biomarker Characterization Sheets',
        type: 'Diagnostic Report',
        date: '2025-11-20',
        author: 'Dr. Laura Conti',
        category: 'Diagnostic Reports',
        size: '540 KB',
        format: 'Excel',
        fileType: 'xls',
        downloadUrl: '#',
        description: 'Comprehensive biomarker panel results including HER2, PD-L1, Ki-67, and ER/PR status across 24 patient samples.'
    },
    {
        id: 'DOC004',
        title: 'CTC Enumeration Trend Analysis',
        type: 'Diagnostic Report',
        date: '2025-12-18',
        author: 'Dr. Giovanni Ferrara',
        category: 'Diagnostic Reports',
        size: '780 KB',
        format: 'Excel',
        fileType: 'xls',
        downloadUrl: '#',
        description: 'Longitudinal CTC count trends over 12-month monitoring period for cohort of 15 metastatic colorectal cancer patients.'
    },
    {
        id: 'DOC005',
        title: 'Level Profile on Circulating Tumor Cells',
        type: 'Diagnostic Report',
        date: '2026-01-28',
        author: 'Dr. Silvia Romano',
        category: 'Diagnostic Reports',
        size: '2.1 MB',
        format: 'Image',
        fileType: 'jpg',
        downloadUrl: '#',
        description: 'High-resolution microscopy images of CTC clusters with fluorescent marker overlays, annotated for morphological grading.'
    },
    {
        id: 'DOC006',
        title: 'Phase III Clinical Trial Summary: Overall Survival Outcomes',
        type: 'Research Paper',
        date: '2025-10-05',
        author: 'Prof. Andrea Bianchi',
        category: 'Scientific Resources',
        size: '4.5 MB',
        format: 'PDF',
        fileType: 'pdf',
        downloadUrl: '#',
        description: 'Summary of Phase III trial (n=842) evaluating CTC-guided therapy switching versus standard of care in metastatic breast cancer.'
    },
    {
        id: 'DOC007',
        title: 'RWE White Paper: Impact of CTC Monitoring on Therapeutic Decisions',
        type: 'White Paper',
        date: '2025-09-12',
        author: 'Dr. Federica Colombo',
        category: 'Scientific Evidence',
        size: '1.4 MB',
        format: 'Word',
        fileType: 'word',
        downloadUrl: '#',
        description: 'Real-world evidence analysis from 12 European oncology centers demonstrating the impact of CTC monitoring on treatment modification rates.'
    },
    {
        id: 'DOC008',
        title: 'Updated Consensus on Liquid Biopsy in Metastatic Oncology',
        type: 'Consensus Document',
        date: '2026-01-10',
        author: 'Prof. Roberto Esposito',
        category: 'Scientific Evidence',
        size: '890 KB',
        format: 'PDF',
        fileType: 'pdf',
        downloadUrl: '#',
        description: 'Updated expert consensus guidelines on the clinical utility of liquid biopsy across solid tumor types, endorsed by 45 KOLs.'
    },
    {
        id: 'DOC009',
        title: 'Patient Informed Consent for Genetic Analysis (Multi-language)',
        type: 'Regulatory Form',
        date: '2025-08-22',
        author: 'Legal & Compliance Dept.',
        category: 'Regulatory & Procedural Docs',
        size: '320 KB',
        format: 'Word',
        fileType: 'word',
        downloadUrl: '#',
        description: 'Multi-language informed consent template for genomic profiling and liquid biopsy procedures, compliant with EU GDPR and IVDR.'
    },
    {
        id: 'DOC010',
        title: 'Standard Operating Procedure (SOP) for KOL Consultation Request',
        type: 'SOP',
        date: '2025-07-30',
        author: 'Medical Affairs Office',
        category: 'Regulatory & Procedural Docs',
        size: '210 KB',
        format: 'PDF',
        fileType: 'pdf',
        downloadUrl: '#',
        description: 'Step-by-step procedure for initiating and managing KOL consultation requests, including conflict-of-interest disclosure requirements.'
    }
];

function getRecentDocuments(documents, limit = 3) {
    return [...documents]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
}

export default DOCUMENTS_DATA;
export { DOCUMENTS_DATA, getRecentDocuments };
