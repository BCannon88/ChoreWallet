import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
    // user try/catch instead of promises to handle errors
      try {
        // execute addUser mutation and pass in variable data from form
        const { data } = await addUser({
          variables: { ...formState }
        });
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };

    return (
      <div>
      <Form onSubmit={handleFormSubmit}>
        <fieldset>
        <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input id="firstName" type="text" autoFocus onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input id="lastName" type="text" autoFocus onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input id="email" type="text" autoFocus onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input id="password" type="password" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Button>Signup</Button>
          </FormGroup>
          <em>
            Already registered? <Link to="/login"><Button>Login</Button></Link>
          </em>
        </fieldset>
      </Form>
      {error && <div>Signup failed</div>}
      </div>
    );
  }

export default Signup;