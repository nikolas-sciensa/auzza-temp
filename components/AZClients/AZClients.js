export class AZClients extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .clientsContainer {
                display: flex;
                user-select: none;
                width: 100vw;
                min-width: 300px;
                height: 100vh;
                flex: 1;
                background: linear-gradient(0deg, #E7EDF2, #E7EDF2),
                            linear-gradient(0deg, #6942E8, #6942E8);
            }

            .menuContainer {
                height: 100vh;
                ${this.hasAttribute('open') ? 'width: 190px;' : 'width: 54.91px;'}
            }
        `;
        const isMenuOpen = this.hasAttribute('open');
        const isDetails = this.hasAttribute('details');
        
        const clientsContainer = document.createElement('div');
        clientsContainer.classList.add('clientsContainer');

        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menuContainer');

        const menu = document.createElement('az-menu');
        isMenuOpen ? menu.setAttribute('open', '') : null;
        menu.setAttribute('active', this.getAttribute('active'));

        const rightDiv = document.createElement('az-clients-right-div');
        isMenuOpen ? rightDiv.setAttribute('open', '') : null;
        if (isDetails) {
            const productId = this.getAttribute('productId');
            rightDiv.setAttribute('details', '');
            rightDiv.setAttribute('productId', productId);
        }

        menuContainer.appendChild(menu);
        clientsContainer.appendChild(menuContainer);
        clientsContainer.appendChild(rightDiv);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(clientsContainer);
    }
}