import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 2rem 0 0; 
  }
`;
export const WorkSamples = styled.div`
  #workSampleSubheading {
    margin-bottom: 1rem;
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};
  
    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  
    @media (max-width: 680px) {
      font-size: 28pt;
    }
  }
  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};
  
    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

// ** Flexbox section ** //
.flexbox-container {
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
}
.flexbox-item {
  width: 280px;
  height: 160px;
  background-size: contain;
  margin: 10px;
  border: 3px solid #333;
  background-color: #dfdfdf;
  border-radius: 15px;
  border: 2px solid #6c63ff;
  font-weight: bold;
  text-align: center;
   display: flex;
   align-items: center;
}
.flexbox-item a {
  margin: 0 auto;
 }
.flexbox-item:hover {
  background: none !important;
 	border-color: #e6e6e6;
}
.flexbox-item h2 {
  color: transparent;
  font-weight: 600;
  font-size: 1.7em;
  margin: auto;
}
.flexbox-item:hover h2 {
  color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};
}
`;
export const Details = styled.div`
flex: 1;
padding-left: 2rem;
@media (max-width: 960px) {
    padding-left: unset;
   }
#moreAboutMeBtn {
  @media (max-width: 600px) {
    display: none;
  }
}

h1 {
  margin-bottom: 2rem;
  font-size: 26pt;
  color: ${({ theme }) => (theme === 'dark' ? '#e6e6e6' : '#707070')};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }
}

h2 {
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }

  @media (max-width: 680px) {
    font-size: 28pt;
  }
}

h4 {
  margin-bottom: 2.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};
  @media (max-width: 960px) {
    color: #707070;
    margin-bottom: 1rem;
  }

  @media (max-width: 680px) {
    font-size: 26pt;
  }
}

p {
  margin-bottom: 2.5rem;
  font-size: 20pt;
  font-weight: normal;
  line-height: 1.3;
  color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }
}

#more {
    display: none;
}

#moreAboutMe {
    margin-bottom: 1.6rem;
}

#myBtn {
    margin-right: .5rem;
    color: #e6e6e6;
    background: #0074d9;
    font-weight: 600;
    border-radius: 7px;
    border: none;
    padding: 0.2rem 0.5rem;
    font-size: 1.5rem;
    display: inline-block;
}

#myBtn:hover {
    color: #0074d9;
    background: #e6e6e6;
    // border: 2px solid #6c63ff;
}
`;

export const Thumbnail = styled.div`
  flex: 1;
  width: 50%;
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;

    @media (max-width: 960px) {
      width: 60%;
      margin-left: 15%;
    }
    @media (max-width: 680px) {
      width: 70%;
    }
  }
`;