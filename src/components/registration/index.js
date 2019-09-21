import React, {useState} from "react";
import {Flex, Text, Heading, TextInput, ButtonPrimary} from "@primer/components";
import styled from "styled-components";
import Layout, {Aside, Main} from "./layout";

import Email from './email';
import IdCard from './idCard';
import MobileId from './mobileId';

// assets
import illustration from "../../assets/img/2.svg";
// import swedbank from "../../assets/img/swedbank.svg";
// import seb from "../../assets/img/seb.svg";
// import lhv from "../../assets/img/lhv.svg";

const Link = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 7px;
  background: ${props => props.theme.colors.gray[2]};
  box-shadow: 0px 2px 2px rgba(176, 182, 193, 0.06);
  border-radius: 7px;
  text-decoration: none;
  text-align: center;
  max-width: 136px;
`;

function renderForm(method) {
  switch (method) {
    case 'email':
      return <Email/>;
    case 'idcard':
      return <IdCard/>;
    case 'mobileid':
      return <MobileId/>;
    case 'smartid':
      break;
  }
}



function Registration() {
  const [method, setMethod] = useState(null);

  return (
    <Layout>

      <Main>
        <Heading mb={5}>Liitu</Heading>
        <Flex justifyContent="space-between" mb={2}>
          <Link onClick={() => setMethod('email')}>E-mail</Link>
          <Link onClick={() => setMethod('idcard')}>ID-kaart</Link>
          <Link onClick={() => setMethod('mobileid')}>Mobiil-ID</Link>
          {/*<Link onClick={() => setMethod('smartid')}>Smart-ID</Link>*/}
        </Flex>

        <div>
          {renderForm(method)}
        </div>

      </Main>

      <Aside
        illustration={illustration}
        title="Voice your needs"
        copy="It’s you who are going to make a difference."
        color="white"
      />
    </Layout>
  );
}

export default Registration;
