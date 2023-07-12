import { LitElement, html } from 'lit';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

class OffCanvas extends LitElement{
    createRenderRoot() {
        return this;
    }

    static properties = {
        links: { type: Array }
    }

    constructor() {
        super();
        this.links = [
            {url: '/', text: 'Home'},
            {url: '/about', text: 'About Dev'},
            {url: '/stories/add', text: 'Add Story'},
            {url: '/login', text: 'Login'},
        ]
    }


    render() {
        return html`
            <div class="offcanvas offcanvas-start" 
                id="staticBackdrop" 
                tabindex="-1" 
                data-bs-backdrop="static" 
                aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">Story App</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="offcanvas-nav">
                        ${this.links.map(({url, text}) => {
                            return html`
                                <a class="nav-link" href="${url}">${text}</a>
                            `
                        })}
                    </div>
                </div>
            </div>
        `;
    }                        
}

customElements.define('off-canvas', OffCanvas);