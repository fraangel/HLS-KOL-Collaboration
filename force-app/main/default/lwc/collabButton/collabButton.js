import { LightningElement, api } from 'lwc';

export default class CollabButton extends LightningElement {
    @api label;
    @api variant = 'primary';
    @api iconName;
    @api size = 'medium';
    @api disabled = false;

    get buttonClass() {
        const classes = ['collab-button'];
        classes.push(`collab-button-${this.variant}`);
        classes.push(`collab-button-${this.size}`);
        if (this.disabled) {
            classes.push('collab-button-disabled');
        }
        return classes.join(' ');
    }

    get hasIcon() {
        return !!this.iconName;
    }

    get iconSize() {
        const sizeMap = {
            'small': 'x-small',
            'medium': 'small',
            'large': 'medium'
        };
        return sizeMap[this.size] || 'small';
    }

    get iconClass() {
        return this.variant === 'primary' ? 'collab-icon-white' : '';
    }

    handleClick() {
        if (!this.disabled) {
            this.dispatchEvent(new CustomEvent('click', {
                bubbles: true,
                composed: true
            }));
        }
    }
}
