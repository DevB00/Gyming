import { twMerge } from "tailwind-merge";
import Table from "../components/Table";
import { useState } from "react";

const Schedules = () => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const [day, setDay] = useState("Monday");

  const handleDayChange = (selectedDay) => {
    setDay(selectedDay);
  };

  return (
    <section className="bg-schedule bg-center bg-no-repeat w-full bg-schedule-bg bg-cover pb-28 text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold mt-36 text-center">
          CLASSES <span className="text-orange-500">SCHEDULE</span>
        </h1>
        <img
          src="https://themewagon.github.io/training-studio/assets/images/line-dec.png"
          alt="waves"
          className="mt-5"
        />
        <p className="text-lg mt-6 text-center text-gray-300">
          Check out our class schedule below and plan your fitness journey with
          us.
        </p>
        <div className="mt-12 flex-col flex gap-8 px-2">
          <div className="justify-center gap-4 flex flex-wrap">
            {daysOfWeek.map((dayOfWeek) => (
              <div className="flex">
                <button
                  key={dayOfWeek}
                  onClick={() => handleDayChange(dayOfWeek)}
                  className={twMerge(
                    "font-semibold transition duration-500 hover:text-orange-500",
                    `${day === dayOfWeek ? "text-orange-500" : ""}`
                  )}
                >
                  {dayOfWeek}
                </button>
                <div>{dayOfWeek !== "Friday" && <>&nbsp; &nbsp; / </>}</div>
              </div>
            ))}
          </div>
          <Table Day={day} />
        </div>
      </div>
    </section>
  );
};

export default Schedules;
