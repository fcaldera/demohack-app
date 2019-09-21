import React, {useState} from "react";
import {Flex, Text, Heading, TextInput, ButtonPrimary} from "@primer/components";
import styled from "styled-components";

function IdCard(props) {

  return (
    <div>
      <Text as="p" mb={5} fontSize={1}>
        Pane oma ID-kaart kaardilugejasse ja vajuta “Edasi” nupule.
      </Text>

      <ButtonPrimary width={1} mb={7} onClick={() => console.log('forward')}>
        Edasi
      </ButtonPrimary>

    </div>
  );

}

export default IdCard;
