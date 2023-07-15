import { LitElement, html } from 'lit';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
class OffCanvas extends LitElement {
    createRenderRoot() {
        return this;
    }
    static properties = {
        links: { type: Array }
    };
    constructor() {
        super();
        this.links = [
            { url: '/', text: `${msg('Home')}` },
            { url: '/about.html', text: 'About Dev' },
            { url: '/stories/add.html', text: 'Add Story' },
            { url: '/login.html', text: 'Login' },
        ];
    }
    render() {
        return html `\n            <div class="offcanvas offcanvas-end" \n                id="staticBackdrop" \n                tabindex="-1" \n                data-bs-backdrop="static" \n                aria-labelledby="staticBackdropLabel">\n                <div class="offcanvas-header">\n                    <h5 class="offcanvas-title" id="staticBackdropLabel">Story App</h5>\n                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>\n                </div>\n                <div class="offcanvas-body">\n                    <div class="offcanvas-user">\n                        <i class="bi bi-person-fill"></i>\n                    </div>\n                    <div class="offcanvas-nav">\n                        ${this.links.map(({ url, text }) => {
            return html `\n                                <a class="nav-link" href="${url}">${text}</a>\n                            `;
        })}\n                    </div>\n                </div>\n            </div>\n        `;
    }
}
customElements.define('off-canvas', OffCanvas);
