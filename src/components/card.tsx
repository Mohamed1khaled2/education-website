import React from "react";
import { IconType } from "react-icons";

type CardProps = {
  img: IconType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
};

function Card({ img: Icon, title, description, color, bgColor }: CardProps) {
  return (
    <div className="flex items-center justify-center flex-col lg:block md:block">
      <div
        className="w-fit text-lg rounded-md p-3"
        style={{
          backgroundColor: bgColor,
          color: color,
        }}
      >
        <Icon /> {/* هنا بنرندر الأيقونة فعلياً */}
      </div>
      <h3 className="font-bold mt-2 after:bg-light-orange relative after:absolute after:-bottom-2 after:left-0 after:translate-x-1/2 after:lg:translate-x-0 after:md:translate-x-0  after:w-1/2 after:h-0.5 w-fit mb-5">
        {title}
      </h3>
      <p className="text-light-gray">{description}</p>
    </div>
  );
}

export default Card;
