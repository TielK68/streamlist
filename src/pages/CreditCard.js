import { useState } from "react";

function CreditCard() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [message, setMessage] = useState("");

  const formatCardNumber = (value) => {
    const numbersOnly = value.replace(/\D/g, "").slice(0, 16);
    return numbersOnly.replace(/(.{4})/g, "$1 ").trim();
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cardNumber.length !== 19 || !cardName || !expiration || !cvv) {
      setMessage("Please complete all credit card fields using the required format.");
      return;
    }

    const cardData = {
      cardName,
      cardNumber,
      expiration,
      cvv,
    };

    localStorage.setItem("streamListCreditCard", JSON.stringify(cardData));
    setMessage("Credit card information saved successfully.");
  };

  return (
    <div className="page">
      <div className="credit-card-container">
        <h2>Credit Card Management</h2>

        <p>
          Enter payment information to complete checkout. Card information is
          saved to Local Storage for this project demonstration.
        </p>

        {message && <p className="warning">{message}</p>}

        <form onSubmit={handleSubmit} className="credit-card-form">
          <label>Name on Card</label>
          <input
            type="text"
            placeholder="Itiel King"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />

          <label>Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="19"
          />

          <label>Expiration Date</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
            maxLength="5"
          />

          <label>CVV</label>
          <input
            type="password"
            placeholder="123"
            value={cvv}
            onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))}
            maxLength="3"
          />

          <button type="submit">Save Card</button>
        </form>
      </div>
    </div>
  );
}

export default CreditCard;