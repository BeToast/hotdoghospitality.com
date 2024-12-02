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

   const [visible, setVisible] = useState(true);

   useEffect(() => {
      const handleScroll = () => {
         setVisible(window.scrollY < 100);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const navItems: NavItemInter[] = [
      { path: "/home", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/rides", label: "Rides" },
      { path: "/culinary", label: "Culinary" },
      { path: "/wine", label: "Wine" },
      { path: "/contact", label: "Contact" },
   ];

   return (
      // <nav className="fixed top-0 left-0 w-full px-4 py-3 h-[102px]z-20">
      <nav
         className={`fixed top-0 left-0 w-full px-4 py-3 h-[102px] z-20 transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
         }`}
      >
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
