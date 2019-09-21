import React from "react";
import { Flex, Box, Text } from "@primer/components";
import styled from "styled-components";

const Content = styled.div`
  max-width: 416px;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Footer = styled.div``;

const Img = styled.img`
  width: 100%;
  max-width: 712px;
`;

export const Aside = ({
  bg = "primary",
  color = "bodytext",
  illustration,
  title,
  copy
}) => (
  <Flex width={[1 / 2]} bg={bg} alignItems="center" alignContent="stretch">
    <Box css="flex: 1">
      <Text as="div" textAlign="center" mb={[8]}>
        <Img src={illustration} alt="illustration" />
      </Text>
      <Box color={color} px={[6, 6, 6, 12]}>
        <Text as="h2">{title}</Text>
        <Text as="p">{copy}</Text>
      </Box>
    </Box>
  </Flex>
);

export const Main = ({ children }) => (
  <Box width={[1 / 2]}>
    <Content>
      <Box>{children}</Box>
      <Footer />
    </Content>
  </Box>
);

function Layout({ children }) {
  return (
    <Flex alignItems="stretch" height="100vh">
      {children}
    </Flex>
  );
}

export default Layout;
