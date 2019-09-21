import React, {useState} from "react";
import {Flex, Text, Heading, TextInput, ButtonPrimary} from "@primer/components";
import styled from "styled-components";


function Form(props) {
  const {method} = props;
  const [input, setInput] = useState({
    email: '',
    firstName: '',
    lastName: '',
    idCode: '',
    password: '',
    passwordVerification: '',
    phoneNumber: '',
  });

  switch (method) {
    case 'email':
      return (
        <div>
          <div>
            <label>E-maili aadress</label>
            <TextInput
              aria-label=">E-maili aadress"
              name="email"
              value={input.email}
              onChange={(value) => setInput({...input, email: value})}
            />
          </div>
          <div>
            <label>Eesnimi</label>
            <TextInput
              aria-label="Eesnimi"
              name="firstName"
              value={input.firstName}
              onChange={(value) => setInput({...input, firstName: value})}
            />
          </div>
          <div>
            <label>Perekonnanimi</label>
            <TextInput aria-label="Perekonnanimi" name="lastName" />
          </div>
          <div>
            <label>Isikukood</label>
            <TextInput aria-label="Isikukood" name="idCode" />
          </div>
          <div>
            <label>Parool</label>
            <TextInput aria-label="Parool" type={'password'} name="password" />
          </div>
          <div>
            <label>Parooli kinnitus</label>
            <TextInput aria-label="Parooli kinnitus" type={'password'} name="passwordVerification" />
          </div>
        </div>
      );
    case 'idcard':
      return (
        <Text as="p" mb={5} fontSize={1}>
          Pane oma ID-kaart kaardilugejasse ja vajuta “Edasi” nupule.
        </Text>
      );
    case 'mobileid':
      return (
        <div>
          <div>
            <label>Isikukood</label>
            <TextInput aria-label="Isikukood" name="idCode" />
          </div>
          <div>
            <label>Telefoni number</label>
            <TextInput aria-label="Telefoni number" name="phoneNumber" />
          </div>
        </div>
      );
    case 'smartid':
      break;
  }

}

export default Form;
