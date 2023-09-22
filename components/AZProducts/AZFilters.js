export class AZFilters extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .filtersContainer {
                padding: 16px;
                display: flex;
                flex-direction: column;
                align-items: left;
                justify-content: flex-start;
                width: calc(100% - 32px);
                height: calc(100% - 32px);
            }

            .text {
                font-size: 14px;
                font-weight: 500;
            }

            .title {
                margin-top: 20px;
                margin-bottom: 20px;
                font-size: 16px;
                font-weight: 700;
                color: rgba(42, 15, 84, 1);         
            }

            .checkboxContainer {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
            }

            .checkboxText {
                margin-top: 16px;
                margin-left: 14px;
            }

            .checkbox {
                margin: 0;
                margin-top: 16px;
                width: 24px;
                height: 24px;
                border: 1.5px solid rgba(24, 9, 48, 1);
                border-radius: 4px;
            }

            .controlsContainer {
                display: flex;
                min-width: 100%;
                margin-bottom: 16px;
            }

            .divider {
                margin-top: 20px;
                margin-bottom: 20px;
                width: 100%;
                height: 1px;
                background: rgba(212, 212, 212, 1);
            }

            .divider2 {
                margin-top: 4px;
            }

            .sliderContainer {
                margin-bottom: 20px;
            }
        `;

        const filtersContainer = document.createElement('div');
        filtersContainer.classList.add('filtersContainer');

        const searchInput = document.createElement('az-input');
        searchInput.setAttribute('id', 'search');
        searchInput.setAttribute('placeholder', 'Busca');

        const title = document.createElement('span');
        title.classList.add('title');
        title.textContent = 'Período';

        const text1 = document.createElement('span');
        text1.classList.add('text');
        text1.textContent = 'Aplicação mínima (3.000 a 25.000)';

        const datePicker1 = document.createElement('az-input');
        datePicker1.classList.add('datePicker');
        datePicker1.setAttribute('id', 'filterDate');

        const text2 = document.createElement('span');
        text2.classList.add('text');
        text2.textContent = 'Aplicação mínima (3.000 a 25.000)';

        const datePicker2 = document.createElement('az-input');
        datePicker2.classList.add('datePicker');
        datePicker2.setAttribute('id', 'filterDate');

        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('checkboxContainer');

        const checkbox = document.createElement('input');
        checkbox.classList.add('checkbox');
        checkbox.setAttribute('type', 'checkbox');

        const checkboxText = document.createElement('span');
        checkboxText.classList.add('text');
        checkboxText.classList.add('checkboxText');
        checkboxText.textContent = 'Exibir fundos sem classificação';

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(checkboxText);

        const divider1 = document.createElement('div');
        divider1.classList.add('divider');

        const controlsContainer1 = document.createElement('div');
        controlsContainer1.classList.add('controlsContainer');

        const showCri = document.createElement('az-switch');
        showCri.textContent = 'CRI';

        const showActives = document.createElement('az-switch');
        showActives.textContent = 'Ativos';

        controlsContainer1.appendChild(showCri);
        controlsContainer1.appendChild(showActives);

        const controlsContainer2 = document.createElement('div');
        controlsContainer2.classList.add('controlsContainer');

        const showCra = document.createElement('az-switch');
        showCra.textContent = 'CRA';

        const showOthers = document.createElement('az-switch');
        showOthers.textContent = 'Outros';

        controlsContainer2.appendChild(showCra);
        controlsContainer2.appendChild(showOthers);

        const divider2 = document.createElement('div');
        divider2.classList.add('divider');
        divider2.classList.add('divider2');

        const sliderContainer1 = document.createElement('div');
        sliderContainer1.classList.add('sliderContainer');

        const minimunAplication = document.createElement('az-slider');
        minimunAplication.setAttribute('text', 'Aplicação mínima (3.000 a 25.000)');
        minimunAplication.setAttribute('min', '3000');
        minimunAplication.setAttribute('max', '25000');

        sliderContainer1.appendChild(minimunAplication);

        const sliderContainer2 = document.createElement('div');
        sliderContainer2.classList.add('sliderContainer');

        const minimunMovement = document.createElement('az-slider');
        minimunMovement.setAttribute('text', 'Movimentação mínima (3.000 a 25.000)');
        minimunMovement.setAttribute('min', '3000');
        minimunMovement.setAttribute('max', '25000');

        sliderContainer2.appendChild(minimunMovement);

        const lastMonthPerformance = document.createElement('az-slider');
        lastMonthPerformance.setAttribute('text', 'Perf. último mês (0.8% a 10%)');
        lastMonthPerformance.setAttribute('min', '0.8');
        lastMonthPerformance.setAttribute('max', '10.0');
        lastMonthPerformance.setAttribute('percentage', '');

        filtersContainer.appendChild(searchInput);
        filtersContainer.appendChild(title);
        filtersContainer.appendChild(text1);
        filtersContainer.appendChild(datePicker1);
        filtersContainer.appendChild(text2);
        filtersContainer.appendChild(datePicker2);
        filtersContainer.appendChild(checkboxContainer);
        filtersContainer.appendChild(divider1);
        filtersContainer.appendChild(controlsContainer1);
        filtersContainer.appendChild(controlsContainer2);
        filtersContainer.appendChild(divider2);
        filtersContainer.appendChild(sliderContainer1);
        filtersContainer.appendChild(sliderContainer2);
        filtersContainer.appendChild(lastMonthPerformance);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(filtersContainer);
    }
}