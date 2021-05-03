import { Jumbotron, Button, Row, Col } from 'reactstrap'
import CardComp from './CardComp'

const AboutComp = () => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">About</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
            <Row>
                <Col>
                    <CardComp id="1" title="Belajar React" pub_date="2021-04-20" />
                </Col>
                <Col>
                    <CardComp id="2" title="Belajar Golang" pub_date="2021-04-21" />
                </Col>
                <Col>
                    <CardComp id="3" title="Belajar PHP" pub_date="2021-04-22" />
                </Col>
            </Row>
        </div>
    )
}

export default AboutComp