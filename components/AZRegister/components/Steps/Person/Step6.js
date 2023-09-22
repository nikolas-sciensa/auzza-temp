export class AZRegisterPersonStep6 extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .form {
                width: 100%;
                min-width: 270px;
                flex: 1;
            }

            .text {
                font-size: 18px;
                font-weight: 700;
                line-height: 21.78px;
            }

            .ruleContainer {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 100%;
            }

            .ruleImg {
                width: 24px;
                height: 24px;
                margin-right: 12px;
            }

            .rule {
                font-size: 14px;
                font-weight: 500;
                line-height: 17px;
            }
        `;

        const form = document.createElement('form');
        form.classList.add('form');

        const formText = document.createElement('p');
        formText.classList.add('text');
        formText.textContent = 'Crie uma senha';

        const rule1Container = document.createElement('div');
        rule1Container.classList.add('ruleContainer');

        const rule1img = document.createElement('img');
        rule1img.classList.add('ruleImg');
        rule1img.src = '../../../../../assets/images/match.png';

        const rule1 = document.createElement('p');
        rule1.classList.add('rule');
        rule1.textContent = 'Sua senha deve ter no mínimo 8 caracteres';

        const rule2Container = document.createElement('div');
        rule2Container.classList.add('ruleContainer');

        const rule2img = document.createElement('img');
        rule2img.classList.add('ruleImg');
        rule2img.src = '../../../../../assets/images/dont-match.png';

        const rule2 = document.createElement('p');
        rule2.classList.add('rule');
        rule2.textContent = 'Incluir pelo menos 1 numeral';

        const password = document.createElement('az-password');
        password.setAttribute('placeholder', 'Senha');

        const confirmPassword = document.createElement('az-password');
        confirmPassword.setAttribute('placeholder', 'Confirme a senha');

        rule1Container.appendChild(rule1img);
        rule1Container.appendChild(rule1);

        rule2Container.appendChild(rule2img);
        rule2Container.appendChild(rule2);

        form.appendChild(formText);
        form.appendChild(rule1Container);
        form.appendChild(rule2Container);
        form.appendChild(password);
        form.appendChild(confirmPassword);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(form);
    }
}

