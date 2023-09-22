export class AZRegisterPersonStep1 extends HTMLElement {
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
        formText.textContent = 'Dados do agente';

        const instruction = document.createElement('p');
        instruction.classList.add('instruction');
        instruction.textContent = 'Insira suas informações para criar uma conta Auzza capital.';

        const cpf = document.createElement('az-input');
        cpf.classList.add('cpf');
        cpf.setAttribute('placeholder', 'CPF');
        cpf.setAttribute('form', '')
        cpf.setAttribute('maxLength', '14')
        cpf.setAttribute('id', 'cpf')

        const name = document.createElement('az-input');
        name.classList.add('name');
        name.setAttribute('placeholder', 'Nome');
        name.setAttribute('form', '')

        const birth = document.createElement('az-input');
        birth.classList.add('adress');
        birth.setAttribute('placeholder', 'Data de nascimento');
        birth.setAttribute('form', '')
        birth.setAttribute('maxLength', '10')
        birth.setAttribute('id', 'birth')

        const sex = document.createElement('az-select');
        sex.classList.add('sex');
        sex.setAttribute('placeholder', 'Sexo');
        sex.setAttribute('form', '')
        sex.setAttribute('registration', '');

        const maritalStatus = document.createElement('az-select');
        maritalStatus.classList.add('maritalStatus');
        maritalStatus.setAttribute('placeholder', 'Estado civil');
        maritalStatus.setAttribute('form', '')
        maritalStatus.setAttribute('registration', '');

        const email = document.createElement('az-input');
        email.classList.add('email');
        email.setAttribute('placeholder', 'Email');
        email.setAttribute('form', '')
        email.setAttribute('id', 'email')

        const phone = document.createElement('az-input');
        phone.classList.add('phone');
        phone.setAttribute('placeholder', 'Telefone');
        phone.setAttribute('form', '')
        phone.setAttribute('maxLength', '15')
        phone.setAttribute('id', 'phone')

        form.appendChild(formText);
        form.appendChild(instruction);
        form.appendChild(cpf);
        form.appendChild(name);
        form.appendChild(birth);
        form.appendChild(sex);
        form.appendChild(maritalStatus);
        form.appendChild(email);
        form.appendChild(phone);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(form);
    }
}