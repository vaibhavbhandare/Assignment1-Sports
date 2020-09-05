import { LitElement, html, property, css } from 'lit-element';

const mainColor = css`white`;

class ElementThree extends LitElement {

    constructor() {
        // Always call super() first
        super();
    }

    static get styles() {
        return css`
          h3 { color: ${mainColor};
          margin: 19px;}
        `;
    }

    render() {
        return html`<h3>Sports</h3>`
    }
}

customElements.define('title-element', ElementThree);