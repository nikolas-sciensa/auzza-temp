export class AZLogin extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `

            .loginContainer {
                user-select: none;
                display: flex;
                flex-direction: column;
                width: 100vw;
                min-width: 300px;
                height: 100vh;
            }

            @media (min-width: 768px) {
                .loginContainer {
                    display: flex;
                    flex-direction: row;
                    height: 100vh;
                    width: 100vw;
                }
            }
        `;

        const loginContainer = document.createElement('div');
        loginContainer.classList.add('loginContainer');

        loginContainer.appendChild(document.createElement('az-login-left-div'));
        loginContainer.appendChild(document.createElement('az-login-right-div'));

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(loginContainer);
    }
}