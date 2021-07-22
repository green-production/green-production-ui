import React, { Component } from "react";
import loginBg from "assets/images/login-bg.svg";
import "./index.scss";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: false,
        };
    }

    componentWillMount() {}

    render() {
        return (
            <div>
                <div className="signup__container">
                    <div className="container__child signup__thumbnail">
                        <div className="thumbnail__content text-center">
                            <h3 className="heading--secondary">Infinite growth of material consumption in a finite world is an impossibility.</h3>
                            {/* <h3 className="heading--secondary">
                                Welcome to Green Production
                            </h3> */}
                        </div>
                        <div className="thumbnail__links">
                            <ul className="list-inline m-b-0 text-center">
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="fa fa-globe"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <fa className="fa fa-behance"></fa>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="fa fa-github"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="signup__overlay"></div>
                    </div>
                    <div className="container__child signup__form">
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor="username"></label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"></label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"></label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter password"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordRepeat"></label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="passwordRepeat"
                                    id="passwordRepeat"
                                    placeholder="Confirm password"
                                    required
                                />
                            </div>
                            <div className="m-t-lg">
                                <ul className="list-inline">
                                    <li>
                                        <input
                                            className="btn btn--form"
                                            type="submit"
                                            value="Register"
                                        />
                                    </li>
                                    <li>
                                        <a className="signup__link" href="#">
                                            I am already a member
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
