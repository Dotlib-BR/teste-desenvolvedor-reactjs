import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import { DataProvider } from "./contexts/DataContext.tsx";

export default function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  )
}
