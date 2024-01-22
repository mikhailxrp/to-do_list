function Header({ listLength }) {
  return (
    <div className="header-wrapper">
      <div className="header-img">
        <img src={require("../img/arrow-down-left.svg").default} alt="arrow" />
      </div>
      <h1 className="title">
        {listLength <= 0 ? "Список дел пуст" : "Список дел"}
      </h1>
      <div className="header-img">
        <img src={require("../img/arrow-down-right.svg").default} alt="arrow" />
      </div>
    </div>
  );
}

export default Header;
