import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Aric and I’m a Web and Software Developer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h4>More about me</h4>
          <p>
          I've been an Engineer for more than two decades. I began my career in Electronics, Hardware and Equipment Engineering and currently specialize in Web & Software Development.
          </p>
          <Button as={AnchorLink} href="#contact">
            Contact Me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
