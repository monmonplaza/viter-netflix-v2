import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./components/pages/backend/movies/Movies";
import Settings from "./components/pages/backend/settings/Settings";
import { StoreProvider } from "./components/store/storeContext";
import Homepage from "./components/pages/frontend/homepage/Homepage";
const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/admin/movies" element={<Movies />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
