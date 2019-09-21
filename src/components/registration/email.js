import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import {Flex, Text, Heading, TextInput, ButtonPrimary} from "@primer/components";
import styled from "styled-components";

import apiClient from '../../api';
import {AppState} from "../../state";

function submit(state, input, history) {
  const attributes = {
    email: input.email,
    password: input.password,
    firstName: input.firstName,
    lastName: input.lastName,
  };

  return apiClient()
    .user
    .create(attributes)
    .then(response => {
      if (response.data) {
        history.push('/registration/success')
      }
    })
    .catch();
}

function Email(props) {
  const {history} = props;
  const [state, dispatch] = AppState();
  const [input, setInput] = useState({
    email: '',
    firstName: '',
    lastName: '',
    idCode: '',
    password: '',
    passwordVerification: '',
  });

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
        <TextInput
          aria-label="Perekonnanimi"
          name="lastName"
          value={input.lastName}
          onChange={(value) => setInput({...input, lastName: value})}
        />
      </div>
      <div>
        <label>Isikukood</label>
        <TextInput
          aria-label="Isikukood"
          name="idCode"
          value={input.idCode}
          onChange={(value) => setInput({...input, idCode: value})}
        />
      </div>
      <div>
        <label>Parool</label>
        <TextInput
          aria-label="Parool"
          type={'password'}
          name="password"
          value={input.password}
          onChange={(value) => setInput({...input, password: value})}
        />
      </div>
      <div>
        <label>Parooli kinnitus</label>
        <TextInput
          aria-label="Parooli kinnitus"
          type={'password'}
          name="passwordVerification"
          value={input.passwordVerification}
          onChange={(value) => setInput({...input, passwordVerification: value})}
        />
      </div>

      <ButtonPrimary
        width={1}
        mb={7}
        onClick={() => submit(state, input, history)}
      >
        Edasi
      </ButtonPrimary>

    </div>
  );

}

export default withRouter(Email);
