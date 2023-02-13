import { useState } from "react";
import { Box } from "@material-ui/core";
import { style } from "./styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./Knowledge.css";
import { useTranslation } from "react-i18next";
import KnowledgeCard from "./KnowledgeCard";
import reactLogo from "../../images/react.png";
import typescriptLogo from "../../images/typescript.png";
import queryLogo from "../../images/query.svg";
import javascriptLogo from "../../images/javascript.png";
import nestjsLogo from "../../images/nestjs.svg";
import pgLogo from "../../images/pg.png";
import firebase from "../../images/firebase.png";
import htmlLogo from "../../images/html.png";
import cssLogo from "../../images/css.png";
import jestLogo from "../../images/jest.png";
import nextLogo from "../../images/next-js.svg";
import netLogo from "../../images/net.png";
import expressLogo from "../../images/express.png";

function KnowledgeWrapper() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-red-900 text-center text-4xl text-black mt-6">
        {t("description.knowledge")}
      </h1>
      <div className="buttonWrapper">
        <button
          className="border border-green-500 bg-green-500 text-2xl text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
          onClick={handleOpen}
        >
          Info
        </button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <p className="infoText">
              Mierne pokročilý - Pre-intermediate, <br />
              Učím sa - I'm learning
            </p>
          </Box>
        </Fade>
      </Modal>

      <div>
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <KnowledgeCard image={reactLogo} name="React" />
          <KnowledgeCard image={typescriptLogo} name="Typescript" />
          <KnowledgeCard image={queryLogo} name="React-Query" />
          <KnowledgeCard image={javascriptLogo} name="Javascript" />
          <KnowledgeCard image={nestjsLogo} name="Nestjs" />
          <KnowledgeCard image={pgLogo} name="Postgresql" />
          <KnowledgeCard image={firebase} name="Firebase" />
          <KnowledgeCard image={htmlLogo} name="Html" />
          <KnowledgeCard image={cssLogo} name="Css" />
          <KnowledgeCard image={nextLogo} name="Nextjs" />
          <KnowledgeCard image={jestLogo} name="Jest" />
          <KnowledgeCard image={netLogo} name="ASP.NET" />
          <KnowledgeCard image={expressLogo} name="Express" />
        </div>
      </div>
    </>
  );
}

export default KnowledgeWrapper;
