const NavbarBrand = () => {
  return (
    <header>
      <div id="fix-bar" className="navbar navbar-white bg-white">
        <div className="container">
          <div className="navbar-brand d-flex align-items-center">
            <strong>HeyHolder</strong>
          </div>
          <button
            type="button"
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#associateModal"
          >
            제휴 문의
          </button>
        </div>
      </div>
    </header>
  );
};
export default NavbarBrand;
