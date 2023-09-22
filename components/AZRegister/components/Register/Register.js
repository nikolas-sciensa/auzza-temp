export class AZRegister extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
             
            .registerContainer {
                user-select: none;
                display: flex;
                flex-direction: column;
                width: 100vw;
                min-width: 300px;
                height: 100vh;
                overflow-x: hidden;
            }

            @media (min-width: 768px) {
                .registerContainer {
                    display: flex;
                    flex-direction: row;
                    width: 100vw;
                    height: 100vh;
                }
            }
        `;

        const isCompanyRegister = this.hasAttribute('company');

        const currentStep = this.getAttribute('currentStep');

        const registerContainer = document.createElement('div');
        registerContainer.classList.add('registerContainer');

        const leftDiv = document.createElement('az-register-left-div');
        if (isCompanyRegister) leftDiv.setAttribute('company', '');
        leftDiv.setAttribute('currentStep', currentStep);

        const rightDiv = document.createElement('az-register-right-div');
        if (isCompanyRegister) rightDiv.setAttribute('company', '');
        rightDiv.setAttribute('currentStep', currentStep);

        registerContainer.appendChild(leftDiv);
        registerContainer.appendChild(rightDiv);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(registerContainer);
    }
}