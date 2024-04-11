import React from "react";
import TariffItem from "./TariffItem";
import "./TariffList.css";

function TariffList({ tariffs }) {
  return (
    <div className="tariffList"> {/* Используем className="tariffList" */}
      {tariffs.map((tariff, index) => (
        <TariffItem
          key={tariff.id}
          tariff={tariff}
          isHighlighted={index === 2}
        />
      ))}
    </div>
  );
}

export default TariffList;
