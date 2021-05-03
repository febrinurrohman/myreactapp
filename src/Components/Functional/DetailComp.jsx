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
                    <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
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