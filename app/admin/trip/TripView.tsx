"use client";
import React, { useState } from "react";
import TripCard from "./TripCard";
import TripTable from "./TripTable";
import { TripProps } from "./TripProps";
const TripView = ({ trips }: { trips: TripProps[] }) => {
  const [view, setView] = useState("card");
  return (
    <div>
      {/* Toggle buttons */}
      <div className="mb-4 flex justify-end">
        {/* <button
          onClick={() => setShowModal(true)}
          className="mr-2 px-3 py-1 rounded bg-green-500 text-white"
        >
          Add Event
        </button> */}
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
    </div>
  );
};

export default TripView;
