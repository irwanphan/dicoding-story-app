import { LitElement, html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class FAButton extends LitElement{
    createRenderRoot() {
        return this;
    }

    constructor() {
        super();
    }

    static properties = {
        url: {String}
    }

    render() {
        return html`
            <a class="btn btn-blue bordered fab"
                href="${this.url}"
            >
                ${msg('Add Story')}<i class="bi bi-image"></i>
            </a>
        `;
    }
}

customElements.define('fa-button', FAButton);