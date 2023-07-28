import { LitElement, html, css } from 'lit';

class ImagePreview extends LitElement {
    static get properties() {
        return {
            fileUrl: {
                type: String,
                reflect: true,
            },
        };
    }

    static styles = css`
        .previewImage {
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            border: 1px solid #ced4da;
            height: auto;
            width: 100%;
            display: block;
            border-radius: 0.5rem;
            box-sizing: border-box;
        }
    `;

    constructor() {
        super();
        this.fileUrl = '';
    }

    render() {
        if (this.fileUrl === '') return html``;
        return html`
            <img
                class="previewImage"
                id="StoryImageUploadChange"
                src="${this.fileUrl}"
            ></img>
        `;
    }
}

customElements.define('image-preview', ImagePreview);
