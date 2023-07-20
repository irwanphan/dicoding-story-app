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
        return html`
            <div class="card bordered h-100 bg-gradient">
                <div class="card-body">
                    <div class="card-author fw-bold mb-2">
                        <i class="bi bi-person-circle"></i> ${this.name}
                    </div>
                    <img
                        src="${this.photoUrl}"
                        class="card-img-top card-img"
                        alt="${this.description}"
                    />
                    <p class="card-text mt-2">${this.description}</p>
                    <small><i class="bi bi-calendar2-event-fill"></i> ${this.createdAt}</small>
                </div>
            </div>
        `;
    }
}
customElements.define('story-card', StoryCard);
