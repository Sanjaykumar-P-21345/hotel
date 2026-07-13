// export default function Dashboard() {
//   const bookings = [
//     {
//       id: 1,
//       guest: "John Smith",
//       room: "Deluxe Room",
//       checkIn: "15 Jul 2026",
//       status: "Confirmed",
//     },
//     {
//       id: 2,
//       guest: "Emma Watson",
//       room: "Suite",
//       checkIn: "16 Jul 2026",
//       status: "Pending",
//     },
//     {
//       id: 3,
//       guest: "David Lee",
//       room: "Standard Room",
//       checkIn: "17 Jul 2026",
//       status: "Checked In",
//     },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">

//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-4xl font-bold text-gray-800">
//             Hotel Dashboard
//           </h1>

//           <p className="text-gray-500 mt-2">
//             Welcome to Hotel Management System
//           </p>
//         </div>

//         <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
//           + Add Room
//         </button>
//       </div>

//       {/* Statistics Cards */}

//       <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

//         <div className="bg-white rounded-xl shadow p-6">
//           <h3 className="text-gray-500">Total Rooms</h3>

//           <h2 className="text-4xl font-bold mt-3 text-blue-600">
//             50
//           </h2>
//         </div>

//         <div className="bg-white rounded-xl shadow p-6">
//           <h3 className="text-gray-500">Available Rooms</h3>

//           <h2 className="text-4xl font-bold mt-3 text-green-600">
//             18
//           </h2>
//         </div>

//         <div className="bg-white rounded-xl shadow p-6">
//           <h3 className="text-gray-500">Bookings</h3>

//           <h2 className="text-4xl font-bold mt-3 text-purple-600">
//             132
//           </h2>
//         </div>

//         <div className="bg-white rounded-xl shadow p-6">
//           <h3 className="text-gray-500">Revenue</h3>

//           <h2 className="text-4xl font-bold mt-3 text-orange-600">
//             ₹4,85,000
//           </h2>
//         </div>

//       </div>

//       {/* Middle Section */}

//       <div className="grid lg:grid-cols-3 gap-6 mt-8">

//         {/* Recent Bookings */}

//         <div className="lg:col-span-2 bg-white rounded-xl shadow">

//           <div className="p-5 border-b">
//             <h2 className="text-2xl font-semibold">
//               Recent Bookings
//             </h2>
//           </div>

//           <table className="w-full">

//             <thead className="bg-gray-100">

//               <tr>

//                 <th className="p-4 text-left">Guest</th>

//                 <th className="p-4 text-left">Room</th>

//                 <th className="p-4 text-left">Check In</th>

//                 <th className="p-4 text-left">Status</th>

//               </tr>

//             </thead>

//             <tbody>

//               {bookings.map((booking) => (

//                 <tr key={booking.id} className="border-b">

//                   <td className="p-4">{booking.guest}</td>

//                   <td className="p-4">{booking.room}</td>

//                   <td className="p-4">{booking.checkIn}</td>

//                   <td className="p-4">

//                     <span
//                       className={`px-3 py-1 rounded-full text-sm font-semibold
//                       ${
//                         booking.status === "Confirmed"
//                           ? "bg-green-100 text-green-700"
//                           : booking.status === "Pending"
//                           ? "bg-yellow-100 text-yellow-700"
//                           : "bg-blue-100 text-blue-700"
//                       }`}
//                     >
//                       {booking.status}
//                     </span>

//                   </td>

//                 </tr>

//               ))}

//             </tbody>

//           </table>

//         </div>

//         {/* Quick Actions */}

//         <div className="bg-white rounded-xl shadow p-6">

//           <h2 className="text-2xl font-semibold mb-5">
//             Quick Actions
//           </h2>

//           <div className="space-y-4">

//             <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
//               Add New Room
//             </button>

//             <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
//               View Bookings
//             </button>

//             <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
//               Payment History
//             </button>

//             <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700">
//               Manage Users
//             </button>

//           </div>

//           <div className="mt-8">

//             <h3 className="font-semibold mb-3">
//               Room Availability
//             </h3>

