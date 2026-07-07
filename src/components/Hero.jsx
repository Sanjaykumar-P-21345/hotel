'use client';

import { useState } from 'react';
import { CalendarDays, Users, Search } from 'lucide-react';

export default function Hero() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const handleSearch = (e) => {
    e.preventDefault();

    console.log({
      checkIn,
      checkOut,
      guests,
    });

    // Example:
    // router.push(`/rooms?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A130E] px-4 pt-28 pb-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#9FE6B0]/20 blur-[120px]" />
        <div className="absolute -right-24 -bottom-32 h-[460px] w-[460px] rounded-full bg-[#7A1F2B]/25 blur-[130px]" />
      </div>

      <div className="relative w-full max-w-4xl text-center">
        <span className="mb-6 inline-block rounded-full border border-[#9FE6B0]/30 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[#9FE6B0]">
          Cresthaven Stays
        </span>

        <h1 className="mb-5 font-serif text-4xl leading-tight text-[#EAF3EC] md:text-6xl">
          Rest easy, <span className="text-[#9FE6B0]">arrive</span> extraordinary
        </h1>

        <p className="mx-auto mb-12 max-w-xl text-[#B9C7BD]">
          Handpicked rooms, quiet gardens, and a front desk that remembers your
          name. Find your stay in seconds.
        </p>

        <form
          onSubmit={handleSearch}
          className="relative mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-[#9FE6B0]/60 via-white/10 to-[#7A1F2B]/60 p-[1px] shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        >
          <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-2xl md:flex-row md:gap-0">
            {/* Check In */}
            <label className="flex flex-1 items-center gap-3 px-4 py-3 text-left md:border-r md:border-white/10">
              <CalendarDays size={18} className="shrink-0 text-[#9FE6B0]" />

              <div className="flex w-full flex-col">
                <span className="text-[11px] uppercase tracking-wide text-[#9BAFA1]">
                  Check-in
                </span>

                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent text-sm text-[#EAF3EC] outline-none [color-scheme:dark]"
                />
              </div>
            </label>

            {/* Check Out */}
            <label className="flex flex-1 items-center gap-3 px-4 py-3 text-left md:border-r md:border-white/10">
              <CalendarDays size={18} className="shrink-0 text-[#9FE6B0]" />

              <div className="flex w-full flex-col">
                <span className="text-[11px] uppercase tracking-wide text-[#9BAFA1]">
                  Check-out
                </span>

                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent text-sm text-[#EAF3EC] outline-none [color-scheme:dark]"
                />
              </div>
            </label>

            {/* Guests */}
            <label className="flex flex-1 items-center gap-3 px-4 py-3 text-left">
              <Users size={18} className="shrink-0 text-[#9FE6B0]" />

              <div className="flex w-full flex-col">
                <span className="text-[11px] uppercase tracking-wide text-[#9BAFA1]">
                  Guests
                </span>

                <input
                  type="number"
                  min="1"
                  max="10"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-transparent text-sm text-[#EAF3EC] outline-none"
                />
              </div>
            </label>

            {/* Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#9FE6B0] px-6 py-3 font-semibold text-[#0A130E] transition-all hover:bg-[#8ADF9E]"
            >
              <Search size={18} />
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}