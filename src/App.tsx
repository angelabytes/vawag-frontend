import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import HomePage from "../pages/HomePage";
import ResourcesPage from "../pages/ResourcesPage";
import EducationPage from "../pages/EducationPage";
import History from "../pages/History";

function App() {
  return (
    <Routes>
      {/* The Layout component is the parent route */}
      <Route path="/" element={<Layout />}>
        {/*
          This 'index' route renders HomePage when the path is exactly "/"
          and it will render *inside* the <Outlet> of the Layout component.
        */}
        <Route index element={<HomePage />} />

        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/history-article" element={<History />}></Route>
      </Route>

      {/*
        You could add routes here that *don't* use the layout,
        e.g., a login page or a 404 page, but they would be outside this <Route> group.
      */}
    </Routes>
  );
}

export default App;
