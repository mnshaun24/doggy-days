import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    name: "",
    phoneNumber: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    setUserFormData({
      name: "",
      phoneNumber: "",
      password: "",
    });
  };

  return (
    <>
      <div>
        <h2>Sign Up Here: </h2>
        <form onSubmit={handleFormSubmit}>
          <input
            placeholder="Your name here"
            name="name"
            type="name"
            id="name"
            value={userFormData.name}
            onChange={handleInputChange}
          />
          <input
            placeholder="Your phone number"
            name="phoneNumber"
            type="number"
            value={userFormData.phoneNumber}
            onChange={handleInputChange}
          />
          <input
            placeholder="*********"
            name="password"
            type="password"
            id="pwd"
            value={userFormData.password}
            onChange={handleInputChange}
          />
          <Button className="signupbtn" variant="outline-light" type="submit">
            Submit
          </Button>
        </form>
        {error && <div>Sign up failed</div>}
      </div>
    </>
  );
};

export default SignupForm;
