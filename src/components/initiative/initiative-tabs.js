import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Box, Flex } from '@primer/components';

const TabList = styled(Flex)`
  list-style: none;
`;

const ListItem = styled(Box)`
  font-size: 16px;
  cursor: pointer;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 8px 0px 40px 0;
  color: ${props => props.theme.colors.gray[4]};
  text-decoration: none;
`;

const TabListItem = ({ link, children, haschild }) => {
  return (
    <ListItem as="li">
      <StyledNavLink to={link} activeStyle={{
        color: "white",
        borderBottom: "1px solid white"
      }}>
        {children}
      </StyledNavLink>
    </ListItem>
  );
};

const Tabs = (props) => {
  return (
    <TabList as="ul" p={0} m={0} justifyContent="space-between">
      <TabListItem link="/initiative/1">Ülevaade</TabListItem>
      <TabListItem link="/initiative/1/updates" haschild={1}>
        Uudised · 4
      </TabListItem>
      <TabListItem link="/initiative/1/donors">Toetajad</TabListItem>
      <TabListItem link="/initiative/1/members">Liikmed</TabListItem>
      <TabListItem link="/initiative/1/discussion">Foorum</TabListItem>
      <TabListItem link="/initiative/1/contact">Kontakt</TabListItem>
    </TabList>
  );
};

export default Tabs;
