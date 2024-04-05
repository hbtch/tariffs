import React from "react";
import TariffList from "./component/TariffList";

function App() {
  const tariffs = [
    { id: 1, name: "Tariff A", description: "Description for Tariff A", price: "$10/month" },
    { id: 2, name: "Tariff B", description: "Description for Tariff B", price: "$15/month" },
    { id: 3, name: "Tariff C", description: "Description for Tariff C", price: "$20/month" }
  ];

  return (
    <div>
      <h1>Mobile Network Tariffs</h1>
      <TariffList tariffs={tariffs} />
    </div>
  );
}

export default App;
