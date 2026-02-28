"use client";
import React, { useState } from "react";
import TripCard from "./TripCard";
import TripTable from "./TripTable";
import { TripProps } from "./TripProps";

const AddModal = ({
  loading,
  setShowModal,
}: {
  loading: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Add Event</h2>
          <button
            onClick={() => {
              setShowModal(false);
              // setForm(defaultForm);
            }}
            className="text-gray-400 hover:text-gray-600 text-xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Event Name
            </label>
            <input
              name="event_name"
              // value={form.event_name}
              // onChange={handleChange}
              placeholder="e.g. Summer Music Festival"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Location
            </label>
            <input
              name="event_location"
              // value={form.event_location}
              // onChange={handleChange}
              placeholder="e.g. Central Park, NY"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Day
              </label>
              <input
                name="event_day"
                type="number"
                // value={form.event_day}
                // onChange={handleChange}
                placeholder="e.g. 1"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Time
              </label>
              <input
                name="event_time"
                type="time"
                // value={form.event_time}
                // onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Date
            </label>
            <input
              name="event_date"
              type="date"
              // value={form.event_date}
              // onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Banner Image
            </label>
            <input
              type="file"
              accept="image/*"
              // onChange={handleFileChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={() => {
              setShowModal(false);
              // setForm(defaultForm);
            }}
            className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            // onClick={handleSubmit}
            disabled={loading}
            className="px-5 py-2 text-sm font-medium bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? "Saving..." : "Add Event"}
          </button>
        </div>
      </div>
    </div>
  );
};

const TripView = ({ trips }: { trips: TripProps[] }) => {
  const [view, setView] = useState("card");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {/* Toggle buttons */}
      <div className="mb-4 flex justify-end">
        <button
          onClick={() => setShowModal(true)}
          className="mr-2 px-3 py-1 rounded bg-green-500 text-white"
        >
          Add Trip
        </button>
        <button
          className="mr-2 px-3 py-1 rounded bg-blue-600 text-white"
          onClick={() => setView(view === "card" ? "table" : "card")}
        >
          {view === "card" ? "Table View" : "Card View"}
        </button>
      </div>
      {view === "card" ? (
        <div
          className={`flex flex-wrap gap-5 ${trips.length <= 0 ? "justify-center" : ""}`}
        >
          {trips.length > 0 ? (
            trips.map((trip, index) => <TripCard key={index} {...trip} />)
          ) : (
            <p className="text-gray-400 text-sm py-10 text-center">
              No trips yet
            </p>
          )}
        </div>
      ) : (
        <TripTable trips={trips} />
      )}

      {showModal && <AddModal loading={loading} setShowModal={setShowModal} />}
    </div>
  );
};

export default TripView;
