const Header = () => {
  return (
    <nav className="#5c6bc0 indigo lighten-1">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Movies App
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Sass</a>
          </li>
          <li>
            <a href="#">Components</a>
          </li>
          <li>
            <a href="#">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
