import { createBrowserRouter } from "react-router-dom";
import Planet from "./pages/Planet";
import LayoutComponent from "./layout";
import NotFound from "./pages/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        index: true,
        element: <Planet id={0} planet="mercury" />,
      },
      {
        path: "mercury",
        element: <Planet id={0} planet="mercury" />,
      },
      {
        path: "venus",
        element: <Planet id={1} planet="venus" />,
      },
      {
        path: "earth",
        element: <Planet id={2} planet="earth" />,
      },
      {
        path: "mars",
        element: <Planet id={3} planet="mars" />,
      },
      {
        path: "jupiter",
        element: <Planet id={4} planet="jupiter" />,
      },
      {
        path: "saturn",
        element: <Planet id={5} planet="saturn" />,
      },
      {
        path: "uranus",
        element: <Planet id={6} planet="uranus" />,
      },
      {
        path: "neptune",
        element: <Planet id={7} planet="neptune" />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
