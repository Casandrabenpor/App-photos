import "./search.css";

export const Search = () => {
  return (
    <form  className="search-form">
      <input type="text" className="search" />
      <button type="submit" placeholder="Search" className="search-button">
        🔎
      </button>
    </form>
  );
};
