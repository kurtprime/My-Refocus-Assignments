import React, { useRef, useContext, useState } from "react";
import "./blogPost.css";
import BlogPosted from "./BlogPosted";
import { myContext } from "../App";
import { v4 as uuidv4 } from "uuid";
import FilterByDate from "./FilterByDate";
function BlogPost() {
  const { submitForm, setSubmitForm } = useContext(myContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [context, setContext] = useState("");
  const [ID, setID] = useState("third");
  const [isTrue, setIsTrue] = useState(false);
  const ref = useRef(null);
  const [filterDate, setFilterDate] = useState("");
  const [active, setActive] = useState(false);
  const [filtered, SetFiltered] = useState(submitForm);

  const onEdit = (onTitle, onAuthor, onDate, onContext, onID) => {
    setTitle(onTitle);
    setAuthor(onAuthor);
    setDate(onDate);
    setContext(onContext);
    setID(onID);
  };

  const submit = (e) => {
    setID(uuidv4());
    e.preventDefault();

    ref.current?.scrollIntoView({ behavior: "smooth" });

    if (isTrue) {
      setIsTrue(false);
      const newState = submitForm.map((object) => {
        if (object.id === ID) {
          return {
            ...object,
            id: ID,
            title: title,
            author: author,
            date: date,
            content: context,
          };
        }
        return object;
      });
      submitForm.forEach((e) => {
        if (e.id === ID) {
          return setSubmitForm(newState);
        }
      });
    } else {
      setSubmitForm((setForm) => [
        ...setForm,
        {
          id: ID,
          title: title,
          author: author,
          date: date,
          content: context,
        },
      ]);
    }

    setTitle("");
    setAuthor("");
    setDate("");
    setContext("");
    console.log(filtered);
  };

  const mapBlog = submitForm
    .filter((val) => {
      if (filterDate === "") {
        return val;
      } else if (val.date.includes(filterDate)) {
        return val;
      }
    })
    .map((submit, i) => {
      return (
        <BlogPosted
          index={i}
          onEdit={onEdit}
          submitForm={submit}
          key={submit.id}
          setSubmitForm={setSubmitForm}
          setIsTrue={setIsTrue}
          reference={ref}
          active={active}
          filterDate={filterDate}
          setFilterDate={setFilterDate}
          filtered={submit}
          SetFiltered={SetFiltered}
        />
      );
    });

  return (
    <>
      {console.log(mapBlog.lenght)}
      <form onSubmit={submit}>
        <div className="form-container">
          <label htmlFor="inp-1" className="inp">
            <input
              type="text"
              id="inp-1"
              placeholder="&nbsp;"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              required
            />
            <span className="label">Title</span>
            <span className="focus-bg"></span>
          </label>

          <label htmlFor="inp-2" className="inp">
            <input
              type="text"
              id="inp-2"
              placeholder="&nbsp;"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
              required
            />
            <span className="label">Author</span>
            <span className="focus-bg"></span>
          </label>

          <label htmlFor="inp-3" className="inp">
            <input
              type="date"
              id="inp-3"
              placeholder="&nbsp;"
              value={date}
              onChange={(e) => {
                console.log(e.target.value);
                setDate(e.target.value);
              }}
              required
            />
            <span className="label">Date</span>
            <span className="focus-bg"></span>
          </label>

          <div>
            <label htmlFor="Content">Content</label>
            <textarea
              name="content"
              cols={40}
              rows={10}
              value={context}
              style={{ resize: "none" }}
              onChange={(e) => {
                setContext(e.target.value);
              }}
            />
          </div>

          <button className="button-79" type="submit">
            Submit
          </button>
        </div>
      </form>

      <FilterByDate
        filterDate={filterDate}
        setFilterDate={setFilterDate}
        active={active}
        setActive={setActive}
        SetFiltered={SetFiltered}
      />

      <div className="postedBlog">
        <div className="postedBlog-2">
          {mapBlog.length === 0 ? (
            <div className="noBlog">No Post to Blog Today</div>
          ) : (
            mapBlog
          )}
        </div>
      </div>
      <div></div>
    </>
  );
}

export default BlogPost;
