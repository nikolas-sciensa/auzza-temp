export class AZLink extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });

        const style = document.createElement("style");
        style.textContent = `
            .link {
              font-size: 12px;
              font-weight: 500;
              line-height: 15px;
              letter-spacing: 0em;
              text-align: left;
              color: rgba(42, 15, 84, 1);
            }
        `;

        const link = document.createElement("a");
        if (this.hasAttribute("href")) link.setAttribute("href", this.getAttribute("href"));
        else link.setAttribute("href", "#");
        link.textContent = this.textContent;
        link.classList.add("link");

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(link);
    }
}