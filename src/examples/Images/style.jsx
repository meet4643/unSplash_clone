import styled from "@emotion/styled";

export const Box = styled.div`
  width: auto ;
  height: 100%;

  display: flex;
  justify-content: ;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 2rem;

  @media screen and (max-width: 780px) {
    background-size: contain
    width:  auto !important;
  }
`;

export const Img = styled.img`
  border-bottom-leftradius: 10;
  border-bottom-rightradius: 10;
  width: 100%;
  box-shadow: 4px 4px 5px gray;
`;
export const Span = styled.span`

display: flex,
justify-content: end,
align-items: end,
height: 100%;`;
export const Likes = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
  // left: 3%;
  margin-left: 1rem;
  color: white;
  // border: 2px solid red;
  display: flex;
  align-items: end;
  // align-items: center;
  justify-content: start;
`;

export const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 90%;


`

