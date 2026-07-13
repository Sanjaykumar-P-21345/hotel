"use client";

import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    roomType: "",
    guests: "",
    checkIn: "",
    checkOut: "",
    requests: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("✅ Booking Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* Booking Form */}

        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">

          <h1 className="text-3xl font-bold text-gray-800">
            Hotel Room Booking
          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            Fill in your details to reserve your room.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Guest Details */}

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="John Smith"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block mb-2 font-medium">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 9876543210"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Room Type
                </label>

                <select
                  name="roomType"
                  value={form.roomType}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Room</option>
                  <option>Single Room</option>
                  <option>Double Room</option>
                  <option>Deluxe Room</option>
                  <option>Suite Room</option>
                  <option>Executive Suite</option>
                </select>
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block mb-2 font-medium">
                  Check-In Date
                </label>

                <input
                  type="date"
                  name="checkIn"
                  value={form.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Check-Out Date
                </label>

                <input
                  type="date"
                  name="checkOut"
                  value={form.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

            </div>

            <div>
              <label className="block mb-2 font-medium">
                Number of Guests
              </label>

              <input
                type="number"
                name="guests"
                min="1"
                placeholder="2"
                value={form.guests}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Special Requests
              </label>

              <textarea
                rows="4"
                name="requests"
                placeholder="Any special requirements..."
                value={form.requests}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg text-lg font-semibold transition"
            >
              Confirm Booking
            </button>

          </form>

        </div>

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
                {form.roomType || "-"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Guests</span>
              <span className="font-semibold">
                {form.guests || "0"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Check-In</span>
              <span className="font-semibold">
                {form.checkIn || "-"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Check-Out</span>
              <span className="font-semibold">
                {form.checkOut || "-"}
              </span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Estimated Price</span>
              <span className="text-green-600">
                ₹8,500
              </span>
            </div>

          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-700">
              ✔ Free Wi-Fi
            </p>
            <p className="text-sm text-blue-700">
              ✔ Complimentary Breakfast
            </p>
            <p className="text-sm text-blue-700">
              ✔ Free Parking
            </p>
            <p className="text-sm text-blue-700">
              ✔ 24/7 Customer Support
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}