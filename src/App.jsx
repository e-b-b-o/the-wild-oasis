import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <H1>The wild oasis</H1>
      </div>
    </>
  );
}

export default App;
