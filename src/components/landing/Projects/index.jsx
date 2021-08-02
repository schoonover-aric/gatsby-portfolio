import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
//import Star from 'components/common/Icons/Star';
//import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content } from './styles';
//import { Helmet } from 'react-helmet';
//import { FormikProvider } from 'formik';
//import { withPrefix } from 'gatsby';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import { CodeEditor, CodeOutput } from './styles';

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
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={1} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h1>Hello!</h1>
                <div id="javascriptExample"></div>
                <script type="text/javascript" src="./dist/runtime-main.e2d9c359.js"></script>
                <script type="text/javascript" src="/src/components/landing/dist/2.eccb9c9c.chunk.js"></script>
                <script type="text/javascript" src="../dist/main.64e80544.chunk.js"></script>
                <h3>Hello!!!</h3>
              </Content>
            </Card>
          </Item>
        ))}
        {edges.map(({ node }) => (
          <Item key={2} as="div">
            <Card theme={theme}>
              <Content>
                <div id="like_button_container"></div>
                <Helmet>
                <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
                <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
                <script src="like_button.js" type="text/javascript"></script>
                </Helmet>
              </Content>
            </Card>
          </Item>
        ))}
        {edges.map(({ node }) => (
          <Item key={3} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>Code Editor</h4>
                <LiveProvider code="<strong>Hello World!</strong>">
                  <CodeEditor><LiveEditor className="CodeEditor" /></CodeEditor>
                  <LiveError />
                  <CodeOutput><LivePreview className="CodeOutput" /></CodeOutput>
                </LiveProvider>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
