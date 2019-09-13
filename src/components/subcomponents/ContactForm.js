import React from 'react';
import { Button, ButtonGroup, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ContactForm = () => {
    return(
        <Form action="https://formspree.io/albertchan1110@gmail.com" method="POST" >
            <h2><span className="primary-text">Contact</span> Us</h2>
            <br/>
            <FormGroup>
            <FormGroup>
                <Label for="name">Your Name</Label>
                <Input type="text" name="name" id="name" />
                </FormGroup>
                <Label for="email">Your Email</Label>
                <Input type="email" name="email" id="email" placeholder="" />
                </FormGroup>
                <FormGroup>
                <Label for="subject">I would like to discuss</Label>
                <Input type="select" name="subject" id="subject">
                    <option value="Accounting">Accounting</option>
                    <option value="Bookkeeping">Bookkeeping</option>
                    <option value="Company start up">Company start up</option>
                    <option value="Human resources">Human resources</option>
                    <option value="Payroll">Payroll</option>
                    <option value="Accounting &amp; Bookkeeping">Accounting &amp; Bookkeeping</option>
                    <option value="Accounting &amp; Company start up">Accounting &amp; Company start up</option>
                    <option value="Accounting &amp; Human resources">Accounting &amp; Human resources</option>
                    <option value="Accounting &amp; Company start up">Accounting &amp; Company start up</option>
                    <option value="Accounting &amp; Payroll">Accounting &amp; Payroll</option>
                    <option value="Bookkeeping &amp; Company start up">Bookkeeping &amp; Company start up</option>
                    <option value="Bookkeeping &amp; Human resources">Bookkeeping &amp; Human resources</option>
                    <option value="Bookkeeping &amp; Company start up">Bookkeeping &amp; Company start up</option>
                    <option value="Bookkeeping &amp; Payroll">Bookkeeping &amp; Payroll</option>
                    <option value="Human resources &amp; Company start up">Human resources &amp; Company start up</option>
                    <option value="Human resources &amp; Payroll">Human resources &amp; Payroll</option>
                    <option value="Company start up &amp; Payroll">Company start up &amp; Payroll</option>
                    <option value="All">All</option>
                </Input>
                </FormGroup>
                    <Button outline color="danger" type="reset">Cancel</Button>

                    <Button outline color="primary" className="float-right" type="submit">Submit</Button>

        </Form>
    );
}

export default ContactForm;