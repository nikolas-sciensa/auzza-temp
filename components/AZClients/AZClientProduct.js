function updateStyle(elem) {

    const style = elem.shadowRoot.querySelector('style');

    style.textContent = `
        .productContainer {
            display: flex;
            align-items: center;
            width: 100%;
            height: 66.33px;
        }

        .chevron {
            margin-left: 8px;
            margin-top: 4px;
            width: 24px;
            height: 24px;
            transform: rotate(270deg);
        }

        .graphic {
            margin-left: 26px;
            width: 58.32px;
            height: 58.32px;
        }

        .details {
            background-color: rgba(255, 255, 255, 1);
        }

        .allButtonsContainer {
            padding-right: 12px;
            padding-left: 12px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .buttonsContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 50%;
        }

        .datesContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 40%;
        }

        .dateContainer {
            width: 45%;
        }

        .graphicContainer {
            display: flex;
            justify-content: center;
        }

        .graphic2 {
            margin-top: 10px;
            width: 721px;
            height: 304.17px;
        }

        .wrapper {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            height: 66.33px;
        }

        .productValue {
            font-family: Poppins;
            font-size: 14px;
            font-weight: 700;
            margin-left: 26px;
            margin-right: 26px;
        }

        .productTitle {
            font-size: 20px;
            font-weight: 400;
        }
    `;

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const productContainer = document.createElement('div');
    productContainer.classList.add('productContainer');

    const chevron = document.createElement('img');
    chevron.classList.add('chevron');
    chevron.src = 'assets/images/chevronUp.png';

    const graphic = document.createElement('img');
    graphic.classList.add('graphic');
    graphic.src = 'assets/images/client-product-image.png';

    const productValue = document.createElement('p');
    productValue.classList.add('productValue');
    productValue.textContent = elem.getAttribute('productValue');

    const productTitle = document.createElement('p');
    productTitle.classList.add('productTitle');
    productTitle.textContent = elem.getAttribute('productTitle');

    productContainer.appendChild(chevron);
    productContainer.appendChild(graphic);
    productContainer.appendChild(productValue);
    productContainer.appendChild(productTitle);

    const details = document.createElement('div');
    details.classList.add('details');

    const graphicContainer = document.createElement('div');
    graphicContainer.classList.add('graphicContainer');

    const graphic2 = document.createElement('img');
    graphic2.classList.add('graphic2');
    graphic2.src = 'assets/images/graphic.png';

    graphicContainer.appendChild(graphic2);

    details.appendChild(graphicContainer);

    const allButtonsContainer = document.createElement('div');
    allButtonsContainer.classList.add('allButtonsContainer');

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttonsContainer');

    const datesContainer = document.createElement('div');
    datesContainer.classList.add('datesContainer');

    const date1Container = document.createElement('div');
    date1Container.classList.add('dateContainer');

    const date1 = document.createElement('az-input');
    date1.setAttribute('id', 'productDate');

    date1Container.appendChild(date1);

    const date2Container = document.createElement('div');
    date2Container.classList.add('dateContainer');

    const date2 = document.createElement('az-input');
    date2.setAttribute('id', 'productDate');

    date2Container.appendChild(date2);

    const downloadButton = document.createElement('az-button');
    downloadButton.classList.add('downloadButton');
    downloadButton.setAttribute('download', '');
    downloadButton.textContent = 'PDF';

    const shareButton = document.createElement('az-button');
    shareButton.classList.add('shareButton');
    shareButton.setAttribute('share', '');
    shareButton.textContent = 'Compartilhar';

    const detailsButton = document.createElement('az-button');
    detailsButton.classList.add('detailsButton');
    detailsButton.setAttribute('href', 'productDetail.html');
    detailsButton.textContent = 'Ver Detalhes';

    datesContainer.appendChild(date1Container);
    datesContainer.appendChild(date2Container);

    allButtonsContainer.appendChild(datesContainer);
    buttonsContainer.appendChild(downloadButton);
    buttonsContainer.appendChild(shareButton);
    buttonsContainer.appendChild(detailsButton);
    allButtonsContainer.appendChild(buttonsContainer);

    details.appendChild(allButtonsContainer);

    productContainer.addEventListener('click', () => {
        if (wrapper.style.overflow == 'hidden') {
            wrapper.style.overflow = 'visible';
            wrapper.style.height = 'auto';
            chevron.style.transform = 'rotate(0deg)';
        } else {
            wrapper.style.overflow = 'hidden';
            wrapper.style.height = '66.33px';
            chevron.style.transform = 'rotate(270deg)';
        }
    });

    productContainer.click();

    wrapper.appendChild(productContainer);
    wrapper.appendChild(details);

    elem.shadowRoot.appendChild(style);
    elem.shadowRoot.appendChild(wrapper);
}

export class AZClientProduct extends HTMLElement {
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