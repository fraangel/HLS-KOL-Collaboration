import { LightningElement, api } from 'lwc';

export default class CollabDocumentTile extends LightningElement {
    @api document;

    categoryColors = {
        'Clinical Case Documentation': 'teal',
        'Diagnostic Reports': 'blue',
        'Scientific Resources': 'purple',
        'Scientific Evidence': 'amber',
        'Regulatory & Procedural Docs': 'gray'
    };

    fileTypeIconMap = {
        'pdf': 'doctype:pdf',
        'xls': 'doctype:excel',
        'word': 'doctype:word',
        'jpg': 'doctype:image'
    };

    get formattedDate() {
        if (!this.document?.date) return '';
        const date = new Date(this.document.date);
        return date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    }

    get categoryDotClass() {
        const color = this.categoryColors[this.document?.category] || 'gray';
        return `collab-category-dot collab-category-dot-${color}`;
    }

    get fileTypeIcon() {
        const ext = this.document?.fileType;
        if (!ext) return 'doctype:unknown';
        return this.fileTypeIconMap[ext.toLowerCase()] || 'doctype:unknown';
    }

    get hasFileType() {
        return !!this.document?.fileType;
    }

    handleDownload() {
        this.dispatchEvent(new CustomEvent('download', {
            detail: {
                documentId: this.document.id,
                downloadUrl: this.document.downloadUrl
            },
            bubbles: true,
            composed: true
        }));
    }
}
