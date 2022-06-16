import React, { useState } from "react";
import TruckComponent from "../../assets/delivery-truck.svg";
import ShippingDate from "./ShippingDate";
import ShippingPopup from "./ShippingPopup";

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
  const [isShow, setShow] = useState(false);

  return (
    <>
      <div style={{ marginTop: 8 }}></div>
      <div style={styles.shipping_container}>
        <TruckComponent style={styles.icon} />
        <div>
          {label}: <ShippingDate handleShowPopup={setShow} popup={popup} />
        </div>
      </div>
      <div style={shipping_popup_styles}>
        {isShow ? <ShippingPopup popup={popup} /> : null}
      </div>
    </>
  );
};

ESTShipping.defaultProps = {
  label: "Text",
  popup: {
    contentItems: ["text", "text"],
  },
};

export default ESTShipping;
