function updateStyle(elem) {
    const style = elem.shadowRoot.querySelector('style');

    style.textContent = `
            .buttonContainer {
                display: flex;
                ${elem.hasAttribute('borderless') ? '' : "border: 1px solid rgba(24, 9, 48, 1);"}
                align-items: center;
                text-decoration: none;
            }
            
            .button {
                cursor: pointer;
                width: 100%;
                ${elem.hasAttribute('borderless') ? 'max-height: 36px;' : 'height: 35px;'}
                padding: 10px;
                border: 1px;
                text-align: ${elem.hasAttribute('center') ? 'center' : 'left'};
                ${elem.hasAttribute('blue') ? 'background: rgba(34, 221, 227, 1);' : 'background: rgba(255, 255, 255, 0);'}
                ${elem.hasAttribute('purple') ? 'background: rgba(42, 15, 84, 1); color: rgba(255, 255, 255, 1);' : 'background: rgba(255, 255, 255, 0);'}
                min-width: max-content;
                flex: 1;
            }

            .buttonIcon {
                margin-left: 8px;
                width: 16px;
                height: 16px;
                ${elem.hasAttribute('center') ? '' : 'float: right;'}
            }
        `;

    const buttonContainer = document.createElement('a');
    buttonContainer.classList.add('buttonContainer');
    buttonContainer.href = elem.hasAttribute('href') ? elem.getAttribute('href') : '#';

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = elem.textContent;

    const buttonIcon = document.createElement('img');
    buttonIcon.src = '/assets/images/arrow-right.png';
    buttonIcon.classList.add('buttonIcon');

    if (elem.hasAttribute('download')) {
        buttonIcon.src = '/assets/images/download.png';
    }

    if (elem.hasAttribute('share')) {
        buttonIcon.src = '/assets/images/share.png';
    }

    if (elem.hasAttribute('arrowBack')) {
        buttonIcon.src = '/assets/images/arrow-right.png';
        buttonIcon.style.transform = 'rotate(180deg)';
    }

    if (elem.hasAttribute('send')) {
        buttonIcon.src = '/assets/images/send.png';
    }

    if (!elem.hasAttribute('no-icon')) {
        button.appendChild(buttonIcon);
    }

    buttonContainer.appendChild(button);

    elem.shadowRoot.appendChild(style);
    elem.shadowRoot.appendChild(buttonContainer);
}

export class AZButton extends HTMLElement {
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
