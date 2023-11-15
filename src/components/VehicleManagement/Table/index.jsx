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
            <th>#</th>
            <th>Carro</th>
            <th>Cor</th>
            <th>Valor</th>
            <th>Imagem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="#">1</td>
            <td data-label="Car">Megane</td>
            <td data-label="Color">Cinza</td>
            <td data-label="Price">279.000,00</td>
            <td data-label="Image">image.png</td>
          </tr>

          <tr>
            <td data-label="#">2</td>
            <td data-label="Car">Kwid</td>
            <td data-label="Color">Branco</td>
            <td data-label="Price">69.000,00</td>
            <td data-label="Image">imge.png</td>
          </tr>

          <tr>
            <td data-label="#">3</td>
            <td data-label="Car">Kardian</td>
            <td data-label="Color">Preto</td>
            <td data-label="Price">129.000,00</td>
            <td data-label="Image">imge.png</td>
          </tr>

          <tr>
            <td data-label="#">4</td>
            <td data-label="Car">Captur</td>
            <td data-label="Color">Vermelho</td>
            <td data-label="Price">119.000,00</td>
            <td data-label="Image">imge.png</td>
          </tr>
        </tbody>
      </S.Table>
    </S.MainContainer>
  );
};
