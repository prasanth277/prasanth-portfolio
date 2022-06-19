import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: white;
  padding: 40px;
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes fadeInAnimation {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
`;

export const LeftContainer = styled.div`
  padding: 36px;
  display: flex;
  flex-direction: column;
`;
export const RightContainer = styled.div`
  /* padding: 36px; */
  /* border:1px solid white; */
  /* display: flex;
    justify-content: center;
    align-items: center; */
`;

export const Title = styled.span`
  color: ${props => props.theme.fontColor};
  font-size: 34px;
  font-weight: 600;
  margin: 12px 0;
`;

export const SubTitle = styled.span`
  color: ${props => props.theme.fontColor};
  font-size: 28px;
  font-weight: 600;
  margin: 12px 0;
`;

export const Content = styled.p`
  color: ${props => props.theme.subText};
  font-size: 20px;
  margin: 12px 0;
  line-height: 1.8;
`;
