import NavbarBrand from "./NavbarBrand";
import app01 from "./imges/app01.png";

function App() {
  return (
    <div>
      <NavbarBrand />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="d-flex col-md-3 content justify-content-center align-items-center mx-auto">
              <div>
                <h1 className="top-title">
                  회사의 주인은
                  <br />
                  당신
                </h1>
                <p className="text-m">
                  회사 경영에 대한 당신의 생각을 제안 해보세요.
                  <br />
                  다른 주주의 좋은 생각에 의결권을 위임 해보세요.
                </p>
              </div>
            </div>
            <div className="d-flex col-md-3 content justify-content-center align-items-center mx-auto">
              <div>
                <img src={app01} className="col-md-2 h-50" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default App;
