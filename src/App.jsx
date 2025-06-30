import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";
import { StagewiseToolbar } from "@stagewise/toolbar-react";
import { ReactPlugin } from "@stagewise-plugins/react";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <div className="h-screen overflow-y-scroll ">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </div>
        </Layout>
      </Router>
      <StagewiseToolbar
        config={{
          plugins: [ReactPlugin],
        }}
      />
    </ThemeProvider>
  );
};

export default App;
