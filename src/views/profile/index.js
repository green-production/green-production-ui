import React, { Component } from "react";

class Profile extends Component {
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
                Profile Page
            </div>
        );
    }
}

export default Profile;
