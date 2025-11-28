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
        <form action="" method="get" className = "bg-white mt-10 relative">

        <input type="email" name="email" id="email" placeholder="Enter Your Email" className=" max-w-2xl w-xl p-2 hover:outline-0 focus:outline-0" />
        <input type="submit" value="Subscribe" className="absolute right-0 top-1/2 -translate-y-1/2 bg-sky-blue-ctk py-2 px-3 font-bold text-white"/>
        </form>
        
      </div>
    </section>
  );
}

export default JoinUsSection;
