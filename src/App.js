import React from "react";
import TariffList from "./component/TariffList";
import "./App.css";

function App() {
  const tariffs = [
    { id: 1, name: "Безлимитный 300", description: "до 10 Мбит/сек", price: "300 руб/мес" },
    { id: 2, name: "Безлимитный 450", description: "до 50 Мбит/сек", price: "450 руб/мес" },
    { id: 3, name: "Безлимитный 550", description: "до 100 Мбит/сек", price: "550 руб/мес" },
    { id: 4, name: "Безлимитный 1000", description: "до 200 Мбит/сек", price: "1000 руб/мес" },
  ];

  return (
    <div className="app-container">
    <h1 className="app-heading">Tariffs</h1>
    <div className="tariff-list-container"> {/* Добавляем контейнер для центрирования */}
      <TariffList tariffs={tariffs} />
    </div>
  </div>
  );
}

export default App;
