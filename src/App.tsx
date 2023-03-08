import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import routes from "./pages/routes";
import "./App.css";

interface RouteProps {
  path: string;
  componenet: React.ReactNode;
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* @ts-ignore */}
          {routes.map(({ path, componenet }: RouteProps) => {
            return <Route path={path} element={componenet} key={path} />;
          })}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
