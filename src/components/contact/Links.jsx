import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Links.css";

function Links() {
  return (
    <div>
      <div className="linksGrid">
        <a
          className="text-red-800 mt-2 text-3xl"
          href="https://www.facebook.com/peto.dinis/"
        >
          <div className="w-18">
            <FacebookIcon />
          </div>
          <h3>Facebook</h3>
        </a>
        <a
          href="https://www.instagram.com/petodinis/"
          className="text-red-800 mt-2 text-3xl"
        >
          <div className="w-18">
            <InstagramIcon />
          </div>
          <h3>Instagram</h3>
        </a>
        <a
          href="https://github.com/peterdinis"
          className="text-red-800 mt-2 text-3xl"
        >
          <div className="w-18">
            <GitHubIcon />
          </div>
          <h3>Github</h3>
        </a>
        <a
          href="https://www.linkedin.com/in/peter-dinis-58520b214/"
          className="text-red-800 mt-2 text-3xl"
        >
          <div className="w-18">
            <LinkedInIcon />
          </div>
          <h3>LinkedIN</h3>
        </a>
      </div>
    </div>
  );
}

export default Links;
