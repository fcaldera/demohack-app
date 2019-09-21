import React from "react";
import { Flex, Text, Heading, Button, ButtonPrimary } from "@primer/components";
import illustration from "../../assets/img/2.svg";
import swedbank from "../../assets/img/swedbank.svg";
import seb from "../../assets/img/seb.svg";
import lhv from "../../assets/img/lhv.svg";
import styled from "styled-components";
import Layout, { Aside, Main } from "./layout";

const BankLink = styled.a`
  text-decoration: none;
  display: block;
  border-radius: 7px;
  background: ${props => props.theme.colors.gray[2]};
  box-shadow: 0px 2px 2px rgba(176, 182, 193, 0.06);
  border-radius: 7px;
  padding: 10px 20px;
  flex: 1;
  text-align: center;
  max-width: 136px;
`;

function Signup() {
  return (
    <Layout>
      <Main>
        <Heading mb={5}>Sign Up</Heading>
        <Flex justifyContent="space-between" mb={3}>
          <Button>ID-Card</Button>
          <Button>Mobile-ID</Button>
          <Button>Smart-ID</Button>
        </Flex>
        <Text as="p" mb={5} fontSize={1}>
          Insert your ID-card into the card reader and click "Continue".
        </Text>
        <ButtonPrimary width={1} mb={7}>
          Continue
        </ButtonPrimary>
        <Text as="p" color="gray.5" mb={4} textAlign="center" fontSize={1}>
          or sign up via your bank...
        </Text>
        <Flex justifyContent="space-between" alignContent="stretch">
          <BankLink>
            <img height="20px" src={swedbank} alt="Swedbank" />
          </BankLink>
          <BankLink>
            <img height="20px" src={seb} alt="SEB" />
          </BankLink>
          <BankLink>
            <img height="20px" src={lhv} alt="LHV" />
          </BankLink>
        </Flex>
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

export default Signup;
