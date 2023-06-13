import { useState, useCallback } from "react";
import React from "react";
import Modal from "./Modal";

function BlogPosted({
  submitForm,
  setSubmitForm,
  reference,
  onEdit,
  setIsTrue,
  active,
  filterDate,
  setFilterDate,
  filtered,
  SetFiltered,
  filteredCount,
}) {
  const Edit = () => {
    setIsTrue(true);
    onEdit(
      submitForm.title,
      submitForm.author,
      submitForm.date,
      submitForm.content,
      submitForm.id
    );
  };
  const onDelete = useCallback(() => {
    setSubmitForm((current) =>
      current.filter((Form) => Form.id !== submitForm.id)
    );
  }, [submitForm]);

  // const onDelete = () => {
  //   setSubmitForm((current) =>
  //     current.filter((Form) => Form.id !== submitForm.id)
  //   );
  // };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const currentDate = new Date(submitForm.date);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[currentDate.getMonth()];
  const datePosted = `${month} ${currentDate.getDate()},${currentDate.getFullYear()} `;

  if (modalIsOpen) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  return (
    <>
      <div className="postedBlog-Container" ref={reference}>
        <div onClick={() => setModalIsOpen(true)} className="modal-click">
          <div className="postedBlog-Container-2">
            <h2 className="title"> {submitForm.title}</h2>
            <div className="title-2">
              <h3 className="title-2 h3">
                By {submitForm.author} on {datePosted}
              </h3>
            </div>
          </div>

          <br />

          <div className="content">{submitForm.content}</div>
        </div>

        <br />
        <div className="btn">
          <div className="btn-container">
            <div>
              <button className="button-3" onClick={Edit}>
                Edit
              </button>
            </div>
            <div>
              <button className="button-1" onClick={onDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        setModalIsOpen={setModalIsOpen}
        modalIsOpen={modalIsOpen}
        submitForm={submitForm}
        datePosted={datePosted}
      />
    </>
  );
}

export default BlogPosted;
