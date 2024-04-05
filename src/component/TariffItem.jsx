import React from "react";
import "./TariffItem.css"; // Подключаем файл стилей

function TariffItem({ tariff }) {
  return (
    <div className="tariff-item">
      <h3 className="tariff-name">{tariff.name}</h3>
      <p className="tariff-price">{tariff.price}</p>
      <p className="tariff-description">{tariff.description}</p>
    </div>
  );
}

export default TariffItem;
