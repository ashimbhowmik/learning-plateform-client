import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <div className="dark:bg-black">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
