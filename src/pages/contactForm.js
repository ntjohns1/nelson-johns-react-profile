import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import emailjs, { init } from 'emailjs-com';
require('dotenv').config();

init(`${process.env.REACT_APP_USER_ID}`);


export default function ContactForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'user_name') {
      setUserName(inputValue);
    } else if (inputType === 'user_email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  // if (!this.validateMail()) {
  //       return;
  //     }
  //     const templateParams = {
  //       emailaddress
  //         };
  
      emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, '#contactForm')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
    });

    setUserName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container >
      <Card>
        <Card.Body>
        <Card.Title>Contact Me</Card.Title>
      <Form id='contactForm'>
        <Form.Group controlId="formUserName">
          {/* <Form.Label>First Name</Form.Label> */}
          <Form.Control value={userName} name='user_name' onChange={handleInputChange} type="text" placeholder="Name" />
          </Form.Group>
        <Form.Group controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control value={email} name='user_email' onChange={handleInputChange} type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label>Message</Form.Label> */}
          <Form.Control value={message} name='message' onChange={handleInputChange} as="textarea" rows={3} placeholder="Your message..."/>
        </Form.Group>
        <Button href='mailto:nelsontjohns@gmail.com' variant="primary" type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form>
      </Card.Body>
      </Card>
    </Container>
  );
}
