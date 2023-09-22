export class AZDivider extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .divider {
                width: 100%;
                height: 0;
                border-top: 1px solid rgba(42, 15, 84, 0.3);
                margin-top: 8px;
                margin-bottom: 8px;
            }
        `;

        const divider = document.createElement('div');
        divider.classList.add('divider');

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(divider);
    }
}