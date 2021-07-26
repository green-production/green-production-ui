import React, { Component } from "react";
import { Tabs, Tab, Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {AuthContext} from '../../context/authContext'

class Profile extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
            username: "soumyadas",
            
        };
    }

    componentDidMount() {
        const { isAuthenticated } = this.context;
        if(!isAuthenticated) {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div className="container bootstrap snippet">
                <div className="row">
                    <div className="col-sm-10">
                        <h1>User name</h1>
                    </div>
                    <div className="col-sm-2">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="text-center">
                            <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar" />
                            <h6>Upload a different photo...</h6>
                            <input type="file" className="text-center center-block file-upload" />
                        </div>

                        <div className="panel panel-default">
                            <div className="panel-heading">Website <i className="fa fa-link fa-1x"></i></div>
                            <div className="panel-body"><a href="javascript:void(0)">facebook.com</a></div>
                        </div>


                        <ul className="list-group">
                            <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x"></i></li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Shares</strong></span> 125</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Likes</strong></span> 13</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Posts</strong></span> 37</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Followers</strong></span> 78</li>
                        </ul>

                        <div className="panel panel-default">
                            <div className="panel-heading">Social Media</div>
                            <div className="panel-body">
                                <i className="fa fa-facebook fa-2x"></i> <i className="fa fa-github fa-2x"></i> <i
                                    className="fa fa-twitter fa-2x"></i> <i className="fa fa-pinterest fa-2x"></i> <i
                                        className="fa fa-google-plus fa-2x"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-9">
                        <Tabs
                            defaultActiveKey="home"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Home">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group as={Row} className="mb-3" controlId="formFullName">
                                        <Form.Label column sm="2">
                                            Full Name
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue="Soumya Das" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formFullName">
                                        <Form.Label column sm="2">
                                            Email
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue="soumya@gmail.com" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="gender">
                                        <Form.Label column sm="2">
                                            Gender
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue="Male" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="gender">
                                        <Form.Label column sm="2">
                                            Registered Date
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue="24 July 2021" />
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Username
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue="soumya@gmail.com" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="2">
                                            Password
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="password" placeholder="Password" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Email
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formDob">
                                        <Form.Label column sm="2">
                                            DOB:
                                        </Form.Label>
                                        <Col sm="10">
                                        <Form.Control type="date" placeholder="Password" />
                                        </Col>
                                    </Form.Group>
                                    {/* <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridDob">
                                            <Form.Label>DOB</Form.Label>
                                            <Form.Control type="date" placeholder="Select Date of Birth" />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridGender">
                                            <Form.Label>Gender</Form.Label>
                                            <Form.Control type="radio" name="gender" value="Male" />Male
                                            <Form.Control type="radio" name="gender" value="female" />Female
                                            <Form.Control type="radio" name="gender" value="other" />Others
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control placeholder="1234 Main St" />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>State</Form.Label>
                                            <Form.Select defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridZip">
                                            <Form.Label>Zip</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                    </Row>

                                    <Form.Group className="mb-3" id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group> */}

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Tab>
                            <Tab eventKey="settings" title="Settings" disabled>
                                Sample Text 144
                            </Tab>
                        </Tabs>
                    </div>


                </div>
            </div>
        );
    }
}

export default Profile;
