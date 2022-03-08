import React, { useState } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export const Register = () => {

    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const data = useSelector(User => console.log(User))
    // console.log(data);

    const handleSubmit = () => {

        // dispatch({ type: "REGISTRATION_FAILED", payload: { status: "mohan" } })
        // dispatch({
        //     type: "REGISTRATION_SUCCESS", payload: { user: { name: "New user" } }
        // })

    }

    return (
        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Form onSubmit={handleSubmit}>
                <FormGroup className="mt-5">
                    <Label>
                        <h3>Register here!</h3>
                    </Label>
                </FormGroup>
                <div className="text-left">
                    <FormGroup>
                        <Label for="registerFirstName">First name</Label>
                        <Input
                            tabIndex={1}
                            type="text"
                            name="firstName"
                            id="registerFirstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="registerLastName">Last Name</Label>
                        <Input
                            tabIndex={2}
                            type="text"
                            name="lastName"
                            id="registerLastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="registerEmail">Email</Label>
                        <Input
                            tabIndex={4}
                            type="email"
                            name="email"
                            id="registerEmail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="registerUserNmae">Username</Label>
                        <Input
                            tabIndex={4}
                            type="text"
                            name="userName"
                            id="registerUserName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="registerPassword">Password</Label>
                        <Input
                            tabIndex={5}
                            type="password"
                            name="password"
                            id="registerPassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup className="text-center">

                    </FormGroup>
                    <FormGroup className="text-center col-12 d-flex flex flex-column align-items-center">
                        <Button
                            tabIndex={6}
                            color="primary"
                            className="col-md-6 col-sm-12 mt-3"
                            onClick={handleSubmit}
                        // disabled={loading}
                        >

                            {/* plesase visit this */}

                            {email ? "Registering..." : "Register Now!"}
                        </Button>
                        <Link to="/home">Click Login</Link>

                    </FormGroup>
                </div>
            </Form>
        </div>
    )
}
        