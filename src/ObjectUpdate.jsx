import { useState } from "react";

export default function ObjectUpdate() {
  const [car, setCar] = useState({
    name: "Mustang",
    brand: "Ford",
    year: "2024",
  });

  const handleName = (e) => {
    setCar((c) => ({ ...c, name: e.target.value }));
  };
  const handleBrand = (e) => {
    setCar((c) => ({ ...c, brand: e.target.value }));
  };
  const handleYear = (e) => {
    setCar((c) => ({ ...c, year: e.target.value }));
  };
  return (
    <>
      <h1>
        My favourite car is: {car.name} {car.brand} {car.year}{" "}
      </h1>
      <div>
        <input type="text" value={car.name} onChange={handleName} />
        <br />
        <input type="text" value={car.brand} onChange={handleBrand} />
        <br />
        <input type="number" value={car.year} onChange={handleYear} />
      </div>
    </>
  );
}
