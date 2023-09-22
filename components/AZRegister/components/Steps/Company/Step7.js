export class AZRegisterCompanyStep7 extends HTMLElement {
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
                margin-bottom: 36px;
            }

            .instruction {
                font-size: 12px;
                font-weight: 400;
                line-height: 14.52px;
                margin-bottom: 36px;
            }
        `;

        const form = document.createElement('form');
        form.classList.add('form');

        const formText = document.createElement('p');
        formText.classList.add('text');
        formText.textContent = 'Conta em análise';

        const instruction = document.createElement('p');
        instruction.classList.add('instruction');
        instruction.textContent = 'Nosso time de especialistas irá analisar os dados enviados e em breve entraremos em contato com você.';

        const instruction2 = document.createElement('p');
        instruction2.classList.add('instruction');
        instruction2.textContent = 'Quando seu cadastro for aprovado enviaremos uma mensagem para o e-mail informado no cadastro';

        form.appendChild(formText);
        form.appendChild(instruction);
        form.appendChild(instruction2);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(form);
    }
}