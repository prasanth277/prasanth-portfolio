import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SideBarContainer = styled.div`
  width: 20%;
  background: ${(props) => props.theme.sideBarBg};
  height: 100vh;
  border-right: 1px solid;
  border-right-color: ${(props) => props.theme.sideBarBorder};
  transition: background 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TabContainer = styled.div`
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 18px 0px;
  border-bottom: 1px solid #30363d;
  padding: 0 40px 12px 40px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? props.theme.themeColor : props.theme.fontColor)};
  transition: color 1s;
`;

export const TabText = styled.span`
  margin-left: 14px;
  font-size: 24px;
  font-weight: 600;
`;

export const TabIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
