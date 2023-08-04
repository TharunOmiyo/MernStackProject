import { Routes, Route } from "react-router-dom";
import MAinComponent from "./MainComponent";
const LandingPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={MAinComponent} />
      </Routes>
    </div>
  );
};

export default LandingPage;
