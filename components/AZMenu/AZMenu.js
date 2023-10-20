function updateStyle(elem) {
    const style = elem.shadowRoot.querySelector('style');

    style.textContent = `
    .menuContainer {
        position: absolute;
        overflow: hidden;
        height: 100vh;
        width: ${elem.hasAttribute('open') ? '190px' : '54.91px'};
        background-color: rgba(255, 255, 255, 1);
    }

    .logoContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
        height: 38px;
        border-bottom: 1px solid rgba(231, 237, 242, 1);
    }

    .logo {
        ${elem.hasAttribute('open') ? 'width: 97.39px; height: 38px;' : 'width: 22.91px; height: 20.91px;'}
    }
`;

    const menuOptions = [
        "Dashboard",
        "Oportunidades",
        "Produtos",
        "Clientes",
        "Propostas"
    ];

    const activeOption = elem.getAttribute('active');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logoContainer');

    const logo = document.createElement('img');
    logo.classList.add('logo');
    elem.hasAttribute('open') ? logo.setAttribute('src', 'assets/images/logo1.png') : logo.setAttribute('src', 'assets/images/logo.png');

    const menu = document.createElement('nav');
    menu.classList.add('menu');

    menuOptions.forEach((option) => {
        const tab = document.createElement('az-menu-item');
        tab.setAttribute('name', option);
        if (option.toLowerCase() === activeOption.toLowerCase()) {
            tab.setAttribute('active', '');
        }
        menu.appendChild(tab);
    });

    const tabs = menu.querySelectorAll('az-menu-item');
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((tab) => {
                tab.removeAttribute('active');
            });
            tab.setAttribute('active', '');
        });
    });

    logoContainer.appendChild(logo);

    menuContainer.appendChild(logoContainer);
    menuContainer.appendChild(menu);

    elem.shadowRoot.appendChild(style);
    elem.shadowRoot.appendChild(menuContainer);
}

export class AZMenu extends HTMLElement {
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