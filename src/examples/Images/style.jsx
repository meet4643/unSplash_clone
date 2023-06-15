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
