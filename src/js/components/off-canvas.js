import { html } from 'lit';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LitElementWithoutShadowDOM from './lit-wrapper';
import CheckUserAuth from '../auth/check-user-auth';
import { logout } from '../utils/logout';

class OffCanvas extends LitElementWithoutShadowDOM {
    static properties = {
        links: { type: Array },
    };
    navLinks = NAV_LINKS;

    render() {
        const { isUserSignedIn } = CheckUserAuth.checkLoginState();

        return html`
            <div
                class="offcanvas offcanvas-end"
                id="staticBackdrop"
                tabindex="-1"
                data-bs-backdrop="static"
                aria-labelledby="staticBackdropLabel"
            >
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">Story App</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body">
                    <div class="offcanvas-user">
                        <i class="bi bi-person-fill"></i>
                    </div>
                    <div class="offcanvas-nav">
                        ${this.navLinks.map(({ url, text }) => {
                            if (!(isUserSignedIn && url === '/login.html')) {
                                return html` <a class="nav-link" href="${url}">${text}</a> `;
                            }
                        })}
                        ${isUserSignedIn
                            ? html` <a class="nav-link" href="" @click="${logout}">Logout</a>`
                            : ''}
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('off-canvas', OffCanvas);
