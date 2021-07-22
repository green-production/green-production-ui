import React, { Component } from "react";
import "./index.scss";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
        };
    }

    componentWillMount() {}

    render() {
        return (
            <footer>
                &copy; Everyday Things
                <div className="content">
                    <a title="Privacy Statements" href="javascript:void(0)">Privacy Statements</a>
                    <a title="Terms of Service" href="javascript:void(0)">Terms of Service</a>
                </div>
            </footer>
        );
    }
}

export default Footer;
