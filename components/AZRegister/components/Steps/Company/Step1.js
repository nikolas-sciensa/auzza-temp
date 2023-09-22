export class AZRegisterCompanyStep1 extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .form {
                width: 100%;
                width: 270px;
                flex: 1;
            }

            .text {
                font-size: 18px;
                font-weight: 700;
                line-height: 21.78px;
            }

            .instruction {
                font-size: 12px;
                font-weight: 400;
                line-height: 14.52px;
                margin-bottom: 32px;
            }

            .companyContainer {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 100%;
            }

            .companyName {
                width: 50%;
                margin-right: 8px;
            }

            .tradingName {
                width: 50%;
                margin-left: 8px;
            }

            .adressComplements {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 100%;
            }

            .adressNumber {
                width: 50%;
                margin-right: 4px;
            }

            .adressComplement {
                width: 50%;
                margin-left: 4px;
            }

            @media (min-width: 768px) {
                .companyContainer {
                    max-width: 100%;
                }

                .companyName {
                    margin-right: 8px;
                }
    
                .tradingName {
                    margin-left: 8px;
                }
            }
        `;

        const form = document.createElement('form');
        form.classList.add('form');

        const formText = document.createElement('p');
        formText.classList.add('text');
        formText.textContent = 'Insira os dados da sua empresa';

        const instruction = document.createElement('p');
        instruction.classList.add('instruction');
        instruction.textContent = 'Preencha o campo de CNPJ para completar as informações restantes.';

        const cnpj = document.createElement('az-input');
        cnpj.classList.add('cnpj');
        cnpj.setAttribute('placeholder', 'CNPJ');
        cnpj.setAttribute('form', '')
        cnpj.setAttribute('maxLength', '18')
        cnpj.setAttribute('id', 'cnpj')

        const companyContainer = document.createElement('div');
        companyContainer.classList.add('companyContainer');

        const companyNameContainer = document.createElement('div');
        companyNameContainer.classList.add('companyName');
        const companyName = document.createElement('az-input');
        companyName.setAttribute('placeholder', 'Razão Social');
        companyName.setAttribute('form', '')

        const tradingNameContainer = document.createElement('div');
        tradingNameContainer.classList.add('tradingName');
        const tradingName = document.createElement('az-input');
        tradingName.setAttribute('placeholder', 'Nome Fantasia');
        tradingName.setAttribute('form', '')

        companyNameContainer.appendChild(companyName);
        tradingNameContainer.appendChild(tradingName);
        companyContainer.appendChild(companyNameContainer);
        companyContainer.appendChild(tradingNameContainer);

        const postalCode = document.createElement('az-input');
        postalCode.classList.add('postalCode');
        postalCode.setAttribute('placeholder', 'CEP');
        postalCode.setAttribute('form', '')
        postalCode.setAttribute('maxLength', '9')
        postalCode.setAttribute('id', 'cep')

        const adress = document.createElement('az-input');
        adress.classList.add('adress');
        adress.setAttribute('placeholder', 'Endereço');
        adress.setAttribute('form', '')

        const adressComplements = document.createElement('div');
        adressComplements.classList.add('adressComplements');

        const adressNumber = document.createElement('az-input');
        adressNumber.classList.add('adressNumber');
        adressNumber.setAttribute('placeholder', 'Número');
        adressNumber.setAttribute('form', '')
        adressNumber.setAttribute('id', 'number')

        const adressComplement = document.createElement('az-input');
        adressComplement.classList.add('adressComplement');
        adressComplement.setAttribute('placeholder', 'Complemento');
        adressComplement.setAttribute('form', '')

        adressComplements.appendChild(adressNumber);
        adressComplements.appendChild(adressComplement);

        const neighborhood = document.createElement('az-input');
        neighborhood.classList.add('neighborhood');
        neighborhood.setAttribute('placeholder', 'Bairro');
        neighborhood.setAttribute('form', '')

        const city = document.createElement('az-input');
        city.classList.add('city');
        city.setAttribute('placeholder', 'Cidade');
        city.setAttribute('form', '')

        const state = document.createElement('az-select');
        state.classList.add('state');
        state.setAttribute('placeholder', 'Estado');
        state.setAttribute('form', '')
        state.setAttribute('registration', '')

        form.appendChild(formText);
        form.appendChild(instruction);
        form.appendChild(cnpj);
        form.appendChild(companyContainer);
        form.appendChild(document.createElement('az-divider'));
        form.appendChild(postalCode);
        form.appendChild(adress);
        form.appendChild(adressComplements);
        form.appendChild(neighborhood);
        form.appendChild(city);
        form.appendChild(state);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(form);
    }
}