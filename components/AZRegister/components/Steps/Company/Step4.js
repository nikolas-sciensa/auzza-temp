export class AZRegisterCompanyStep4 extends HTMLElement {
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

            .instruction {
                font-size: 12px;
                font-weight: 400;
                line-height: 14.52px;
            }

            .validationText {
                font-size: 12px;
                font-weight: 400;
                line-height: 14.52px;
                color: rgba(39, 14, 79, 0.5);
            }

            .numberText {
                font-size: 12px;
                font-weight: 700;
                line-height: 15px;
                margin-bottom: 32px;
            }
        `;

        const form = document.createElement('form');
        form.classList.add('form');

        const formText = document.createElement('p');
        formText.classList.add('text');
        formText.textContent = 'Validação de telefone';

        const instruction = document.createElement('p');
        instruction.classList.add('instruction');
        instruction.textContent = 'Insira o código enviado para o número:';

        const numberText = document.createElement('p');
        numberText.classList.add('numberText');
        numberText.textContent = '(11) 9****-**86';

        const validationText = document.createElement('p');
        validationText.classList.add('validationText');
        validationText.textContent = 'Código de validação';

        const OTPInput = document.createElement('az-otp');
        OTPInput.classList.add('OTPInput');

        const sendAgain = document.createElement('az-link');
        sendAgain.classList.add('sendAgain');
        sendAgain.textContent = 'Enviar código novamente';

        form.appendChild(formText);
        form.appendChild(instruction);
        form.appendChild(numberText);
        form.appendChild(validationText);
        form.appendChild(OTPInput);
        form.appendChild(sendAgain);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(form);
    }
}

