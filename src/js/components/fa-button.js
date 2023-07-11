import { LitElement, html } from 'lit';

class FAButton extends LitElement{
    createRenderRoot() {
        return this;
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <button class="btn btn-blue bordered fab">
                Add Story<i class="bi bi-image"></i>
            </button>
        `;
    }
}

customElements.define('fa-button', FAButton);