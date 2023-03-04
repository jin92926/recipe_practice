import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "Pages/Main/Main";
import Header from "Components/Layout/Header/Header";
import Footer from "Components/Layout/Footer/Footer";
import Random from "Pages/Random/Random";
import Recipe from "Pages/Recipe/Recipe";
import styled from "styled-components";
import Counter from "Store/example";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/random" element={<Random />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/test" element={<Counter />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  background: none;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  /* position: relative; */
  top: 60px;
  /* height: auto;
  min-height: 100%;
  padding-bottom: 300px; */
`;
