import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Col, Row, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "../home/index.scss";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
        };
    }

    componentDidMount() { }
    
    render() {
        return (
            <div className="product-wrapper">
                <Container className="padding">
                    <Row>
                        <Col sm={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://sc01.alicdn.com/kf/UT8.CaXX2NXXXagOFbXC/fresh-navel-oranges.jpg" />
                                <Card.Body>
                                    <Card.Title>Product Detail</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={8}>
                            <Card>
                                <Card.Header as="h5">Product Name</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Row>
                                        <Col sm={6}>
                                            <Button variant="primary">Add to Cart</Button>
                                        </Col>
                                        <Col sm={6}>
                                            <Button variant="primary">Go to Cart</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Product;
