export class AZRegisterCompanyStep2 extends HTMLElement {
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
                margin-bottom: 32px;
            }
        `;

        const form = document.createElement('form');
        form.classList.add('form');

        const formText = document.createElement('p');
        formText.classList.add('text');
        formText.textContent = 'Documentação';

        const instruction = document.createElement('p');
        instruction.classList.add('instruction');
        instruction.textContent = 'Envie o documento requerido abaixo.';

        const fileInput = document.createElement('az-upload');
        fileInput.setAttribute('label', 'Contrato/Estatuto Social consolidado');
        fileInput.setAttribute('registration', '');

        form.appendChild(formText);
        form.appendChild(instruction);
        form.appendChild(fileInput);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(form);
    }
}
