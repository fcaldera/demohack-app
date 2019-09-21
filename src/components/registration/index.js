import React from "react";
import {Flex, Text, Heading, Button, ButtonPrimary} from "@primer/components";
import styled from "styled-components";
import Layout, {Aside, Main} from "./layout";

// assets
import illustration from "../../assets/img/2.svg";
import swedbank from "../../assets/img/swedbank.svg";
import seb from "../../assets/img/seb.svg";
import lhv from "../../assets/img/lhv.svg";

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

function Registration() {
  return (
    <Layout>
      <Main>
        <Heading mb={5}>Liitu</Heading>
        <Flex justifyContent="space-between" mb={3}>
          <Link>ID-kaart</Link>
          <Link>ID-kaart</Link>
          <Link>Mobiil-ID</Link>
          <Link>Smart-ID</Link>
        </Flex>
        <Text as="p" mb={5} fontSize={1}>
          Pane oma ID-kaart kaardilugejasse ja vajuta “Edasi” nupule.
        </Text>
        <ButtonPrimary width={1} mb={7}>
          Edasi
        </ButtonPrimary>
        <Text as="p" color="gray.5" mb={4} textAlign="center" fontSize={1}>
          or sign up via your bank...
        </Text>
        <Flex justifyContent="space-between" alignContent="stretch">
          <Link>
            <img height="20px" src={swedbank} alt="Swedbank"/>
          </Link>
          <Link>
            <img height="20px" src={seb} alt="SEB"/>
          </Link>
          <Link>
            <img height="20px" src={lhv} alt="LHV"/>
          </Link>
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

export default Registration;
