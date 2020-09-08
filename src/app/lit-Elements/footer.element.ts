import { LitElement, html, customElement, css } from 'lit-element';

@customElement('footer-element')

export class FooterElement extends LitElement {
    constructor() {
        super();
    }

    static get styles(): any {
        return css`
         p { color: white;
             margin: 5px 0px 5px 581px;
            }
            @media only screen and (max-width: 1125px) {
                p { color: white;
                    margin: 0px 0px 0px calc(100vw/2 + 1px)!important;
                }
            }
        `;
    }

    render(): any {
        return html`<p>@Sports Club</p>`;
    }

}
