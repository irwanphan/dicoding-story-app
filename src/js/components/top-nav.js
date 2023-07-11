import { LitElement, html } from 'lit';

class TopNav extends LitElement{
    createRenderRoot() {
        return this;
    }

    constructor() {
        super();
    }

    brandName = BRAND_NAME;
    render() {
        return html`
            <nav class="navbar navbar-expand-md bg-blue">
                <div class="container">
                    <span class="navbar-brand">${this.brandName}</span>

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent"><%= navLinks %></div>
                </div>
            </nav>
        `;
    }
}

customElements.define('top-nav', TopNav);