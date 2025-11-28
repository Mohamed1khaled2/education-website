import React from "react";
function HeaderTitleSection({
  title,
  subTitle,
  description,
}: {
  title: string;
  subTitle: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-sky-blue-ctk mb-5 font-bold">{subTitle}</p>
      <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl">{title}</h3>
      <p className="text-light-gray mt-2">{description}</p>
    </div>
  );
}
export default HeaderTitleSection;
