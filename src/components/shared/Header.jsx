import "./Header.css";

function Header(props) {
  return (
    <>
      <h1 className="baseHeader">{props.name}</h1>
    </>
  );
}

export default Header;
