function updateStyle(elem) {
    const style = elem.shadowRoot.querySelector('style');
    style.textContent = `
        .rightDiv {
            width: ${elem.hasAttribute('open') ? 'calc(100vw - 190px);' : 'calc(100vw - 54.91px);'}
            height: calc(100vh);
        }

        .clientsContainer {
            padding-top: 70px;
            display: flex;
            align-items: center;
            height: calc(100vh - 70px);
            width: ${elem.hasAttribute('open') ? 'calc(100vw - 190px);' : 'calc(100vw - 54.91px);'}
            flex-direction: column;
            overflow-y: scroll;
            overflow-x: hidden;
        }
        
        .clientsContainer::-webkit-scrollbar {
            display: none;
        }

        .clientsHeader {
            display: flex;
            align-items: center;
            margin: 16px 14px;
            width: calc(100% - 28px);
            min-height: 57px;
            background: rgba(255, 255, 255, 1);
        }

        .clientsHeaderTitle {
            margin-left: 18px;
            font-size: 14px;
            font-weight: 500;
            text-align: left;
        }

        .clientsList {
            display: flex;
            flex-direction: column;
            width: calc(100% - 28px);
            background: rgba(255, 255, 255, 1);
            height: calc(100vh - 20vh);
            overflow-y: scroll;
        }

        .clientsList::-webkit-scrollbar {
            display: none;
        }

        .clientContainer {
            display: flex;
            width: calc(100% - 28px);
            justify-content: center;
            align-items: center;
            margin: 14.4px;
            margin-bottom: 0;
            height: 47.4px;
            background: rgba(250, 250, 250, 1);
        }

        .clientCheckbox {
            margin: 16.65px 14.4px;
            width: 14.4px;
            height: 14.4px;
        }

        .clientNameContainer {
            cursor: pointer;
            width: 33%;
            background-image: url('assets/images/table-sort.png');
            background-repeat: no-repeat;
            background-position: right center;
            background-size: 12px 12px;
        }

        .headerContainer {
            cursor: pointer;
            background-image: url('assets/images/table-sort.png');
            background-repeat: no-repeat;
            background-position: right center;
            background-size: 12px 12px;
            width: 16%;
            padding-left: 16px;
        }

        .clientName {
            font-size: 12px;
            font-weight: 600;            
        }

        .totalInvested {
            font-size: 12px;
            font-weight: 600;       
        }

        .totalValue {
            font-size: 12px;
            font-weight: 600;       
        }

        .totalActions {
            font-size: 12px;
            font-weight: 600;       
        }

        .detailsButton {
            font-size: 12px;
            font-weight: 600;       
        }

        .wrapper {
            display: flex;
            flex-direction: row;
            width: calc(100% - 28px);
            height: 204px;
        }

        .wrapper2 {
            height: calc(100%);
        }

        .wrapper3 {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: row;
            width: calc(100%);
        }

        .wrapper4 {
            display: flex;
        }

        .verticalWrapper {
            display: flex;
            flex-direction: column;
            width: calc(100% - 28px);
            height: 819px;
        }

        .verticalWrapper2 {
            display: flex;
            flex-direction: column;
            width: 32%;
            height: 819px;
        }

        .verticalWrapper3 {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 122px;
        }

        .basicInfoContainer {
            display: flex;
            flex-direction: column;
            width: calc(100% - 14px);
            height: 204px;
            margin-right: 14px;
            background: rgba(255, 255, 255, 1);
        }

        .consolidatedContainer {
            width: calc(32%);
            height: 204px;
            padding: 0;
            margin: 0;
            background: rgba(255, 255, 255, 1);
        }

        .searchContainer {
            display: flex;
            width: calc(100% - 28px);
            margin: 14px;
            min-height: 55px;
            background: rgba(255, 255, 255, 1);
        }

        .patrimonialEvolutionContainer {
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 1);
            width: calc(100% - 14px);
            height: 405px;
            margin-bottom: 24px;
        }

        .acquiredProductsContainer {
            background: rgba(255, 255, 255, 1);
            width: calc(100% - 14px);
            height: 390px;
            margin-bottom: 12px;
            overflow-y: scroll;
        }

        .acquiredProductsContainer::-webkit-scrollbar {
            display: none;
        }

        .totalPerProductContainer {
            display: flex;
            flex-direction: column;
            text-align: left;
            justify-content: center;
            overflow: hidden;
            background: rgba(255, 255, 255, 1);
            width: calc(100% - 6px);
            height: 312px;
            margin-bottom: 14px;
            margin-left: 6px;
        }

        .totalPerProductLabel {
            margin-left: 16px;
            margin-top: 16px;
            margin-bottom: 31px;
            font-size: 20px;
            font-weight: 400;
        }

        .tempTotalPerProduct {
            width: 380px;
            height: 220px;
        }

        .activeByRiskContainer {
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: rgba(255, 255, 255, 1);
            width: calc(100% - 6px);
            height: 493px;
            margin-bottom: 12px;
            margin-left: 6px;
        }

        .productsListingContainer {
            background: rgba(255, 255, 255, 1);
            width: calc(100% - 24px);
            height: fit-content;
            margin-bottom: 32px;
            margin-top: 12px;
        }

        .clientImage {
            width: 73.44px;
            height: 73.44px;
            margin: 21.56px 28.08px 27.09px 24px;
        }

        .clientNameDetail {
            margin: 0;
            margin-top: 21.56px;
            margin-bottom: 2.44px;
            width: 100%;
            height: 24px;
            font-size: 20px;
            font-weight: 500;
        }

        .label {
            margin: 0;
            margin-top: 8px;
            margin-right: 6px;
            font-size: 12px;
            font-weight: 500;
        }

        .value {
            margin: 0;
            margin-top: 8px;
            font-size: 12px;
            font-weight: 400;
        }

        .etiquetaContainer {
            display: flex;
            flex-direction: column;
            border-top: 1px solid rgba(91, 71, 124, 0.31);
        }

        .etiquetaLabel {
            margin: 14.63px 0 7.33px 10.35px;
        }

        .etiqueta {
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: left;
            margin-left: 8px;
            margin-top: 0;
            padding: 6px 10px;
            font-size: 14px;
            font-weight: 500;
            border: 1px solid rgba(42, 15, 84, 1);
        }

        .searchInput {
            margin-left: 8.72px;
            width: 265px;
        }

        .searchInput2 {
            width: 306px;
            margin-left: auto;
            margin-right: 14.4px;
        }

        .period {
            margin-left: auto;
            margin-right: 10.62px;
        }

        .aquiredProductsLabel {
            margin: 28.8px 14.4px 14.4px 14.4px;
        }

        .consolidatedLabel {
            font-size: 20px;
            font-weight: 500;
            margin: 12.6px 14.58px 17.4px 14.58px;
        }

        .label2 {
            margin: 0;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 30.49px;
            margin-top: 22px;
            font-size: 14px;
            font-weight: 400;
        }

        .value2 {
            margin: 0;
            margin-top: 22px;
            font-size: 20px;
            font-weight: 700;
            line-height: 18px;
        }

        .triangle {
            margin: 22px 0 30.99px 34.7px;            
            width: 16px;
            height: 16px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 14px;
            margin: 0 14px;
            margin-bottom: 14px;
            margin-left: 28px;
        }
    `;
    const isMenuOpen = elem.hasAttribute('open');
    const isDetails = elem.hasAttribute('details');

    const clients = [
        {
            "id": 1,
            "name": "bna Tajima",
            "contact": "email@email.com",
            "account": "123456",
            "profile": "Conservador",
            "validity": "31/10/2023",
            "totalInvested": "321,020",
            "totalValue": "324,020",
            "totalActions": "1200",
            "auzzaPatrimony": "2.323.000,00",
            "avaibleBalance": "212.000,00",
        },
        {
            "id": 2,
            "name": "Ana Tajima",
            "contact": "email@email.com",
            "account": "123456",
            "profile": "Conservador",
            "validity": "31/10/2023",
            "totalInvested": "320,020",
            "totalValue": "324,020",
            "totalActions": "1203",
            "auzzaPatrimony": "2.323.000,00",
            "avaibleBalance": "212.000,00",
        }
    ]

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
    ]

    const RightDiv = document.createElement('div');
    RightDiv.classList.add('RightDiv');
    isMenuOpen ? RightDiv.setAttribute('open', '') : null;

    const header = document.createElement('az-header');
    isMenuOpen ? header.setAttribute('open', '') : null;

    const clientsContainer = document.createElement('div');
    clientsContainer.classList.add('clientsContainer');

    const clientsHeader = document.createElement('div');
    clientsHeader.classList.add('clientsHeader');

    const clientsHeaderTitle = document.createElement('div');
    clientsHeaderTitle.classList.add('clientsHeaderTitle');
    clientsHeaderTitle.textContent = 'Clientes';

    if (isDetails) {
        const backButtonContainer = document.createElement('div');
        backButtonContainer.classList.add('backButtonContainer');

        const backButton = document.createElement('az-button');
        backButton.setAttribute('borderless', '');
        backButton.setAttribute('arrowBack', '');
        backButton.setAttribute('href', 'clients.html');

        backButtonContainer.appendChild(backButton);
        clientsHeader.appendChild(backButtonContainer);

        clientsHeaderTitle.textContent = 'Clientes  >  Detalhe do cliente';
    }

    const clientsList = document.createElement('div');
    clientsList.classList.add('clientsList');

    clientsHeader.appendChild(clientsHeaderTitle);
    clientsContainer.appendChild(clientsHeader);

    RightDiv.appendChild(header);
    RightDiv.appendChild(clientsContainer);

    if (isDetails) {
        const cliente = clients.find(client => client.id === localStorage.getItem('clientId'));

        const wrapper1 = document.createElement('div');
        wrapper1.classList.add('wrapper');

        const basicInfoContainer = document.createElement('div');
        basicInfoContainer.classList.add('basicInfoContainer');

        const clientImage = document.createElement('img');
        clientImage.classList.add('clientImage');
        clientImage.src = 'assets/images/ana-tajima.png';

        const wrapper8 = document.createElement('div');
        wrapper8.classList.add('verticalWrapper3');

        const clientNameDetail = document.createElement('p');
        clientNameDetail.classList.add('clientNameDetail');
        clientNameDetail.textContent = cliente ? cliente.name : "Nome do cliente";

        const wrapper3 = document.createElement('div');
        wrapper3.classList.add('wrapper3');

        const wrapper4 = document.createElement('div');
        wrapper4.classList.add('wrapper3');

        const auzzaAccountLabel = document.createElement('p');
        auzzaAccountLabel.classList.add('label');
        auzzaAccountLabel.textContent = 'Conta Auzza: ';

        const auzzaAccount = document.createElement('p');
        auzzaAccount.classList.add('value');
        auzzaAccount.textContent = cliente ? cliente.account : "123456";

        wrapper4.appendChild(auzzaAccountLabel);
        wrapper4.appendChild(auzzaAccount);

        const wrapper5 = document.createElement('div');
        wrapper5.classList.add('wrapper3');

        const profileLabel = document.createElement('p');
        profileLabel.classList.add('label');
        profileLabel.textContent = 'Perfil: ';

        const profile = document.createElement('p');
        profile.classList.add('value');
        profile.textContent = cliente ? cliente.profile : "Conservador";

        wrapper5.appendChild(profileLabel);
        wrapper5.appendChild(profile);

        const wrapper6 = document.createElement('div');
        wrapper6.classList.add('wrapper3');

        const validityLabel = document.createElement('p');
        validityLabel.classList.add('label');
        validityLabel.textContent = 'Validade do cadastro: ';

        const validity = document.createElement('p');
        validity.classList.add('value');
        validity.textContent = cliente ? cliente.validity : "31/10/2023 (60 semanas)";

        wrapper6.appendChild(validityLabel);
        wrapper6.appendChild(validity);

        const wrapper7 = document.createElement('div');
        wrapper7.classList.add('wrapper3');

        const contactLabel = document.createElement('p');
        contactLabel.classList.add('label');
        contactLabel.textContent = 'Contato: ';

        const contact = document.createElement('p');
        contact.classList.add('value');
        contact.textContent = cliente ? cliente.contact : "email@email.com";

        const wrapper9 = document.createElement('div');
        wrapper9.classList.add('wrapper3');

        wrapper7.appendChild(contactLabel);
        wrapper7.appendChild(contact);

        wrapper3.appendChild(wrapper4);
        wrapper3.appendChild(wrapper6);

        wrapper9.appendChild(wrapper5);
        wrapper9.appendChild(wrapper7);

        wrapper8.appendChild(clientNameDetail);
        wrapper8.appendChild(wrapper3);
        wrapper8.appendChild(wrapper9);

        const etiquetaContainer = document.createElement('div');
        etiquetaContainer.classList.add('etiquetaContainer');

        const etiquetaLabel = document.createElement('p');
        etiquetaLabel.classList.add('label');
        etiquetaLabel.classList.add('etiquetaLabel');
        etiquetaLabel.textContent = 'Etiquetas';

        const wrapper11 = document.createElement('div');
        wrapper11.classList.add('wrapper4');

        const addEtiqueta = document.createElement('p');
        addEtiqueta.classList.add('etiqueta');
        addEtiqueta.textContent = '+';

        wrapper11.appendChild(addEtiqueta);

        addEtiqueta.addEventListener('click', () => {
            const etiqueta = document.createElement('p');
            etiqueta.classList.add('etiqueta');

            etiqueta.addEventListener('click', () => {
                etiqueta.remove();
            });

            const newEtiqueta = prompt("Digite o texto da etiqueta:");
            if (newEtiqueta !== null && newEtiqueta !== "") {
                etiqueta.textContent = newEtiqueta;
                wrapper11.appendChild(etiqueta);
            }
        });

        etiquetaContainer.appendChild(etiquetaLabel);
        etiquetaContainer.appendChild(wrapper11);

        const wrapper10 = document.createElement('div');
        wrapper10.classList.add('wrapper3');

        wrapper10.appendChild(clientImage);
        wrapper10.appendChild(wrapper8);

        basicInfoContainer.appendChild(wrapper10);
        basicInfoContainer.appendChild(etiquetaContainer);

        const consolidatedContainer = document.createElement('div');
        consolidatedContainer.classList.add('consolidatedContainer');

        const wrapper12 = document.createElement('div');
        wrapper12.classList.add('verticalWrapper3');

        const wrapper13 = document.createElement('div');
        wrapper13.classList.add('wrapper3');

        const consolidatedLabel = document.createElement('p');
        consolidatedLabel.classList.add('consolidatedLabel');
        consolidatedLabel.textContent = 'Consolidado';

        const blueTriangle = document.createElement('img');
        blueTriangle.classList.add('triangle');
        blueTriangle.src = 'assets/images/cyanTriangle.png';

        const auzzaPatrimonyLabel = document.createElement('p');
        auzzaPatrimonyLabel.classList.add('label2');
        auzzaPatrimonyLabel.textContent = 'Patrimônio Auzza: ';

        const auzzaPatrimony = document.createElement('p');
        auzzaPatrimony.classList.add('value2');
        auzzaPatrimony.textContent = "R$ " + (cliente ? cliente.auzzaPatrimony : "2.323.000,00");

        wrapper13.appendChild(blueTriangle);
        wrapper13.appendChild(auzzaPatrimonyLabel);
        wrapper13.appendChild(auzzaPatrimony);

        const wrapper14 = document.createElement('div');
        wrapper14.classList.add('wrapper3');

        const purpleTriangle = document.createElement('img');
        purpleTriangle.classList.add('triangle');
        purpleTriangle.src = 'assets/images/purpleTriangle.png';

        const avaibleBalanceLabel = document.createElement('p');
        avaibleBalanceLabel.classList.add('label2');
        avaibleBalanceLabel.textContent = 'Saldo disponível: ';

        const avaibleBalance = document.createElement('p');
        avaibleBalance.classList.add('value2');
        avaibleBalance.textContent = "R$ " + (cliente ? cliente.avaibleBalance : "212.000,00");

        wrapper14.appendChild(purpleTriangle);
        wrapper14.appendChild(avaibleBalanceLabel);
        wrapper14.appendChild(avaibleBalance);

        wrapper12.appendChild(consolidatedLabel);
        wrapper12.appendChild(wrapper13);
        wrapper12.appendChild(wrapper14);

        consolidatedContainer.appendChild(wrapper12);

        wrapper1.appendChild(basicInfoContainer);
        wrapper1.appendChild(consolidatedContainer);

        const searchContainer = document.createElement('div');
        searchContainer.classList.add('searchContainer');

        const searchInput = document.createElement('az-input');
        searchInput.classList.add('searchInput');
        searchInput.setAttribute('placeholder', 'Busca');
        searchInput.id = 'search';

        const period = document.createElement('az-input');
        period.classList.add('period');
        period.setAttribute('placeholder', 'Todo o período');
        period.id = 'date';

        searchContainer.appendChild(searchInput);
        searchContainer.appendChild(period);

        const wrapper2 = document.createElement('div');
        wrapper2.classList.add('wrapper');
        wrapper2.classList.add('wrapper2');

        const verticalWrapper1 = document.createElement('div');
        verticalWrapper1.classList.add('verticalWrapper');

        const patrimonialEvolutionContainer = document.createElement('div');
        patrimonialEvolutionContainer.classList.add('patrimonialEvolutionContainer');

        const tempPatrimonialEvolution = document.createElement('img');
        tempPatrimonialEvolution.src = 'assets/images/evolucao-patrimonial.png';

        patrimonialEvolutionContainer.appendChild(tempPatrimonialEvolution);

        verticalWrapper1.appendChild(patrimonialEvolutionContainer);

        const acquiredProductsContainer = document.createElement('div');
        acquiredProductsContainer.classList.add('acquiredProductsContainer');

        const wrapper15 = document.createElement('div');
        wrapper15.classList.add('wrapper3');

        const AquiredProductsLabel = document.createElement('p');
        AquiredProductsLabel.classList.add('totalPerProductLabel');
        AquiredProductsLabel.textContent = 'Produtos adquiridos';

        const productsSearchInput = document.createElement('az-input');
        productsSearchInput.classList.add('searchInput2');
        productsSearchInput.setAttribute('placeholder', 'Buscar');
        productsSearchInput.setAttribute('form', '');
        productsSearchInput.id = 'search';

        wrapper15.appendChild(AquiredProductsLabel);
        wrapper15.appendChild(productsSearchInput);

        acquiredProductsContainer.appendChild(wrapper15);

        const grid = document.createElement('div');
        grid.classList.add('grid');

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
            newProduct.setAttribute('client', '');
            grid.appendChild(newProduct);
        });

        acquiredProductsContainer.appendChild(grid);

        verticalWrapper1.appendChild(acquiredProductsContainer);

        const verticalWrapper2 = document.createElement('div');
        verticalWrapper2.classList.add('verticalWrapper');
        verticalWrapper2.classList.add('verticalWrapper2');

        const totalPerProductContainer = document.createElement('div');
        totalPerProductContainer.classList.add('totalPerProductContainer');

        const totalPerProductLabel = document.createElement('p');
        totalPerProductLabel.classList.add('totalPerProductLabel');
        totalPerProductLabel.textContent = 'Total por Siglas';

        const tempTotalPerProduct = document.createElement('img');
        tempTotalPerProduct.classList.add('tempTotalPerProduct');
        tempTotalPerProduct.src = 'assets/images/total-por-siglas.png';

        totalPerProductContainer.appendChild(totalPerProductLabel);
        totalPerProductContainer.appendChild(tempTotalPerProduct);

        verticalWrapper2.appendChild(totalPerProductContainer);

        const activeByRiskContainer = document.createElement('div');
        activeByRiskContainer.classList.add('activeByRiskContainer');

        const tempActiveByRisk = document.createElement('img');
        tempActiveByRisk.src = 'assets/images/alocação-por-risco.png';

        activeByRiskContainer.appendChild(tempActiveByRisk);

        verticalWrapper2.appendChild(activeByRiskContainer);

        wrapper2.appendChild(verticalWrapper1);
        wrapper2.appendChild(verticalWrapper2);

        const productsListingContainer = document.createElement('div');
        productsListingContainer.classList.add('productsListingContainer');

        for (let index = 0; index < 4; index++) {
            const produtos = [
                "Renda Fixa",
                "Ações",
                "Ouro",
                "Opções",
            ];
            const newProduct = document.createElement('az-client-product');
            newProduct.setAttribute('productTitle', produtos[index]);
            newProduct.setAttribute('productValue', '1.200.000,00');

            productsListingContainer.appendChild(newProduct);
        }

        clientsContainer.appendChild(wrapper1);
        clientsContainer.appendChild(searchContainer);
        clientsContainer.appendChild(wrapper2);
        clientsContainer.appendChild(productsListingContainer);
    } else {
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
        clientName.textContent = 'Nome do cliente';

        const totalInvestedContainer = document.createElement('div');
        totalInvestedContainer.classList.add('headerContainer');

        const totalInvested = document.createElement('p');
        totalInvested.classList.add('totalInvested');
        totalInvested.textContent = 'Total investido';

        const totalValueContainer = document.createElement('div');
        totalValueContainer.classList.add('headerContainer');

        const totalValue = document.createElement('p');
        totalValue.classList.add('totalValue');
        totalValue.textContent = 'Total atual';

        const totalActionsContainer = document.createElement('div');
        totalActionsContainer.classList.add('headerContainer');

        const totalActions = document.createElement('p');
        totalActions.classList.add('totalActions');
        totalActions.textContent = 'Qtd Ativos';

        const detailsButtonContainer = document.createElement('div');
        detailsButtonContainer.classList.add('headerContainer');

        const detailsButton = document.createElement('p');
        detailsButton.classList.add('detailsButton')
        detailsButton.textContent = 'Ações';

        detailsButtonContainer.style.backgroundImage = 'none'
        detailsButtonContainer.style.cursor = 'default';

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

        clientsList.appendChild(clientContainer);

        let i = 1;
        clients.forEach(client => {
            const client1 = document.createElement('az-client');
            client1.setAttribute('clientid', client.id);
            client1.setAttribute('name', client.name);
            client1.setAttribute('totalInvested', client.totalInvested);
            client1.setAttribute('totalValue', client.totalValue);
            client1.setAttribute('totalActions', client.totalActions);
            i % 2 === 0 ? client1.setAttribute('even', '') : null;
            i++;
            clientsList.appendChild(client1);
        });

        clientNameContainer.addEventListener('click', () => {
            const clientsList = elem.shadowRoot.querySelector('.clientsList');
            clientsList.innerHTML = '';
            clientsList.appendChild(clientContainer);
            clients.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (b.name < a.name) {
                    return 1;
                }
                return 0;
            });
            clients.forEach(client => {
                const client1 = document.createElement('az-client');
                client1.setAttribute('clientid', client.id);
                client1.setAttribute('name', client.name);
                client1.setAttribute('totalInvested', client.totalInvested);
                client1.setAttribute('totalValue', client.totalValue);
                client1.setAttribute('totalActions', client.totalActions);
                i % 2 === 0 ? client1.setAttribute('even', '') : null;
                i++;
                clientsList.appendChild(client1);
            });
        });

        totalInvestedContainer.addEventListener('click', () => {
            const clientsList = elem.shadowRoot.querySelector('.clientsList');
            clientsList.innerHTML = '';
            clientsList.appendChild(clientContainer);
            clients.sort((a, b) => {
                if (a.totalInvested > b.totalInvested) {
                    return -1;
                }
                if (b.totalInvested > a.totalInvested) {
                    return 1;
                }
                return 0;
            });
            clients.forEach(client => {
                const client1 = document.createElement('az-client');
                client1.setAttribute('clientid', client.id);
                client1.setAttribute('name', client.name);
                client1.setAttribute('totalInvested', client.totalInvested);
                client1.setAttribute('totalValue', client.totalValue);
                client1.setAttribute('totalActions', client.totalActions);
                i % 2 === 0 ? client1.setAttribute('even', '') : null;
                i++;
                clientsList.appendChild(client1);
            });
        });

        totalValueContainer.addEventListener('click', () => {
            const clientsList = elem.shadowRoot.querySelector('.clientsList');
            clientsList.innerHTML = '';
            clientsList.appendChild(clientContainer);
            clients.sort((a, b) => {
                if (a.totalValue > b.totalValue) {
                    return -1;
                }
                if (b.totalValue > a.totalValue) {
                    return 1;
                }
                return 0;
            });
            clients.forEach(client => {
                const client1 = document.createElement('az-client');
                client1.setAttribute('clientid', client.id);
                client1.setAttribute('name', client.name);
                client1.setAttribute('totalInvested', client.totalInvested);
                client1.setAttribute('totalValue', client.totalValue);
                client1.setAttribute('totalActions', client.totalActions);
                i % 2 === 0 ? client1.setAttribute('even', '') : null;
                i++;
                clientsList.appendChild(client1);
            });
        });

        totalActionsContainer.addEventListener('click', () => {
            const clientsList = elem.shadowRoot.querySelector('.clientsList');
            clientsList.innerHTML = '';
            clientsList.appendChild(clientContainer);
            clients.sort((a, b) => {
                if (a.totalActions > b.totalActions) {
                    return -1;
                }
                if (b.totalActions > a.totalActions) {
                    return 1;
                }
                return 0;
            });
            clients.forEach(client => {
                const client1 = document.createElement('az-client');
                client1.setAttribute('clientid', client.id);
                client1.setAttribute('name', client.name);
                client1.setAttribute('totalInvested', client.totalInvested);
                client1.setAttribute('totalValue', client.totalValue);
                client1.setAttribute('totalActions', client.totalActions);
                i % 2 === 0 ? client1.setAttribute('even', '') : null;
                i++;
                clientsList.appendChild(client1);
            });
        });


        clientsContainer.appendChild(clientsList);
    }

    elem.shadowRoot.appendChild(style);
    elem.shadowRoot.appendChild(RightDiv);
}

export class AZClientsRightDiv extends HTMLElement {
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