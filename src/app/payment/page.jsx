"use client";

export default function PaymentPage() {
  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment Successful");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">
        Payment Form
      </h1>

      <form
        onSubmit={handlePayment}
        className="bg-white p-6 rounded-lg shadow"
      >
        <input
          placeholder="Card Holder Name"
          className="w-full border p-3 mb-3"
        />

        <input
          placeholder="Card Number"
          className="w-full border p-3 mb-3"
        />

        <input
          placeholder="CVV"
          className="w-full border p-3 mb-3"
        />

        <button className="bg-green-600 text-white px-5 py-3 rounded">
          Pay Now
        </button>
      </form>
    </div>
  );
}