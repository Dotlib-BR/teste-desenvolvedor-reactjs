import { Container, Title, Status } from "./style";
import { Link } from "react-router-dom";


function Error() {
  return (
    <>
     <Container>
        <Title>Página não existe</Title>
        <Status>404</Status>
        <Link to='/'>Página Principal</Link>
     </Container>
    </>
  );
}

export default Error;
