import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import { useHistory } from "react-router-dom";


export default function Login() {
  //const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

//   const loginSubmit = (e) => {
//     e.preventDefault();
//     login(email, password)
//       .then(() => history.push("/"))
//       .catch(() => alert("Invalid email or password"));
//   };

  return (
    <Form>
      <fieldset>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input id="email" type="text" autoFocus onChange={e => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Button>Login</Button>
        </FormGroup>
        <em>
          Not registered? <Button>Register</Button> 
        </em>
      </fieldset>
    </Form>
  );
}

