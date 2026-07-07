import Link from 'next/link';
import { Hotel, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0A130E] px-4 pb-6 pt-16">
      <div
        className="mx-auto max-w-6xl rounded-3xl p-[1px]
        bg-gradient-to-br from-[#9FE6B0]/30 via-white/5 to-[#7A1F2B]/30"
      >
        <div
          className="rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10
          px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-10"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="grid place-items-center w-8 h-8 rounded-lg
                bg-gradient-to-br from-[#9FE6B0]/25 to-[#7A1F2B]/25 border border-white/15"
              >
                <Hotel size={16} className="text-[#9FE6B0]" />
              </span>
              <span className="font-serif text-lg text-[#EAF3EC]">Cresthaven</span>
            </div>
            <p className="text-sm text-[#9BAFA1] leading-relaxed">
              A quiet stay in the middle of everywhere. Booked in minutes, remembered for years.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wide text-[#9FE6B0] mb-4">Explore</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#B9C7BD]">
              <li><Link href="/rooms" className="hover:text-[#EAF3EC] transition-colors">Rooms & Suites</Link></li>
              <li><Link href="/amenities" className="hover:text-[#EAF3EC] transition-colors">Amenities</Link></li>
              <li><Link href="/dashboard" className="hover:text-[#EAF3EC] transition-colors">Dashboard</Link></li>
              <li><Link href="/contact" className="hover:text-[#EAF3EC] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wide text-[#9FE6B0] mb-4">Policies</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#B9C7BD]">
              <li><Link href="/cancellation" className="hover:text-[#EAF3EC] transition-colors">Cancellation</Link></li>
              <li><Link href="/privacy" className="hover:text-[#EAF3EC] transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-[#EAF3EC] transition-colors">Terms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wide text-[#9FE6B0] mb-4">Reach us</h4>
            <ul className="flex flex-col gap-3 text-sm text-[#B9C7BD]">
              <li className="flex items-center gap-2">
                <MapPin size={15} className="text-[#7A1F2B]" /> 12 Garden Row, Chennai
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-[#7A1F2B]" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-[#7A1F2B]" /> stay@cresthaven.in
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-[#5C6A61] mt-6">
        © {new Date().getFullYear()} Cresthaven Stays. All rights reserved.
      </p>
    </footer>
  );
}