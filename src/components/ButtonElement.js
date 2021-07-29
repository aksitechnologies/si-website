import styled from "styled-components"

export const Button = styled.a`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#90d46c" : "#8cbd71")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  
  &:hover {
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
