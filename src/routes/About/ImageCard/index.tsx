import { Link } from "@tanstack/react-router";

interface ImageCardProps {
   id: string;
   label: string;
   src: string;
}

const ImageCard = ({ id, label, src }: ImageCardProps) => (
   <Link
      to={`/${id}`}
      className="group relative w-[300px] aspect-[580/410] rounded-lg overflow-hidden 
             transition-all duration-300 shadow-lg
             hover:scale-105"
   >
      <div
         className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
         style={{ backgroundImage: `url(${src})` }}
      />
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
         <span className="text-white text-xl font-medium px-6 py-3 rounded-full border-2 border-white backdrop-blur-sm">
            View {label} →
         </span>
      </div>
   </Link>
);

export default ImageCard;
