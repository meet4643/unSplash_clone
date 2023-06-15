import styled from "@emotion/styled";

export const Ul = styled.ul`
  display: flex;
  overflow-x: auto;
  list-style: none;

  @media screen and (max-width: 500px) {
display: block;
  }
`;
export const Li = styled.li`
  text-decoration: none;
  color: #b61c1c;
  padding: 5px 2rem;
  white-space: nowrap;
`;
export const Box = styled.div`
  display: flex;
  text-decoration: none;
  color: #b61c1c;

  @media screen and (max-width: 500px) {
    float: none;
    display: block;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: gray;
  box-shadow: 5px 5px 10px gray;
  // position: fixed;
  width: 100%;
  z-index: 1;
  background-color: white;
  margin: 0;
`;
export const P = styled.p`
  background-color: #eeeeee;
  padding: 7px;
  border-radius: 5px;
`;
export const Buttons = styled.button`
  background-color: #f5f5f5;
  border: 0;
  cursor: pointer;
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f5f5f5;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 5px;

  @media screen and (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

export const SearchIconWrapper = styled.div`
  margin: 0 10px;
`;

export const InputBase = styled.input`
  border: none;
  outline: none;
  width: 200px;
  font-size: 14px;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const Link = styled.p`
  margin: 0 10px;
  color: ${(props) => (props.active ? "brown" : "inherit")};

  @media screen and (max-width: 500px) {
    margin: 5px 0;
  }
`;
