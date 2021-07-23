import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Loading from "components/loader/index";


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
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({pageLoading: false})
        }, 500);
    }

    render() {

        return (
            <header className="ds-header app-logged-in">
                {
                    (this.state.pageLoading) ?
                        <Loading/>
                        :
                        ""
                }   
                <nav className="navbar large-nav-menu">
                    <a className="logo" title="Everyday things" href="https://google.com"><span>Everyday Things</span></a>
                    {/* <div className="btn-login-wrapper">
                        <button className="btn sub-header login-btn" title="Login">Login</button>
                    </div> */}
                    <div className="hero">
                        <h1>Sustainable Consumption and Production</h1>
                        <button className="btn sub-header" title="Get advice from top designers">Get advice on all eco-friendly products.</button>
                    </div>
                </nav>
                <nav>
                    <ul>
                        <li>
                            <a title="About Us" href="javascript:void(0)" aria-haspopup="true"  onClick={this.onClick}>About us</a>
                            <ul>
                                <li>
                                    <a title="Sub link 1" href="javascript:void(0)" onClick={this.onClick}> Sub Link 1</a>
                                </li>
                                <li>
                                    <a title="Sub link 2" href="javascript:void(0)" onClick={this.onClick}> Sub Link 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a title="Design Corner" href="javascript:void(0)" aria-haspopup="true" onClick={this.onClick}>Design Corner</a>
                            <ul>
                                <li>
                                    <a title="Sub link 1" href="javascript:void(0)" onClick={this.onClick}> Sub Link 1</a>
                                </li>
                                <li>
                                    <a title="Sub link 2" href="javascript:void(0)" onClick={this.onClick}> Sub Link 2</a>
                                </li>
                                <li>
                                    <a title="Sub link 3" href="javascript:void(0)" aria-haspopup="true"> Sub Link 3</a>
                                    <ul>
                                        <li>
                                            <a title="Sub Sub link 1" href="javascript:void(0)" onClick={this.onClick}> Sub Sub Link 1</a>
                                        </li>
                                        <li>
                                            <a title="Sub Sub link 2" href="javascript:void(0)" onClick={this.onClick}> Sub Sub Link 2</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a title="Products" href="javascript:void(0)" aria-haspopup="true" onClick={this.onClick}>Products</a>
                            <ul>
                                <li>
                                    <a title="Sub link 1" href="javascript:void(0)" onClick={this.onClick}> Sub Link 1</a>
                                </li>
                                <li>
                                    <a title="Sub link 2" href="javascript:void(0)" onClick={this.onClick}> Sub Link 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link title="Contact Us" to="#">Contact Us</Link>
                        </li>
                        <li className="login-li">
                            <Link title="Login" to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;