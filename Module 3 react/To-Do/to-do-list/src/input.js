import "./input.css";

function Input() {
  return (
    <div className="body">
      <div className="search-input-header">
        <h2>
          <i className="fa-solid fa-square-check"></i>My Todo-s
        </h2>
      </div>
      <div class="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Search"
          name="name"
          id="name"
          required
        />
        <label for="name" className="form__label">
          Search
        </label>
      </div>
    </div>
  );
}

export default Input;
