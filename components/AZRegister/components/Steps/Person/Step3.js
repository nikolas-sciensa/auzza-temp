export class AZRegisterPersonStep3 extends HTMLElement {
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

            .note {
                font-size: 10px;
                font-weight: 400;
                line-height: 12px;
                letter-spacing: 0em;
                text-align: center;
                margin-left: 16px;
                margin-right: 16px;
                margin-bottom: 32px;
            }
        `;

        const form = document.createElement('form');
        form.classList.add('form');

        const formText = document.createElement('p');
        formText.classList.add('text');
        formText.textContent = 'Informações profissionais';

        const instruction = document.createElement('p');
        instruction.classList.add('instruction');
        instruction.textContent = 'Insira as informações do administrador da conta.';

        const scholarity = document.createElement('az-select');
        scholarity.classList.add('scholarity');
        scholarity.setAttribute('placeholder', 'Escolaridade*');
        scholarity.setAttribute('form', '')
        scholarity.setAttribute('registration', '');

        const occupation = document.createElement('az-select');
        occupation.classList.add('occupation');
        occupation.setAttribute('placeholder', 'Profissão / Área de Atuação*');
        occupation.setAttribute('form', '')
        occupation.setAttribute('registration', '');

        const monthlyIncome = document.createElement('az-select');
        monthlyIncome.classList.add('monthlyIncome');
        monthlyIncome.setAttribute('placeholder', 'Renda Média Mensal');
        monthlyIncome.setAttribute('form', '')
        monthlyIncome.setAttribute('registration', '');

        const certification = document.createElement('az-select');
        certification.classList.add('certification');
        certification.setAttribute('placeholder', 'Certificação');
        certification.setAttribute('form', '')
        certification.setAttribute('registration', '');

        const creciNumber = document.createElement('az-input');
        creciNumber.classList.add('creciNumber');
        creciNumber.setAttribute('placeholder', 'Número do Creci');
        creciNumber.setAttribute('form', '')

        const exercise = document.createElement('az-radio');
        exercise.classList.add('exercise');
        exercise.setAttribute('text', 'Já exerceu função comercial?');
        exercise.setAttribute('options', 'Sim,Não');
        exercise.setAttribute('name', 'exercise')

        const hasExperience = document.createElement('az-radio');
        hasExperience.classList.add('hasExperience');
        hasExperience.setAttribute('text', 'Possui experiência no mercado financeiro?');
        hasExperience.setAttribute('options', 'Sim,Não');
        hasExperience.setAttribute('name', 'hasExperience')

        const note = document.createElement('p');
        note.classList.add('note');
        note.textContent = '*Ao concluir seu cadastro, você autoriza a XP, MELVER e/ou os escritórios credenciados a entrarem em contato com você para apresentar eventuais oportunidades e esclarecer dúvidas relacionadas ao processo de parceria.';

        form.appendChild(formText);
        form.appendChild(instruction);
        form.appendChild(scholarity);
        form.appendChild(occupation);
        form.appendChild(monthlyIncome);
        form.appendChild(certification);
        form.appendChild(creciNumber);
        form.appendChild(exercise);
        form.appendChild(hasExperience);
        form.appendChild(note);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(form);
    }
}