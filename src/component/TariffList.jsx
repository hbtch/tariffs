import React from "react";
import TariffItem from "./TariffItem";
import "./TariffList.css"; // Подключаем файл стилей

function TariffList({ tariffs }) {
  return (
    <div className="tariff-list">
      {tariffs.map(tariff => (
        <TariffItem key={tariff.id} tariff={tariff} />
      ))}
    </div>
  );
}

export default TariffList;
