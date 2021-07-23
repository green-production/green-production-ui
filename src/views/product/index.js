import React, { Component } from "react";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
        };
    }

    componentWillMount() {}

    render() {
        return (
            <div>
                Products page
            </div>
        );
    }
}

export default Product;
