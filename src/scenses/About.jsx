import React from "react";
import Program from "../components/Program";

function About() {
  return (
    <section>
      <div className="flex flex-col items-center mt-14">
        <h1 className="text-3xl font-semibold mt-36 text-center">
          CHOOSE <span className="text-orange-500">PROGRAM</span>
        </h1>
        <img
          src="https://themewagon.github.io/training-studio/assets/images/line-dec.png"
          alt="waves"
          className="mt-5"
        />
        <p className="text-lg mt-6 text-center text-gray-500">
          Welcome to the world of fitness! we're here to help you find the
          perfect workout program to achieve your goals.
        </p>
        <div className="sm:grid sm:grid-cols-2 sm:gap-x-40 sm:gap-y-6 mt-20">
          <Program
            title="Beginner's Blend"
            program="A foundational mix of strength, flexibility, and cardio exercises for a well-rounded fitness start."
          />

          <Program
            title="HIIT Ignite"
            program="Quick, intense intervals to burn calories, boost endurance, and rev up your metabolism."
          />

          <Program
            title="Strength Surge"
            program="Focused on mastering the squat, bench press, and deadlift for optimal strength and muscle gains."
          />

          <Program
            title="Cardio Kick"
            program="Elevate heart rate with a blend of running, cycling, and rowing for improved cardiovascular fitness."
          />

          <Program
            title="Functional Harmony"
            program="Enhance balance and flexibility through functional movements mimicking daily activities."
          />

          <Program
            title="Sculpt & Tone"
            program="Define your physique with bodyweight exercises for a leaner, more sculpted look."
          />
        </div>
      </div>
    </section>
  );
}

export default About;
