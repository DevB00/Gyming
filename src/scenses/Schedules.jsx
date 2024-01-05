import React from "react";

const Schedules = () => {
  return (
    <section className="bg-schedule bg-center bg-no-repeat w-full bg-schedule-bg bg-cover">
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-3xl font-semibold mt-36 text-center">
          CLASSES <span className="text-orange-500">SCHEDULE</span>
        </h1>
        <img
          src="https://themewagon.github.io/training-studio/assets/images/line-dec.png"
          alt="waves"
          className="mt-5"
        />
        <p className="text-lg mt-6 text-center text-gray-500">
          Check out our class schedule below and plan your fitness journey with
          us.
        </p>
        <div className="h-[1000px]">

        </div>
      </div>
    </section>
  );
};

export default Schedules;
