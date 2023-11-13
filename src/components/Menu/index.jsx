import './styles.css';
import Logo from '../../assets/images/logo2.png';

export const Menu = () => {
  return (
    <header className="header">
      <div className="content">
        <a href="#" className="logo">
          <img src={Logo} title="Loop Nerd" width="55px" height="45px" />
        </a>

        <input className="mobile-btn" type="checkbox" id="mobile-btn" />
        <label className="mobile-icon" htmlFor="mobile-btn">
          <span className="hamburguer"></span>
        </label>

        <ul className="nav">
          <li>
            <a href="#" title="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#" title="Sobre">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" title="Artigos">
              Artigos
            </a>
          </li>
          <li>
            <a href="#" title="Contato">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
