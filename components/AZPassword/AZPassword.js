export class AZPassword extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .inputContainer {
                display: flex;
                align-items: center;
            }
            
            input {
                border: 1px solid rgba(181, 176, 199, 1);
                padding: 10px;
                gap: 10px;
                margin-top: 10px;
                margin-bottom: 10px;
                flex: 1;
                background: rgba(255, 255, 255, 0.3);
            }

            input::placeholder {
                color: ${this.hasAttribute('form') ? 'rgba(39, 14, 79, 0.5);' : 'rgba(42, 15, 84, 1);' }
                font-weight: 500;
                line-height: 15px;
                letter-spacing: 0em;
                text-align: left;
            }
            
        `;
        
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('inputContainer');

        const input = document.createElement('input');

        input.type = 'password';
        input.autocomplete = 'on'; 
        if (this.hasAttribute('placeholder')) input.setAttribute('placeholder', this.getAttribute('placeholder'));

        inputContainer.appendChild(input);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(inputContainer);
    }
}