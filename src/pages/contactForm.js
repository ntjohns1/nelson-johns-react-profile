import React, { useState } from 'react';
import { Container, Row, Form, Button, Card } from 'react-bootstrap';

export default function ContactForm() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'firstName') {
      setFirstName(inputValue);
    } else if (inputType === 'lastName') {
      setLastName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container >
      <Card>
        <Card.Body>
        <Card.Title>Contact Me</Card.Title>
      <Form>
        <Form.Group controlId="formFirstName">
          {/* <Form.Label>First Name</Form.Label> */}
          <Form.Control value={firstName} name='firstName' onChange={handleInputChange} type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group controlId="formLastName">
          {/* <Form.Label>Last Name</Form.Label> */}
          <Form.Control value={lastName} name='lastName' onChange={handleInputChange} type="text" placeholder="Last Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control value={email} name='email' onChange={handleInputChange} type="email" placeholder="Email" />
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
