import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import GoogleLogout from "react-google-login";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Loading from "components/loader/index";
import { AuthContext } from "../../context/authContext";
import banner from "assets/images/banner_1200.jpg";
import climate1 from "assets/images/climate1.jpg";
import climate2 from "assets/images/climate2.jpeg";
import climate3 from "assets/images/climate3.jpeg";
import climate4 from "assets/images/climate4.jpg";
import climate5 from "assets/images/climate5.jpg";
import climate6 from "assets/images/climate6.jpeg";
import "./index.scss";

/**
 * Component that alerts if you click outside of it
 */
// class OutsideClick extends Component {
//     constructor(props) {
//         super(props);

//         this.setWrapperRef = this.setWrapperRef.bind(this);
//         this.handleClickOutside = this.handleClickOutside.bind(this);

//         this.state = {
//             clicked: false
//         }
//     }

//     componentDidMount() {
//         document.addEventListener('mousedown', this.handleClickOutside);
//     }

//     componentWillUnmount() {
//         document.removeEventListener('mousedown', this.handleClickOutside);
//     }

//     /**
//      * Set the wrapper ref
//      */
//     setWrapperRef(node) {
//         // this.wrapperRef = node;
//     }

//     /**
//      * Alert if clicked on outside of element
//      */
//     handleClickOutside(event) {
//         /*if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
//             this.setState({clicked: true});
//             this.props.hideDropdown();
//         } else {
//             this.setState({clicked: false});
//         }*/
//     }

//     render() {
//         return (
//             <div ref={this.setWrapperRef} className={"dropdown-wrapper"}>
//                 {this.props.children}
//             </div>
//         );
//     }
// }

class Header extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ pageLoading: false });
        }, 500);
    }

    successResponseGoogle = () => {
        const { dispatch, jwtDispatch, userDispatch } = this.context;

        dispatch({ type: "LOGIN-LOGOUT" });
        jwtDispatch({ type: "JWT-TOKEN", token: "" });
        userDispatch({ type: "USER-DETAILS", res: null });

        this.props.history.push("/login");
    };

    searchForum = (e) => {
        this.props.history.push("/discover");
    };

    render() {
        const { isAuthenticated, isWatsonDiscovery, userDetails } =
            this.context;
        return (
            <header
                style={{ height: isWatsonDiscovery ? "80px" : "280px" }}
                className="ds-header app-logged-in"
            >
                {this.state.pageLoading ? <Loading /> : ""}
                {!isWatsonDiscovery && (
                    <Carousel autoPlay={true} infiniteLoop={true}>
                        <div>
                            <img src={banner} alt="banner image" />
                        </div>
                        <div>
                            <img src={climate1} alt="climate image" />
                        </div>
                        <div>
                            <img src={climate2} alt="climate image" />
                        </div>
                        <div>
                            <img src={climate3} alt="climate image" />
                        </div>
                        <div>
                            <img src={climate4} alt="climate image" />
                        </div>
                        <div>
                            <img src={climate5} alt="climate image" />
                        </div>
                        <div>
                            <img src={climate6} alt="climate image" />
                        </div>
                    </Carousel>
                )}
                <nav className="navbar large-nav-menu">
                    <Link className="logo" title="Greenytale logo" to="/">
                        <span>Greenytale logo</span>
                    </Link>
                    {!isWatsonDiscovery && (
                        <div className="hero">
                            <h1>Sustainable Consumption and Production</h1>
                            <button
                                className="btn sub-header"
                                title="Watson header"
                                onClick={this.searchForum}
                            >
                                Watson AI Search Forum
                            </button>
                        </div>
                    )}
                </nav>
                <nav>
                    <ul>
                        <li>
                            <Link
                                to="/about-us"
                                title="About Us"
                                href="javascript:void(0)"
                                onClick={this.onClick}
                            >
                                About us
                            </Link>
                        </li>
                        <li>
                            <a
                                title="Design Corner"
                                href="javascript:void(0)"
                                aria-haspopup="true"
                                onClick={this.onClick}
                            >
                                Design Corner
                            </a>
                            <ul>
                                <li>
                                    <a
                                        title="Sub link 1"
                                        href="javascript:void(0)"
                                        onClick={this.onClick}
                                    >
                                        {" "}
                                        Sub Link 1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Sub link 2"
                                        href="javascript:void(0)"
                                        onClick={this.onClick}
                                    >
                                        {" "}
                                        Sub Link 2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Sub link 3"
                                        href="javascript:void(0)"
                                        aria-haspopup="true"
                                    >
                                        {" "}
                                        Sub Link 3
                                    </a>
                                    <ul>
                                        <li>
                                            <a
                                                title="Sub Sub link 1"
                                                href="javascript:void(0)"
                                                onClick={this.onClick}
                                            >
                                                {" "}
                                                Sub Sub Link 1
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                title="Sub Sub link 2"
                                                href="javascript:void(0)"
                                                onClick={this.onClick}
                                            >
                                                {" "}
                                                Sub Sub Link 2
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a
                                title="Products"
                                href="javascript:void(0)"
                                aria-haspopup="true"
                                onClick={this.onClick}
                            >
                                Products
                            </a>
                            <ul>
                                <li>
                                    <a
                                        title="Sub link 1"
                                        href="javascript:void(0)"
                                        onClick={this.onClick}
                                    >
                                        {" "}
                                        Sub Link 1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Sub link 2"
                                        href="javascript:void(0)"
                                        onClick={this.onClick}
                                    >
                                        {" "}
                                        Sub Link 2
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link title="Contact Us" to="#">
                                Contact Us
                            </Link>
                        </li>
                        {isAuthenticated ? (
                            <li className="profile-menu">
                                <ul className="profile-wrapper">
                                    <li>
                                        <div className="profile">
                                            {userDetails?.imgUrl ? (
                                                <img
                                                    src={userDetails?.imgUrl}
                                                    alt="user_img"
                                                />
                                            ) : (
                                                <FaUserAlt />
                                            )}
                                            <Link
                                                to="/profile"
                                                title="Profile"
                                                className="name"
                                            >
                                                {userDetails?.user_name?.toUpperCase()}
                                            </Link>

                                            <ul className="menu">
                                                <li>
                                                    <a href="#">Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#">Settings</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Change Password
                                                    </a>
                                                </li>
                                                <li>
                                                    <GoogleLogout
                                                        clientId={
                                                            process.env
                                                                .REACT_APP_GOOGLE_CLIENT
                                                        }
                                                        buttonText="Logout with Google"
                                                        render={(
                                                            renderProps
                                                        ) => {
                                                            return (
                                                                <a
                                                                    onClick={
                                                                        renderProps.onClick
                                                                    }
                                                                    href="#"
                                                                >
                                                                    Logout
                                                                </a>
                                                            );
                                                        }}
                                                        style={{
                                                            transform:
                                                                "scale(0.7)",
                                                        }}
                                                        onSuccess={
                                                            this
                                                                .successResponseGoogle
                                                        }
                                                        onFailure={
                                                            this
                                                                .failureResponseGoogle
                                                        }
                                                    ></GoogleLogout>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        ) : (
                            <li className="login-li">
                                <Link title="Login" to="/login">
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
