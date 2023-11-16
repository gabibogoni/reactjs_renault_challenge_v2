import styled from 'styled-components';

export const MainContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  //max-width: 1333px;
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 5%;
`;

export const TableDescription = styled.div`
  display: flex;
  width: 95%;
  justify-content: flex-start;
  margin-left: 50px;
  padding: 1em 3em 1em 3em;
  background: #fff;

  border-radius: 5px;

  h1::after {
    content: '';
    display: block;
    width: 5rem;
    height: 0.3rem;
    background-color: #fccc34;
    margin: 0 auto;
    position: absolute;
    border-radius: 10px;
  }
`;
