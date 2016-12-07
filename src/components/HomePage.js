/**
 * Created by alextulenko on 11/12/16.
 */
import React from 'react';
import SignUpPage from '../containers/SignUpPage';
import LoginPage from '../containers/LoginPage';
var ReactBootstrap = require('react-bootstrap');
import { hashHistory } from 'react-router';

var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var HelpBlock = ReactBootstrap.HelpBlock;
var Col = ReactBootstrap.Col;
var Form = ReactBootstrap.Form;
var Checkbox = ReactBootstrap.Checkbox;
var Button = ReactBootstrap.Button;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Row = ReactBootstrap.Row;
var Grid = ReactBootstrap.Grid;
var Tabs = ReactBootstrap.Tabs;
var Tab = ReactBootstrap.Tab;
var Image = ReactBootstrap.Image;
var Clearfix = ReactBootstrap.Clearfix;
var divStyle =  {
    textAlign: 'center',
    size: 45
};
var imgStyle = {
    flex: 1,
    justifyContent: 'center',
        alignItems: 'center'
};

class Home extends React.Component {
    constructor(props) {
        super();
        this.TermsOfUse= this.TermsOfUse.bind(this);
    };

    TermsOfUse(){
        hashHistory.push('/terms');
    };

    render() {
        return (
            <div className="container">
                <Grid>
                    <Col sm={3} md={3}>
                    </Col>
                    <Col sm={6} md={6}>
                        <Image style={imgStyle} src="../../RipeNow-Logo.png" responsive />
                    </Col>
                    <Col sm={3} md={3}>
                    </Col>
                </Grid>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={6} md={6}>
                            <div>
                                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                    <Tab eventKey={1} title="Sign In">
                                        <div>
                                            <LoginPage/>
                                        </div>
                                    </Tab>
                                    <Tab eventKey={2} title="Sign Up">
                                        <div>
                                            <SignUpPage/>
                                            <Button onClick={this.TermsOfUse} >Terms of Use</Button>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </Col>
                        <Clearfix visibleSmBlock></Clearfix>
                        <Col sm={6} md={6}>
                            <div>
                                <h1>About RipeNow</h1>
                                <p>RipeNow aims to change the way local restaurants connect to local farmers.
                                    Chefs are given the ability to access a higher quality of produce through RipeNow.
                                    Local farms benefit by an expansion in the demand for their goods.</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}


export default Home;
