import React, { FormEvent, useState } from 'react';
import './Login.scss';
import logo from './../../logo.svg';
import Button from 'react-bootstrap/Button';
import { Form, FormControl, FormLabel } from 'react-bootstrap';

function copyright(since: number) {
    const year = new Date().getFullYear();
    if (year === since) return since.toString();
    return [year, since].sort().join('-');
}

async function loginUser(user: string, pass: string) {
    return `${user}:${pass}`
    // return fetch('http://localhost:8080/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ user, pass })
    // })
    //     .then(data => data.json())
}

interface LoginParams {
    setToken: (token: string) => void
}

export default function Login({ setToken }: LoginParams) {
    const [user, setUser] = useState<string>();
    const [pass, setPass] = useState<string>();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const token = await loginUser(user!, pass!);
        setToken(token);
    }

    return (
        <Form className="form-signin text-center" onSubmit={handleSubmit}>
            <img className="mb-3" src={logo} alt="NotJustAnna - Login" width="72" height="72"/>

            <FormLabel htmlFor="inputUser" srOnly>Username</FormLabel>
            <FormControl type="text" id="inputUser" placeholder="Username" required autoFocus
                         onChange={e => setUser(e.target.value)}/>

            <FormLabel htmlFor="inputPass" srOnly>Password</FormLabel>
            <FormControl type="password" id="inputPass" placeholder="Password" required
                         onChange={e => setPass(e.target.value)}/>

            <Button block variant="secondary" size="lg" type="submit">Sign in</Button>
            <p className="mt-5 mb-3 text-muted">&copy; {copyright(2021)}</p>
        </Form>
    )
}
