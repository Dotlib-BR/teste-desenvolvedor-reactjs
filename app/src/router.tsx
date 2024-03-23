import { createBrowserRouter } from "react-router-dom";
import Base from "./pages/Base.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
  }
])

export default router
