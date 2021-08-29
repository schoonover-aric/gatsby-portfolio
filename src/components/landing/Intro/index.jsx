import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hello, I'm Aric!</h1>
          <p>Professional Web & Software Developer! <br />I've been delivering web-related solutions to my clients for nearly 10 years and take great pride in customer satisfaction!</p>
          <Button as={AnchorLink} href="#contact">
            Contact Me
          </Button>
          <Button as={AnchorLink} href="#about">
            More About Me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Aric and I’m a Web and Software Developer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
