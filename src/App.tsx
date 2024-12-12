import "./App.css";
import Nav from "./compos/Nav";
import {
   Outlet,
   RouterProvider,
   createRootRoute,
   createRoute,
   createRouter,
} from "@tanstack/react-router";
import { lazy, Suspense } from "react";

import BgSky from "./compos/Bg/BgSky";
import BgMountain from "./compos/Bg/BgMountain";

// load routes
import Home from "./routes/Home";
const About = lazy(() => import("./routes/About"));
const Rides = lazy(() => import("./routes/Rides"));
const Culinary = lazy(() => import("./routes/Culinary"));
const Sommelier = lazy(() => import("./routes/Sommelier"));
const Contact = lazy(() => import("./routes/Contact"));

const RootComponent = () => {
   return (
      <>
         <BgSky />
         <Nav />
         <BgMountain>
            <Suspense fallback={<div>Loading...</div>}>
               <Outlet />
            </Suspense>
         </BgMountain>
      </>
   );
};

const rootRoute = createRootRoute({
   component: RootComponent,
});

const indexRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: "/",
   component: Home,
});
const homeRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: "/home",
   component: Home,
});

const aboutRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: "/about",
   component: About,
});

const ridesRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: "/rides",
   component: Rides,
});

const foodRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: "/food",
   component: Culinary,
});

const wineRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: "/wine",
   component: Sommelier,
});

const contactRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: "/contact",
   component: Contact,
});

const routeTree = rootRoute.addChildren([
   indexRoute,
   homeRoute,
   aboutRoute,
   ridesRoute,
   foodRoute,
   wineRoute,
   contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
   interface Register {
      router: typeof router;
   }
}

function App() {
   return <RouterProvider router={router} />;
}

export default App;
