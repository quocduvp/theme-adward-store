import ReactDOM from "react-dom/client";
import ESTShipping from "./components/ESTShipping";

class ESTShippingElm extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div");
    this.attachShadow({ mode: "closed" }).appendChild(mountPoint);
    const popupItem1 = this.getAttribute("popupItem1");
    const popupItem2 = this.getAttribute("popupItem2");
    const label = this.getAttribute("label");
    console.log(this.getAttribute("productType"))
    const root = ReactDOM.createRoot(mountPoint);
    root.render(
      <ESTShipping
        label={label}
        popup={{
          contentItems: [popupItem1, popupItem2],
        }}
      />
    );
  }
}
customElements.define("est-shipping", ESTShippingElm);
