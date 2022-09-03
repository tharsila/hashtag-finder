
import { GlobalStyle } from "./App.styles";
import Login from "./pages/login/login"
import PostList from './components/PostList';
import Footer from './components/Footer';
import { About } from "./pages/about";

function App() {
  return (
    <>
      <GlobalStyle />
       <Login />
      <PostList />
      <Footer />
      <About />
    </>
  );
}

export default App;