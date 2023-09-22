export class AZRegisterSteps extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .registerStepsContainer {
                display: flex;
                flex-direction: row;
                min-width: 205px;
                text-align: center;
                padding: 0 80px;
            }
            @media (min-width: 768px) {
                .registerStepsContainer {
                    flex-direction: column;
                }
            }
        `;

        let steps;

        if (this.hasAttribute('company')) {
            steps = [
                window.innerWidth > 768 ? 'DADOS DA EMPRESA' : 'DADOS',
                window.innerWidth > 768 ? 'DOCUMENTOS' : 'DOCUMENTOS',
                window.innerWidth > 768 ? 'DADOS DO ADMINISTRADOR' : 'ADMIN',
                window.innerWidth > 768 ? 'VALIDAÇÃO DE TELEFONE' : 'TELEFONE',
                window.innerWidth > 768 ? 'VALIDAÇÃO DE E-MAIL' : 'EMAIL',
               'SENHA'
            ];
        } else {
            steps = [
                window.innerWidth > 768 ? 'DADOS DO AGENTE' : 'DADOS',
                window.innerWidth > 768 ? 'VÍNCULO' : 'VÍNCULO',
                window.innerWidth > 768 ? 'INFORMAÇÕES PROFISSIONAIS' : 'INFO',
                window.innerWidth > 768 ? 'VALIDAÇÃO DE TELEFONE' : 'TELEFONE',
                window.innerWidth > 768 ? 'VALIDAÇÃO DE E-MAIL' : 'EMAIL',
                'SENHA'
            ];
        }

        const currentStep = this.getAttribute('currentStep');

        const registerStepsContainer = document.createElement('div');
        registerStepsContainer.classList.add('registerStepsContainer');

        steps.forEach(element => {
            const step = document.createElement('az-register-step');
            step.setAttribute('step', steps.indexOf(element) + 1)
            step.textContent = element;
            if (steps.indexOf(element) + 1 < currentStep) {
                step.setAttribute('done', '');
            }

            if (steps.indexOf(element) + 1 == currentStep) {
                step.setAttribute('current', '');
            }

            registerStepsContainer.appendChild(step);

            if (steps.indexOf(element) + 1 < steps.length) {
                const divider = document.createElement('az-register-step-divider');

                if (steps.indexOf(element) + 1 < currentStep) {
                    divider.setAttribute('blue', '');
                }

                registerStepsContainer.appendChild(divider);
            }

        });

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(registerStepsContainer);
    }
}