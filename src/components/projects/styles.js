import {
  makeStyles,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

export const BorderLinearProgress = withStyles(() =>
  createStyles({
    root: {
      marginTop: 8,
      height: 10,
      borderRadius: 7,
    },
    bar: {
      borderRadius: 7,
      backgroundColor: "#006699",
    },
  })
)(LinearProgress);

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 11
  },

  foo: {
    fontSize: "1.6rem",
  },

  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2.5rem",
  },

  timeline: {
    paddingTop: "2rem",
  },
});

export const modalStyles = makeStyles(
  createStyles({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    paper: {
      border: '2px solid #000',
    },
  }),
);


export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
