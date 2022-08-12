import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav bg-blue-700 flex flex-wrap items-center justify-between px-4">
      <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
        <a href="/" className="font-semibold text-blue-100 text-xl ">
          Peter Dinis
        </a>
      </div>

      <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
        htmlFor="menu-btn"
      >
        <span className="navicon bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
        <li className="border-t md:border-none">
          <a
            href="https://www.facebook.com/peto.dinis/"
            className="block md:inline-block px-4 py-3 no-underline text-blue-100 text-xl hover:text-grey-darker font-bold"
          >
            Facebook
          </a>
        </li>
        <li className="border-t md:border-none">
          <a
            href="https://github.com/peterdinis"
            className="block md:inline-block px-4 py-3 no-underline text-blue-100 text-xl hover:text-grey-darker font-bold"
          >
            Github
          </a>
        </li>
        <li className="border-t md:border-none">
          <a
            href="https://www.instagram.com/peterdinis1/"
            className="block md:inline-block px-4 py-3 no-underline text-blue-100 text-xl hover:text-grey-darker font-bold"
          >
            Instagram
          </a>
        </li>

        <li className="border-t md:border-none">
          <a
            href="https://www.linkedin.com/in/peter-dinis-58520b214/"
            className="block md:inline-block px-4 py-3 no-underline text-blue-100 text-xl hover:text-grey-darker font-bold"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
