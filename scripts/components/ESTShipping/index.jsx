import React, { useState } from "react";
import TruckComponent from "../../assets/delivery-truck.svg";
import ShippingDate from "./ShippingDate";
import ShippingPopup from "./ShippingPopup";
import "./stype.scss"
const styles = {
  shipping_container: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  icon: {
    marginRight: "calc(var(--font-heading-scale) * .5rem)",
  },
};

const shipping_popup_styles = {
  position: "relative",
  display: "inline-block",
};

const ESTShipping = ({ label, popup }) => {
  const [isShow, setShow] = useState(true);

  return (
    <div style={shipping_popup_styles}>
      <div style={{ marginTop: 8 }}></div>
      <div style={styles.shipping_container}>
        <TruckComponent style={styles.icon} />
        <div>
          {label}: <ShippingDate handleShowPopup={setShow} popup={popup} />
        </div>
      </div>
  
        {isShow ? <ShippingPopup popup={popup} /> : null}
      {/* </div> */}
    </div>
  );
};

ESTShipping.defaultProps = {
  label: "Text",
  popup: {
    contentItems: ["text", "text"],
  },
};

export default ESTShipping;
