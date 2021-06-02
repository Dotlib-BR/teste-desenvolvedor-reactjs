import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  box-shadow: 0px 3px 15px -2px rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
`;
export const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    max-width: 700px;

    li {
      padding: 20px 15px;

      a {
        color: #616361;
        text-decoration: none;
        padding: 5px 10px;
        display: block;
        border-radius: 8px;
        transition: 0.3s ease;

        &:hover {
          background: rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
`;
export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;

  div {
    width: 40px;
    height: 30px;
    background-color: #6fbf42;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.3s;

    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      color: #fff;
    }
  }

  input {
    outline: 0;
    height: 30px;
    width: 100%;
    border: 1px solid #c1c1c1;
    padding-left: 10px;
  }
`;
