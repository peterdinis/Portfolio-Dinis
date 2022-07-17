import { useStyles } from "../styles";
import "./Knowledge.css";
import KnowledgeWrapper from "../index";

export default function Knowledge() {
  const classes = useStyles();

  return (
    <div className="pb-2">
      <div className={classes.root}>
        <KnowledgeWrapper />
      </div>
    </div>
  );
}
