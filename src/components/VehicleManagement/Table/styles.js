import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 0;
  padding: 40px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 5px 5px 5px 5px;
  overflow: hidden;

  td {
    padding: 12px 15px;
    text-align: center;
    font-size: 15px;
  }

  th {
    padding: 12px 15px;
    text-align: center;
    font-size: 15px;
    background-color: black;
    color: #fff;
    opacity: 0.86;
  }

  tbody {
    tr {
      font-size: 15px;
      color: gray;
      line-height: 1.2;
      font-weight: unset;
    }

    tr:nth-child(even) {
      background-color: #f5f5f5;
    }
  }

  @media (max-width: 500px) {
    thead {
      display: none;
    }

    tbody,
    tr,
    td {
      display: block;
      width: 100%;
    }
    tr {
      margin-bottom: 15px;
    }
    td {
      text-align: right;
      padding-left: 50%;
      text-align: right;
      position: relative;
    }
    td::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 15px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
    }
  }
`;
