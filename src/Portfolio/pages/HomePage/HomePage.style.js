import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
`;

export const RightContainer = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
  background: ${(props) => props.theme.rightContainerBg};
  width: 80%;
  height: 100vh;
  transition: background 1s;
`;

export const ThemeIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.isDarkTheme ? "white" : "black")};
  font-size: 42px;
  cursor: pointer;
  transition: color 1s;
  position: absolute;
  top: 35px;
  right: 35px;
`;
