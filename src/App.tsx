import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./pages/routes";
import "./App.css";
// @ts-ignore
import { Layout } from "#components";

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
