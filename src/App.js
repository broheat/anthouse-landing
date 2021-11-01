import NavbarBrand from "./NavbarBrand";
import app01 from "./imges/app01.png";
import app02 from "./imges/app02.png";
import company from "./imges/company.png";

function App() {
  return (
    <div>
      <NavbarBrand />
      <div className="container-fluid main">
        <div className="row">
          <div className="d-flex col-lg-6 content">
            <div className="d-flex flex-column left">
              <h1 className="title">
                회사의 주인은
                <br />
                당신
              </h1>
              <p>
                회사 경영에 대한 당신의 생각을 제안 해보세요.
                <br />
                다른 주주의 좋은 생각에 의결권을 위임 해보세요.
              </p>
            </div>
          </div>
          <div className="d-flex col-lg-6 content">
            <div className="right">
              <img src={app01} alt="주주제안" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid second">
        <div className="row">
          <div className="d-flex col-lg-6 content">
            <div className="left-img">
              <img src={app02} alt="주주게시판" />
            </div>
          </div>
          <div className="d-flex col-lg-6 content">
            <div className="d-flex flex-column">
              <h1 className="title">
                주주들끼리만의
                <br /> 소통 공간
              </h1>
              <p>
                주주가 아닌 자는 접근이 불가합니다.
                <br />
                광고와 허위 정보를 피하고 진짜 정보를 공유 해보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid third">
        <div className="row">
          <div className="d-flex content justify-content-center">
            <div className="d-flex flex-column">
              <h1 className="title text-m">
                HeyHolder를
                <br /> 가장 빠르게 만나보세요.
              </h1>
              <p>
                주주 활동의 시작,
                <br /> HeyHolder 출시되면 첫 번째로 알려드릴께요!
              </p>

              <form action="https://formspree.io/f/mdoyraya" method="POST">
                <div className="d-flex">
                  <div className="col-5">
                    <input
                      type="email"
                      className="form-control"
                      name="_replyto"
                      placeholder="이메일로 신청하기"
                    />
                  </div>
                  <div className="col-auto ms-2">
                    <button type="submit" className="btn btn-primary">
                      신청하기
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid forth">
        <div className="row">
          <div className="d-flex justify-content-center company">
            <img className="w-50" src={company} alt="협력업체" />
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="associateModal"
        tabindex="-1"
        aria-labelledby="modal-title"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-title">
                제휴 문의
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="https://formspree.io/f/mdoyraya" method="POST">
                <div className="d-flex">
                  <div className="col-5">
                    <input
                      type="email"
                      className="form-control"
                      name="_replyto"
                      placeholder="이메일로 신청하기"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default App;
