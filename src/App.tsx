import { GlobalStyle } from "./App.styles";
import PostList from './components/PostList';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <PostList />
      <Footer />
    </>
  );
}

export default App;
