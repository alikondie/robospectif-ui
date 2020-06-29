import styled, { css } from 'styled-components';

const Button = styled.button`
  color: white;
  background: ${(p) => (p.secondary ? 'black' : '#141e30')};
  font-weight: bold;
  ${(p) =>
    p.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5rem;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1rem;
        `}
  padding: 8px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 1rem;
  border: none;
  margin: auto;
  width: 20%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };
