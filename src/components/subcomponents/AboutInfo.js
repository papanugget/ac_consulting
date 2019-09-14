import React from 'react';
import { Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';

const AboutInfo = () => {
    return(
        <div>
            <Jumbotron id="about-jumbo">
                <h1 className="display-3">About Erica Antoine-Cole</h1>
                <p className="lead">Antoine Cole Consulting - Integrity + Accuracy ... It All Adds Up</p>
                <hr className="my-2" />
                <ListGroup>
                    <ListGroupItem>Sole Propietorship</ListGroupItem>
                    <ListGroupItem>Minority Owned Business</ListGroupItem>
                    <ListGroupItem>For Profit Organization</ListGroupItem>
                    <ListGroupItem>Woman Owned Small Business</ListGroupItem>
                </ListGroup>
            </Jumbotron>
        </div>
    );
}

export default AboutInfo;