customElements.define(
  "my-card",
  class extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });

        const template = document.getElementById("my-card");
        const templateContent = template.content;
        
        const flipCard = () => {
            //check if the card has not class noFlip
          if (!shadowRoot.querySelector(".card").classList.contains("noFlip")) {
            shadowRoot.querySelector(".card").classList.toggle("flipCard");
          }
        }

        shadowRoot.appendChild(templateContent.cloneNode(true));

        shadowRoot.querySelector('.card').addEventListener('click', flipCard);

    }
  }
);
