import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import GoogleLogin from 'react-google-login';
import "./index.scss";

const recaptchaRef = React.createRef();

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: false,
            securityQuestion1: 'Select',
            securityQuestion2: 'Select',
            gender: 'Select',
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
                captcha: ""
            }
        };
    }
    
    componentDidMount() {

    }

    handleSubmit = e => {
        e.preventDefault()
        const data = new FormData(e.target);

        const value = Object.fromEntries(data.entries());
        this.setState({formData: value})
        this.props.history.push('/')
    }

    handleInputChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    loginForm = () => {
        this.setState(prevState => ({isLogin: !prevState.isLogin}));
        recaptchaRef.current.reset()
        this.setState({captchaToken: null})
        this.resetForm()
    }

    resetForm() {
        const {formData} = this.state
        console.log(formData, this.state)
        for(let key in formData) {
            this.setState({
                [key]: ''
            })
            formData[key] = ''
        }
        this.setState({formData})
    }

    captchaChange = e => {
        const captchaToken = recaptchaRef.current.getValue();
        this.setState({captchaToken})
        console.log('token', captchaToken)
    }

    responseGoogle = (response) => {
        console.log(response);
        // const res = response.profileObj;
        // console.log(res);
        // this.signup(response);
    }

    render() {

        return (
            <div>
                <div className="signup__container">
                    <div className="container__child signup__thumbnail">
                        <div className="thumbnail__content text-center">
                            <h3 className="heading--secondary">Infinite growth of material consumption in a finite world is an impossibility.</h3>
                        </div>
                        <div className="signup__overlay"></div>
                    </div>
                    <div className="container__child signup__form">
                        <div className="formWrapper">
                            <form onSubmit={this.handleSubmit}>
                                {
                                    this.state.isLogin
                                    ?
                                    <React.Fragment>
                                        <InputForm 
                                            id="usernameEmail"
                                            type="text"
                                            value={this.state.usernameEmail}
                                            placeholder="Enter your username/ email"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputForm 
                                            id="password"
                                            type="password"
                                            value={this.state.password}
                                            placeholder="Enter password"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <InputForm 
                                            id="name"
                                            type="text"
                                            value={this.state.name}
                                            placeholder="Enter your name"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputForm 
                                            id="username"
                                            type="text"
                                            value={this.state.username}
                                            placeholder="Enter your username"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputForm 
                                            id="email"
                                            type="text"
                                            value={this.state.email}
                                            placeholder="Enter your email"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputForm 
                                            id="password"
                                            type="password"
                                            value={this.state.password}
                                            placeholder="Enter password"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputForm 
                                            id="passwordRepeat"
                                            type="password"
                                            value={this.state.passwordRepeat}
                                            placeholder="Confirm password"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <InputForm 
                                            id="dob"
                                            type="text"
                                            value={this.state.dob}
                                            placeholder="Date of Birth: YYYY-MM-DD"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <Dropdown 
                                            id="gender" 
                                            label="Gender"
                                            value={this.state.gender}
                                            changeFn={this.handleInputChange}
                                        />
                                        <Dropdown 
                                            id="securityQuestion1"
                                            label="Security question 1"
                                            value={this.state.securityQuestion1}
                                            changeFn={this.handleInputChange}
                                        />
                                        <InputForm 
                                            id="securityAnswer1"
                                            type="text"
                                            value={this.state.securityAnswer1}
                                            placeholder="Answer for question 1"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                        <Dropdown 
                                            id="securityQuestion2"
                                            label="Security question 2"
                                            value={this.state.securityQuestion2}
                                            changeFn={this.handleInputChange}
                                        />
                                        <InputForm 
                                            id="securityAnswer2"
                                            type="text"
                                            value={this.state.securityAnswer2}
                                            placeholder="Answer for question 2"
                                            changeFn={this.handleInputChange}
                                            isRequired={true}
                                        />
                                    </React.Fragment>
                                }
                                
                                <div className="form-group captcha">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey="6LdiHqYUAAAAAESfe6F91S3iRfkQ_i-fHW6GcVRz"
                                        onChange={this.captchaChange}
                                    />
                                </div>
                                <div className="m-t-lg">
                                    <input
                                        className="btn btn--form"
                                        type="submit"
                                        disabled={!this.state.captchaToken}
                                        value={this.state.isLogin ? 'Login' : 'Register'}
                                    />
                                </div>
                                <div className="google-login">
                                    <GoogleLogin
                                        clientId="1066685436606-rs3sveemdvqhfm56hljf70cvs2n077ed.apps.googleusercontent.com"
                                        buttonText="Login with Google"
                                        onSuccess={this.responseGoogle}
                                        onFailure={this.responseGoogle}>
                                    </GoogleLogin>
                                </div>
                            </form>
                        </div>
                        <button className="signup__link" onClick={this.loginForm}>
                            {this.state.isLogin ? 'Register' : 'Login' }
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

const InputForm = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.id}></label>
            <input
                className="form-control"
                type={props.type}
                name={props.id}
                value={props.value || ''}
                id={props.id}
                placeholder={props.placeholder}
                onChange={props.changeFn}
                required={props.isRequired}
            />
        </div>
    )
}

const Dropdown = ({label, id, value, changeFn}) => {
    return (
        <div className="form-group">
            <label htmlFor={id}></label>
            <select 
                name={id}
                id={id}
                value={value} 
                required
                onChange={changeFn}>
                {id === 'gender' ? <OptionsGender label={label} /> : <OptionsQuestions label={label} />}
            </select>
        </div>
    )
}

const OptionsQuestions = ({label}) => {
    return (
        <React.Fragment>
            <option value="" default>Select {label}</option>
            <option value="1">What is your mother's maiden name?</option>
            <option value="2">What is the name of your first pet?</option>
            <option value="3">What was your first car?</option>
            <option value="4">What elementary school did you attend?</option>
            <option value="5">What is the name of the road you grew up on?</option>
            <option value="6">Where did you meet your spouse?</option>
            <option value="7">What's your best friend's name?</option>
            <option value="8">Where did you go to high school/college?</option>
            <option value="9">Who was your childhood hero?</option>
            <option value="10">What is your favorite food?</option>
        </React.Fragment>
    )
}

const OptionsGender = ({label}) => {
    return (
        <React.Fragment>
            <option value="" default>Select {label}</option>
            <option value="F">Female</option>
            <option value="M">Male</option>
            <option value="O">Other</option>
        </React.Fragment>
    )
}