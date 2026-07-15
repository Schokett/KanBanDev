import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BoardDetail from "./pages/Board";
import Profile from "./pages/Profile";
import BoardOverview from "./pages/BoardOverview";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <BoardOverview /> },
        { path: "profile", element: <Profile /> },
        {
          path: "boardoverview",
          children: [
            { index: true, element: <BoardOverview /> },
            { path: "board/:id", element: <BoardDetail /> },
          ],
        },
      ],
    },
  ],
  {
    basename: "/KanBanDev/",
  },
);
