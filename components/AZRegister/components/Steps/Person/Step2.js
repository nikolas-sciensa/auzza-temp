export class AZRegisterPersonStep2 extends HTMLElement {
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

            .inputContainer {
                min-height: 67px;
                display: none;
            }

            .inputInstruction {
                font-size: 12px;
                font-weight: 400;
                line-height: 14.52px;
                margin-bottom: 4px;
            }

            .container {
                display: flex;
                flex-direction: row;
            }

            .option {
                user-select: none;
                padding: 32px 16px;
                border: 1px solid rgba(228, 228, 228, 1);
                margin-bottom: 8px;
                max-height: 195px;
                align-items: center;
                background: rgba(255, 255, 255, 1);
                cursor: pointer;
            }

            .option:hover {
                background: rgba(228, 228, 228, 1);
            }

            .optionImage {
                width: 48px;
                height: 48px;
            }

            .optionText {
                font-size: 12px;
                font-weight: 400;
                line-height: 14.52px;
                text-align: left;
                margin-left: 16px;
                margin-right: 64px;
            }

            .active {
                border: 1px solid rgba(105, 66, 232, 1);
            }
        `;

        const form = document.createElement('form');
        form.classList.add('form');

        const formText = document.createElement('p');
        formText.classList.add('text');
        formText.textContent = 'Vínculo com Agência';

        const instruction = document.createElement('p');
        instruction.classList.add('instruction');
        instruction.textContent = 'Marque se for um profisssional que trabalha em uma agência vinculada a Auzza Capital.';

        const option1 = document.createElement('div');
        option1.classList.add('option');

        const container1 = document.createElement('div');
        container1.classList.add('container');

        const option1Image = document.createElement('img');
        option1Image.classList.add('optionImage');
        option1Image.src = '../../../../../assets/images/isVinculed.png';

        const option1Text = document.createElement('p');
        option1Text.classList.add('optionText');
        option1Text.textContent = 'Sou vinculado a uma agência parceira Auzza';

        container1.appendChild(option1Image);
        container1.appendChild(option1Text);

        option1.appendChild(container1);

        const option2 = document.createElement('div');
        option2.classList.add('option');

        const container2 = document.createElement('div');
        container2.classList.add('container');

        const option2Image = document.createElement('img');
        option2Image.classList.add('optionImage');
        option2Image.src = '../../../../../assets/images/isAutonomous.png';

        const option2Text = document.createElement('p');
        option2Text.classList.add('optionText');
        option2Text.textContent = 'Não tenho vínculo, sou autônomo';

        container2.appendChild(option2Image);
        container2.appendChild(option2Text);

        option2.appendChild(container2);

        form.appendChild(formText);
        form.appendChild(instruction);
        form.appendChild(option1);
        form.appendChild(option2);

        const inputContainer = document.createElement('div');
        inputContainer.classList.add('inputContainer');
        
        const inputText = document.createElement('p');
        inputText.classList.add('inputInstruction');
        inputText.textContent = 'Informe o CNPJ da agência vinculada a Auzza';

        const input = document.createElement('az-input');
        input.classList.add('cnpj');
        input.setAttribute('placeholder', 'CNPJ');
        input.setAttribute('form', '')
        input.setAttribute('maxLength', '18')
        input.setAttribute('id', 'cnpj')
    
        
        inputContainer.appendChild(inputText);
        inputContainer.appendChild(input);
        option1.appendChild(inputContainer);

        option1.addEventListener('click', () => {
            option1.classList.add('active');
            option2.classList.remove('active');
            
            inputContainer.style.display = 'block';
        });

        option2.addEventListener('click', () => {
            option2.classList.add('active');
            option1.classList.remove('active');

            inputContainer.style.display = 'none';
        });

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(form);
    }
}