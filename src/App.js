import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import MainNavBar from "./components/MainNavBar/MainNavBar";
import Form from "./components/Form/Form";
import UserInfo from "./components/UserInfo/UserInfo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form></Form>
    },
    {
      path:'/details',
      element:<UserInfo></UserInfo>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
