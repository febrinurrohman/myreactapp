import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap'

function DetailComp(props) {
    return (
        <div>
            <div>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">{props.location.state.title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{props.location.state.pub_date}</CardSubtitle>
                    </CardBody>
                    <img width="100%" src="https://placeimg.com/640/480/tech" alt="Card cap" />
                    <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardLink href="#">Card Link</CardLink>
                        <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default DetailComp