"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">
        Hotel Dashboard
      </h2>

      <nav className="flex flex-col gap-4">
        <Link
          href="/dashboard"
          className="p-3 rounded bg-slate-800 hover:bg-slate-700"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/booking"
          className="p-3 rounded bg-slate-800 hover:bg-slate-700"
        >
          Hotel Booking
        </Link>

        <Link
          href="/dashboard/rooms"
          className="p-3 rounded bg-slate-800 hover:bg-slate-700"
        >
          Room Cards
        </Link>

        <Link
          href="/dashboard/payment"
          className="p-3 rounded bg-slate-800 hover:bg-slate-700"
        >
          Payment
        </Link>
      </nav>
    </aside>
  );
}