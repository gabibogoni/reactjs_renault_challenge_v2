import { useCallback, useEffect, useState } from 'react';
import { Form } from './Form';
import { Table } from './Table';
import * as S from './styles';

export const VehicleManagement = () => {
  const [carData, setCarData] = useState({});
  const [hasChanges, setHasChanges] = useState(false);

  const armazenar = () => {
    if (!carData?.model || !carData?.carPrice || !carData?.color || !carData?.image) return;

    const lastIdLocalStorage = localStorage.getItem('id');

    if (!lastIdLocalStorage) {
      localStorage.setItem('id', 0);
    }

    const nextId = parseInt(localStorage.getItem('id')) + 1;

    localStorage.setItem('id', nextId);

    localStorage.setItem(
      nextId,
      JSON.stringify({
        ...carData,
      }),
    );
    setHasChanges(true);
  };

  useEffect(() => {
    armazenar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carData]);

  return (
    <S.MainContainer id="vehicle-management-container">
      <Form setCarData={setCarData} />

      <S.TableDescription>
        <h1>Lista de veículos</h1>
      </S.TableDescription>

      <Table setHasChanges={setHasChanges} hasChanges={hasChanges} />
    </S.MainContainer>
  );
};
