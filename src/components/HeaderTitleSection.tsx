import React from "react";
function HeaderTitleSection({
  title,
  subTitle,
  description,styleDescription, styleTitle
}: {
  title: string;
  subTitle: string;
  description: string;
  styleDescription?: React.CSSProperties;
  styleTitle?: React.CSSProperties;
}) {
  return (
    <div>
      <p className="text-sky-blue-ctk mb-5 font-bold">{subTitle}</p>
      <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl" style={styleTitle}>{title}</h3>
      <p className="text-light-gray mt-2" style={styleDescription}>{description}</p>
    </div>
  );
}
export default HeaderTitleSection;
