function updateStyle(elem) {

    const style = elem.shadowRoot.querySelector('style');
    const display = elem.hasAttribute('gallery') ? 'gallery' : 'collapsed';
    const colorVariant = elem.getAttribute('colorVariant');
    let color;

    switch (colorVariant) {
        case 'purple':
            color = 'rgba(159, 66, 232, 1)';
            break;

        case 'red':
            color = 'rgba(232, 66, 136, 1)';
            break;

        case 'orange1':
            color = 'rgba(255, 103, 93, 1)';
            break;

        case 'orange2':
            color = 'rgba(232, 126, 66, 1)';
            break;

        default:
            color = 'rgba(105, 66, 232, 1)';
            break;
    }
    style.textContent = `
            ${display === 'gallery' ?
            `
                .productContainer {
                    display: flex;
                    flex-direction: column;
                    background: rgba(255, 255, 255, 1);
                    width: calc(100% - 16px);
                    height: 294px;
                    margin-bottom: 32px;
                }

                .productImageContainer {
                    overflow: hidden;
                    width: 100%;
                    height: 186.84px;
                }

                .productImage {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .productNameContainer {
                    flex-direction: row;
                    margin: 16px;
                    display: flex;
                    justify-content: flex-start;
                    width: 100%;
                    max-height: 16px;
                    flex: 1;
                }
    
                .productName {
                    line-height: 16px;
                    font-size: 16px;
                    font-weight: 700;
                    text-align: left;
                    margin: 0;
                    color: rgba(24, 9, 48, 1);
                }

                .productPriceContainer {
                    margin-left: 16px;
                }

                .soldProduct {
                    font-size: 14px;
                    font-weight: 500;
                    margin: 0;
                }

                .progressBarContainer {
                    width: calc(100% - 32px);
                    margin: 16px;
                    height: 8px;
                    background: rgba(232, 232, 232, 1);
                }

                .left {
                    width: 0;
                    min-height: 8px;
                    background: rgba(105, 66, 232, 1);
                }
                `
            :
            `
                .productContainer {
                    border-left: 9px solid ${color};
                    display: flex;
                    flex-direction: row;
                    width: calc(100% - 9px);
                    height: 104px;
                    background: rgba(255, 255, 255, 1);
                    margin-bottom: 14px;
                }
    
                .chevron {
                    margin-top: 10px;
                    width: 28px;
                    height: 28px;
                }
    
                .productInfoContainer {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    overflow: hidden;
                }
    
                .superiorSpecifityContainer {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: 50%;
                    cursor: pointer;
                }
    
                .inferiorSpecifityContainer {
                    display: flex;
                    flex-direction: row;
                    magin-left: 10px;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: 50%;
                }
    
                .productNameContainer {
                    margin-left: 10px;
                    display: flex;
                    justify-content: flex-start;
                    width: 50%;
                    flex: 1;
                }
    
                .productName {
                    font-size: 20px;
                    font-weight: 400;
                    text-align: left;
                    color: rgba(24, 9, 48, 1);
                }
    
                .leftDivider {
                    border-left: 1px solid rgba(64, 69, 81, 1);
                }
    
                .divider {
                    margin-right: 10px;
                    border-top: 1px solid rgba(212, 212, 212, 1);
                }
    
                .specificityContainer {
                    display: flex;
                    height: calc(100% - 20px);
                    flex-direction: column;
                    justify-content: center;
                    padding-right: 20px;
                    padding-left: 10px;
                }
    
                .specificityText {
                    margin: 0;
                    font-size: 12px;
                    font-weight: 500;
                    text-align: left;
                    color: rgba(132, 132, 132, 1);
                }
    
                .specificityValue {
                    margin: 0;
                    margin-top: 4px;
                    font-size: 12px;
                    font-weight: 500;
                    text-align: left;
                    color: rgba(24, 9, 48, 1);
                }
    
                .active {
                    height: 586px;
                }
    
                .productDetailContainer {
                    width: calc(100% - 10px);
                    min-height: 482px;
                    align-items: center;
                }
    
                .graphicContainer {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }
    
                .graphic {
                    margin-top: 10px;
                    width: 721px;
                    height: 304.17px;
                }
    
                .rentabilityContainer {
                    display: flex;
                    flex-direction: row;
                    margin-top: 18px;
                    width: 100%;
                    align-items: center;
                    justify-content: space-between;
                }
    
                .selectContainer {
                    width: 100%;
                    margin-left: 8px;
                }
    
                .benchmarkContainer {
                    width: 33%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
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
                `
        }
            
        `;

        const productId = elem.getAttribute('productid');

        const productContainer = document.createElement('div');
        productContainer.classList.add('productContainer');
        productContainer.id = 'product'

        const productNameContainer = document.createElement('div');
        productNameContainer.classList.add('productNameContainer');

        const productName = document.createElement('p');
        productName.classList.add('productName');
        productName.textContent = elem.getAttribute('name');

        if (display === 'gallery') {
            const productImageContainer = document.createElement('div');
            productImageContainer.classList.add('productImageContainer');

            const productImage = document.createElement('img');
            productImage.classList.add('productImage');
            productImage.src = elem.getAttribute('image');

            const productPriceContainer = document.createElement('div');
            productPriceContainer.classList.add('productPriceContainer');

            const soldProduct = document.createElement('p');
            soldProduct.classList.add('soldProduct');
            let sold = elem.getAttribute('sold');
            sold = parseFloat(sold).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });

            soldProduct.textContent = 'R$ ' + sold;

            const progressBarContainer = document.createElement('div');
            progressBarContainer.classList.add('progressBarContainer');

            const left = document.createElement('div');
            left.classList.add('left');
            left.style.width = elem.getAttribute('consolidated') + '%';

            progressBarContainer.appendChild(left);

            productPriceContainer.appendChild(soldProduct);
            productNameContainer.appendChild(productName);
            productImageContainer.appendChild(productImage);

            productContainer.appendChild(productImageContainer);
            productContainer.appendChild(productNameContainer);
            productContainer.appendChild(productPriceContainer);
            productContainer.appendChild(progressBarContainer);

        } else {
            const divider = document.createElement('div');
            divider.classList.add('divider');

            const chevron = document.createElement('img');
            chevron.classList.add('chevron');
            chevron.src = 'assets/images/chevronDown.png';

            const productInfoContainer = document.createElement('div');
            productInfoContainer.classList.add('productInfoContainer');

            const superiorSpecifityContainer = document.createElement('div');
            superiorSpecifityContainer.classList.add('superiorSpecifityContainer');

            const inferiorSpecifityContainer = document.createElement('div');
            inferiorSpecifityContainer.classList.add('inferiorSpecifityContainer');

            const montlhyPercentageContainer = document.createElement('div');
            montlhyPercentageContainer.classList.add('specificityContainer');

            const montlhyPercentageText = document.createElement('p');
            montlhyPercentageText.classList.add('specificityText');
            montlhyPercentageText.textContent = 'Perf. Mês';

            const montlhyPercentageValue = document.createElement('p');
            montlhyPercentageValue.classList.add('specificityValue');
            montlhyPercentageValue.textContent = elem.getAttribute('monthlyPerformance') + '%';

            montlhyPercentageContainer.appendChild(montlhyPercentageText);
            montlhyPercentageContainer.appendChild(montlhyPercentageValue);

            const anualPercentageContainer = document.createElement('div');
            anualPercentageContainer.classList.add('specificityContainer');
            anualPercentageContainer.classList.add('leftDivider');

            const anualPercentageText = document.createElement('p');
            anualPercentageText.classList.add('specificityText');
            anualPercentageText.textContent = 'Perf. Ano';

            const anualPercentageValue = document.createElement('p');
            anualPercentageValue.classList.add('specificityValue');
            anualPercentageValue.textContent = elem.getAttribute('yearlyPerformance') + '%';

            anualPercentageContainer.appendChild(anualPercentageText);
            anualPercentageContainer.appendChild(anualPercentageValue);

            const oneYearPercentageContainer = document.createElement('div');
            oneYearPercentageContainer.classList.add('specificityContainer');
            oneYearPercentageContainer.classList.add('leftDivider');

            const oneYearPercentageText = document.createElement('p');
            oneYearPercentageText.classList.add('specificityText');
            oneYearPercentageText.textContent = 'Perf. 12M';

            const oneYearPercentageValue = document.createElement('p');
            oneYearPercentageValue.classList.add('specificityValue');
            oneYearPercentageValue.textContent = elem.getAttribute('twelveMonthsPerformance') + '%';

            oneYearPercentageContainer.appendChild(oneYearPercentageText);
            oneYearPercentageContainer.appendChild(oneYearPercentageValue);

            const minimunApplicationContainer = document.createElement('div');
            minimunApplicationContainer.classList.add('specificityContainer');

            const minimunApplicationText = document.createElement('p');
            minimunApplicationText.classList.add('specificityText');
            minimunApplicationText.textContent = 'Aplicação min';

            const minimunApplicationValue = document.createElement('p');
            minimunApplicationValue.classList.add('specificityValue');
            minimunApplicationValue.textContent = elem.getAttribute('minApplication');

            minimunApplicationContainer.appendChild(minimunApplicationText);
            minimunApplicationContainer.appendChild(minimunApplicationValue);

            const minimunMovementContainer = document.createElement('div');
            minimunMovementContainer.classList.add('specificityContainer');
            minimunMovementContainer.classList.add('leftDivider');

            const minimunMovementText = document.createElement('p');
            minimunMovementText.classList.add('specificityText');
            minimunMovementText.textContent = 'Mov. mínima';

            const minimunMovementValue = document.createElement('p');
            minimunMovementValue.classList.add('specificityValue');
            minimunMovementValue.textContent = elem.getAttribute('minMovimentation');

            minimunMovementContainer.appendChild(minimunMovementText);
            minimunMovementContainer.appendChild(minimunMovementValue);

            const redeemQuotaContainer = document.createElement('div');
            redeemQuotaContainer.classList.add('specificityContainer');
            redeemQuotaContainer.classList.add('leftDivider');

            const redeemQuotaText = document.createElement('p');
            redeemQuotaText.classList.add('specificityText');
            redeemQuotaText.textContent = 'Cota resgate';

            const redeemQuotaValue = document.createElement('p');
            redeemQuotaValue.classList.add('specificityValue');
            redeemQuotaValue.textContent = elem.getAttribute('redeemQuota');

            redeemQuotaContainer.appendChild(redeemQuotaText);
            redeemQuotaContainer.appendChild(redeemQuotaValue);

            const LiquidationContainer = document.createElement('div');
            LiquidationContainer.classList.add('specificityContainer');
            LiquidationContainer.classList.add('leftDivider');

            const LiquidationText = document.createElement('p');
            LiquidationText.classList.add('specificityText');
            LiquidationText.textContent = 'Liquidação';

            const LiquidationValue = document.createElement('p');
            LiquidationValue.classList.add('specificityValue');
            LiquidationValue.textContent = elem.getAttribute('liquidation');

            LiquidationContainer.appendChild(LiquidationText);
            LiquidationContainer.appendChild(LiquidationValue);

            const adminRateContainer = document.createElement('div');
            adminRateContainer.classList.add('specificityContainer');
            adminRateContainer.classList.add('leftDivider');

            const adminRateText = document.createElement('p');
            adminRateText.classList.add('specificityText');
            adminRateText.textContent = 'Taxa admin.';

            const adminRateValue = document.createElement('p');
            adminRateValue.classList.add('specificityValue');
            adminRateValue.textContent = elem.getAttribute('adminFee') + '%';

            adminRateContainer.appendChild(adminRateText);
            adminRateContainer.appendChild(adminRateValue);

            const perfRateContainer = document.createElement('div');
            perfRateContainer.classList.add('specificityContainer');
            perfRateContainer.classList.add('leftDivider');

            const perfRateText = document.createElement('p');
            perfRateText.classList.add('specificityText');
            perfRateText.textContent = 'Taxa perf.';

            const perfRateValue = document.createElement('p');
            perfRateValue.classList.add('specificityValue');
            perfRateValue.textContent = elem.getAttribute('performanceFee');

            perfRateContainer.appendChild(perfRateText);
            perfRateContainer.appendChild(perfRateValue);

            const productDetailContainer = document.createElement('div');
            productDetailContainer.classList.add('productDetailContainer');

            const rentabilityContainer = document.createElement('div');
            rentabilityContainer.classList.add('rentabilityContainer');

            const rentabilityText = document.createElement('p');
            rentabilityText.classList.add('specificityValue');
            rentabilityText.textContent = 'Rentabilidade';

            const benchmarkContainer = document.createElement('div');
            benchmarkContainer.classList.add('benchmarkContainer');

            const benchmarkText = document.createElement('p');
            benchmarkText.classList.add('specificityValue');
            benchmarkText.textContent = 'Benchmark';

            const selectContainer = document.createElement('div');
            selectContainer.classList.add('selectContainer');

            const benchmarkSelect = document.createElement('az-select');
            benchmarkSelect.classList.add('benchmarkSelect');
            benchmarkSelect.setAttribute('placeholder', 'CRI, CRA');

            selectContainer.appendChild(benchmarkSelect);

            benchmarkContainer.appendChild(benchmarkText);
            benchmarkContainer.appendChild(selectContainer);

            rentabilityContainer.appendChild(rentabilityText);
            rentabilityContainer.appendChild(benchmarkContainer);

            productDetailContainer.appendChild(rentabilityContainer);

            const graphicContainer = document.createElement('div');
            graphicContainer.classList.add('graphicContainer');

            const graphic = document.createElement('img');
            graphic.classList.add('graphic');
            graphic.src = 'assets/images/graphic.png';

            graphicContainer.appendChild(graphic);

            productDetailContainer.appendChild(graphicContainer);

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

            detailsButton.addEventListener('click', () => {
                localStorage.setItem('productId', productId);
            });

            datesContainer.appendChild(date1Container);
            datesContainer.appendChild(date2Container);

            allButtonsContainer.appendChild(datesContainer);
            buttonsContainer.appendChild(downloadButton);
            buttonsContainer.appendChild(shareButton);
            buttonsContainer.appendChild(detailsButton);
            allButtonsContainer.appendChild(buttonsContainer);

            productDetailContainer.appendChild(allButtonsContainer);

            productNameContainer.appendChild(productName);
            superiorSpecifityContainer.appendChild(productNameContainer);
            superiorSpecifityContainer.appendChild(montlhyPercentageContainer);
            superiorSpecifityContainer.appendChild(anualPercentageContainer);
            superiorSpecifityContainer.appendChild(oneYearPercentageContainer);
            inferiorSpecifityContainer.appendChild(minimunApplicationContainer);
            inferiorSpecifityContainer.appendChild(minimunMovementContainer);
            inferiorSpecifityContainer.appendChild(redeemQuotaContainer);
            inferiorSpecifityContainer.appendChild(LiquidationContainer);
            inferiorSpecifityContainer.appendChild(adminRateContainer);
            inferiorSpecifityContainer.appendChild(perfRateContainer);

            productInfoContainer.appendChild(superiorSpecifityContainer);
            productInfoContainer.appendChild(divider);
            productInfoContainer.appendChild(inferiorSpecifityContainer);
            productInfoContainer.appendChild(productDetailContainer);

            productContainer.appendChild(chevron);
            productContainer.appendChild(productInfoContainer);

            superiorSpecifityContainer.addEventListener('click', () => {
                if (productContainer.classList.contains('active')) {
                    productContainer.classList.remove('active');
                    chevron.style.transform = 'rotate(0deg)';
                    open = false;
                } else {
                    productContainer.classList.add('active');
                    chevron.style.transform = 'rotate(180deg)';
                    open = true;
                }
            });
        }


        elem.shadowRoot.appendChild(style);
        elem.shadowRoot.appendChild(productContainer);
}

export class AZProduct extends HTMLElement {
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