import React from "react";
import TariffItem from "./TariffItem";

function TariffList({ tariffs }) {
  return (
    <div>
      {tariffs.map(tariff => (
        <TariffItem key={tariff.id} tariff={tariff} />
      ))}
    </div>
  );
}

export default TariffList;