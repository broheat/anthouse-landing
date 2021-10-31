import NavbarBrand from "./NavbarBrand";
import app01 from "./imges/app01.png";

function App() {
  return (
    <div>
      <NavbarBrand />
      <div className="container-fluid">
        <div className="row section justify-content-center align-items-center flex-wrap">
          <div className="col-md-3">
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
          <img src={app01} className="col-md-2 h-50" alt="..." />
        </div>
      </div>

      <footer className="text-muted py-5">
        <div className="container">
          <p className="float-end mb-1">Back to top</p>
          <p className="mb-1">
            Album example is &copy; Bootstrap, but please download and customize
            it for yourself!
          </p>
          <p className="mb-0">
            New to Bootstrap? <a href="/">Visit the homepage</a> or read our{" "}
            <a href="../getting-started/introduction/">getting started guide</a>
            .
          </p>
        </div>
      </footer>

      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default App;
