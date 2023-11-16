import { useCallback, useEffect } from 'react';
import * as S from './styles';
import P from 'prop-types';
//import './styles.css';

export const Table = ({ setHasChanges, hasChanges }) => {
  const getDataFromLocalStorage = () => {
    const objCarros = { ...localStorage };

    const array = Object.keys(objCarros).filter((key) => {
      return key != 'id';
    });

    return array;
  };

  console.log(getDataFromLocalStorage());

  const noResultsMessage = () => {
    if (getDataFromLocalStorage()?.length > 0) return;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        Não existem resultados para sua busca{' '}
      </div>
    );
  };

  useEffect(() => {
    if (hasChanges) {
      getDataFromLocalStorage();
      setHasChanges(false);
    }
  }, [hasChanges, setHasChanges]);

  return (
    // <div className="container">
    //   <table className="table">
    <S.MainContainer>
      <S.Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Carro</th>
            <th>Valor</th>
            <th>Cor</th>
            <th>Imagem</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {getDataFromLocalStorage()?.length > 0
            ? getDataFromLocalStorage().map((itemLS) => {
                return (
                  <tr key={itemLS}>
                    <td data-label="#">{itemLS}</td>
                    <td data-label="Car">{JSON.parse(localStorage.getItem(itemLS)).model}</td>
                    <td data-label="Value">{JSON.parse(localStorage.getItem(itemLS)).carPrice}</td>
                    <td data-label="Color">{JSON.parse(localStorage.getItem(itemLS)).color}</td>
                    <td data-label="Image">
                      {<img src={JSON.parse(localStorage.getItem(itemLS)).image} width="50px" height="35px" />}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          localStorage.removeItem(itemLS);
                          setHasChanges(true);
                        }}
                      >
                        remover
                      </button>
                    </td>
                  </tr>
                );
              })
            : ''}
        </tbody>
      </S.Table>
      {noResultsMessage()}
    </S.MainContainer>
  );
};

Table.propTypes = {
  hasChanges: P.bool,
  setHasChanges: P.func,
};
