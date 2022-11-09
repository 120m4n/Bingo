customElements.define(
  "my-card",
  class extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });

        const template = document.getElementById("my-card");
        const templateContent = template.content;
        
        const flipCard = () => {
          shadowRoot.querySelector(".card").classList.toggle("flipCard");
        }
        
        
        shadowRoot.appendChild(templateContent.cloneNode(true));
      const card = shadowRoot.querySelector(".card");
      const span = this.querySelector("span");
        card.addEventListener('click', (e) => {
        flipCard();

          const flipEvent = new CustomEvent("custom:flip", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: {
              number: span.innerText,
              action: card.classList.contains("flipCard") ? "flip" : "unflip",
            },
          });
          e.target.dispatchEvent(flipEvent);
      });

    }
  }
);
