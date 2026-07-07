export default function RoomsPage() {
  const rooms = [
    {
      id: 1,
      name: "Single Room",
      price: "₹1500",
    },
    {
      id: 2,
      name: "Double Room",
      price: "₹2500",
    },
    {
      id: 3,
      name: "Suite Room",
      price: "₹5000",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">
        Available Rooms
      </h1>

      <div className="grid md:grid-cols-3 gap-5">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-lg shadow p-5"
          >
            <h2 className="text-xl font-bold">
              {room.name}
            </h2>

            <p className="mt-2">{room.price}</p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}