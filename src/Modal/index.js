const Modal = () => {
  return (
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
              <div className="mb-3">
                <label for="nameinput" className="form-label">
                  이름
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameinput"
                  placeholder="이름"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label for="emailinput" className="form-label">
                  이메일 주소
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailinput"
                  placeholder="이메일 주소를 입력 해주세요."
                  name="_replyto"
                />
              </div>
              <div className="mb-3">
                <label for="textarea" className="form-label">
                  내용
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="Textarea"
                  rows="10"
                  placeholder="내용을 입력 해주세요."
                ></textarea>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
