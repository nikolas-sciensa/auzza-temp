export class AZSlider extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .sliderContainer {
                position: relative;
                margin: 0;
                padding: 0;
                width: 100%;
                height: 20px;
                text-align: center;
            }

            .sliderText {
                font-size: 14px;
                font-weight: 500;
                margin: 8px 0;
            }

            .range {
                pointer-events: none;
                position: absolute;
                overflow: hidden;
                top: -2.5px;
                left: 0;
                width: 100%;
                height: 100%;    
                outline: none;
                margin: 0;
                padding: 0;
            }

            .range::-webkit-slider-thumb {
                pointer-events: all;
                position: relative;
                z-index: 1;
                outline: 0;
            }

            .range::-moz-range-thumb {
                pointer-events: all;
                position: relative;
                z-index: 10;
                -moz-appearance: none;
            }

            .range::-moz-range-track {
                position: relative;
                z-index: -1;
                background-color: rgba(0, 0, 0, 1);
                border: 0;
            }

            .range:last-of-type::-moz-range-track {
                -moz-appearance: none;
                background: none transparent;
                border: 0;
            }

            .range[type=range]::-moz-focus-outer {
                border: 0;
            }

            .range[type=range] {
                -webkit-appearance: none;
                background: none;
            }

            .range[type=range]::-webkit-slider-runnable-track {
                height: 3px;
                border: none;
                background: transparent;
                border-radius: 3px;
            }

            .range[type=range]::-ms-track {
                height: 3px;
                background: transparent;
                border: none;
                border-radius: 3px;
            }

            .range[type=range]::-moz-range-track {
                height: 3px;
                background: transparent;
                border: none;
                border-radius: 3px;
            }

            .range[type=range]::-webkit-slider-thumb {
                -webkit-appearance: none;
                border: none;
                height: 10px;
                width: 10px;
                background: rgba(105, 66, 232, 1);
                border-radius: 50%;
                position: relative;
                z-index: 1000;
            }

            .range[type=range]::-ms-thumb {
                -webkit-appearance: none;
                border: none;
                height: 10px;
                width: 10px;
                background: rgba(105, 66, 232, 1);
                border-radius: 50%;
                position: relative;
                z-index: 1000;
            }

            .range[type=range]::-moz-range-thumb {
                -webkit-appearance: none;
                border: none;
                height: 10px;
                width: 10px;
                background: rgba(105, 66, 232, 1);
                border-radius: 50%;
                position: relative;
                z-index: 1000;
            }

            .range[type=range]:focus {
                outline: none;
            }

            .span1, .span2 {
                margin: 0;
                padding: 0;
                width: 100%;
                height: 3px;
                top: 50%;
                left: 0;
                position: absolute;
                background: rgba(217, 217, 217, 1);
            }

            .span2 {
                background: rgba(105, 66, 232, 1);
            }

            .output {
                color: rgba(42, 15, 84, 1);
                font-size: 12px;
                font-weight: 300;
            }

            .resetContainer {
                background: url('/assets/images/undo.png') no-repeat center center;
                background-size: contain;
                width: 16px;
                height: 16px;
                float: right;
            }
        `;
        const max = parseFloat(this.getAttribute('max'));
        const min = parseFloat(this.getAttribute('min'));
        const interval = parseFloat(max - min);
        const percentage = this.hasAttribute('percentage');

        const container = document.createElement('div');

        const sliderText = document.createElement('p');
        sliderText.classList.add('sliderText');
        sliderText.textContent = this.getAttribute('text');

        const sliderContainer = document.createElement('div');
        sliderContainer.classList.add('sliderContainer');

        if (this.hasAttribute('solo')) {
            const span1 = document.createElement('span');
            span1.classList.add('span1');

            const span2 = document.createElement('span');
            span2.classList.add('span2');

            const input2 = document.createElement('input');
            input2.classList.add('range');
            input2.name = 'input2';
            input2.type = 'range';
            input2.min = 0;
            input2.max = interval;
            input2.value = interval;
            input2.step = percentage ? '0.1' : '1';

            const output2 = document.createElement('span');
            output2.classList.add('output');
            output2.id = 'output2';
            if (this.getAttribute('output') == 'cri') {
                output2.style.fontSize = '12px';
                output2.style.fontWeight = '500';
                output2.innerHTML = 'Quantidade de CRI: ' + parseFloat(input2.value) + parseFloat(min) + ' (BLINC9)';
                
                var updateView = function () {
                    output2.innerHTML = 'Quantidade de CRI: ' + parseFloat(this.value) + parseFloat(min) + ' (BLINC9)';
                    span2.style.width = input2.value / this.getAttribute('max') * 100 + '%';
                };
            } else {
                output2.innerHTML = percentage ?
                    (parseFloat(input2.value) + parseFloat(min)).toFixed(1) + '%' :
                    ((parseFloat(input2.value) + parseFloat(min)) / 1000).toFixed(1) + 'k';
                   
                    var updateView = function () {
                        percentage ?
                            output2.innerHTML = (parseFloat(this.value) + parseFloat(min)).toFixed(1) + '%' :
                            output2.innerHTML = ((parseFloat(this.value) + parseFloat(min)) / 1000).toFixed(1) + 'k';
                        span2.style.width = input2.value / this.getAttribute('max') * 100 + '%';
                    };
            }


            input2.addEventListener('input', updateView);

            sliderContainer.appendChild(input2);
            sliderContainer.appendChild(span1);
            sliderContainer.appendChild(span2);

            container.appendChild(sliderContainer);
            container.appendChild(output2);
        } else {
            const span1 = document.createElement('span');
            span1.classList.add('span1');

            const span2 = document.createElement('span');
            span2.classList.add('span2');

            const input1 = document.createElement('input');
            input1.classList.add('range');
            input1.name = 'input1';
            input1.type = 'range';
            input1.min = 0;
            input1.max = interval;
            input1.value = 0;
            input1.step = percentage ? '0.1' : '1'

            const input2 = document.createElement('input');
            input2.classList.add('range');
            input2.name = 'input2';
            input2.type = 'range';
            input2.min = 0;
            input2.max = interval;
            input2.value = interval;
            input2.step = percentage ? '0.1' : '1'

            const output1 = document.createElement('span');
            output1.classList.add('output');
            output1.id = 'output1';
            output1.innerHTML = percentage ?
                (parseFloat(input1.value) + parseFloat(min)).toFixed(1) + '%' :
                ((parseFloat(input1.value) + parseFloat(min)) / 1000).toFixed(1) + 'k';

            const output2 = document.createElement('span');
            output2.classList.add('output');
            output2.id = 'output2';
            output2.innerHTML = percentage ?
                (parseFloat(input2.value) + parseFloat(min)).toFixed(1) + '%' :
                ((parseFloat(input2.value) + parseFloat(min)) / 1000).toFixed(1) + 'k';

            const pipe = document.createElement('span');
            pipe.classList.add('output');
            pipe.innerHTML = ' | ';

            const resetContainer = document.createElement('div');
            resetContainer.classList.add('resetContainer');

            var updateView = function () {
                if (this.getAttribute('name') === 'input1') {
                    percentage ?
                        output1.innerHTML = (parseFloat(this.value) + parseFloat(min)).toFixed(1) + '%' :
                        output1.innerHTML = ((parseFloat(this.value) + parseFloat(min)) / 1000).toFixed(1) + 'k';
                } else {
                    percentage ?
                        output2.innerHTML = (parseFloat(this.value) + parseFloat(min)).toFixed(1) + '%' :
                        output2.innerHTML = ((parseFloat(this.value) + parseFloat(min)) / 1000).toFixed(1) + 'k';
                }
                if (parseInt(input1.value) > parseInt(input2.value)) {
                    span2.style.width = (input1.value - input2.value) / this.getAttribute('max') * 100 + '%';
                    span2.style.left = input2.value / this.getAttribute('max') * 100 + '%';
                } else {
                    span2.style.width = (input2.value - input1.value) / this.getAttribute('max') * 100 + '%';
                    span2.style.left = input1.value / this.getAttribute('max') * 100 + '%';
                }
            };

            resetContainer.addEventListener('click', () => {
                input1.value = 0;
                input2.value = interval;
                span2.style.width = '100%';
                span2.style.left = '0%';
                if (percentage) {
                    output1.innerHTML = (parseFloat(input1.value) + parseFloat(min)).toFixed(1) + '%';
                    output2.innerHTML = (parseFloat(input2.value) + parseFloat(min)).toFixed(1) + '%';
                } else {
                    output1.innerHTML = ((parseFloat(input1.value) + parseFloat(min)) / 1000).toFixed(1) + 'k';
                    output2.innerHTML = ((parseFloat(input2.value) + parseFloat(min)) / 1000).toFixed(1) + 'k';
                }
            });

            input1.addEventListener('input', updateView);
            input2.addEventListener('input', updateView);

            resetContainer.click();

            sliderContainer.appendChild(input1);
            sliderContainer.appendChild(input2);
            sliderContainer.appendChild(span1);
            sliderContainer.appendChild(span2);

            container.appendChild(resetContainer);
            container.appendChild(sliderText);
            container.appendChild(sliderContainer);
            container.appendChild(output1);
            container.appendChild(pipe);
            container.appendChild(output2);
        }


        shadowRoot.appendChild(style);
        shadowRoot.appendChild(container);
    }
}