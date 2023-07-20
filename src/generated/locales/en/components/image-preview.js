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
            height: 100%;
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
        return html`\n      <img\n        class="previewImage"\n        id="StoryImageUploadChange"\n        src="${this.fileUrl}"\n      ></img>\n    `;
    }
}
customElements.define('image-preview', ImagePreview);
