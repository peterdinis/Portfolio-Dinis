import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            Peter Dinis portfolio
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a href="https://github.com/peterdinis?tab=repositories">Github</a>
          <a href="https://www.linkedin.com/in/peter-dinis-58520b214/">LinkedIn</a>
          <a href="https://www.facebook.com/peto.dinis//">Facebook</a>
          <a href="https://www.instagram.com/petodinis/">Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
