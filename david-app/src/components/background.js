import React from "react";
import Particle from "./Particles";
export default function Background() {
    return (
        <>
            <div className="flex h-screen z-10">
                <div className="m-auto z-10">
                    {/* <a 
                        href = "/david" className='inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'>
                            David Zhao 
                    </a> */}
                    <a 
                        href = "/david" className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'>
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        David Zhao 
                            </span> 
                            
                    </a>
                </div>
            </div>
        </>
    
        
    );
}