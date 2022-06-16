import React from "react";

const shipping_date_styles = {
  date_text: {
    borderBottom: "1px dashed",
    fontWeight: 700,
    cursor: "pointer",
  },
};

const ShippingDate = ({ popup, handleShowPopup }) => {
  return (
    <>
      <b
        onMouseEnter={() => handleShowPopup(true)}
        onMouseLeave={() => handleShowPopup(false)}
        className="cursor_pointer"
        style={shipping_date_styles.date_text}
      >
        Jun 21 - 28
      </b>
    </>
  );
};

export default ShippingDate;
