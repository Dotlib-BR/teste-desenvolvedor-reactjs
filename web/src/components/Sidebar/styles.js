import styled from "styled-components";

export const Container = styled.aside`
  grid-area: sidebar;
  margin-top: 0.5rem;

  h1 {
    color: #616361;
    font-weight: 500;
  }
`;

export const CheckBoxContainer = styled.div`
  padding-left: 0.8rem;
  margin-bottom: 0.5rem;

  input[type="checkbox"]::before {
    content: " ";
    width: inherit;
    height: inherit;
    position: absolute;
    background-color: #c1c1c1;
    border: 2px solid #c1c1c1;
    border-radius: 2px;
    margin-left: -1px;
  }

  input[type="checkbox"]:checked::after {
    content: " ";
    width: 0.2rem;
    height: 0.5rem;
    margin-left: 0.3rem;
    border-color: #fff;
    border-style: solid;
    border-width: 0 3px 3px 0;
    position: absolute;
    transform: rotate(45deg);
  }

  input {
    margin-right: 0.5rem;
  }

  label {
    color: #616361;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
`;
