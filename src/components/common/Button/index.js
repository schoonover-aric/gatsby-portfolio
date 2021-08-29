import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2rem;
  margin-right: 2rem;
  border: 2px solid #fff;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #e6e6e6;
  background: #0074d9;
  font-weight: 600;
  &:hover {
    color: #0074d9;
    background: #e6e6e6;
    border: 2px solid #6c63ff;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    background: gray;
  }
  ${({ secondary }) =>
    secondary &&
    `
		background: #0074d9;
	`}
`;
