import { html } from 'lit';
import LitElementWithoutShadowDOM from './lit-wrapper';

class StoryCard extends LitElementWithoutShadowDOM {
    static properties = {
        id: { type: String },
        name: { type: String },
        photoUrl: { type: String },
        description: { type: String },
        createdAt: { type: Date },
        isLoading: {
            type: Boolean,
        },
    };

    constructor() {
        super();
        this._isLoading = false;
    }

    render() {
        const cardTemplate = this.isLoading
            ? html`
                  <div class="card" aria-hidden="true">
                      <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                          <h5 class="card-title placeholder-glow">
                              <span class="placeholder col-6"></span>
                          </h5>
                          <p class="card-text placeholder-glow">
                              <span class="placeholder col-7"></span>
                              <span class="placeholder col-4"></span>
                              <span class="placeholder col-4"></span>
                              <span class="placeholder col-6"></span>
                              <span class="placeholder col-8"></span>
                          </p>
                          <a
                              href="#"
                              tabindex="-1"
                              class="btn btn-primary disabled placeholder col-6"
                          ></a>
                      </div>
                  </div>
              `
            : html`
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
                          <small
                              ><i class="bi bi-calendar2-event-fill"></i> ${this.createdAt}</small
                          >
                      </div>
                  </div>
              `;

        return cardTemplate;
    }
}

customElements.define('story-card', StoryCard);
