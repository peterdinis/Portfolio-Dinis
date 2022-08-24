import { useState } from "react";
import { Box } from "@material-ui/core";
import { style } from "./styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./Knowledge.css";
import { useTranslation } from "react-i18next";
import KnowledgeCard from "./KnowledgeCard";

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
      <h1 className="text-center text-4xl text-black mt-6">
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
          <KnowledgeCard
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            name="React"
          />
          <KnowledgeCard
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
            name="Typescript"
          />
          <KnowledgeCard
            image="https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg"
            name="React-Query"
          />
          <KnowledgeCard
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
            name="Javascript"
          />
          <KnowledgeCard
            image="data:image/png;base64,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"
            name="Nestjs"
          />
          <KnowledgeCard
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png"
            name="Postgresql"
          />
          <KnowledgeCard
            image="https://d1wrxu8gicsgam.cloudfront.net/wp-content/files/django-logo-big.jpg"
            name="Python Django"
          />
          <KnowledgeCard
            image="https://labs.macrosoft.sk/static/pages/img/database/mysql-logo-2.png"
            name="Mysql"
          />
          <KnowledgeCard
            image="https://miro.medium.com/max/256/1*Y6USBdJWvRYVyDPh8fF7_A.png"
            name="MongoDB"
          />

          <KnowledgeCard
            image="data:image/jpeg;base64,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"
            name="Python"
          />

          <KnowledgeCard
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
            name="Html"
          />

          <KnowledgeCard
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            name="Css"
          />

          <KnowledgeCard 
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png"
            name="Graphql"
          />

          <KnowledgeCard  
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-D_tFNlQGKLwzchAhP9cHHCOzKecYqm0bHwE8i6YFZNsPT0ZWrgjl4h11JyVNy0I9CQ&usqp=CAU"
            name="React-Native"
          />
        </div>
      </div>
    </>
  );
}

export default KnowledgeWrapper;
