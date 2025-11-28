import React from "react";
import HeaderTitleSection from "./HeaderTitleSection";
import RatingCard from "./RatingCard";
import { ClientsData } from "../data/data";

function Ratings() {
  return (
    <section className="app-container">
      <HeaderTitleSection
        subTitle="Practice Advice"
        title="Each and every client is important"
        description="Lorem ipsum do or sit amet consectetur adipisicing elit. Recusandae expedita, qui amet officiis vel id tenetur aliquam reiciendis alias eaque minus harum fugit. Odit beatae velit possimus quaerat, in atque?"
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10 mt-5">
        {ClientsData.map((client) => (
          <RatingCard
            key={client.id}
            jopTitle={client.jopTitle}
            srcImage={client.srcImage}
            description={client.description}
            rate={client.rate}
            name={client.name}
          />
        ))}
      </div>
    </section>
  );
}

export default Ratings;
