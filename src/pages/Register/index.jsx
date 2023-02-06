import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase-config";
import { toast } from 'react-toastify';

const BgImage = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.pexels.com/photos/17834/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-origin: border-box;
  background-size: cover;
  background-position: 10%;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Form = styled("form")`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const BoxForm = styled(Box)`
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
  padding: 30px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = async () => {
    // const user = userCredential.user;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success('Register Success!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setPassword("")
          setEmail("")
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      });
  };

  return (
    <BgImage>
      <BoxForm>
        <Form onSubmit="submit">
          <Typography variant="h4" component="h1" mb={3}>
            Register
          </Typography>
          <TextField
            sx={{ margin: "20px 0px 20px" }}
            id="outlined-basic"
            label="Email"
            variant="filled"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="filled"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button sx={{ mt: 3 }} variant="contained" onClick={onRegister}>
            Create
          </Button>
        </Form>
      </BoxForm>
    </BgImage>
  );
};

export default Register;
