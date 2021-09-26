import { useState } from "react";
import { Paper, Box} from "@material-ui/core";
import { BorderLinearProgress, useStyles } from "./styles";
import Skill from "./Skill";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./Knowledge.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Knowledge() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="pb-2">
      <div className={classes.root}>
        <Paper className="mt-2 pt-2" elevation={3}>
          <h1 className="text-center text-4xl text-black">
            Moje znalosti
          </h1>
          <div className="buttonWrapper">
            <button className="border border-green-500 bg-green-500 text-2xl text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline" onClick={handleOpen}>Info</button>
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
              Učím sa: I'm learning
            </p>
          </Box>
        </Fade>
      </Modal>
          <div>
            <Skill name="Python" status="Mierne pokročilý" />
            <BorderLinearProgress variant="determinate" value={65} />
          </div>

          <div className="mt-2">
            <Skill name="Javascript" status="Mierne pokročily" />
            <BorderLinearProgress variant="determinate" value={65} />
          </div>

          <div className="mt-2">
            <Skill name="Python Django" status="Mierne pokročilý" />
            <BorderLinearProgress variant="determinate" value={65} />
          </div>

          <div className="mt-2">
            <Skill name="Typescript" status="Mierne pokročilý" />
            <BorderLinearProgress variant="determinate" value={60} />
          </div>

          <div className="mt-2">
            <Skill name="Javascript" status="Mierne pokročilý" />
            <BorderLinearProgress variant="determinate" value={60} />
          </div>

          <div className="mt-2">
            <Skill name="React" status="Pokročilý" />
            <BorderLinearProgress variant="determinate" value={80} />
          </div>

          <div className="mt-2">
            <Skill name="React Redux" status="Pokročilý" />
            <BorderLinearProgress variant="determinate" value={80} />
          </div>

          <div className="mt-2">
            <Skill name="NodeJs" status="Mierne pokročilý" />
            <BorderLinearProgress variant="determinate" value={60} />
          </div>

          <div className="mt-2">
            <Skill name="Figma" status="Mierne pokročilý" />
            <BorderLinearProgress variant="determinate" value={55} />
          </div>

          <div className="mt-2">
            <Skill name="React-Native" status="Mierne pokročilý" />
            <BorderLinearProgress variant="determinate" value={50} />
          </div>

          <div className="mt-2">
            <Skill name="Goolang" status="Učím sa..." />
            <BorderLinearProgress variant="determinate" value={30} />
          </div>

          <div className="mt-2">
            <Skill name="DotNet" status="Učím sa..." />
            <BorderLinearProgress variant="determinate" value={30} />
          </div>

          <div className="mt-2">
            <Skill name="Postgresql" status="Mierne pokročilý" />
            <BorderLinearProgress variant="determinate" value={50} />
          </div>

          <div className="mt-2">
            <Skill name="MongoDB" status="Mierne pokročilý" />
            <BorderLinearProgress variant="determinate" value={50} />
          </div>
        </Paper>
      </div>
    </div>
  );
}
