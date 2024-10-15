import { RouterProvider } from "react-router-dom";
import { Router } from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={Router} fallbackElement={<p style={{ padding: "14px" }}>Loading...</p>} />{" "}
    </>
  );
}

export default App;
