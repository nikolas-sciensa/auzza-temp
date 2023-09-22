export class AZRegisterStepDivider extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .divider {
                display: block;
                height: 2px;
                width: 25px;
                margin-top: 11.825px;
                background: ${this.hasAttribute('blue') ? `rgba(34, 221, 227, 1);` : `rgba(255, 255, 255, 1);`}
            }

            @media (min-width: 576px) {
                .divider {
                    display: none;
                }
            }

            @media (min-width: 768px) {
                .divider {
                    display: block;
                    width: 3px;
                    height: 21.02px;
                    margin-left: 22px;
                    margin-top: 2px;
                    margin-bottom: 2px;
                    background: ${this.hasAttribute('blue') ? `rgba(34, 221, 227, 1);` : `rgba(255, 255, 255, 1);`}
                }
            }
        `;

        const divider = document.createElement('div');
        divider.classList.add('divider');

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(divider);
    }
}