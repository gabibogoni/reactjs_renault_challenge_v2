// import './styles.css';

export const Form = () => {
  return (
    <>
      <div className="container-body">
        <div className="container">
          <div className="form-image">
            <img src="https://1.bp.blogspot.com/-Mopbrxubk2c/XlnBpnsb6YI/AAAAAAAAbWs/XkyFd-J0VHs4eaeVnodRyE_ZqOITfnmjACLcBGAsYHQ/s1600/Novo-Renault-Duster-2021%2B%25288%2529.jpg"></img>
          </div>

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
                  <input id="carmodel" type="text" name="carmodel" placeholder="Digite o modelo do carro" required />
                </div>

                <div className="input-box">
                  <label htmlFor="carvalue">Valor</label>
                  <input id="carvalue" type="text" name="carvalue" placeholder="Digite o valor do carro" required />
                </div>

                <div className="input-box">
                  <label htmlFor="carcolor">Cor</label>
                  <input id="carcolor" type="text" name="carcolor" placeholder="Digite a cor do carro" required />
                </div>

                <div className="input-box">
                  <label htmlFor="carimage">Imagem</label>
                  <input id="carimage" type="file" name="carimage" placeholder="Digite o modelo do carro" required />
                </div>
              </div>

              <div className="register-button">
                <button>
                  <a href="#">Cadastrar</a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
