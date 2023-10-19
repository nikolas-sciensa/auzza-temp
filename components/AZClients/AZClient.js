function updateStyle(elem) {

    const style = elem.shadowRoot.querySelector('style');
    style.textContent = `
        .clientContainer {
            display: flex;
            width: calc(100% - 28px);
            justify-content: center;
            align-items: center;
            margin: 0 14.4px;
            height: 63px;
            ${elem.hasAttribute('even') ? 'background: rgba(250, 250, 250, 1);' : ''}
            
        }

        .clientCheckbox {
            margin: 16.65px 14.4px;
            width: 14.4px;
            height: 14.4px;
        }

        .clientNameContainer {
            width: 33%;
        }

        .clientName {
            font-size: 12px;
            font-weight: 500;
        }

        .totalInvestedContainer {
            width: 16%;
        }

        .totalInvested {
            font-size: 12px;
            font-weight: 500;
        }

        .totalValueContainer {
            width: 16%;
        }

        .totalValue {
            font-size: 12px;
            font-weight: 500;
        }

        .totalActionsContainer {
            width: 16%;
        }

        .totalActions {
            font-size: 12px;
            font-weight: 500;
        }

        .detailsButtonContainer {
            width: 16%;
        }
    `;
    const clientId = elem.getAttribute('clientId');

    const clientContainer = document.createElement('div');
    clientContainer.classList.add('clientContainer');
    clientContainer.id = 'client';

    const clientCheckbox = document.createElement('input');
    clientCheckbox.classList.add('clientCheckbox');
    clientCheckbox.type = 'checkbox';

    const clientNameContainer = document.createElement('div');
    clientNameContainer.classList.add('clientNameContainer');

    const clientName = document.createElement('p');
    clientName.classList.add('clientName');
    clientName.textContent = elem.getAttribute('name');

    const totalInvestedContainer = document.createElement('div');
    totalInvestedContainer.classList.add('totalInvestedContainer');

    const totalInvested = document.createElement('p');
    totalInvested.classList.add('totalInvested');
    totalInvested.textContent = 'R$ ' + elem.getAttribute('totalInvested');

    const totalValueContainer = document.createElement('div');
    totalValueContainer.classList.add('totalValueContainer');

    const totalValue = document.createElement('p');
    totalValue.classList.add('totalValue');
    totalValue.textContent = 'R$ ' + elem.getAttribute('totalValue');

    const totalActionsContainer = document.createElement('div');
    totalActionsContainer.classList.add('totalActionsContainer');

    const totalActions = document.createElement('p');
    totalActions.classList.add('totalActions');
    totalActions.textContent = elem.getAttribute('totalActions');

    const detailsButtonContainer = document.createElement('div');
    detailsButtonContainer.classList.add('detailsButtonContainer');

    const detailsButton = document.createElement('az-button');
    detailsButton.classList.add('detailsButton');
    detailsButton.setAttribute('href', 'clientDetail.html');
    detailsButton.textContent = 'Ver detalhes';
    detailsButton.setAttribute('borderless', '');

    detailsButton.addEventListener('click', () => {
        localStorage.setItem('clientId', clientId);
    });

    clientNameContainer.appendChild(clientName);
    totalInvestedContainer.appendChild(totalInvested);
    totalValueContainer.appendChild(totalValue);
    totalActionsContainer.appendChild(totalActions);
    detailsButtonContainer.appendChild(detailsButton);

    clientContainer.appendChild(clientCheckbox);
    clientContainer.appendChild(clientNameContainer);
    clientContainer.appendChild(totalInvestedContainer);
    clientContainer.appendChild(totalValueContainer);
    clientContainer.appendChild(totalActionsContainer);
    clientContainer.appendChild(detailsButtonContainer);

    elem.shadowRoot.appendChild(style);
    elem.shadowRoot.appendChild(clientContainer);
}

export class AZClient extends HTMLElement {
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