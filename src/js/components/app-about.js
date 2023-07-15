import { html, css, LitElement } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class AppAbout extends LitElement {
    static styles = css`
        .app-about {
            font-family: 'Montserrat', 'Nunito', sans-serif;
        }
    `;

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="app-about">
                ${msg(html`
                    <p>
                        This app is built based on what I learn on Dicoding Course: Learn Front-End Development Tools for Intermediate (Belajar Tools Front-End Web Intermediate). Things I learned in this course are the usage of Lit Components, Utilizing and Customizing Bootstrap, and Sass usage
                    </p>
                    <p>
                        Contact me via my email on: <a href="mailto:irwanphan@gmail.com" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">irwanphan@gmail.com</a>
                    </p>
                    <p>
                        This github repo is on <a href="https://github.com/irwanphan/dicoding-story-app" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">https://github.com/irwanphan/dicoding-story-app</a>
                    </p>
                    <p>
                        My personal portfolio page is on <a href="https://irwanphan.github.io" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">https://irwanphan.github.io</a>
                    </p>
                `)}
            </div>
        `;
    }
}

customElements.define('app-about', AppAbout);