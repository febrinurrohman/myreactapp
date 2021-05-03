import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function CardComp(props) {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://placeimg.com/640/480/tech" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{props.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.pub_date}</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Link to={
                        {
                            pathname: `/detail/${props.id}`,
                            state: {
                                title: props.title,
                                pub_date: props.pub_date
                            }
                        }
                    }>Detail</Link>
                </CardBody>
            </Card>
        </div>
    )
}

export default CardComp