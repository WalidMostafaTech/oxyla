// import React, { Suspense } from "react";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import LoadingPage from "../components/Loading/LoadingPage";

// const Home = React.lazy(() => import("../pages/Home/Home"));
// const AboutUS = React.lazy(() => import("../pages/AboutUS/AboutUS"));
// const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { index: true, element: <Home /> },
//       // { path: "about-us", element: <AboutUS /> },
//     ],
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);

// const AppRouter = () => {
//   return (
//     <Suspense fallback={<LoadingPage />}>
//       <RouterProvider router={router} />
//     </Suspense>
//   );
// };

// export default AppRouter;

import React, { Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useLocation,
} from "react-router-dom";
import App from "../App";
import LoadingPage from "../components/Loading/LoadingPage";

const Home = React.lazy(() => import("../pages/Home/Home"));
const ServicesPage = React.lazy(() =>
  import("../pages/ServicesPage/ServicesPage")
);
const ServiceDetails = React.lazy(() =>
  import("../pages/ServiceDetails/ServiceDetails")
);
const Cart = React.lazy(() => import("../pages/Cart/Cart"));
const Payment = React.lazy(() => import("../pages/Payment/Payment"));
const YourSession = React.lazy(() => import("../pages/YourSession/YourSession"));

const AboutUS = React.lazy(() => import("../pages/AboutUS/AboutUS"));
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

// ✨ مكون جديد يحتوي على الشرط
const ConditionalSuspense = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    // لو الصفحة Home → لا تستخدم Suspense
    return <Outlet />;
  }

  // لو غير كده → استخدم Suspense مع LoadingPage
  return (
    <Suspense fallback={<LoadingPage />}>
      <Outlet />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ConditionalSuspense />, // نغلف كل الصفحات في المكون ده
        children: [
          { index: true, element: <Home /> },
          { path: "services", element: <ServicesPage /> },
          { path: "services/:id", element: <ServiceDetails /> },
          { path: "cart", element: <Cart /> },
          { path: "payment", element: <Payment /> },
          { path: "your-session", element: <YourSession /> },
          // { path: "about-us", element: <AboutUS /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
