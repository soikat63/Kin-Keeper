import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Pages/HomePage/Home";
import TimeLine from "../components/Pages/TimelinePage/TimeLine"
import Stats from "../components/Pages/StatsPage/Stats"

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"/timeline",
        element: <TimeLine/>,
      },
      {
        path: "/stats",
        element: <Stats/>
      }
    ],
  },
]);
