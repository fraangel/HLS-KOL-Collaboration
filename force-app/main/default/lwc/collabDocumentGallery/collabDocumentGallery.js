import { LightningElement, track } from 'lwc';
import { getRecentDocuments } from 'c/collabMockData';
import DOCUMENTS_DATA from 'c/collabMockData';

export default class CollabDocumentGallery extends LightningElement {
    @track documents = DOCUMENTS_DATA;
    @track searchTerm = '';
    @track selectedCategory = '';
    @track selectedYear = '';

    categoryOptions = [
        { label: 'Clinical Case Documentation', value: 'Clinical Case Documentation' },
        { label: 'Diagnostic Reports', value: 'Diagnostic Reports' },
        { label: 'Scientific Resources', value: 'Scientific Resources' },
        { label: 'Scientific Evidence', value: 'Scientific Evidence' },
        { label: 'Regulatory & Procedural Docs', value: 'Regulatory & Procedural Docs' }
    ];

    yearOptions = [
        { label: '2026', value: '2026' },
        { label: '2025', value: '2025' },
        { label: '2024', value: '2024' }
    ];

    get recentDocuments() {
        return getRecentDocuments(this.documents, 3);
    }

    get hasRecentDocuments() {
        return this.recentDocuments.length > 0;
    }

    get filteredDocuments() {
        let filtered = [...this.documents];

        if (this.selectedCategory) {
            filtered = filtered.filter(doc => doc.category === this.selectedCategory);
        }

        if (this.selectedYear) {
            filtered = filtered.filter(doc => {
                const year = new Date(doc.date).getFullYear();
                return year === parseInt(this.selectedYear, 10);
            });
        }

        if (this.searchTerm) {
            const term = this.searchTerm.toLowerCase();
            filtered = filtered.filter(doc =>
                doc.title.toLowerCase().includes(term) ||
                doc.description.toLowerCase().includes(term) ||
                doc.author.toLowerCase().includes(term)
            );
        }

        return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    get hasDocuments() {
        return this.filteredDocuments.length > 0;
    }

    get documentCount() {
        return this.filteredDocuments.length;
    }

    handleCategoryChange(event) {
        this.selectedCategory = event.detail.value;
    }

    handleYearChange(event) {
        this.selectedYear = event.detail.value;
    }

    handleSearchChange(event) {
        this.searchTerm = event.detail.value;
    }

    handleResetFilters() {
        this.searchTerm = '';
        this.selectedCategory = '';
        this.selectedYear = '';
    }

    handleDocumentDownload(event) {
        console.log('Download document:', event.detail);
    }
}
