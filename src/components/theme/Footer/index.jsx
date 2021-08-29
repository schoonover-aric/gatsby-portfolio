import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Details } from './styles';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Develop With Aric</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            💖
          </span>{' '}
          by{' '}
          <a href="http://developwitharic.com/" rel="noopener noreferrer" target="_blank">
            Aric Schoonover
          </a>
        </span>
      </Details>
      
    </Flex>
  </Wrapper>
);
