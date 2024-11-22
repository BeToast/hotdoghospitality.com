import { Link, useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";

const Nav = () => {
   const router = useRouter();
   const [currentPath, setCurrentPath] = useState(
      router.state.location.pathname.toLowerCase()
   );

   // Subscribe to route changes using the correct event type
   useEffect(() => {
      // Update currentPath when location changes
      const unsubscribe = router.subscribe("onResolved", () => {
         setCurrentPath(router.state.location.pathname.toLowerCase());
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
   }, [router]);

   const navItems = [
      { path: "/about", label: "About" },
      { path: "/rides", label: "Rides" },
      { path: "/culinary", label: "Culinary" },
      { path: "/wine", label: "Wine" },
      { path: "/contact", label: "Contact" },
   ];

   return (
      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3">
         <div className="flex justify-center gap-8">
            {navItems.map((item) => (
               <Link
                  key={item.path}
                  to={item.path}
                  className={`
              px-4 py-2 
              text-lg font-medium 
              transition-colors duration-200
              hover:text-gray-100
              ${currentPath === item.path ? "text-gray-300" : "text-gray-700"}
            `}
               >
                  {item.label}
               </Link>
            ))}
         </div>
      </nav>
   );
};

export default Nav;
