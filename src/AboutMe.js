import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import corey from './Corey.jpg'

function AboutMe() {
    return (
        <Container id="AboutMe">
            <h1>About Me</h1>
            <Row className="mt-5">
                <Col xs="12" md="5"><img className="my-4" src={corey} alt="Corey Stuart" />;</Col>
                <Col xs="12" md="7"><p className="mt-4">Hi, My name is Corey Lee Stuart. The main thing to know about me are that I am homophobic, racist, and sexist. thats all.</p></Col>
            </Row>
        </Container>
    );
}

export default AboutMe;