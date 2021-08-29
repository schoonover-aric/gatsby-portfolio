import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  background: ${({ theme }) => (theme === 'light' ? '#fdfdfd' : '#181717')};
  height: 100%;
  iframe {
    background: ${({ theme }) => (theme === 'light' ? '#efeeff' : '#efeeff')};
    margin-bottom: 0;
  }
  .pane.top-pane {
    border-bottom: 1rem solid ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  }
  #booksTable {
    background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};
  }
  #booksTable input,
  #booksTable option,
  #booksTable select {
    background: ${({ theme }) => (theme === 'light' ? '#efeeff' : '#efeeff')};
  }
  #booksTable th, #booksTable td, #booksTable tr {
    border: 1px solid ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
