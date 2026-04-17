import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />

      <StyledApp>
        <Heading as="h1">The wild oasis</Heading>
        <Heading as="h2">Check In and Out</Heading>
        <Button onClick={() => alert("Checking in")}>Check In</Button>
        <Button onClick={() => alert("Checking out")}>Check Out</Button>
        <Heading as="h3">forms</Heading>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
