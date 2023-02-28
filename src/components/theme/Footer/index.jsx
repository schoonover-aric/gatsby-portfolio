import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Details } from './styles';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2 style={{ marginBottom: ".5rem"}}>Develop With Aric</h2>
        <h4 style={{ marginBottom: ".25rem", fontWeight: "normal", color: "#707070"}}>by Aric Schoonover</h4>
        <span>
          © All rights are reserved | {new Date().getFullYear()}
        </span>
      </Details>
      
    </Flex>
  </Wrapper>
);
