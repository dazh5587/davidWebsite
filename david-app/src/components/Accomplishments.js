import React from "react";
import { LightBulbIcon } from "@heroicons/react/solid";

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container px-5 py-10 mx-auto text-center">
        <LightBulbIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Achievements
        </h1>

      </div>
    </section>
  );
}
