import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import GoogleLogin from "react-google-login";
import { AuthContext } from "../../context/authContext";
import Core from "../../services/core";
import Loading from "components/loader/index";
import { InputForm, Dropdown } from "../../components/form-inputs/index";
import "./index.scss";

const recaptchaRef = React.createRef();

class Login extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: false,
            securityQuestion1: "Select",
            securityQuestion2: "Select",
            gender: "Select",
            isLogin: true,
            captchaToken: null,
            formData: {
                dob: "",
                email: "",
                gender: "",
                name: "",
                password: "",
                passwordRepeat: "",
                securityAnswer1: "",
                securityAnswer2: "",
                securityQuestion1: "",
                securityQuestion2: "",
                username: "",
                captcha: "",
            },
        };
    }

    componentDidMount() {
        const { isAuthenticated } = this.context;
        if (isAuthenticated) {
            this.props.history.push("/");
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        const value = Object.fromEntries(data.entries());
        this.setState({ formData: value });
        const { dispatch } = this.context;
        dispatch({ type: "LOGIN-LOGOUT" });
        this.props.history.push("/");
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    loginForm = () => {
        this.setState((prevState) => ({ isLogin: !prevState.isLogin }));
        recaptchaRef.current.reset();
        this.setState({ captchaToken: null });
        this.resetForm();
    };

    resetForm() {
        const { formData } = this.state;
        console.log(formData, this.state);
        for (let key in formData) {
            this.setState({
                [key]: "",
            });
            formData[key] = "";
        }
        this.setState({ formData });
    }

    captchaChange = (e) => {
        const captchaToken = recaptchaRef.current.getValue();
        this.setState({ captchaToken });
        console.log("token", captchaToken);
    };

    successResponseGoogle = async (googleRes) => {
        const { dispatch, jwtDispatch, userDispatch } = this.context;
        const token = googleRes.getAuthResponse().id_token;

        const request = {
            userName: googleRes.profileObj.email,
        };
        console.log(googleRes.profileObj)
        const headers = {
            googletoken: token,
        };

        this.setState({pageLoading: true})
        const res = await Core.loginService(request, headers);
        console.log("res", res);

        if (res) {
            dispatch({ type: "LOGIN-LOGOUT" });
            jwtDispatch({ type: "JWT-TOKEN", token: res.token });
            delete res.token;
            res.imgUrl = googleRes.profileObj.imageUrl;
            userDispatch({ type: "USER-DETAILS", res });
            this.setState({pageLoading: false})
            this.props.history.push("/");
        }
    };

    failureResponseGoogle = (err) => {
        console.log(err);
    };

    render() {
        return (
            <div>
                {
                    (this.state.pageLoading) ?
                        <Loading/>
                        :
                        ""
                }
                <div className="signup__container">
                    <div className="container__child signup__thumbnail">
                        <div className="thumbnail__content text-center">
                            <h3 className="heading--secondary">
                                Infinite growth of material consumption in a
                                finite world is an impossibility.
                            </h3>
                        </div>
                        <div className="signup__overlay"></div>
                    </div>
                    <div className="container__child signup__form">
                        <div className="formWrapper">
                            <form onSubmit={this.handleSubmit}>
                                {this.state.isLogin ? (
                                    <React.Fragment>
                                        <InputFormFn
                                            id="usernameEmail"
                                            type="text"
                                            value={this.state.usernameEmail}
                                            placeholder="Enter your username/ email"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputFormFn
                                            id="password"
                                            type="password"
                                            value={this.state.password}
                                            placeholder="Enter password"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <InputFormFn
                                            id="name"
                                            type="text"
                                            value={this.state.name}
                                            placeholder="Enter your name"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputFormFn
                                            id="username"
                                            type="text"
                                            value={this.state.username}
                                            placeholder="Enter your username"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputFormFn
                                            id="email"
                                            type="text"
                                            value={this.state.email}
                                            placeholder="Enter your email"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputFormFn
                                            id="password"
                                            type="password"
                                            value={this.state.password}
                                            placeholder="Enter password"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputFormFn
                                            id="passwordRepeat"
                                            type="password"
                                            value={this.state.passwordRepeat}
                                            placeholder="Confirm password"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputFormFn
                                            id="dob"
                                            type="text"
                                            value={this.state.dob}
                                            placeholder="Date of Birth: YYYY-MM-DD"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <DropdownFn
                                            id="gender"
                                            label="Gender"
                                            value={this.state.gender}
                                            changeFn={this.handleInputChange}
                                        />
                                        <DropdownFn
                                            id="securityQuestion1"
                                            label="Security question 1"
                                            value={this.state.securityQuestion1}
                                            changeFn={this.handleInputChange}
                                        />
                                        <InputFormFn
                                            id="securityAnswer1"
                                            type="text"
                                            value={this.state.securityAnswer1}
                                            placeholder="Answer for question 1"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <DropdownFn
                                            id="securityQuestion2"
                                            label="Security question 2"
                                            value={this.state.securityQuestion2}
                                            changeFn={this.handleInputChange}
                                        />
                                        <InputFormFn
                                            id="securityAnswer2"
                                            type="text"
                                            value={this.state.securityAnswer2}
                                            placeholder="Answer for question 2"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                    </React.Fragment>
                                )}

                                <div className="form-group captcha">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={
                                            process.env.REACT_APP_GOOGLE_CAPTCHA
                                        }
                                        onChange={this.captchaChange}
                                    />
                                </div>
                                <div className="m-t-lg">
                                    <input
                                        className="btn btn--form"
                                        type="submit"
                                        disabled={!this.state.captchaToken}
                                        value={
                                            this.state.isLogin
                                                ? "Login"
                                                : "Register"
                                        }
                                    />
                                </div>
                                {this.state.isLogin && (
                                    <div className="google-login">
                                        <GoogleLogin
                                            clientId={
                                                process.env
                                                    .REACT_APP_GOOGLE_CLIENT
                                            }
                                            buttonText="Login with Google"
                                            style={{ transform: "scale(0.7)" }}
                                            onSuccess={
                                                this.successResponseGoogle
                                            }
                                            onFailure={
                                                this.failureResponseGoogle
                                            }
                                        ></GoogleLogin>
                                    </div>
                                )}
                            </form>
                        </div>
                        <button
                            className="signup__link"
                            onClick={this.loginForm}
                        >
                            {this.state.isLogin ? "Register" : "Login"}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

const InputFormFn = (props) => {
    return (
        <InputForm
            type={props.type}
            name={props.id}
            value={props.value || ""}
            id={props.id}
            placeholder={props.placeholder}
            onChange={props.changeFn}
            required={props.isRequired}
        ></InputForm>
    );
};

const DropdownFn = ({ label, id, value, changeFn }) => {
    return (
        <Dropdown id={id} value={value} changeFn={changeFn}>
            {id === "gender" ? (
                <OptionsGender label={label} />
            ) : (
                <OptionsQuestions label={label} />
            )}
        </Dropdown>
    );
};

const OptionsQuestions = ({ label }) => {
    return (
        <React.Fragment>
            <option value="" default>
                Select {label}
            </option>
            <option value="1">What is your mother's maiden name?</option>
            <option value="2">What is the name of your first pet?</option>
            <option value="3">What was your first car?</option>
            <option value="4">What elementary school did you attend?</option>
            <option value="5">
                What is the name of the road you grew up on?
            </option>
            <option value="6">Where did you meet your spouse?</option>
            <option value="7">What's your best friend's name?</option>
            <option value="8">Where did you go to high school/college?</option>
            <option value="9">Who was your childhood hero?</option>
            <option value="10">What is your favorite food?</option>
        </React.Fragment>
    );
};

const OptionsGender = ({ label }) => {
    return (
        <React.Fragment>
            <option value="" default>
                Select {label}
            </option>
            <option value="F">Female</option>
            <option value="M">Male</option>
            <option value="O">Other</option>
        </React.Fragment>
    );
};
