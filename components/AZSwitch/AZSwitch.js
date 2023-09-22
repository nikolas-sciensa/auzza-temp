export class AZSwitch extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .container {
                width: calc(10vw);
            }

            .switchContainer {
                display: flex;
                align-items: center;
                width: 100%;
                height: 24px;
            }

            .switchText {
                font-size: 14px;
                font-weight: 500;
                margin-left: 14px;
            }

            .azSwitch {
                position: relative;
                display: inline-block;
                width: 36px;
                height: 14px;
            }

            .switchInput {
                opacity: 0;
                width: 0;
                height: 0;
            }

            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(223, 223, 223, 1);
                -webkit-transition: .2s;
                transition: .2s;
                border: 1px solid rgba(182, 166, 235, 1);
                border-radius: 14px;
            }

            .slider:before {
                position: absolute;
                content: "";
                height: 20px;
                width: 20px;
                left: 13px;
                bottom: -5px;
                background-color: rgba(255, 255, 255, 1);
                border: 1px solid rgba(182, 166, 235, 1);
                border-radius: 50%;
                -webkit-transition: .2s;
                transition: .2s;
            }

            .switchInput:checked + .slider:before {
                position: absolute;
                content: "";
                height: 20px;
                width: 20px;
                left: -1px;
                bottom: -5px;
                background-color: rgba(255, 255, 255, 1);
                border: 1px solid rgba(182, 166, 235, 1);
                border-radius: 50%;
                -webkit-transition: .2s;
                transition: .2s;
            }

            .switchInput:checked + .slider {
                background-color: rgba(94, 92, 230, 1);
            }

            .switchInput:focus + .slider {
                box-shadow: 0 0 1px rgba(94, 92, 230, 1);
            }
        `;
        const container = document.createElement('div');
        container.classList.add('container');

        const switchContainer = document.createElement('div');
        switchContainer.classList.add('switchContainer');

        const switchText = document.createElement('span');
        switchText.classList.add('switchText');
        switchText.textContent = this.textContent;

        const azSwitch = document.createElement('label');
        azSwitch.classList.add('azSwitch');

        const switchInput = document.createElement('input');
        switchInput.classList.add('switchInput');
        switchInput.type = 'checkbox';

        const slider = document.createElement('span');
        slider.classList.add('slider');

        switchContainer.appendChild(azSwitch);
        azSwitch.appendChild(switchInput);
        azSwitch.appendChild(slider);
        switchContainer.appendChild(switchText);

        container.appendChild(switchContainer);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(container);
    }
}