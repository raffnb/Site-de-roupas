import "./index.scss";
import searchLogo from "../../assets/lupa.svg";
import profileLogo from "../../assets/profile.png";
import favoriteLogo from "../../assets/hearth.svg";

const Search = () => {
  return (
    <div className="search">
      <div className="search__input-container">
        <img
          src={searchLogo}
          alt="search logo"
          className="search__search-logo"
        />
        <input type="text" placeholder="Search" />
      </div>
      <img src={profileLogo} alt="profile logo" />
      <img src={favoriteLogo} alt="favorite logo" />
    </div>
  );
};

export default Search;