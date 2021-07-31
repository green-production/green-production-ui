import React, { Component } from "react";
import Core from "../../services/core";
import handleError from "../../services/errorHandler";
import Loading from "components/loader/index";
import "../seller/index.scss";
import { Link } from "react-router-dom";

class SellerUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: false,
            errorMsg: "",
            userImg: "https://img.icons8.com/bubbles/100/000000/user.png",
        };
    }

    componentDidMount() {
        const { userDetails } = this.props.context;
        if (userDetails.imgUrl) {
            this.setState({ userImg: userDetails.imgUrl });
        }
        window.scrollTo(0, 150);

        console.log("prps", this.props.context, this.props.context.userDetails);
    }

    render() {
        const { userDetails } = this.props.context;

        return (
            <div className="seller-page">
                {this.state.pageLoading ? <Loading /> : ""}
                <h1 className="page-settings-header">Upload Items</h1>
                <div className="page-content page-container" id="page-content">
                    <div className="row d-flex justify-content-center">
                        <div className="seller-inner-wrapper">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25">
                                                <img
                                                    src={this.state.userImg}
                                                    className="img-radius"
                                                    alt="User-Profile-Image"
                                                />
                                            </div>
                                            <h6 className="f-w-600">
                                                {userDetails.full_name}
                                            </h6>
                                            <p>GreenyTale Seller</p>
                                            <p>{userDetails.email}</p>
                                            <p>
                                                Joined:{" "}
                                                {userDetails.created_dt.substr(
                                                    0,
                                                    userDetails.created_dt.indexOf(
                                                        "T"
                                                    )
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SellerUpload;
