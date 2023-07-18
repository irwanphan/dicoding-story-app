import { LitElement, html } from 'lit';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

class TopNav extends LitElement{
    createRenderRoot() {
        return this;
    }

    brandName = BRAND_NAME;
    navLinks = NAV_LINKS;

    render() {
        return html`
            <nav class="navbar custom bg-blue">
                <div class="container px-4">
                    <span class="navbar-brand">${this.brandName}</span>

                    <button class="btn btn-blue d-block d-sm-none" 
                        type="button" 
                        data-bs-toggle="offcanvas" 
                        data-bs-target="#staticBackdrop" 
                        aria-controls="staticBackdrop"
                    ><i class="bi bi-three-dots"></i></button>
                    <div class="d-none d-sm-block">
                        <ul class="navbar-nav d-flex flex-row g-3">
                            ${this.navLinks.map(({url, text}) => {
                                if (url !== '/') {
                                    return html`
                                        <li class="nav-item px-2">
                                            <a class="nav-link" href="${url}">${text}</a>
                                        </li>
                                    `
                                }
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
            <off-canvas></off-canvas>
        `;
    }                        
}

customElements.define('top-nav', TopNav);