import React, { Component } from "react";
import Core from "../../services/core";
import handleError from "../../services/errorHandler";
import Loading from "components/loader/index";
import "./index.scss";
import { Link } from "react-router-dom";

class Seller extends Component {
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

        // this.getSellerProducts(userDetails.user_ID)
        console.log("prps", this.props.context, this.props.context.userDetails);
    }

    async getSellerProducts(user_ID) {
        this.setState({ pageLoading: true });
        try {
            const res = await Core.sellerProducts({user_ID});
            if (res) {
                this.setState({ errorMsg: "" });

                console.log('res', res)
            }
        } catch (error) {
            this.setState({ errorMsg: "Error fetching products list" });
            handleError(error);
        }
        this.setState({ pageLoading: false });
    }

    render() {
        const { userDetails } = this.props.context;

        return (
            <div className="seller-page">
                {this.state.pageLoading ? <Loading /> : ""}
                <h1 className="page-settings-header">Seller Account</h1>
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
                                            <h6 style={{display: 'inline-block'}} className="m-b-20 p-b-5 b-b-default f-w-600">
                                                List of all products
                                            </h6>
                                            <button 
                                                className="btn btn-success upload-products">
                                                <Link to="seller-upload">Upload Items</Link>
                                            </button>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">
                                                        Email
                                                    </p>
                                                    <h6 className="text-muted f-w-400">
                                                        rntng@gmail.com
                                                    </h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">
                                                        Phone
                                                    </p>
                                                    <h6 className="text-muted f-w-400">
                                                        98979989898
                                                    </h6>
                                                </div>
                                            </div>
                                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                                                Projects
                                            </h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">
                                                        Recent
                                                    </p>
                                                    <h6 className="text-muted f-w-400">
                                                        Sam Disuja
                                                    </h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">
                                                        Most Viewed
                                                    </p>
                                                    <h6 className="text-muted f-w-400">
                                                        Dinoter husainm
                                                    </h6>
                                                </div>
                                            </div>
                                            <ul className="social-link list-unstyled m-t-40 m-b-10">
                                                <li>
                                                    <a
                                                        href="#!"
                                                        data-toggle="tooltip"
                                                        data-placement="bottom"
                                                        title=""
                                                        data-original-title="facebook"
                                                        data-abc="true"
                                                    >
                                                        <i
                                                            className="mdi mdi-facebook feather icon-facebook facebook"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#!"
                                                        data-toggle="tooltip"
                                                        data-placement="bottom"
                                                        title=""
                                                        data-original-title="twitter"
                                                        data-abc="true"
                                                    >
                                                        <i
                                                            className="mdi mdi-twitter feather icon-twitter twitter"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#!"
                                                        data-toggle="tooltip"
                                                        data-placement="bottom"
                                                        title=""
                                                        data-original-title="instagram"
                                                        data-abc="true"
                                                    >
                                                        <i
                                                            className="mdi mdi-instagram feather icon-instagram instagram"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                </li>
                                            </ul>
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

export default Seller;
