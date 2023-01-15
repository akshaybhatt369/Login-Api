import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase-config';
import "../css/style.css";
const Register = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const Register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail,registerPassword);
            console.log(user);
        } catch (error) {
            console.log(error.message);   
        }
     };

    return (
        <form>
        <div class="container">
            <h1>Register User</h1>
          <label for="uname">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
            }}
            required
          />
          <br />
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
                    placeholder="Enter Password"
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
            }}
            required
          />
          <br />
          <button type="submit" onClick={Register}>Register</button>
        </div>
      </form> 
    );
}
 
export default Register;



