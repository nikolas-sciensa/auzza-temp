function updateStyle(elem) {
    const style = elem.shadowRoot.querySelector('style');

    style.textContent = `
            .selectContainer {
                display: flex;
                align-items: center;
            }

            .select {
                -webkit-appearance: none;
                -moz-appearance: none;
                border: 1px solid rgba(181, 176, 199, 1);
                padding: 10px;
                gap: 10px;
                margin-top: 10px;
                margin-bottom: 10px;
                flex: 1;
                background: rgba(255, 255, 255, 0.3);
                color: ${elem.hasAttribute('form') ? 'rgba(39, 14, 79, 0.5);' : 'rgba(42, 15, 84, 1);' }
                background-image:  ${elem.hasAttribute('registration') ? `url('../../../../../assets/images/chevronDown.png')` : `url('../../assets/images/chevronDown.png')` };
                background-repeat: no-repeat;
                background-position: center right 10px;
                background-size: 16px 16px;
            }

            select::-ms-expand {
                display: none;
              }
        `;

        const options = elem.hasAttribute('options') ? elem.getAttribute('options').split(',') : [];
        
        const optionElement = document.createElement('option');
        optionElement.value = '';
        optionElement.selected = true;
        optionElement.hidden = true;
        optionElement.textContent = elem.hasAttribute('placeholder') ? elem.getAttribute('placeholder') : 'Selecione uma opção';
        
        const selectContainer = document.createElement('div');
        selectContainer.classList.add('selectContainer');
        
        const select = document.createElement('select');
        select.classList.add('select');
        
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            select.appendChild(optionElement);
        });

        select.appendChild(optionElement);
        selectContainer.appendChild(select);

        elem.shadowRoot.appendChild(style);
        elem.shadowRoot.appendChild(selectContainer);
}

export class AZSelect extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        

        shadowRoot.appendChild(style);
    }

    connectedCallback() {
        updateStyle(this);
    }
}