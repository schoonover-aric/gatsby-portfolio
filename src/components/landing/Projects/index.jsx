// import React, { useContext } from 'react';
// import Helmet from 'react-helmet';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import { useStaticQuery, graphql, withPrefix } from 'gatsby';
// import { ThemeContext } from 'providers/ThemeProvider';
// import { Container, Button, Card } from 'components/common';
// import { Wrapper, SkillsWrapper, WorkSamples, Grid, Grid2, Item, Content, Details, Thumbnail } from './styles';

// export const Projects = () => {
//   const { theme } = useContext(ThemeContext);
//   const { allSite: { edges }, } = useStaticQuery(
//     graphql`
//     {
//       allSite {
//         edges {
//           node {
//             siteMetadata {
//               author
//               description
//               title
//             }
//           }
//         }
//       }
//     }
//     `
//   );
//   return (
//     <>
    {/* <Wrapper as={Container} id="projects">
        <Details theme={theme}>
            <h2>Sample Project</h2>
        </Details>
    </Wrapper>
    <Wrapper as={Container} id="projects2">
        <Details theme={theme}>
            <a href="#">
                <h4>Sample Laravel App - Built with: </h4>
                <h4>
                    <ul style={{marginLeft: "2rem"}}>
                        <li style={{marginLeft: "2rem"}}>Linux</li>
                        <li style={{marginLeft: "2rem"}}>Nginx</li>
                        <li style={{marginLeft: "2rem"}}>MySQL</li>
                        <li style={{marginLeft: "2rem"}}>PHP</li>
                    </ul>
                </h4>
            </a> 
            <h1 style={{color: "red", fontSize: "16px"}}>Hello World!</h1>
        </Details>
    </Wrapper> */}

    {/* <Wrapper as={Container} id="projects3">
      <SkillsWrapper>
        <Details theme={theme}>
          <h2>More about me</h2>
          <p>
          I've been an Engineer for more than two decades. I began my career in Electronics, Hardware and Equipment Engineering and currently specialize in Web & Software Development.
          </p>
        </Details>
      </SkillsWrapper>
    </Wrapper> */}

    {/* <Wrapper as={Container} id="projects">
      <Details theme={theme}>
        <h2>Projects</h2>
        <h4>Code Editor - built with React.js</h4>
      </Details>
      <Grid2>
        {edges.map(({ node }) => (
          <Item key={1} as="div">
            <Card theme={theme}>
              <Content>
                <div id="root"></div> 
                <Helmet>
                  <script src={withPrefix('js/runtime-main.bb22bbd3.js')} defer></script>
                  <script src={withPrefix('js/2.ce56e253.chunk.js')}></script>
                  <script src={withPrefix('js/main.8d2d2942.chunk.js')} defer></script>
                  <script src={withPrefix('js/devpen.js')} defer></script>
                </Helmet>
                <link rel="stylesheet" href="./css/devpen.css"></link>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid2>
    </Wrapper> */}
    {/* <Wrapper as={Container} id="projectsRow3">
      <Details theme={theme}>
        <h4>React.js - In Action</h4>
      </Details>
      <Grid>
      {edges.map(({ node }) => (
          <Item key={2} as="div">
            <Card theme={theme}>
              <Content>
              <h2 className="myHeading">React.js - API Integration</h2>
              <p className="myHeading">Texas Instruments, Inc. - Interactive 20yr. Stock Chart</p>
              <link rel="stylesheet" href="./css/stocks.css"></link>
              <div id="root-chart"></div>
              <Helmet>
                  <script src={withPrefix('js/runtime-main.b2d64f9a.js')} defer></script>
                  <script src={withPrefix('js/2.c2231a1a.chunk.js')} defer></script>
                  <script src={withPrefix('js/3.9d100d4a.chunk.js')} defer></script>
                  <script src={withPrefix('js/main.243e43bd.chunk.js')} defer></script>
                </Helmet>
              </Content>
            </Card>
          </Item>
        ))}
        {edges.map(({ node }) => (
          <Item key={3} as="div">
            <Card theme={theme}>
              <Content>
                <h2 className="myHeading">React.js - State Management w/ useState Hook</h2>
                <link rel="stylesheet" href="./css/state.css"></link>
                <div id="javascriptExample"></div>
                <Helmet>
                <script src={withPrefix('runtime-main.b3709e63.js')} defer></script>
                <script src={withPrefix('2.eccb9c9c.chunk.js')} defer></script>
                <script src={withPrefix('main.dd979fe8.chunk.js')} defer></script>
                <script src="https://unpkg.com/babel-standalone@6/babel.min.js" defer></script>
                </Helmet>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
      </Wrapper> */}
      {/* <Wrapper as={Container} id="projectsRow2">
      <Details theme={theme}><h4>CRUD App - Create, Read, Update, Delete</h4></Details>
      <Grid2>
      {edges.map(({ node }) => (
        <Item key={4} as="div"> 
          <Card theme={theme}>
            <Content>
              <link rel="stylesheet" href="./css/crud.css"></link>
              <div id="container"></div>
              <Helmet>
                <script src={withPrefix('./js/crud.js')} defer></script>
                <script src={withPrefix('./js/jsreload.js')} defer></script>
              </Helmet>
            </Content>
          </Card>
        </Item>
      ))}
      </Grid2>
      </Wrapper> */}
//     </>
//   );
// };