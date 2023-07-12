import { LitElement, html } from 'lit';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
            <div class="offcanvas offcanvas-start" 
                id="staticBackdrop" 
                tabindex="-1" 
                data-bs-backdrop="static" 
                aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <%= navLinks %>
                    </div>
                </div>
            </div>
        `;
    }                        
}

customElements.define('top-nav', TopNav);