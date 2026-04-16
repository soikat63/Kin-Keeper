import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Pages/HomePage/Home";
import TimeLine from "../components/Pages/TimelinePage/TimeLine";
import Stats from "../components/Pages/StatsPage/Stats";
import NotFound from "../components/Pages/NotFoundPage/NotFound";
import FriendDetails from "../components/UI/FriendDetails/FriendDetails";

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
        path: "timeline",
        element: <TimeLine />,
      },
      {
        path: "stats",
        element: <Stats />,
      },

      {
        path: "friend/:id", // 
        element: <FriendDetails />,
      },
    ],

    errorElement: <NotFound />,
  },
]);
