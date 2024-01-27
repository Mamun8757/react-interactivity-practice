import { useState } from "react";
import ColorPicker from "./ColorPicker.jsx";
import ObjectUpdate from "./ObjectUpdate.jsx";
import UpdaterFunction from "./UpdaterFunction.jsx";

export default function App() {
  const [name, setName] = useState("Guest");
  const [paymentType, setPaymentType] = useState("");
  const [shipping, setShipping] = useState("");

  //All function start from here

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlepaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };
  return (
    <div>
      <input value={name} onChange={handleNameChange}></input>
      <p>Name: {name}</p>

      <select value={paymentType} onChange={handlepaymentTypeChange}>
        <option value="">select an option</option>
        <option value="visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="Paypal">Paypal</option>
      </select>
      <p>Payment Type: {paymentType}</p>

      <label>
        <input
          type="radio"
          value="pick-up"
          checked={shipping === "pick-up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="cod"
          checked={shipping === "cod"}
          onChange={handleShippingChange}
        />
        COD
      </label>

      <p>Payment Type: {shipping}</p>

      <ColorPicker />
      <br></br>
      <UpdaterFunction />
      <br />
      <ObjectUpdate />
    </div>
  );
}
