import { categories } from "..";

const ImageStack = ({
   activeCategory,
   width = 580,
}: {
   activeCategory: string;
   width?: number;
}) => {
   const aspectRatio = 1697 / 1200;
   const height = width / aspectRatio;

   return (
      <div className="relative" style={{ width, height }}>
         {categories.map(({ id, src }) => (
            <img
               key={id}
               src={src}
               alt={id}
               className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-500
                  rounded-lg
                  ${
                     activeCategory === id
                        ? "z-10 opacity-100 translate-x-0 translate-y-0 shadow-2xl"
                        : "opacity-40 grayscale translate-x-6 translate-y-6 shadow-lg blur-[1px]"
                  }`}
            />
         ))}
      </div>
   );
};

export default ImageStack;
