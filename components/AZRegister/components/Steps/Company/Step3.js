export class AZRegisterCompanyStep3 extends HTMLElement {
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
        formText.textContent = 'Dados do administrador';

        const instruction = document.createElement('p');
        instruction.classList.add('instruction');
        instruction.textContent = 'Insira as informações do administrador da conta.';

        const name = document.createElement('az-input');
        name.setAttribute('placeholder', 'Nome');
        name.setAttribute('form', '');

        const CPF = document.createElement('az-input');
        CPF.setAttribute('placeholder', 'CPF');
        CPF.setAttribute('form', '');
        CPF.setAttribute('maxLength', '14');
        CPF.setAttribute('id', 'cpf');

        const email = document.createElement('az-input');
        email.setAttribute('placeholder', 'Email');
        email.setAttribute('form', '');

        const phoneNumber = document.createElement('az-input');
        phoneNumber.setAttribute('placeholder', 'Telefone');
        phoneNumber.setAttribute('form', '');
        phoneNumber.setAttribute('maxLength', '15')
        phoneNumber.setAttribute('id', 'phone')

        const position = document.createElement('az-select');
        position.setAttribute('placeholder', 'Cargo');
        position.setAttribute('form', '');
        position.setAttribute('registration', '')

        const role = document.createElement('az-select');
        role.setAttribute('placeholder', 'Função');
        role.setAttribute('form', '');
        role.setAttribute('registration', '')

        const adressProof = document.createElement('az-upload');
        adressProof.setAttribute('label', 'Comprovante de endereço');
        adressProof.setAttribute('registration', '');

        const personalDocument = document.createElement('az-upload');
        personalDocument.setAttribute('label', 'Documento pessoal');
        personalDocument.setAttribute('registration', '');

        form.appendChild(formText);
        form.appendChild(instruction);
        form.appendChild(name);
        form.appendChild(CPF);
        form.appendChild(email);
        form.appendChild(phoneNumber);
        form.appendChild(position);
        form.appendChild(role);
        form.appendChild(adressProof);
        form.appendChild(personalDocument);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(form);
    }
}
