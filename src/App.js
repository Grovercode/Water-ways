import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SpeciesDetails from "./pages/speciesDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SpeciesDetails />,
  },
]);

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
