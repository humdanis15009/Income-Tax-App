import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/Home";
import ItrPage from "./pages/ItrPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [{
        path: "itr-filing",
        element: <ItrPage />,

      },
      {
        path: "",
        element: <Home />,

      },]
    },


  ]);
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
