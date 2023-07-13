import LogoImage from "./../images/Logo.png";
import AccountMenu from "./MenuUser.jsx";
import "../css/style.css";

const HeaderUser = (props) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light backgroundConteiner">
        <div class="container-fluid row backgroundMenu">
          <div className="col-2 ">
            <img src={LogoImage} alt="Logo" className="img-fluid " />
          </div>
          <div className="col-3 align-self-center">
            <h3>USER MENU</h3>
          </div>
          <button
            class="navbar-toggler col-2 align-self-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <AccountMenu />
        </div>
      </nav>
    </>
  );
};
export default HeaderUser;
