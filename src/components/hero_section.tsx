import React from "react";
import Link from "next/link";
import Card from "../components/card";
import { cardData } from "../data/data";

function HeroSection() {
  return (
      <section id="home" className="bg-dark-blue">
        <div className="app-container flex items-center justify-center flex-col py-20">
          <span className="block text-red">Join Us</span>
          <h2 className="text-4xl lg:text-6xl md:text-5xl my-5 text-light-pink font-bold text-center lg:text-left md:text-left">
            Best Learning <br />
            Opportunities
          </h2>
          <p className="text-white text-lg max-w-md text-center">
            We know how large objects will act, but things on a small scale just
            do not act that way
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-5 md:flex-row md:gap-3 lg:flex-row lg:gap-3">
            <Link
              href={""}
              className="bg-red text-white px-12 py-3 font-bold rounded-md"
            >
              Get Quote Now
            </Link>
            <Link
              href={""}
              className="text-red border-red border px-12 py-3 rounded-md"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center app-container gap-5 flex-wrap lg:flex-nowrap md:flex-nowrap">
          {cardData.map(({ id, title, description, img, color, bgColor }) => (
            <div
              key={id}
              className="bg-white flex p-5 rounded-md hover:-translate-y-2 transition-all"
            >
              <Card
                color={color}
                bgColor={bgColor}
                img={img}
                title={title}
                description={description}
              />
            </div>
          ))}
        </div>
      </section>

  );
}

export default HeroSection;
