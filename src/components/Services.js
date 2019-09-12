import React from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-lg">
                    <h2><span className="primary-text">Our</span> Services</h2>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md">
                    <Card>
                        <CardBody>
                            <CardTitle>
                                <h4>
                                    <span className="icon-button">
                                        <FontAwesomeIcon icon="magic" />
                                    </span>
                                    Accounting
                                </h4>
                            </CardTitle>

                            <hr/>

                            <CardText>Giving monetary data to our clientele in an auspicious and exact way is a pledge that we feel can not be traded off. Significant, efficient money related records guarantee that your business operations will run all the more proficiently every day. We aim to regularly help out our  clientele to  make spending plans, idealizing budgetary articulations, and planning nearby, state and government assessment forms. </CardText>
                        </CardBody>

                    </Card>
                </div>
                <div className="col-md">
                    <Card>
                        <CardBody>
                            <CardTitle>
                                <h4><span className="icon-button"><FontAwesomeIcon icon="clipboard-list" /></span> Bookkeeping</h4>
                            </CardTitle>

                            <hr/>

                            <CardText>Our goal  is make our clients feel more than just a business transaction. We are committed to provide you with best bookkeeping services. By  providing our clients  with the necessary tools to help assess their financial position at any given  time. Our MWBE  certified professional staff devotes itself to providing bookkeeping services in a timely, accurate manner, while showing respect and awareness of the confidentiality and individual needs of our clientele. </CardText>
                        </CardBody>

                    </Card>
                </div>
                <div className="col-md">
                <Card>
                        <CardBody>
                            <CardTitle>
                                <h4><span className="icon-button"><FontAwesomeIcon icon="chart-line" /></span> Company Start-ups</h4>
                            </CardTitle>

                            <hr/>

                            <CardText>When starting up a new business it so natural to become involved with the glitzy assignments of planning a business card or picking a business name, yet without a strong comprehension of the numbers, you won’t survive. Selecting the right  Professional   is essential  to grow organizations, organizations with more intricate business structures, (for example, restricted obligation organizations) and when you add extra workers to your organization. </CardText>
                        </CardBody>

                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    <Card>
                        <CardBody>
                            <CardTitle>
                                <h4><span className="icon-button"><FontAwesomeIcon icon="user-friends" /></span> Human Resources</h4>
                            </CardTitle>

                            <hr/>

                            <CardText>Your human capital is your most noteworthy resource and basic to the accomplishment of your business. However overseeing advantages, finance and HR procedures can be exorbitant and tedious particularly with diminishing spending plans and rising social insurance and regulatory expenses. This is the reason we prescribe using innovation to convey on-request administrations to streamline value-based HR and decrease overhead expenses. We have done the examination for you, offering what we consider to be among the best-in-class Human Resource  Services. </CardText>
                        </CardBody>

                    </Card>
                </div>
                <div className="col-md">
                    <Card>
                        <CardBody>
                            <CardTitle>
                                <h4><span className="icon-button"><FontAwesomeIcon icon="file-invoice-dollar" /></span> Payroll</h4>
                            </CardTitle>

                            <hr/>

                            <CardText>Endeavoring to do finance all alone for your independent venture could put you at danger of confronting IRS punishments and fines, late duty filings, and troubled representatives. Let us handle all your payroll needs, so you are not at the risk of  fines, penalties and headaches.</CardText>
                        </CardBody>

                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Services;