import React from "react";

function TariffItem({ tariff }) {
  return (
    <div>
      <h3>{tariff.name}</h3>
      <p>{tariff.description}</p>
      <p>Price: {tariff.price}</p>
    </div>
  );
}

export default TariffItem;