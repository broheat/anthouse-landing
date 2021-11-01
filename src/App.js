import NavbarBrand from "./NavbarBrand";
import app01 from "./imges/app01.png";
import app02 from "./imges/app02.png";

function App() {
  return (
    <div>
      <NavbarBrand />
      <div className="container-fluid main">
        <div className="row">
          <div className="d-flex col-md-6 content">
            <div className="d-flex flex-column left">
              <h1 className="title">
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
          <div className="d-flex col-md-6 content">
            <div className="right">
              <img src={app01} alt="주주제안" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid second">
        <div className="row">
          <div className="d-flex col-md-6 content">
            <div className="left-img">
              <img src={app02} alt="주주게시판" />
            </div>
          </div>
          <div className="d-flex col-md-6 content">
            <div>
              <h1 className="title">
                주주들끼리만의
                <br /> 소통 공간
              </h1>
              <p className="text-m">
                주주가 아닌 자는 접근이 불가합니다.
                <br />
                각종 광고와 허위 정보를 피하고 진짜 정보를 공유 해보세요.
              </p>
            </div>
          </div>
        </div>
      </div>

      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default App;
