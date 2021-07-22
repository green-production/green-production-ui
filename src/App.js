/*eslint-disable */
import React, { Suspense, lazy, Component } from "react";
import {
    BrowserRouter as Router,
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
import "./App.scss";
import "styles/common.scss";

const Login = lazy(() => import("views/login/index"));
const Profile = lazy(() => import("views/profile/index"));
const Product = lazy(() => import("views/product/index"));


const Main = props => {
    return (
        <div className="App">
                {
                    !location.pathname.includes('login') ? <Header /> : ''
                }
                {
                    props.data
                    ?
                    <Switch>
                        <Route 
                            exact={true}
                            path="/" 
                            render={() => (
                                <PrivateRoute 
                                    user={props.data}
                                    allowed={1}
                                    component={Dashboard}
                                />)} 
                        />
                        <Suspense fallback={GlobalLoader}>
                            <Route 
                                exact 
                                path="/login" 
                                render={() => (
                                    <PrivateRoute 
                                        user={props.data}
                                        allowed={1}
                                        component={Login}
                                    />)} 
                            />
                            <Route 
                                exact 
                                path="/profile" 
                                render={() => (
                                    <PrivateRoute 
                                        user={props.data}
                                        allowed={2}
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
                    </Switch>
                    :
                    <GlobalLoader />
                }
                <Route 
                    exact 
                    path="/not-found" 
                    component={NotFound}/>
                {
                    !location.pathname.includes('login') ? <Footer /> : ''
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
    
    componentWillMount() {
        
    }

    render() {
        const {userData} = this.state

        return (
            <Router>
                <div>
                    <Main 
                        data={userData} 
                        access={Roles[userData?.Type]} />
                </div>
            </Router>
        )
    }
};

export default App;
