function updateStyle(elem) {
    const style = elem.shadowRoot.querySelector('style');

    style.textContent = `
    .menuItem {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;
        margin-top: 8px;
        border-left: 4px solid rgba(255, 255, 255, 0);
    }
    
    .menuItem:hover {
        cursor: pointer;
        background: linear-gradient(0deg, rgba(231, 237, 242, 0.2), rgba(231, 237, 242, 0.2)),
        linear-gradient(0deg, #FFFFFF, #FFFFFF);
    }
    
    .active {
        border-left: 4px solid rgba(105, 66, 232, 1);
        background: linear-gradient(0deg, #E7EDF2, #E7EDF2),
                    linear-gradient(0deg, #6942E8, #6942E8);
    }
    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        padding: 10px;
        background-color: rgba(255, 255, 255, 0);
        cursor: pointer;
    }

    .text {
        font-size: 14px;
        font-weight: 400;
        line-height: 16.94px;
    }
`;

    const itemName = elem.getAttribute('name').toLowerCase();
    const active = elem.hasAttribute('active');

    const menuItem = document.createElement('a');
    menuItem.classList.add('menuItem');
    menuItem.setAttribute('id', 'menuItem');
    active ? menuItem.classList.add('active') : null;

    switch (active) {
        case "Clientes":
            menuItem.setAttribute('href', 'clients.html');
            break;

        case "Produtos":
            menuItem.setAttribute('href', 'products.html');
            break;

        default:
            menuItem.setAttribute('href', '#');
            break;
    }

    const icon = document.createElement('img');
    icon.classList.add('icon');
    icon.setAttribute('src', 'assets/images/' + itemName + '.png');

    const text = document.createElement('p');
    text.classList.add('text');
    text.textContent = elem.getAttribute('name');

    menuItem.appendChild(icon);
    menuItem.appendChild(text);

    elem.shadowRoot.appendChild(style);
    elem.shadowRoot.appendChild(menuItem);
}
export class AZMenuItem extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');


        shadowRoot.appendChild(style);
    }

    connectedCallback() {
    }
}