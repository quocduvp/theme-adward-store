import React, { useEffect, useState } from "react";
import { generateShippingSteps } from "./utils";

const styles = {
  container: {
    position: "absolute",
    minWidth: 400,
    background: "#fff",
    borderRadius: 8,
    boxShadow: "0 7px 29px 0 hsl(240deg 5% 41% / 20%)",
    padding: "10px 20px",
    zIndex: 999,
    transform: "translate(-15%, -10%)",
  },
};

const ShippingPopup = ({ popup }) => {
  const [steps, setSteps] = useState([]);
  useEffect(() => {
    const steps = generateShippingSteps();
    setSteps(steps);
  }, []);
  return (
    <div style={styles.container}>
      <div id="step"></div>
      <div id="content">
        <ul>
          {popup.contentItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

ShippingPopup.defaultProps = {
  popup: {
    contentItems: ["text", "text"],
  },
};

export default ShippingPopup;
