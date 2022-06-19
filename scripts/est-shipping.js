import ReactDOM from "react-dom/client";
import ESTShipping from "./components/ESTShipping";

class ESTShippingElm extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div");
    this.appendChild(mountPoint);
    const popupItem1 = this.getAttribute("popupItem1");
    const popupItem2 = this.getAttribute("popupItem2");
    const productType = this.getAttribute("productType");
    const label = this.getAttribute("label");
    const root = ReactDOM.createRoot(mountPoint);
    root.render(
      <ESTShipping
        label={label}
        popup={{
          contentItems: [popupItem1, popupItem2],
        }}
        productType={productType}
      />
    );
  }
}
customElements.define("est-shipping", ESTShippingElm);
