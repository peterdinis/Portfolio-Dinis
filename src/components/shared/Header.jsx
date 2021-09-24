import "./Header.css";

function Header(props) {
  return (
    <div>
      <h1 className="baseHeader">{props.name}</h1>
    </div>
  );
}

export default Header;
