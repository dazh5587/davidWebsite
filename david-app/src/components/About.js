import React from "react";

export default function About() {
    return (
        <section id="about">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                David Zhao
              </h1>
              {/* <a
                href = "https://www.linkedin.com/in/david-zhao-406247174" 
                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    LinkedIn </a> */}
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/david-zhao-406247174">
                        <i class="fa fa-linkedin-square" style = {{fontSize: 36}}></i>
                    </a>
                    <a href="https://www.github.com/dazh5587">
                        <i class="fa fa-github-square" style = {{fontSize: 36}}></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100005232905576">
                        <i class="fa fa-facebook-square" style = {{fontSize: 36}}></i>
                    </a>
                </div>
               
              <p className="mb-8 leading-relaxed">
                I am a recent graduate from the University of Colorado Boulder. I majored in Applied Math and Computer Science. My interests lay in machine learning, algorithm development, and data science. 
                I hope to apply my skills and past experience in the financial markets as a software developer or quantitative trader. 
              </p>
              <div className="flex justify-center">
              </div>
            </div>
            <div className="md:max-w-md md:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded-full"
                alt="my picture"
                src={require("./davidHeadshot.jpeg")}
              />
            </div>
          </div>
        </section>
      );
}