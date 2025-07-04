import { Route, Routes } from "react-router";
import Home from "./pages/Home";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
};

export default MyRoutes;
