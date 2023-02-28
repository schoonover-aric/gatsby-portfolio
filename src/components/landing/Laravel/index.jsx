import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
// import contact from 'assets/illustrations/contact.svg';
import laravelthumb from 'assets/site-images/laravelthumb.png';
import { Wrapper, Details, Thumbnail } from './styles';
// import ContactForm from './ContactForm';

export const Laravel = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="laravel">
      <Details theme={theme}>
        <a href="http://ec2-100-25-167-82.compute-1.amazonaws.com/" target="_blank">
            <h2 id="projects">Sample Project - Laravel App &#8594;</h2>
            <h4 style={{ marginBottom: "1rem"}}>Built with:</h4>
            <h4>
                <ul style={{marginLeft: "2rem", columns: "2", WebkitColumns: "2", mozColumns: "2", fontWeight: "normal"}}>
                    <li style={{marginLeft: "2rem"}}>Linux</li>
                    <li style={{marginLeft: "2rem"}}>Nginx</li>
                    <li style={{marginLeft: "2rem"}}>MySQL</li>
                    <li style={{marginLeft: "2rem"}}>PHP</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS/Tailwind</li>
                </ul>
            </h4>
        </a>
      </Details>
      <Thumbnail>
        <a href="http://ec2-100-25-167-82.compute-1.amazonaws.com/" target="_blank">
            <figure>
                <img src={laravelthumb} alt="I’m Aric and I’m a Web and Software Developer!" />
                <figcaption style={{textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", color: "white"}}>Opens in new tab &#x2197;</figcaption>
            </figure>
        </a>
      </Thumbnail>
    </Wrapper>
  );
};
