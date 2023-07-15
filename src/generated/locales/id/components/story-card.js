import { LitElement, html } from 'lit';
class StoryCard extends LitElement {
    createRenderRoot() {
        return this;
    }
    static properties = {
        id: { type: String },
        name: { type: String },
        photoUrl: { type: String },
        description: { type: String },
        createdAt: { type: Date },
    };
    render() {
        return html `\n            <div class="card bordered h-100 bg-gradient">\n                <div class="card-body">\n                    <div class="card-author fw-bold mb-2">\n                        <i class="bi bi-person-circle"></i> ${this.name}\n                    </div>\n                    <img src="${this.photoUrl}" class="card-img-top card-img" alt="${this.description}">\n                    <p class="card-text mt-2">${this.description}</p>\n                    <small><i class="bi bi-calendar2-event-fill"></i> ${this.createdAt}</small>\n                </div>\n            </div>\n        `;
    }
}
customElements.define('story-card', StoryCard);
