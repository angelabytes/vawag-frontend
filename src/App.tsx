import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import HomePage from "../pages/HomePage";
import ResourcesPage from "../pages/ResourcesPage";
import EducationPage from "../pages/EducationPage";
import History from "../pages/History";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/history-article" element={<History />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
