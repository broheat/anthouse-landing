import { Image } from "react-bootstrap";
import "./App.css";

import NavbarBrand from "./NavbarBrand";

function App() {
  return (
    <div>
      <NavbarBrand />
      <section id="section-top">
        <div id="main-top">
          <div className="top-desc">
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
          <div className="img-box"></div>
        </div>
      </section>

      <footer class="text-muted py-5">
        <div class="container">
          <p class="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p class="mb-1">
            Album example is &copy; Bootstrap, but please download and customize
            it for yourself!
          </p>
          <p class="mb-0">
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
