import "./searchBar.css";
import Input from "./input";
import Button from "./button";
function SearchBar() {
  return (
    <div className="search">
      <div>
        <Input />
      </div>
      <div className="button-div">
        <Button>
          <i class="fa-solid fa-magnifying-glass"></i>
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
