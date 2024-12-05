import { useRouter } from "@tanstack/react-router";
import NavItem, { NavItemInter } from "./NavItem";
import { useEffect, useState } from "react";

const Nav: React.FC = () => {
   const router = useRouter();
   const [currentPath, setCurrentPath] = useState<string>(
      router.state.location.pathname.toLowerCase()
   );
   const [visible, setVisible] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);
   const [lastScrollTime, setLastScrollTime] = useState(0);

   useEffect(() => {
      const unsubscribe = router.subscribe("onResolved", () => {
         setCurrentPath(router.state.location.pathname.toLowerCase());
      });

      return () => unsubscribe();
   }, [router]);

   useEffect(() => {
      const handleScroll = () => {
         const now = Date.now();
         const currentScrollY = window.scrollY;

         // Only update if enough time has passed (throttle) and there's significant scroll change
         if (
            now - lastScrollTime > 25 &&
            Math.abs(currentScrollY - lastScrollY) > 10
         ) {
            requestAnimationFrame(() => {
               setVisible(currentScrollY < 100);
               setLastScrollY(currentScrollY);
               setLastScrollTime(now);
            });
         }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
   }, [lastScrollY, lastScrollTime]);

   const navItems: NavItemInter[] = [
      { path: "/home", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/rides", label: "Rides" },
      { path: "/culinary", label: "Culinary" },
      { path: "/sommelier", label: "Sommelier" },
      { path: "/contact", label: "Contact" },
   ];

   return (
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
