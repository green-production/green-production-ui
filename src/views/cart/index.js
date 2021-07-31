import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Col, Row, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./index.scss";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
        };
    }

    componentDidMount() { }

    render() {
        return (
            <h1>Cart</h1>
        );
    }
}

export default Cart