"use client";
import { TripProps } from "./TripProps";
export default function TripTable({ trips }: { trips: TripProps[] }) {
  if (!trips || trips.length === 0)
    return (
      <p className="text-gray-400 text-sm py-10 text-center">No trips yet</p>
    );

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <th className="px-5 py-3">ID</th>
            <th className="px-5 py-3">Vehicle</th>
            <th className="px-5 py-3">Event</th>
            <th className="px-5 py-3">Venue</th>
            <th className="px-5 py-3 text-center">Day</th>
            <th className="px-5 py-3">Date</th>
            <th className="px-5 py-3 text-center">Seats Left</th>
            <th className="px-5 py-3 text-center">Status</th>
            <th className="px-5 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {trips.map((trip, index) => {
            const seatsUrgent = trip.seatsLeft !== null && trip.seatsLeft <= 3;
            const isFull = trip.seatsLeft === 0;

            return (
              <tr
                key={index}
                className="bg-white hover:bg-gray-50 transition-colors"
              >
                {/* ID */}
                <td className="px-5 py-4 text-gray-400 text-xs font-medium">
                  TRP-{String(trip.tripId).padStart(3, "0")}
                </td>

                {/* Vehicle */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={trip.imageSrc}
                      alt={trip.imageAlt ?? "Vehicle Image"}
                      className="w-12 h-8 object-cover rounded border border-gray-100"
                    />
                    <span className="text-gray-500 text-xs">
                      {trip.imageAlt}
                    </span>
                  </div>
                </td>

                {/* Event */}
                <td className="px-5 py-4 font-medium text-gray-800 max-w-[160px]">
                  {trip.title}
                </td>

                {/* Venue */}
                <td className="px-5 py-4 text-gray-500 max-w-[150px]">
                  {trip.venue}
                </td>

                {/* Day */}
                <td className="px-5 py-4 text-center text-gray-600">
                  Day {trip.day}
                </td>

                {/* Date */}
                <td className="px-5 py-4 text-gray-400 text-xs whitespace-nowrap">
                  {new Date(trip.date).toLocaleDateString("en-PH", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </td>

                {/* Seats Left */}
                <td className="px-5 py-4 text-center font-semibold">
                  {isFull ? (
                    <span className="text-gray-300">—</span>
                  ) : (
                    <span
                      className={seatsUrgent ? "text-red-500" : "text-gray-700"}
                    >
                      {trip.seatsLeft}
                    </span>
                  )}
                </td>

                {/* Status */}
                <td className="px-5 py-4 text-center">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      trip.tripStatus === "OPEN"
                        ? "bg-green-50 text-green-600"
                        : "bg-red-50 text-red-500"
                    }`}
                  >
                    {trip.tripStatus}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-5 py-4 text-center">
                  <button className="px-3 py-1 rounded bg-blue-600 text-white text-xs hover:bg-blue-700 transition-colors">
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
