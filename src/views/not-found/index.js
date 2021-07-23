import React, { Component } from "react";

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
        };
    }

    componentDidMount() {}

    render() {
        return (
            <div>
                404: Page not found
            </div>
        );
    }
}

export default NotFound;
