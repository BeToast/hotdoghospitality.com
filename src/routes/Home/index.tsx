import { useEffect, useState } from "react";
import CategoryList from "./CatagoryList";
import ImageStack from "./ImageStack";
import "./style.css";
import { hotDogHospitality } from "../../assets/svgs";

export const categories = [
   { id: "rides", label: "Rides", src: "/homeRides.webp" },
   { id: "culinary", label: "Culinary", src: "/homeCulinary.webp" },
   { id: "sommelier", label: "Sommelier", src: "/homeSommelier.webp" },
];

const Home = () => {
   const [activeCategory, setActiveCategory] = useState(categories[0].id);
   const [isHovering, setIsHovering] = useState(false);

   useEffect(() => {
      if (isHovering) return;

      const interval = setInterval(() => {
         setActiveCategory((prevCategory) => {
            const currentIndex = categories.findIndex(
               (cat) => cat.id === prevCategory
            );
            const nextIndex = (currentIndex + 1) % categories.length;
            return categories[nextIndex].id;
         });
      }, 3000);

      return () => clearInterval(interval);
   }, [isHovering]);

   return (
      <div className="min-h-screen flex flex-col items-center p-8">
         <div className="w-full max-w-xl mt-8">{hotDogHospitality}</div>

         <div className="w-full max-w-6xl flex justify-between items-center grow">
            <CategoryList
               activeCategory={activeCategory}
               setActiveCategory={setActiveCategory}
               onHover={() => setIsHovering(true)}
               onLeave={() => setIsHovering(false)}
            />
            <ImageStack activeCategory={activeCategory} />
         </div>
      </div>
   );
};

export default Home;
