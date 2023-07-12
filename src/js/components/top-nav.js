import { LitElement, html } from 'lit';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

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
            <nav class="navbar bg-blue">
                <div class="container">
                    <span class="navbar-brand">${this.brandName}</span>

                    <button class="btn btn-blue" 
                        type="button" 
                        data-bs-toggle="offcanvas" 
                        data-bs-target="#staticBackdrop" 
                        aria-controls="staticBackdrop"
                    >S</button>
                </div>
            </nav>
            <off-canvas></off-canvas>
        `;
    }                        
}

customElements.define('top-nav', TopNav);