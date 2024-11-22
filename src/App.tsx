import "./App.css";
import Nav from "./compos/Nav";
import Bg from "./compos/Bg";
import {
   Outlet,
   RouterProvider,
   createRootRoute,
   createRoute,
   createRouter,
} from "@tanstack/react-router";
import { lazy, Suspense } from "react";

// Import About normally since it's the default route
import About from "./routes/About";

// Lazy load other routes
const Rides = lazy(() => import("./routes/Rides"));
const Culinary = lazy(() => import("./routes/Culinary"));
const Wine = lazy(() => import("./routes/Wine"));
const Contact = lazy(() => import("./routes/Contact"));

const RootComponent = () => {
   return (
      <>
         <Nav />
         <Bg>
            <Suspense fallback={<div>Loading...</div>}>
               <Outlet />
            </Suspense>
         </Bg>
      </>
   );
};

const rootRoute = createRootRoute({
   component: RootComponent,
});

const indexRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: "/",
   component: About,
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

const culinaryRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: "/culinary",
   component: Culinary,
});

const wineRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: "/wine",
   component: Wine,
});

const contactRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: "/contact",
   component: Contact,
});

const routeTree = rootRoute.addChildren([
   indexRoute,
   aboutRoute,
   ridesRoute,
   culinaryRoute,
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
