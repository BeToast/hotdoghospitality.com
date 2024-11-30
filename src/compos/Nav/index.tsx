import { useRouter } from "@tanstack/react-router";
import NavItem, { NavItemInter } from "./NavItem";
import { useEffect, useState } from "react";

const Nav: React.FC = () => {
   const router = useRouter();
   const [currentPath, setCurrentPath] = useState<string>(
      router.state.location.pathname.toLowerCase()
   );

   useEffect(() => {
      const unsubscribe = router.subscribe("onResolved", () => {
         setCurrentPath(router.state.location.pathname.toLowerCase());
      });

      return () => unsubscribe();
   }, [router]);

   const navItems: NavItemInter[] = [
      { path: "/home", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/rides", label: "Rides" },
      { path: "/culinary", label: "Culinary" },
      { path: "/wine", label: "Wine" },
      { path: "/contact", label: "Contact" },
   ];

   return (
      <nav className="fixed top-0 left-0 w-full px-4 py-3 h-[102px]z-20">
         <div className="flex justify-center gap-8">
            {navItems.map((item) => (
               <NavItem
                  key={item.path}
                  path={item.path}
                  label={item.label}
                  currentPath={currentPath}
               />
            ))}
         </div>
      </nav>
   );
};

export default Nav;
