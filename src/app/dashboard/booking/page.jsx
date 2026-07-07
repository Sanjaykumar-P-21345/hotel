"use client";

import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Submitted");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">
        Hotel Booking Form
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow"
      >
        <input
          className="w-full border p-3 mb-3"
          placeholder="Guest Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <select
          className="w-full border p-3 mb-3"
          onChange={(e) =>
            setForm({
              ...form,
              roomType: e.target.value,
            })
          }
        >
          <option>Select Room</option>
          <option>Single Room</option>
          <option>Double Room</option>
          <option>Suite Room</option>
        </select>

        <input
          type="date"
          className="w-full border p-3 mb-3"
          onChange={(e) =>
            setForm({
              ...form,
              checkIn: e.target.value,
            })
          }
        />

        <input
          type="date"
          className="w-full border p-3 mb-3"
          onChange={(e) =>
            setForm({
              ...form,
              checkOut: e.target.value,
            })
          }
        />

        <button className="bg-green-600 text-white px-5 py-3 rounded">
          Book Room
        </button>
      </form>
    </div>
  );
}