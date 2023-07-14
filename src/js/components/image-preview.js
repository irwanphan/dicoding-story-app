import { LitElement, html, css } from 'lit';
 
class ImagePreview extends LitElement {
  static get properties() {
    return {
      fileUrl: { type: String },
    };
  }

  static styles = css`
    .previewImage {
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      border: 1px solid #dcdcdc;
      height: 100%;
      width: 100%;
      display: block;
      border-radius: 0.5rem;
    }
  `;

  constructor() {
    super();
    this.fileUrl = '';
  }
 
  render() {
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