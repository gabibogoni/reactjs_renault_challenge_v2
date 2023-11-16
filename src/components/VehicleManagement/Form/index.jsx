import { useState } from 'react';
import './styles.css';
import P from 'prop-types';

export const Form = ({ setCarData }) => {
  const [model, setModel] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [color, setColor] = useState('');
  const [image, setImage] = useState('');
  const [imageBase64, setImageBase64] = useState('');

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setCarData({ model: model, carPrice: carPrice, color: color, image: imageBase64 });
    clearForm();
  };

  const clearForm = () => {
    setModel('');
    setCarPrice('');
    setColor('');
    setImage('');
  };

  const onChangeInput = (e) => {
    console.log(e);
    setModel(e.target.value);
  };

  const handleChangeImage = (e) => {
    const data = new FileReader();
    data.addEventListener('load', () => {
      setImageBase64(data?.result);
    });
    data.readAsDataURL(e.target.files[0]);
    setImage(e.target.value);
  };

  return (
    <>
      <div className="container-form">
        <div className="form">
          <form>
            <div className="form-header">
              <div className="title">
                <h1>Cadastro de veículos</h1>
              </div>
            </div>

            <div className="input-group">
              <div className="input-box">
                <label htmlFor="carmodel">Modelo</label>
                <input
                  id="carmodel"
                  name="carmodel"
                  type="text"
                  value={model}
                  onChange={(event) => {
                    onChangeInput(event);
                  }}
                  placeholder="Digite o modelo do carro"
                  required
                />
              </div>

              <div className="input-box">
                <label htmlFor="carvalue">Valor</label>
                <input
                  value={carPrice}
                  onChange={(event) => setCarPrice(event.target.value)}
                  id="carvalue"
                  type="text"
                  name="carvalue"
                  placeholder="Digite o valor do carro"
                  required
                />
              </div>

              <div className="input-box">
                <label htmlFor="carcolor">Cor</label>
                <input
                  value={color}
                  onChange={(event) => setColor(event.target.value)}
                  id="carcolor"
                  type="text"
                  name="carcolor"
                  placeholder="Digite a cor do carro"
                  required
                />
              </div>

              <div className="input-box">
                <label htmlFor="carimage">Imagem</label>
                <input
                  value={image}
                  onChange={(event) => {
                    handleChangeImage(event);
                  }}
                  id="carimage"
                  type="file"
                  name="carimage"
                  placeholder="Digite o modelo do carro"
                  required
                />
              </div>
            </div>

            <div className="register-button">
              <button onClick={handleSubmitForm}>Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

Form.propTypes = {
  setCarData: P.func,
};
