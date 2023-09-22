export class AZUpload extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .Container {
                margin-top: 24px;
            }

            .uploadContainer {
                display: flex;
                align-items: center;
                width: 100%;
                height: 36px;
                border: 1px solid rgba(181, 176, 199, 1);
                color: rgba(42, 15, 84, 1);
            }

            .uploadInput::file-selector-button {
                background: rgba(255, 255, 255, 1);
                border: none;
                border-right: 1px solid rgba(181, 176, 199, 1);
                min-height: 36px;
                min-width: 90px;
                padding: 10px 32px 10px 10px;
                border-radius: 2px 0px 0px 2px;
                cursor: pointer;
                color: rgba(42, 15, 84, 1);
                background-image: ${this.hasAttribute('registration') ? `url('../../../../../assets/images/upload.png')` : `url('../../assets/images/upload.png')`};
                background-repeat: no-repeat;
                background-position: center right 10px;
                background-size: 16px 16px;
            }

            .uploadInput {
                flex: 1;
                min-height: 36px;
                border-radius: 0px 2px 2px 0px;
                background: rgba(255, 255, 255, 1);
            }


            .instructions {
                margin-top: 4px;
                font-weight: 400;
                font-size: 12px;
                color: rgba(39, 14, 79, 0.5);
            }

            .label {
                font-size: 12px;
                font-weight: 600;
                line-height: 14.52px;
            }
        `;

        const container = document.createElement('div');
        container.className = 'Container';

        if (this.hasAttribute('label')) {
            const label = document.createElement('p');
            label.textContent = this.getAttribute('label');
            label.className = 'label';
            container.appendChild(label);
        }

        const div = document.createElement('div');
        div.className = 'uploadContainer';

        const input = document.createElement('input');
        input.className = 'uploadInput';
        input.type = 'file';
        if (this.hasAttribute('id')) input.id = this.getAttribute('id');

        const instructions = document.createElement('span');
        instructions.textContent = 'Adicionar somente formatos PDF, JPG, e PNG (Tamanho máx: 10MB).';
        instructions.className = 'instructions';

        div.appendChild(input);

        container.appendChild(div);
        container.appendChild(instructions);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(container);
    }
}