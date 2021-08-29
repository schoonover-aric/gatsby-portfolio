import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h2 {
    margin-bottom: 2rem;
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
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Grid2 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h2 {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};
  }

  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
  min-height: 160px;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};
    }

    span {
      color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};
      margin-left: 0.5rem;
    }
  }
`;

export const Languages = styled.div`
  opacity: 0.5;
  font-size: 14px;
`;

export const CodeEditor = styled.div`
  padding: 0 0 1rem;
  //min-height: 160px;
  border: 2px solid #6c63ff;
  margin-bottom: 1rem;
  border-radius: 7px;
`;

export const CodeOutput = styled.div`
  padding: 1rem 0;
  //min-height: 160px;
  border: 2px solid #cd6cd4;
  border-radius: 7px;
  padding: 1rem;
`;