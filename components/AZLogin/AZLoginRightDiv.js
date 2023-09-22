export class AZLoginRightDiv extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .rightDiv {
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: flex-start;
                background: rgba(231, 237, 242, 1);
                min-height: 69vh;
                width: 100%;
                min-width: 300px;
                flex: 1;
            }

            .loginFormContainer {
                width: 90%;
            }

            .loginButtonContainer {
                margin-top: 16px;
                width: 100%;
                min-width: 270px;
                margin-bottom: 32px;
            }

            .registerCompanyButton {
                margin-right: 8px;
                min-width: 270px;
                width: 100%;
            }

            .registerPersonButton {
                margin-left: 8px;
                min-width: 270px;
                width: 100%;
            }

            @media (min-width: 768px) {
                .rightDiv {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    background: rgba(231, 237, 242, 1);
                    float: right;
                    min-height: 100vh;
                    min-width: 51.04765625vw;
                    flex-direction: column;
                    flex: 1;
                    user-select: none;
                }
    
                .loginFormContainer {
                    width: 28.75vw;
                }
    
                .loginButtonContainer {
                    margin-top: 16px;
                    min-width: 96px;
                    width: 96px;
                    margin-bottom: 32px;
                }
    
                .registerContainer {
                    margin-top: 32px;
                }
    
                .registerButtonsContainer {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                }
    
                .registerCompanyButton {
                    margin-right: 8px;
                    min-width: fit-content;
                    width: 100%;
                }
    
                .registerPersonButton {
                    margin-left: 8px;
                    min-width: fit-content;
                    width: 100%;
                }
    
                .triangleContainer {
                    bottom: 0;
                    width: 179.12px;
                    height: 179.12px;
                    position: fixed;
                    left: 48.95234375vw;
                }
    
                .triangle {
                    border-bottom: 179.12px solid rgba(42, 15, 84, 1);
                    border-right: 179.12px solid transparent;
                }
    
            }

            .LoginText {
                font-size: 14px;
            }

            .policiesTextContainer {
                margin-top: 16px;
                width: 75%;
            }

            .policiesText {
                font-weight: 400;
                font-size: 10px;
            }
        `;

        const triangleContainer = document.createElement('div');
        triangleContainer.classList.add('triangleContainer');

        const triangle = document.createElement('div');
        triangle.classList.add('triangle');

        const rightDiv = document.createElement('div');
        rightDiv.classList.add('rightDiv');

        const loginFormContainer = document.createElement('div');
        loginFormContainer.classList.add('loginFormContainer');

        const loginForm = document.createElement('form');
        loginForm.classList.add('loginForm');

        const LoginText = document.createElement('p');
        LoginText.classList.add('LoginText');
        LoginText.textContent = 'Insira suas credenciais para entrar';

        const emailInput = document.createElement('az-input');
        emailInput.classList.add('emailInput');
        emailInput.setAttribute('placeholder', 'Email');

        const passwordInput = document.createElement('az-input');
        passwordInput.classList.add('passwordInput');
        passwordInput.setAttribute('placeholder', 'Senha');

        const forgotPasswordLink = document.createElement('az-link');
        forgotPasswordLink.classList.add('forgotPasswordLink');
        forgotPasswordLink.setAttribute('href', '#');
        forgotPasswordLink.textContent = 'Esqueci minha senha';

        const loginButtonContainer = document.createElement('div');
        loginButtonContainer.classList.add('loginButtonContainer');

        const loginButton = document.createElement('az-button');
        loginButton.classList.add('loginButton');
        loginButton.setAttribute('type', 'submit');
        loginButton.setAttribute('borderless', '');
        loginButton.setAttribute('blue', '');
        loginButton.setAttribute('center', '');
        loginButton.setAttribute('href', 'products.html');
        loginButton.textContent = 'ENTRAR';
        
        loginButtonContainer.appendChild(loginButton);
        loginForm.appendChild(LoginText);
        loginForm.appendChild(emailInput);
        loginForm.appendChild(passwordInput);
        loginForm.appendChild(forgotPasswordLink);
        loginForm.appendChild(loginButtonContainer);
        
        loginFormContainer.appendChild(loginForm);
        
        const divider = document.createElement('az-divider');
        loginFormContainer.appendChild(divider);

        const registerContainer = document.createElement('div');
        registerContainer.classList.add('registerContainer');
        
        const registerText = document.createElement('p');
        registerText.classList.add('registerText');
        registerText.textContent = 'Ou crie uma conta';

        const registerButtonsContainer = document.createElement('div');
        registerButtonsContainer.classList.add('registerButtonsContainer');

        const registerCompanyButton = document.createElement('az-button');
        registerCompanyButton.classList.add('registerCompanyButton');
        registerCompanyButton.setAttribute('href', '/components/AZRegister/components/Steps/Company/Step1.html');
        registerCompanyButton.textContent = 'ESCRITÓRIO';

        const registerPersonButton = document.createElement('az-button');
        registerPersonButton.classList.add('registerPersonButton');
        registerPersonButton.setAttribute('href', '/components/AZRegister/components/Steps/Person/Step1.html');
        registerPersonButton.textContent = 'AGENTE AUTÔNOMO';

        const policiesTextContainer = document.createElement('div');
        policiesTextContainer.classList.add('policiesTextContainer');

        const policiesText = document.createElement('p');
        policiesText.classList.add('policiesText');
        policiesText.textContent = 'Ao continuar, você estará concordando com os Termos de Uso e a Política de Privacidade da Auzza.';

        rightDiv.appendChild(loginFormContainer);
        
        registerContainer.appendChild(registerText);

        policiesTextContainer.appendChild(policiesText);
        
        registerButtonsContainer.appendChild(registerCompanyButton);
        registerButtonsContainer.appendChild(registerPersonButton);
        registerContainer.appendChild(registerButtonsContainer);
        registerContainer.appendChild(policiesTextContainer);

        loginFormContainer.appendChild(registerContainer);

        triangleContainer.appendChild(triangle);
        rightDiv.appendChild(triangleContainer);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(rightDiv);
    }
}