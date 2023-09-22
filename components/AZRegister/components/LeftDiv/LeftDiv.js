export class AZRegisterLeftDiv extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .leftDiv {
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(14.85deg, #180930 -5.1%, #2A0F54 67.59%);
                height: 15.375vh;
                width: 100vw;
                min-width: 300px;
            }

            .logoContainer {
                display: none;
            }

            .logo {
                display: none;
            }

            .background {
                display: none;
            }
            
            @media (min-width: 768px) {
                .leftDiv {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(14.85deg, #180930 -5.1%, #2A0F54 67.59%);
                    min-height: 100vh;
                    float: left;
                    width: 33.359375vw;
                }

                .logoContainer {
                    display: block;
                    position: fixed;
                    top: 64px;
                    align-items: center;
                    justify-content: center;
                }

                .logo {
                    display: block;
                    width: 103.34px;
                    height: 22.75px;
                }

                .stepsContainer {
                    padding: 64px;
                    align-items: center;
                    justify-content: center;
                }

                .background {
                    display: block;
                    position: fixed;
                    height: 237.51px;
                    bottom: 0;
                    left: 0;
                }
            }
        `;

        const currentStep = this.getAttribute('currentStep');

        const leftDiv = document.createElement('div');
        leftDiv.classList.add('leftDiv');

        const logoContainer = document.createElement('div');
        logoContainer.classList.add('logoContainer');

        const logo = document.createElement('img');
        logo.classList.add('logo');

        const stepsContainer = document.createElement('div');
        stepsContainer.classList.add('stepsContainer');

        const steps = document.createElement('az-register-steps');
        steps.setAttribute('currentStep', currentStep);
        if (this.hasAttribute('company')) steps.setAttribute('company', '');

        const background = document.createElement('img');
        background.classList.add('background');

        logo.src = '../../../../../assets/images/loginlogo.png';
        background.src = '../../../../../assets/images/registerbackground.png';

        logoContainer.appendChild(logo);
        stepsContainer.appendChild(steps);

        leftDiv.appendChild(logoContainer);
        leftDiv.appendChild(stepsContainer);
        leftDiv.appendChild(background);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(leftDiv);
    }
}