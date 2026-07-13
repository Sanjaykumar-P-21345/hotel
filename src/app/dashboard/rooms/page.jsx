import Image from "next/image";

export default function RoomsPage() {
  const rooms = [
    {
      id: 1,
      name: "Single Room",
      image: "/images/single-room.jpg",
      price: 1500,
      guests: 1,
      rating: 4.5,
      available: true,
      amenities: [
        "Free Wi-Fi",
        "Air Conditioning",
        "TV",
        "Breakfast",
      ],
    },
    {
      id: 2,
      name: "Deluxe Double Room",
      image: "/images/double-room.jpg",
      price: 2500,
      guests: 2,
      rating: 4.8,
      available: true,
      amenities: [
        "King Size Bed",
        "Free Wi-Fi",
        "Balcony",
        "Breakfast",
      ],
    },
    {
      id: 3,
      name: "Luxury Suite",
      image: "/images/suite-room.jpg",
      price: 5000,
      guests: 4,
      rating: 5.0,
      available: false,
      amenities: [
        "Private Living Room",
        "Mini Bar",
        "Jacuzzi",
        "Ocean View",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      {/* Heading */}

      <div className="max-w-7xl mx-auto mb-10">

        <h1 className="text-4xl font-bold text-gray-800">
          Our Rooms
        </h1>

        <p className="text-gray-500 mt-2">
          Choose the perfect room for a comfortable and memorable stay.
        </p>

      </div>

      {/* Room Cards */}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {rooms.map((room) => (

          <div
            key={room.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >

            {/* Image */}

            <div className="relative h-60">

              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover"
              />

              <span
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                  room.available
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }`}
              >
                {room.available ? "Available" : "Booked"}
              </span>

            </div>

            {/* Content */}

            <div className="p-6">

              <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold text-gray-800">
                  {room.name}
                </h2>

                <span className="text-yellow-500 font-semibold">
                  ⭐ {room.rating}
                </span>

              </div>

              <p className="text-gray-500 mt-2">
                Capacity: {room.guests} Guest{room.guests > 1 && "s"}
              </p>

              <div className="mt-5">

                <h3 className="font-semibold mb-2">
                  Amenities
                </h3>

                <div className="flex flex-wrap gap-2">

                  {room.amenities.map((item, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

              <div className="flex justify-between items-center mt-6">

                <div>

                  <p className="text-3xl font-bold text-green-600">
                    ₹{room.price}
                  </p>

                  <span className="text-gray-500 text-sm">
                    per night
                  </span>

                </div>

                <button
                  disabled={!room.available}
                  className={`px-5 py-3 rounded-lg font-semibold transition ${
                    room.available
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-400 cursor-not-allowed text-white"
                  }`}
                >
                  {room.available
                    ? "Book Now"
                    : "Unavailable"}
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}