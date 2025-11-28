import { describe } from "node:test";
import { CiKeyboard, CiMap } from "react-icons/ci";
import { FaImages, FaCreditCard } from "react-icons/fa";

export const cardData = [
  {
    id: 1,
    img: CiMap,                  // ✅ صح
    title: "Book Library",
    description:
      "The gradual accumulation of information about atomic and small-scale behavior...",
    color: "#E74040",
    bgColor: "#FFDCD1",
  },
  {
    id: 2,
    img: FaImages,              // ✅ صح
    title: "Market Analysis",
    description:
      "The gradual accumulation of information about atomic and small-scale behavior...",
    color: "#2dc071",
    bgColor: "#B9Eaa8",
  },
  {
    id: 3,
    img: FaCreditCard,         // ✅ صح
    title: "Book Lib",
    description:
      "The gradual accumulation of information about atomic and small-scale behavior...",
    color: "#E74040",
    bgColor: "#FFDCD1",
  },
];

export const CourseData = [
  {
    id: 1,
    srcImage: "/coursesImages/course1.webp",
    typeCourse: "Front-End",
    nameCourse: "Diploma Front-End Development",
    descriptionCourse:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quasi inventore expedita quibusdam, corporis distinctio rem vitae dolorem atque totam quam similique non voluptates molestias, libero dignissimos est amet nobis.",
    percentageOfSale: 40,
    countOfSales: 111,
    price: 150.0,
    isSale: true,
    starts: 4.5,
    hours: 21,
    minutes: 30,
    lessons: 30,
  },

  {
    id: 2,
    srcImage: "/coursesImages/course2.avif",
    typeCourse: "Graphic Design",
    nameCourse: "Diploma Graphic Design With Ai tools",
    descriptionCourse:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quasi inventore expedita quibusdam, corporis distinctio rem vitae dolorem atque totam quam similique non voluptates molestias, libero dignissimos est amet nobis.",
    percentageOfSale: 48,
    countOfSales: 120,
    price: 250.0,
    isSale: true,
    starts: 4.5,
    hours: 21,
    minutes: 30,
    lessons: 30,
  },
  {
    id: 3,
    srcImage: "/coursesImages/course3.jpg",
    typeCourse: "Ai Courses",
    nameCourse: "Ai Development",
    descriptionCourse:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quasi inventore expedita quibusdam, corporis distinctio rem vitae dolorem atque totam quam similique non voluptates molestias, libero dignissimos est amet nobis.",
    percentageOfSale: 0,
    countOfSales: 350,
    price: 99.0,
    isSale: false,
    starts: 4.5,
    hours: 21,
    minutes: 30,
    lessons: 30,
  },
];

export const ClientsData = [
  {
    id: 1,
    name: "Mohamed Khaled",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, hic harum dolores delectus ab minima id cum veritatis ut ipsa! Aut voluptate eaque facere voluptas officia, ut maiores? Adipisci, minus?",
    rate: 5,
    srcImage: "/me.png",
    jopTitle: "Front-End",
  },
  {
    id: 2,
    name: "Mohamed Fahd",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, hic harum dolores delectus ab minima id cum veritatis ut ipsa! Aut voluptate eaque facere voluptas officia, ut maiores? Adipisci, minus?",
    rate: 2,
    srcImage: "/me.png",
    jopTitle: "Front-End",
  },
  {
    id: 3,
    name: "Mohamed Wahdan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, hic harum dolores delectus ab minima id cum veritatis ut ipsa! Aut voluptate eaque facere voluptas officia, ut maiores? Adipisci, minus?",
    rate: 1,
    srcImage: "/me1.jpg",
    jopTitle: "Front-End",
  },
];
