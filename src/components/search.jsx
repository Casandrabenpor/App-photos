import "./search.css";

export const Search = () => {
  return (
    <form  className="search-form">
      <input type="text" placeholder="Search"className="search" />
      <button type="submit"  className="search-button">
        🔎
      </button>
    </form>
  );
};
