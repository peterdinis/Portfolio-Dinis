import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Paper } from "@material-ui/core";
import { useStyles } from "./styles";

export default function TimeLine() {
  const classes = useStyles();
  return (
    <div className="pt-2">
      <Paper>
        <h1 className="text-center text-4xl mt-4">Moje pracovné skúsenosti</h1>
        <Timeline className={classes.timeline} align="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="text-2xl">
              2019-2020 (1-rok) Školská knižnica projekt Unicorn React-Node-MongoDB
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="text-2xl">
              2020-2020 (3-týždne) Erazmus Firma Think Easy React.js
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
            </TimelineSeparator>
            <TimelineContent className="text-2xl">
              2021 - 2021 (3-Mesiace) Firma Think Easy React.js Typescript
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Paper>
    </div>
  );
}
