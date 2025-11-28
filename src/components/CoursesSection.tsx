import React from "react";
import HeaderTitleSection from "./HeaderTitleSection";
import CourseCard from "./CourseCard";
import { CourseData } from "../data/data";

function CoursesSection() {
  return (
    <section id="courses" className="py-25">
      <div className="app-container">
        <HeaderTitleSection
          subTitle="Practice Advice"
          title="Make Online Education Accessible"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, minima doloremque quod nemo nobis velit eveniet maiores sunt minus dicta illum iste exercitationem quisquam, rerum officia. Dignissimos ipsum quis praesentium?
"
        />

        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10 mt-5">
          {CourseData.map((course) => (
            <CourseCard
              key={course.id}
              srcImage={course.srcImage}
              isSale={course.isSale}
              price={course.price}
              nameCourse={course.nameCourse}
              descriptionCourse={course.descriptionCourse}
              countOfSales={course.countOfSales}
              typeCourse={course.typeCourse}
              percentageOfSale={course.percentageOfSale}
              stars={course.starts}
              lessons={course.lessons}
              hours={course.hours}
              minutes={course.minutes}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
