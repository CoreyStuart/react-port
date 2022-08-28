import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import ComingSoon from './coming-soon.jpg'

function Portfolio() {
    return (
        <Container id="Portfolio">
            <h1>Portfolio</h1>
            <Row className="mt-5">
                <Col xs="12" sm="6" md="4">
                    <Image className="" fluid src={ComingSoon} alt="coming soon" />
                    <h3 className="mt-3">Project 1</h3>
                    <p>Deployed at: </p>
                    <p>Github Repo: </p>
                </Col>
                <Col xs="12" sm="6" md="4">
                    <Image className="" fluid src={ComingSoon} alt="coming soon" />
                    <h3 className="mt-3">Project 2</h3>
                    <p>Deployed at: </p>
                    <p>Github Repo: </p>
                </Col>
                <Col xs="12" sm="6" md="4">
                    <Image className="" fluid src={ComingSoon} alt="coming soon" />
                    <h3 className="mt-3">Project 3</h3>
                    <p>Deployed at: </p>
                    <p>Github Repo: </p>
                </Col>
                <Col xs="12" sm="6" md="4">
                    <Image className="" fluid src={ComingSoon} alt="coming soon" />
                    <h3 className="mt-3">Project 4</h3>
                    <p>Deployed at: </p>
                    <p>Github Repo: </p>
                </Col>
                <Col xs="12" sm="6" md="4">
                    <Image className="" fluid src={ComingSoon} alt="coming soon" />
                    <h3 className="mt-3">Project 5</h3>
                    <p>Deployed at: </p>
                    <p>Github Repo: </p>
                </Col>
                <Col xs="12" sm="6" md="4">
                    <Image className="" fluid src={ComingSoon} alt="coming soon" />
                    <h3 className="mt-3">Project 6</h3>
                    <p>Deployed at: </p>
                    <p>Github Repo: </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Portfolio;