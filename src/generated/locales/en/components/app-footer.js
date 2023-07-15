import { html, css, LitElement } from 'lit';
class AppFooter extends LitElement {
    static styles = css `
        .app-footer {
            padding: 1rem;
            text-align: center;
            font-size: 0.8rem;
            margin: 0 2rem;
            border-top: 1px solid #ced4da;
            color: #6c757d;
        }
        .love {
            color: #e25555;
        }
    `;
    constructor() {
        super();
    }
    render() {
        return html `\n            <div class="app-footer">\n                Built with <span class="love">&#9829;</span>, view repo on <a href="https://github.com/irwanphan/dicoding-story-app" target="_blank" rel="noopener noreferrer">GitHub</a>\n            </div>\n        `;
    }
}
customElements.define('app-footer', AppFooter);
