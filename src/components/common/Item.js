import styled from "styled-components";

const Item = styled.button`
  color: black;
  background: "#b5b4b3";
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 1.5rem;
  border: none;
  margin: 10px auto;
  width: 30%;

  &:disabled {
    background: #85888c;
    cursor: default;
  }
`;

export { Item };
