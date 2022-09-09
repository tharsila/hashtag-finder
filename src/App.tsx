import React from "react";
import { GlobalStyle } from "./App.styles";
import Login from "./pages/login/login"
import PostList from './components/PostList';
import { About } from "./pages/about";

import AppRoutes from "./AppRoutes"

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
};

export default App;