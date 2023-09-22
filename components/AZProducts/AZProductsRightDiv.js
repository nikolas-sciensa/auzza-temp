function updateStyle(elem) {

    const style = elem.shadowRoot.querySelector('style');
    style.textContent = `
            .rightDiv {
                width: ${elem.hasAttribute('open') ? 'calc(100vw - 190px)' : 'calc(100vw - 54.91px)'};
                min-width: 300px;
                ${elem.hasAttribute('details') ? 'overflow-y: scroll;' : ''}
                overflow-x: hidden;
            }

            .productsContainer {
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
                height: ${elem.hasAttribute('details') ? '319px;' : 'calc(100vh - 20vh);'}
                ${elem.hasAttribute('details') ? 'overflow-y: hidden;' : 'overflow-y: scroll;'}
                ${elem.hasAttribute('details') ? 'background: rgba(255, 255, 255, 1);' : ''}
                ${elem.hasAttribute('details') ? 'display: flex;' : ''}
            }

            .filters {
                width: calc(32% - 14px);
                padding: 0;
                margin: 0;
                height: calc(100vh - 20vh);
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
                width: calc(100% - 14px);
                height: calc(100% - 334px);
                background: rgba(255, 255, 255, 1);
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

        // buyContainer.appendChild(container1);

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