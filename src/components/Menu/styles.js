import styled from 'styled-components';

export const HeaderMenu = styled.header`
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: self-end;
  justify-content: left;
  width: 92%;
  margin: 0 4%;
`;

export const Anchor = styled.a`
  display: flex;
  justify-content: flex-start;
  align-self: center;

  @media (max-width: 48em) {
    display: none;
  }
`;

export const MobileMenu = styled.input`
  &:checked ~ .nav {
    max-height: 240px;
  }

  &:checked ~ .mobile-icon .hamburguer {
    background: transparent;
  }
  &:checked ~ .mobile-icon .hamburguer:before {
    transform: rotate(-45deg);
  }
  &:checked ~ .mobile-icon .hamburguer:after {
    transform: rotate(45deg);
  }
  &:checked ~ .mobile-icon:not(.steps) .hamburguer:before,
  &:checked ~ .mobile-icon:not(.steps) .hamburguer:after {
    top: 0;
  }

  @media (min-width: 48em) {
    display: none;
  }
`;

export const MobileIcon = styled.label`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  padding: 28px 20px;
  position: relative;
  -webkit-user-select: none;
  user-select: none;

  span {
    background: #333;
    display: flex;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  @media (min-width: 48em) {
    display: none;
  }
`;

export const Nav = styled.ul`
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;

  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;

  a {
    display: block;
    padding: 0.7em 0.5em;
    text-decoration: none;
    transition: 0.3s;
    border-bottom: 1px #f7f7f7 solid;
    color: #242424;

    &:hover {
      opacity: 0.86;
      color: rgba(0, 0, 0, 0.8);
    }
  }

  @media (min-width: 48em) {
    clear: none;
    display: flex;
    justify-content: flex-end;
    max-height: none;

    li {
      display: flex;
      justify-content: flex-start;
    }

    a {
      transition: 0.3s;
      border-bottom: 0;
      padding: 15px 30px;
      margin-top: 10px;
      border-radius: 6px;
    }
  }
`;
