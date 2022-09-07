import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
export default function Education() {
    return (
        <section id="education">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <AcademicCapIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Education
                    </h1>
                    {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        GPA: 3.82
                        Magna Cum Laude
                    </p> */}
                </div>
                
            </div>
            <div className="flex space-x-4 justify-center" >
                <a href="https://www.colorado.edu/cs/" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 z-50">
                    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://www.logolynx.com/images/logolynx/17/17f67155897b66d860aa1ade9ad61b9a.png" alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">University of Colorado Boulder</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Bachelor of Science, Computer Science</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">August 2017-May 2022</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">GPA: 3.82</p>
                    </div>
                </a>
                <a href="https://www.colorado.edu/amath/" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 z-50">
                    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://www.logolynx.com/images/logolynx/17/17f67155897b66d860aa1ade9ad61b9a.png" alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">University of Colorado Boulder</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Bachelor of Science, Applied Mathematics</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">August 2017-May 2022</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">GPA: 3.82</p>
                    </div>
                </a>
            </div>
            

        </section>
    );
} 