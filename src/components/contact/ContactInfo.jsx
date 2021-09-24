import { Paper } from "@material-ui/core";
import Links from "./Links";
import { Mailto } from "./Mailto";
import "./Links.css";
function ContactInfo() {

  return (
    <div className="mt-1">
      <div>
        <Paper elevation={3}>
          <h1 className="infoHead">Email</h1>
          <p className="infoHead">
            Ak ťa moja tvorba zaujala tak mi napíš na:{" "}
            <Mailto href="mailto:pdinis1@gmail.com">
              pdinis1@gmail.com
            </Mailto>
          </p>
          <Links />
        </Paper>
      </div>
    </div>
  );
}

export default ContactInfo;
