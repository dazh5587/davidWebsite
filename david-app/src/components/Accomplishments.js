import React from "react";
import {accomplishments} from '../data';
import { BadgeCheckIcon, LightBulbIcon, ArrowCircleRightIcon } from "@heroicons/react/solid";

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container px-5 py-10 mx-auto text-center">
        <LightBulbIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Achievements
        </h1>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {accomplishments.map((accomplishment) => (
            <div key={accomplishment} className="p-2 sm:w-1/1 w-full">
              <div className="bg-black-800 rounded flex p-4 h-full items-center justify-center">
                <ArrowCircleRightIcon className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {accomplishment.name}
                </span>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
