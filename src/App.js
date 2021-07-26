/*eslint-disable */
import React, { Suspense, lazy, Component } from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import Dashboard from "views/home/index";
import NotFound from "views/not-found/index";
import PrivateRoute from "guards/auth-route";
import Header from 'views/header/index';
import Footer from "views/footer/index";
import GlobalLoader from "components/loader/global-loader";
import Roles from "constants/roles"
import AuthContextProvider from "context/authContext"
import "./App.scss";
import "styles/common.scss";

const Login = lazy(() => import("views/login/index"));
const Profile = lazy(() => import("views/profile/index"));
const Product = lazy(() => import("views/product/index"));


const Main = props => {
    

    return (
        <div className="App">
                {
                    !location.pathname.includes('login') && <Header />
                }
                {
                    props.data
                    ?
                    <Switch>
                        <AuthContextProvider>
                            <Route 
                                exact={true}
                                path="/" 
                                render={prop => (
                                    <PrivateRoute 
                                        {...prop}
                                        user={props.data}
                                        allowed={1}
                                        component={Dashboard}
                                    />)} 
                            />
                            <Suspense fallback={GlobalLoader}>
                                <Route 
                                    exact 
                                    path="/login" 
                                    render={prop => (
                                        <PrivateRoute 
                                            {...prop}
                                            user={props.data}
                                            allowed={1}
                                            component={Login}
                                        />)} 
                                />
                                <Route 
                                    exact 
                                    path="/profile" 
                                    render={prop => (
                                        <PrivateRoute 
                                            {...prop}
                                            user={props.data}
                                            allowed={1}
                                            component={Profile}
                                        />)} 
                                />
                                <Route 
                                    exact 
                                    path="/product/:id" 
                                    render={() => (
                                        <PrivateRoute 
                                            user={props.data}
                                            allowed={1}
                                            component={Product}
                                        />)} 
                                />
                            </Suspense>
                        </AuthContextProvider>
                    </Switch>
                    :
                    <GlobalLoader />
                }
                <Route 
                    exact 
                    path="/not-found" 
                    component={NotFound}/>
                {
                    !location.pathname.includes('login') && <Footer />
                }
        </div>
    );
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null
        }
    }

    async componentDidMount() {
        /* Fetch user here through API */
        const json = await import('constants/json/get-user-info.json')
        this.setState({userData: json.default}) //initial dummy data
    }

    render() {
        const {userData} = this.state

        return (
            <div className="main">
                <Main 
                    data={userData} 
                    access={Roles[userData?.Type]} />
            </div>
        )
    }
};

export default App;
