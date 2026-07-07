'use client';

import { useState } from 'react';
import { CalendarDays, Users, Search } from 'lucide-react';

export default function Hero() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const handleSearch = (e) => {
    e.preventDefault();
    // wire this up to your rooms/search route
    console.log({ checkIn, checkOut, guests });
  };

  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center px-4 pt-28 pb-24
      bg-[#0A130E] overflow-hidden"
    >
      {/* Ambient glow field */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#9FE6B0]/20 blur-[120px]" />
        <div className="absolute -bottom-32 -right-24 w-[460px] h-[460px] rounded-full bg-[#7A1F2B]/25 blur-[130px]" />
      </div>

      <div className="relative w-full max-w-4xl text-center">
        <span
          className="inline-block text-xs tracking-[0.25em] uppercase text-[#9FE6B0]
          border border-[#9FE6B0]/30 rounded-full px-4 py-1.5 mb-6"
        >
          Cresthaven Stays
        </span>

        <h1 className="font-serif text-4xl md:text-6xl leading-tight text-[#EAF3EC] mb-5">
          Rest easy, <span className="text-[#9FE6B0]">arrive</span> extraordinary
        </h1>
        <p className="text-[#B9C7BD] max-w-xl mx-auto mb-12">
          Handpicked rooms, quiet gardens, and a front desk that remembers your name.
          Find your stay in seconds.
        </p>

        {/* Signature: dual-tone glass search bar, sits astride hero and next section */}
        <form
          onSubmit={handleSearch}
          className="relative mx-auto max-w-3xl rounded-2xl p-[1px]
          bg-gradient-to-r from-[#9FE6B0]/60 via-white/10 to-[#7A1F2B]/60
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        >
          <div
            className="flex flex-col md:flex-row items-stretch gap-3 md:gap-0
            rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/10 p-3"
          >
            <label className="flex-1 flex items-center gap-3 px-4 py-3 md:border-r border-white/10 text-left">
              <CalendarDays size={18} className="text-[#9FE6B0] shrink-0" />
              <span className="flex flex-col w-full">
                <span className="text-[11px] uppercase tracking-wide text-[#9BAFA1]">Check-in</span>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent text-[#EAF3EC] text-sm outline-none [color-scheme:dark]"
                />
              </span>
            </label>

            <label className="flex-1 flex items-center gap-3 px-4 py-3 md:border-r border-white/10 text-left">
              <CalendarDays size={18} className="text-[#9FE6B0] shrink-0" />
              <span className="flex flex-col w-full">
                <span className="text-[11px] uppercase tracking-wide text-[#9BAFA1]">Check-out</span>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent text-[#EAF3EC] text-sm outline-none [color-scheme:dark]"
                />
              </span>
            </label>

            <label className="flex-1 flex items-center gap-3 px-4 py-3 text-left">
              <Users size={18} className="text-[#9FE6B0] shrink-0" />
              <span className="flex flex-col w-full">
                <span className="text-[11px] uppercase tracking-wide text-[#9BAFA1]">Guests</span>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="bg-transparent text-[#EAF3EC] text-sm outline-none w-full"
                />
              </span>
            </label>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl
              text-[#0A130E] font-medium bg-[#9FE6B0] hover:bg-[#8ADF9E]
              shadow-[0_0_24px_rgba(159,230,176,0.35)] transition-all"
            >
              <Search size={16} />
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}