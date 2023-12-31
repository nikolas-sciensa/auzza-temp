export class AZProducts extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .productsContainer {
                display: flex;
                user-select: none;
                min-width: 100vw;
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

        const productsContainer = document.createElement('div');
        productsContainer.classList.add('productsContainer');

        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menuContainer');

        const menu = document.createElement('az-menu');
        isMenuOpen ? menu.setAttribute('open', '') : null;
        menu.setAttribute('active', this.getAttribute('active'));

        const rightDiv = document.createElement('az-products-right-div');
        isMenuOpen ? rightDiv.setAttribute('open', '') : null;
        if (isDetails) {
            const productId = this.getAttribute('productId');
            rightDiv.setAttribute('details', '');
            rightDiv.setAttribute('productId', productId);
        }
        
        menuContainer.appendChild(menu);
        productsContainer.appendChild(menuContainer);
        productsContainer.appendChild(rightDiv);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(productsContainer);
    }
}