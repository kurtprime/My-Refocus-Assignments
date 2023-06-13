import React from "react";

function Modal({ setModalIsOpen, modalIsOpen, submitForm, datePosted }) {
  if (!modalIsOpen) return null;
  return (
    <>
      <div className="Modal">
        <div className="modal-container">
          <div className="modal-container-2">
            <div className="btn-x">
              <button
                className=" button-24"
                onClick={() => setModalIsOpen(false)}
              >
                X
              </button>
            </div>

            <div className="postedBlog-Container-2">
              <h1 className="title"> {submitForm.title}</h1>
              <div className="title-2">
                <h2 className="title-2 h3">
                  By {submitForm.author} on {datePosted}
                </h2>
              </div>
            </div>
            <br />
            <p className="content">{submitForm.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
