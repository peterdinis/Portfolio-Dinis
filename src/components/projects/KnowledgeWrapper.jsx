import { useState } from "react";
import { Paper, Box } from "@material-ui/core";
import { BorderLinearProgress, style } from "./styles";
import Skill from "./Skill";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./Knowledge.css";
import { useTranslation } from "react-i18next";

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
        <h1 className="text-center text-4xl text-black">
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
                <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
                    <div className="p-4 rounded">
                        <img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
                    </div>
                    <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">React</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
                    <div className="p-4 rounded">
                        <img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" />
                    </div>
                    <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">Typescript</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
                    <div className="p-4 rounded">
                        <img className="w-20" src="https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg" />
                    </div>
                    <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">React-Query</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
                    <div className="p-4 rounded">
                        <img className="w-20" src="https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg" />
                    </div>
                    <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">Javascript</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
                    <div className="p-4 rounded">
                        <img className="w-20" src="https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg" />
                    </div>
                    <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">Nestjs</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
                    <div className="p-4 rounded">
                        <img className="w-20" src="https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg" />
                    </div>
                    <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">Postgresql</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
                    <div className="p-4 rounded">
                        <img className="w-20" src="https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg" />
                    </div>
                    <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">Python Django</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
                    <div className="p-4 rounded">
                        <img className="w-20" src="https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg" />
                    </div>
                    <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">React-Query</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
                    <div className="p-4 rounded">
                        <img className="w-20" src="https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg" />
                    </div>
                    <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">Mysql</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
                    <div className="p-4 rounded">
                        <img className="w-20" src="https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg" />
                    </div>
                    <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">MongoDB</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
                    <div className="p-4 rounded">
                        <img className="w-20" src="https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg" />
                    </div>
                    <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">Python</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
                    <div className="p-4 rounded">
                        <img className="w-20" src="https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg" />
                    </div>
                    <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">Html</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
                    <div className="p-4 rounded">
                        <img className="w-20" src="https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg" />
                    </div>
                    <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">Css</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default KnowledgeWrapper;
