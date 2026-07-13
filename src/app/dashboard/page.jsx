export default function Dashboard() {
  const bookings = [
    {
      id: 1,
      guest: "John Smith",
      room: "Deluxe Room",
      checkIn: "15 Jul 2026",
      status: "Confirmed",
    },
    {
      id: 2,
      guest: "Emma Watson",
      room: "Suite",
      checkIn: "16 Jul 2026",
      status: "Pending",
    },
    {
      id: 3,
      guest: "David Lee",
      room: "Standard Room",
      checkIn: "17 Jul 2026",
      status: "Checked In",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Hotel Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome to Hotel Management System
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          + Add Room
        </button>
      </div>

      {/* Statistics Cards */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Total Rooms</h3>

          <h2 className="text-4xl font-bold mt-3 text-blue-600">
            50
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Available Rooms</h3>

          <h2 className="text-4xl font-bold mt-3 text-green-600">
            18
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Bookings</h3>

          <h2 className="text-4xl font-bold mt-3 text-purple-600">
            132
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Revenue</h3>

          <h2 className="text-4xl font-bold mt-3 text-orange-600">
            ₹4,85,000
          </h2>
        </div>

      </div>

      {/* Middle Section */}

      <div className="grid lg:grid-cols-3 gap-6 mt-8">

        {/* Recent Bookings */}

        <div className="lg:col-span-2 bg-white rounded-xl shadow">

          <div className="p-5 border-b">
            <h2 className="text-2xl font-semibold">
              Recent Bookings
            </h2>
          </div>

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="p-4 text-left">Guest</th>

                <th className="p-4 text-left">Room</th>

                <th className="p-4 text-left">Check In</th>

                <th className="p-4 text-left">Status</th>

              </tr>

            </thead>

            <tbody>

              {bookings.map((booking) => (

                <tr key={booking.id} className="border-b">

                  <td className="p-4">{booking.guest}</td>

                  <td className="p-4">{booking.room}</td>

                  <td className="p-4">{booking.checkIn}</td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold
                      ${
                        booking.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : booking.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {booking.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Quick Actions */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-2xl font-semibold mb-5">
            Quick Actions
          </h2>

          <div className="space-y-4">

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Add New Room
            </button>

            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
              View Bookings
            </button>

            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
              Payment History
            </button>

            <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700">
              Manage Users
            </button>

          </div>

          <div className="mt-8">

            <h3 className="font-semibold mb-3">
              Room Availability
            </h3>

            <div className="space-y-3">

              <div className="flex justify-between">
                <span>Standard</span>
                <span className="text-green-600 font-bold">
                  12 Available
                </span>
              </div>

              <div className="flex justify-between">
                <span>Deluxe</span>
                <span className="text-yellow-600 font-bold">
                  4 Available
                </span>
              </div>

              <div className="flex justify-between">
                <span>Suite</span>
                <span className="text-red-600 font-bold">
                  2 Available
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}