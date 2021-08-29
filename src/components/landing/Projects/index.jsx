import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import { Wrapper, Grid, Grid2, Item, Content, Details } from './styles';
//import { FormikProvider } from 'formik';
//import './static/2.3ceb25c6.chunk.css'

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const { allSite: { edges }, } = useStaticQuery(
    graphql`
    {
      allSite {
        edges {
          node {
            siteMetadata {
              author
              description
              title
            }
          }
        }
      }
    }
    `
  );
  return (
    <>
    <Wrapper as={Container} id="projects">
      <Details theme={theme}>
        <h2>Projects</h2>
        <h4>Code Editor - built with React.js</h4>
        {/* <button>Load Sample Code</button> */}
      </Details>
      <Grid2>
        {edges.map(({ node }) => (
          <Item key={2} as="div">
            <Card theme={theme}>
              <Content>
                <div id="root"></div>
                <Helmet>
                  <script src={withPrefix('js/runtime-main.bb22bbd3.js')} async defer></script>
                  <script src={withPrefix('js/2.ce56e253.chunk.js')} async defer></script>
                  <script src={withPrefix('js/main.128c7b0c.chunk.js')} async defer></script>
                  <script src={withPrefix('./js/devpen.js')} async await></script>
                </Helmet>
                <link rel="stylesheet" href="./css/devpen.css"></link>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid2>
    </Wrapper>
    <Wrapper as={Container} id="projectsRow3">
      <Details theme={theme}>
        <h4>React.js - In Action</h4>
      </Details>
      <Grid>
      {edges.map(({ node }) => (
          <Item key={2} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
              <h2>React.js - API Integration</h2>
              <p>Texas Instruments, Inc. - Interactive 20yr. Stock Chart</p>
              <link rel="stylesheet" href="./css/stocks.css"></link>
              <div id="root-chart"></div>
              <Helmet>
                  <script src={withPrefix('js/runtime-main.b2d64f9a.js')} async defer></script>
                  <script src={withPrefix('js/2.c2231a1a.chunk.js')} async defer></script>
                  <script src={withPrefix('js/3.9d100d4a.chunk.js')} async defer></script>
                  <script src={withPrefix('js/main.243e43bd.chunk.js')} async defer></script>
                  {/* <script src={withPrefix('css/main.6dea0f05.chunk.css')} async defer></script> */}
                </Helmet>
              </Content>
            </Card>
          </Item>
        ))}
        {edges.map(({ node }) => (
          <Item key={1} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h2 id="useStateHeading">React.js - State Management w/ useState Hook</h2>
                <link rel="stylesheet" href="./css/state.css"></link>
                <div id="javascriptExample"></div>
                <Helmet>
                <script src={withPrefix('runtime-main.b3709e63.js')} async defer></script>
                <script src={withPrefix('2.eccb9c9c.chunk.js')} async defer></script>
                <script src={withPrefix('main.dd979fe8.chunk.js')} async defer></script>
                <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
                </Helmet>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
      </Wrapper>
      <Wrapper as={Container} id="projectsRow2">
      <Details theme={theme}><h4>CRUD App - built w/ JavaScript</h4></Details>
      <Grid2>
      {edges.map(({ node }) => (
        <Item key={3} as="div">
          <Card theme={theme}>
            <Content>
              <link rel="stylesheet" href="./css/crud.css"></link>
              <div id="container"></div>
              <Helmet>
                <script src={withPrefix('./js/crud.js')}></script>
              </Helmet>
            </Content>
          </Card>
        </Item>
      ))}
      </Grid2>
      </Wrapper>
    </>
  );
};