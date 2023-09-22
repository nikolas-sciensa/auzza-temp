export class AZRegisterStep extends HTMLElement {
    constructor() {
        super(); 

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .stepContainer {
                user-select: none;
                display: block;
                flex-direction: column;
                color: ${this.hasAttribute('current') || this.hasAttribute('done') ? `rgba(34, 221, 227, 1)` : `rgba(255, 255, 255, 1)`};
            }

            .stepText {
                display: none;
            }
            
            .stepNumber {
                align-items: center;
                text-align: center;
                min-width: 23.65px;
                max-width: 23.65px;
                min-height: 23.65px;
                max-height: 23.65px;
                font-size: 15.76px;
                line-height: 23.65px;
                border: 1.31px solid ${this.hasAttribute('current') || this.hasAttribute('done') ? `rgba(34, 221, 227, 1)` : `rgba(255, 255, 255, 1)`};
                ${this.hasAttribute('done') ? `background: rgba(34, 221, 227, 1);` : ``};
            }

            .stepIcon {
                margin-top: 4px;
                width: 15.76px;
                height: 15.76px;
            }

            @media (min-width: 576px) {
                .stepContainer {
                    display: block;
                    flex-direction: column;
                    min-width: 60px;
                    margin-right: 10px;
                    margin-left: 10px;
                    color: ${this.hasAttribute('current') || this.hasAttribute('done') ? `rgba(34, 221, 227, 1)` : `rgba(255, 255, 255, 1)`};
                }

                .stepNumber {
                    margin-right: 8px;
                    align-items: center;
                    text-align: center;
                    min-width: 23.65px;
                    max-width: 23.65px;
                    min-height: 23.65px;
                    max-height: 23.65px;
                    font-size: 15.76px;
                    line-height: 23.65px;
                    border: 1.31px solid ${this.hasAttribute('current') || this.hasAttribute('done') ? `rgba(34, 221, 227, 1)` : `rgba(255, 255, 255, 1)`};
                    ${this.hasAttribute('done') ? `background: rgba(34, 221, 227, 1);` : ``};
                }
    
                .stepText {
                    display: flex;
                    text-align: center;
                    justify-content: center;
                    margin-left: -50%;
                    margin-top: 7px;
                    font-family: Inter;
                    font-size: 11px;
                    font-weight: 500;
                    line-height: 13px;
                    letter-spacing: 0.06em;
                    text-align: left;
                }
    
                .stepIcon {
                    margin-top: 4px;
                    width: 15.76px;
                    height: 15.76px;
                }
            }

            @media (min-width: 768px) {
                .stepContainer {
                    display: flex;
                    flex-direction: row;
                    min-width: fit-content;
                    width: 100%;
                    color: ${this.hasAttribute('current') || this.hasAttribute('done') ? `rgba(34, 221, 227, 1)` : `rgba(255, 255, 255, 1)`};
                }
    
                .stepText {
                    margin-left: 8px;
                    margin-top: 7px;
                    font-family: Inter;
                    font-size: 11px;
                    font-weight: 500;
                    line-height: 13px;
                    letter-spacing: 0.06em;
                    margin-right: 0;
                    margin-left: 0;
                    text-align: left;
                    min-width: inherit;
                }
            }
        `;

        const stepContainer = document.createElement('div');
        stepContainer.classList.add('stepContainer');

        const stepNumber = document.createElement('div');
        stepNumber.classList.add('stepNumber');
        stepNumber.textContent = this.getAttribute('step');

        const stepText = document.createElement('span');
        stepText.classList.add('stepText');
        stepText.textContent = this.textContent;

        const stepIcon = document.createElement('img');
        stepIcon.src = '/assets/images/done.png';
        stepIcon.classList.add('stepIcon');

        if (this.hasAttribute('done')) {
            stepNumber.textContent = '';
            stepNumber.appendChild(stepIcon);
        }
        
        stepContainer.appendChild(stepNumber);
        stepContainer.appendChild(stepText);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(stepContainer);
    }
}