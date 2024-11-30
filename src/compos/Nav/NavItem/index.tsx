import { Link } from "@tanstack/react-router";

interface NavItemProps {
   path: string;
   label: string;
   currentPath: string;
}

export interface NavItemInter {
   path: string;
   label: string;
}

const NavItem: React.FC<NavItemProps> = ({ path, label, currentPath }) => {
   return (
      <Link to={path} className="relative group">
         <div
            className="absolute w-24 h-24 left-1/2 -translate-x-1/2 
                  translate-y-36 group-hover:translate-y-0
                  transition-all duration-200 ease-out
                  pointer-events-none"
         >
            <img
               src="/woodSign.webp"
               alt="Wood Sign"
               className="w-full h-full"
            />
            <span
               className="absolute inset-0 flex items-start justify-center
                     text-gray-50 font-europa-medium-ita text-xl"
            >
               <span className="pt-3">{label}</span>
            </span>
         </div>
         <div
            className={`
          relative px-4 py-2 
          text-lg font-medium 
          transition-colors duration-200
          hover:text-gray-100
          flex items-start justify-center pt-3 -z-10
          ${currentPath === path ? "text-gray-300" : "text-gray-700"}
        `}
         >
            {label}
         </div>
      </Link>
   );
};

export default NavItem;
