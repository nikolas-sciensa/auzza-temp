export class AZLoginLeftDiv extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .leftDiv {
                display: flex;
                background: rgba(42, 15, 84, 1);
                min-height: 31vh;
                min-width: 300px;
                align-items: center;
                justify-content: center;
            }

            .logo {
                width: 134px;
            }

            .triangleContainer {
                bottom: 69vh;
                right: 0;
                width: 55px;
                height: 55px;
                position: fixed;
                background: rgba(231, 237, 242, 1);
            }

            .triangle {
                border-top: 55px solid rgba(42, 15, 84, 1);
                border-right: 55px solid transparent;
            }

            .blueTriangleContainer {
                background: rgba(34, 221, 227, 1);
                position: fixed;
                top: 0;
                right: 0;
                width: 100px;
                height: 100px;
            }

            .blueTriangle {
                border-bottom: 100px solid rgba(42, 15, 84, 1);
                border-right: 100px solid transparent;
            }


            @media (min-width: 768px) {
                .leftDiv {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(42, 15, 84, 1);
                    float: left;
                    min-width: 48.95234375vw;
                    height: 100vh;
                }

                .triangleContainer {
                    top: 0;
                    right: 51.04765625vw;
                    width: 179.12px;
                    height: 179.12px;
                    position: fixed;
                    background: rgba(231, 237, 242, 1);
                }

                .triangle {
                    border-top: none;
                    border-bottom: 179.12px solid rgba(42, 15, 84, 1);
                    border-right: 179.12px solid transparent;
                }

                .logo {
                    width: 241.8px;
                }

                .blueTriangleContainer {
                    display: none;
                }

                .blueTriangle {
                    display: none;
                }
            }
        `;

        const triangleContainer = document.createElement('div');
        triangleContainer.classList.add('triangleContainer');

        const triangle = document.createElement('div');
        triangle.classList.add('triangle');

        const blueTriangleContainer = document.createElement('div');
        blueTriangleContainer.classList.add('blueTriangleContainer');

        const blueTriangle = document.createElement('div');
        blueTriangle.classList.add('blueTriangle');

        const leftDiv = document.createElement('div');
        leftDiv.classList.add('leftDiv');

        const logo = document.createElement('img');
        logo.classList.add('logo');
        logo.src = 'assets/images/loginlogo.png';
        
        blueTriangleContainer.appendChild(blueTriangle);
        triangleContainer.appendChild(triangle);
        leftDiv.appendChild(blueTriangleContainer);
        leftDiv.appendChild(triangleContainer);
        leftDiv.appendChild(logo);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(leftDiv);
    }
}