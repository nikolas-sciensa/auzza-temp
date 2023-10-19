function updateStyle(elem) {

    const style = elem.shadowRoot.querySelector('style');
    style.textContent = `
            .rightDiv {
                width: ${elem.hasAttribute('open') ? 'calc(100vw - 190px)' : 'calc(100vw - 54.91px)'};
                min-width: 300px;
                height: calc(100vh);
                ${elem.hasAttribute('details') ? 'overflow-y: scroll;' : ''}
                overflow-x: hidden;
            }

            .rightDiv::-webkit-scrollbar {
                display: none;
            }

            .productsContainer {
                margin-top: 70px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .productsHeader {
                display: flex;
                margin: 16px 14px;
                width: calc(100% - 28px);
                height: 57px;
                background: rgba(255, 255, 255, 1);
            }

            .productsHeaderText {
                margin-left: 32px;
                font-size: 14px;
                font-weight: 500;
                line-height: 28.5px;
                text-align: left;
            }

            .buttonsContainer {
                display: ${elem.hasAttribute('details') ? 'block' : 'flex'};
                align-items: center;
                justify-content: flex-end;
                margin-left: auto;
                margin-right: 13px;
            }

            .headerButton {
                width: 24px;
                height: 24px;
                margin: 4px;
            }

            .productsListingContainer {
                display: flex;
                width: calc(100% - 28px);
                flex-direction: row;
            }
            
            .productsListing {
                margin-right: 14px;
                width: calc(100% - 14px);
                height: ${elem.hasAttribute('details') ? '319px;' : 'calc(100vh - 15vh);'}
                ${elem.hasAttribute('details') ? 'overflow-y: hidden;' : 'overflow-y: scroll;'}
                ${elem.hasAttribute('details') ? 'background: rgba(255, 255, 255, 1);' : ''}
                ${elem.hasAttribute('details') ? 'display: flex;' : ''}
            }

            .filters {
                width: calc(32% - 14px);
                padding: 0;
                margin: 0;
                height: calc(100vh - 15vh);
                background: rgba(255, 255, 255, 1);
            }

            .grid {
                display: grid; 
                grid-template-columns: repeat(3, 1fr); 
                grid-gap: 16px;
            }

            .backButtonContainer {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: -16px;
            }

            .productImageContainer {
                overflow: hidden;
                width: calc(41%);
                height: 319px;
                margin-right: 29px;
            }

            .basicInfoContainer {
                display: flex;
                flex-direction: column;
                width: calc(59% - 61px);
                height: calc(100% - 57px);
                padding-top: 28.5px;
                padding-bottom: 28.5px;
            }

            .productName {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 16px;   
            }

            .text {
                margin: 0;
                font-size: 12px;
                font-weight: 400;
            }

            .text2 {
                margin-bottom: 8px;
            }   

            .discountRateContainer {
                display: flex;
                align-items: baseline;
            }

            .discountRate {
                margin: 1px 0;
                font-size: 24px;
                font-weight: 600;
            }

            .discountRate2 {
                margin: 1px 0;
                font-size: 16px;
                font-weight: 600;
                margin-left: 4px;
            }

            .anualEquityContainer {
                display: flex;
                align-items: center;
            }

            .tinyTriangle {
                margin-right: 12px;
                width: 8px; 
                height: 8px;
                background: url(./assets/images/littleTriangle.png) no-repeat center; 
            }

            .anualEquityText {
                margin-right: 4px;
                margin-bottom: 6.38px;
                margin-top: 6.38px;
                font-size: 12px;
                font-weight: 300;
            }

            .anualEquity {
                font-size: 12px;
                font-weight: 500;
                margin-bottom: 6.38px;
                margin-top: 6.38px;
            }

            .dueDateContainer {
                margin-top: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 10px;
                height: 54px;
                border: 1px solid rgba(24, 9, 48, 1);
                width: fit-content;
                margin-bottom: 8px;
            }

            .note {
                margin: 0;
                width: 100%;
                font-size: 10px;
                font-weight: 500;
                color: rgba(24, 9, 48, 0.5);
            }

            .unitaryPriceContainer {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: calc(100% - 32px);
                height: 127.33px;
                padding: 16px;
            }

            .unitaryPriceText {
                margin: 0;
                font-size: 14px;
                font-weight: 500;
            }

            .unitaryPrice {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
            }

            .discountRate3Container {
                padding: 6px 10px;
                border: 1px solid rgba(105, 66, 232, 1);
            }

            .discountRate3Text {
                margin: 0;
                font-size: 14px;
                font-weight: 500;
                color: rgba(105, 66, 232, 1);
            }

            .divider {
                margin: 0 16px;
                width: calc(100% - 32px);
                border-bottom: 1px solid rgba(212, 212, 212, 1);
            }

            .salesTextContainer {
                display: flex;
                margin: 0 16px;
                width: calc(100% - 32px);
                align-items: center;
                justify-content: space-between;
            }

            .salesText {
                margin: 18px 0;
                font-size: 16px;
                font-weight: 700;
            }

            .progressBarContainer {
                width: calc(100% - 32px);
                margin: 0 16px;
                height: 8px;
                background: rgba(232, 232, 232, 1);
            }

            .left {
                width: 0;
                min-height: 8px;
                background: rgba(105, 66, 232, 1);
            }

            .totalSold {
                margin: 0 16px;
                margin-bottom: 15px;
                font-size: 14px;
                font-weight: 500;
            }

            .consolidatedPercentage {
                font-size: 12px;
                font-weight: 500;
                text-align: right;
                margin: 18px 32px;
            }

            .buyersText {
                margin: 0;
                text-align: center;
                font-size: 16px;
                font-weight: 700;
                margin-bottom: 18px;
            }

            .iconContainer {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .buyers {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
                margin-right: 6px;
            }

            .buyersIcon {
                width: 24px;
                height: 24px;
            }

            .detailsButtonsContainer {
                margin: 0 16px;
                margin-top: 55.17px;
                display: flex;
                width: calc(100% - 32px);
                align-items: center;
                justify-content: space-evenly;
            }

            .flexContainer {
                display: flex;
                flex-direction: column;
                width: calc(100%);
            }

            .buyContainer {
                margin-top: 14px;
                display: flex;
                flex-direction: column;
                width: calc(100% - 14px);
                height: calc(100% - 333px);
                background: rgba(255, 255, 255, 1);
            }

            .flexContainer2 {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                width: calc(100% - 54px);
                height: max-content;
                padding: 0 27px;
                margin: 37px 0;
                margin-left: 0;
            }

            .buyTitle {
                font-size: 16px;
                font-weight: 700;
                margin: 0;
                margin-bottom: 19px;
            }

            .buyText {
                font-size: 12px;
                font-weight: 500;
                margin: 0;
                margin-bottom: 2px;
            }

            .valueText {
                font-size: 12px;
                font-weight: 400;
                margin: 0;
                margin-bottom: 18px;
            }

            .tokenContainer {
                display: flex;
                align-items: center;
                height: 22px;
                background: rgba(250, 250, 250, 1);
                border: 0.9px solid rgba(227, 227, 227, 0.3);
                padding: 9px 14.4px;
                border-radius: 3.6px;
                margin-bottom: 11px;
            }

            .tokenIcon {
                width: 24px;
                height: 24px;
                margin-right: 9px;
            }

            .value {
                margin: 0;
                margin-top: -1px;
                margin-bottom: 18px;
                font-size: 24px;
                font-weight: 600;
            }

            .realGainValue {
                margin: 0;
                margin-top: -17.2px;
                margin-left: 68px;
                font-size: 12px;
                font-weight: 700;
                color: rgba(15, 147, 15, 1);
            }

            .dividerLeft {
                border-left: 1px solid rgba(212, 212, 212, 1);
            }

            .wrapper {
                display: flex;
                flex-direction: row;
            }

            .disclaimerContainer {
                margin: 28px 27px;
                padding: 18px 15.12px;
                border-top: 1px solid rgba(212, 212, 212, 1);
            }

            .disclaimer {
                margin: 0;
                font-size: 10px;
                font-weight: 400;
            }
            
            .graphicContainer {
                margin-top: 36px;
                background: rgba(255, 255, 255, 1);
                width: calc(100% - 28px);
                height: 594px;
                margin-bottom: 36px;
            }

            .quotationInfoContainer {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 16px;
            }

            .quotationContainer {
                display: flex;
                flex-direction: column;
                width: calc(20% - 16px);
                max-height: 56px;
            }

            .quotationText {
                margin: 0;
                font-size: 16px;
                font-weight: 700;
            }

            .prefix {
                margin: 0;
                margin-top: 12px;
                font-size: 16px;
                font-weight: 400;
            }

            .suffix {
                margin: 0;
                margin-top: 12px;
                margin-left: 52px;
                font-size: 16px;
                font-weight: 400;
            }

            .prefixImg {
                margin-top: 10.5px;
                width: 24px;
                height: 24px;
            }

            .quotation {
                margin: 0;
                margin-left: 28px;
                margin-top: -28px;
                font-size: 24px;
                font-weight: 600;
            }

            .volume {
                margin: 0;
                margin-top: -28px;
                font-size: 24px;
                font-weight: 600;
            }

            .variation {
                margin: 0;
                margin-left: 28px;
                margin-top: -26.75px;
                font-size: 24px;
                font-weight: 600;
                color: rgba(40, 214, 78, 1);
            }

            .lastUpdateContainer {
                padding: 0 16px;
            }

            .lastUpdateText {
                margin: 0;
                font-size: 12px;
                font-weight: 500;
            }

            .divider4 {
                margin: 26px 16px;
            }

            .historyContainer {
                display: flex;
                justify-content: flex-start;
                padding: 0 16px;
                width: calc(100% - 32px);
            }

            .historyButtonsContainer {
                display: flex;
                width: calc(100%);
            }

            .searchContainer1 {
                width: calc(100%);
                margin-right: 16px;
            }

            .searchContainer2 {
                width: calc(100%);
                margin-left: 16px;
            }

            .historySearchContainer {
                display: flex;
                width: calc(100%);
                justify-content: space-between;
                margin-top: -10px;
                margin-bottom: -10px;
            }

            .graphicFiltersContainer {
                display: flex;
                flex-direction: row;
                width: calc(100% - 32px);
                padding: 0 16px;
            }

            .periodContainer {
                margin-top: 23px;
                margin-bottom: 16px;
                display: flex;
                width: calc(50%);
                align-items: center;
            }

            .periodText {
                margin-right: 23px;
                font-size: 12px;
                font-weight: 500;
            }

            .datesContainer {
                display: flex;
                width: calc(50%);
                align-items: center;
                justify-content: flex-end;
            }

            .datesText {
                font-size: 12px;
                font-weight: 500;
                margin-right: 8px;
                margin-left: 4px;
            }

            .graphic {
                margin: 0 16px;
                width: calc(100% - 32px);
                height: 209px;
            }

            .graphicScroll {
                margin: 16px;
                width: calc(100% - 32px);
                height: 84px;
            }

            .aboutCriContainer {
                background: rgba(255, 255, 255, 1);
                width: calc(100% - 28px);
                height: max-content;
                margin-bottom: 36px;
            }

            .aboutCriTitle {
                margin: 16px;
                margin-bottom: 0;
                font-size: 20px;
                font-weight: 500;
            }

            .aboutCriText {
                margin: 28px 26px;
                font-size: 12px;
                font-weight: 400;
            }

            .auzzaImage {
                margin: 16px;
                margin-top: 18px;
                margin-right: 8px;
                width: 51.18px;
                height: 51.18px;
            }

            .issuedBy {
                margin: 0;
                margin-top: -64px;
                margin-left: 80px;
                font-size: 12px;
                font-weight: 500;
            }

            .issuer {
                margin: 0;
                margin-top: -15px;
                margin-left: 153px;
                font-size: 12px;
                font-weight: 400;
            }

            .foundedIn {
                margin: 0;
                margin-top: 4px;
                margin-left: 80px;
                font-size: 12px;
                font-weight: 500;
            }

            .year {
                margin: 0;
                margin-top: -15px;
                margin-left: 143px;
                font-size: 12px;
                font-weight: 400;
                margin-bottom: 25px;
            }
        `;
    let isGrid = false;
    const isMenuOpen = elem.hasAttribute('open');
    const isDetails = elem.hasAttribute('details');

    const products = [
        {
            id: '1',
            name: 'CRI Praiatur 1',
            image: 'assets/images/product.png',
            monthlyPerformance: '3,30',
            yearlyPerformance: '39,32',
            twelveMonthsPerformance: '48,55',
            minApplication: '10.000,00',
            minMovimentation: '5.000,00',
            redeemQuota: 'D+1',
            liquidation: 'D+0',
            adminFee: '0,40',
            performanceFee: '---',
            sold: '63300.44',
            consolidated: '60',
            colorVariant: '',
            unitaryPrice: '25,00',
            discountRate: '1,30',
            anualEquity: '16,77',
            comparatedToCDI: '122,86',
            dueDate: '23/05/2024',
            priceQuotation: '27,30',
            volume: '9,97 mi',
            maxDay: '18,35',
            minDay: '17,05',
            variation: '17,05',
            numBuyers: '43',
            soldTokens: '2.562,00',
        },
        {
            id: '2',
            name: 'CRI Praiatur 1',
            image: 'assets/images/product.png',
            monthlyPerformance: '3,30',
            yearlyPerformance: '39,32',
            twelveMonthsPerformance: '48,55',
            minApplication: '10.000,00',
            minMovimentation: '5.000,00',
            redeemQuota: 'D+1',
            liquidation: 'D+0',
            adminFee: '0,40',
            performanceFee: '---',
            sold: '63300.44',
            consolidated: '60',
            colorVariant: 'purple',
            unitaryPrice: '25,00',
            discountRate: '1,30',
            anualEquity: '16,77',
            comparatedToCDI: '122,86',
            dueDate: '23/05/2024',
            priceQuotation: '27,30',
            volume: '9,97 mi',
            maxDay: '18,35',
            minDay: '17,05',
            variation: '17,05',
            numBuyers: '43',
            soldTokens: '2.562,00',
        },
        {
            id: '2',
            name: 'CRI Praiatur 1',
            image: 'assets/images/product.png',
            monthlyPerformance: '3,30',
            yearlyPerformance: '39,32',
            twelveMonthsPerformance: '48,55',
            minApplication: '10.000,00',
            minMovimentation: '5.000,00',
            redeemQuota: 'D+1',
            liquidation: 'D+0',
            adminFee: '0,40',
            performanceFee: '---',
            sold: '63300.44',
            consolidated: '60',
            colorVariant: 'red',
            unitaryPrice: '25,00',
            discountRate: '1,30',
            anualEquity: '16,77',
            comparatedToCDI: '122,86',
            dueDate: '23/05/2024',
            priceQuotation: '27,30',
            volume: '9,97 mi',
            maxDay: '18,35',
            minDay: '17,05',
            variation: '17,05',
            numBuyers: '43',
            soldTokens: '2.562,00',
        },
        {
            id: '2',
            name: 'CRI Praiatur 1',
            image: 'assets/images/product.png',
            monthlyPerformance: '3,30',
            yearlyPerformance: '39,32',
            twelveMonthsPerformance: '48,55',
            minApplication: '10.000,00',
            minMovimentation: '5.000,00',
            redeemQuota: 'D+1',
            liquidation: 'D+0',
            adminFee: '0,40',
            performanceFee: '---',
            sold: '63300.44',
            consolidated: '60',
            colorVariant: 'orange1',
            unitaryPrice: '25,00',
            discountRate: '1,30',
            anualEquity: '16,77',
            comparatedToCDI: '122,86',
            dueDate: '23/05/2024',
            priceQuotation: '27,30',
            volume: '9,97 mi',
            maxDay: '18,35',
            minDay: '17,05',
            variation: '17,05',
            numBuyers: '43',
            soldTokens: '2.562,00',
        },
        {
            id: '2',
            name: 'CRI Praiatur 1',
            image: 'assets/images/product.png',
            monthlyPerformance: '3,30',
            yearlyPerformance: '39,32',
            twelveMonthsPerformance: '48,55',
            minApplication: '10.000,00',
            minMovimentation: '5.000,00',
            redeemQuota: 'D+1',
            liquidation: 'D+0',
            adminFee: '0,40',
            performanceFee: '---',
            sold: '63300.44',
            consolidated: '60',
            colorVariant: 'orange2',
            unitaryPrice: '25,00',
            discountRate: '1,30',
            anualEquity: '16,77',
            comparatedToCDI: '122,86',
            dueDate: '23/05/2024',
            priceQuotation: '27,30',
            volume: '9,97 mi',
            maxDay: '18,35',
            minDay: '17,05',
            variation: '17,05',
            numBuyers: '43',
            soldTokens: '2.562,00',
        },
        {
            id: '2',
            name: 'CRI Praiatur 1',
            image: 'assets/images/product.png',
            monthlyPerformance: '3,30',
            yearlyPerformance: '39,32',
            twelveMonthsPerformance: '48,55',
            minApplication: '10.000,00',
            minMovimentation: '5.000,00',
            redeemQuota: 'D+1',
            liquidation: 'D+0',
            adminFee: '0,40',
            performanceFee: '---',
            sold: '63300.44',
            consolidated: '60',
            colorVariant: 'purple',
            unitaryPrice: '25,00',
            discountRate: '1,30',
            anualEquity: '16,77',
            comparatedToCDI: '122,86',
            dueDate: '23/05/2024',
            priceQuotation: '27,30',
            volume: '9,97 mi',
            maxDay: '18,35',
            minDay: '17,05',
            variation: '17,05',
            numBuyers: '43',
            soldTokens: '2.562,00',
        },
        {
            id: '2',
            name: 'CRI Praiatur 1',
            image: 'assets/images/product.png',
            monthlyPerformance: '3,30',
            yearlyPerformance: '39,32',
            twelveMonthsPerformance: '48,55',
            minApplication: '10.000,00',
            minMovimentation: '5.000,00',
            redeemQuota: 'D+1',
            liquidation: 'D+0',
            adminFee: '0,40',
            performanceFee: '---',
            sold: '63300.44',
            consolidated: '60',
            colorVariant: 'purple',
            unitaryPrice: '25,00',
            discountRate: '1,30',
            anualEquity: '16,77',
            comparatedToCDI: '122,86',
            dueDate: '23/05/2024',
            priceQuotation: '27,30',
            volume: '9,97 mi',
            maxDay: '18,35',
            minDay: '17,05',
            variation: '17,05',
            numBuyers: '43',
            soldTokens: '2.562,00',
        },
        {
            id: '2',
            name: 'CRI Praiatur 1',
            image: 'assets/images/product.png',
            monthlyPerformance: '3,30',
            yearlyPerformance: '39,32',
            twelveMonthsPerformance: '48,55',
            minApplication: '10.000,00',
            minMovimentation: '5.000,00',
            redeemQuota: 'D+1',
            liquidation: 'D+0',
            adminFee: '0,40',
            performanceFee: '---',
            sold: '63300.44',
            consolidated: '60',
            colorVariant: 'purple',
            unitaryPrice: '25,00',
            discountRate: '1,30',
            anualEquity: '16,77',
            comparatedToCDI: '122,86',
            dueDate: '23/05/2024',
            priceQuotation: '27,30',
            volume: '9,97 mi',
            maxDay: '18,35',
            minDay: '17,05',
            variation: '17,05',
            numBuyers: '43',
            soldTokens: '2.562,00',
        },
        {
            id: '2',
            name: 'CRI Praiatur 1',
            image: 'assets/images/product.png',
            monthlyPerformance: '3,30',
            yearlyPerformance: '39,32',
            twelveMonthsPerformance: '48,55',
            minApplication: '10.000,00',
            minMovimentation: '5.000,00',
            redeemQuota: 'D+1',
            liquidation: 'D+0',
            adminFee: '0,40',
            performanceFee: '---',
            sold: '63300.44',
            consolidated: '60',
            colorVariant: 'purple',
            unitaryPrice: '25,00',
            discountRate: '1,30',
            anualEquity: '16,77',
            comparatedToCDI: '122,86',
            dueDate: '23/05/2024',
            priceQuotation: '27,30',
            volume: '9,97 mi',
            maxDay: '18,35',
            minDay: '17,05',
            variation: '17,05',
            numBuyers: '43',
            soldTokens: '2.562,00',
        },
        {
            id: '2',
            name: 'CRI Praiatur 1',
            image: 'assets/images/product.png',
            monthlyPerformance: '3,30',
            yearlyPerformance: '39,32',
            twelveMonthsPerformance: '48,55',
            minApplication: '10.000,00',
            minMovimentation: '5.000,00',
            redeemQuota: 'D+1',
            liquidation: 'D+0',
            adminFee: '0,40',
            performanceFee: '---',
            sold: '63300.44',
            consolidated: '60',
            colorVariant: 'purple',
            unitaryPrice: '25,00',
            discountRate: '1,30',
            anualEquity: '16,77',
            comparatedToCDI: '122,86',
            dueDate: '23/05/2024',
            priceQuotation: '27,30',
            volume: '9,97 mi',
            maxDay: '18,35',
            minDay: '17,05',
            variation: '17,05',
            numBuyers: '43',
            soldTokens: '2.562,00',
        },
    ]

    const rightDiv = document.createElement('div');
    rightDiv.classList.add('rightDiv');
    isMenuOpen ? rightDiv.setAttribute('open', '') : null;

    const header = document.createElement('az-header');
    isMenuOpen ? header.setAttribute('open', '') : null;

    const productsContainer = document.createElement('div');
    productsContainer.classList.add('productsContainer');

    const productsHeader = document.createElement('div');
    productsHeader.classList.add('productsHeader');

    const productsHeaderText = document.createElement('p');
    productsHeaderText.classList.add('productsHeaderText');
    productsHeaderText.textContent = 'Produtos';

    const productsListingContainer = document.createElement('div');
    productsListingContainer.classList.add('productsListingContainer');

    const productsListing = document.createElement('div');
    productsListing.classList.add('productsListing');

    const filters = document.createElement('div');
    filters.classList.add('filters');

    if (isDetails) {
        const produto = products.find(product => product.id === localStorage.getItem('productId'))
        console.log(produto);
        productsHeaderText.textContent += '  >  Detalhamento do ' + produto.name;

        const backButtonContainer = document.createElement('div');
        backButtonContainer.classList.add('backButtonContainer');

        const backButton = document.createElement('az-button');
        backButton.setAttribute('borderless', '');
        backButton.setAttribute('arrowBack', '');
        backButton.setAttribute('href', 'products.html');

        backButtonContainer.appendChild(backButton);
        productsHeader.appendChild(backButtonContainer);

        const productImageContainer = document.createElement('div');
        productImageContainer.classList.add('productImageContainer');

        const productImage = document.createElement('img');
        productImage.src = produto.image;

        productImageContainer.appendChild(productImage);

        productsListing.appendChild(productImageContainer);

        const basicInfoContainer = document.createElement('div');
        basicInfoContainer.classList.add('basicInfoContainer');

        const productName = document.createElement('p');
        productName.classList.add('productName');
        productName.textContent = produto.name;

        const text1 = document.createElement('p');
        text1.classList.add('text');
        text1.classList.add('text1');
        text1.textContent = 'Taxa de desconto';

        const discountRateContainer = document.createElement('div');
        discountRateContainer.classList.add('discountRateContainer');

        const discountRate = document.createElement('p');
        discountRate.classList.add('discountRate');
        discountRate.textContent = produto.discountRate + '% ';

        const discountRate2 = document.createElement('p');
        discountRate2.classList.add('discountRate2');
        discountRate2.textContent = ' ao mês';

        discountRateContainer.appendChild(discountRate);
        discountRateContainer.appendChild(discountRate2);

        const text2 = document.createElement('p');
        text2.classList.add('text');
        text2.classList.add('text2');
        text2.textContent = 'Isento de I.R.*';

        const anualEquityContainer = document.createElement('div');
        anualEquityContainer.classList.add('anualEquityContainer');

        const tinyTriangle1 = document.createElement('div');
        tinyTriangle1.classList.add('tinyTriangle');

        const anualEquityText = document.createElement('p');
        anualEquityText.classList.add('anualEquityText');
        anualEquityText.textContent = 'Equivalência ao ano: ';

        const anualEquity = document.createElement('p');
        anualEquity.classList.add('anualEquity');
        anualEquity.textContent = produto.anualEquity + '%';

        anualEquityContainer.appendChild(tinyTriangle1);
        anualEquityContainer.appendChild(anualEquityText);
        anualEquityContainer.appendChild(anualEquity);

        const comparatedToCDIContainer = document.createElement('div');
        comparatedToCDIContainer.classList.add('anualEquityContainer');

        const tinyTriangle2 = document.createElement('div');
        tinyTriangle2.classList.add('tinyTriangle');

        const comparatedToCDIText = document.createElement('p');
        comparatedToCDIText.classList.add('anualEquityText');
        comparatedToCDIText.textContent = 'Comparado ao CDI: ';

        const comparatedToCDI = document.createElement('p');
        comparatedToCDI.classList.add('anualEquity');
        comparatedToCDI.textContent = produto.comparatedToCDI + '%';

        comparatedToCDIContainer.appendChild(tinyTriangle2);
        comparatedToCDIContainer.appendChild(comparatedToCDIText);
        comparatedToCDIContainer.appendChild(comparatedToCDI);

        const dueDateContainer = document.createElement('div');
        dueDateContainer.classList.add('dueDateContainer');

        const dueDateText = document.createElement('p');
        dueDateText.classList.add('anualEquityText');
        dueDateText.textContent = 'Receba em 12x até ' + produto.dueDate;

        dueDateContainer.appendChild(dueDateText);

        const note = document.createElement('p');
        note.classList.add('note');
        note.textContent = '*Isento de I.R. quando as negociações de criptoativos não ultrapassarem R$ 35 mil por mês.';

        basicInfoContainer.appendChild(productName);
        basicInfoContainer.appendChild(text1);
        basicInfoContainer.appendChild(discountRateContainer);
        basicInfoContainer.appendChild(text2);
        basicInfoContainer.appendChild(anualEquityContainer);
        basicInfoContainer.appendChild(comparatedToCDIContainer);
        basicInfoContainer.appendChild(dueDateContainer);
        basicInfoContainer.appendChild(note);

        productsListing.appendChild(basicInfoContainer);
    }

    productsHeader.appendChild(productsHeaderText);

    if (!isDetails) {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttonsContainer');

        const galleryButton = document.createElement('div');
        galleryButton.classList.add('headerButton');
        galleryButton.setAttribute('style', 'background: url(./assets/images/gridOff.png) no-repeat center; background-size: 24px 24px;');

        const listButton = document.createElement('div');
        listButton.classList.add('headerButton');
        listButton.setAttribute('style', 'background: url(./assets/images/listingOn.png) no-repeat center; background-size: 24px 24px;');

        buttonsContainer.appendChild(galleryButton);
        buttonsContainer.appendChild(listButton);

        filters.appendChild(document.createElement('az-filters'));
        products.forEach(product => {
            const newProduct = document.createElement('az-product');
            newProduct.setAttribute('productid', product.id);
            newProduct.setAttribute('name', product.name);
            newProduct.setAttribute('image', product.image);
            newProduct.setAttribute('monthlyPerformance', product.monthlyPerformance);
            newProduct.setAttribute('yearlyPerformance', product.yearlyPerformance);
            newProduct.setAttribute('twelveMonthsPerformance', product.twelveMonthsPerformance);
            newProduct.setAttribute('minApplication', product.minApplication);
            newProduct.setAttribute('minMovimentation', product.minMovimentation);
            newProduct.setAttribute('redeemQuota', product.redeemQuota);
            newProduct.setAttribute('liquidation', product.liquidation);
            newProduct.setAttribute('adminFee', product.adminFee);
            newProduct.setAttribute('performanceFee', product.performanceFee);
            newProduct.setAttribute('sold', product.sold);
            newProduct.setAttribute('consolidated', product.consolidated);
            newProduct.setAttribute('colorVariant', product.colorVariant);
            newProduct.setAttribute('unitaryPrice', product.unitaryPrice);
            newProduct.setAttribute('discountRate', product.discountRate);
            newProduct.setAttribute('anualEquity', product.anualEquity);
            newProduct.setAttribute('comparatedToCDI', product.comparatedToCDI);
            newProduct.setAttribute('dueDate', product.dueDate);
            newProduct.setAttribute('priceQuotation', product.priceQuotation);
            newProduct.setAttribute('volume', product.volume);
            newProduct.setAttribute('maxDay', product.maxDay);
            newProduct.setAttribute('minDay', product.minDay);
            newProduct.setAttribute('variation', product.variation);
            productsListing.appendChild(newProduct);
        });
        productsHeader.appendChild(buttonsContainer);

        galleryButton.addEventListener('click', () => {
            galleryButton.setAttribute('style', 'background: url(./assets/images/gridOn.png) no-repeat center; background-size: 24px 24px;');
            listButton.setAttribute('style', 'background: url(./assets/images/listingOff.png) no-repeat center; background-size: 24px 24px;');

            isGrid = true;
            isGrid ? productsListing.classList.add('grid') : productsListing.classList.remove('grid');

            if (!isDetails) {
                productsListing.innerHTML = '';

                products.forEach(product => {
                    const newProduct = document.createElement('az-product');
                    newProduct.setAttribute('productid', product.id);
                    newProduct.setAttribute('name', product.name);
                    newProduct.setAttribute('image', product.image);
                    newProduct.setAttribute('monthlyPerformance', product.monthlyPerformance);
                    newProduct.setAttribute('yearlyPerformance', product.yearlyPerformance);
                    newProduct.setAttribute('twelveMonthsPerformance', product.twelveMonthsPerformance);
                    newProduct.setAttribute('minApplication', product.minApplication);
                    newProduct.setAttribute('minMovimentation', product.minMovimentation);
                    newProduct.setAttribute('redeemQuota', product.redeemQuota);
                    newProduct.setAttribute('liquidation', product.liquidation);
                    newProduct.setAttribute('adminFee', product.adminFee);
                    newProduct.setAttribute('performanceFee', product.performanceFee);
                    newProduct.setAttribute('sold', product.sold);
                    newProduct.setAttribute('consolidated', product.consolidated);
                    newProduct.setAttribute('colorVariant', product.colorVariant);
                    newProduct.setAttribute('unitaryPrice', product.unitaryPrice);
                    newProduct.setAttribute('discountRate', product.discountRate);
                    newProduct.setAttribute('anualEquity', product.anualEquity);
                    newProduct.setAttribute('comparatedToCDI', product.comparatedToCDI);
                    newProduct.setAttribute('dueDate', product.dueDate);
                    newProduct.setAttribute('priceQuotation', product.priceQuotation);
                    newProduct.setAttribute('volume', product.volume);
                    newProduct.setAttribute('maxDay', product.maxDay);
                    newProduct.setAttribute('minDay', product.minDay);
                    newProduct.setAttribute('variation', product.variation);
                    newProduct.setAttribute('gallery', '');
                    productsListing.appendChild(newProduct);
                });
            }

        });

        listButton.addEventListener('click', () => {
            listButton.setAttribute('style', 'background: url(./assets/images/listingOn.png) no-repeat center; background-size: 24px 24px;');
            galleryButton.setAttribute('style', 'background: url(./assets/images/gridOff.png) no-repeat center; background-size: 24px 24px;');

            isGrid = false;
            isGrid ? productsListing.classList.add('grid') : productsListing.classList.remove('grid');

            if (!isDetails) {
                productsListing.innerHTML = '';

                products.forEach(product => {
                    const newProduct = document.createElement('az-product');
                    newProduct.setAttribute('productid', product.id);
                    newProduct.setAttribute('name', product.name);
                    newProduct.setAttribute('image', product.image);
                    newProduct.setAttribute('monthlyPerformance', product.monthlyPerformance);
                    newProduct.setAttribute('yearlyPerformance', product.yearlyPerformance);
                    newProduct.setAttribute('twelveMonthsPerformance', product.twelveMonthsPerformance);
                    newProduct.setAttribute('minApplication', product.minApplication);
                    newProduct.setAttribute('minMovimentation', product.minMovimentation);
                    newProduct.setAttribute('redeemQuota', product.redeemQuota);
                    newProduct.setAttribute('liquidation', product.liquidation);
                    newProduct.setAttribute('adminFee', product.adminFee);
                    newProduct.setAttribute('performanceFee', product.performanceFee);
                    newProduct.setAttribute('sold', product.sold);
                    newProduct.setAttribute('consolidated', product.consolidated);
                    newProduct.setAttribute('colorVariant', product.colorVariant);
                    newProduct.setAttribute('unitaryPrice', product.unitaryPrice);
                    newProduct.setAttribute('discountRate', product.discountRate);
                    newProduct.setAttribute('anualEquity', product.anualEquity);
                    newProduct.setAttribute('comparatedToCDI', product.comparatedToCDI);
                    newProduct.setAttribute('dueDate', product.dueDate);
                    newProduct.setAttribute('priceQuotation', product.priceQuotation);
                    newProduct.setAttribute('volume', product.volume);
                    newProduct.setAttribute('maxDay', product.maxDay);
                    newProduct.setAttribute('minDay', product.minDay);
                    newProduct.setAttribute('variation', product.variation);
                    productsListing.appendChild(newProduct);
                });
            }
        });
    }

    if (isDetails) {
        const produto = products.find(product => product.id === localStorage.getItem('productId'));

        const container = document.createElement('div');
        container.classList.add('flexContainer');

        const buyContainer = document.createElement('div');
        buyContainer.classList.add('buyContainer');

        const container1 = document.createElement('div');
        container1.classList.add('flexContainer2');

        const buy = document.createElement('p');
        buy.classList.add('buyTitle');
        buy.textContent = 'Compre por:';

        const tokenValue = document.createElement('p');
        tokenValue.classList.add('buyText');
        tokenValue.textContent = 'Valor total da compra de tokens';

        const tokenContainer = document.createElement('div');
        tokenContainer.classList.add('tokenContainer');

        const tokenIcon = document.createElement('img');
        tokenIcon.src = 'assets/images/tokens2.png';
        tokenIcon.classList.add('tokenIcon');

        const token = document.createElement('p');
        token.classList.add('token');
        token.textContent = 'R$ ' + produto.unitaryPrice;

        tokenContainer.appendChild(tokenIcon);
        tokenContainer.appendChild(token);

        container1.appendChild(buy);
        container1.appendChild(tokenValue);
        container1.appendChild(tokenContainer);

        const criSlider = document.createElement('az-slider');
        criSlider.setAttribute('min', '0');
        criSlider.setAttribute('max', '1000000000');
        criSlider.setAttribute('step', '1');
        criSlider.setAttribute('value', '0');
        criSlider.setAttribute('solo', '');
        criSlider.setAttribute('output', 'cri');

        container1.appendChild(criSlider);

        const container2 = document.createElement('div');
        container2.classList.add('flexContainer2');
        container2.classList.add('dividerLeft');

        const receiveText = document.createElement('p');
        receiveText.classList.add('buyTitle');
        receiveText.textContent = 'Receba:';

        const value = document.createElement('p');
        value.classList.add('value');
        value.textContent = 'R$ ' + produto.priceQuotation;

        const valueText = document.createElement('p');
        valueText.classList.add('valueText');
        valueText.textContent = 'Valor estimado a receber até a conclusão dos pagamentos';

        const realGainText = document.createElement('p');
        realGainText.classList.add('buyText');
        realGainText.textContent = 'Ganho real:';

        const realGainValue = document.createElement('p');
        realGainValue.classList.add('realGainValue');
        realGainValue.textContent = 'R$ ' + parseFloat(parseFloat(produto.priceQuotation.replace(',', '.')) - parseFloat(produto.unitaryPrice.replace(',', '.'))).toFixed(2).replace('.', ',');

        container2.appendChild(receiveText);
        container2.appendChild(value);
        container2.appendChild(valueText);
        container2.appendChild(realGainText);
        container2.appendChild(realGainValue);

        const disclaimerContainer = document.createElement('div');
        disclaimerContainer.classList.add('disclaimerContainer');

        const disclaimer = document.createElement('p');
        disclaimer.classList.add('disclaimer');
        disclaimer.textContent = 'Todas as informações apresentadas foram baseadas nos dados e relatórios disponíveis no momento do lançamento do token e não constituem garantia por parte da Auzza'

        disclaimerContainer.appendChild(disclaimer);

        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        wrapper.appendChild(container1);
        wrapper.appendChild(container2);

        buyContainer.appendChild(wrapper);
        buyContainer.appendChild(disclaimerContainer);

        container.appendChild(productsListing);
        container.appendChild(buyContainer);

        productsListingContainer.appendChild(container);
    } else {
        productsListingContainer.appendChild(productsListing);
    }

    productsListingContainer.appendChild(filters);

    if (isDetails) {
        const produto = products.find(product => product.id === localStorage.getItem('productId'));

        const unitaryPriceContainer = document.createElement('div');
        unitaryPriceContainer.classList.add('unitaryPriceContainer');

        const unitaryPriceTextContainer = document.createElement('div');
        unitaryPriceTextContainer.classList.add('unitaryPriceTextContainer');

        const unitaryPriceText = document.createElement('p');
        unitaryPriceText.classList.add('unitaryPriceText');
        unitaryPriceText.textContent = 'Preço unitário';

        const unitaryPrice = document.createElement('p');
        unitaryPrice.classList.add('unitaryPrice');
        unitaryPrice.textContent = 'R$ ' + produto.unitaryPrice;

        const discountRate3Container = document.createElement('div');
        discountRate3Container.classList.add('discountRate3Container');

        const discountRate3Text = document.createElement('p');
        discountRate3Text.classList.add('discountRate3Text');
        discountRate3Text.textContent = produto.discountRate + ' ' + '% ao mês';

        discountRate3Container.appendChild(discountRate3Text);

        unitaryPriceTextContainer.appendChild(unitaryPriceText);
        unitaryPriceTextContainer.appendChild(unitaryPrice);

        unitaryPriceContainer.appendChild(unitaryPriceTextContainer);
        unitaryPriceContainer.appendChild(discountRate3Container);

        filters.appendChild(unitaryPriceContainer);

        const divider = document.createElement('div');
        divider.classList.add('divider');

        filters.appendChild(divider);

        const salesTextContainer = document.createElement('div');
        salesTextContainer.classList.add('salesTextContainer');

        const salesText = document.createElement('p');
        salesText.classList.add('salesText');
        salesText.textContent = 'Vendidos';

        const totalText = document.createElement('p');
        totalText.classList.add('salesText');
        totalText.textContent = 'Total';

        salesTextContainer.appendChild(salesText);
        salesTextContainer.appendChild(totalText);

        filters.appendChild(salesTextContainer);

        const progressBarContainer = document.createElement('div');
        progressBarContainer.classList.add('progressBarContainer');

        const left = document.createElement('div');
        left.classList.add('left');
        left.style.width = produto.consolidated + '%';

        progressBarContainer.appendChild(left);

        const totalSold = document.createElement('p');
        totalSold.classList.add('totalSold');
        totalSold.textContent = 'R$ ' + parseFloat(produto.sold).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        filters.appendChild(totalSold);
        filters.appendChild(progressBarContainer);

        const consolidatedPercentage = document.createElement('p');
        consolidatedPercentage.classList.add('consolidatedPercentage');
        consolidatedPercentage.textContent = 'Consolidado ' + produto.consolidated + '%';

        filters.appendChild(consolidatedPercentage);

        const divider2 = document.createElement('div');
        divider2.classList.add('divider');

        filters.appendChild(divider2);

        const allBuyersContainer = document.createElement('div');
        allBuyersContainer.classList.add('unitaryPriceContainer');

        const buyersContainer = document.createElement('div');
        buyersContainer.classList.add('buyersContainer');

        const buyersText = document.createElement('p');
        buyersText.classList.add('buyersText');
        buyersText.textContent = 'Compradores';

        const iconContainer = document.createElement('div');
        iconContainer.classList.add('iconContainer');

        const buyers = document.createElement('p');
        buyers.classList.add('buyers');
        buyers.textContent = produto.numBuyers;

        const buyersIcon = document.createElement('img');
        buyersIcon.src = 'assets/images/buyers.png';
        buyersIcon.classList.add('buyersIcon');

        iconContainer.appendChild(buyers);
        iconContainer.appendChild(buyersIcon);

        buyersContainer.appendChild(buyersText);
        buyersContainer.appendChild(iconContainer);

        const soldTokensContainer = document.createElement('div');
        soldTokensContainer.classList.add('buyersContainer');

        const soldTokensText = document.createElement('p');
        soldTokensText.classList.add('buyersText');
        soldTokensText.textContent = 'Tokens vendidos';

        const iconContainer2 = document.createElement('div');
        iconContainer2.classList.add('iconContainer');

        const soldTokens = document.createElement('p');
        soldTokens.classList.add('buyers');
        soldTokens.textContent = produto.soldTokens;

        const soldTokensIcon = document.createElement('img');
        soldTokensIcon.src = 'assets/images/tokens.png';
        soldTokensIcon.classList.add('buyersIcon');

        iconContainer2.appendChild(soldTokens);
        iconContainer2.appendChild(soldTokensIcon);

        soldTokensContainer.appendChild(soldTokensText);
        soldTokensContainer.appendChild(iconContainer2);

        allBuyersContainer.appendChild(buyersContainer);
        allBuyersContainer.appendChild(soldTokensContainer);

        filters.appendChild(allBuyersContainer);

        const divider3 = document.createElement('div');
        divider3.classList.add('divider');

        filters.appendChild(divider3);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('detailsButtonsContainer');

        const sendProspectButton = document.createElement('az-button');
        sendProspectButton.setAttribute('no-icon', '');
        sendProspectButton.textContent = 'Enviar prospecto';

        const sendCardButton = document.createElement('az-button');
        sendCardButton.setAttribute('send', '');
        sendCardButton.textContent = 'Enviar Boleta';

        buttonsContainer.appendChild(sendProspectButton);
        buttonsContainer.appendChild(sendCardButton);

        filters.appendChild(buttonsContainer);
    }

    productsContainer.appendChild(productsHeader);
    productsContainer.appendChild(productsListingContainer);

    if (isDetails) {
        const produto = products.find(product => product.id === localStorage.getItem('productId'));

        const graphicContainer = document.createElement('div');
        graphicContainer.classList.add('graphicContainer');

        const quotationInfoContainer = document.createElement('div');
        quotationInfoContainer.classList.add('quotationInfoContainer');

        const quotationContainer = document.createElement('div');
        quotationContainer.classList.add('quotationContainer');

        const quotationText = document.createElement('p');
        quotationText.classList.add('quotationText');
        quotationText.textContent = 'Cotação';

        const quotationPrefix = document.createElement('p');
        quotationPrefix.classList.add('prefix');
        quotationPrefix.textContent = 'R$';

        const quotation = document.createElement('p');
        quotation.classList.add('quotation');
        quotation.textContent = produto.priceQuotation;

        quotationContainer.appendChild(quotationText);
        quotationContainer.appendChild(quotationPrefix);
        quotationContainer.appendChild(quotation);

        const volumeContainer = document.createElement('div');
        volumeContainer.classList.add('quotationContainer');

        const volumeText = document.createElement('p');
        volumeText.classList.add('quotationText');
        volumeText.textContent = 'Volume';

        const volumePrefix = document.createElement('p');
        volumePrefix.classList.add('suffix');
        volumePrefix.textContent = 'mi';

        const volume = document.createElement('p');
        volume.classList.add('volume');
        volume.textContent = produto.volume.slice(0, -3);

        volumeContainer.appendChild(volumeText);
        volumeContainer.appendChild(volumePrefix);
        volumeContainer.appendChild(volume);

        const maxDayContainer = document.createElement('div');
        maxDayContainer.classList.add('quotationContainer');

        const maxDayText = document.createElement('p');
        maxDayText.classList.add('quotationText');
        maxDayText.textContent = 'Máximo (dia)';

        const maxDayPrefix = document.createElement('p');
        maxDayPrefix.classList.add('prefix');
        maxDayPrefix.textContent = 'R$';

        const maxDay = document.createElement('p');
        maxDay.classList.add('quotation');
        maxDay.textContent = produto.maxDay;

        maxDayContainer.appendChild(maxDayText);
        maxDayContainer.appendChild(maxDayPrefix);
        maxDayContainer.appendChild(maxDay);

        const minDayContainer = document.createElement('div');
        minDayContainer.classList.add('quotationContainer');

        const minDayText = document.createElement('p');
        minDayText.classList.add('quotationText');
        minDayText.textContent = 'Mínimo (dia)';

        const minDayPrefix = document.createElement('p');
        minDayPrefix.classList.add('prefix');
        minDayPrefix.textContent = 'R$';

        const minDay = document.createElement('p');
        minDay.classList.add('quotation');
        minDay.textContent = produto.minDay;

        minDayContainer.appendChild(minDayText);
        minDayContainer.appendChild(minDayPrefix);
        minDayContainer.appendChild(minDay);

        const variationContainer = document.createElement('div');
        variationContainer.classList.add('quotationContainer');

        const variationText = document.createElement('p');
        variationText.classList.add('quotationText');
        variationText.textContent = 'Variação';

        const variationPrefix = document.createElement('img');
        variationPrefix.classList.add('prefixImg');
        variationPrefix.src = 'assets/images/green-arrow-up.png';

        const variation = document.createElement('p');
        variation.classList.add('variation');
        variation.textContent = produto.variation;

        variationContainer.appendChild(variationText);
        variationContainer.appendChild(variationPrefix);
        variationContainer.appendChild(variation);

        quotationInfoContainer.appendChild(quotationContainer);
        quotationInfoContainer.appendChild(volumeContainer);
        quotationInfoContainer.appendChild(maxDayContainer);
        quotationInfoContainer.appendChild(minDayContainer);
        quotationInfoContainer.appendChild(variationContainer);

        const lastUpdateContainer = document.createElement('div');
        lastUpdateContainer.classList.add('lastUpdateContainer');

        const lastUpdateText = document.createElement('p');
        lastUpdateText.classList.add('lastUpdateText');
        lastUpdateText.textContent = 'Última atualização: 21/07/2023 às 12h13';

        lastUpdateContainer.appendChild(lastUpdateText);

        const divider4 = document.createElement('div');
        divider4.classList.add('divider');
        divider4.classList.add('divider4');

        const historyContainer = document.createElement('div');
        historyContainer.classList.add('historyContainer');

        const historyButtonsContainer = document.createElement('div');
        historyButtonsContainer.classList.add('historyButtonsContainer');

        const intradayButton = document.createElement('az-button');
        intradayButton.setAttribute('no-icon', '');
        intradayButton.textContent = 'Intraday';

        const historyButton = document.createElement('az-button');
        historyButton.setAttribute('no-icon', '');
        historyButton.setAttribute('purple', '');
        historyButton.textContent = 'Histórico';

        historyButtonsContainer.appendChild(intradayButton);
        historyButtonsContainer.appendChild(historyButton);

        const historySearchContainer = document.createElement('div');
        historySearchContainer.classList.add('historySearchContainer');

        const compare1 = document.createElement('az-input');
        compare1.setAttribute('type', 'text');
        compare1.setAttribute('placeholder', 'Comparar');
        compare1.setAttribute('id', 'search');

        const compare2 = document.createElement('az-input');
        compare2.setAttribute('type', 'text');
        compare2.setAttribute('placeholder', 'Comparar');
        compare2.setAttribute('id', 'search');

        const searchContainer1 = document.createElement('div');
        searchContainer1.classList.add('searchContainer1');

        const searchContainer2 = document.createElement('div');
        searchContainer2.classList.add('searchContainer2');

        searchContainer1.appendChild(compare1);
        searchContainer2.appendChild(compare2);

        historySearchContainer.appendChild(searchContainer1);
        historySearchContainer.appendChild(searchContainer2);

        historyContainer.appendChild(historyButtonsContainer);
        historyContainer.appendChild(historySearchContainer);

        const graphicFiltersContainer = document.createElement('div');
        graphicFiltersContainer.classList.add('graphicFiltersContainer');

        const periodContainer = document.createElement('div');
        periodContainer.classList.add('periodContainer');

        const periodText = document.createElement('p');
        periodText.classList.add('periodText');
        periodText.textContent = 'Filtrar período';

        const weekButton = document.createElement('az-button');
        weekButton.setAttribute('no-icon', '');
        weekButton.textContent = '1S';

        const monthButton = document.createElement('az-button');
        monthButton.setAttribute('no-icon', '');
        monthButton.textContent = '1M';

        const threeMonthsButton = document.createElement('az-button');
        threeMonthsButton.setAttribute('no-icon', '');
        threeMonthsButton.textContent = '3M';

        const sixMonthsButton = document.createElement('az-button');
        sixMonthsButton.setAttribute('no-icon', '');
        sixMonthsButton.textContent = '6M';

        const yearButton = document.createElement('az-button');
        yearButton.setAttribute('no-icon', '');
        yearButton.textContent = '1A';

        periodContainer.appendChild(periodText);
        periodContainer.appendChild(weekButton);
        periodContainer.appendChild(monthButton);
        periodContainer.appendChild(threeMonthsButton);
        periodContainer.appendChild(sixMonthsButton);
        periodContainer.appendChild(yearButton);

        const datesContainer = document.createElement('div');
        datesContainer.classList.add('datesContainer');

        const datesText1 = document.createElement('p');
        datesText1.classList.add('datesText');
        datesText1.textContent = 'Início';

        const date1 = document.createElement('az-input');
        date1.setAttribute('id', 'date');

        const datesText2 = document.createElement('p');
        datesText2.classList.add('datesText');
        datesText2.textContent = 'Término';

        const date2 = document.createElement('az-input');
        date2.setAttribute('id', 'date');

        datesContainer.appendChild(datesText1);
        datesContainer.appendChild(date1);
        datesContainer.appendChild(datesText2);
        datesContainer.appendChild(date2);

        graphicFiltersContainer.appendChild(periodContainer);
        graphicFiltersContainer.appendChild(datesContainer);

        const graphic = document.createElement('img');
        graphic.classList.add('graphic');
        graphic.src = 'assets/images/product-details-graphic.png';

        const graphicScroll = document.createElement('img');
        graphicScroll.classList.add('graphicScroll');
        graphicScroll.src = 'assets/images/graphic-scroll.png';

        graphicContainer.appendChild(quotationInfoContainer);
        graphicContainer.appendChild(lastUpdateContainer);
        graphicContainer.appendChild(divider4);
        graphicContainer.appendChild(historyContainer);
        graphicContainer.appendChild(graphicFiltersContainer);
        graphicContainer.appendChild(graphic);
        graphicContainer.appendChild(graphicScroll);

        const aboutCriContainer = document.createElement('div');
        aboutCriContainer.classList.add('aboutCriContainer');

        const aboutCriTitle = document.createElement('p');
        aboutCriTitle.classList.add('aboutCriTitle');
        aboutCriTitle.textContent = 'Sobre o CRI';

        const aboutCriText = document.createElement('p');
        aboutCriText.classList.add('aboutCriText');
        aboutCriText.textContent = 'Fundada em 2018 a partir de uma análise do mercado de hospitalidade e suas necessidades, a Blincast decidiu inovar disponibilizando uma solução audiovisual tecnológica, visando principalmente a qualidade no atendimento e a eficiência do produto. A Blincast nasceu, assim, para melhorar a experiência dos hóspedes do setor de hospitalidade. Recebeu sua primeira rodada de investimento em meados de 2019 e a segunda rodada de investimentos em 2020, o que possibilitou melhores formas de governança e estrutura de capital para atender as renomadas redes de hospitalidade, hotéis e hospitais. Atualmente está presente em 18 estados e em mais de 300 estabelecimentos, entre hotéis, moradias por aluguel, motéis, condomínios, hospitais e clínicas.';

        const divider5 = document.createElement('div');
        divider5.classList.add('divider');

        const auzzaImage = document.createElement('img');
        auzzaImage.classList.add('auzzaImage');
        auzzaImage.src = 'assets/images/auzza-image.png';

        const issuedBy = document.createElement('p');
        issuedBy.classList.add('issuedBy');
        issuedBy.textContent = 'Emitido por:';

        const issuer = document.createElement('p');
        issuer.classList.add('issuer');
        issuer.textContent = 'Auzza capital';

        const foundedIn = document.createElement('p');
        foundedIn.classList.add('foundedIn');
        foundedIn.textContent = 'Fundação:';

        const founder = document.createElement('p');
        founder.classList.add('year');
        founder.textContent = '2022';

        aboutCriContainer.appendChild(aboutCriTitle);
        aboutCriContainer.appendChild(aboutCriText);
        aboutCriContainer.appendChild(divider5);
        aboutCriContainer.appendChild(auzzaImage);
        aboutCriContainer.appendChild(issuedBy);
        aboutCriContainer.appendChild(issuer);
        aboutCriContainer.appendChild(foundedIn);
        aboutCriContainer.appendChild(founder);

        productsContainer.appendChild(graphicContainer);
        productsContainer.appendChild(aboutCriContainer);
    }

    rightDiv.appendChild(header);
    rightDiv.appendChild(productsContainer);

    elem.shadowRoot.appendChild(style);
    elem.shadowRoot.appendChild(rightDiv);
}

export class AZProductsRightDiv extends HTMLElement {
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