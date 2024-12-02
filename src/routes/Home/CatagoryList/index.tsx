import { Link } from "@tanstack/react-router";
import { categories } from "..";

const CategoryList = ({
   activeCategory,
   setActiveCategory,
   onHover,
   onLeave,
}: {
   activeCategory: string;
   setActiveCategory: (category: string) => void;
   onHover: () => void;
   onLeave: () => void;
}) => {
   return (
      <div
         className="flex flex-col gap-16"
         onMouseEnter={onHover}
         onMouseLeave={onLeave}
      >
         {categories.map(({ id, label }) => (
            <div
               key={id}
               className="flex items-center gap-8"
               onMouseEnter={() => setActiveCategory(id)}
            >
               <div
                  className={`text-left text-7xl font-europa-medium transition-all duration-700 hover:scale-105 
                  ${activeCategory === id ? "text-black" : "text-gray-500"}`}
               >
                  {label}
               </div>
               <div
                  className={`transition-all duration-700 ease-in-out 
                  ${
                     activeCategory === id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4 invisible"
                  }`}
               >
                  <Link
                     to={`/${id}`}
                     className="px-4 py-2 rounded-full text-black font-medium 
                              transition-all duration-300
                              border-2 border-double border-black
                              shadow-[4px_4px_0px_0px_#000000]
                              hover:shadow-[6px_6px_0px_0px]
                              hover:scale-105"
                  >
                     View {label} →
                  </Link>
               </div>
            </div>
         ))}
      </div>
   );
};

export default CategoryList;
