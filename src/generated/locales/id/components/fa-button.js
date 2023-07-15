import { LitElement, html } from 'lit';
class FAButton extends LitElement {
    createRenderRoot() {
        return this;
    }
    constructor() {
        super();
    }
    static properties = {
        url: { String }
    };
    render() {
        return html `\n            <a class="btn btn-blue bordered fab"\n                href="${this.url}"\n            >\n                Add Story<i class="bi bi-image"></i>\n            </a>\n        `;
    }
}
customElements.define('fa-button', FAButton);
