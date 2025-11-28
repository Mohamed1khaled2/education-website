import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdOutlineAccessAlarm } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function CourseCard({
  srcImage,
  isSale,
  typeCourse,
  nameCourse,
  descriptionCourse,
  percentageOfSale,
  countOfSales,
  price,
  stars,
  hours,
  minutes,
  lessons,
}: {
  srcImage: string;
  isSale: boolean;
  typeCourse: string;
  nameCourse: string;
  descriptionCourse: string;
  percentageOfSale?: number;
  price: number;
  countOfSales: number;
  stars: number;
  hours: number;
  minutes: number;
  lessons: number;
}) {
  const finalPrice = isSale ? price - price * (percentageOfSale / 100) : price;
  return (
    <div className="bg-gray-100">
      <div className="relative w-full h-48 sale-before">
        <Image src={srcImage} alt={nameCourse} fill className="object-cover" />
      </div>
      <div className="p-5 text-left">
        <div className="flex justify-between items-center">
          <p className="text-sky-blue-ctk font-semibold italic">{typeCourse}</p>
          <div className="flex items-center justify-center gap-1 bg-black rounded-3xl text-white py-0.5 px-2">
            {stars}
            <FaStar style={{ color: "yellow" }} />
          </div>
        </div>
        <h5 className="text-lg my-2 font-bold">{nameCourse}</h5>
        <p className="text-light-gray my-2 ">{descriptionCourse}</p>
        <p className="mb-2 font-semibold">{countOfSales} Sales</p>
        <p className={`${isSale ? "line-through" : ""} inline mr-2 font-bold`}>
          ${price}
        </p>
        {isSale && (
          <span className="text-green font-bold">{finalPrice.toFixed(2)}</span>
        )}

        <div className="flex items-center  my-2 justify-around">
          <div className="flex items-center">
            <MdOutlineAccessAlarm className="text-sky-blue-ctk"  style={{
              marginRight:"5px", 
    
            }} />
            {hours}hr {minutes}min
          </div>
          <div className="flex items-center">
            <FaBookOpen className="text-sky-blue-ctk" style={{
              marginRight:"5px", 
    
            }} />
            {lessons} Lessons
          </div>
        </div>

        <Link className="flex items-center gap-1 my-1 border-sky-blue-ctk border w-fit rounded-xl py-2 px-4 text-sky-blue-ctk" href={"/"}>
          {" "}
          Learn More <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
