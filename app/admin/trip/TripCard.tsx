import Image from "next/image";
import { TripProps } from "./TripProps";
export default function TripCard({
  tripId,
  day,
  imageSrc,
  imageAlt = "Vehicle Image",
  title,
  venue,
  date,
  seatsLeft,
  tripStatus,
}: TripProps) {
  return (
    <div className="w-[30%] rounded-t-2xl rounded-b-lg shadow-lg group hover:shadow-2xl duration-400">
      <div className="shadow-lg rounded-t-2xl w-full h-60 overflow-hidden mb-2 relative">
        {/* for vehicle image */}
        <div
          className={`w-4 h-4 rounded-full right-5 top-5 z-100 ${tripStatus === "OPEN" ? "bg-orange-300" : tripStatus === "FULL" ? "bg-green-300" : tripStatus === "COMPLETED" ? "bg-blue-300" : "bg-gray-300"} absolute`}
        ></div>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          className="w-full group-hover:scale-110 duration-400 transition-transform"
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between text-xs text-gray-500">
          {/* for trip id and day */}
          <p>TRP-{String(tripId).padStart(3, "0")}</p>
          <p>Day {day}</p>
        </div>
        <h1 className="text-center text-2xl font-bold my-2">
          {/* for title */}
          {title}
        </h1>
        <p className="-mb-2 ">
          {/* for venue */}
          {venue}
        </p>
        <div className="flex justify-between">
          {/* for date and seats left */}
          <p>{date}</p>
          <p>
            Seats left:
            <span className="font-semibold">{seatsLeft}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
