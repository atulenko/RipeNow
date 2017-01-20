/**
 * Created by alextulenko on 11/29/16.
 */
import React from 'react';
import Radium, { Style } from 'radium'
var ReactBootstrap = require('react-bootstrap');

var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Image = ReactBootstrap.Image;
var Col = ReactBootstrap.Col;
var Table = ReactBootstrap.Table;

var imgStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
};
var styles = {
    base: {
        backgroundSize: 'cover',
    }
};
class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div  style={styles.base}>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} md={6} xsOffset={3}><Image style={imgStyle} src="https://firebasestorage.googleapis.com/v0/b/homegrown-65645.appspot.com/o/RipeNow-Logo.png?alt=media&token=044f84d8-dcb2-4ded-bf63-470d4c08bc79" responsive /></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}><h3>Bringing farms and resturants together - a community movement</h3></Col>
                    </Row>
                    <Row >
                        <Col xs={12}><p>An innovative way for restaurants to purchase and receive local produce directly from farm’s, while saving time and money. Maximize freshness with daily orders, become more involved with the local community, and promote healthier and better quality produce. We worry about the details, so you can focus on getting the ingredients you need, when you need them – at the best quality and price. All you do is place your order from local, small farms, and schedule a time to pick up the produce from the farms local stall.</p></Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>Not just a service; a movement.</p></Col>
                        <Col md={6}><p>At RipeNow, we not only provide you with the best produce possible, but do it in a way that connects the farms and restaurants with the community.
                            We care about supporting local farm’s and restaurant’s, and want to make it easier for them to connect.
                            Our primary goal is getting users excited about local grown, fresh ingredients that support the farmers close to them.</p></Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>The produce you need, when you need it.</p></Col>
                        <Col md={6}><p>With our easy and intuitive online ordering system, we make it easy for you to get exactly what you want.
                            With quality and farm ratings, you know exactly what you’re going to get.
                            By connecting you directly to the farms, picking up produce became
                        </p></Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>Built to save you time and money.</p></Col>
                        <Col md={6}><p>Here, we know we’re dealing with two of the busiest professions in the world – farms and restaurants.
                            Our goal is to streamline the process, to save you time when ordering, and save you money by cutting out unnecessary series of wholesale distributors.  </p></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}><h3>RipeNow Grading Scale</h3></Col>
                    </Row>
                    <Row>
                        <Col md={12}><p>At RipeNow we've created a grading scale to be used across all produce to help you receive exactly what you need - every time.</p></Col>
                    </Row>
                    <Row>
                        <Table responsive>
                            <thead>
                            <tr>
                                <th> </th>
                                <th style={{fontWeight: 'bold'}}>Extra Quality</th>
                                <th style={{fontWeight: 'bold'}}>Quality</th>
                                <th style={{fontWeight: 'bold'}}>Bulk</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style={{fontWeight: 'bold'}}>Size</td>
                                <td>Size must be consistent across all items in the units</td>
                                <td>Size must be very similar across the entire order, deviating from an average by a small amount. However, they are not expected to be exactly consistent</td>
                                <td>Size can vary across the order</td>
                            </tr>
                            <tr>
                                <td style={{fontWeight: 'bold'}}>Appearance</td>
                                <td>They should be identical across the delivery</td>
                                <td>They should fall within the same range, but appearance isn’t exact across the order. That being said, they should be within a small range</td>
                                <td>The appearance can change drastically throughout the order</td>
                            </tr>
                            <tr>
                                <td style={{fontWeight: 'bold'}}>Defects</td>
                                <td>No defects on any of the items</td>
                                <td>10% of the order can have small blemishes or defects but no major ones</td>
                                <td>Small defects and blemishes are allowable, as long as they don’t affect the freshness or ripeness of the produce. Large blemishes are allowable for 10% of the order, but can’t change freshness or ripeness</td>
                            </tr>
                            <tr>
                                <td style={{fontWeight: 'bold'}}>Allowable Tolerances</td>
                                <td>None</td>
                                <td>As said in each of the categories, there is a small tolerance in the variability of these orders, but the orders will still be held to high standards in the amount of variability, and the average produce in the order</td>
                                <td>There is a large amount of deviation available in all these categories, but it is not acceptable to place old or bad quality produce in the Bulk section – this produce must still be fresh</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}><h3>Contact Information</h3></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}><p>Please contact us with any and all issues, comments, or suggestions!</p></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}><p>Phone Number: 919-830-9521</p></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}><p>Email: <a href="mailto:hello@ripenow.co?Subject=Hello!" target="_top">hello@ripenow.co</a></p></Col>
                    </Row>
                </Grid>
                <br />
            </div>
        );
    }
}

AboutPage = Radium(AboutPage);
export default AboutPage;