export class AZRegisterRightDiv extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .rightDiv {
                min-height: 84.625vh;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                background: rgba(231, 237, 242, 1);
                width: 100vw;
                min-width: 300px;
                flex-direction: column;
            }

            .formContainer {
                display: flex;
                justify-content: center;
                width: 90%;
                padding-bottom: 60px;
                padding-top: 24px;
            }

            .buttonsContainer {
                width: 90%;
                display: flex;
                flex-direction: row;
                margin-top: 24px;
                position: fixed;
                bottom: 0;
                margin-bottom: 16px;
            }

            .backButton {
                width: 50%;
                margin-right: 16px;
            }

            .nextButton {
                width: 50%;
                margin-left: 16px;
            }

            @media (min-width: 768px) {
                .rightDiv {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    background: rgba(231, 237, 242, 1);
                    min-width: 66.640625vw;
                    width: 66.640625vw;
                }

                .formContainer {
                    padding-top: 0;
                    max-width: 31.25vw;
                    min-width: 31.25vw;
                }

                .buttonsContainer {
                    width: 31.25vw;
                    display: flex;
                    flex-direction: row;
                    margin-top: 24px;
                    position: fixed;
                    bottom: 0;
                    margin-bottom: 16px;
                }
            }
        `;

        let currentStep = this.getAttribute('currentStep');

        const rightDiv = document.createElement('div');
        rightDiv.classList.add('rightDiv');

        const formContainer = document.createElement('div');
        formContainer.classList.add('formContainer');

        let currentStepForm;
        switch (currentStep) {
            case '2':
                if (this.hasAttribute('company')) {
                    currentStepForm = document.createElement('az-register-company-step2');
                    formContainer.appendChild(currentStepForm);
                    break;
                } else {
                    currentStepForm = document.createElement('az-register-person-step2');
                    formContainer.appendChild(currentStepForm);
                    break;
                }
            case '3':
                if (this.hasAttribute('company')) {
                    currentStepForm = document.createElement('az-register-company-step3');
                    formContainer.appendChild(currentStepForm);
                    break;
                } else {
                    currentStepForm = document.createElement('az-register-person-step3');
                    formContainer.appendChild(currentStepForm);
                    break;
                }
            case '4':
                if (this.hasAttribute('company')) {
                    currentStepForm = document.createElement('az-register-company-step4');
                    formContainer.appendChild(currentStepForm);
                    break;
                } else {
                    currentStepForm = document.createElement('az-register-person-step4');
                    formContainer.appendChild(currentStepForm);
                    break;
                }
            case '5':
                if (this.hasAttribute('company')) {
                    currentStepForm = document.createElement('az-register-company-step5');
                    formContainer.appendChild(currentStepForm);
                    break;
                } else {
                    currentStepForm = document.createElement('az-register-person-step5');
                    formContainer.appendChild(currentStepForm);
                    break;
                }
            case '6':
                if (this.hasAttribute('company')) {
                    currentStepForm = document.createElement('az-register-company-step6');
                    formContainer.appendChild(currentStepForm);
                    break;
                } else {
                    currentStepForm = document.createElement('az-register-person-step6');
                    formContainer.appendChild(currentStepForm);
                    break;
                }
            case '7':
                currentStepForm = document.createElement('az-register-company-step7');
                formContainer.appendChild(currentStepForm);
                break;
            default:
                if (this.hasAttribute('company')) {
                    currentStepForm = document.createElement('az-register-company-step1');
                    formContainer.appendChild(currentStepForm);
                    break;
                } else {
                    currentStepForm = document.createElement('az-register-person-step1');
                    formContainer.appendChild(currentStepForm);
                    break;
                }
        }

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttonsContainer');

        const backButton = document.createElement('az-button');
        backButton.classList.add('backButton');
        if (currentStep == '1') {
            backButton.setAttribute('href', '../../../../../index.html')
        } else {
            let prevPage = 'Step' + (parseInt(currentStep - 1)) + '.html';
            backButton.setAttribute('href', prevPage)
        }
        backButton.setAttribute('borderless', '');
        backButton.setAttribute('no-icon', '');
        backButton.textContent = 'Voltar';

        const nextButton = document.createElement('az-button');
        nextButton.classList.add('nextButton');
        nextButton.textContent = 'Próximo';

        if (currentStep == '6') {
            if (this.hasAttribute('company')) {
                let nextPage = 'Step' + (parseInt(currentStep) + 1) + '.html';
                nextButton.setAttribute('href', nextPage)
            } else {
                nextButton.setAttribute('href', '../../Splash/Splash.html')
            }
        } else {
            let nextPage = 'Step' + (parseInt(currentStep) + 1) + '.html';
            nextButton.setAttribute('href', nextPage)

            if (currentStep == '7') {
                nextButton.textContent = 'Início';
                nextButton.setAttribute('href', '../../../../../index.html')
                backButton.setAttribute('href', '../../../../../index.html')
            }
        }

        nextButton.setAttribute('borderless', '');
        nextButton.setAttribute('blue', '');

        buttonsContainer.appendChild(backButton);
        buttonsContainer.appendChild(nextButton);

        formContainer.appendChild(buttonsContainer);
        rightDiv.appendChild(formContainer);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(rightDiv);
    }
}