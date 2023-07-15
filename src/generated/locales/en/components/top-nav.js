import { LitElement, html } from 'lit';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
class TopNav extends LitElement {
    createRenderRoot() {
        return this;
    }
    constructor() {
        super();
    }
    brandName = BRAND_NAME;
    navLinks = NAV_LINKS;
    render() {
        return html `\n            <nav class="navbar custom bg-blue">\n                <div class="container px-4">\n                    <span class="navbar-brand">${this.brandName}</span>\n\n                    <button class="btn btn-blue d-block d-sm-none" \n                        type="button" \n                        data-bs-toggle="offcanvas" \n                        data-bs-target="#staticBackdrop" \n                        aria-controls="staticBackdrop"\n                    ><i class="bi bi-three-dots"></i></button>\n                    <div class="d-none d-sm-block">\n                        <ul class="navbar-nav d-flex flex-row g-3">\n                            ${this.navLinks.map(({ url, text }) => {
            if (url !== '/') {
                return html `\n                                        <li class="nav-item px-2">\n                                            <a class="nav-link" href="${url}">${text}</a>\n                                        </li>\n                                    `;
            }
        })}\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <off-canvas></off-canvas>\n        `;
    }
}
customElements.define('top-nav', TopNav);
