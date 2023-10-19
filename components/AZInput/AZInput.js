function updateStyle(elem) {
    const style = elem.shadowRoot.querySelector('style');

    style.textContent = `
            .inputContainer {
                display: flex;
                align-items: center;
                flex-direction: row;
                flex: 1;
            }
            
            input {
                border: 1px solid rgba(181, 176, 199, 1);
                padding: 10px;
                gap: 10px;
                margin-top: 10px;
                margin-bottom: 10px;
                width: 100%;
                background: rgba(255, 255, 255, 0.3);
                flex: 1;
                height: 15px
            }

            input::placeholder {
                color: ${elem.hasAttribute('form') ? 'rgba(39, 14, 79, 0.5);' : 'rgba(42, 15, 84, 1);'}
                font-weight: 500;
                letter-spacing: 0em;
                text-align: left;
            }

            .search {
                background-image: url('../../../../../assets/images/search.png');
                background-repeat: no-repeat;
                background-position: center left 10px;
                background-size: 16px 16px;
            }

            .search::placeholder {
                padding-left: 28px;
            }
            
            .cnpj {
                background-image: url('../../../../../assets/images/search.png');
                background-repeat: no-repeat;
                background-position: center right 10px;
                background-size: 16px 16px;
            }

            .birth {
                background-image: url('../../../../../assets/images/calendar.png');
                background-repeat: no-repeat;
                background-position: center right 10px;
                background-size: 16px 16px;
            }

            .birth::-webkit-calendar-picker-indicator {
                opacity: 0;
            }

            .date {
                max-width: 100%;
                background-image: url('assets/images/calendar.png');
                background-repeat: no-repeat;
                background-position: center right 10px;
                background-size: 16px 16px;
                font-family: Inter;
                font-size: 14px;
                font-weight: 500;
            }

            .date::-webkit-calendar-picker-indicator {
                opacity: 0;
            }

            .filterDate {
                max-width: 50%;
                background-image: url('assets/images/calendar.png');
                background-repeat: no-repeat;
                background-position: center right 10px;
                background-size: 16px 16px;
                font-family: Inter;
                font-size: 14px;
                font-weight: 500;
            }

            .filterDate::-webkit-calendar-picker-indicator {
                opacity: 0;
            }

            .productDate {
                min-width: 100%;
                background-image: url('assets/images/calendar.png');
                background-repeat: no-repeat;
                background-position: center right 10px;
                background-size: 16px 16px;
                font-family: Inter;
                font-size: 14px;
                font-weight: 500;
                flex: 0;
            }

            .productDate::-webkit-calendar-picker-indicator {
                opacity: 0;
            }
        `;

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('inputContainer');

    const input = document.createElement('input');

    input.type = 'text';
    input.autocomplete = 'on';
    if (elem.hasAttribute('placeholder')) input.setAttribute('placeholder', elem.getAttribute('placeholder'));
    input.maxLength = elem.hasAttribute('maxLength') ? elem.getAttribute('maxLength') : 100;
    input.id = elem.hasAttribute('id') ? elem.getAttribute('id') : '';

    switch (input.id) {
        case 'cpf':
            input.addEventListener("keyup", function CPFFormat(e) {
                let v = e.target.value.replace(/\D/g, "");
                v = v.replace(/(\d{3})(\d)/, "$1.$2");
                v = v.replace(/(\d{3})(\d)/, "$1.$2");
                v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                e.target.value = v;
            })
            break;

        case 'cnpj':
            input.addEventListener("keyup", function CNPJFormat(e) {
                let v = e.target.value.replace(/\D/g, "");
                v = v.replace(/^(\d{2})(\d)/, "$1.$2");
                v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
                v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
                v = v.replace(/(\d{4})(\d)/, "$1-$2");
                e.target.value = v;
            })

            input.classList.add('cnpj');

            break;

        case 'birth':
            input.classList.add('birth');
            input.type = 'date';

            break;

        case 'email':
            input.type = 'email';
            break;

        case 'phone':
            input.addEventListener("keyup", function PhoneFormat(e) {
                let v = e.target.value.replace(/\D/g, "");
                v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
                v = v.replace(/(\d)(\d{4})$/, "$1-$2");
                e.target.value = v;
            })
            break;

        case 'cep':
            input.addEventListener("keyup", function CEPFormat(e) {
                let v = e.target.value.replace(/\D/g, "");
                v = v.replace(/^(\d{5})(\d)/, "$1-$2");
                e.target.value = v;
            })
            break;

        case 'number':
            input.type = 'number';
            break;

        case 'search':
            input.classList.add('search');
            break;

        case 'date':
            input.classList.add('date');
            input.type = 'text';
            input.onfocus = (e) => {
                e.target.type = 'date';
            }

            input.onblur = (e) => {
                if (e.target.id === 'date') {
                    e.target.type = 'text';
                    let date = new Date(e.target.value);
                    let month = date.getMonth();
                    let year = date.getFullYear();
                    let monthName = '';
                    switch (month) {
                        case 0:
                            monthName = 'Janeiro';
                            break;
                        case 1:
                            monthName = 'Fevereiro';
                            break;
                        case 2:
                            monthName = 'Março';
                            break;
                        case 3:
                            monthName = 'Abril';
                            break;
                        case 4:
                            monthName = 'Maio';
                            break;
                        case 5:
                            monthName = 'Junho';
                            break;
                        case 6:
                            monthName = 'Julho';
                            break;
                        case 7:
                            monthName = 'Agosto';
                            break;
                        case 8:
                            monthName = 'Setembro';
                            break;
                        case 9:
                            monthName = 'Outubro';
                            break;
                        case 10:
                            monthName = 'Novembro';
                            break;
                        case 11:
                            monthName = 'Dezembro';
                            break;
                        default:
                            break;
                    }
                    if (monthName) {
                        e.target.value = `${monthName} ${year}`;
                    }
                }
            }
            break;

        case 'filterDate':
            input.classList.add('filterDate');
            input.type = 'text';
            input.onfocus = (e) => {
                e.target.type = 'date';
            }

            input.onblur = (e) => {
                if (e.target.id === 'filterDate') {
                    e.target.type = 'text';
                    let date = new Date(e.target.value);
                    let month = date.getMonth();
                    let year = date.getFullYear();
                    let monthName = '';
                    switch (month) {
                        case 0:
                            monthName = 'Janeiro';
                            break;
                        case 1:
                            monthName = 'Fevereiro';
                            break;
                        case 2:
                            monthName = 'Março';
                            break;
                        case 3:
                            monthName = 'Abril';
                            break;
                        case 4:
                            monthName = 'Maio';
                            break;
                        case 5:
                            monthName = 'Junho';
                            break;
                        case 6:
                            monthName = 'Julho';
                            break;
                        case 7:
                            monthName = 'Agosto';
                            break;
                        case 8:
                            monthName = 'Setembro';
                            break;
                        case 9:
                            monthName = 'Outubro';
                            break;
                        case 10:
                            monthName = 'Novembro';
                            break;
                        case 11:
                            monthName = 'Dezembro';
                            break;
                        default:
                            break;
                    }
                    if (monthName) {
                        e.target.value = `${monthName} ${year}`;
                    }
                }
            }
            break;

        case 'productDate':
            input.classList.add('productDate');
            input.type = 'date';
            input.onfocus = (e) => {
                e.target.type = 'date';
            }

            input.onblur = (e) => {
                if (e.target.id === 'productDate') {
                    e.target.type = 'text';
                    let date = new Date(e.target.value);
                    let day = date.getDate();
                    let month = date.getMonth();
                    let year = date.getFullYear();
                    if (day) {
                        e.target.value = `${day + 1}/${month < 9 ? '0' + (month + 1) : month + 1}/${year}`;
                    }
                }
            }
            break;

        default:
            break;
    }

    inputContainer.appendChild(input);

    elem.shadowRoot.appendChild(style);
    elem.shadowRoot.appendChild(inputContainer);
}

export class AZInput extends HTMLElement {
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