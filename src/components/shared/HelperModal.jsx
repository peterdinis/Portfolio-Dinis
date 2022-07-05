import { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useTranslation } from "react-i18next";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export default function SimpleModal() {
  const { t } = useTranslation();
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 className="text-3xl text-red-700 text-center" id="simple-modal-title">
        {t("description.uuappHeader")}
      </h2>
      <p className="mt-4 text-2xl font-bold" id="simple-modal-description">
        {t("description.uuappText")}
      </p>
    </div>
  );

  return (
    <>
      <button
        className="mt-2 text-red-800 text-2xl"
        type="button"
        onClick={handleOpen}
      >
        Uuapp info
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
}
