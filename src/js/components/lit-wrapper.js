import { LitElement } from 'lit';

class LitElementWithoutShadowDOM extends LitElement {
    createRenderRoot() {
        return this;
    }
}

export default LitElementWithoutShadowDOM;
