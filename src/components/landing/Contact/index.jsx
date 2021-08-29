import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="contact">
      <Details theme={theme}>
        <ContactForm />
      </Details>
      <Thumbnail>
        <img src={contact} alt="I’m Aric and I’m a Web and Software Developer!" />
      </Thumbnail>
    </Wrapper>
  );
};
