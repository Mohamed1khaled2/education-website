import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { RiStarSLine } from "react-icons/ri";
import Image from "next/image";

function RatingCard({
  name,
  description,
  rate,
  srcImage,
  jopTitle,
}: {
  name: string;
  description: string;
  rate: number;
  srcImage: string;
  jopTitle: string;
}) {
  return (
    <div className="mt-10 align-center justify-center flex flex-col">
      <div className="flex justify-center mb-5 text-yellow text-lg">
        {[...Array(rate).fill("full"), ...Array(5 - rate).fill("empty")].map(
          (type, i) =>
            type === "full" ? (
              <IoStarSharp key={i} />
            ) : (
              <RiStarSLine key={i} />
            )
        )}
      </div>
      <p className="text-light-gray">{description}</p>
      <div className="flex items-center gap-2 mt-5 justify-center 

      sm:justify-start md:justify-start lg:justify-start">
        <div className="relative w-15 h-15 ">
          <Image src={srcImage} alt={name} fill className="rounded-full object-cover" />
        </div>
        <div>
          <h4 className="text-sky-blue-ctk font-bold">{name}</h4>
          <h4>{jopTitle}</h4>
        </div>
      </div>
    </div>
  );
}

export default RatingCard;
