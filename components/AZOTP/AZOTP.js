export class AZOTP extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .numbersContainer {
                display: flex;
                margin-bottom: 28px;
            }

            .input {
                height: 10px;
                width: 10px;
                border: 1px solid rgba(181, 176, 199, 1);
                border-radius: 2px;
                padding: 10px;
                margin-right: 10px;
            }
        `;

        const numbersContainer = document.createElement('div');
        numbersContainer.classList.add('numbersContainer');

        const input1 = document.createElement('input');
        input1.classList.add('input');
        input1.setAttribute('maxlength', '1');

        const input2 = document.createElement('input');
        input2.classList.add('input');
        input2.setAttribute('maxlength', '1');

        const input3 = document.createElement('input');
        input3.classList.add('input');
        input3.setAttribute('maxlength', '1');

        const input4 = document.createElement('input');
        input4.classList.add('input');
        input4.setAttribute('maxlength', '1');

        const input5 = document.createElement('input');
        input5.classList.add('input');
        input5.setAttribute('maxlength', '1');

        const input6 = document.createElement('input');
        input6.classList.add('input');
        input6.setAttribute('maxlength', '1');

        input1.addEventListener('input', () => {
            if (input1.value.length == 1) {
                input2.focus();
            }
        });

        input2.addEventListener('input', () => {
            if (input2.value.length == 1) {
                input3.focus();
            }
        });

        input3.addEventListener('input', () => {
            if (input3.value.length == 1) {
                input4.focus();
            }
        });

        input4.addEventListener('input', () => {
            if (input4.value.length == 1) {
                input5.focus();
            }
        }); 

        input5.addEventListener('input', () => {
            if (input5.value.length == 1) {
                input6.focus();
            }
        });
        
        numbersContainer.appendChild(input1);
        numbersContainer.appendChild(input2);
        numbersContainer.appendChild(input3);
        numbersContainer.appendChild(input4);
        numbersContainer.appendChild(input5);
        numbersContainer.appendChild(input6);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(numbersContainer);
    }
}