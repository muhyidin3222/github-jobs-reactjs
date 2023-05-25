import React, { lazy } from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from "./components/Layout";
import { getCookie, deleteCookie } from "./libs/cookies";

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Detail = lazy(() => import('./pages/Detail'));

const wrapperLayout = ({ Component, path, index, title, protection }) => {
  return <Route
    path={path}
    index={index}
    element={
      protection ?
        <ProtectedRoute
          title={title}
        >
          <Component />
        </ProtectedRoute>
        :
        <Layout>
          <Component />
        </Layout>
    }
  />
}

const ProtectedRoute = ({ children, title }) => {
  const token = getCookie("token");
  if (!token?.length) {
    deleteCookie();
    return <Navigate to="/login" />;
  }
  return <Layout title={title}>
    {children}
  </Layout>;
};

function App() {
  return (
    <Routes>
      {wrapperLayout({
        Component: Home,
        protection: true,
        path: "/",
        index: true
      })}
      {wrapperLayout({
        protection: true,
        Component: Detail,
        path: "/detail/:id",
        title: "Detail Github Job"
      })}
      {wrapperLayout({
        Component: Login,
        path: "/Login",
        title: "Login Github Job"
      })}
    </Routes>
  );
}

export default App;
