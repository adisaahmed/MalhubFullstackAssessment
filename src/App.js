import React from "react";
import Navbar from "./components/Navbar";
import "./css/style.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { Footer } from "./components/LandingPageContent";
import GlobalStore from "./components/GlobalStore";

const App = () => {
  return (
    <>
      <Router>
        
          <GlobalStore>
            <ErrorBoundary>
              <Navbar />
            </ErrorBoundary>

            <ErrorBoundary>
            <Routes>
              <Route path="/" exact element={<LandingPage />} />
              </Routes>
            </ErrorBoundary>

            <ErrorBoundary>
              <Footer />
            </ErrorBoundary>
          </GlobalStore>
        
      </Router>
    </>
  );
};

export default App;
