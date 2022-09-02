import { GlobalStyle } from "./App.styles";
import PostList from './components/PostList';
import Footer from './components/Footer';
import { About } from "./pages/about";

function App() {
  return (
    <>
      <GlobalStyle />
      <PostList />
      <Footer />
      <About />
    </>
  );
}

export default App;