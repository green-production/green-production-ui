import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
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

    componentWillMount() {
        
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
                    <div className="hero">
                        <h1>Sustainable Consumption and Production</h1>
                        <a className="btn" title="Get advice from top designers" href="javascript:void(0)">Get advice on all eco-friendly products.</a>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;