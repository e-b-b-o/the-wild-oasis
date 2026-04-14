import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 1.4r;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;

  margin: 20px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <H1>The wild oasis</H1>
        <Button onClick={() => alert("Checking in")}>Check In</Button>
        <Button onClick={() => alert("Checking out")}>Check Out</Button>
        <Input />
      </div>
    </>
  );
}

export default App;
