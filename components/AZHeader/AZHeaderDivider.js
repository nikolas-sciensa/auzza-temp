export class AZHeaderDivider extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });
        
        const style = document.createElement('style');
        style.textContent = `
            .divider {
                height: 70px;
                border-right: 1px solid rgba(68, 73, 85, 1);
            }
        `;

        const divider = document.createElement('div');
        divider.classList.add('divider');

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(divider);
    }
}