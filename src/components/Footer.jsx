'use client';

import Link from 'next/link';
import { Hotel, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="relative bg-[#0A130E] px-4 pt-16 pb-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-[#9FE6B0]/30 via-white/5 to-[#7A1F2B]/30 p-[1px]">
        <div className="grid grid-cols-1 gap-10 rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-10 backdrop-blur-xl md:grid-cols-4">
          
          {/* Logo */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/15 bg-gradient-to-br from-[#9FE6B0]/25 to-[#7A1F2B]/25">
                <Hotel size={18} className="text-[#9FE6B0]" />
              </span>

              <span className="font-serif text-lg text-[#EAF3EC]">
                Cresthaven
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[#9BAFA1]">
              A quiet stay in the middle of everywhere. Booked in minutes,
              remembered for years.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-wide text-[#9FE6B0]">
              Explore
            </h3>

            <ul className="space-y-2 text-sm text-[#B9C7BD]">
              <li>
                <Link href="/rooms" className="transition hover:text-white">
                  Rooms &amp; Suites
                </Link>
              </li>

              <li>
                <Link href="/amenities" className="transition hover:text-white">
                  Amenities
                </Link>
              </li>

              <li>
                <Link href="/dashboard" className="transition hover:text-white">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-wide text-[#9FE6B0]">
              Policies
            </h3>

            <ul className="space-y-2 text-sm text-[#B9C7BD]">
              <li>
                <Link href="/privacy" className="transition hover:text-white">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="transition hover:text-white">
                  Terms &amp; Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/cancellation"
                  className="transition hover:text-white"
                >
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-wide text-[#9FE6B0]">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-[#B9C7BD]">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#9FE6B0]" />
                <span>12 Garden Row, Chennai, India</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#9FE6B0]" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#9FE6B0]" />
                <span>stay@cresthaven.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-6 text-center text-sm text-[#7C8B81]">
        © {year} Cresthaven Stays. All Rights Reserved.
      </div>
    </footer>
  );
}