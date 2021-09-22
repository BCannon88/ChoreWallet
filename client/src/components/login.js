import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import './login.css';

export default function Login() {
  //const history = useHistory();

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

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

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div className='loginImage'>
      <Form onSubmit={handleFormSubmit}>
        <fieldset>
          <FormGroup>
            <Label className='margin' for="email">Email</Label>
            <Input id="email" name="email" type="text" autoFocus onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label className='margin' for="password">Password</Label>
            <Input id="password" name="password" type="password" onChange={handleChange} />
          </FormGroup>
          <FormGroup className='margin'>
            <Button>Login</Button>
          </FormGroup>
          <em>
            Not registered? <Link className='margin' to="/signup"><Button>Signup</Button></Link>
          </em>
        </fieldset>
      </Form>
      {error && <div>Login failed</div>}
    </div>
  );
}
