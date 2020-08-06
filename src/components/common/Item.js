import styled from "styled-components";

const Item = styled.button`
  color: black;
  background: linear-gradient(90deg, #ffffff, #f5f5f5);
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 1.5rem;
  border: 1px solid #eeeeee;
  margin: 10px auto;
  width: 30%;

  &:disabled {
    background: linear-gradient(90deg, #f5f5f5, #ffffff);
    cursor: default;
  }
`;

export { Item };
