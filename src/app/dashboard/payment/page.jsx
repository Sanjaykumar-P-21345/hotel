"use client";

import { useState } from "react";

export default function PaymentPage() {
  const [payment, setPayment] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setPayment({
      ...payment,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    alert("✅ Payment Successful!\nYour booking has been confirmed.");

    setPayment({
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-10">
      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl w-full">

        {/* Booking Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 h-fit">

          <h2 className="text-2xl font-bold mb-6">
            Booking Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span className="text-gray-500">Hotel</span>
              <span className="font-semibold">
                Grand Palace Hotel
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Room</span>
              <span className="font-semibold">
                Deluxe Room
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Check-In</span>
              <span className="font-semibold">
                20 Jul 2026
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Check-Out</span>
              <span className="font-semibold">
                22 Jul 2026
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Guests</span>
              <span className="font-semibold">
                2 Adults
              </span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total Amount</span>
              <span className="text-green-600">
                ₹8,500
              </span>
            </div>

          </div>

        </div>

        {/* Payment Form */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Secure Payment
          </h1>

          <p className="text-gray-500 mb-8">
            Complete your payment to confirm your booking.
          </p>

          <form
            onSubmit={handlePayment}
            className="space-y-6"
          >

            <div>
              <label className="block mb-2 font-medium">
                Card Holder Name
              </label>

              <input
                type="text"
                name="cardName"
                value={payment.cardName}
                onChange={handleChange}
                placeholder="John Smith"
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Card Number
              </label>

              <input
                type="text"
                name="cardNumber"
                value={payment.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-medium">
                  Expiry Date
                </label>

                <input
                  type="month"
                  name="expiry"
                  value={payment.expiry}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  CVV
                </label>

                <input
                  type="password"
                  name="cvv"
                  value={payment.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  maxLength={4}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-700">
                🔒 Your payment information is encrypted and securely processed.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-4 rounded-lg text-lg"
            >
              Pay ₹8,500
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}