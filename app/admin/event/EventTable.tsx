"use client";

export default function EventTable({ events }: { events: any[] }) {
  if (!events || events.length === 0)
    return (
      <p className="text-gray-400 text-sm py-10 text-center">No events yet</p>
    );

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <th className="px-5 py-3">ID</th>
            <th className="px-5 py-3">Name</th>
            <th className="px-5 py-3 text-center">Day</th>
            <th className="px-5 py-3">Location</th>
            <th className="px-5 py-3">Date</th>
            <th className="px-5 py-3 text-center">Trips</th>
            <th className="px-5 py-3 text-center">Seats Left</th>
            <th className="px-5 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {events.map((event, index) => {
            const seatsUrgent = event.seats_left && event.seats_left <= 5;
            return (
              <tr
                key={index}
                className="bg-white hover:bg-gray-50 transition-colors"
              >
                <td className="px-5 py-4 text-gray-400 text-xs font-medium">
                  EVT-00{event.event_id}
                </td>
                <td className="px-5 py-4 font-medium text-gray-800">
                  {event.event_name}
                </td>
                <td className="px-5 py-4 text-center text-gray-600">
                  {event.event_day}
                </td>
                <td className="px-5 py-4 text-gray-500">
                  {event.event_location}
                </td>
                <td className="px-5 py-4 text-gray-400 text-xs">
                  {event.event_date}
                </td>
                <td className="px-5 py-4 text-center text-gray-600">
                  {event.total_trips}
                </td>
                <td className="px-5 py-4 text-center font-semibold">
                  {event.seats_left ? (
                    <span
                      className={seatsUrgent ? "text-red-500" : "text-gray-700"}
                    >
                      {event.seats_left}
                    </span>
                  ) : (
                    <span className="text-gray-300">—</span>
                  )}
                </td>
                <td className="text-center">
                  <button className="px-3 py-1 rounded bg-blue-600 text-white text-xs">
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
