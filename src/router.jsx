import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts";
import {
  ChiefEditor,
  Collegium,
  Ethics,
  Licensing,
  MainPage,
  News,
  Requirements,
  Reviewment,
  Contacts,
  Archive,
} from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/requirements",
        element: <Requirements />,
      },
      {
        path: "/reviewment",
        element: <Reviewment />,
      },
      {
        path: "/chief-editor",
        element: <ChiefEditor />,
      },
      {
        path: "/collegium",
        element: <Collegium />,
      },
      {
        path: "/ethics",
        element: <Ethics />,
      },
      {
        path: "/licensing",
        element: <Licensing />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/archive",
        element: <Archive />,
      },
    ],
  },
]);
