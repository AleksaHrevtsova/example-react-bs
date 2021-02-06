// static import - убрать, если есть динамический импорт
// import { Home, About, Users } from "./pages";

// dynamic import
// import asyncComponent from "./components/hoc/asyncComponent";
// const AsyncComponentHome = asyncComponent(() => import("./pages/Home"));

// export default [
//   {
//     path: "/",
//     label: "Home",
//     exact: true,
//     // component: Home, // static
//     component: AsyncComponentHome,
//   },
//   {
//     path: "/about",
//     label: "About",
//     exact: true,
//     component: asyncComponent(() =>
//       import("./pages/About" /* webpackChunkName: "About-page" */),
//     ),
//   },
//   {
//     path: "/users",
//     label: "Users",
//     exact: true,
//     component: asyncComponent(() =>
//       import("./pages/Users" /* webpackChunkName: "Users-page" */),
//     ),
//   },
// ];
import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    // component: Home, // static
    component: lazy(() =>
      import("./pages/Home" /* webpackChunkName: "Home-page" */),
    ),
  },
  {
    path: "/about",
    label: "About",
    exact: true,
    component: lazy(() =>
      import("./pages/About" /* webpackChunkName: "About-page" */),
    ),
  },
  {
    path: "/users",
    label: "Users",
    exact: true,
    component: lazy(() =>
      import("./pages/Users" /* webpackChunkName: "Users-page" */),
    ),
  },
];
