import React from "react";
import HeaderTitleSection from "./HeaderTitleSection";

function JoinUsSection() {
  return (
    <section className="bg-dark-blue text-center py-25 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center max-w-1/2">
        <HeaderTitleSection
          title="Join Us"
          subTitle="Practice Advice"
          description="
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut recusandae at odio et, obcaecati facere iure aliquam quis voluptates possimus nisi beatae qui, laudantium amet fugiat dolores quaerat ducimus eligendi?"
          styleDescription={{ color: "white" }}
          styleTitle={{ color: "white" }}
        />
<form action="" method="get" className="mt-10 w-full flex flex-col items-start">

  <div className="relative w-full max-w-3xl"> 
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Enter Your Email"
      className="
        w-full p-3 bg-white rounded-md 
        hover:outline-0 focus:outline-0
      "
    />

    {/* BUTTON */}
    <input
      type="submit"
      value="Subscribe"
      className="
        bg-sky-blue-ctk text-white font-bold py-2 px-4 rounded-md mt-3
        md:mt-0 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2
        lg:mt-0 lg:absolute lg:right-2 lg:top-1/2 lg:-translate-y-1/2
      "
    />
  </div>

</form>
        
      </div>
    </section>
  );
}

export default JoinUsSection;
