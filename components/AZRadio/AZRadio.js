export class AZRadio extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .container {
                user-select: none;
                margin-bottom: 32px;
                margin-top: 16px;
            }

            .text {
                font-size: 12px;
                font-weight: 500;
                line-height: 14.52px;
                letter-spacing: 0em;
                text-align: left;
            }

            .label {
                display: inline-block;
                cursor: pointer;
                position: relative;
                padding-left: 30px;
                margin-right: 15px;

                font-size: 12px;
                font-weight: 500;
                line-height: 21px;
                letter-spacing: 0em;
                text-align: left;
            }

            .radio {
                display: none;
            }

            .label:before {
                content: "";
                display: inline-block;
            
                width: 17.78px;
                height: 17.78px;
            
                margin-right: 10px;
                position: absolute;
                left: 0;
                bottom: 1px;
                background-color: rgba(231, 237, 242, 0.61);
                border: 1px solid rgba(132, 132, 132, 1);
                border-radius: 4px;
                text-align: center;
            }

            .radio:checked + .label:before{
                content: "\\2713";
                font-size: 16.78px;
                line-height: 17.78px;
                color: rgba(42, 15, 84, 1);
            }
        `;

        const options = this.getAttribute('options').split(',');

        const container = document.createElement('div');
        container.classList.add('container');

        const text = document.createElement('p');
        text.classList.add('text');
        text.textContent = this.getAttribute('text');

        container.appendChild(text);

        options.forEach(option => {
            const radio = document.createElement('input');
            radio.classList.add('radio');
            radio.setAttribute('type', 'radio');
            radio.setAttribute('name', this.getAttribute('name'));
            radio.setAttribute('value', option);
            radio.setAttribute('id', option);

            const label = document.createElement('label');
            label.classList.add('label');
            label.setAttribute('for', option);
            label.textContent = option;

            container.appendChild(radio);
            container.appendChild(label);
        });

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(container);
    }
}