//             <div className="space-y-3">

//               <div className="flex justify-between">
//                 <span>Standard</span>
//                 <span className="text-green-600 font-bold">
//                   12 Available
//                 </span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Deluxe</span>
//                 <span className="text-yellow-600 font-bold">
//                   4 Available
//                 </span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Suite</span>
//                 <span className="text-red-600 font-bold">
//                   2 Available
//                 </span>
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }



"use client";

import {
  BedDouble,
  CalendarCheck,
  IndianRupee,
  Hotel,
  Bell,
  Search,
  UserCircle,
  ArrowUpRight,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Rooms",
      value: "120",
      icon: Hotel,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Available Rooms",
      value: "42",
      icon: BedDouble,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Today's Bookings",
      value: "36",
      icon: CalendarCheck,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Revenue",
      value: "₹12.45 L",
      icon: IndianRupee,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Top Navbar */}

      <div className="bg-white shadow-sm border-b">

        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <div>

            <h1 className="text-3xl font-bold text-slate-800">
              Hotel Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Welcome back, Admin 👋
            </p>

          </div>

          <div className="flex items-center gap-5">

            {/* Search */}

            <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-4 py-2">

              <Search size={18} className="text-gray-500" />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none ml-2"
              />

            </div>

            {/* Notification */}

            <button className="relative p-3 rounded-xl bg-slate-100 hover:bg-slate-200">

              <Bell size={22} />

              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>

            </button>

            {/* Profile */}

            <div className="flex items-center gap-3">

              <UserCircle
                size={45}
                className="text-blue-600"
              />

              <div>

                <h3 className="font-semibold">
                  Sanjay
                </h3>

                <p className="text-sm text-gray-500">
                  Administrator
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Main */}

      <div className="max-w-7xl mx-auto p-8">

        {/* Welcome Banner */}

        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl p-8 text-white shadow-xl">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-4xl font-bold">
                Welcome Back 👋
              </h2>

              <p className="mt-3 text-blue-100 text-lg">
                Manage bookings, rooms, payments and guests from one dashboard.
              </p>

            </div>

            <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center gap-2">

              Add New Room

              <ArrowUpRight size={18} />

            </button>

          </div>

        </div>

        {/* Statistics Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7 mt-10">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`bg-gradient-to-r ${item.color} rounded-2xl p-6 text-white shadow-lg hover:scale-105 transition duration-300`}
              >

                <div className="flex justify-between items-center">

                  <div>

                    <p className="text-sm opacity-90">
                      {item.title}
                    </p>

                    <h2 className="text-4xl font-bold mt-3">
                      {item.value}
                    </h2>

                    <p className="text-sm mt-4 opacity-80">
                      +12% this month
                    </p>

                  </div>

                  <div className="bg-white/20 p-4 rounded-2xl">

                    <Icon size={36} />

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* Performance Section */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Occupancy */}

          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-xl font-bold mb-6">
              Hotel Occupancy
            </h2>

            <div className="space-y-6">

              <div>

                <div className="flex justify-between mb-2">
                  <span>Standard Rooms</span>
                  <span>80%</span>
                </div>

                <div className="h-3 bg-gray-200 rounded-full">

                  <div className="w-4/5 h-3 bg-green-500 rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">
                  <span>Deluxe Rooms</span>
                  <span>65%</span>
                </div>

                <div className="h-3 bg-gray-200 rounded-full">

                  <div className="w-2/3 h-3 bg-blue-500 rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">
                  <span>Suites</span>
                  <span>45%</span>
                </div>

                <div className="h-3 bg-gray-200 rounded-full">

                  <div className="w-1/2 h-3 bg-orange-500 rounded-full"></div>

                </div>

              </div>

            </div>

          </div>

          {/* Revenue */}

          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-xl font-bold">
              Monthly Revenue
            </h2>

            <h1 className="text-5xl font-bold text-green-600 mt-8">
              ₹12.45 L
            </h1>

            <p className="text-gray-500 mt-3">
              Revenue increased by 18% compared to last month.
            </p>

          </div>

          {/* Quick Actions */}

          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-xl font-bold mb-6">
              Quick Actions
            </h2>

            <div className="space-y-4">

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                Add New Room
              </button>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold">
                New Booking
              </button>

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold">
                View Payments
              </button>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold">
                Manage Staff
              </button>

            </div>

          </div>

        </div>

        {/* ================= Room Availability + Check-ins + Reviews ================= */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Room Availability */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Room Availability
            </h2>

            <div className="space-y-6">

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Standard Rooms</span>
                  <span className="font-bold text-green-600">18 / 25</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full w-[72%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Deluxe Rooms</span>
                  <span className="font-bold text-blue-600">10 / 18</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full w-[55%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Suite Rooms</span>
                  <span className="font-bold text-orange-600">4 / 12</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-orange-500 h-3 rounded-full w-[35%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Executive Suites</span>
                  <span className="font-bold text-purple-600">2 / 8</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-500 h-3 rounded-full w-[25%]"></div>
                </div>
              </div>

            </div>
          </div>

          {/* Today's Schedule */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Today's Schedule
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                <div>
                  <h3 className="font-semibold">Check-In</h3>
                  <p className="text-sm text-gray-500">24 Guests</p>
                </div>

                <span className="text-2xl">🏨</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                <div>
                  <h3 className="font-semibold">Check-Out</h3>
                  <p className="text-sm text-gray-500">18 Guests</p>
                </div>

                <span className="text-2xl">🚪</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-xl">
                <div>
                  <h3 className="font-semibold">Pending Bookings</h3>
                  <p className="text-sm text-gray-500">8 Reservations</p>
                </div>

                <span className="text-2xl">📅</span>
              </div>

            </div>
          </div>

          {/* Customer Reviews */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Guest Reviews
            </h2>

            <div className="space-y-6">

              <div className="border-b pb-4">
                <h3 className="font-semibold">John Smith</h3>
                <p className="text-yellow-500 mt-1">★★★★★</p>
                <p className="text-gray-500 text-sm mt-2">
                  Amazing hotel with friendly staff and clean rooms.
                </p>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-semibold">Emma Watson</h3>
                <p className="text-yellow-500 mt-1">★★★★☆</p>
                <p className="text-gray-500 text-sm mt-2">
                  Great stay. Breakfast was delicious.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">David Lee</h3>
                <p className="text-yellow-500 mt-1">★★★★★</p>
                <p className="text-gray-500 text-sm mt-2">
                  Highly recommended. Excellent service.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* ================= Recent Activity ================= */}

        <div className="bg-white rounded-2xl shadow-lg p-6 mt-10">

          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Recent Activity
          </h2>

          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-green-500 mt-2"></div>

              <div>
                <h3 className="font-semibold">
                  New Booking Confirmed
                </h3>

                <p className="text-gray-500 text-sm">
                  John Smith booked Deluxe Room.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-blue-500 mt-2"></div>

              <div>
                <h3 className="font-semibold">
                  Payment Received
                </h3>

                <p className="text-gray-500 text-sm">
                  ₹8,500 payment completed successfully.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2"></div>

              <div>
                <h3 className="font-semibold">
                  Room Cleaned
                </h3>

                <p className="text-gray-500 text-sm">
                  Deluxe Room 203 is now available.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mt-2"></div>

              <div>
                <h3 className="font-semibold">
                  Booking Cancelled
                </h3>

                <p className="text-gray-500 text-sm">
                  Booking #BK104 has been cancelled.
                </p>
              </div>
            </div>

          </div>

        </div>
        {/* ================= Recent Bookings & Payments ================= */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Recent Bookings */}

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">

            <div className="flex items-center justify-between p-6 border-b">

              <div>

                <h2 className="text-2xl font-bold text-slate-800">
                  Recent Bookings
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Latest room reservations
                </p>

              </div>

              <button className="text-blue-600 font-semibold hover:underline">
                View All
              </button>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-slate-50">

                  <tr>

                    <th className="text-left px-6 py-4">Booking ID</th>

                    <th className="text-left px-6 py-4">Guest</th>

                    <th className="text-left px-6 py-4">Room</th>

                    <th className="text-left px-6 py-4">Check In</th>

                    <th className="text-left px-6 py-4">Status</th>

                    <th className="text-left px-6 py-4">Action</th>

                  </tr>

                </thead>

                <tbody>

                  <tr className="border-b hover:bg-slate-50">

                    <td className="px-6 py-4 font-semibold">#BK101</td>

                    <td className="px-6 py-4">John Smith</td>

                    <td className="px-6 py-4">Deluxe Room</td>

                    <td className="px-6 py-4">15 Jul 2026</td>

                    <td className="px-6 py-4">

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Confirmed
                      </span>

                    </td>

                    <td className="px-6 py-4">

                      <button className="text-blue-600 hover:underline">
                        View
                      </button>

                    </td>

                  </tr>

                  <tr className="border-b hover:bg-slate-50">

                    <td className="px-6 py-4 font-semibold">#BK102</td>

                    <td className="px-6 py-4">Emma Watson</td>

                    <td className="px-6 py-4">Suite</td>

                    <td className="px-6 py-4">16 Jul 2026</td>

                    <td className="px-6 py-4">

                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Pending
                      </span>

                    </td>

                    <td className="px-6 py-4">

                      <button className="text-blue-600 hover:underline">
                        View
                      </button>

                    </td>

                  </tr>

                  <tr className="border-b hover:bg-slate-50">

                    <td className="px-6 py-4 font-semibold">#BK103</td>

                    <td className="px-6 py-4">David Lee</td>

                    <td className="px-6 py-4">Standard Room</td>

                    <td className="px-6 py-4">17 Jul 2026</td>

                    <td className="px-6 py-4">

                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Checked In
                      </span>

                    </td>

                    <td className="px-6 py-4">

                      <button className="text-blue-600 hover:underline">
                        View
                      </button>

                    </td>

                  </tr>

                  <tr className="hover:bg-slate-50">

                    <td className="px-6 py-4 font-semibold">#BK104</td>

                    <td className="px-6 py-4">Sophia Brown</td>

                    <td className="px-6 py-4">Executive Suite</td>

                    <td className="px-6 py-4">18 Jul 2026</td>

                    <td className="px-6 py-4">

                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Cancelled
                      </span>

                    </td>

                    <td className="px-6 py-4">

                      <button className="text-blue-600 hover:underline">
                        View
                      </button>

                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

          {/* Recent Payments */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Recent Payments
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between items-center border-b pb-4">

                <div>

                  <h3 className="font-semibold">
                    John Smith
                  </h3>

                  <p className="text-sm text-gray-500">
                    Deluxe Room
                  </p>

                </div>

                <div className="text-right">

                  <h3 className="font-bold text-green-600">
                    ₹8,500
                  </h3>

                  <p className="text-xs text-gray-500">
                    Paid
                  </p>

                </div>

              </div>

              <div className="flex justify-between items-center border-b pb-4">

                <div>

                  <h3 className="font-semibold">
                    Emma Watson
                  </h3>

                  <p className="text-sm text-gray-500">
                    Suite Room
                  </p>

                </div>

                <div className="text-right">

                  <h3 className="font-bold text-yellow-600">
                    ₹12,000
                  </h3>

                  <p className="text-xs text-gray-500">
                    Pending
                  </p>

                </div>

              </div>

              <div className="flex justify-between items-center border-b pb-4">

                <div>

                  <h3 className="font-semibold">
                    David Lee
                  </h3>

                  <p className="text-sm text-gray-500">
                    Standard Room
                  </p>

                </div>

                <div className="text-right">

                  <h3 className="font-bold text-green-600">
                    ₹4,500
                  </h3>

                  <p className="text-xs text-gray-500">
                    Paid
                  </p>

                </div>

              </div>

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="font-semibold">
                    Sophia Brown
                  </h3>

                  <p className="text-sm text-gray-500">
                    Executive Suite
                  </p>

                </div>

                <div className="text-right">

                  <h3 className="font-bold text-red-600">
                    ₹0
                  </h3>

                  <p className="text-xs text-gray-500">
                    Refunded
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}