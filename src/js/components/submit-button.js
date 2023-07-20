import { html, css } from 'lit';
import LitElementWithoutShadowDOM from './lit-wrapper';

class SubmitButton extends LitElementWithoutShadowDOM {
    static properties = {
        text: {
            type: String,
        },
        disabled: {
            type: Boolean,
        },
        isLoading: {
            type: Boolean,
        },
    };

    static styles = css`
        .bordered {
            border-width: 1px 1px 2px 1px;
            border-color: #0d6efd;
            border-style: solid;
        }
    `;

    render() {
        if (this.text === undefined || this.text === null || this.text === '') {
            this.text = 'Submit';
        }

        return html`
            <button type="submit" class="btn btn-blue bordered" ?disabled="${this.disabled}">
                ${this.isLoading
                    ? html`
                          <span
                              class="spinner-border spinner-border-sm bordered"
                              role="status"
                              aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Loading...</span>
                          <span class="">Loading...</span>
                      `
                    : `${this.text}`}
            </button>
        `;
    }
}

customElements.define('submit-button', SubmitButton);
