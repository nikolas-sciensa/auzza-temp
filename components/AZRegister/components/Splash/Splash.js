export class AZSplash extends HTMLElement {
    constructor() {
        super();

    
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .splashContainer {
                user-select: none;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100vw;
                height: 100vh;
                background: rgba(231, 237, 242, 1);
                background-image: url('../../../../assets/images/registerbackground.png');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: -335px 0px;
            }

            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .icon {
                width: 40px;
                height: 40px;
            }

            .text {
                font-size: 20px;
                font-weight: 700;
                line-height: 24px;
                margin-top: 12px;
                margin-bottom: 0;
            }

            .subText {
                font-size: 14px;
                font-weight: 500;
                line-height: 17px;
                margin-top: 8px;
            }

            .splashImage {
                position: fixed;
                overflow: hidden;
                height: 100vh;
            }

            @media (min-width: 576px) {
                .splashImage {
                    left: -70vw;
                }
            }

            @media (min-width: 1024px) {
                .splashImage {
                    left: -322px;
                }
            }
        `;

        const splashContainer = document.createElement('div');
        splashContainer.classList.add('splashContainer');

        const container = document.createElement('div');
        container.classList.add('container');

        const icon = document.createElement('img');
        icon.classList.add('icon');
        icon.src = '../../../../assets/images/match.png';
        icon.draggable = false;

        const text = document.createElement('p');
        text.classList.add('text');
        text.textContent = 'Sua conta foi criada.';

        const subText = document.createElement('p');
        subText.classList.add('subText');
        subText.textContent = 'Você seja direcionado para a Dashboard.';

        container.appendChild(icon);
        container.appendChild(text);
        container.appendChild(subText);

        splashContainer.appendChild(container);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(splashContainer);
    }
}