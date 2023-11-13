import * as S from './styles';
//import './styles.css';

export const Table = () => {
  return (
    // <div className="container">
    //   <table className="table">
    <S.MainContainer>
      <S.Table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Marks%</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="S.No">1</td>
            <td data-label="Name">Dinesh</td>
            <td data-label="Age">34</td>
            <td data-label="Marks%">50%</td>
            <td data-label="Staus">Passed</td>
          </tr>

          <tr>
            <td data-label="S.No">2</td>
            <td data-label="Name">Kamal</td>
            <td data-label="Age">23</td>
            <td data-label="Marks%">70%</td>
            <td data-label="Staus">Passed</td>
          </tr>

          <tr>
            <td data-label="S.No">3</td>
            <td data-label="Name">Neha</td>
            <td data-label="Age">20</td>
            <td data-label="Marks%">90%</td>
            <td data-label="Staus">Passed</td>
          </tr>

          <tr>
            <td data-label="S.No">4</td>
            <td data-label="Name">Priya</td>
            <td data-label="Age">30</td>
            <td data-label="Marks%">30%</td>
            <td data-label="Staus">Failed</td>
          </tr>
        </tbody>
      </S.Table>
    </S.MainContainer>
  );
};
