import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/authContext'
import Core from "../../services/core";
import handleError from "../../services/errorHandler";
import Loading from "components/loader/index";
import "./index.scss";

class Settings extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: false,
            user_name: ''
        };
        this.security = React.createRef();
    }

    componentDidMount() {
        const { isAuthenticated } = this.context;
        if (!isAuthenticated) {
            this.props.history.push('/login')
        }

        if(this.props.history?.location?.param === 'security') {
            this.security.current.click()
        }
    }

    changeInput = e => {
        console.log(e, e.target.id, e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = async e => {
        e.preventDefault(); 
        const { userDetails } = this.context;
        const request = {
            user_ID: userDetails.user_ID,
            user_name: this.state.user_name,
        };
        this.setState({ pageLoading: true });
        try {
            const res = await Core.updateUser(request);
            if (res) {
                this.updateSuccess(res);
            }
        } catch (error) {
            handleError(error);
        }
        this.setState({ pageLoading: false });
    }

    updateSuccess = (res) => {
        const { userDispatch, userDetails } = this.context;
        
        delete res.token;
        if(userDetails.imgUrl) {
            res.imgUrl = userDetails.imgUrl
        }
        userDispatch({ type: "USER-DETAILS", res });
    };

    deleteAccount = async e => {
        e.preventDefault()
        this.setState({ pageLoading: true });
        const { userDetails, dispatch, jwtDispatch, userDispatch } = this.context;
        const request = {
            user_ID: userDetails.user_ID
        };
        try {
            const res = await Core.deleteUser(request);
            debugger
            if (res) {
                dispatch({ type: "LOGIN-LOGOUT" });
                jwtDispatch({ type: "JWT-TOKEN", token: "" });
                userDispatch({ type: "USER-DETAILS", res: null });
                this.props.history.push("/login");
            }
        } catch (error) {
            handleError(error);
        }
        this.setState({ pageLoading: false });
    }

    render() {
        const { userDetails } = this.context;
        const {user_name, pageLoading} = this.state
        const profilePath = { 
            pathname: "/profile", 
            param: "edit" 
        };

        return (
            <div className="page-settings">
                {pageLoading ? <Loading /> : ""}
                <div className="container">
                    <h1 className="page-settings-header">Settings</h1>
                    <div className="row gutters-sm">
                        <div className="col-md-4 d-none d-md-block">
                            <div className="card">
                                <div className="card-body">
                                    <nav className="nav flex-column nav-pills nav-gap-y-1">
                                        <a
                                            href="#profile"
                                            data-toggle="tab"
                                            className="nav-item nav-link has-icon nav-link-faded active"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-user mr-2"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle
                                                    cx="12"
                                                    cy="7"
                                                    r="4"
                                                ></circle>
                                            </svg>
                                            Profile Information
                                        </a>
                                        <a
                                            href="#account"
                                            data-toggle="tab"
                                            className="nav-item nav-link has-icon nav-link-faded"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-settings mr-2"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="3"
                                                ></circle>
                                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                            </svg>
                                            Account Settings
                                        </a>
                                        <a
                                            href="#security"
                                            data-toggle="tab"
                                            ref={this.security}
                                            className="nav-item nav-link has-icon nav-link-faded"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-shield mr-2"
                                            >
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                            </svg>
                                            Security
                                        </a>
                                        <a
                                            href="#notification"
                                            data-toggle="tab"
                                            className="nav-item nav-link has-icon nav-link-faded"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-bell mr-2"
                                            >
                                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                            </svg>
                                            Notification
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header border-bottom mb-3 d-flex d-md-none">
                                    <ul
                                        className="nav nav-tabs card-header-tabs nav-gap-x-1"
                                        role="tablist"
                                    >
                                        <li className="nav-item">
                                            <a
                                                href="#profile"
                                                data-toggle="tab"
                                                className="nav-link has-icon active"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-user"
                                                >
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                    <circle
                                                        cx="12"
                                                        cy="7"
                                                        r="4"
                                                    ></circle>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#account"
                                                data-toggle="tab"
                                                className="nav-link has-icon"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-settings"
                                                >
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        r="3"
                                                    ></circle>
                                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#security"
                                                data-toggle="tab"
                                                className="nav-link has-icon"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-shield"
                                                >
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#notification"
                                                data-toggle="tab"
                                                className="nav-link has-icon"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-bell"
                                                >
                                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#billing"
                                                data-toggle="tab"
                                                className="nav-link has-icon"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-credit-card"
                                                >
                                                    <rect
                                                        x="1"
                                                        y="4"
                                                        width="22"
                                                        height="16"
                                                        rx="2"
                                                        ry="2"
                                                    ></rect>
                                                    <line
                                                        x1="1"
                                                        y1="10"
                                                        x2="23"
                                                        y2="10"
                                                    ></line>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body tab-content">
                                    <div
                                        className="tab-pane active"
                                        id="profile"
                                    >
                                        <h6>YOUR PROFILE INFORMATION</h6>
                                        <hr />
                                        <form className="personal">
                                            <div className="form-group">
                                                <label htmlFor="fullName">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fullName"
                                                    aria-describedby="fullNameHelp"
                                                    placeholder="Enter your fullname"
                                                    value={userDetails?.full_name}
                                                />
                                                <small
                                                    id="fullNameHelp"
                                                    className="form-text text-muted"
                                                >
                                                    Your name may appear around
                                                    here where you are
                                                    mentioned. You can change or
                                                    remove it at any time.
                                                </small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="username">
                                                    Username
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fullName"
                                                    aria-describedby="fullNameHelp"
                                                    placeholder="Enter your username"
                                                    value={userDetails?.user_name}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="url">Gender</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="url"
                                                    placeholder="Enter your gender"
                                                    value={userDetails?.gender}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="location">
                                                    Date of Birth
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="location"
                                                    placeholder="Enter your DOB"
                                                    value={userDetails?.dob}
                                                />
                                            </div>
                                            <div className="form-group small text-muted">
                                                All of the fields on this page
                                                are optional and can be deleted
                                                at any time, and by filling them
                                                out, you're giving us consent to
                                                share this data wherever your
                                                user profile appears.
                                            </div>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                            >
                                                <Link to={profilePath}>Edit Profile</Link>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="tab-pane" id="account">
                                        <h6>ACCOUNT SETTINGS</h6>
                                        <hr />
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="user_name">
                                                    Change Username
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="user_name"
                                                    aria-describedby="usernameHelp"
                                                    placeholder="Enter your username"
                                                    onChange={this.changeInput}
                                                    value={user_name}
                                                />
                                                <small
                                                    id="usernameHelp"
                                                    className="form-text text-muted"
                                                >
                                                    After changing your
                                                    username, your old username
                                                    becomes available for anyone
                                                    else to claim.
                                                </small>
                                            </div>
                                            <button
                                                className="btn btn-info"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                            <hr />
                                            <div className="form-group">
                                                <label className="d-block text-danger">
                                                    Delete Account
                                                </label>
                                                <p className="text-muted font-size-sm">
                                                    Once you delete your
                                                    account, there is no going
                                                    back. Please be certain.
                                                </p>
                                            </div>
                                            <button
                                                className="btn btn-danger"
                                                type="button"
                                                onClick={this.deleteAccount}
                                            >
                                                Delete Account
                                            </button>
                                        </form>
                                    </div>
                                    <div className="tab-pane" id="security">
                                        <h6>SECURITY SETTINGS</h6>
                                        <hr />
                                        <form>
                                            <div className="form-group">
                                                <label className="d-block">
                                                    Change Password
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your old password"
                                                />
                                                <input
                                                    type="text"
                                                    className="form-control mt-1"
                                                    placeholder="New password"
                                                />
                                                <input
                                                    type="text"
                                                    className="form-control mt-1"
                                                    placeholder="Confirm new password"
                                                />
                                            </div>
                                            <button
                                                className="btn btn-info"
                                                type="button"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                        <hr />
                                        <form>
                                            <div className="form-group">
                                                <label className="d-block">
                                                    Two Factor Authentication
                                                </label>
                                                <button
                                                    className="btn btn-info"
                                                    type="button"
                                                >
                                                    Enable two-factor
                                                    authentication
                                                </button>
                                                <p className="small text-muted mt-2">
                                                    Two-factor authentication
                                                    adds an additional layer of
                                                    security to your account by
                                                    requiring more than just a
                                                    password to log in.
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane" id="notification">
                                        <h6>NOTIFICATION SETTINGS</h6>
                                        <hr />
                                        <form>
                                            <div className="form-group">
                                                <label className="d-block mb-0">
                                                    Security Alerts
                                                </label>
                                                <div className="small text-muted mb-3">
                                                    Receive security alert
                                                    notifications via email
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck1"
                                                        checked=""
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck1"
                                                    >
                                                        Email each time a
                                                        vulnerability is found
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck2"
                                                        checked=""
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck2"
                                                    >
                                                        Email a digest summary
                                                        of vulnerability
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group mb-0">
                                                <label className="d-block">
                                                    SMS Notifications
                                                </label>
                                                <ul className="list-group list-group-sm">
                                                    <li className="list-group-item has-icon">
                                                        Comments
                                                        <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customSwitch1"
                                                                checked=""
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="customSwitch1"
                                                            ></label>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item has-icon">
                                                        Updates From People
                                                        <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customSwitch2"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="customSwitch2"
                                                            ></label>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item has-icon">
                                                        Reminders
                                                        <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customSwitch3"
                                                                checked=""
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="customSwitch3"
                                                            ></label>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item has-icon">
                                                        Events
                                                        <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customSwitch4"
                                                                checked=""
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="customSwitch4"
                                                            ></label>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item has-icon">
                                                        Pages You Follow
                                                        <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customSwitch5"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="customSwitch5"
                                                            ></label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </form>
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

export default Settings;
