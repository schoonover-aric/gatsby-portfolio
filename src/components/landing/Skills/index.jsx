import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import foto from 'assets/site-images/foto.png';
import allen from 'assets/site-images/allen.png';
import bushwick from 'assets/site-images/bushwick.png';
import leadership from 'assets/site-images/leadership.png';
import { Wrapper, SkillsWrapper, WorkSamples, Details, Thumbnail } from './styles';

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Even More About Me"; 
    moreText.style.display = "none";
    } else {
    dots.style.display = "none";
    btnText.innerHTML = "Less About Me"; 
    moreText.style.display = "inline";
    }
}


export const Skills = () => {
  const { theme } = useContext(ThemeContext);


  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <div id="workSamples">
          <WorkSamples theme={theme}>
            <div id="siteList">
              <h2>Previous Work Samples</h2>
            </div>
            <div className="flexbox-container">
              <a href="https://fotoinc.com/" target="_blank" rel="noreferrer">
                <div style={{ backgroundImage: `url(${foto})` }} className="flexbox-item flexbox-item-1">
                  <h2>FOTO, Inc.</h2>
                </div>
              </a>
              <a href="https://theallencpafirm.com/" target="_blank" rel="noreferrer">
                <div style={{ backgroundImage: `url(${allen})` }} className="flexbox-item flexbox-item-2">
                  <h2>The Allen CPA Firm</h2>
                </div>
              </a>
            </div>
            <div className="flexbox-container">
              <a href="https://www.bushwickfilmfestival.com/" target="_blank" rel="noreferrer">
                <div style={{ backgroundImage: `url(${bushwick})` }} className="flexbox-item flexbox-item-3">
                  <h2>Bushwick Film Festival</h2>
                </div>
              </a>
            </div>
          </WorkSamples>
          </div>
        </Thumbnail>
        {/* <Helmet>
            <link rel="stylesheet" href={withPrefix('css/readmore.css')}></link>
        </Helmet> */}
        <Details theme={theme}>
          <div>
            <h2 id="moreAboutMe">More About Me</h2>
          </div>
          <p>
          I've been an Engineer for more than two decades and have been working independently as a software and website developer for the past 10 years. The first half of my career was spent in Electronics, Hardware, Equipment and Research & Development Engineering.<br /><br />

          I really enjoy working with the Full-stack of web technologies, but...<span id="dots"></span> <Button as={AnchorLink} href="#moreAboutMe" id="myBtn" onClick={myFunction}>Even More About Me</Button><span id="more">am most passionate about Back-end development. I am constantly fascinated by what can be built and accomplished with software!<br /><br />
          
          I'm very excited to be joining a dedicated team of professionals again!<br /><br />
          
          Open to working remotely or coming into the office - or a combination of both (willing to relocate).</span>
          </p>
          
          <Button as={AnchorLink} href="#contact" id="moreAboutMeBtn">
            Contact Me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
